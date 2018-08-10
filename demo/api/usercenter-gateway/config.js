// usercenter-gateway config

module.exports = {
    postSnsWeixinBindV2: {
        url: '/v2/sns/weixin/bind',
        method: 'post',
        baseURL: '/usercenter-gateway/api',
    },
    postSnsWeixinLoginVerifyV2: {
        url: '/v2/sns/weixin/login/verify',
        method: 'post',
        baseURL: '/usercenter-gateway/api',
    },
    postSnsWeixinUnbindV2: {
        url: '/v2/sns/weixin/unbind',
        method: 'post',
        baseURL: '/usercenter-gateway/api',
    },
};
