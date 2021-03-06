import UsercenterGateway from './api/usercenter-gateway/api';


/**
 * 绑定    /v2/web/mini/sns/weixin/bind
 *
 * @params      { String   }      h_sign                        H5签名
 * @params      { String   }      h_t                           H5时间戳
 * @params      { String   }      h_v                           H5 js版本(md5)
 * @params      { String   }      md                            H5环境检测脚本数据
 * @params      { Integer  }      scenes                        场景，0：默认手动触发，不需要传，1：自动提交，必传，2:pc场景
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      wtf                           Web Track Fingerprint(优先从Cookie中获取)
 * @params      { Integer  }      big_app_id                    产品ID(web下是必输项)
 * @params      { Integer  }      app_id                        子产品ID(web下是必输项)
 * @params      { Integer  }      plat                          平台(web下是必输项)
 * @params      { String   }      channel                       App渠道(web下是必输项)
 * @params      { Integer  }      network_type                  网络类型
 * @params      { String   }      version                       版本
 * @params      { String   }      system_version                系统版本
 * @params      { Number   }      lng                           经度
 * @params      { Number   }      lat                           纬度
 * @params      { String   }      province                      省份
 * @params      { String   }      city                          城市
 * @params      { String   }      nonce                         当前请求唯一随机串(暂时不用)
 * @params      { Integer  }      width                         设备屏幕的宽度
 * @params      { Integer  }      height                        设备屏幕的高度
 * @params      { Integer  }      userId                        UserId
 * @params      { Object   }      wxRequest                     wxRequest
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Enniu-End                   X-Enniu-End
 */
UsercenterGateway.postWebMiniSnsWeixinBindV2({
    params: {
        h_sign: 'undefined',
        h_t: 'undefined',
        h_v: 'undefined',
        md: 'undefined',
        scenes: 'undefined',
        device_key: 'undefined',
        dgf: 'undefined',
        wtf: 'undefined',
        big_app_id: 'undefined',
        app_id: 'undefined',
        plat: 'undefined',
        channel: 'undefined',
        network_type: 'undefined',
        version: 'undefined',
        system_version: 'undefined',
        lng: 'undefined',
        lat: 'undefined',
        province: 'undefined',
        city: 'undefined',
        nonce: 'undefined',
        width: 'undefined',
        height: 'undefined',
        userId: 'undefined',
    },
    data: {
        code: '(string) 接口调用凭证',
        encryptedData: '(string) 包括敏感数据在内的完整用户信息的加密数据',
        iv: '(string) 加密算法的初始向量',
        mobileEncryptedData: '(string) 手机号的加密数据',
        mobileIv: '(string) 手机号的加密的初始向量',
        rawData: '(string) 不包括敏感信息的原始数据字符串，用于计算签名',
        signature: '(string) 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息',
        target: '(string) 重定向地址',
    },
    headers: {
        Authorization: 'encrypt 4ZHZDMGjMD5RFKyAeDiXZpPtIXS8y7TXPPvWCmN9YNs9CxZfbRQ0ruj8sH2LKM+FmKBHc+i3rZ1hp2YfV5HBsQ==', //user token
        'X-Enniu-End': 'undefined', //X-Enniu-End
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "city": "(string) 微信-城市",
    "country": "(string) 微信-国家",
    "createdTime": "(integer) 创建时间",
    "headimgurl": "(string) 微信-头像",
    "modifiedTime": "(integer) 修改时间",
    "nickName": "(string) 微信-昵称",
    "province": "(string) 微信-省份",
    "sex": "(string) 微信-性别",
    "unionId": "(string) 微信-UnionId",
    "userId": "(integer) UserId"
}
*/



/**
 * 获取关联的微信用户信息    /v2/web/mini/sns/weixin/info
 *
 * @params      { String   }      h_sign                        H5签名
 * @params      { String   }      h_t                           H5时间戳
 * @params      { String   }      h_v                           H5 js版本(md5)
 * @params      { String   }      md                            H5环境检测脚本数据
 * @params      { Integer  }      scenes                        场景，0：默认手动触发，不需要传，1：自动提交，必传，2:pc场景
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      wtf                           Web Track Fingerprint(优先从Cookie中获取)
 * @params      { Integer  }      big_app_id                    产品ID(web下是必输项)
 * @params      { Integer  }      app_id                        子产品ID(web下是必输项)
 * @params      { Integer  }      plat                          平台(web下是必输项)
 * @params      { String   }      channel                       App渠道(web下是必输项)
 * @params      { Integer  }      network_type                  网络类型
 * @params      { String   }      version                       版本
 * @params      { String   }      system_version                系统版本
 * @params      { Number   }      lng                           经度
 * @params      { Number   }      lat                           纬度
 * @params      { String   }      province                      省份
 * @params      { String   }      city                          城市
 * @params      { String   }      nonce                         当前请求唯一随机串(暂时不用)
 * @params      { Integer  }      width                         设备屏幕的宽度
 * @params      { Integer  }      height                        设备屏幕的高度
 * @params      { Integer  }      userId                        UserId
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Enniu-End                   X-Enniu-End
 */
UsercenterGateway.getWebMiniSnsWeixinInfoV2({
    params: {
        h_sign: 'undefined',
        h_t: 'undefined',
        h_v: 'undefined',
        md: 'undefined',
        scenes: 'undefined',
        device_key: 'undefined',
        dgf: 'undefined',
        wtf: 'undefined',
        big_app_id: 'undefined',
        app_id: 'undefined',
        plat: 'undefined',
        channel: 'undefined',
        network_type: 'undefined',
        version: 'undefined',
        system_version: 'undefined',
        lng: 'undefined',
        lat: 'undefined',
        province: 'undefined',
        city: 'undefined',
        nonce: 'undefined',
        width: 'undefined',
        height: 'undefined',
        userId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt 4ZHZDMGjMD5RFKyAeDiXZpPtIXS8y7TXPPvWCmN9YNs9CxZfbRQ0ruj8sH2LKM+FmKBHc+i3rZ1hp2YfV5HBsQ==', //user token
        'X-Enniu-End': 'undefined', //X-Enniu-End
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "city": "(string) 微信-城市",
    "country": "(string) 微信-国家",
    "createdTime": "(integer) 创建时间",
    "headimgurl": "(string) 微信-头像",
    "modifiedTime": "(integer) 修改时间",
    "nickName": "(string) 微信-昵称",
    "province": "(string) 微信-省份",
    "sex": "(string) 微信-性别",
    "unionId": "(string) 微信-UnionId",
    "userId": "(integer) UserId"
}
*/



/**
 * 登陆    /v2/web/mini/sns/weixin/login
 *
 * @params      { String   }      h_sign                        H5签名
 * @params      { String   }      h_t                           H5时间戳
 * @params      { String   }      h_v                           H5 js版本(md5)
 * @params      { String   }      md                            H5环境检测脚本数据
 * @params      { Integer  }      scenes                        场景，0：默认手动触发，不需要传，1：自动提交，必传，2:pc场景
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      wtf                           Web Track Fingerprint(优先从Cookie中获取)
 * @params      { Integer  }      big_app_id                    产品ID(web下是必输项)
 * @params      { Integer  }      app_id                        子产品ID(web下是必输项)
 * @params      { Integer  }      plat                          平台(web下是必输项)
 * @params      { String   }      channel                       App渠道(web下是必输项)
 * @params      { Integer  }      network_type                  网络类型
 * @params      { String   }      version                       版本
 * @params      { String   }      system_version                系统版本
 * @params      { Number   }      lng                           经度
 * @params      { Number   }      lat                           纬度
 * @params      { String   }      province                      省份
 * @params      { String   }      city                          城市
 * @params      { String   }      nonce                         当前请求唯一随机串(暂时不用)
 * @params      { Integer  }      width                         设备屏幕的宽度
 * @params      { Integer  }      height                        设备屏幕的高度
 * @params      { Object   }      wxRequest                     wxRequest
 * @params      { String   }      X-Enniu-End                   X-Enniu-End
 */
UsercenterGateway.postWebMiniSnsWeixinLoginV2({
    params: {
        h_sign: 'undefined',
        h_t: 'undefined',
        h_v: 'undefined',
        md: 'undefined',
        scenes: 'undefined',
        device_key: 'undefined',
        dgf: 'undefined',
        wtf: 'undefined',
        big_app_id: 'undefined',
        app_id: 'undefined',
        plat: 'undefined',
        channel: 'undefined',
        network_type: 'undefined',
        version: 'undefined',
        system_version: 'undefined',
        lng: 'undefined',
        lat: 'undefined',
        province: 'undefined',
        city: 'undefined',
        nonce: 'undefined',
        width: 'undefined',
        height: 'undefined',
    },
    data: {
        code: '(string) 接口调用凭证',
        encryptedData: '(string) 包括敏感数据在内的完整用户信息的加密数据',
        iv: '(string) 加密算法的初始向量',
        mobileEncryptedData: '(string) 手机号的加密数据',
        mobileIv: '(string) 手机号的加密的初始向量',
        rawData: '(string) 不包括敏感信息的原始数据字符串，用于计算签名',
        signature: '(string) 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息',
        target: '(string) 重定向地址',
    },
    headers: {
        'X-Enniu-End': 'undefined', //X-Enniu-End
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoPwd": "(integer) 密码是否由系统自动生成(0不是，1是)",
    "avatarUrl": "(string) 头像地址",
    "birthday": "(string) 用户生日",
    "cookieValue": "(string) cookieValue",
    "from": "(string) 登录方式",
    "loginTime": "(string) 登录时间",
    "mobile": "(string) 手机号",
    "nickName": "(string) 用户昵称",
    "outId": "(string) 第三方账号登录的openId",
    "redirectTo": "(string) 重定向地址",
    "regTime": "(string) 注册时间",
    "register": "(boolean) 标示当前登陆操作是否自动注册了新账户",
    "sex": "(integer) 性别(0保密，1男，2女)",
    "token": "(string) 用户token",
    "tokenExpiredTime": "(integer) Token有效时长(秒)",
    "userId": "(integer) 兼容老的用户id",
    "userName": "(string) 用户名"
}
*/



/**
 * 解绑    /v2/web/mini/sns/weixin/unbind
 *
 * @params      { String   }      h_sign                        H5签名
 * @params      { String   }      h_t                           H5时间戳
 * @params      { String   }      h_v                           H5 js版本(md5)
 * @params      { String   }      md                            H5环境检测脚本数据
 * @params      { Integer  }      scenes                        场景，0：默认手动触发，不需要传，1：自动提交，必传，2:pc场景
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      wtf                           Web Track Fingerprint(优先从Cookie中获取)
 * @params      { Integer  }      big_app_id                    产品ID(web下是必输项)
 * @params      { Integer  }      app_id                        子产品ID(web下是必输项)
 * @params      { Integer  }      plat                          平台(web下是必输项)
 * @params      { String   }      channel                       App渠道(web下是必输项)
 * @params      { Integer  }      network_type                  网络类型
 * @params      { String   }      version                       版本
 * @params      { String   }      system_version                系统版本
 * @params      { Number   }      lng                           经度
 * @params      { Number   }      lat                           纬度
 * @params      { String   }      province                      省份
 * @params      { String   }      city                          城市
 * @params      { String   }      nonce                         当前请求唯一随机串(暂时不用)
 * @params      { Integer  }      width                         设备屏幕的宽度
 * @params      { Integer  }      height                        设备屏幕的高度
 * @params      { Integer  }      userId                        UserId
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Enniu-End                   X-Enniu-End
 */
UsercenterGateway.postWebMiniSnsWeixinUnbindV2({
    params: {
        h_sign: 'undefined',
        h_t: 'undefined',
        h_v: 'undefined',
        md: 'undefined',
        scenes: 'undefined',
        device_key: 'undefined',
        dgf: 'undefined',
        wtf: 'undefined',
        big_app_id: 'undefined',
        app_id: 'undefined',
        plat: 'undefined',
        channel: 'undefined',
        network_type: 'undefined',
        version: 'undefined',
        system_version: 'undefined',
        lng: 'undefined',
        lat: 'undefined',
        province: 'undefined',
        city: 'undefined',
        nonce: 'undefined',
        width: 'undefined',
        height: 'undefined',
        userId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt 4ZHZDMGjMD5RFKyAeDiXZpPtIXS8y7TXPPvWCmN9YNs9CxZfbRQ0ruj8sH2LKM+FmKBHc+i3rZ1hp2YfV5HBsQ==', //user token
        'X-Enniu-End': 'undefined', //X-Enniu-End
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 根据code查询微信用户信息    /v2/web/mini/sns/weixin/weixinInfo
 *
 * @params      { String   }      h_sign                        H5签名
 * @params      { String   }      h_t                           H5时间戳
 * @params      { String   }      h_v                           H5 js版本(md5)
 * @params      { String   }      md                            H5环境检测脚本数据
 * @params      { Integer  }      scenes                        场景，0：默认手动触发，不需要传，1：自动提交，必传，2:pc场景
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      wtf                           Web Track Fingerprint(优先从Cookie中获取)
 * @params      { Integer  }      big_app_id                    产品ID(web下是必输项)
 * @params      { Integer  }      app_id                        子产品ID(web下是必输项)
 * @params      { Integer  }      plat                          平台(web下是必输项)
 * @params      { String   }      channel                       App渠道(web下是必输项)
 * @params      { Integer  }      network_type                  网络类型
 * @params      { String   }      version                       版本
 * @params      { String   }      system_version                系统版本
 * @params      { Number   }      lng                           经度
 * @params      { Number   }      lat                           纬度
 * @params      { String   }      province                      省份
 * @params      { String   }      city                          城市
 * @params      { String   }      nonce                         当前请求唯一随机串(暂时不用)
 * @params      { Integer  }      width                         设备屏幕的宽度
 * @params      { Integer  }      height                        设备屏幕的高度
 * @params      { Object   }      wxRequest                     wxRequest
 * @params      { String   }      X-Enniu-End                   X-Enniu-End
 */
UsercenterGateway.postWebMiniSnsWeixinWeixinInfoV2({
    params: {
        h_sign: 'undefined',
        h_t: 'undefined',
        h_v: 'undefined',
        md: 'undefined',
        scenes: 'undefined',
        device_key: 'undefined',
        dgf: 'undefined',
        wtf: 'undefined',
        big_app_id: 'undefined',
        app_id: 'undefined',
        plat: 'undefined',
        channel: 'undefined',
        network_type: 'undefined',
        version: 'undefined',
        system_version: 'undefined',
        lng: 'undefined',
        lat: 'undefined',
        province: 'undefined',
        city: 'undefined',
        nonce: 'undefined',
        width: 'undefined',
        height: 'undefined',
    },
    data: {
        code: '(string) 接口调用凭证',
        encryptedData: '(string) 包括敏感数据在内的完整用户信息的加密数据',
        iv: '(string) 加密算法的初始向量',
        mobileEncryptedData: '(string) 手机号的加密数据',
        mobileIv: '(string) 手机号的加密的初始向量',
        rawData: '(string) 不包括敏感信息的原始数据字符串，用于计算签名',
        signature: '(string) 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息',
        target: '(string) 重定向地址',
    },
    headers: {
        'X-Enniu-End': 'undefined', //X-Enniu-End
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "city": "(string) 微信-城市",
    "country": "(string) 微信-国家",
    "headimgurl": "(string) 微信-头像",
    "nickName": "(string) 微信-昵称",
    "openId": "(string) 微信-OpenId",
    "province": "(string) 微信-省份",
    "sex": "(string) 微信-性别",
    "token": "(string) 微信-活动token",
    "unionId": "(string) 微信-UnionId"
}
*/



/**
 * 根据code查询微信用户的绑定手机号    /v2/web/mini/sns/weixin/weixinMobile
 *
 * @params      { String   }      h_sign                        H5签名
 * @params      { String   }      h_t                           H5时间戳
 * @params      { String   }      h_v                           H5 js版本(md5)
 * @params      { String   }      md                            H5环境检测脚本数据
 * @params      { Integer  }      scenes                        场景，0：默认手动触发，不需要传，1：自动提交，必传，2:pc场景
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      wtf                           Web Track Fingerprint(优先从Cookie中获取)
 * @params      { Integer  }      big_app_id                    产品ID(web下是必输项)
 * @params      { Integer  }      app_id                        子产品ID(web下是必输项)
 * @params      { Integer  }      plat                          平台(web下是必输项)
 * @params      { String   }      channel                       App渠道(web下是必输项)
 * @params      { Integer  }      network_type                  网络类型
 * @params      { String   }      version                       版本
 * @params      { String   }      system_version                系统版本
 * @params      { Number   }      lng                           经度
 * @params      { Number   }      lat                           纬度
 * @params      { String   }      province                      省份
 * @params      { String   }      city                          城市
 * @params      { String   }      nonce                         当前请求唯一随机串(暂时不用)
 * @params      { Integer  }      width                         设备屏幕的宽度
 * @params      { Integer  }      height                        设备屏幕的高度
 * @params      { Object   }      mobileData                    mobileData
 * @params      { String   }      X-Enniu-End                   X-Enniu-End
 */
UsercenterGateway.postWebMiniSnsWeixinWeixinMobileV2({
    params: {
        h_sign: 'undefined',
        h_t: 'undefined',
        h_v: 'undefined',
        md: 'undefined',
        scenes: 'undefined',
        device_key: 'undefined',
        dgf: 'undefined',
        wtf: 'undefined',
        big_app_id: 'undefined',
        app_id: 'undefined',
        plat: 'undefined',
        channel: 'undefined',
        network_type: 'undefined',
        version: 'undefined',
        system_version: 'undefined',
        lng: 'undefined',
        lat: 'undefined',
        province: 'undefined',
        city: 'undefined',
        nonce: 'undefined',
        width: 'undefined',
        height: 'undefined',
    },
    data: {
        code: '(string) 微信授权码',
        encryptedData: '(string) 包含手机号在内的信息加密数据',
        iv: '(string) 加密算法初始向量',
    },
    headers: {
        'X-Enniu-End': 'undefined', //X-Enniu-End
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "countryCode": "(string) 区号",
    "phoneNumber": "(string) 用户绑定的手机号（国外手机号会有区号）",
    "purePhoneNumber": "(string) 没有区号的手机号"
}
*/



