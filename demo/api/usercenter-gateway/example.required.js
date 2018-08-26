import UsercenterGateway from './api/usercenter-gateway/api';


/**
* 绑定    /v2/sns/weixin/bind
*
*/
UsercenterGateway.postSnsWeixinBindV2({
    params: {
        userId: 'undefined', //UserId
    },
    data: {
        bindRequest: {
    "bindOperation": "(integer) 是否执行强制绑定微信",
    "bindOptimized": "(integer) 是否执行强制绑定微信流程",
    "code": "(string) 接口调用凭证",
    "snsBindOperation": "(integer) 第三方登录时是否需要覆盖原来的第三方绑定信息, 0或者空:覆盖,1:不覆盖",
    "username": "(string) 用户名(加密)",
    "usernamePassword": "(string) 密码(加密)"
}, //bindRequest
    },
    headers: {
        'X-Enniu-Sign': 'undefined', //签名内容
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
        loginRequest: {
    "bindMobile": "(string) 需要绑定的手机号(加密)",
    "code": "(string) 接口调用凭证",
    "snsBindOperation": "(integer) 第三方登录时是否需要覆盖原来的第三方绑定信息, 0或者空:覆盖,1:不覆盖 ",
    "snsLoginOperation": "(integer) 第三方登录时需要做的操作,比如绑定手机,0或者空:原来逻辑，1:绑定手机",
    "ticket": "(string) 风控校验操作上下文ID",
    "verifyCode": "(string) 绑定手机号时校验的验证码"
}, //loginRequest
    },
    headers: {
        'X-Enniu-Sign': 'undefined', //签名内容
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
        userId: 'undefined', //UserId
    },
    headers: {
        'X-Enniu-Sign': 'undefined', //签名内容
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改用户信息    /v2/user/info/modify
*
*/
UsercenterGateway.postUserInfoModifyV2({
    params: {
        userId: 'undefined', //UserId
    },
    data: {
        userInfoModifyRequest: {
    "autoReceiveMail": "(integer) 是否自动接收邮件:0-否,1-是",
    "autoReceiveOnlineBank": "(integer) 是否自动接收网银:0-否,1-是",
    "avatarUrl": "(string) 头像url",
    "birthday": "(string) 用户生日",
    "nickName": "(string) 昵称",
    "sex": "(integer) 性别:0保密,1男,2女"
}, //userInfoModifyRequest
    },
    headers: {
        'X-Enniu-Sign': 'undefined', //签名内容
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
