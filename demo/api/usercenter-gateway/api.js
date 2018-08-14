const axios = require('../axios');
const config = require('./config');

module.exports = {
    postSnsWeixinBindV2: param => axios(Object.assign(config.postSnsWeixinBindV2, param)),
    postSnsWeixinLoginVerifyV2: param => axios(Object.assign(config.postSnsWeixinLoginVerifyV2, param)),
    postSnsWeixinUnbindV2: param => axios(Object.assign(config.postSnsWeixinUnbindV2, param)),
};
