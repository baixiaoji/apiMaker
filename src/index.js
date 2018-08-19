const axios = require('axios');
const utils = require('../utils/index');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const qs = require('qs-url').default;
const handlebars = require('../utils/handlebars');

class ApiMaker {
    constructor(config) {
        this.config = config || {};
    }

    init() {
        const apis = this.config.apis || [];

        for (let i = 0; i < apis.length; i++) {
            this.getSwaggerResource(apis[i]);
        }
    }

    getSwaggerResource(item) {
        const urlInfo = utils.formatResourceUrl(item.swagger);

        axios.get(urlInfo.url + '/swagger-resources').then(async result => {
            const versions = result.data || [];
            const versionsData = [];

            for (let i = 0; i < versions.length; i++) {
                const data = await axios.get(urlInfo.url + versions[i].location);

                versionsData.push(data.data || {});
            }

            const apiData = await this.formatData(versionsData, urlInfo.server, item, urlInfo.tag);

            this.genApis(apiData, urlInfo.server);
        });
    }

    async formatData(data, serverName, apiConfig, tagName) {
        const apis = [];

        for (let j = 0; j < data.length; j++) {
            const item = data[j];
            const basePath = item.basePath;
            const paths = item.paths;
            const pathKeys = Object.keys(paths);

            for (let i = 0; i < pathKeys.length; i++) {
                const apiItem = paths[pathKeys[i]];
                const method = Object.keys(apiItem)[0];
                const apiData = apiItem[method];

                if (utils.inNeedController(apiData.tags, apiConfig.controllers)) {
                    const params = {
                        apiName: `/${serverName}/api${utils.formatApiPath(pathKeys[i], basePath, serverName)}`,
                        type: method,
                        controllerName: apiData.tags[0],
                        serviceName: serverName,
                        tag: tagName,
                        group: serverName,
                    };
                    const url = qs.addQuery(params, 'http://ares.51.nb/ares-swagger/api/v1/apiTest/seviceApiInfo');
                    const response = await axios({
                        url: url,
                        method: 'get',
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
                            Cookie: this.config.cookie || '',
                            Accept: 'application/json, text/plain, */*'
                        }
                    }).catch(err => {
                        console.log('应该是cookie过期了，请更换cookie\n' + (err || {}).message);
                    });
                    let responseStr = '';

                    try {
                        responseStr = JSON.stringify(response.data.data.response.model, null, 4);
                    } catch (err) {
                        console.log(err);
                    }

                    apis.push({
                        apiName: utils.formatApiName(pathKeys[i], basePath, serverName, method),
                        url: utils.formatApiPath(pathKeys[i], basePath, serverName),
                        baseURL: utils.getBaseURL(pathKeys[i], basePath, serverName),
                        method,
                        ...utils.getParameter(apiData),
                        response: responseStr
                    });
                }
            }
        }

        return apis;
    }

    genApis(apiData, serverName) {
        const output = path.resolve(process.cwd(), this.config.output, `./${serverName}`);
        const outputConfig = `${output}/config.js`;
        const outputApi = `${output}/api.js`;
        const outputRequiredExample = `${output}/example.required.js`;
        const outputFullExample = `${output}/example.full.js`;
        const configTplPath = path.resolve(__dirname, `../template/config.js.hbs`);
        const apiTplPath = path.resolve(__dirname, `../template/api.js.hbs`);
        const exampleRequiredTplPath = path.resolve(__dirname, `../template/example.required.js.hbs`);
        const exampleFullTplPath = path.resolve(__dirname, `../template/example.full.js.hbs`);

        fs.access(output, err => {
            if (err) {
                mkdirp(output, err => {
                    if (err) console.error(err)
                    const requiredData = utils.getRequired(apiData, this.config.ignore);

                    this.genFile(configTplPath, outputConfig, apiData, serverName);
                    this.genFile(apiTplPath, outputApi, apiData, serverName);
                    this.genFile(exampleFullTplPath, outputFullExample, apiData, serverName);
                    this.genFile(exampleRequiredTplPath, outputRequiredExample, requiredData, serverName);
                });
            } else {
                this.updateFile(configTplPath, outputConfig, apiTplPath, outputApi, apiData, serverName);
                // example文件无需更新，直接替换
                const requiredData = utils.getRequired(apiData, this.config.ignore);

                this.genFile(exampleFullTplPath, outputFullExample, apiData, serverName);
                this.genFile(exampleRequiredTplPath, outputRequiredExample, requiredData, serverName);
            }
        })
    }

    genFile(templatePath, outputPath, apiData, serverName) {
        fs.readFile(templatePath, 'utf8', (err, data) => {
            if (err) throw err;

            const template = handlebars.compile(data);
            const content = template({
                apis: apiData,
                serverName,
                importTpl: this.config.importTpl,
                apiTpl: this.config.apiTpl
            });

            fs.writeFile(outputPath, content, 'utf8', (err) => {
                if (err) throw err;
                console.log(`${outputPath} 生成完毕\n`);
            });
        });
    }

    updateFile(configTplPath, outputConfig, apiTplPath, outputApi, apiData, serverName) {
        const configs = require(outputConfig);
        const apiNames = Object.keys(configs);

        for (let i = 0; i < apiNames.length; i++) {
            let exist = false;

            for (let j = 0; j < apiData.length; j++) {
                let item = apiData[j];

                if (apiNames[i] === item.apiName) {
                    item.extra = utils.convertToArray(configs[apiNames[i]]);
                    exist = true;
                    break;
                }
            }

            if (!exist) {
                apiData.push(utils.wrapApiModel(apiNames[i], configs[apiNames[i]]))
            }
        }

        this.genFile(configTplPath, outputConfig, apiData, serverName);
        this.genFile(apiTplPath, outputApi, apiData, serverName);
    }
}

module.exports = ApiMaker;