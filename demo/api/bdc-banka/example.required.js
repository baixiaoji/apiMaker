import BdcBanka from './api/bdc-banka/api';


/**
* 好友点赞功能    /activity/citic/yanka/invite
*
*/
BdcBanka.postCiticYankaInviteActivity({
    data: {
        request: {
    "inviteCode": "(string) undefined"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 给自己点赞    /activity/citic/yanka/like
*
*/
BdcBanka.postCiticYankaLikeActivity({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取点赞排行    /activity/citic/yanka/rank
*
*/
BdcBanka.getCiticYankaRankActivity({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取我的点赞数,排名,邀请码等信息    /activity/citic/yanka/user
*
*/
BdcBanka.getCiticYankaUserActivity({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取配置好的奖励    /v1/awards
*
*/
BdcBanka.getAwardsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 平安提交办卡回调接口    /v1/bankCallBack/pingan/submitCallBk
*
*/
BdcBanka.postBankCallBackPinganSubmitCallBkV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 兴业提交办卡回调接口    /v1/bankCallBack/xingye/submitCallBk
*
*/
BdcBanka.postBankCallBackXingyeSubmitCallBkV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 中信提交办卡回调接口    /v1/bankCallBack/zx/zhongxincallback
*
*/
BdcBanka.postBankCallBackZxZhongxincallbackV1({
    params: {
        time: 'undefined', //time
        adid: 'undefined', //adid
        orderid: 'undefined', //orderid
        token: 'undefined', //token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 采集用户资料中获取所在地区的电话区号信息    /v1/cardApply/telephone/areaCode
*
*/
BdcBanka.getCardApplyTelephoneAreaCodeV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从银行入口进去获取用户是否授权使用个人信息标识    /v1/cardApply/user/bankConfirm/flag
*
*/
BdcBanka.getCardApplyUserBankConfirmFlagV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 采集用户资料中获取用户基本信息    /v1/cardApply/user/basic/info
*
*/
BdcBanka.getCardApplyUserBasicInfoV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户确认授权使用个人信息    /v1/cardApply/user/confirm
*
*/
BdcBanka.putCardApplyUserConfirmV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户是否授权使用个人信息标识    /v1/cardApply/user/confirm/flag
*
*/
BdcBanka.getCardApplyUserConfirmFlagV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 采集用户资料中获取用户详细信息    /v1/cardApply/user/detail/info
*
*/
BdcBanka.getCardApplyUserDetailInfoV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 采集用户资料中获取用户详细信息    /v1/cardApply/user/info/completeRate
*
*/
BdcBanka.getCardApplyUserInfoCompleteRateV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户信息是否填写完毕的标识true/false    /v1/cardApply/userInfo/flag
*
*/
BdcBanka.getCardApplyUserInfoFlagV1({
    params: {
        userId: 'undefined', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 银行注入页面用来分步骤请求用户的用户信息    /v1/cardApply/{bankId}/step/{step}/info
*
*/
BdcBanka.getCardApplyBankIdStepStepInfoV1({
    params: {
        bankId: 'undefined', //银行ID信息
        step: 'undefined', //填写银行信息的步骤：0、1、2、3、4、5
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户信息授权使用信息    /v1/cardApply/{userId}/info
*
*/
BdcBanka.getCardApplyUserIdInfoV1({
    params: {
        userId: 'undefined', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取卡片的申请链接内容    /v1/cardRight/base/info
*
*/
BdcBanka.getCardRightBaseInfoV1({
    params: {
        cardId: 'undefined', //cardId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取卡片的申请链接内容    /v1/cardRight/{cardId}/applyUrl
*
*/
BdcBanka.getCardRightCardIdApplyUrlV1({
    params: {
        cardId: 'undefined', //卡片ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* getThirdBankCity    /v1/getThirdBankCity
*
*/
BdcBanka.getGetThirdBankCityV1({
    params: {
        city_code: 'undefined', //city_code
        third_type: 'undefined', //third_type
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取配置的推荐卡片列表    /v1/invite/cards
*
*/
BdcBanka.getInviteCardsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 中信银行的链接交换，根据要求生成邀请链接    /v1/invite/cards/transfer/zhongxin
*
*/
BdcBanka.getInviteCardsTransferZhongxinV1({
    params: {
        originalUrl: 'undefined', //originalUrl
        userId: 'undefined', //userId
        userToken: 'undefined', //userToken
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取邀请数量    /v1/inviter/awards
*
*/
BdcBanka.getInviterAwardsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取奖励    /v1/inviter/awards/get
*
*/
BdcBanka.postInviterAwardsGetV1({
    data: {
        userAddressRequest: {
    "addressDetail": "(string) 详细地址",
    "cityCode": "(string) 城市code",
    "districtCode": "(string) 区code",
    "mobile": "(string) 手机号",
    "name": "(string) 收货人姓名",
    "provinceCode": "(string) 省份code"
}, //userAddressRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 已领取奖励的查看    /v1/inviter/awards/view
*
*/
BdcBanka.getInviterAwardsViewV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 邀请人与被邀请人的userId进行绑定    /v1/inviter/bind
*
*/
BdcBanka.getInviterBindV1({
    params: {
        inviteCode: 'undefined', //inviteCode
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 奖励获取情况轮播    /v1/inviter/carousel
*
*/
BdcBanka.getInviterCarouselV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 检查用户是不是已经成为邀请者    /v1/inviter/check
*
*/
BdcBanka.getInviterCheckV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 邀请人信息，头像与昵称    /v1/inviter/info
*
*/
BdcBanka.getInviterInfoV1({
    params: {
        inviteCode: 'undefined', //inviteCode
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取邀请数量    /v1/inviter/inviteCount
*
*/
BdcBanka.getInviterInviteCountV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 短信提醒被邀请人    /v1/inviter/notifySms
*
*/
BdcBanka.postInviterNotifySmsV1({
    params: {
        recordId: 'undefined', //recordId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 邀请纪录    /v1/inviter/records
*
*/
BdcBanka.getInviterRecordsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取分享元素    /v1/inviter/share
*
*/
BdcBanka.getInviterShareV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 办卡商城-额度测试    /v1/recommend/creditLimit/list
*
*/
BdcBanka.postRecommendCreditLimitListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 用户交互推荐卡片-获取满足该用户情况的卡列表历史记录    /v1/recommend/creditLimit/records
*
*/
BdcBanka.getRecommendCreditLimitRecordsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 批量额度测试的卡片列表信息    /v1/recommend/limittest/cards/list
*
*/
BdcBanka.getRecommendLimittestCardsListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 办卡商城-智能选卡    /v1/recommend/questions/list
*
*/
BdcBanka.getRecommendQuestionsListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询搜索的相关配置信息以及搜索历史记录    /v1/search/config/info
*
*/
BdcBanka.getSearchConfigInfoV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除用户的搜索历史记录    /v1/search/history/delete
*
*/
BdcBanka.deleteSearchHistoryDeleteV1({
    params: {
        inputWords: 'undefined', //用户历史搜索的关键字
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保存用户的搜索历史记录    /v1/search/keyWords/add
*
*/
BdcBanka.postSearchKeyWordsAddV1({
    params: {
        inputWords: 'undefined', //用户历史搜索的关键字
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 随笔提示搜索关键字信息(6个)    /v1/search/realtime/tips
*
*/
BdcBanka.getSearchRealtimeTipsV1({
    params: {
        inputWords: 'undefined', //用户输入的关键字
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* (查询银行)搜索最终的展示结果信息的(每页5个)    /v1/search/result/list
*
*/
BdcBanka.getSearchResultListV1({
    params: {
        inputWords: 'undefined', //用户输入的关键字
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* city    /v1/user/address/city
*
*/
BdcBanka.getUserAddressCityV1({
    params: {
        provinceCode: 'undefined', //provinceCode
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* district    /v1/user/address/district
*
*/
BdcBanka.getUserAddressDistrictV1({
    params: {
        cityCide: 'undefined', //cityCide
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改用户收货地址    /v1/user/address/latest
*
*/
BdcBanka.getUserAddressLatestV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 获取用户申请记录列表信息    /v2/applyRecord/applyRecords/list
*
*/
BdcBanka.getApplyRecordApplyRecordsListV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户查询所需要的银行登录账号记录信息    /v2/applyRecord/bank/account
*
*/
BdcBanka.getApplyRecordBankAccountV2({
    params: {
        bankId: 'undefined', //办卡对于的银行ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户查询所需要的银行登录账号记录信息(数据脱敏版)    /v2/applyRecord/bank/accountSafe
*
*/
BdcBanka.getApplyRecordBankAccountSafeV2({
    params: {
        bankId: 'undefined', //办卡对于的银行ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取银行配置记录信息    /v2/applyRecord/bank/config
*
*/
BdcBanka.getApplyRecordBankConfigV2({
    params: {
        bankId: 'undefined', //办卡对于的银行ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取特定银行的url    /v2/applyRecord/bank/generatedUrl
*
*/
BdcBanka.getApplyRecordBankGeneratedUrlV2({
    params: {
        cardId: 'undefined', //卡片ID
        bankId: 'undefined', //银行ID
        sourceUrl: 'undefined', //卡片本来的url
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询身份证和姓名信息    /v2/applyRecord/bank/getUserInfo
*
*/
BdcBanka.getApplyRecordBankGetUserInfoV2({
    params: {
        cardId: 'undefined', //卡片ID
        bankId: 'undefined', //银行ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有的银行的爬虫服务的可用状态    /v2/applyRecord/bank/service/list
*
*/
BdcBanka.getApplyRecordBankServiceListV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取某个银行的爬虫服务是否可用    /v2/applyRecord/bank/service/status
*
*/
BdcBanka.getApplyRecordBankServiceStatusV2({
    params: {
        bankId: 'undefined', //办卡对应的银行ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保存银行提交的身份证和姓名信息    /v2/applyRecord/bank/userInfo
*
*/
BdcBanka.postApplyRecordBankUserInfoV2({
    data: {
        bankCardUserApplyInfo: {
    "bankId": "(integer) undefined",
    "idCard": "(string) undefined",
    "mobileNo": "(string) undefined",
    "userName": "(string) undefined"
}, //用户申请的个人信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户查询进度记录列表信息    /v2/applyRecord/result/list
*
*/
BdcBanka.getApplyRecordResultListV2({
    params: {
        bankId: 'undefined', //办卡对于的银行ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 办卡首页获取用户申请卡入口信息    /v2/applyRecord/user/stateInfo
*
*/
BdcBanka.getApplyRecordUserStateInfoV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 平安办卡主动推送接口    /v2/bankCallBack/pingan/submitCallBk
*
*/
BdcBanka.postBankCallBackPinganSubmitCallBkV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取银行信息    /v2/bankRepo/get/{bankId}
*
*/
BdcBanka.getBankRepoGetBankIdV2({
    params: {
        bankId: 'undefined', //bankId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取银行信息列表    /v2/bankRepo/list
*
*/
BdcBanka.getBankRepoListV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交预约办卡信息    /v2/bookCards/apply/orderInfo
*
*/
BdcBanka.postBookCardsApplyOrderInfoV2({
    data: {
        userApplyOrderInfoParam: {
    "address": "(string) undefined",
    "areaCode": "(string) undefined",
    "areaName": "(string) undefined",
    "bankIds": "(string) undefined",
    "cardGrade": "(string) undefined",
    "channel": "(string) undefined",
    "cityCode": "(string) undefined",
    "companyName": "(string) undefined",
    "entryType": "(integer) undefined",
    "fund": "(string) undefined",
    "graduation": "(string) undefined",
    "idCard": "(string) undefined",
    "isUrgent": "(integer) undefined",
    "jobProve": "(string) undefined",
    "jobType": "(string) undefined",
    "lat": "(string) undefined",
    "lon": "(string) undefined",
    "mobile": "(string) undefined",
    "occupation": "(string) undefined",
    "socialensure": "(string) undefined",
    "trueName": "(string) undefined",
    "userLabel": "(string) undefined"
}, //用户提交预约办卡订单的信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询用户所有的预约办卡信息    /v2/bookCards/applyOrder/list
*
*/
BdcBanka.getBookCardsApplyOrderListV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交预约订单对于的办卡专员的相关信息    /v2/bookCards/attache/detail
*
*/
BdcBanka.getBookCardsAttacheDetailV2({
    params: {
        tradeId: 'undefined', //用户的tradeId信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取前段展示的可预约银行信息列表信息    /v2/bookCards/banks/list
*
*/
BdcBanka.getBookCardsBanksListV2({
    params: {
        cityCode: 'undefined', //所在地的城市代码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 评价办卡专员的相关信息    /v2/bookCards/evaluateAttache
*
*/
BdcBanka.putBookCardsEvaluateAttacheV2({
    params: {
        tradeId: 'undefined', //用户的tradeId信息
        attacheUserId: 'undefined', //专员ID信息
        appraiseType: 'undefined', //评价类型(true:好评,false:差评)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 取消预约办卡信息    /v2/bookCards/orderInfo/{tradeId}/cancel
*
*/
BdcBanka.putBookCardsOrderInfoTradeIdCancelV2({
    params: {
        tradeId: 'undefined', //订单tradeID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取信用卡属性    /v2/cardRepo/attribute/get/{attributeId}
*
*/
BdcBanka.getCardRepoAttributeGetAttributeIdV2({
    params: {
        attributeId: 'undefined', //卡属性ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 通过卡ID获取信用卡信息    /v2/cardRepo/get/{cardId}
*
*/
BdcBanka.getCardRepoGetCardIdV2({
    params: {
        cardId: 'undefined', //卡ID
        needCityInfo: 'undefined', //是否需要城市信息
        needAttributes: 'undefined', //是否需要卡属性信息
        needCardDetail: 'undefined', //是否需要卡详情
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 多条件筛选卡信息列表    /v2/cardRepo/list
*
*/
BdcBanka.postCardRepoListV2({
    data: {
        cardListQuery: {
    "bankId": "(integer) 银行ID",
    "cardAttributeQueryList": [
        {
            "attributeId": "(integer) 属性ID",
            "optionIdList": []
        }
    ],
    "cardIdList": [],
    "cardName": "(string) 卡名称",
    "cityCode": "(string) 城市编码",
    "needAttributes": "(boolean) 是否需要卡属性",
    "needCardDetail": "(boolean) 是否需要卡详情",
    "needCityInfo": "(boolean) 是否需要开放城市信息",
    "onlyCardIdNeeded": "(boolean) 是否只返回卡ID",
    "pageIndex": "(integer) 页码(从1开始)",
    "pageSize": "(integer) 分页大小"
}, //卡列表查询条件
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户的是否白名单配置    /v3/bankCard/ab/config
*
*/
BdcBanka.getBankCardAbConfigV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门银行下面的信用卡数据列表(含分页)-某银行的卡列表    /v3/bankCard/bank/cards/list
*
*/
BdcBanka.getBankCardBankCardsListV3({
    params: {
        hotBankId: 'undefined', //查询的热门银行记录ID(id)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 全部信用卡数据列表详情-首次进入全部信用卡    /v3/bankCard/cards/detail
*
*/
BdcBanka.getBankCardCardsDetailV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取全部信用卡数据列表信息(含分页)-全部信用卡往下拉    /v3/bankCard/cards/list
*
*/
BdcBanka.getBankCardCardsListV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取前段展示的各个栏目模块配置列表数据-办卡首页    /v3/bankCard/catalog/list
*
*/
BdcBanka.getBankCardCatalogListV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取今日主题的详情信息-即年末大盘点    /v3/bankCard/theme/{id}/detail
*
*/
BdcBanka.getBankCardThemeIdDetailV3({
    params: {
        id: 'undefined', //主题ID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取全部的地理省份城市信息    /v3/geography/city/list
*
*/
BdcBanka.getGeographyCityListV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取银行信息    /v3/thirdChannel/bank/{bankId}
*
*/
BdcBanka.getThirdChannelBankBankIdV3({
    params: {
        bankId: '3301', //银行Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 罗列第三方卡片列表    /v3/thirdChannel/card/list
*
*/
BdcBanka.getThirdChannelCardListV3({
    params: {
        channelCode: '51bk_kssys', //第三方渠道编号，比如51bk_kssys
        bankId: '3301', //银行Id
        cityCode: '3301', //城市代码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 罗列第三方首页    /v3/thirdChannel/catalog/list
*
*/
BdcBanka.getThirdChannelCatalogListV3({
    params: {
        channelCode: '51bk_kssys', //第三方渠道编号，比如51bk_kssys
        cityCode: '3301', //城市代码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加    /v3/thirdChannel/channel/add
*
*/
BdcBanka.postThirdChannelChannelAddV3({
    data: {
        addThirdChannelParam: {
    "linkList": [
        {
            "link": "(string) 链接",
            "linkType": "(integer) 链接类型,1银行,2卡片",
            "needAddParentNode": "(boolean) 是否应该加父节点，前端不使用"
        }
    ],
    "name": "(string) 名称",
    "remark": "(string) 备注"
}, //第三方渠道添加参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 链接详情查询    /v3/thirdChannel/channel/detail/{id}
*
*/
BdcBanka.getThirdChannelChannelDetailIdV3({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 分页查询    /v3/thirdChannel/channel/list
*
*/
BdcBanka.getThirdChannelChannelListV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新    /v3/thirdChannel/channel/update
*
*/
BdcBanka.putThirdChannelChannelUpdateV3({
    data: {
        updateThirdChannelParam: {
    "autoId": "(integer) 渠道id(主键Id ）",
    "linkList": [
        {
            "autoId": "(integer) autoId",
            "autoSync": "(integer) 是否自动从管家进行同步,1是,2否,默认=1",
            "link": "(string) 链接",
            "linkType": "(integer) 链接类型,1银行,2卡片",
            "needAddParentNode": "(boolean) 是否应该加父节点，前端不使用",
            "orderIdx": "(integer) 排序号，前端不使用",
            "showCities": "(string) 显示的城市:仅在链接类型=1时可以设置"
        }
    ],
    "name": "(string) 渠道名称",
    "remark": "(string) 渠道备注：一般也不用赋值",
    "status": "(integer) 状态参数: 请注意前端不需要为该属性赋值"
}, //第三方渠道更新参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新状态    /v3/thirdChannel/channel/updateStatus/{id}
*
*/
BdcBanka.putThirdChannelChannelUpdateStatusIdV3({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取卡权益信息    /v4/bankCard/cardRight/info
*
*/
BdcBanka.getBankCardCardRightInfoV4({
    params: {
        cardId: 'undefined', //cardId
        url: 'undefined', //url
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 全部或者热门银行信用卡数据列表详情-首次进入全部或者热门银行信用卡    /v4/bankCard/cards/detail
*
*/
BdcBanka.getBankCardCardsDetailV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取全部或者热门银行信用卡数据列表信息(含分页)-全部或者热门银行信用卡往下拉    /v4/bankCard/cards/list
*
*/
BdcBanka.getBankCardCardsListV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取前段展示的各个栏目模块配置列表数据(含搜索)-办卡首页    /v4/bankCard/catalog/list
*
*/
BdcBanka.getBankCardCatalogListV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户的 feed 文章列表    /v4/bankCard/feeds/list
*
*/
BdcBanka.getBankCardFeedsListV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取办卡成功页信用卡列表    /v4/bankCard/suceesspage/list
*
*/
BdcBanka.getBankCardSuceesspageListV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动模板    /v4/bankCard/theme/{id}/detail
*
*/
BdcBanka.getBankCardThemeIdDetailV4({
    params: {
        id: 'undefined', //主题ID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取第三方渠道热门银行下面的信用卡数据列表(含分页)-某银行的卡列表    /v4/thirdChannel/bank/cards/list
*
*/
BdcBanka.getThirdChannelBankCardsListV4({
    params: {
        channelCode: 'undefined', //第三方渠道码
        hotBankId: 'undefined', //查询的热门银行记录ID(id)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取前段展示的第三方渠道各个栏目模块配置列表数据-办卡首页    /v4/thirdChannel/catalog/list
*
*/
BdcBanka.getThirdChannelCatalogListV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 微信小程序埋点    /v4/weChatBank/wechat/burypoint
*
*/
BdcBanka.postWeChatBankWechatBurypointV4({
    params: {
        module: 'undefined', //module
        cardId: 'undefined', //cardId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取栏目内容项配置内容列表记录    /v4/weChatBank/wechat/catalog
*
*/
BdcBanka.getWeChatBankWechatCatalogV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取微信小程序配置信息    /v4/weChatBank/wechat/config
*
*/
BdcBanka.getWeChatBankWechatConfigV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门银行信息    /v4/weChatBank/wechat/hotbank
*
*/
BdcBanka.getWeChatBankWechatHotbankV4({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 短信申卡链接    /v4/weChatBank/wechat/message
*
*/
BdcBanka.postWeChatBankWechatMessageV4({
    params: {
        encryptedData: 'undefined', //encryptedData
        iv: 'undefined', //iv
        code: 'undefined', //code
        sessionFrom: 'undefined', //sessionFrom
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据cardId获取卡权益id    /v4/weChatBank/wechat/right
*
*/
BdcBanka.getWeChatBankWechatRightV4({
    params: {
        cardId: 'undefined', //cardId
        openid: 'undefined', //openid
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 客服接口初始校验    /v4/weChatBank/wechat/service
*
*/
BdcBanka.getWeChatBankWechatServiceV4({
    params: {
        signature: 'undefined', //signature
        timestamp: 'undefined', //timestamp
        nonce: 'undefined', //nonce
        echostr: 'undefined', //echostr
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取主题信息    /v4/weChatBank/wechat/theme
*
*/
BdcBanka.getWeChatBankWechatThemeV4({
    params: {
        id: 'undefined', //主题ID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据code获取微信openid    /v4/weChatBank/wechat/token
*
*/
BdcBanka.getWeChatBankWechatTokenV4({
    params: {
        code: 'undefined', //code
        appid: 'undefined', //appid
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
