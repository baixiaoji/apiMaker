import UsercenterGateway from './api/usercenter-gateway/api';


/**
 * 绑定    /v2/sns/weixin/bind
 *
 * @params      { String   }      squence                       活跃统计追踪序号
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      original_channel              App初始安装渠道
 * @params      { String   }      model                         设备名称
 * @params      { Integer  }      gap                           壳属性(暂时不用)
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      ssid                          当前连接wifi的ssid
 * @params      { String   }      bssid                         当前连接wifi的mac
 * @params      { String   }      antiFraudJson                 反欺诈公共参数JSON串
 * @params      { String   }      device_name                   自定义设备名称
 * @params      { String   }      idfa                          ios唯一识别码
 * @params      { String   }      udid                          ios UDID
 * @params      { String   }      mac                           手机mac地址
 * @params      { String   }      imei                          国际移动设备识别码
 * @params      { String   }      imsi                          国际移动用户识别码
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
 * @params      { Object   }      bindRequest                   bindRequest
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Enniu-Sign                  签名内容
 */
UsercenterGateway.postSnsWeixinBindV2({
    params: {
        squence: '', //活跃统计追踪序号
        device_key: '', //设备尽量唯一号
        original_channel: '', //App初始安装渠道
        model: '', //设备名称
        gap: '', //壳属性(暂时不用)
        dgf: '', //设备指纹信息
        ssid: '', //当前连接wifi的ssid
        bssid: '', //当前连接wifi的mac
        antiFraudJson: '', //反欺诈公共参数JSON串
        device_name: '', //自定义设备名称
        idfa: '', //ios唯一识别码
        udid: '', //ios UDID
        mac: '', //手机mac地址
        imei: '', //国际移动设备识别码
        imsi: '', //国际移动用户识别码
        big_app_id: '', //产品ID(web下是必输项)
        app_id: '', //子产品ID(web下是必输项)
        plat: '', //平台(web下是必输项)
        channel: '', //App渠道(web下是必输项)
        network_type: '', //网络类型
        version: '', //版本
        system_version: '', //系统版本
        lng: '', //经度
        lat: '', //纬度
        province: '', //省份
        city: '', //城市
        nonce: '', //当前请求唯一随机串(暂时不用)
        width: '', //设备屏幕的宽度
        height: '', //设备屏幕的高度
        userId: '', //UserId
    },
    data: {
        bindRequest: '', //bindRequest
    },
    headers: {
        Authorization: 'encrypt 4ZHZDMGjMD5RFKyAeDiXZpPtIXS8y7TXPPvWCmN9YNs9CxZfbRQ0ruj8sH2LKM+FmKBHc+i3rZ1hp2YfV5HBsQ&#x3D;&#x3D;', //user token
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
 * @params      { String   }      squence                       活跃统计追踪序号
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      original_channel              App初始安装渠道
 * @params      { String   }      model                         设备名称
 * @params      { Integer  }      gap                           壳属性(暂时不用)
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      ssid                          当前连接wifi的ssid
 * @params      { String   }      bssid                         当前连接wifi的mac
 * @params      { String   }      antiFraudJson                 反欺诈公共参数JSON串
 * @params      { String   }      device_name                   自定义设备名称
 * @params      { String   }      idfa                          ios唯一识别码
 * @params      { String   }      udid                          ios UDID
 * @params      { String   }      mac                           手机mac地址
 * @params      { String   }      imei                          国际移动设备识别码
 * @params      { String   }      imsi                          国际移动用户识别码
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
 * @params      { Object   }      loginRequest                  loginRequest
 * @params      { String   }      X-Enniu-Sign                  签名内容
 */
UsercenterGateway.postSnsWeixinLoginVerifyV2({
    params: {
        squence: '', //活跃统计追踪序号
        device_key: '', //设备尽量唯一号
        original_channel: '', //App初始安装渠道
        model: '', //设备名称
        gap: '', //壳属性(暂时不用)
        dgf: '', //设备指纹信息
        ssid: '', //当前连接wifi的ssid
        bssid: '', //当前连接wifi的mac
        antiFraudJson: '', //反欺诈公共参数JSON串
        device_name: '', //自定义设备名称
        idfa: '', //ios唯一识别码
        udid: '', //ios UDID
        mac: '', //手机mac地址
        imei: '', //国际移动设备识别码
        imsi: '', //国际移动用户识别码
        big_app_id: '', //产品ID(web下是必输项)
        app_id: '', //子产品ID(web下是必输项)
        plat: '', //平台(web下是必输项)
        channel: '', //App渠道(web下是必输项)
        network_type: '', //网络类型
        version: '', //版本
        system_version: '', //系统版本
        lng: '', //经度
        lat: '', //纬度
        province: '', //省份
        city: '', //城市
        nonce: '', //当前请求唯一随机串(暂时不用)
        width: '', //设备屏幕的宽度
        height: '', //设备屏幕的高度
    },
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
 * @params      { String   }      squence                       活跃统计追踪序号
 * @params      { String   }      device_key                    设备尽量唯一号
 * @params      { String   }      original_channel              App初始安装渠道
 * @params      { String   }      model                         设备名称
 * @params      { Integer  }      gap                           壳属性(暂时不用)
 * @params      { String   }      dgf                           设备指纹信息
 * @params      { String   }      ssid                          当前连接wifi的ssid
 * @params      { String   }      bssid                         当前连接wifi的mac
 * @params      { String   }      antiFraudJson                 反欺诈公共参数JSON串
 * @params      { String   }      device_name                   自定义设备名称
 * @params      { String   }      idfa                          ios唯一识别码
 * @params      { String   }      udid                          ios UDID
 * @params      { String   }      mac                           手机mac地址
 * @params      { String   }      imei                          国际移动设备识别码
 * @params      { String   }      imsi                          国际移动用户识别码
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
 * @params      { String   }      X-Enniu-Sign                  签名内容
 */
UsercenterGateway.postSnsWeixinUnbindV2({
    params: {
        squence: '', //活跃统计追踪序号
        device_key: '', //设备尽量唯一号
        original_channel: '', //App初始安装渠道
        model: '', //设备名称
        gap: '', //壳属性(暂时不用)
        dgf: '', //设备指纹信息
        ssid: '', //当前连接wifi的ssid
        bssid: '', //当前连接wifi的mac
        antiFraudJson: '', //反欺诈公共参数JSON串
        device_name: '', //自定义设备名称
        idfa: '', //ios唯一识别码
        udid: '', //ios UDID
        mac: '', //手机mac地址
        imei: '', //国际移动设备识别码
        imsi: '', //国际移动用户识别码
        big_app_id: '', //产品ID(web下是必输项)
        app_id: '', //子产品ID(web下是必输项)
        plat: '', //平台(web下是必输项)
        channel: '', //App渠道(web下是必输项)
        network_type: '', //网络类型
        version: '', //版本
        system_version: '', //系统版本
        lng: '', //经度
        lat: '', //纬度
        province: '', //省份
        city: '', //城市
        nonce: '', //当前请求唯一随机串(暂时不用)
        width: '', //设备屏幕的宽度
        height: '', //设备屏幕的高度
        userId: '', //UserId
    },
    headers: {
        Authorization: 'encrypt 4ZHZDMGjMD5RFKyAeDiXZpPtIXS8y7TXPPvWCmN9YNs9CxZfbRQ0ruj8sH2LKM+FmKBHc+i3rZ1hp2YfV5HBsQ&#x3D;&#x3D;', //user token
        'X-Enniu-Sign': '', //签名内容
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

