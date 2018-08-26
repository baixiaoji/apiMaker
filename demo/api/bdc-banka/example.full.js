import BdcBanka from './api/bdc-banka/api';


/**
 * 好友点赞功能    /activity/citic/yanka/invite
 *
 * @params      { Object   }      request                       request
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.postCiticYankaInviteActivity({
    data: {
        inviteCode: '(string) undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
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
 * 给自己点赞    /activity/citic/yanka/like
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.postCiticYankaLikeActivity({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
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
 * 获取点赞排行    /activity/citic/yanka/rank
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getCiticYankaRankActivity({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "likeCount": "(integer) undefined",
        "mobile": "(string) undefined",
        "userId": "(integer) undefined"
    }
]
*/



/**
 * 获取我的点赞数,排名,邀请码等信息    /activity/citic/yanka/user
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getCiticYankaUserActivity({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "inviteCode": "(string) undefined",
    "likeByApply": "(integer) undefined",
    "likeByInvite": "(integer) undefined",
    "likeBySelf": "(integer) undefined",
    "likeCount": "(integer) undefined",
    "rank": "(integer) undefined",
    "userId": "(integer) undefined"
}
*/



/**
 * 获取配置好的奖励    /v1/awards
 *
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getAwardsV1({
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cash": [
        {
            "endDate": "(string) undefined",
            "id": "(integer) undefined",
            "needAmount": "(integer) undefined",
            "picUrl": "(string) undefined",
            "reach": "(boolean) undefined",
            "refPrice": "(integer) undefined",
            "smallPicUrl": "(string) undefined",
            "tip": "(string) undefined",
            "title": "(string) undefined"
        }
    ],
    "material": [
        {
            "endDate": "(string) undefined",
            "id": "(integer) undefined",
            "needAmount": "(integer) undefined",
            "picUrl": "(string) undefined",
            "reach": "(boolean) undefined",
            "refPrice": "(integer) undefined",
            "smallPicUrl": "(string) undefined",
            "tip": "(string) undefined",
            "title": "(string) undefined"
        }
    ]
}
*/



/**
 * 平安提交办卡回调接口    /v1/bankCallBack/pingan/submitCallBk
 *
 * @params      { String   }      userId                        userId
 * @params      { String   }      orderId                       orderId
 * @params      { String   }      cardIdStr                     cardIdStr
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.postBankCallBackPinganSubmitCallBkV1({
    params: {
        userId: 'undefined',
        orderId: 'undefined',
        cardIdStr: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "msg": "(string) undefined"
}
*/



/**
 * 兴业提交办卡回调接口    /v1/bankCallBack/xingye/submitCallBk
 *
 * @params      { String   }      data                          data
 * @params      { String   }      sign                          sign
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.postBankCallBackXingyeSubmitCallBkV1({
    params: {
        data: 'undefined',
        sign: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "msg": "(string) undefined"
}
*/



/**
 * 中信提交办卡回调接口    /v1/bankCallBack/zx/zhongxincallback
 *
 * @params      { String   }      time                          time
 * @params      { String   }      adid                          adid
 * @params      { String   }      orderid                       orderid
 * @params      { String   }      token                         token
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.postBankCallBackZxZhongxincallbackV1({
    params: {
        time: 'undefined',
        adid: 'undefined',
        orderid: 'undefined',
        token: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "msg": "(string) undefined"
}
*/



/**
 * 采集用户资料中获取所在地区的电话区号信息    /v1/cardApply/telephone/areaCode
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getCardApplyTelephoneAreaCodeV1({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 从银行入口进去获取用户是否授权使用个人信息标识    /v1/cardApply/user/bankConfirm/flag
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getCardApplyUserBankConfirmFlagV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 采集用户资料中获取用户基本信息    /v1/cardApply/user/basic/info
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getCardApplyUserBasicInfoV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "userIdCard": "(string) 用户身份证号码(加密传输)",
    "userMobile": "(string) 用户手机号码(加密传输)",
    "userName": "(string) 用户名字(加密传输)"
}
*/



/**
 * 获取用户确认授权使用个人信息    /v1/cardApply/user/confirm
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.putCardApplyUserConfirmV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 获取用户是否授权使用个人信息标识    /v1/cardApply/user/confirm/flag
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getCardApplyUserConfirmFlagV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 采集用户资料中获取用户详细信息    /v1/cardApply/user/detail/info
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getCardApplyUserDetailInfoV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "companyCityInfo": "(string) 居住地区城市信息",
    "companyDepartmentInfo": "(string) 单位部门信息",
    "companyDistrictInfo": "(string) 单位地区区信息",
    "companyJobInfo": "(string) 单位岗位名字",
    "companyLocationInfo": "(string) 单位地区地址详细信息(加密传输)",
    "companyName": "(string) 单位名字",
    "companyProvinceInfo": "(string) 单位地区省市信息",
    "companyTelephone": "(string) 单位联系电话",
    "education": "(string) 教育",
    "email": "(string) 电子邮件",
    "familyPeopleMobile": "(string) 家庭成员手机号码(加密传输)",
    "familyPeopleName": "(string) 家庭成员名字(加密传输)",
    "familyPeopleRelation": "(string) 家庭成员关系",
    "marriageState": "(string) 婚姻状态",
    "otherPeopleMobile": "(string) 其他联系人手机号码(加密传输)",
    "otherPeopleName": "(string) 其他联系人姓名(加密传输)",
    "otherPeopleRelation": "(string) 其他联系人关系",
    "resideCityInfo": "(string) 居住地区城市信息",
    "resideCondition": "(string) 房屋状况",
    "resideDistrictInfo": "(string) 居住地区区信息",
    "resideLocationInfo": "(string) 居住地区区信息",
    "resideProvinceInfo": "(string) 居住地区省份信息",
    "startResideYear": "(string) 开始居住时间",
    "startWorkYear": "(string) 工作开始年限",
    "yearIncome": "(string) 年收入"
}
*/



/**
 * 采集用户资料中获取用户详细信息    /v1/cardApply/user/info/completeRate
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getCardApplyUserInfoCompleteRateV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 获取用户信息是否填写完毕的标识true/false    /v1/cardApply/userInfo/flag
 *
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getCardApplyUserInfoFlagV1({
    params: {
        userId: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 银行注入页面用来分步骤请求用户的用户信息    /v1/cardApply/{bankId}/step/{step}/info
 *
 * @params      { Integer  }      bankId                        银行ID信息
 * @params      { Integer  }      step                          填写银行信息的步骤：0、1、2、3、4、5
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getCardApplyBankIdStepStepInfoV1({
    params: {
        bankId: 'undefined',
        step: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 获取用户信息授权使用信息    /v1/cardApply/{userId}/info
 *
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getCardApplyUserIdInfoV1({
    params: {
        userId: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "userAuthorizationFlag": "(boolean) 用户是否授权使用标识",
    "userCardApplyDetailInfo": {
        "companyCityInfo": "(string) 居住地区城市信息",
        "companyDepartmentInfo": "(string) 单位部门信息",
        "companyDistrictInfo": "(string) 单位地区区信息",
        "companyJobInfo": "(string) 单位岗位名字",
        "companyLocationInfo": "(string) 单位地区地址详细信息(加密传输)",
        "companyName": "(string) 单位名字",
        "companyProvinceInfo": "(string) 单位地区省市信息",
        "companyTelephone": "(string) 单位联系电话",
        "education": "(string) 教育",
        "email": "(string) 电子邮件",
        "familyPeopleMobile": "(string) 家庭成员手机号码(加密传输)",
        "familyPeopleName": "(string) 家庭成员名字(加密传输)",
        "familyPeopleRelation": "(string) 家庭成员关系",
        "marriageState": "(string) 婚姻状态",
        "otherPeopleMobile": "(string) 其他联系人手机号码(加密传输)",
        "otherPeopleName": "(string) 其他联系人姓名(加密传输)",
        "otherPeopleRelation": "(string) 其他联系人关系",
        "resideCityInfo": "(string) 居住地区城市信息",
        "resideCondition": "(string) 房屋状况",
        "resideDistrictInfo": "(string) 居住地区区信息",
        "resideLocationInfo": "(string) 居住地区区信息",
        "resideProvinceInfo": "(string) 居住地区省份信息",
        "startResideYear": "(string) 开始居住时间",
        "startWorkYear": "(string) 工作开始年限",
        "userIdCard": "(string) 用户身份证号码(加密传输)",
        "userMobile": "(string) 用户手机号码(加密传输)",
        "userName": "(string) 用户名字(加密传输)",
        "yearIncome": "(integer) 年收入"
    }
}
*/



/**
 * 获取卡片的申请链接内容    /v1/cardRight/base/info
 *
 * @params      { Array    }      cardId                        cardId
 * @params      { String   }      cityCode                      cityCode
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getCardRightBaseInfoV1({
    params: {
        cardId: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "applyUrl": "(string) 卡申请链接",
        "cardId": "(string) 卡ID",
        "cardImageUrl": "(string) 卡图片地址",
        "cardName": "(string) 卡名称",
        "cardRightId": "(integer) 卡权益Id",
        "cities": [
            {
                "code": "(string) 城市编号",
                "name": "(string) 城市名称"
            }
        ],
        "recommendation": "(string) 推广语"
    }
]
*/



/**
 * 获取卡片的申请链接内容    /v1/cardRight/{cardId}/applyUrl
 *
 * @params      { Integer  }      cardId                        卡片ID
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getCardRightCardIdApplyUrlV1({
    params: {
        cardId: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * getThirdBankCity    /v1/getThirdBankCity
 *
 * @params      { String   }      city_code                     city_code
 * @params      { String   }      third_type                    third_type
 * @params      { Object   }      map                           map
 */
BdcBanka.getGetThirdBankCityV1({
    params: {
        city_code: 'undefined',
        third_type: 'undefined',
    },
    data: {

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
 * 获取配置的推荐卡片列表    /v1/invite/cards
 *
 * @params      { String   }      cityCode                      cityCode
 * @params      { String   }      inviteCode                    inviteCode
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviteCardsV1({
    params: {
        cityCode: 'undefined',
        inviteCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "applyUrl": "(string) undefined",
        "cardDesc": "(string) undefined",
        "cardImage": "(string) undefined",
        "cardTitle": "(string) undefined",
        "id": "(string) undefined"
    }
]
*/



/**
 * 中信银行的链接交换，根据要求生成邀请链接    /v1/invite/cards/transfer/zhongxin
 *
 * @params      { String   }      originalUrl                   originalUrl
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      userToken                     userToken
 */
BdcBanka.getInviteCardsTransferZhongxinV1({
    params: {
        originalUrl: 'undefined',
        userId: 'undefined',
        userToken: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "url": "(string) undefined"
}
*/



/**
 * 获取邀请数量    /v1/inviter/awards
 *
 * @params      { Integer  }      termId                        termId
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterAwardsV1({
    params: {
        termId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cash": [
        {
            "cashAmount": "(string) undefined",
            "id": "(integer) undefined",
            "logoUrl": "(string) undefined",
            "successCount": "(integer) undefined"
        }
    ],
    "material": [
        {
            "endDate": "(string) undefined",
            "id": "(integer) undefined",
            "logoUrl": "(string) undefined",
            "refPrice": "(integer) undefined",
            "status": "(integer) undefined",
            "title": "(string) undefined"
        }
    ]
}
*/



/**
 * 领取奖励    /v1/inviter/awards/get
 *
 * @params      { Integer  }      termId                        termId
 * @params      { Object   }      userAddressRequest            userAddressRequest
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.postInviterAwardsGetV1({
    params: {
        termId: 'undefined',
    },
    data: {
        addressDetail: '(string) 详细地址',
        cityCode: '(string) 城市code',
        districtCode: '(string) 区code',
        mobile: '(string) 手机号',
        name: '(string) 收货人姓名',
        provinceCode: '(string) 省份code',
    },
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
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
 * 已领取奖励的查看    /v1/inviter/awards/view
 *
 * @params      { Integer  }      termId                        termId
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterAwardsViewV1({
    params: {
        termId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "addressDetail": "(string) undefined",
    "cityCode": "(string) undefined",
    "createdTime": "(string) undefined",
    "districtCode": "(string) undefined",
    "expressCompany": "(string) undefined",
    "expressNo": "(string) undefined",
    "fullAddress": "(string) undefined",
    "materialAward": {
        "endDate": "(string) undefined",
        "id": "(integer) undefined",
        "needAmount": "(integer) undefined",
        "picUrl": "(string) undefined",
        "reach": "(boolean) undefined",
        "refPrice": "(integer) undefined",
        "smallPicUrl": "(string) undefined",
        "tip": "(string) undefined",
        "title": "(string) undefined"
    },
    "mobile": "(string) undefined",
    "modifiedTime": "(string) undefined",
    "name": "(string) undefined",
    "provinceCode": "(string) undefined",
    "status": "(integer) undefined"
}
*/



/**
 * 邀请人与被邀请人的userId进行绑定    /v1/inviter/bind
 *
 * @params      { String   }      inviteCode                    inviteCode
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterBindV1({
    params: {
        inviteCode: 'undefined',
    },
    headers: {
        Authorization: '调用用户中心注册登录接口之后的UserToken', //userToken
        userId: '调用用户中心注册登录接口之后的UserId', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "avaterUrl": "(string) 头像地址",
    "nickName": "(string) 昵称"
}
*/



/**
 * 奖励获取情况轮播    /v1/inviter/carousel
 *
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterCarouselV1({
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[]
*/



/**
 * 检查用户是不是已经成为邀请者    /v1/inviter/check
 *
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterCheckV1({
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "resultCode": "(integer) 状态, 1已成为邀请人, 2成为邀请人但未导单"
}
*/



/**
 * 邀请人信息，头像与昵称    /v1/inviter/info
 *
 * @params      { String   }      inviteCode                    inviteCode
 */
BdcBanka.getInviterInfoV1({
    params: {
        inviteCode: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "avaterUrl": "(string) 头像地址",
    "nickName": "(string) 昵称"
}
*/



/**
 * 获取邀请数量    /v1/inviter/inviteCount
 *
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterInviteCountV1({
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[]
*/



/**
 * 短信提醒被邀请人    /v1/inviter/notifySms
 *
 * @params      { Integer  }      recordId                      recordId
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.postInviterNotifySmsV1({
    params: {
        recordId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "message": "(string) undefined"
}
*/



/**
 * 邀请纪录    /v1/inviter/records
 *
 * @params      { Integer  }      termId                        termId
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterRecordsV1({
    params: {
        termId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankName": "(string) undefined",
        "id": "(integer) undefined",
        "mobile": "(string) undefined",
        "smsStatus": "(boolean) undefined",
        "status": "(integer) undefined",
        "updatedDate": "(string) undefined"
    }
]
*/



/**
 * 获取分享元素    /v1/inviter/share
 *
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getInviterShareV1({
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "resultCode": "(integer) 状态, 1已成为邀请人, 2成为邀请人但未导单"
}
*/



/**
 * entry    /v1/main/entry
 *
 */
BdcBanka.getMainEntryV1({
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
 * 办卡商城-额度测试    /v1/recommend/creditLimit/list
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Object   }      questionList                  问题列表
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.postRecommendCreditLimitListV1({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: '3301',
    },
    data: {
        questionInfoList: [{
        	answer: [],
        	question: '(string) undefined',
        }],
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "creditLimit": "(string) undefined",
    "limitCode": "(integer) undefined",
    "recommendCardList": [
        {
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "id": "(integer) undefined",
            "itemName": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureURL": "(string) undefined",
            "promotionDetail": "(string) undefined"
        }
    ]
}
*/



/**
 * 用户交互推荐卡片-获取满足该用户情况的卡列表历史记录    /v1/recommend/creditLimit/records
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      isReselect                    是否重新测试 false 0:不重新测试 true 1:重新测试
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getRecommendCreditLimitRecordsV1({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: '3301',
        isReselect: '0',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "creditLimit": "(string) undefined",
    "limitCode": "(integer) undefined",
    "recommendCardList": [
        {
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "id": "(integer) undefined",
            "itemName": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureURL": "(string) undefined",
            "promotionDetail": "(string) undefined"
        }
    ]
}
*/



/**
 * 批量额度测试的卡片列表信息    /v1/recommend/limittest/cards/list
 *
 * @params      { Integer  }      limitType                     经度信息
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getRecommendLimittestCardsListV1({
    params: {
        limitType: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankId": "(integer) undefined",
        "cardId": "(string) undefined",
        "id": "(integer) undefined",
        "itemName": "(string) undefined",
        "linkUrl": "(string) undefined",
        "pictureURL": "(string) undefined",
        "promotionDetail": "(string) undefined"
    }
]
*/



/**
 * 办卡商城-智能选卡    /v1/recommend/questions/list
 *
 * @params      { Integer  }      questionType                  问题类型 1.额度测试 2.智能选卡
 * @params      { Integer  }      step                          用户所处阶段
 * @params      { Integer  }      code                          问题列表编号
 * @params      { Integer  }      isReselect                    是否重新选卡 false 0:不重新选卡 true 1:重新选卡
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getRecommendQuestionsListV1({
    params: {
        questionType: '2',
        step: '1',
        code: '11',
        isReselect: '0',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: '3301',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "buttonInfoList": [
        {
            "code": "(integer) undefined",
            "option": "(string) undefined"
        }
    ],
    "question": "(string) undefined",
    "questionInfoList": [
        {
            "code": "(integer) undefined",
            "option": "(string) undefined"
        }
    ],
    "recommendCardList": [
        {
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "id": "(integer) undefined",
            "itemName": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureURL": "(string) undefined",
            "promotionDetail": "(string) undefined"
        }
    ]
}
*/



/**
 * 查询搜索的相关配置信息以及搜索历史记录    /v1/search/config/info
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getSearchConfigInfoV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "keyHotWords": [],
    "recommendWord": "(string) 推荐搜索词",
    "searchHistoryWords": []
}
*/



/**
 * 删除用户的搜索历史记录    /v1/search/history/delete
 *
 * @params      { String   }      inputWords                    用户历史搜索的关键字
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.deleteSearchHistoryDeleteV1({
    params: {
        inputWords: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 保存用户的搜索历史记录    /v1/search/keyWords/add
 *
 * @params      { String   }      inputWords                    用户历史搜索的关键字
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.postSearchKeyWordsAddV1({
    params: {
        inputWords: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 随笔提示搜索关键字信息(6个)    /v1/search/realtime/tips
 *
 * @params      { String   }      inputWords                    用户输入的关键字
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getSearchRealtimeTipsV1({
    params: {
        inputWords: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankId": "(integer) 所属银行ID",
        "bankName": "(string) 所属银行名字",
        "cardId": "(string) 卡片ID",
        "cardLinkUrl": "(string) 卡片链接地址和",
        "cardName": "(string) 卡片Name",
        "inputWords": "(string) undefined",
        "matchResult": "(string) undefined",
        "resultType": "(integer) 1:银行，2：信用卡"
    }
]
*/



/**
 * (查询银行)搜索最终的展示结果信息的(每页5个)    /v1/search/result/list
 *
 * @params      { String   }      inputWords                    用户输入的关键字
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getSearchResultListV1({
    params: {
        inputWords: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
        pageNumber: '1',
        pageRecordCount: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankId": "(integer) 所属银行ID",
        "bankName": "(string) 所属银行名字",
        "cardId": "(string) 卡片ID",
        "cardLinkUrl": "(string) 卡片链接地址和",
        "cardName": "(string) 卡片Name",
        "cardPictureUrl": "(string) 卡片图片URL",
        "cardRecommendation": "(string) 推荐信息"
    }
]
*/



/**
 * history    /v1/terms/history
 *
 */
BdcBanka.getTermsHistoryV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "name": "(string) 期数名字",
        "termId": "(integer) 期数Id"
    }
]
*/



/**
 * doAction    /v1/thirdparty/applytrade
 *
 */
BdcBanka.getThirdpartyApplytradeV1({
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
 * getCityArea    /v1/thirdparty/cityarea
 *
 */
BdcBanka.getThirdpartyCityareaV1({
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
 * getCityBank    /v1/thirdparty/citybank
 *
 */
BdcBanka.getThirdpartyCitybankV1({
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
 * getProvince    /v1/thirdparty/province
 *
 */
BdcBanka.getThirdpartyProvinceV1({
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
 * queryTradeStatusInfo    /v1/thirdparty/query
 *
 */
BdcBanka.getThirdpartyQueryV1({
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
 * city    /v1/user/address/city
 *
 * @params      { String   }      provinceCode                  provinceCode
 */
BdcBanka.getUserAddressCityV1({
    params: {
        provinceCode: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * district    /v1/user/address/district
 *
 * @params      { String   }      cityCide                      cityCide
 */
BdcBanka.getUserAddressDistrictV1({
    params: {
        cityCide: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 修改用户收货地址    /v1/user/address/latest
 *
 * @params      { String   }      Authorization                 userToken
 * @params      { String   }      userId                        userId
 */
BdcBanka.getUserAddressLatestV1({
    headers: {
        Authorization: 'encrypt MTgwMDAxNDU5LXYx.G8DCtCzzgtFI0cWMn6PdBKyKuxoCGQJz7cM9g09Gj7GSUF4qFJRyIRdXD9HX4oSwPGhE9GaKK_Jss_j-6P5I7A', //userToken
        userId: '180001459', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "addressDetail": "(string) 详细地址",
    "city": "(string) undefined",
    "cityCode": "(string) 城市code",
    "district": "(string) undefined",
    "districtCode": "(string) 区code",
    "id": "(integer) undefined",
    "mobile": "(string) 手机号",
    "name": "(string) 收货人姓名",
    "province": "(string) undefined",
    "provinceCode": "(string) 省份code",
    "userId": "(integer) undefined"
}
*/



/**
 * province    /v1/user/address/province
 *
 */
BdcBanka.getUserAddressProvinceV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 获取用户申请记录列表信息    /v2/applyRecord/applyRecords/list
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getApplyRecordApplyRecordsListV2({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "applyState": "(integer) undefined",
        "applyStateStr": "(string) undefined",
        "bankCardName": "(string) undefined",
        "bankId": "(integer) undefined",
        "bankName": "(string) undefined",
        "isNewUserFlag": "(integer) undefined",
        "labelInfo": "(string) undefined",
        "pictureURL": "(string) undefined",
        "taskSubType": "(string) undefined",
        "taskType": "(string) undefined",
        "updateDate": "(string) undefined"
    }
]
*/



/**
 * 获取用户查询所需要的银行登录账号记录信息    /v2/applyRecord/bank/account
 *
 * @params      { Integer  }      bankId                        办卡对于的银行ID
 * @params      { String   }      accountId                     查询对应的accountId
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getApplyRecordBankAccountV2({
    params: {
        bankId: 'undefined',
        accountId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "IdNo": "(string) undefined",
    "Mobile": "(string) undefined",
    "accountInfoJson": "(string) undefined",
    "bankId": "(integer) undefined",
    "bankName": "(string) undefined"
}
*/



/**
 * 获取用户查询所需要的银行登录账号记录信息(数据脱敏版)    /v2/applyRecord/bank/accountSafe
 *
 * @params      { Integer  }      bankId                        办卡对于的银行ID
 * @params      { String   }      accountId                     查询对应的accountId
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getApplyRecordBankAccountSafeV2({
    params: {
        bankId: 'undefined',
        accountId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "IdNo": "(string) undefined",
    "LoginTrueName": "(string) undefined",
    "Mobile": "(string) undefined",
    "accountId": "(string) undefined",
    "accountInfoJson": "(string) undefined",
    "bankId": "(integer) undefined",
    "bankName": "(string) undefined"
}
*/



/**
 * 获取银行配置记录信息    /v2/applyRecord/bank/config
 *
 * @params      { Integer  }      bankId                        办卡对于的银行ID
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getApplyRecordBankConfigV2({
    params: {
        bankId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activateLinkUrl": "(string) undefined",
    "activatePhoneNo": "(string) undefined",
    "bankId": "(integer) undefined",
    "bankName": "(string) undefined"
}
*/



/**
 * 获取特定银行的url    /v2/applyRecord/bank/generatedUrl
 *
 * @params      { String   }      cardId                        卡片ID
 * @params      { Integer  }      bankId                        银行ID
 * @params      { String   }      sourceUrl                     卡片本来的url
 * @params      { String   }      name                          用户姓名
 * @params      { String   }      idCard                        身份证号码
 * @params      { String   }      phone                         电话号码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 */
BdcBanka.getApplyRecordBankGeneratedUrlV2({
    params: {
        cardId: 'undefined',
        bankId: 'undefined',
        sourceUrl: 'undefined',
        name: 'undefined',
        idCard: 'undefined',
        phone: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 查询身份证和姓名信息    /v2/applyRecord/bank/getUserInfo
 *
 * @params      { String   }      cardId                        卡片ID
 * @params      { Integer  }      bankId                        银行ID
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 */
BdcBanka.getApplyRecordBankGetUserInfoV2({
    params: {
        cardId: 'undefined',
        bankId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "idCard": "(string) undefined",
    "name": "(string) undefined",
    "phone": "(string) undefined"
}
*/



/**
 * 获取所有的银行的爬虫服务的可用状态    /v2/applyRecord/bank/service/list
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getApplyRecordBankServiceListV2({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankId": "(integer) undefined",
        "bankLinkUrl": "(string) undefined",
        "bankName": "(string) undefined",
        "noticeInfo": "(string) undefined",
        "pictureURL": "(string) undefined",
        "status": "(integer) undefined",
        "taskSubType": "(string) undefined",
        "taskType": "(string) undefined"
    }
]
*/



/**
 * 获取某个银行的爬虫服务是否可用    /v2/applyRecord/bank/service/status
 *
 * @params      { Integer  }      bankId                        办卡对应的银行ID
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getApplyRecordBankServiceStatusV2({
    params: {
        bankId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bankId": "(integer) undefined",
    "bankLinkUrl": "(string) undefined",
    "bankName": "(string) undefined",
    "noticeInfo": "(string) undefined",
    "pictureURL": "(string) undefined",
    "status": "(integer) undefined",
    "taskSubType": "(string) undefined",
    "taskType": "(string) undefined"
}
*/



/**
 * 保存银行提交的身份证和姓名信息    /v2/applyRecord/bank/userInfo
 *
 * @params      { Object   }      bankCardUserApplyInfo                            用户申请的个人信息
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 */
BdcBanka.postApplyRecordBankUserInfoV2({
    data: {
        bankId: '(integer) undefined',
        idCard: '(string) undefined',
        mobileNo: '(string) undefined',
        userName: '(string) undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取用户查询进度记录列表信息    /v2/applyRecord/result/list
 *
 * @params      { String   }      accountID                     爬虫的账号ID
 * @params      { Integer  }      bankId                        办卡对于的银行ID
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getApplyRecordResultListV2({
    params: {
        accountID: 'undefined',
        bankId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "applyCardName": "(string) undefined",
        "applyDate": "(string) undefined",
        "bankId": "(integer) undefined",
        "bankName": "(string) undefined",
        "cardUserName": "(string) undefined",
        "documentInfo": "(string) undefined",
        "replyCardName": "(string) undefined",
        "state": "(integer) undefined",
        "stateDescribe": "(string) undefined",
        "updateDate": "(string) undefined"
    }
]
*/



/**
 * 办卡首页获取用户申请卡入口信息    /v2/applyRecord/user/stateInfo
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getApplyRecordUserStateInfoV2({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 平安办卡主动推送接口    /v2/bankCallBack/pingan/submitCallBk
 *
 * @params      { String   }      data                          data
 * @params      { String   }      sign                          sign
 * @params      { String   }      order_id                      order_id
 * @params      { String   }      uuid                          uuid
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.postBankCallBackPinganSubmitCallBkV2({
    params: {
        data: 'undefined',
        sign: 'undefined',
        order_id: 'undefined',
        uuid: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "err_code": "(string) undefined",
    "err_code_des": "(string) undefined",
    "result_code": "(string) undefined",
    "return_code": "(string) undefined",
    "return_msg": "(string) undefined",
    "uuid": "(string) undefined"
}
*/



/**
 * 获取银行信息    /v2/bankRepo/get/{bankId}
 *
 * @params      { Integer  }      bankId                        bankId
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getBankRepoGetBankIdV2({
    params: {
        bankId: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bankId": "(integer) 银行ID",
    "bankName": "(string) 银行名称",
    "fullName": "(string) 银行全称"
}
*/



/**
 * 获取银行信息列表    /v2/bankRepo/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getBankRepoListV2({
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankId": "(integer) 银行ID",
        "bankName": "(string) 银行名称",
        "fullName": "(string) 银行全称"
    }
]
*/



/**
 * 提交预约办卡信息    /v2/bookCards/apply/orderInfo
 *
 * @params      { Object   }      userApplyOrderInfoParam                          用户提交预约办卡订单的信息
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.postBookCardsApplyOrderInfoV2({
    data: {
        address: '(string) undefined',
        areaCode: '(string) undefined',
        areaName: '(string) undefined',
        bankIds: '(string) undefined',
        cardGrade: '(string) undefined',
        channel: '(string) undefined',
        cityCode: '(string) undefined',
        companyName: '(string) undefined',
        entryType: '(integer) undefined',
        fund: '(string) undefined',
        graduation: '(string) undefined',
        idCard: '(string) undefined',
        isUrgent: '(integer) undefined',
        jobProve: '(string) undefined',
        jobType: '(string) undefined',
        lat: '(string) undefined',
        lon: '(string) undefined',
        mobile: '(string) undefined',
        occupation: '(string) undefined',
        socialensure: '(string) undefined',
        trueName: '(string) undefined',
        userLabel: '(string) undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 查询用户所有的预约办卡信息    /v2/bookCards/applyOrder/list
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBookCardsApplyOrderListV2({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "doneList": [
        {
            "address": "(string) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "pictureURL": "(string) undefined",
            "state": "(integer) undefined",
            "stateDescribe": "(string) undefined",
            "tradeId": "(integer) undefined",
            "updateDate": "(string) undefined"
        }
    ],
    "processList": [
        {
            "address": "(string) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "pictureURL": "(string) undefined",
            "state": "(integer) undefined",
            "stateDescribe": "(string) undefined",
            "tradeId": "(integer) undefined",
            "updateDate": "(string) undefined"
        }
    ]
}
*/



/**
 * 提交预约订单对于的办卡专员的相关信息    /v2/bookCards/attache/detail
 *
 * @params      { Integer  }      tradeId                       用户的tradeId信息
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBookCardsAttacheDetailV2({
    params: {
        tradeId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "attacheUserId": "(integer) undefined",
    "headPictureUrl": "(string) undefined",
    "mobileNo": "(string) undefined",
    "negativeCnt": "(integer) undefined",
    "positiveCnt": "(integer) undefined",
    "trueName": "(string) undefined"
}
*/



/**
 * 获取前段展示的可预约银行信息列表信息    /v2/bookCards/banks/list
 *
 * @params      { String   }      cityCode                      所在地的城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBookCardsBanksListV2({
    params: {
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankId": "(integer) undefined",
        "bankName": "(string) undefined",
        "pictureURL": "(string) undefined"
    }
]
*/



/**
 * 评价办卡专员的相关信息    /v2/bookCards/evaluateAttache
 *
 * @params      { Integer  }      tradeId                       用户的tradeId信息
 * @params      { Integer  }      attacheUserId                 专员ID信息
 * @params      { Boolean  }      appraiseType                  评价类型(true:好评,false:差评)
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.putBookCardsEvaluateAttacheV2({
    params: {
        tradeId: 'undefined',
        attacheUserId: 'undefined',
        appraiseType: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 取消预约办卡信息    /v2/bookCards/orderInfo/{tradeId}/cancel
 *
 * @params      { Integer  }      tradeId                       订单tradeID信息
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.putBookCardsOrderInfoTradeIdCancelV2({
    params: {
        tradeId: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 获取信用卡属性    /v2/cardRepo/attribute/get/{attributeId}
 *
 * @params      { Integer  }      attributeId                   卡属性ID
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getCardRepoAttributeGetAttributeIdV2({
    params: {
        attributeId: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "attributeId": "(integer) 属性ID",
    "attributeName": "(string) 属性名称",
    "attributeType": "(string) 类型(1:单选,2:多选)",
    "optionList": [
        {
            "optionId": "(integer) 属性项ID",
            "optionName": "(string) 属性项名称"
        }
    ]
}
*/



/**
 * 通过卡ID获取信用卡信息    /v2/cardRepo/get/{cardId}
 *
 * @params      { String   }      cardId                        卡ID
 * @params      { Boolean  }      needCityInfo                  是否需要城市信息
 * @params      { Boolean  }      needAttributes                是否需要卡属性信息
 * @params      { Boolean  }      needCardDetail                是否需要卡详情
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getCardRepoGetCardIdV2({
    params: {
        cardId: 'undefined',
        needCityInfo: 'undefined',
        needAttributes: 'undefined',
        needCardDetail: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "applyUrl": "(string) 卡申请链接",
    "cardId": "(string) 卡ID",
    "cardImageUrl": "(string) 卡图片地址",
    "cardName": "(string) 卡名称",
    "cardRightId": "(integer) 卡权益Id",
    "cities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ],
    "recommendation": "(string) 推广语"
}
*/



/**
 * 多条件筛选卡信息列表    /v2/cardRepo/list
 *
 * @params      { Object   }      cardListQuery                 卡列表查询条件
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.postCardRepoListV2({
    data: {
        bankId: '(integer) 银行ID',
        cardAttributeQueryList: [{
        	attributeId: '(integer) 属性ID',
        	optionIdList: [],
        }],
        cardIdList: [],
        cardName: '(string) 卡名称',
        cityCode: '(string) 城市编码',
        needAttributes: '(boolean) 是否需要卡属性',
        needCardDetail: '(boolean) 是否需要卡详情',
        needCityInfo: '(boolean) 是否需要开放城市信息',
        onlyCardIdNeeded: '(boolean) 是否只返回卡ID',
        pageIndex: '(integer) 页码(从1开始)',
        pageSize: '(integer) 分页大小',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "applyUrl": "(string) 卡申请链接",
            "cardId": "(string) 卡ID",
            "cardImageUrl": "(string) 卡图片地址",
            "cardName": "(string) 卡名称",
            "cardRightId": "(integer) 卡权益Id",
            "cities": [
                {
                    "code": "(string) 城市编号",
                    "name": "(string) 城市名称"
                }
            ],
            "recommendation": "(string) 推广语"
        }
    ]
}
*/



/**
 * 获取用户的是否白名单配置    /v3/bankCard/ab/config
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardAbConfigV3({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 获取热门银行下面的信用卡数据列表(含分页)-某银行的卡列表    /v3/bankCard/bank/cards/list
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      hotBankId                     查询的热门银行记录ID(id)
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardBankCardsListV3({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
        hotBankId: 'undefined',
        pageNumber: '1',
        pageRecordCount: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cardInfoDTOList": [
        {
            "applyNum": "(integer) undefined",
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "customBankName": "(string) undefined",
    "detailPagePromotionInfo": "(string) undefined",
    "id": "(integer) undefined",
    "pictureURL": "(string) undefined"
}
*/



/**
 * 全部信用卡数据列表详情-首次进入全部信用卡    /v3/bankCard/cards/detail
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardCardsDetailV3({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
        pageNumber: '1',
        pageRecordCount: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cardInfoDTOList": [
        {
            "applyNum": "(integer) undefined",
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "customBankName": "(string) undefined",
    "detailPagePromotionInfo": "(string) undefined",
    "id": "(integer) undefined",
    "optionId": "(integer) undefined",
    "pictureURL": "(string) undefined",
    "queryOptionList": [
        {
            "optionList": [
                {
                    "optionId": "(integer) undefined",
                    "optionName": "(string) undefined",
                    "recommendation": "(string) undefined"
                }
            ],
            "optionName": "(string) undefined",
            "optionParam": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 获取全部信用卡数据列表信息(含分页)-全部信用卡往下拉    /v3/bankCard/cards/list
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      bankId                        查询的银行ID
 * @params      { Integer  }      purposeOptionId               用途
 * @params      { Integer  }      gradeOptionId                 等级
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardCardsListV3({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
        bankId: 'undefined',
        purposeOptionId: 'undefined',
        gradeOptionId: 'undefined',
        pageNumber: '1',
        pageRecordCount: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 获取前段展示的各个栏目模块配置列表数据-办卡首页    /v3/bankCard/catalog/list
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardCatalogListV3({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: '3301',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "data": [
            {
                "bankId": "(integer) undefined",
                "cardId": "(string) undefined",
                "fontColor": "(string) undefined",
                "hotTag": "(string) undefined",
                "id": "(integer) undefined",
                "itemName": "(string) undefined",
                "linkUrl": "(string) undefined",
                "pictureURL": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "promotionTag": "(string) undefined",
                "resourceId": "(string) undefined",
                "themeId": "(integer) undefined"
            }
        ],
        "moduleId": "(string) undefined",
        "moduleName": "(string) undefined"
    }
]
*/



/**
 * 获取今日主题的详情信息-即年末大盘点    /v3/bankCard/theme/{id}/detail
 *
 * @params      { Integer  }      id                            主题ID信息
 * @params      { Integer  }      columnThemeId                 栏目配置记录主题ID信息
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardThemeIdDetailV3({
    params: {
        id: 'undefined',
        columnThemeId: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "buttonLinkUrl": "(string) undefined",
    "cardInfoList": [
        {
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "moreInfoLinkUrl": "(string) 更多卡片信息链接",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined"
        }
    ],
    "customThemeName": "(string) undefined",
    "id": "(integer) undefined",
    "themeDescribe": "(string) undefined"
}
*/



/**
 * 获取全部的地理省份城市信息    /v3/geography/city/list
 *
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getGeographyCityListV3({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        userId: '180050381', //user id
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "cities": [
            {
                "code": "(string) 城市编码",
                "name": "(string) 城市名字"
            }
        ],
        "code": "(string) undefined",
        "name": "(string) undefined"
    }
]
*/



/**
 * 获取银行信息    /v3/thirdChannel/bank/{bankId}
 *
 * @params      { Integer  }      bankId                        银行Id
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getThirdChannelBankBankIdV3({
    params: {
        bankId: '3301',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bankName": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "subTitle": "(string) undefined"
}
*/



/**
 * 罗列第三方卡片列表    /v3/thirdChannel/card/list
 *
 * @params      { String   }      channelCode                   第三方渠道编号，比如51bk_kssys
 * @params      { Integer  }      bankId                        银行Id
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getThirdChannelCardListV3({
    params: {
        channelCode: '51bk_kssys',
        bankId: '3301',
        cityCode: '3301',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "bankId": "(integer) undefined",
        "cardId": "(string) undefined",
        "hotTag": "(string) undefined",
        "itemName": "(string) undefined",
        "linkUrl": "(string) undefined",
        "pictureURL": "(string) undefined",
        "promotionDetail": "(string) undefined",
        "promotionTag": "(string) undefined"
    }
]
*/



/**
 * 罗列第三方首页    /v3/thirdChannel/catalog/list
 *
 * @params      { String   }      channelCode                   第三方渠道编号，比如51bk_kssys
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getThirdChannelCatalogListV3({
    params: {
        channelCode: '51bk_kssys',
        cityCode: '3301',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "data": [
            {
                "bankId": "(integer) undefined",
                "cardId": "(string) undefined",
                "fontColor": "(string) undefined",
                "hotTag": "(string) undefined",
                "id": "(integer) undefined",
                "itemName": "(string) undefined",
                "linkUrl": "(string) undefined",
                "pictureURL": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "promotionTag": "(string) undefined",
                "resourceId": "(string) undefined",
                "themeId": "(integer) undefined"
            }
        ],
        "moduleId": "(string) undefined",
        "moduleName": "(string) undefined"
    }
]
*/



/**
 * 添加    /v3/thirdChannel/channel/add
 *
 * @params      { Object   }      addThirdChannelParam          第三方渠道添加参数
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.postThirdChannelChannelAddV3({
    data: {
        linkList: [{
        	link: '(string) 链接',
        	linkType: '(integer) 链接类型,1银行,2卡片',
        	needAddParentNode: '(boolean) 是否应该加父节点，前端不使用',
        }],
        name: '(string) 名称',
        remark: '(string) 备注',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 链接详情查询    /v3/thirdChannel/channel/detail/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getThirdChannelChannelDetailIdV3({
    params: {
        id: 'undefined',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer) undefined",
    "code": "(string) undefined",
    "linkList": [
        {
            "autoId": "(integer) undefined",
            "link": "(string) 具体链接",
            "linkType": "(integer) 链接类型，1银行，2卡片",
            "name": "(string) 具体银行名称或卡片名称",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined",
            "remark": "(string) undefined",
            "showCities": "(string) undefined"
        }
    ],
    "name": "(string) undefined",
    "remark": "(string) 备注"
}
*/



/**
 * 分页查询    /v3/thirdChannel/channel/list
 *
 * @params      { Integer  }      status                        status
 * @params      { Integer  }      pageSize                      pageSize
 * @params      { Integer  }      pageIndex                     pageIndex
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.getThirdChannelChannelListV3({
    params: {
        status: '0',
        pageSize: '10',
        pageIndex: '0',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) undefined",
            "code": "(string) undefined",
            "finalLink": "(string) 总链",
            "linkCount": "(string) 已投放链接数量,比如8+3表示8个银行3个卡",
            "name": "(string) undefined",
            "pvData": [
                {
                    "notice": "(string) undefined",
                    "text": "(string) undefined",
                    "value": "(string) undefined"
                }
            ],
            "remark": "(string) 备注",
            "status": "(integer) 0启用，1禁用，2已生成总链"
        }
    ]
}
*/



/**
 * 更新    /v3/thirdChannel/channel/update
 *
 * @params      { Object   }      updateThirdChannelParam                          第三方渠道更新参数
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.putThirdChannelChannelUpdateV3({
    data: {
        autoId: '(integer) 渠道id(主键Id ）',
        linkList: [{
        	autoId: '(integer) autoId',
        	autoSync: '(integer) 是否自动从管家进行同步,1是,2否,默认=1',
        	link: '(string) 链接',
        	linkType: '(integer) 链接类型,1银行,2卡片',
        	needAddParentNode: '(boolean) 是否应该加父节点，前端不使用',
        	orderIdx: '(integer) 排序号，前端不使用',
        	showCities: '(string) 显示的城市:仅在链接类型=1时可以设置',
        }],
        name: '(string) 渠道名称',
        remark: '(string) 渠道备注：一般也不用赋值',
        status: '(integer) 状态参数: 请注意前端不需要为该属性赋值',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新状态    /v3/thirdChannel/channel/updateStatus/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { Integer  }      status                        status
 * @params      { String   }      Authorization                 service token
 */
BdcBanka.putThirdChannelChannelUpdateStatusIdV3({
    params: {
        id: 'undefined',
        status: '0',
    },
    headers: {
        Authorization: 'service 123', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取卡权益信息    /v4/bankCard/cardRight/info
 *
 * @params      { String   }      cardId                        cardId
 * @params      { String   }      url                           url
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getBankCardCardRightInfoV4({
    params: {
        cardId: 'undefined',
        url: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "contentType": "(string) undefined"
}
*/



/**
 * 全部或者热门银行信用卡数据列表详情-首次进入全部或者热门银行信用卡    /v4/bankCard/cards/detail
 *
 * @params      { Integer  }      bankId                        查询的热门银行记录ID(id)
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardCardsDetailV4({
    params: {
        bankId: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
        pageNumber: '1',
        pageRecordCount: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cardInfoDTOList": [
        {
            "applyNum": "(integer) undefined",
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "customBankName": "(string) undefined",
    "detailPagePromotionInfo": "(string) undefined",
    "id": "(integer) undefined",
    "optionId": "(integer) undefined",
    "pictureURL": "(string) undefined",
    "queryOptionList": [
        {
            "optionList": [
                {
                    "optionId": "(integer) undefined",
                    "optionName": "(string) undefined",
                    "recommendation": "(string) undefined"
                }
            ],
            "optionName": "(string) undefined",
            "optionParam": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 获取全部或者热门银行信用卡数据列表信息(含分页)-全部或者热门银行信用卡往下拉    /v4/bankCard/cards/list
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      bankId                        查询的银行ID
 * @params      { Integer  }      purposeOptionId               用途
 * @params      { Integer  }      gradeOptionId                 等级
 * @params      { Integer  }      feeOptionId                   年费
 * @params      { String   }      orgnizationOptionId           卡组织,多选用逗号分隔
 * @params      { Integer  }      currencyOptionId              币种
 * @params      { String   }      privilegeOptionId             特权,多选用逗号分隔
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardCardsListV4({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
        bankId: 'undefined',
        purposeOptionId: 'undefined',
        gradeOptionId: 'undefined',
        feeOptionId: 'undefined',
        orgnizationOptionId: 'undefined',
        currencyOptionId: 'undefined',
        privilegeOptionId: 'undefined',
        pageNumber: '1',
        pageRecordCount: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cardInfoDTOList": [
        {
            "applyNum": "(integer) undefined",
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "customBankName": "(string) undefined",
    "detailPagePromotionInfo": "(string) undefined",
    "id": "(integer) undefined",
    "optionId": "(integer) undefined",
    "pictureURL": "(string) undefined",
    "queryOptionList": [
        {
            "optionList": [
                {
                    "optionId": "(integer) undefined",
                    "optionName": "(string) undefined",
                    "recommendation": "(string) undefined"
                }
            ],
            "optionName": "(string) undefined",
            "optionParam": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 获取前段展示的各个栏目模块配置列表数据(含搜索)-办卡首页    /v4/bankCard/catalog/list
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardCatalogListV4({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: '3301',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "catalogColumnInfoDTOS": [
        {
            "data": [
                {
                    "bankId": "(integer) undefined",
                    "cardId": "(string) undefined",
                    "fontColor": "(string) undefined",
                    "hotTag": "(string) undefined",
                    "id": "(integer) undefined",
                    "itemName": "(string) undefined",
                    "linkUrl": "(string) undefined",
                    "pictureURL": "(string) undefined",
                    "promotionDetail": "(string) undefined",
                    "promotionTag": "(string) undefined",
                    "resourceId": "(string) undefined",
                    "themeId": "(integer) undefined"
                }
            ],
            "moduleId": "(string) undefined",
            "moduleName": "(string) undefined"
        }
    ],
    "recommendWord": "(string) 配置的推荐信息"
}
*/



/**
 * 获取用户的 feed 文章列表    /v4/bankCard/feeds/list
 *
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardFeedsListV4({
    params: {
        pageNumber: '1',
        pageRecordCount: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "actionValue": "(string) feed路由Url参数",
        "coverImgs": [],
        "feedId": "(string) feedId",
        "feedType": "(integer) feed类型",
        "operationCfgPreviewMap": {},
        "rankIndex": "(integer) 个性化推荐排序游标",
        "routerUrl": "(string) feed路由Url",
        "title": "(string) 标题"
    }
]
*/



/**
 * 获取办卡成功页信用卡列表    /v4/bankCard/suceesspage/list
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardSuceesspageListV4({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "autoId": "(integer) undefined",
        "bankId": "(integer) undefined",
        "cardId": "(string) undefined",
        "itemName": "(string) undefined",
        "linkUrl": "(string) undefined",
        "pictureUrl": "(string) undefined",
        "promotionDetail": "(string) undefined",
        "resourceId": "(string) undefined"
    }
]
*/



/**
 * 获取活动模板    /v4/bankCard/theme/{id}/detail
 *
 * @params      { Integer  }      id                            主题ID信息
 * @params      { Integer  }      columnThemeId                 栏目配置记录主题ID信息
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
BdcBanka.getBankCardThemeIdDetailV4({
    params: {
        id: 'undefined',
        columnThemeId: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '180050381', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "buttonLinkUrl": "(string) undefined",
    "cardInfoList": [
        {
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "moreInfoLinkUrl": "(string) 更多卡片信息链接",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined"
        }
    ],
    "customThemeName": "(string) undefined",
    "id": "(integer) undefined",
    "moreInfoLinkUrl": "(string) 更多信息链接",
    "prizeLinkUrl": "(string) 奖品链接",
    "prizePictureUrl": "(string) 奖品图片链接地址",
    "shareCopyWriting": "(string) 分享文案",
    "shareLinkUrl": "(string) 分享链接",
    "shareLogoUrl": "(string) 分享图片链接地址",
    "shareTitle": "(string) 分享标题",
    "templateStyle": "(integer) 模板类型,1：模板类型1，2：模板类型2",
    "themeDescribe": "(string) undefined"
}
*/



/**
 * 获取第三方渠道热门银行下面的信用卡数据列表(含分页)-某银行的卡列表    /v4/thirdChannel/bank/cards/list
 *
 * @params      { String   }      channelCode                   第三方渠道码
 * @params      { String   }      cityCode                      城市代码
 * @params      { Integer  }      hotBankId                     查询的热门银行记录ID(id)
 * @params      { Integer  }      pageNumber                    页数
 * @params      { Integer  }      pageRecordCount               页面记录数
 */
BdcBanka.getThirdChannelBankCardsListV4({
    params: {
        channelCode: 'undefined',
        cityCode: 'undefined',
        hotBankId: 'undefined',
        pageNumber: '1',
        pageRecordCount: '10',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cardInfoDTOList": [
        {
            "applyNum": "(integer) undefined",
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "customBankName": "(string) undefined",
    "detailPagePromotionInfo": "(string) undefined",
    "id": "(integer) undefined",
    "pictureURL": "(string) undefined"
}
*/



/**
 * 获取前段展示的第三方渠道各个栏目模块配置列表数据-办卡首页    /v4/thirdChannel/catalog/list
 *
 * @params      { String   }      channelCode                   渠道码
 * @params      { String   }      cityCode                      城市代码
 */
BdcBanka.getThirdChannelCatalogListV4({
    params: {
        channelCode: 'undefined',
        cityCode: '3301',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "catalogColumnInfoDTOS": [
        {
            "data": [
                {
                    "bankId": "(integer) undefined",
                    "cardId": "(string) undefined",
                    "fontColor": "(string) undefined",
                    "hotTag": "(string) undefined",
                    "id": "(integer) undefined",
                    "itemName": "(string) undefined",
                    "linkUrl": "(string) undefined",
                    "pictureURL": "(string) undefined",
                    "promotionDetail": "(string) undefined",
                    "promotionTag": "(string) undefined",
                    "resourceId": "(string) undefined",
                    "themeId": "(integer) undefined"
                }
            ],
            "moduleId": "(string) undefined",
            "moduleName": "(string) undefined"
        }
    ],
    "recommendWord": "(string) 配置的推荐信息"
}
*/



/**
 * 微信小程序埋点    /v4/weChatBank/wechat/burypoint
 *
 * @params      { String   }      module                        module
 * @params      { String   }      cardId                        cardId
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.postWeChatBankWechatBurypointV4({
    params: {
        module: 'undefined',
        cardId: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": "(string) undefined",
    "msg": "(string) undefined"
}
*/



/**
 * 获取栏目内容项配置内容列表记录    /v4/weChatBank/wechat/catalog
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getWeChatBankWechatCatalogV4({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "data": [
            {
                "bankId": "(integer) undefined",
                "cardId": "(string) undefined",
                "fontColor": "(string) undefined",
                "hotTag": "(string) undefined",
                "id": "(integer) undefined",
                "itemName": "(string) undefined",
                "linkUrl": "(string) undefined",
                "pictureURL": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "promotionTag": "(string) undefined",
                "resourceId": "(string) undefined",
                "themeId": "(integer) undefined"
            }
        ],
        "moduleId": "(string) undefined",
        "moduleName": "(string) undefined"
    }
]
*/



/**
 * 获取微信小程序配置信息    /v4/weChatBank/wechat/config
 *
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      version                       版本
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getWeChatBankWechatConfigV4({
    params: {
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        version: 'undefined', //版本
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "envStatus": "(integer) 环境状态[线上:0,测试:1,审核:2]",
    "type": "(integer) 行为类型[客服通知:0,短信通知:1,弹窗提示:2]"
}
*/



/**
 * 获取热门银行信息    /v4/weChatBank/wechat/hotbank
 *
 * @params      { Integer  }      columnHotBankId               银行ID
 * @params      { Integer  }      pageRecordCount               每页记录条数
 * @params      { Integer  }      pageNumber                    页码
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getWeChatBankWechatHotbankV4({
    params: {
        columnHotBankId: 'undefined',
        pageRecordCount: 'undefined',
        pageNumber: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cardInfoDTOList": [
        {
            "applyNum": "(integer) undefined",
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "customBankName": "(string) undefined",
    "detailPagePromotionInfo": "(string) undefined",
    "id": "(integer) undefined",
    "pictureURL": "(string) undefined"
}
*/



/**
 * 短信申卡链接    /v4/weChatBank/wechat/message
 *
 * @params      { String   }      encryptedData                 encryptedData
 * @params      { String   }      iv                            iv
 * @params      { String   }      code                          code
 * @params      { String   }      sessionFrom                   sessionFrom
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.postWeChatBankWechatMessageV4({
    params: {
        encryptedData: 'undefined',
        iv: 'undefined',
        code: 'undefined',
        sessionFrom: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": "(string) undefined",
    "msg": "(string) undefined"
}
*/



/**
 * 根据cardId获取卡权益id    /v4/weChatBank/wechat/right
 *
 * @params      { String   }      cardId                        cardId
 * @params      { String   }      openid                        openid
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getWeChatBankWechatRightV4({
    params: {
        cardId: 'undefined',
        openid: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bankid": "(integer) undefined",
    "cardId": "(string) undefined",
    "cardRightId": "(string) undefined",
    "title": "(string) undefined",
    "url": "(string) undefined"
}
*/



/**
 * 客服接口初始校验    /v4/weChatBank/wechat/service
 *
 * @params      { String   }      signature                     signature
 * @params      { String   }      timestamp                     timestamp
 * @params      { String   }      nonce                         nonce
 * @params      { String   }      echostr                       echostr
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getWeChatBankWechatServiceV4({
    params: {
        signature: 'undefined',
        timestamp: 'undefined',
        nonce: 'undefined',
        echostr: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": "(string) undefined",
    "msg": "(string) undefined"
}
*/



/**
 * 获取主题信息    /v4/weChatBank/wechat/theme
 *
 * @params      { Integer  }      id                            主题ID信息
 * @params      { Integer  }      columnThemeId                 栏目配置记录主题ID信息
 * @params      { String   }      longitude                     经度信息
 * @params      { String   }      latitude                      纬度信息
 * @params      { String   }      cityCode                      城市代码
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getWeChatBankWechatThemeV4({
    params: {
        id: 'undefined',
        columnThemeId: 'undefined',
        longitude: 'undefined',
        latitude: 'undefined',
        cityCode: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "buttonLinkUrl": "(string) undefined",
    "cardInfoList": [
        {
            "bankId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "moreInfoLinkUrl": "(string) 更多卡片信息链接",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined"
        }
    ],
    "customThemeName": "(string) undefined",
    "id": "(integer) undefined",
    "themeDescribe": "(string) undefined"
}
*/



/**
 * 根据code获取微信openid    /v4/weChatBank/wechat/token
 *
 * @params      { String   }      code                          code
 * @params      { String   }      appid                         appid
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
BdcBanka.getWeChatBankWechatTokenV4({
    params: {
        code: 'undefined',
        appid: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "openid": "(string) undefined"
}
*/



