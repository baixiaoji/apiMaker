const config = require('./config');

function sendRequest() {}

module.exports = {
    postSnsWeixinBindV2: param => sendRequest(config.postSnsWeixinBindV2, param),
    postSnsWeixinLoginVerifyV2: param => sendRequest(config.postSnsWeixinLoginVerifyV2, param),
    postSnsWeixinUnbindV2: param => sendRequest(config.postSnsWeixinUnbindV2, param),
};
