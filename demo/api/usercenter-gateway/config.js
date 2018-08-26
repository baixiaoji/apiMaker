// usercenter-gateway config

module.exports = {
    postSnsWeixinBindV2: {
        url: '/v2/sns/weixin/bind',
        method: 'post',
        baseURL: '/api.u51.com/usercenter-gateway/api',
    },
    postSnsWeixinLoginVerifyV2: {
        url: '/v2/sns/weixin/login/verify',
        method: 'post',
        baseURL: '/api.u51.com/usercenter-gateway/api',
    },
    postSnsWeixinUnbindV2: {
        url: '/v2/sns/weixin/unbind',
        method: 'post',
        baseURL: '/api.u51.com/usercenter-gateway/api',
    },
    postUserInfoModifyV2: {
        url: '/v2/user/info/modify',
        method: 'post',
        baseURL: '/api.u51.com/usercenter-gateway/api',
    },
};
