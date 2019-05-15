const axios = require('../axios');
const config = require('./config');

module.exports = {
    postWebMiniSnsWeixinBindV2: param => axios(Object.assign(config.postWebMiniSnsWeixinBindV2, param)),
    getWebMiniSnsWeixinInfoV2: param => axios(Object.assign(config.getWebMiniSnsWeixinInfoV2, param)),
    postWebMiniSnsWeixinLoginV2: param => axios(Object.assign(config.postWebMiniSnsWeixinLoginV2, param)),
    postWebMiniSnsWeixinUnbindV2: param => axios(Object.assign(config.postWebMiniSnsWeixinUnbindV2, param)),
    postWebMiniSnsWeixinWeixinInfoV2: param => axios(Object.assign(config.postWebMiniSnsWeixinWeixinInfoV2, param)),
    postWebMiniSnsWeixinWeixinMobileV2: param => axios(Object.assign(config.postWebMiniSnsWeixinWeixinMobileV2, param)),
};
