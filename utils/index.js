const utils = {
    formatResourceUrl(url) {
        const urlReg = /http[s]*:\/\/(.*)\.(.*)\.51\.env/;
        const matches = url.match(urlReg);

        return {
            url: matches[0],
            tag: matches[1],
            server: matches[2]
        }
    },

    formatApiName(url, basePath, serverName, method) {
        const baseURL = utils.getBaseURL(url, basePath, serverName);
        let parts = url.replace(baseURL, '').split(/[\/|-]/);

        parts = parts.filter(part => {
            return !!part && part !== '/';
        });
        // 把版本放到后面
        parts.push(parts.shift());

        const str = parts.reduce((a, b) => {

            return utils.upperCase(a) + utils.upperCase(b);
        });

        return method + str;
    },

    getBaseURL(url, basePath, serverName) {
        if (basePath && basePath !== '/' && url.indexOf(basePath) !== -1) {
            return basePath;
        }

        return `/${serverName}/api`;
    },

    formatApiPath(url, basePath, serverName) {
        const baseURL = utils.getBaseURL(url, basePath, serverName);

        return url.replace(baseURL, '');
    },

    inNeedController(api, ctrl, need) {
        if (!need || need.length === 0) {
            return true;
        }

        for (let j = 0; j < need.length; j++) {
            if (ctrl.includes(need[j])) {
                return true
            } else if (typeof need[j] === 'object') {
                const item = need[j];

                if (ctrl.includes(item.controller) && item.apis.includes(api)) {
                    return true
                }
            }
        }

        return false;
    },


    getParameter(data, definitions) {
        const parameters = data.parameters || [];
        const result = {
            params: [],
            data: [],
            headers: [],
            description: data.summary
        };
        const resultMap = {
            'body': result.data,
            'formData': result.data,
            'query': result.params,
            'path': result.params,
            'header': result.headers
        };

        for (let i = 0; i < parameters.length; i++) {
            let obj = {};

            if (parameters[i].schema) {
                parameters[i].default = utils.getResponseCurry(parameters[i].schema, definitions);
            }

            resultMap[parameters[i].in || 'query'].push(parameters[i]);
        }

        return result;
    },

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },

    upperCase(str) {
        const reg = /(\w)(.*)/;

        return str.replace(/[{\}\.]/g, '').match(reg)[1].toUpperCase() + RegExp.$2;
    },

    getRequired(apiData, ignore = {}) {
        const source = JSON.parse(JSON.stringify(apiData));

        for (let i = 0; i < source.length; i++) {
            let obj = source[i];
            const result = {
                params: [],
                data: [],
                headers: []
            };

            for (let attr in result) {
                (obj[attr] || []).forEach(item => {
                    if (item.required && !(ignore[attr] || []).includes(item.name)) {
                        result[attr].push(item);
                    }
                });
            }

            Object.assign(obj, result);
        }

        return source;
    },

    wrapApiModel(apiName, config) {

        return {
            apiName: apiName,
            url: config.url,
            baseURL: config.baseURL,
            method: config.method,
            extra: utils.convertToArray(config),
            params: [],
            data: [],
            headers: []
        }
    },

    convertToArray(obj) {
        const result = [];

        delete obj.url;
        delete obj.method;
        delete obj.baseURL;

        const keys = Object.keys(obj);

        keys.forEach(key => {
            result.push({
                name: key,
                value: obj[key]
            });
        });

        return result;
    },

    filledBlank(str, count) {
        return str + new Array(count).join(' ').slice(0, count - str.length);
    },

    parseResponse(config = {}, definitions) {
        const schema = config.schema || {};
        const curryStepCountMap = {};
        let result = utils.getResponseCurry(schema, definitions, curryStepCountMap);

        return JSON.stringify(result, undefined, 4);
    },

    getResponseCurry(config, definitions, curryStepCountMap = {}) {
        let result;

        if (config.type === 'array') {
            result = [];

            const ref = config.items.$ref;

            if (ref) {
                if (curryStepCountMap[ref]) {
                    curryStepCountMap[ref]++;
                } else {
                    curryStepCountMap[ref] = 1;
                }
                // 递归循环不超过10层
                if (curryStepCountMap[ref] > 10) {
                    return ref;
                }

                const model = definitions[ref.replace('#/definitions/', '')].properties || {};

                result.push(utils.getResponseByRef(model, definitions, curryStepCountMap));
            }
        } else if (config.$ref) {
            if (curryStepCountMap[config.$ref]) {
                curryStepCountMap[config.$ref]++;
            } else {
                curryStepCountMap[config.$ref] = 1;
            }

            if (curryStepCountMap[config.$ref] > 10) {
                return config.$ref;
            }

            const model = definitions[config.$ref.replace('#/definitions/', '')].properties || {};

            result = utils.getResponseByRef(model, definitions, curryStepCountMap);
        } else if (config.type === 'object') {
            result = utils.getResponseByRef(config.properties || {}, definitions, curryStepCountMap);
        } else {
            result = `(${config.type}) ${config.description}`;
        }

        return result;
    },

    getResponseByRef(model, definitions, curryStepCountMap) {
        const result = {};
        const keys = Object.keys(model);

        for (let i = 0; i < keys.length; i++) {
            let item = model[keys[i]];

            result[keys[i]] = this.getResponseCurry(item, definitions, curryStepCountMap);
        }

        return result;
    },

    typeof(value) {
        const type = Object.prototype.toString.call(value);

        return type.slice(8, -1).toLowerCase();
    },

    object2String(obj, deep = 0) {
        if (typeof obj !== 'object') {
            return `'${obj.replace(/\r|\n/g, '')}',\n`;
        }

        let str = '';

        deep++;
        const tab = new Array(deep - 1).fill('\t').join('');

        for (let attr in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, attr)) {
                let value = '';

                if (utils.typeof(obj[attr]) === 'object') {
                    if (Object.keys(obj[attr]).length > 0) {
                        value = `{\n${utils.object2String(obj[attr], deep)}\n${tab}}`;
                    } else {
                        value = '{}';
                    }
                } else if (utils.typeof(obj[attr]) === 'array') {
                    value = `[{value}]`;
                    let arrayStr = '';

                    for (let i = 0; i < obj[attr].length; i++) {
                        if (utils.typeof(obj[attr][i]) === 'object') {
                            if (Object.keys(obj[attr][i]).length > 0) {
                                arrayStr += `{\n${utils.object2String(obj[attr][i], deep)},\n${tab}}`;
                            } else {
                                arrayStr += '{}';
                            }
                        } else {
                            arrayStr += `'${obj[attr][i]}',\n`;
                        }
                    }

                    value = value.replace('{value}', arrayStr).replace('}]', `}]`);
                } else {
                    value = `'${obj[attr].replace(/\r|\n/g, '')}'`;
                }
                str += `${tab}${/^\w+$/g.test(attr) ? attr : `'${attr}'`}: ${value},\n`.replace(',,', ',');
            }
        }

        return str.slice(0, -1);
    }

};

module.exports = utils;