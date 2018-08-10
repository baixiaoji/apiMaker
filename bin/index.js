#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const app = require('cmdu');
const ApiMaker = require('../src/index');

app
    .language('zh-CN')
    .version = require('../package.json').version;

app
    .action(function() {
        this.showHelp();
    });

app
    .command('create', '根据swagger文档自动生成axios请求相关代码.')
    .option('-c, --config <string>', 'swagger文档配置文件')
    .action(async function(options) {
        let opts = {};
        let configPath = path.resolve(process.pwd(), './.api.config.js');

        try {
            if (options.config) {
                opts = require(path.resolve(process.pwd(), options.config));
            } else {
                opts = require(configPath);
            }
        } catch(err) {
            console.log('配置文件路径错误');
            throw new Error(err);
        }

        new ApiMaker(opts);
    });