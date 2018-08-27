import UsercenterGateway from './api/usercenter-gateway/api';


/**
 * 获取用户信息    /v2/web/user/info
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
 */
UsercenterGateway.getWebUserInfoV2({
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
    "autoReceiveMail": "(integer) 是否自动接收邮件(1是，0否)，已废弃",
    "autoReceiveOnlineBank": "(integer) 是否自动接收网银(1是，0否)，已废弃",
    "avatarUrl": "(string) 头像地址",
    "birthday": "(string) 用户生日",
    "createdTime": "(string) 用户创建时间",
    "mobile": "(string) 手机号码",
    "modifiedTime": "(string) 用户修改时间",
    "nickName": "(string) 用户昵称",
    "sex": "(integer) 性别(0保密，1男，2女)",
    "status": "(integer) 用户状态(0正常，1删除)",
    "userId": "(integer) 兼容老的用户id",
    "userName": "(string) 用户名"
}
*/



