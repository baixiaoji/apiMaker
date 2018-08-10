import UsercenterGateway from './api/usercenter-gateway/api';


/**
* 绑定    /v2/sns/weixin/bind
*
*/
UsercenterGateway.postSnsWeixinBindV2({
    params: {
        userId: '', //UserId
    },
    data: {
        bindRequest: '', //bindRequest
    },
    headers: {
        'X-Enniu-Sign': '', //签名内容
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 登陆    /v2/sns/weixin/login/verify
*
*/
UsercenterGateway.postSnsWeixinLoginVerifyV2({
    data: {
        loginRequest: '', //loginRequest
    },
    headers: {
        'X-Enniu-Sign': '', //签名内容
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 解绑    /v2/sns/weixin/unbind
*
*/
UsercenterGateway.postSnsWeixinUnbindV2({
    params: {
        userId: '', //UserId
    },
    headers: {
        'X-Enniu-Sign': '', //签名内容
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
