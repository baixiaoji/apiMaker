import BdcBankaManager from './api/bdc-banka-manager/api';


/**
* 卡片详情    /v1/allCard/card/{id}/detail
*
*/
BdcBankaManager.getAllCardCardIdDetailV1({
    params: {
        id: 'undefined', //卡片autoId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增全部信用中的信用卡信息    /v1/allCard/item/add
*
*/
BdcBankaManager.postAllCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined', //信用卡记录ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 编辑修改信用卡信息    /v1/allCard/item/{id}/update
*
*/
BdcBankaManager.putAllCardItemIdUpdateV1({
    params: {
        id: 'undefined', //记录ID信息
    },
    data: {
        creditCardInfoParam: {
    "cardownerRecommendation": "(string) undefined",
    "hotTag": "(string) undefined",
    "prizeImageUrl": "(string) undefined",
    "recommendTag": "(string) undefined"
}, //参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询全部已选信用卡记录列f表    /v1/allCard/selectedCard/list
*
*/
BdcBankaManager.postAllCardSelectedCardListV1({
    data: {
        pageRequest: {
    "bankId": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //pageRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改全部信用卡显示顺序    /v1/allCard/shift/{id}
*
*/
BdcBankaManager.putAllCardShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询全部未选信用卡内容记录列表    /v1/allCard/unSelectedCard/list
*
*/
BdcBankaManager.postAllCardUnSelectedCardListV1({
    data: {
        cardUnSelectedQueryParam: {
    "bankId": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改全部信用卡内容记录的控位状态    /v1/allCard/updateFixedPositionFlag/{id}
*
*/
BdcBankaManager.putAllCardUpdateFixedPositionFlagIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改全部信用卡内容记录的显示状态    /v1/allCard/updateStatus/{id}
*
*/
BdcBankaManager.putAllCardUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除全部信用卡内容记录信息    /v1/allCard/{id}/delete
*
*/
BdcBankaManager.deleteAllCardIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关环境配置单个查询接口    /v1/audit/switch/action/info/{id}
*
*/
BdcBankaManager.getAuditSwitchActionInfoIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关功能配置列表    /v1/audit/switch/action/list
*
*/
BdcBankaManager.getAuditSwitchActionListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关功能配置更新接口    /v1/audit/switch/action/update
*
*/
BdcBankaManager.postAuditSwitchActionUpdateV1({
    data: {
        action: {
    "action": "(integer) undefined",
    "autoId": "(integer) undefined"
}, //action
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关通知文案id查询    /v1/audit/switch/content/info/{id}
*
*/
BdcBankaManager.getAuditSwitchContentInfoIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关通知文案配置列表    /v1/audit/switch/content/list
*
*/
BdcBankaManager.getAuditSwitchContentListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关通知文案配置更新接口    /v1/audit/switch/content/update
*
*/
BdcBankaManager.postAuditSwitchContentUpdateV1({
    data: {
        param: {
    "autoId": "(integer) undefined",
    "content": "(string) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关枚举值获取    /v1/audit/switch/enums
*
*/
BdcBankaManager.getAuditSwitchEnumsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关环境配置详情    /v1/audit/switch/env/info/{id}
*
*/
BdcBankaManager.getAuditSwitchEnvInfoIdV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关环境配置列表    /v1/audit/switch/env/list
*
*/
BdcBankaManager.getAuditSwitchEnvListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]上线开关环境配置更新接口    /v1/audit/switch/env/update
*
*/
BdcBankaManager.postAuditSwitchEnvUpdateV1({
    data: {
        wxEnvironment: {
    "autoId": "(integer) undefined",
    "env": "(integer) undefined",
    "version": "(string) undefined"
}, //wxEnvironment
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增邀请办卡奖励配置    /v1/awardConfig/add
*
*/
BdcBankaManager.postAwardConfigAddV1({
    data: {
        awardInfoParam: {
    "awardType": "(string) 奖品类型",
    "endTime": "(string) 奖品过期时间",
    "logImgUrl": "(string) 奖品图片url",
    "name": "(string) undefined",
    "price": "(integer) 奖品价格",
    "smallLogImgUrl": "(string) 奖品小图url",
    "targetAmount": "(integer) 奖品获取条件",
    "termId": "(integer) 期数id"
}, //awardInfoParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除奖励配置    /v1/awardConfig/delete/{id}
*
*/
BdcBankaManager.deleteAwardConfigDeleteIdV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取奖励配置    /v1/awardConfig/list
*
*/
BdcBankaManager.getAwardConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改奖励配置    /v1/awardConfig/update/{id}
*
*/
BdcBankaManager.putAwardConfigUpdateIdV1({
    params: {
        id: 'undefined', //id
    },
    data: {
        awardInfoParam: {
    "awardType": "(string) 奖品类型",
    "endTime": "(string) 奖品过期时间",
    "logImgUrl": "(string) 奖品图片url",
    "name": "(string) undefined",
    "price": "(integer) 奖品价格",
    "smallLogImgUrl": "(string) 奖品小图url",
    "targetAmount": "(integer) 奖品获取条件",
    "termId": "(integer) 期数id"
}, //awardInfoParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 导出快递信息    /v1/awardRecord/export
*
*/
BdcBankaManager.postAwardRecordExportV1({
    data: {
        idList: [], //idList
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询获取记录信息    /v1/awardRecord/list
*
*/
BdcBankaManager.getAwardRecordListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 导入快递信息    /v1/awardRecord/update
*
*/
BdcBankaManager.postAwardRecordUpdateV1({
    data: {
        awardRecordParams: [
    {
        "expressCompany": "(string) undefined",
        "expressNo": "(string) undefined",
        "id": "(integer) undefined",
        "mobile": "(string) undefined"
    }
], //awardRecordParams
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取银行信息列表    /v1/bankRepo/list
*
*/
BdcBankaManager.getBankRepoListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增活动模板栏目内容记录    /v1/card/activityTemplate/add
*
*/
BdcBankaManager.postCardActivityTemplateAddV1({
    data: {
        cardThemeInfoParam: {
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "cardInfoDTOList": [
        {
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendStar": "(number) undefined"
        }
    ],
    "linkUrl": "(string) undefined",
    "moreInfoLinkUrl": "(string) undefined",
    "prizeLinkUrl": "(string) undefined",
    "prizePictureUrl": "(string) undefined",
    "shareCopyWriting": "(string) undefined",
    "shareLinkUrl": "(string) undefined",
    "shareLogoUrl": "(string) undefined",
    "shareTitle": "(string) undefined",
    "templateStyle": "(integer) undefined",
    "themeDescribe": "(string) undefined",
    "themeName": "(string) undefined"
}, //主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改活动模板的关联信用卡列表的展示顺序    /v1/card/activityTemplate/card/shift/{id}
*
*/
BdcBankaManager.putCardActivityTemplateCardShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门活动模板下面的卡片的显示状态    /v1/card/activityTemplate/card/updateStatus/{id}
*
*/
BdcBankaManager.putCardActivityTemplateCardUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除关联的信用卡信息    /v1/card/activityTemplate/card/{id}/delete
*
*/
BdcBankaManager.deleteCardActivityTemplateCardIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 编辑修改活动模板下面的卡片信息    /v1/card/activityTemplate/card/{id}/update
*
*/
BdcBankaManager.putCardActivityTemplateCardIdUpdateV1({
    params: {
        id: 'undefined', //记录ID信息
    },
    data: {
        themeCardInfoParam: {
    "cardBackgroundPictureUrl": "(string) undefined",
    "cardCopyWriting": "(string) undefined",
    "customLinkUrl": "(string) undefined",
    "hotTag": "(string) undefined",
    "identificationFlag": "(integer) undefined",
    "recommendStar": "(number) undefined"
}, //参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增主题关联的信用卡配置信息    /v1/card/activityTemplate/cards/add
*
*/
BdcBankaManager.postCardActivityTemplateCardsAddV1({
    data: {
        cardThemeCardAddParam: {
    "autoId": "(integer) undefined",
    "cardIdList": []
}, //新增信用卡配置参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询活动模板详情信息    /v1/card/activityTemplate/detail/{id}
*
*/
BdcBankaManager.getCardActivityTemplateDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有活动模板的配置的内容列表    /v1/card/activityTemplate/list
*
*/
BdcBankaManager.postCardActivityTemplateListV1({
    data: {
        cardThemeQueryParam: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数",
    "status": "(integer) undefined"
}, //查询参数信息(status,-1:全部 0:启用 ，1:禁用)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 已选择活动模板关联的信用卡列表信息(编辑时使用)    /v1/card/activityTemplate/selected/cards
*
*/
BdcBankaManager.postCardActivityTemplateSelectedCardsV1({
    data: {
        themeSelectedCardQueryParam: {
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 移动位置    /v1/card/activityTemplate/shift/{id}
*
*/
BdcBankaManager.putCardActivityTemplateShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 未选择活动模板关联的信用卡列表信息(新增编辑时使用,新增时id为0)    /v1/card/activityTemplate/unSelected/cards
*
*/
BdcBankaManager.postCardActivityTemplateUnSelectedCardsV1({
    data: {
        themeUnSelectedCardQueryParam: {
    "bankId": "(integer) undefined",
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改活动模板的显示状态    /v1/card/activityTemplate/updateStatus/{id}
*
*/
BdcBankaManager.putCardActivityTemplateUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除活动模板记录信息    /v1/card/activityTemplate/{id}/delete
*
*/
BdcBankaManager.deleteCardActivityTemplateIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新主题内容记录信息    /v1/card/activityTemplate/{id}/update
*
*/
BdcBankaManager.putCardActivityTemplateIdUpdateV1({
    data: {
        cardThemeInfoParam: {
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "cardInfoDTOList": [
        {
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendStar": "(number) undefined"
        }
    ],
    "linkUrl": "(string) undefined",
    "moreInfoLinkUrl": "(string) undefined",
    "prizeLinkUrl": "(string) undefined",
    "prizePictureUrl": "(string) undefined",
    "shareCopyWriting": "(string) undefined",
    "shareLinkUrl": "(string) undefined",
    "shareLogoUrl": "(string) undefined",
    "shareTitle": "(string) undefined",
    "templateStyle": "(integer) undefined",
    "themeDescribe": "(string) undefined",
    "themeName": "(string) undefined"
}, //主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增广告位内容记录信息    /v1/card/advertise/add
*
*/
BdcBankaManager.postCardAdvertiseAddV1({
    data: {
        hotBankInfoParam: {
    "advertiseName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //广告位参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询热广告位记录详情信息    /v1/card/advertise/detail/{id}
*
*/
BdcBankaManager.getCardAdvertiseDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有公共资源库中广告位的内容列表    /v1/card/advertise/list
*
*/
BdcBankaManager.postCardAdvertiseListV1({
    data: {
        advertiseQueryParam: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数",
    "status": "(integer) undefined"
}, //查询参数信息(status,-1:全部,0 启用，1，禁用)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改广告位记录的显示状态    /v1/card/advertise/updateStatus/{id}
*
*/
BdcBankaManager.putCardAdvertiseUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除广告位记录信息    /v1/card/advertise/{id}/delete
*
*/
BdcBankaManager.deleteCardAdvertiseIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新广告位内容记录信息    /v1/card/advertise/{id}/update
*
*/
BdcBankaManager.putCardAdvertiseIdUpdateV1({
    data: {
        cardAdvertiseInfoParam: {
    "advertiseName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //广告位参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 展示三大类标签信息    /v1/card/attributeopt/attributes
*
*/
BdcBankaManager.getCardAttributeoptAttributesV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取属性标签的属性的列表信息    /v1/card/attributeopt/list
*
*/
BdcBankaManager.postCardAttributeoptListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改属性推广文案表信息    /v1/card/attributeopt/update
*
*/
BdcBankaManager.putCardAttributeoptUpdateV1({
    data: {
        cardAttributeOpts: [
    {
        "autoId": "(integer) id",
        "optionId": "(string) optionId,不存在该字段则为银行",
        "recommendation": "(string) recommendation"
    }
], //autoId和推荐文案组成的参数数组
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增热门银行详情信息    /v1/card/cardHotBank/add
*
*/
BdcBankaManager.postCardCardHotBankAddV1({
    data: {
        hotBankInfoParam: {
    "bankId": "(integer) undefined",
    "cardIdList": [],
    "customBankName": "(string) undefined",
    "linkUrl": "(string) undefined"
}, //热门银行栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除热门银行关联的信用卡信息    /v1/card/cardHotBank/card/{id}/delete
*
*/
BdcBankaManager.deleteCardCardHotBankCardIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增热门银行下面的信用卡配置    /v1/card/cardHotBank/cards/add
*
*/
BdcBankaManager.postCardCardHotBankCardsAddV1({
    params: {
        id: 'undefined', //热门银行记录ID信息
        'cardIdList[]': 'undefined', //热门银行关联的信用卡ID列表信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询热门银行记录配置详情    /v1/card/cardHotBank/detail/{id}
*
*/
BdcBankaManager.getCardCardHotBankDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有公共资源库中热门银行的内容列表    /v1/card/cardHotBank/list
*
*/
BdcBankaManager.postCardCardHotBankListV1({
    data: {
        cardHotBankQueryParam: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数",
    "status": "(integer) undefined"
}, //查询参数信息(status,-1:全部,0 启用，1，禁用)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 已选择热门银行关联的信用卡列表信息(编辑时使用)    /v1/card/cardHotBank/selected/cards
*
*/
BdcBankaManager.postCardCardHotBankSelectedCardsV1({
    data: {
        hotBankUnSelectedCardQueryParam: {
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 未选择热门银行关联的信用卡列表信息(新增编辑)    /v1/card/cardHotBank/unSelected/cards
*
*/
BdcBankaManager.postCardCardHotBankUnSelectedCardsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门银行的显示状态    /v1/card/cardHotBank/updateStatus/{id}
*
*/
BdcBankaManager.putCardCardHotBankUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除热门银行记录信息    /v1/card/cardHotBank/{id}/delete
*
*/
BdcBankaManager.deleteCardCardHotBankIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新热门银行情信息    /v1/card/cardHotBank/{id}/update
*
*/
BdcBankaManager.putCardCardHotBankIdUpdateV1({
    data: {
        hotBankInfoParam: {
    "bankId": "(integer) undefined",
    "cardIdList": [],
    "customBankName": "(string) undefined",
    "linkUrl": "(string) undefined"
}, //热门银行栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增主题栏目内容记录    /v1/card/theme/add
*
*/
BdcBankaManager.postCardThemeAddV1({
    data: {
        cardThemeInfoParam: {
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "cardInfoDTOList": [
        {
            "cardId": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined"
        }
    ],
    "linkUrl": "(string) undefined",
    "themeDescribe": "(string) undefined",
    "themeName": "(string) undefined"
}, //主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改主题管理的关联信用卡列表的展示顺序    /v1/card/theme/card/shift/{id}
*
*/
BdcBankaManager.putCardThemeCardShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门主题下面的卡片的显示状态    /v1/card/theme/card/updateStatus/{id}
*
*/
BdcBankaManager.putCardThemeCardUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除关联的信用卡信息    /v1/card/theme/card/{id}/delete
*
*/
BdcBankaManager.deleteCardThemeCardIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 编辑修改主题下面的卡片信息    /v1/card/theme/card/{id}/update
*
*/
BdcBankaManager.putCardThemeCardIdUpdateV1({
    params: {
        id: 'undefined', //记录ID信息
    },
    data: {
        themeCardInfoParam: {
    "customLinkUrl": "(string) undefined",
    "hotTag": "(string) undefined"
}, //参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增主题关联的信用卡配置信息    /v1/card/theme/cards/add
*
*/
BdcBankaManager.postCardThemeCardsAddV1({
    data: {
        cardThemeCardAddParam: {
    "autoId": "(integer) undefined",
    "cardIdList": []
}, //新增信用卡配置参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询主题记录详情信息    /v1/card/theme/detail/{id}
*
*/
BdcBankaManager.getCardThemeDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有公共资源库中主题管理的内容列表    /v1/card/theme/list
*
*/
BdcBankaManager.postCardThemeListV1({
    data: {
        cardThemeQueryParam: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数",
    "status": "(integer) undefined"
}, //查询参数信息(status,-1:全部 0:启用 ，1:禁用)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 已选择主题关联的信用卡列表信息(编辑时使用)    /v1/card/theme/selected/cards
*
*/
BdcBankaManager.postCardThemeSelectedCardsV1({
    data: {
        themeSelectedCardQueryParam: {
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 移动位置    /v1/card/theme/shift/{id}
*
*/
BdcBankaManager.putCardThemeShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 未选择主题关联的信用卡列表信息(新增编辑时使用,新增时id为0)    /v1/card/theme/unSelected/cards
*
*/
BdcBankaManager.postCardThemeUnSelectedCardsV1({
    data: {
        themeUnSelectedCardQueryParam: {
    "bankId": "(integer) undefined",
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改主题记录的显示状态    /v1/card/theme/updateStatus/{id}
*
*/
BdcBankaManager.putCardThemeUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除主题内容记录信息    /v1/card/theme/{id}/delete
*
*/
BdcBankaManager.deleteCardThemeIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新主题内容记录信息    /v1/card/theme/{id}/update
*
*/
BdcBankaManager.putCardThemeIdUpdateV1({
    data: {
        cardThemeInfoParam: {
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "cardInfoDTOList": [
        {
            "cardId": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined"
        }
    ],
    "linkUrl": "(string) undefined",
    "themeDescribe": "(string) undefined",
    "themeName": "(string) undefined"
}, //主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增邀请办卡卡片配置    /v1/cardConfig/add
*
*/
BdcBankaManager.postCardConfigAddV1({
    data: {
        param: {
    "cardId": "(string) undefined",
    "cardName": "(string) undefined",
    "description": "(string) undefined",
    "imgUrl": "(string) undefined",
    "termId": "(integer) undefined",
    "termTitle": "(string) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有卡片信息    /v1/cardConfig/cards
*
*/
BdcBankaManager.getCardConfigCardsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除卡片配置    /v1/cardConfig/delete/{id}
*
*/
BdcBankaManager.deleteCardConfigDeleteIdV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取卡片配置    /v1/cardConfig/list
*
*/
BdcBankaManager.getCardConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改卡片配置信息    /v1/cardConfig/shift/{id}
*
*/
BdcBankaManager.postCardConfigShiftIdV1({
    params: {
        id: 'undefined', //id
        type: 'undefined', //type
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改卡片配置    /v1/cardConfig/update/{id}
*
*/
BdcBankaManager.putCardConfigUpdateIdV1({
    params: {
        id: 'undefined', //id
    },
    data: {
        termParam: {
    "cardId": "(string) undefined",
    "cardName": "(string) undefined",
    "description": "(string) undefined",
    "imgUrl": "(string) undefined",
    "termId": "(integer) undefined",
    "termTitle": "(string) undefined"
}, //termParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询全部卡库卡片信息    /v1/cardRepo/all/list
*
*/
BdcBankaManager.getCardRepoAllListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取信用卡属性类别(带属性项)    /v1/cardRepo/attr/get/{attributeId}
*
*/
BdcBankaManager.getCardRepoAttrGetAttributeIdV1({
    params: {
        attributeId: 'undefined', //卡属性ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取信用卡属性列表(带属性项)    /v1/cardRepo/attr/list
*
*/
BdcBankaManager.getCardRepoAttrListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保存信用卡属性    /v1/cardRepo/attr/save
*
*/
BdcBankaManager.postCardRepoAttrSaveV1({
    data: {
        cardAttribute: {
    "attributeId": "(integer) 属性ID",
    "attributeName": "(string) 属性名称",
    "attributeType": "(string) 类型(1:单选,2:多选)",
    "optionList": [
        {
            "optionId": "(integer) 属性项ID",
            "optionName": "(string) 属性项名称",
            "recommendation": "(string) 提示语"
        }
    ]
}, //信用卡属性
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取卡权益列表信息(分页)    /v1/cardRepo/cardunits/list
*
*/
BdcBankaManager.postCardRepoCardunitsListV1({
    data: {
        cardUnitListSearchReq: {
    "bankId": "(integer) 银行id",
    "cardCurrencies": "(string) 卡币种",
    "cardLevel": "(string) 卡等级",
    "cardOrganizations": "(string) 卡组织",
    "cardSerial": "(integer) 卡系列",
    "pageIndex": "(integer) 分页页码",
    "pageSize": "(integer) 分页大小",
    "status": "(integer) 状态",
    "title": "(string) 卡名称"
}, //卡权益信息查询实体
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除信用卡信息    /v1/cardRepo/delete/{cardId}
*
*/
BdcBankaManager.getCardRepoDeleteCardIdV1({
    params: {
        cardId: 'undefined', //卡ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 通过卡ID获取信用卡信息    /v1/cardRepo/get
*
*/
BdcBankaManager.getCardRepoGetV1({
    params: {
        cardId: 'undefined', //卡ID
        needCityInfo: 'undefined', //是否需要城市信息
        needAttributes: 'undefined', //是否需要属性信息
        needCardDetail: 'undefined', //是否需要详情
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取信用卡信息列表(分页)    /v1/cardRepo/list
*
*/
BdcBankaManager.postCardRepoListV1({
    data: {
        cardListQuery: {
    "bankId": "(integer) 银行ID",
    "cardIdList": [],
    "cardName": "(string) 卡名称",
    "excludedCardIdList": [],
    "needAttributes": "(boolean) 是否需要卡属性",
    "needCardDetail": "(boolean) 是否需要卡详情",
    "needCityInfo": "(boolean) 是否需要开放城市信息",
    "pageIdx": "(integer) 页码(从1开始)",
    "pageSize": "(integer) 分页大小",
    "status": "(string) 状态(0:启用,1:禁用,3:启用和禁用)"
}, //信用卡信息查询实体
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保存信用卡信息    /v1/cardRepo/save
*
*/
BdcBankaManager.postCardRepoSaveV1({
    data: {
        cardRequest: {
    "applyUrl": "(string) 卡申请链接",
    "bankId": "(integer) 银行ID",
    "bankMark": "(string) 卡标识",
    "cardAttributeRequestList": [
        {
            "attributeId": "(integer) 属性ID",
            "optionIdList": []
        }
    ],
    "cardId": "(string) 卡ID",
    "cardImageUrl": "(string) 卡图片地址",
    "cardName": "(string) 卡名称",
    "cities": [],
    "currentApplyNum": "(integer) 初始申请人数",
    "detail": "(string) 卡详情",
    "gcpFeedCardDTOList": [
        {
            "gcpCardName": "(string) 卡权益记录对应的卡片名字",
            "gcpFeedId": "(integer) 卡权益记录ID"
        }
    ],
    "mainNoLen": "(integer) 卡号长度",
    "recommendation": "(string) 推广语",
    "status": "(string) 状态(0:正常,1:禁用,2:标记删除)"
}, //卡信息请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更改信用卡状态    /v1/cardRepo/updateStatus
*
*/
BdcBankaManager.getCardRepoUpdateStatusV1({
    params: {
        cardId: 'undefined', //卡ID
        status: 'undefined', //状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增卡片激活相关配置内容    /v1/closedCycle/activeConfig/add
*
*/
BdcBankaManager.postClosedCycleActiveConfigAddV1({
    data: {
        closeBankConfigParam: {
    "activateLinkUrl": "(string) undefined",
    "activatePhoneNo": "(string) undefined",
    "bankId": "(integer) undefined"
}, //卡片激活相关配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有未配置的的银行信息列表    /v1/closedCycle/activeConfig/bank/list
*
*/
BdcBankaManager.getClosedCycleActiveConfigBankListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询卡片激活相关配置详情信息    /v1/closedCycle/activeConfig/detail/{id}
*
*/
BdcBankaManager.getClosedCycleActiveConfigDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有度查询配置的内容列表    /v1/closedCycle/activeConfig/list
*
*/
BdcBankaManager.postClosedCycleActiveConfigListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页查询参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新卡片激活相关配置信息    /v1/closedCycle/activeConfig/{id}/update
*
*/
BdcBankaManager.putClosedCycleActiveConfigIdUpdateV1({
    data: {
        closeBankConfigParam: {
    "activateLinkUrl": "(string) undefined",
    "activatePhoneNo": "(string) undefined",
    "bankId": "(integer) undefined"
}, //更新卡片激活相关配置信息参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增度查询配置记录内容    /v1/closedCycle/config/add
*
*/
BdcBankaManager.postClosedCycleConfigAddV1({
    data: {
        closedCycleBankInfoParam: {
    "bankId": "(integer) undefined",
    "bankLinkUrl": "(string) undefined",
    "bankName": "(string) undefined",
    "noticeInfo": "(string) undefined",
    "status": "(integer) undefined"
}, //度查询配置记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有未配置的的银行信息列表    /v1/closedCycle/config/bank/list
*
*/
BdcBankaManager.getClosedCycleConfigBankListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询进度查询配置记录详情信息    /v1/closedCycle/config/detail/{id}
*
*/
BdcBankaManager.getClosedCycleConfigDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有度查询配置的内容列表    /v1/closedCycle/config/list
*
*/
BdcBankaManager.postClosedCycleConfigListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页查询参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改进度配置的记录的显示状态    /v1/closedCycle/config/updateStatus/{id}
*
*/
BdcBankaManager.putClosedCycleConfigUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新度查询配置记录记录信息    /v1/closedCycle/config/{id}/update
*
*/
BdcBankaManager.putClosedCycleConfigIdUpdateV1({
    data: {
        closedCycleBankInfoParam: {
    "bankId": "(integer) undefined",
    "bankLinkUrl": "(string) undefined",
    "bankName": "(string) undefined",
    "noticeInfo": "(string) undefined",
    "status": "(integer) undefined"
}, //度查询配置记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增banner位广告内容记录配置信息    /v1/column/banner/item/add
*
*/
BdcBankaManager.postColumnBannerItemAddV1({
    params: {
        'advertiseIdList[]': 'undefined', //新增的广告位的记录ID列表信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有未选择的广告位内容列表记录信息    /v1/column/banner/item/advertise/list
*
*/
BdcBankaManager.postColumnBannerItemAdvertiseListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页数据信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改banner位栏目内容记录信息    /v1/column/banner/item/shift/{id}
*
*/
BdcBankaManager.putColumnBannerItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改banner位栏目内容记录的显示状态    /v1/column/banner/item/updateStatus/{id}
*
*/
BdcBankaManager.putColumnBannerItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除banner位栏目内容记录信息    /v1/column/banner/item/{id}/delete
*
*/
BdcBankaManager.deleteColumnBannerItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取banner位的列表    /v1/column/banner/list
*
*/
BdcBankaManager.postColumnBannerListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增综合业务栏目内容记录详情信息    /v1/column/business/item/add
*
*/
BdcBankaManager.postColumnBusinessItemAddV1({
    data: {
        businessInfoParam: {
    "businessName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined"
}, //综合业务栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询综合业务栏目内容记录详情信息    /v1/column/business/item/detail/{id}
*
*/
BdcBankaManager.getColumnBusinessItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改综合业务栏目内容记录信息    /v1/column/business/item/shift/{id}
*
*/
BdcBankaManager.putColumnBusinessItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改综合业务栏目内容记录的显示状态    /v1/column/business/item/updateStatus/{id}
*
*/
BdcBankaManager.putColumnBusinessItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除综合业务栏目内容记录信息    /v1/column/business/item/{id}/delete
*
*/
BdcBankaManager.deleteColumnBusinessItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新综合业务栏目内容记录详情信息    /v1/column/business/item/{id}/update
*
*/
BdcBankaManager.putColumnBusinessItemIdUpdateV1({
    data: {
        businessInfoParam: {
    "businessName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined"
}, //综合业务栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取综合业务栏列表信息    /v1/column/business/list
*
*/
BdcBankaManager.postColumnBusinessListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门银行栏目关联信用卡列表的推荐位    /v1/column/cardHotBank/card/resetrecommend/{id}
*
*/
BdcBankaManager.putColumnCardHotBankCardResetrecommendIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门银行栏目关联信用卡列表的展示顺序    /v1/column/cardHotBank/card/shift/{id}
*
*/
BdcBankaManager.putColumnCardHotBankCardShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门银行栏目内容记录下面卡片的显示状态    /v1/column/cardHotBank/card/updateStatus/{id}
*
*/
BdcBankaManager.putColumnCardHotBankCardUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询热门银行栏目内容里的卡片记录详情信息    /v1/column/cardHotBank/card/{id}/detail
*
*/
BdcBankaManager.getColumnCardHotBankCardIdDetailV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新热门银行栏目内容里的卡片记录详情信息    /v1/column/cardHotBank/card/{id}/update
*
*/
BdcBankaManager.putColumnCardHotBankCardIdUpdateV1({
    data: {
        hotBankInfoParam: {
    "cardId": "(string) undefined",
    "cardownerRecommendation": "(string) undefined",
    "hotTag": "(string) undefined",
    "linkUrl": "(string) undefined",
    "prizeImageUrl": "(string) undefined",
    "promotionTag": "(string) undefined"
}, //热门银行栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询热门银行下面的所有信用卡列表信息    /v1/column/cardHotBank/cards/list
*
*/
BdcBankaManager.postColumnCardHotBankCardsListV1({
    data: {
        hotBankCardQueryParam: {
    "hotBankId": "(integer) undefined",
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //热门银行下面的所有信用卡参数封装,ID:标识具体的栏目内容记录,0标识新增,其他具体值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 热门银行列表    /v1/column/cardHotBank/hotBank/list
*
*/
BdcBankaManager.getColumnCardHotBankHotBankListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增热门银行栏目内容记录详情信息    /v1/column/cardHotBank/item/add
*
*/
BdcBankaManager.postColumnCardHotBankItemAddV1({
    data: {
        hotBankInfoParam: {
    "hotBankCardParamList": [
        {
            "cardId": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "hotBankId": "(integer) undefined",
    "hotBankName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "promotionDetailPage": "(string) undefined",
    "promotionTag": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //热门银行栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询热门银行栏目内容记录详情信息    /v1/column/cardHotBank/item/detail/{id}
*
*/
BdcBankaManager.getColumnCardHotBankItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门银行栏目内容展示顺序    /v1/column/cardHotBank/item/shift/{id}
*
*/
BdcBankaManager.putColumnCardHotBankItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门银行栏目内容记录的控位状态    /v1/column/cardHotBank/item/updateFixedPositionFlag/{id}
*
*/
BdcBankaManager.putColumnCardHotBankItemUpdateFixedPositionFlagIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门银行栏目内容记录的显示状态    /v1/column/cardHotBank/item/updateStatus/{id}
*
*/
BdcBankaManager.putColumnCardHotBankItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除热门银行栏目内容记录信息    /v1/column/cardHotBank/item/{id}/delete
*
*/
BdcBankaManager.deleteColumnCardHotBankItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新热门银行栏目内容记录详情信息    /v1/column/cardHotBank/item/{id}/update
*
*/
BdcBankaManager.putColumnCardHotBankItemIdUpdateV1({
    data: {
        hotBankInfoParam: {
    "hotBankCardParamList": [
        {
            "cardId": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "hotBankId": "(integer) undefined",
    "hotBankName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "promotionDetailPage": "(string) undefined",
    "promotionTag": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //热门银行栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门银行的列表信息    /v1/column/cardHotBank/list
*
*/
BdcBankaManager.postColumnCardHotBankListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取banner位的详情页配置信息    /v1/column/config/banner/detail
*
*/
BdcBankaManager.postColumnConfigBannerDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取综合业务栏目配置详情页信息    /v1/column/config/business/detail
*
*/
BdcBankaManager.postColumnConfigBusinessDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门银行的详情页配置信息    /v1/column/config/cardHotBank/detail
*
*/
BdcBankaManager.postColumnConfigCardHotBankDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门卡片的详情页配置信息    /v1/column/config/hotCard/detail
*
*/
BdcBankaManager.postColumnConfigHotCardDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有的栏目列表配置    /v1/column/config/list
*
*/
BdcBankaManager.getColumnConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取今日推荐的详情页配置信息    /v1/column/config/recommend/detail
*
*/
BdcBankaManager.postColumnConfigRecommendDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改上下移的位置    /v1/column/config/shift/{id}
*
*/
BdcBankaManager.putColumnConfigShiftIdV1({
    params: {
        id: 'undefined', //记录ID
        type: 'undefined', //移动类型(1:上移；2：下移 ；3:置顶)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取主题精选栏目的的详情页配置信息    /v1/column/config/theme/detail
*
*/
BdcBankaManager.postColumnConfigThemeDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改栏目名字和状态信息    /v1/column/config/update/{id}
*
*/
BdcBankaManager.putColumnConfigUpdateIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新栏目配置是否展示状态    /v1/column/config/updateStatus/{id}
*
*/
BdcBankaManager.putColumnConfigUpdateStatusIdV1({
    params: {
        id: 'undefined', //记录ID
        status: 'undefined', //状态信息(status: 0 启用，1，禁用)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改栏目内容配置名字信息    /v1/column/config/{id}/update
*
*/
BdcBankaManager.putColumnConfigIdUpdateV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 热门卡片栏目中的已选信用卡信息列表    /v1/column/hotCard/cardsSelected/list
*
*/
BdcBankaManager.postColumnHotCardCardsSelectedListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 热门卡片栏目中的未选信用卡信息列表    /v1/column/hotCard/cardsUnSelected/list
*
*/
BdcBankaManager.postColumnHotCardCardsUnSelectedListV1({
    data: {
        cardUnSelectedQueryParam: {
    "bankId": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //热门卡片栏目内容记录参数信息(bankId&#x3D;0标识全部)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增热门卡片栏目中的信用卡信息    /v1/column/hotCard/item/add
*
*/
BdcBankaManager.postColumnHotCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined', //热门卡片栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询热门卡片栏目内容记录详情信息    /v1/column/hotCard/item/detail/{id}
*
*/
BdcBankaManager.getColumnHotCardItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门卡片栏目内容记录信息    /v1/column/hotCard/item/shift/{id}
*
*/
BdcBankaManager.putColumnHotCardItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门卡片栏目内容记录的控位状态    /v1/column/hotCard/item/updateFixedPositionFlag/{id}
*
*/
BdcBankaManager.putColumnHotCardItemUpdateFixedPositionFlagIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改热门卡片栏目内容记录的显示状态    /v1/column/hotCard/item/updateStatus/{id}
*
*/
BdcBankaManager.putColumnHotCardItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除热门卡片栏目内容记录信息    /v1/column/hotCard/item/{id}/delete
*
*/
BdcBankaManager.deleteColumnHotCardItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新热门卡片栏目内容记录详情信息    /v1/column/hotCard/item/{id}/update
*
*/
BdcBankaManager.putColumnHotCardItemIdUpdateV1({
    data: {
        hotCardInfoParam: {
    "hotTag": "(string) undefined",
    "linkUrl": "(string) undefined",
    "recommendTag": "(string) undefined"
}, //热门卡片栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询推荐栏目卡库卡片查询参数(添加+编辑)    /v1/column/recommend/cards/list
*
*/
BdcBankaManager.postColumnRecommendCardsListV1({
    data: {
        recommendCardQueryParam: {
    "bankId": "(integer) undefined",
    "cardName": "(string) undefined",
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询推荐栏目卡库卡片查询参数(queryType:1按银行查询,2按卡片名称查询,(今天推荐栏目记录ID)id:添加时为0,编辑为具体的值),bankId:0表示全部银行
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增今日推荐栏目内容记录详情信息    /v1/column/recommend/item/add
*
*/
BdcBankaManager.postColumnRecommendItemAddV1({
    data: {
        recommendInfoParam: {
    "cardId": "(string) undefined",
    "cardLinkUrl": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "recommendDetail": "(string) undefined",
    "recommendName": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //今日推荐栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询今日推荐栏目内容记录详情信息    /v1/column/recommend/item/detail/{id}
*
*/
BdcBankaManager.getColumnRecommendItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询全部推荐栏目内容记录详情列表    /v1/column/recommend/item/list
*
*/
BdcBankaManager.postColumnRecommendItemListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //pageRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改今日推荐栏目内容记录信息    /v1/column/recommend/item/shift/{id}
*
*/
BdcBankaManager.putColumnRecommendItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改今日推荐内容记录的控位状态    /v1/column/recommend/item/updateFixedPositionFlag/{id}
*
*/
BdcBankaManager.putColumnRecommendItemUpdateFixedPositionFlagIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改今日推荐栏目内容记录的显示状态    /v1/column/recommend/item/updateStatus/{id}
*
*/
BdcBankaManager.putColumnRecommendItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除今日推荐栏目内容记录信息    /v1/column/recommend/item/{id}/delete
*
*/
BdcBankaManager.deleteColumnRecommendItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新今日推荐栏目内容记录详情信息    /v1/column/recommend/item/{id}/update
*
*/
BdcBankaManager.putColumnRecommendItemIdUpdateV1({
    data: {
        recommendInfoParam: {
    "cardId": "(string) undefined",
    "cardLinkUrl": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "recommendDetail": "(string) undefined",
    "recommendName": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //今日推荐栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询公共资源库中主题精内容简单信息列表    /v1/column/theme/cardTheme/list
*
*/
BdcBankaManager.getColumnThemeCardThemeListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增主题精选栏目内容记录详情信息    /v1/column/theme/item/add
*
*/
BdcBankaManager.postColumnThemeItemAddV1({
    data: {
        themeInfoParam: {
    "customThemeName": "(string) undefined",
    "fontColor": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "themeId": "(integer) undefined"
}, //主题精选栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询主题精选栏目内容记录详情信息    /v1/column/theme/item/detail/{id}
*
*/
BdcBankaManager.getColumnThemeItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改主题精选栏目内容记录信息    /v1/column/theme/item/shift/{id}
*
*/
BdcBankaManager.putColumnThemeItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改主题精选栏目内容记录的显示状态    /v1/column/theme/item/updateStatus/{id}
*
*/
BdcBankaManager.putColumnThemeItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除主题精选栏目内容记录信息    /v1/column/theme/item/{id}/delete
*
*/
BdcBankaManager.deleteColumnThemeItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新主题精选栏目内容记录详情信息    /v1/column/theme/item/{id}/update
*
*/
BdcBankaManager.putColumnThemeItemIdUpdateV1({
    data: {
        themeInfoParam: {
    "customThemeName": "(string) undefined",
    "fontColor": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "themeId": "(integer) undefined"
}, //主题精选栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取主题精选栏目的列表信息    /v1/column/theme/list
*
*/
BdcBankaManager.postColumnThemeListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增配置版本信息    /v1/column/version/add
*
*/
BdcBankaManager.postColumnVersionAddV1({
    params: {
        versionInfo: 'undefined', //新增的版本信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取配置版本的列表信息    /v1/column/version/list
*
*/
BdcBankaManager.getColumnVersionListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除配置版本信息    /v1/column/version/{versionId}/delete
*
*/
BdcBankaManager.deleteColumnVersionVersionIdDeleteV1({
    params: {
        versionId: 'undefined', //记录ID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改配置版本信息    /v1/column/version/{versionId}/update
*
*/
BdcBankaManager.putColumnVersionVersionIdUpdateV1({
    params: {
        versionInfo: 'undefined', //版本信息
        versionId: 'undefined', //记录ID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增额度测试配置信息    /v1/limittest/config/add
*
*/
BdcBankaManager.postLimittestConfigAddV1({
    params: {
        limitType: 'undefined', //额度类别
        'cardIdList[]': 'undefined', //配置项卡片ID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取额度测试配置的列表信息    /v1/limittest/config/list
*
*/
BdcBankaManager.getLimittestConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除额度测试配置信息    /v1/limittest/config/{id}/delete
*
*/
BdcBankaManager.deleteLimittestConfigIdDeleteV1({
    params: {
        id: 'undefined', //limitType的值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取额度测试配置的详细信息    /v1/limittest/config/{id}/detail
*
*/
BdcBankaManager.getLimittestConfigIdDetailV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改额度测试配置信息    /v1/limittest/config/{id}/update
*
*/
BdcBankaManager.putLimittestConfigIdUpdateV1({
    params: {
        'cardIdList[]': 'undefined', //配置的卡片信息
        id: 'undefined', //limitType的值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取搜索配置的列表信息    /v1/search/config/list
*
*/
BdcBankaManager.getSearchConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改搜索配置信息    /v1/search/config/{id}/update
*
*/
BdcBankaManager.putSearchConfigIdUpdateV1({
    params: {
        'configContent[]': 'undefined', //修改后的配置项内容
        id: 'undefined', //记录ID信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增邀请办卡分享配置    /v1/shareConfig/add
*
*/
BdcBankaManager.postShareConfigAddV1({
    data: {
        shareInfoParam: {
    "shareImgUrl": "(string) 期数图标",
    "shareSubTitle": "(string) 期数分享子标题",
    "shareTitle": "(string) 期数分享标题",
    "shareUrl": "(string) 期数跳转链接",
    "termId": "(integer) 期数Id",
    "termTitle": "(string) 期数名"
}, //shareInfoParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除分享配置    /v1/shareConfig/delete/{id}
*
*/
BdcBankaManager.deleteShareConfigDeleteIdV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取分享配置    /v1/shareConfig/list
*
*/
BdcBankaManager.getShareConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改奖励配置    /v1/shareConfig/update/{termId}
*
*/
BdcBankaManager.putShareConfigUpdateTermIdV1({
    params: {
        termId: 'undefined', //termId
    },
    data: {
        shareInfoParam: {
    "shareImgUrl": "(string) 期数图标",
    "shareSubTitle": "(string) 期数分享子标题",
    "shareTitle": "(string) 期数分享标题",
    "shareUrl": "(string) 期数跳转链接",
    "termId": "(integer) 期数Id",
    "termTitle": "(string) 期数名"
}, //shareInfoParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增全部信用中的信用卡信息    /v1/successPageCard/item/add
*
*/
BdcBankaManager.postSuccessPageCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined', //信用卡记录ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询全部已选信用卡记录列表    /v1/successPageCard/selectedCard/list
*
*/
BdcBankaManager.postSuccessPageCardSelectedCardListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //pageRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改全部信用卡显示顺序    /v1/successPageCard/shift/{id}
*
*/
BdcBankaManager.putSuccessPageCardShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询全部未选信用卡内容记录列表    /v1/successPageCard/unSelectedCard/list
*
*/
BdcBankaManager.postSuccessPageCardUnSelectedCardListV1({
    data: {
        cardUnSelectedQueryParam: {
    "bankId": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改全部信用卡内容记录的显示状态    /v1/successPageCard/updateStatus/{id}
*
*/
BdcBankaManager.putSuccessPageCardUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除全部信用卡内容记录信息    /v1/successPageCard/{id}/delete
*
*/
BdcBankaManager.deleteSuccessPageCardIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增期数配置    /v1/term/add
*
*/
BdcBankaManager.postTermAddV1({
    data: {
        termParam: {
    "bankInfoDTOList": [
        {
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined"
        }
    ],
    "endTime": "(string) undefined",
    "rule": "(string) undefined",
    "startTime": "(string) undefined",
    "title": "(string) undefined"
}, //termParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取银行配置    /v1/term/bank/list
*
*/
BdcBankaManager.getTermBankListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除期数配置    /v1/term/delete/{id}
*
*/
BdcBankaManager.deleteTermDeleteIdV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 禁用期数    /v1/term/enable/{id}
*
*/
BdcBankaManager.putTermEnableIdV1({
    params: {
        id: 'undefined', //id
        status: 'undefined', //status
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取期数配置    /v1/term/list
*
*/
BdcBankaManager.getTermListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取期数配置    /v1/term/simple/list
*
*/
BdcBankaManager.getTermSimpleListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取期数配置    /v1/term/term/{id}
*
*/
BdcBankaManager.getTermTermIdV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改期数配置    /v1/term/update/{id}
*
*/
BdcBankaManager.putTermUpdateIdV1({
    params: {
        id: 'undefined', //id
    },
    data: {
        termParam: {
    "bankInfoDTOList": [
        {
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined"
        }
    ],
    "endTime": "(string) undefined",
    "rule": "(string) undefined",
    "startTime": "(string) undefined",
    "title": "(string) undefined"
}, //termParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 测试接口    /v1/tool/test
*
*/
BdcBankaManager.postToolTestV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增智能选卡配置信息    /v1/wise/config/add
*
*/
BdcBankaManager.postWiseConfigAddV1({
    params: {
        recommendType: 'undefined', //推荐类别类型
    },
    data: {
        recommendCardInfoDTOList: [
    {
        "cardId": "(string) undefined",
        "otherLimitType": "(integer) undefined"
    }
], //配置项内容
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取智能选卡配置的列表信息    /v1/wise/config/list
*
*/
BdcBankaManager.getWiseConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除智能选卡配置信息    /v1/wise/config/{id}/delete
*
*/
BdcBankaManager.deleteWiseConfigIdDeleteV1({
    params: {
        id: 'undefined', //推荐类别recommendType
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取智能选卡配置的详细信息    /v1/wise/config/{id}/detail
*
*/
BdcBankaManager.getWiseConfigIdDetailV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改智能选卡配置信息    /v1/wise/config/{id}/update
*
*/
BdcBankaManager.putWiseConfigIdUpdateV1({
    params: {
        id: 'undefined', //推荐类别recommendType
    },
    data: {
        recommendCardInfoDTOList: [
    {
        "cardId": "(string) undefined",
        "otherLimitType": "(integer) undefined"
    }
], //修改后的配置项内容
    },
    headers: {
        versionId: 'undefined', //versionId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改热门银行栏目关联信用卡列表的展示顺序    /v1/wxColumn/cardHotBank/card/shift/{id}
*
*/
BdcBankaManager.putWxColumnCardHotBankCardShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询热门银行下面的所有信用卡列表信息    /v1/wxColumn/cardHotBank/cards/list
*
*/
BdcBankaManager.postWxColumnCardHotBankCardsListV1({
    data: {
        hotBankCardQueryParam: {
    "hotBankId": "(integer) undefined",
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //热门银行下面的所有信用卡参数封装,ID:标识具体的栏目内容记录,0标识新增,其他具体值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]热门银行列表    /v1/wxColumn/cardHotBank/hotBank/list
*
*/
BdcBankaManager.getWxColumnCardHotBankHotBankListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]新增热门银行栏目内容记录详情信息    /v1/wxColumn/cardHotBank/item/add
*
*/
BdcBankaManager.postWxColumnCardHotBankItemAddV1({
    data: {
        hotBankInfoParam: {
    "hotBankCardParamList": [
        {
            "cardId": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "hotBankId": "(integer) undefined",
    "hotBankName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "promotionDetailPage": "(string) undefined",
    "promotionTag": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //热门银行栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询热门银行栏目内容记录详情信息    /v1/wxColumn/cardHotBank/item/detail/{id}
*
*/
BdcBankaManager.getWxColumnCardHotBankItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改热门银行栏目内容展示顺序    /v1/wxColumn/cardHotBank/item/shift/{id}
*
*/
BdcBankaManager.putWxColumnCardHotBankItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改热门银行栏目内容记录的显示状态    /v1/wxColumn/cardHotBank/item/updateStatus/{id}
*
*/
BdcBankaManager.putWxColumnCardHotBankItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]删除热门银行栏目内容记录信息    /v1/wxColumn/cardHotBank/item/{id}/delete
*
*/
BdcBankaManager.deleteWxColumnCardHotBankItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]更新热门银行栏目内容记录详情信息    /v1/wxColumn/cardHotBank/item/{id}/update
*
*/
BdcBankaManager.putWxColumnCardHotBankItemIdUpdateV1({
    data: {
        hotBankInfoParam: {
    "hotBankCardParamList": [
        {
            "cardId": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "hotTag": "(string) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined"
        }
    ],
    "hotBankId": "(integer) undefined",
    "hotBankName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "promotionDetailPage": "(string) undefined",
    "promotionTag": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //热门银行栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]获取热门银行的列表信息    /v1/wxColumn/cardHotBank/list
*
*/
BdcBankaManager.postWxColumnCardHotBankListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]获取热门银行的详情页配置信息    /v1/wxColumn/config/cardHotBank/detail
*
*/
BdcBankaManager.postWxColumnConfigCardHotBankDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]获取热门卡片的详情页配置信息    /v1/wxColumn/config/hotCard/detail
*
*/
BdcBankaManager.postWxColumnConfigHotCardDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]获取所有的栏目列表配置    /v1/wxColumn/config/list
*
*/
BdcBankaManager.getWxColumnConfigListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]获取今日推荐的详情页配置信息    /v1/wxColumn/config/recommend/detail
*
*/
BdcBankaManager.postWxColumnConfigRecommendDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改上下移的位置    /v1/wxColumn/config/shift/{id}
*
*/
BdcBankaManager.putWxColumnConfigShiftIdV1({
    params: {
        id: 'undefined', //记录ID
        type: 'undefined', //移动类型(1:上移；2：下移 ；3:置顶)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]获取主题精选栏目的的详情页配置信息    /v1/wxColumn/config/theme/detail
*
*/
BdcBankaManager.postWxColumnConfigThemeDetailV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改栏目名字和状态信息    /v1/wxColumn/config/update/{id}
*
*/
BdcBankaManager.putWxColumnConfigUpdateIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]更新栏目配置是否展示状态    /v1/wxColumn/config/updateStatus/{id}
*
*/
BdcBankaManager.putWxColumnConfigUpdateStatusIdV1({
    params: {
        id: 'undefined', //记录ID
        status: 'undefined', //状态信息(status: 0 启用，1，禁用)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改栏目内容配置名字信息    /v1/wxColumn/config/{id}/update
*
*/
BdcBankaManager.putWxColumnConfigIdUpdateV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]热门卡片栏目中的已选信用卡信息列表    /v1/wxColumn/hotCard/cardsSelected/list
*
*/
BdcBankaManager.postWxColumnHotCardCardsSelectedListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]热门卡片栏目中的未选信用卡信息列表    /v1/wxColumn/hotCard/cardsUnSelected/list
*
*/
BdcBankaManager.postWxColumnHotCardCardsUnSelectedListV1({
    data: {
        cardUnSelectedQueryParam: {
    "bankId": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //热门卡片栏目内容记录参数信息(bankId&#x3D;0标识全部)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]新增热门卡片栏目中的信用卡信息    /v1/wxColumn/hotCard/item/add
*
*/
BdcBankaManager.postWxColumnHotCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined', //热门卡片栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询热门卡片栏目内容记录详情信息    /v1/wxColumn/hotCard/item/detail/{id}
*
*/
BdcBankaManager.getWxColumnHotCardItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改热门卡片栏目内容记录信息    /v1/wxColumn/hotCard/item/shift/{id}
*
*/
BdcBankaManager.putWxColumnHotCardItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改热门卡片栏目内容记录的显示状态    /v1/wxColumn/hotCard/item/updateStatus/{id}
*
*/
BdcBankaManager.putWxColumnHotCardItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]删除热门卡片栏目内容记录信息    /v1/wxColumn/hotCard/item/{id}/delete
*
*/
BdcBankaManager.deleteWxColumnHotCardItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]更新热门卡片栏目内容记录详情信息    /v1/wxColumn/hotCard/item/{id}/update
*
*/
BdcBankaManager.putWxColumnHotCardItemIdUpdateV1({
    data: {
        hotCardInfoParam: {
    "hotTag": "(string) undefined",
    "linkUrl": "(string) undefined",
    "recommendTag": "(string) undefined"
}, //热门卡片栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询推荐栏目卡库卡片查询参数(添加+编辑)    /v1/wxColumn/recommend/cards/list
*
*/
BdcBankaManager.postWxColumnRecommendCardsListV1({
    data: {
        recommendCardQueryParam: {
    "bankId": "(integer) undefined",
    "cardName": "(string) undefined",
    "id": "(integer) undefined",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //查询推荐栏目卡库卡片查询参数(queryType:1按银行查询,2按卡片名称查询,(今天推荐栏目记录ID)id:添加时为0,编辑为具体的值),bankId:0表示全部银行
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]新增今日推荐栏目内容记录详情信息    /v1/wxColumn/recommend/item/add
*
*/
BdcBankaManager.postWxColumnRecommendItemAddV1({
    data: {
        recommendInfoParam: {
    "cardId": "(string) undefined",
    "cardLinkUrl": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "recommendDetail": "(string) undefined",
    "recommendName": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //今日推荐栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询今日推荐栏目内容记录详情信息    /v1/wxColumn/recommend/item/detail/{id}
*
*/
BdcBankaManager.getWxColumnRecommendItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询全部推荐栏目内容记录详情列表    /v1/wxColumn/recommend/item/list
*
*/
BdcBankaManager.postWxColumnRecommendItemListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //pageRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改今日推荐栏目内容记录信息    /v1/wxColumn/recommend/item/shift/{id}
*
*/
BdcBankaManager.putWxColumnRecommendItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改今日推荐栏目内容记录的显示状态    /v1/wxColumn/recommend/item/updateStatus/{id}
*
*/
BdcBankaManager.putWxColumnRecommendItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]删除今日推荐栏目内容记录信息    /v1/wxColumn/recommend/item/{id}/delete
*
*/
BdcBankaManager.deleteWxColumnRecommendItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]更新今日推荐栏目内容记录详情信息    /v1/wxColumn/recommend/item/{id}/update
*
*/
BdcBankaManager.putWxColumnRecommendItemIdUpdateV1({
    data: {
        recommendInfoParam: {
    "cardId": "(string) undefined",
    "cardLinkUrl": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "recommendDetail": "(string) undefined",
    "recommendName": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}, //今日推荐栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询公共资源库中主题精内容简单信息列表    /v1/wxColumn/theme/cardTheme/list
*
*/
BdcBankaManager.getWxColumnThemeCardThemeListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]新增主题精选栏目内容记录详情信息    /v1/wxColumn/theme/item/add
*
*/
BdcBankaManager.postWxColumnThemeItemAddV1({
    data: {
        themeInfoParam: {
    "customThemeName": "(string) undefined",
    "fontColor": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "themeId": "(integer) undefined"
}, //主题精选栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]查询主题精选栏目内容记录详情信息    /v1/wxColumn/theme/item/detail/{id}
*
*/
BdcBankaManager.getWxColumnThemeItemDetailIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改主题精选栏目内容记录信息    /v1/wxColumn/theme/item/shift/{id}
*
*/
BdcBankaManager.putWxColumnThemeItemShiftIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]修改主题精选栏目内容记录的显示状态    /v1/wxColumn/theme/item/updateStatus/{id}
*
*/
BdcBankaManager.putWxColumnThemeItemUpdateStatusIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]删除主题精选栏目内容记录信息    /v1/wxColumn/theme/item/{id}/delete
*
*/
BdcBankaManager.deleteWxColumnThemeItemIdDeleteV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]更新主题精选栏目内容记录详情信息    /v1/wxColumn/theme/item/{id}/update
*
*/
BdcBankaManager.putWxColumnThemeItemIdUpdateV1({
    data: {
        themeInfoParam: {
    "customThemeName": "(string) undefined",
    "fontColor": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "themeId": "(integer) undefined"
}, //主题精选栏目内容记录参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [微信小程序]获取主题精选栏目的列表信息    /v1/wxColumn/theme/list
*
*/
BdcBankaManager.postWxColumnThemeListV1({
    data: {
        pageRequest: {
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录条数"
}, //分页参数信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增或更新第三方渠道    /v2/channel/config/createOrUpdate
*
*/
BdcBankaManager.postChannelConfigCreateOrUpdateV2({
    data: {
        param: {
    "channelCode": "(string) undefined",
    "channelName": "(string) undefined",
    "id": "(integer) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询渠道基本信息列表    /v2/channel/config/list
*
*/
BdcBankaManager.getChannelConfigListV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更改渠道状态    /v2/channel/config/status
*
*/
BdcBankaManager.postChannelConfigStatusV2({
    data: {
        param: {
    "id": "(integer) 渠道的id",
    "status": "(integer) 需要修改为的状态，0启用，1禁用"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
