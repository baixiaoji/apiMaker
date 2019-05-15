import UsercenterGateway from './api/usercenter-gateway/api';


/**
* 绑定    /v2/web/mini/sns/weixin/bind
*
*/
UsercenterGateway.postWebMiniSnsWeixinBindV2({
    params: {
        userId: 'undefined', //UserId
    },
    data: {
        wxRequest: {
    "code": "(string) 接口调用凭证",
    "encryptedData": "(string) 包括敏感数据在内的完整用户信息的加密数据",
    "iv": "(string) 加密算法的初始向量",
    "mobileEncryptedData": "(string) 手机号的加密数据",
    "mobileIv": "(string) 手机号的加密的初始向量",
    "rawData": "(string) 不包括敏感信息的原始数据字符串，用于计算签名",
    "signature": "(string) 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息",
    "target": "(string) 重定向地址"
}, //wxRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取关联的微信用户信息    /v2/web/mini/sns/weixin/info
*
*/
UsercenterGateway.getWebMiniSnsWeixinInfoV2({
    params: {
        userId: 'undefined', //UserId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 登陆    /v2/web/mini/sns/weixin/login
*
*/
UsercenterGateway.postWebMiniSnsWeixinLoginV2({
    data: {
        wxRequest: {
    "code": "(string) 接口调用凭证",
    "encryptedData": "(string) 包括敏感数据在内的完整用户信息的加密数据",
    "iv": "(string) 加密算法的初始向量",
    "mobileEncryptedData": "(string) 手机号的加密数据",
    "mobileIv": "(string) 手机号的加密的初始向量",
    "rawData": "(string) 不包括敏感信息的原始数据字符串，用于计算签名",
    "signature": "(string) 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息",
    "target": "(string) 重定向地址"
}, //wxRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 解绑    /v2/web/mini/sns/weixin/unbind
*
*/
UsercenterGateway.postWebMiniSnsWeixinUnbindV2({
    params: {
        userId: 'undefined', //UserId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据code查询微信用户信息    /v2/web/mini/sns/weixin/weixinInfo
*
*/
UsercenterGateway.postWebMiniSnsWeixinWeixinInfoV2({
    data: {
        wxRequest: {
    "code": "(string) 接口调用凭证",
    "encryptedData": "(string) 包括敏感数据在内的完整用户信息的加密数据",
    "iv": "(string) 加密算法的初始向量",
    "mobileEncryptedData": "(string) 手机号的加密数据",
    "mobileIv": "(string) 手机号的加密的初始向量",
    "rawData": "(string) 不包括敏感信息的原始数据字符串，用于计算签名",
    "signature": "(string) 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息",
    "target": "(string) 重定向地址"
}, //wxRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据code查询微信用户的绑定手机号    /v2/web/mini/sns/weixin/weixinMobile
*
*/
UsercenterGateway.postWebMiniSnsWeixinWeixinMobileV2({
    data: {
        mobileData: {
    "code": "(string) 微信授权码",
    "encryptedData": "(string) 包含手机号在内的信息加密数据",
    "iv": "(string) 加密算法初始向量"
}, //mobileData
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
