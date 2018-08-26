import BdcBankaManager from './api/bdc-banka-manager/api';


/**
 * 卡片详情    /v1/allCard/card/{id}/detail
 *
 * @params      { Integer  }      id                            卡片autoId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAllCardCardIdDetailV1({
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
    "cardownerRecommendation": "(string) undefined",
    "fixedPositionFlag": "(integer) undefined",
    "hotTag": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "prizeImageUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "recommendName": "(string) undefined",
    "recommendTag": "(string) undefined",
    "status": "(integer) undefined"
}
*/



/**
 * 新增全部信用中的信用卡信息    /v1/allCard/item/add
 *
 * @params      { Array    }      cardIdList[]                  信用卡记录ID
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAllCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined',
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
 * 编辑修改信用卡信息    /v1/allCard/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      creditCardInfoParam           参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putAllCardItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        cardownerRecommendation: '(string) undefined',
        hotTag: '(string) undefined',
        prizeImageUrl: '(string) undefined',
        recommendTag: '(string) undefined',
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
 * 查询全部已选信用卡记录列f表    /v1/allCard/selectedCard/list
 *
 * @params      { Object   }      pageRequest                   pageRequest
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAllCardSelectedCardListV1({
    data: {
        bankId: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "recommendName": "(string) undefined",
            "recommendTag": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改全部信用卡显示顺序    /v1/allCard/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putAllCardShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 查询全部未选信用卡内容记录列表    /v1/allCard/unSelectedCard/list
 *
 * @params      { Object   }      cardUnSelectedQueryParam                         查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAllCardUnSelectedCardListV1({
    data: {
        bankId: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改全部信用卡内容记录的控位状态    /v1/allCard/updateFixedPositionFlag/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      fixedPositionFlag             修改的状态信息(fixedPositionFlag: 0 固定，1，解除固定)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putAllCardUpdateFixedPositionFlagIdV1({
    params: {
        id: 'undefined',
        fixedPositionFlag: 'undefined',
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
 * 修改全部信用卡内容记录的显示状态    /v1/allCard/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putAllCardUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除全部信用卡内容记录信息    /v1/allCard/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteAllCardIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * [微信小程序]上线开关环境配置单个查询接口    /v1/audit/switch/action/info/{id}
 *
 * @params      { Ref      }      id                            配置记录id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAuditSwitchActionInfoIdV1({
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
    "action": "(integer) undefined",
    "autoId": "(integer) undefined",
    "env": "(integer) undefined",
    "envName": "(string) undefined",
    "status": "(string) undefined"
}
*/



/**
 * [微信小程序]上线开关功能配置列表    /v1/audit/switch/action/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAuditSwitchActionListV1({
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
        "action": "(integer) undefined",
        "autoId": "(integer) undefined",
        "env": "(integer) undefined",
        "envName": "(string) undefined",
        "status": "(string) undefined"
    }
]
*/



/**
 * [微信小程序]上线开关功能配置更新接口    /v1/audit/switch/action/update
 *
 * @params      { Object   }      action                        action
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAuditSwitchActionUpdateV1({
    data: {
        action: '(integer) undefined',
        autoId: '(integer) undefined',
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
 * [微信小程序]上线开关通知文案id查询    /v1/audit/switch/content/info/{id}
 *
 * @params      { Ref      }      id                            配置记录id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAuditSwitchContentInfoIdV1({
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
    "content": "(string) undefined",
    "status": "(string) undefined",
    "type": "(integer) undefined",
    "typeName": "(string) undefined"
}
*/



/**
 * [微信小程序]上线开关通知文案配置列表    /v1/audit/switch/content/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAuditSwitchContentListV1({
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
        "autoId": "(integer) undefined",
        "content": "(string) undefined",
        "status": "(string) undefined",
        "type": "(integer) undefined",
        "typeName": "(string) undefined"
    }
]
*/



/**
 * [微信小程序]上线开关通知文案配置更新接口    /v1/audit/switch/content/update
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAuditSwitchContentUpdateV1({
    data: {
        autoId: '(integer) undefined',
        content: '(string) undefined',
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
 * [微信小程序]上线开关枚举值获取    /v1/audit/switch/enums
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAuditSwitchEnumsV1({
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
    "action": [
        {
            "id": "(integer) undefined",
            "name": "(string) undefined"
        }
    ],
    "env": [
        {
            "id": "(integer) undefined",
            "name": "(string) undefined"
        }
    ],
    "notifyType": [
        {
            "id": "(integer) undefined",
            "name": "(string) undefined"
        }
    ]
}
*/



/**
 * [微信小程序]上线开关环境配置详情    /v1/audit/switch/env/info/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAuditSwitchEnvInfoIdV1({
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
    "env": "(integer) undefined",
    "envName": "(string) undefined",
    "status": "(string) undefined",
    "version": "(string) undefined"
}
*/



/**
 * [微信小程序]上线开关环境配置列表    /v1/audit/switch/env/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAuditSwitchEnvListV1({
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
        "autoId": "(integer) undefined",
        "env": "(integer) undefined",
        "envName": "(string) undefined",
        "status": "(string) undefined",
        "version": "(string) undefined"
    }
]
*/



/**
 * [微信小程序]上线开关环境配置更新接口    /v1/audit/switch/env/update
 *
 * @params      { Object   }      wxEnvironment                 wxEnvironment
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAuditSwitchEnvUpdateV1({
    data: {
        autoId: '(integer) undefined',
        env: '(integer) undefined',
        version: '(string) undefined',
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
 * 新增邀请办卡奖励配置    /v1/awardConfig/add
 *
 * @params      { Object   }      awardInfoParam                awardInfoParam
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAwardConfigAddV1({
    data: {
        awardType: '(string) 奖品类型',
        endTime: '(string) 奖品过期时间',
        logImgUrl: '(string) 奖品图片url',
        name: '(string) undefined',
        price: '(integer) 奖品价格',
        smallLogImgUrl: '(string) 奖品小图url',
        targetAmount: '(integer) 奖品获取条件',
        termId: '(integer) 期数id',
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
 * 删除奖励配置    /v1/awardConfig/delete/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteAwardConfigDeleteIdV1({
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
"(integer) undefined"
*/



/**
 * 获取奖励配置    /v1/awardConfig/list
 *
 * @params      { Integer  }      termId                        termId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAwardConfigListV1({
    params: {
        termId: 'undefined',
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
    "data": [
        {
            "awardType": "(string) undefined",
            "endTime": "(string) undefined",
            "id": "(integer) undefined",
            "logImgUrl": "(string) undefined",
            "name": "(string) undefined",
            "price": "(integer) undefined",
            "smallLogImgUrl": "(string) undefined",
            "targetAmount": "(integer) undefined",
            "termId": "(integer) undefined",
            "termTitle": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改奖励配置    /v1/awardConfig/update/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { Object   }      awardInfoParam                awardInfoParam
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putAwardConfigUpdateIdV1({
    params: {
        id: 'undefined',
    },
    data: {
        awardType: '(string) 奖品类型',
        endTime: '(string) 奖品过期时间',
        logImgUrl: '(string) 奖品图片url',
        name: '(string) undefined',
        price: '(integer) 奖品价格',
        smallLogImgUrl: '(string) 奖品小图url',
        targetAmount: '(integer) 奖品获取条件',
        termId: '(integer) 期数id',
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
 * 导出快递信息    /v1/awardRecord/export
 *
 * @params      { Object   }      idList                        idList
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postAwardRecordExportV1({
    data: {
        idList: [],

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
        "address": "(string) undefined",
        "awardName": "(string) undefined",
        "awardType": "(string) undefined",
        "expressInfo": "(string) undefined",
        "id": "(integer) undefined",
        "mobile": "(string) undefined",
        "modifiedTime": "(string) undefined",
        "receiverMobile": "(string) undefined",
        "receiverName": "(string) undefined",
        "status": "(string) undefined",
        "termId": "(integer) undefined",
        "termTitle": "(string) undefined"
    }
]
*/



/**
 * 查询获取记录信息    /v1/awardRecord/list
 *
 * @params      { String   }      mobile                        mobile
 * @params      { String   }      awardType                     awardType
 * @params      { Integer  }      termId                        termId
 * @params      { Integer  }      status                        status
 * @params      { Integer  }      pageIndex                     pageIndex
 * @params      { Integer  }      pageSize                      pageSize
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getAwardRecordListV1({
    params: {
        mobile: 'undefined',
        awardType: 'undefined',
        termId: 'undefined',
        status: 'undefined',
        pageIndex: 'undefined',
        pageSize: 'undefined',
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
    "data": [
        {
            "address": "(string) undefined",
            "awardName": "(string) undefined",
            "awardType": "(string) undefined",
            "expressInfo": "(string) undefined",
            "id": "(integer) undefined",
            "mobile": "(string) undefined",
            "modifiedTime": "(string) undefined",
            "receiverMobile": "(string) undefined",
            "receiverName": "(string) undefined",
            "status": "(string) undefined",
            "termId": "(integer) undefined",
            "termTitle": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 导入快递信息    /v1/awardRecord/update
 *
 * @params      { Object   }      awardRecordParams             awardRecordParams
 * @params      { String   }      Authorization                 service token
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
],

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
    "errorMessage": [],
    "failedNum": "(integer) undefined",
    "successNum": "(integer) undefined"
}
*/



/**
 * 获取银行信息列表    /v1/bankRepo/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getBankRepoListV1({
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
 * 新增活动模板栏目内容记录    /v1/card/activityTemplate/add
 *
 * @params      { Object   }      cardThemeInfoParam            主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardActivityTemplateAddV1({
    data: {
        backgroundColor: '(string) undefined',
        backgroundLinkUrl: '(string) undefined',
        backgroundPictureUrl: '(string) undefined',
        cardInfoDTOList: [{
        	cardBackgroundPictureUrl: '(string) undefined',
        	cardCopyWriting: '(string) undefined',
        	cardId: '(string) undefined',
        	customLinkUrl: '(string) undefined',
        	hotTag: '(string) undefined',
        	identificationFlag: '(integer) undefined',
        	moreInfoLinkUrl: '(string) undefined',
        	recommendStar: '(number) undefined',
        }],
        linkUrl: '(string) undefined',
        moreInfoLinkUrl: '(string) undefined',
        prizeLinkUrl: '(string) undefined',
        prizePictureUrl: '(string) undefined',
        shareCopyWriting: '(string) undefined',
        shareLinkUrl: '(string) undefined',
        shareLogoUrl: '(string) undefined',
        shareTitle: '(string) undefined',
        templateStyle: '(integer) undefined',
        themeDescribe: '(string) undefined',
        themeName: '(string) undefined',
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
 * 修改活动模板的关联信用卡列表的展示顺序    /v1/card/activityTemplate/card/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardActivityTemplateCardShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改热门活动模板下面的卡片的显示状态    /v1/card/activityTemplate/card/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用,2:删除)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardActivityTemplateCardUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除关联的信用卡信息    /v1/card/activityTemplate/card/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardActivityTemplateCardIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 编辑修改活动模板下面的卡片信息    /v1/card/activityTemplate/card/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      themeCardInfoParam            参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardActivityTemplateCardIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        cardBackgroundPictureUrl: '(string) undefined',
        cardCopyWriting: '(string) undefined',
        customLinkUrl: '(string) undefined',
        hotTag: '(string) undefined',
        identificationFlag: '(integer) undefined',
        recommendStar: '(number) undefined',
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
 * 新增主题关联的信用卡配置信息    /v1/card/activityTemplate/cards/add
 *
 * @params      { Object   }      cardThemeCardAddParam                            新增信用卡配置参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardActivityTemplateCardsAddV1({
    data: {
        autoId: '(integer) undefined',
        cardIdList: [],
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
 * 查询活动模板详情信息    /v1/card/activityTemplate/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardActivityTemplateDetailIdV1({
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
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "cardInfoDTOList": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
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
}
*/



/**
 * 获取所有活动模板的配置的内容列表    /v1/card/activityTemplate/list
 *
 * @params      { Object   }      cardThemeQueryParam           查询参数信息(status,-1:全部 0:启用 ，1:禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardActivityTemplateListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
        status: '(integer) undefined',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "status": "(integer) undefined",
            "templateStyle": "(integer) undefined",
            "themeName": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 已选择活动模板关联的信用卡列表信息(编辑时使用)    /v1/card/activityTemplate/selected/cards
 *
 * @params      { Object   }      themeSelectedCardQueryParam                      查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardActivityTemplateSelectedCardsV1({
    data: {
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 移动位置    /v1/card/activityTemplate/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardActivityTemplateShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 未选择活动模板关联的信用卡列表信息(新增编辑时使用,新增时id为0)    /v1/card/activityTemplate/unSelected/cards
 *
 * @params      { Object   }      themeUnSelectedCardQueryParam                    查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardActivityTemplateUnSelectedCardsV1({
    data: {
        bankId: '(integer) undefined',
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改活动模板的显示状态    /v1/card/activityTemplate/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardActivityTemplateUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除活动模板记录信息    /v1/card/activityTemplate/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardActivityTemplateIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新主题内容记录信息    /v1/card/activityTemplate/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      cardThemeInfoParam            主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardActivityTemplateIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        backgroundColor: '(string) undefined',
        backgroundLinkUrl: '(string) undefined',
        backgroundPictureUrl: '(string) undefined',
        cardInfoDTOList: [{
        	cardBackgroundPictureUrl: '(string) undefined',
        	cardCopyWriting: '(string) undefined',
        	cardId: '(string) undefined',
        	customLinkUrl: '(string) undefined',
        	hotTag: '(string) undefined',
        	identificationFlag: '(integer) undefined',
        	moreInfoLinkUrl: '(string) undefined',
        	recommendStar: '(number) undefined',
        }],
        linkUrl: '(string) undefined',
        moreInfoLinkUrl: '(string) undefined',
        prizeLinkUrl: '(string) undefined',
        prizePictureUrl: '(string) undefined',
        shareCopyWriting: '(string) undefined',
        shareLinkUrl: '(string) undefined',
        shareLogoUrl: '(string) undefined',
        shareTitle: '(string) undefined',
        templateStyle: '(integer) undefined',
        themeDescribe: '(string) undefined',
        themeName: '(string) undefined',
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
 * 新增广告位内容记录信息    /v1/card/advertise/add
 *
 * @params      { Object   }      hotBankInfoParam              广告位参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardAdvertiseAddV1({
    data: {
        advertiseName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * 查询热广告位记录详情信息    /v1/card/advertise/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardAdvertiseDetailIdV1({
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
    "advertiseName": "(string) undefined",
    "autoId": "(integer) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "showCities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ]
}
*/



/**
 * 获取所有公共资源库中广告位的内容列表    /v1/card/advertise/list
 *
 * @params      { Object   }      advertiseQueryParam           查询参数信息(status,-1:全部,0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardAdvertiseListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
        status: '(integer) undefined',
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
    "data": [
        {
            "advertiseName": "(string) undefined",
            "autoId": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改广告位记录的显示状态    /v1/card/advertise/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardAdvertiseUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除广告位记录信息    /v1/card/advertise/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardAdvertiseIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新广告位内容记录信息    /v1/card/advertise/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      cardAdvertiseInfoParam                           广告位参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardAdvertiseIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        advertiseName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * 展示三大类标签信息    /v1/card/attributeopt/attributes
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardAttributeoptAttributesV1({
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
    }
]
*/



/**
 * 获取属性标签的属性的列表信息    /v1/card/attributeopt/list
 *
 * @params      { Integer  }      attributeId                   属性id
 * @params      { Integer  }      pageIndex                     偏移量
 * @params      { Integer  }      pageSize                      每页大小
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardAttributeoptListV1({
    params: {
        attributeId: 'undefined',
        pageIndex: 'undefined',
        pageSize: 'undefined',
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
    "data": [
        {
            "attributeId": "(integer) undefined",
            "autoId": "(integer) undefined",
            "optionId": "(integer) undefined",
            "optionName": "(string) undefined",
            "recommendation": "(string) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改属性推广文案表信息    /v1/card/attributeopt/update
 *
 * @params      { Object   }      cardAttributeOpts             autoId和推荐文案组成的参数数组
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardAttributeoptUpdateV1({
    data: {
        cardAttributeOpts: [
    {
        "autoId": "(integer) id",
        "optionId": "(string) optionId,不存在该字段则为银行",
        "recommendation": "(string) recommendation"
    }
],

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
 * 新增热门银行详情信息    /v1/card/cardHotBank/add
 *
 * @params      { Object   }      hotBankInfoParam              热门银行栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardCardHotBankAddV1({
    data: {
        bankId: '(integer) undefined',
        cardIdList: [],
        customBankName: '(string) undefined',
        linkUrl: '(string) undefined',
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
 * 删除热门银行关联的信用卡信息    /v1/card/cardHotBank/card/{id}/delete
 *
 * @params      { Integer  }      id                            热门银行下面的信用卡配置记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardCardHotBankCardIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 新增热门银行下面的信用卡配置    /v1/card/cardHotBank/cards/add
 *
 * @params      { Integer  }      id                            热门银行记录ID信息
 * @params      { Array    }      cardIdList[]                  热门银行关联的信用卡ID列表信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardCardHotBankCardsAddV1({
    params: {
        id: 'undefined',
        'cardIdList[]': 'undefined',
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
 * 查询热门银行记录配置详情    /v1/card/cardHotBank/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardCardHotBankDetailIdV1({
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
    "bankId": "(integer) undefined",
    "bankName": "(string) undefined",
    "cardInfoDTOList": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "customBankName": "(string) undefined",
    "linkUrl": "(string) undefined"
}
*/



/**
 * 获取所有公共资源库中热门银行的内容列表    /v1/card/cardHotBank/list
 *
 * @params      { Object   }      cardHotBankQueryParam                            查询参数信息(status,-1:全部,0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardCardHotBankListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
        status: '(integer) undefined',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankName": "(string) undefined",
            "linkUrl": "(string) undefined",
            "recommendation": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 已选择热门银行关联的信用卡列表信息(编辑时使用)    /v1/card/cardHotBank/selected/cards
 *
 * @params      { Object   }      hotBankUnSelectedCardQueryParam                  查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardCardHotBankSelectedCardsV1({
    data: {
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 未选择热门银行关联的信用卡列表信息(新增编辑)    /v1/card/cardHotBank/unSelected/cards
 *
 * @params      { Object   }      hotBankUnSelectedCardQueryParam                  查询参数热门银行记录ID信息(新增时0编辑时具体的值)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardCardHotBankUnSelectedCardsV1({
    data: {
        bankId: '(integer) undefined',
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改热门银行的显示状态    /v1/card/cardHotBank/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardCardHotBankUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除热门银行记录信息    /v1/card/cardHotBank/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardCardHotBankIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新热门银行情信息    /v1/card/cardHotBank/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      hotBankInfoParam              热门银行栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardCardHotBankIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        bankId: '(integer) undefined',
        cardIdList: [],
        customBankName: '(string) undefined',
        linkUrl: '(string) undefined',
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
 * 新增主题栏目内容记录    /v1/card/theme/add
 *
 * @params      { Object   }      cardThemeInfoParam            主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardThemeAddV1({
    data: {
        backgroundColor: '(string) undefined',
        backgroundLinkUrl: '(string) undefined',
        backgroundPictureUrl: '(string) undefined',
        cardInfoDTOList: [{
        	cardId: '(string) undefined',
        	customLinkUrl: '(string) undefined',
        	hotTag: '(string) undefined',
        }],
        linkUrl: '(string) undefined',
        themeDescribe: '(string) undefined',
        themeName: '(string) undefined',
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
 * 修改主题管理的关联信用卡列表的展示顺序    /v1/card/theme/card/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardThemeCardShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改热门主题下面的卡片的显示状态    /v1/card/theme/card/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用,2:删除)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardThemeCardUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除关联的信用卡信息    /v1/card/theme/card/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardThemeCardIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 编辑修改主题下面的卡片信息    /v1/card/theme/card/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      themeCardInfoParam            参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardThemeCardIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        customLinkUrl: '(string) undefined',
        hotTag: '(string) undefined',
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
 * 新增主题关联的信用卡配置信息    /v1/card/theme/cards/add
 *
 * @params      { Object   }      cardThemeCardAddParam                            新增信用卡配置参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardThemeCardsAddV1({
    data: {
        autoId: '(integer) undefined',
        cardIdList: [],
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
 * 查询主题记录详情信息    /v1/card/theme/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardThemeDetailIdV1({
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
    "backgroundColor": "(string) undefined",
    "backgroundLinkUrl": "(string) undefined",
    "backgroundPictureUrl": "(string) undefined",
    "cardInfoDTOList": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "linkUrl": "(string) undefined",
    "themeDescribe": "(string) undefined",
    "themeName": "(string) undefined"
}
*/



/**
 * 获取所有公共资源库中主题管理的内容列表    /v1/card/theme/list
 *
 * @params      { Object   }      cardThemeQueryParam           查询参数信息(status,-1:全部 0:启用 ，1:禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardThemeListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
        status: '(integer) undefined',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "status": "(integer) undefined",
            "templateStyle": "(integer) undefined",
            "themeName": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 已选择主题关联的信用卡列表信息(编辑时使用)    /v1/card/theme/selected/cards
 *
 * @params      { Object   }      themeSelectedCardQueryParam                      查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardThemeSelectedCardsV1({
    data: {
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 移动位置    /v1/card/theme/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardThemeShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 未选择主题关联的信用卡列表信息(新增编辑时使用,新增时id为0)    /v1/card/theme/unSelected/cards
 *
 * @params      { Object   }      themeUnSelectedCardQueryParam                    查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardThemeUnSelectedCardsV1({
    data: {
        bankId: '(integer) undefined',
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改主题记录的显示状态    /v1/card/theme/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardThemeUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除主题内容记录信息    /v1/card/theme/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardThemeIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新主题内容记录信息    /v1/card/theme/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      cardThemeInfoParam            主题内容记录参数信息（cardInfoDTOList：新增的时候用到）
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardThemeIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        backgroundColor: '(string) undefined',
        backgroundLinkUrl: '(string) undefined',
        backgroundPictureUrl: '(string) undefined',
        cardInfoDTOList: [{
        	cardId: '(string) undefined',
        	customLinkUrl: '(string) undefined',
        	hotTag: '(string) undefined',
        }],
        linkUrl: '(string) undefined',
        themeDescribe: '(string) undefined',
        themeName: '(string) undefined',
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
 * 新增邀请办卡卡片配置    /v1/cardConfig/add
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardConfigAddV1({
    data: {
        cardId: '(string) undefined',
        cardName: '(string) undefined',
        description: '(string) undefined',
        imgUrl: '(string) undefined',
        termId: '(integer) undefined',
        termTitle: '(string) undefined',
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
 * 获取所有卡片信息    /v1/cardConfig/cards
 *
 * @params      { Integer  }      termId                        termId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardConfigCardsV1({
    params: {
        termId: 'undefined',
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
        "cardId": "(string) undefined",
        "cardName": "(string) undefined",
        "imgUrl": "(string) undefined"
    }
]
*/



/**
 * 删除卡片配置    /v1/cardConfig/delete/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteCardConfigDeleteIdV1({
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
"(integer) undefined"
*/



/**
 * 获取卡片配置    /v1/cardConfig/list
 *
 * @params      { Integer  }      termId                        termId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardConfigListV1({
    params: {
        termId: 'undefined',
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
    "data": [
        {
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "description": "(string) undefined",
            "id": "(integer) undefined",
            "imgUrl": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "termId": "(integer) undefined",
            "termTitle": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改卡片配置信息    /v1/cardConfig/shift/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { Integer  }      type                          type
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardConfigShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改卡片配置    /v1/cardConfig/update/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { Object   }      termParam                     termParam
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putCardConfigUpdateIdV1({
    params: {
        id: 'undefined',
    },
    data: {
        cardId: '(string) undefined',
        cardName: '(string) undefined',
        description: '(string) undefined',
        imgUrl: '(string) undefined',
        termId: '(integer) undefined',
        termTitle: '(string) undefined',
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
 * 查询全部卡库卡片信息    /v1/cardRepo/all/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardRepoAllListV1({
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
        "cardId": "(string) undefined",
        "cardName": "(string) undefined",
        "imgUrl": "(string) undefined"
    }
]
*/



/**
 * 获取信用卡属性类别(带属性项)    /v1/cardRepo/attr/get/{attributeId}
 *
 * @params      { Integer  }      attributeId                   卡属性ID
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardRepoAttrGetAttributeIdV1({
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
            "optionName": "(string) 属性项名称",
            "recommendation": "(string) 提示语"
        }
    ]
}
*/



/**
 * 获取信用卡属性列表(带属性项)    /v1/cardRepo/attr/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardRepoAttrListV1({
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
    }
]
*/



/**
 * 保存信用卡属性    /v1/cardRepo/attr/save
 *
 * @params      { Object   }      cardAttribute                 信用卡属性
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardRepoAttrSaveV1({
    data: {
        attributeId: '(integer) 属性ID',
        attributeName: '(string) 属性名称',
        attributeType: '(string) 类型(1:单选,2:多选)',
        optionList: [{
        	optionId: '(integer) 属性项ID',
        	optionName: '(string) 属性项名称',
        	recommendation: '(string) 提示语',
        }],
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
 * 获取卡权益列表信息(分页)    /v1/cardRepo/cardunits/list
 *
 * @params      { Object   }      cardUnitListSearchReq                            卡权益信息查询实体
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardRepoCardunitsListV1({
    data: {
        bankId: '(integer) 银行id',
        cardCurrencies: '(string) 卡币种',
        cardLevel: '(string) 卡等级',
        cardOrganizations: '(string) 卡组织',
        cardSerial: '(integer) 卡系列',
        pageIndex: '(integer) 分页页码',
        pageSize: '(integer) 分页大小',
        status: '(integer) 状态',
        title: '(string) 卡名称',
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
            "averageScore": "(number) 卡分数",
            "bankId": "(integer) 银行id",
            "cardBin": "(string) 卡bin",
            "cardCurrencies": [],
            "cardLevel": "(string) 卡等级",
            "cardOrganizations": [],
            "cardSerial": "(integer) 卡系列",
            "cardUrl": "(string) 办卡链接",
            "description": "(string) 卡描述",
            "feedCategory": "(integer) 栏目",
            "freeAnnualFeeThreshold": "(integer) 免年费的数值",
            "freeAnnualFeeType": "(string) 免年费的类型id，单选",
            "imageUrl": "(string) 图片url",
            "isAnnualFeeFree": "(integer) 标志位，是否可免年费 1-可，0-不可",
            "isBankaLink": "(string) 是否可以办卡",
            "isFrequentUse": "(integer) 是否常用",
            "nestTags": [
                {
                    "parentTagId": "(string) 标签大类ID",
                    "parentTagName": "(string) 标签大类name",
                    "subTagIdList": []
                }
            ],
            "relatedFeedIds": [
                {
                    "relatedFeedId": "(string) undefined",
                    "title": "(string) undefined"
                }
            ],
            "rightSummaries": [
                {
                    "categoryId": "(string) 大类id",
                    "categoryName": "(string) 大类名称",
                    "id": "(string) 权益id",
                    "title": "(string) 权益名称"
                }
            ],
            "scuId": "(integer) CardUnitId，标准卡单元id，作为FeedId",
            "scuRules": [
                {
                    "detail": "(string) 规则描述",
                    "intro": "(string) 规则简介",
                    "ruleId": "(integer) 规则id",
                    "threshold": "(integer) 阈值，后台使用前端并不需要",
                    "type": "(integer) 规则类型, 1-积分，2-里程，3-年费，4-取现 ",
                    "typeName": "(string) 规则类型, 积分，里程，年费，取现 "
                }
            ],
            "status": "(integer) 状态",
            "title": "(string) 卡名称"
        }
    ]
}
*/



/**
 * 删除信用卡信息    /v1/cardRepo/delete/{cardId}
 *
 * @params      { String   }      cardId                        卡ID
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardRepoDeleteCardIdV1({
    params: {
        cardId: 'undefined',
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
 * 通过卡ID获取信用卡信息    /v1/cardRepo/get
 *
 * @params      { String   }      cardId                        卡ID
 * @params      { Boolean  }      needCityInfo                  是否需要城市信息
 * @params      { Boolean  }      needAttributes                是否需要属性信息
 * @params      { Boolean  }      needCardDetail                是否需要详情
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardRepoGetV1({
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
    "bankId": "(integer) 银行ID",
    "bankMark": "(string) 卡标识",
    "bankName": "(string) 银行名称",
    "cardAttributeList": [
        {
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
        }
    ],
    "cardId": "(string) 卡ID",
    "cardImageUrl": "(string) 卡图片地址",
    "cardName": "(string) 卡名称",
    "cities": [
        {
            "code": "(string) 城市编号",
            "name": "(string) 城市名称"
        }
    ],
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
}
*/



/**
 * 获取信用卡信息列表(分页)    /v1/cardRepo/list
 *
 * @params      { Object   }      cardListQuery                 信用卡信息查询实体
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardRepoListV1({
    data: {
        bankId: '(integer) 银行ID',
        cardIdList: [],
        cardName: '(string) 卡名称',
        excludedCardIdList: [],
        needAttributes: '(boolean) 是否需要卡属性',
        needCardDetail: '(boolean) 是否需要卡详情',
        needCityInfo: '(boolean) 是否需要开放城市信息',
        pageIdx: '(integer) 页码(从1开始)',
        pageSize: '(integer) 分页大小',
        status: '(string) 状态(0:启用,1:禁用,3:启用和禁用)',
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
            "bankId": "(integer) 银行ID",
            "bankMark": "(string) 卡标识",
            "bankName": "(string) 银行名称",
            "cardAttributeList": [
                {
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
                }
            ],
            "cardId": "(string) 卡ID",
            "cardImageUrl": "(string) 卡图片地址",
            "cardName": "(string) 卡名称",
            "cities": [
                {
                    "code": "(string) 城市编号",
                    "name": "(string) 城市名称"
                }
            ],
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
        }
    ]
}
*/



/**
 * 保存信用卡信息    /v1/cardRepo/save
 *
 * @params      { Object   }      cardRequest                   卡信息请求
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postCardRepoSaveV1({
    data: {
        applyUrl: '(string) 卡申请链接',
        bankId: '(integer) 银行ID',
        bankMark: '(string) 卡标识',
        cardAttributeRequestList: [{
        	attributeId: '(integer) 属性ID',
        	optionIdList: [],
        }],
        cardId: '(string) 卡ID',
        cardImageUrl: '(string) 卡图片地址',
        cardName: '(string) 卡名称',
        cities: [],
        currentApplyNum: '(integer) 初始申请人数',
        detail: '(string) 卡详情',
        gcpFeedCardDTOList: [{
        	gcpCardName: '(string) 卡权益记录对应的卡片名字',
        	gcpFeedId: '(integer) 卡权益记录ID',
        }],
        mainNoLen: '(integer) 卡号长度',
        recommendation: '(string) 推广语',
        status: '(string) 状态(0:正常,1:禁用,2:标记删除)',
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
 * 更改信用卡状态    /v1/cardRepo/updateStatus
 *
 * @params      { String   }      cardId                        卡ID
 * @params      { String   }      status                        状态
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getCardRepoUpdateStatusV1({
    params: {
        cardId: 'undefined',
        status: 'undefined',
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
 * 新增卡片激活相关配置内容    /v1/closedCycle/activeConfig/add
 *
 * @params      { Object   }      closeBankConfigParam          卡片激活相关配置
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postClosedCycleActiveConfigAddV1({
    data: {
        activateLinkUrl: '(string) undefined',
        activatePhoneNo: '(string) undefined',
        bankId: '(integer) undefined',
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
 * 获取所有未配置的的银行信息列表    /v1/closedCycle/activeConfig/bank/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getClosedCycleActiveConfigBankListV1({
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
 * 查询卡片激活相关配置详情信息    /v1/closedCycle/activeConfig/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getClosedCycleActiveConfigDetailIdV1({
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
    "activateLinkUrl": "(string) undefined",
    "activatePhoneNo": "(string) undefined",
    "autoId": "(integer) undefined",
    "bankId": "(integer) undefined",
    "bankName": "(string) undefined"
}
*/



/**
 * 获取所有度查询配置的内容列表    /v1/closedCycle/activeConfig/list
 *
 * @params      { Object   }      pageRequest                   分页查询参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postClosedCycleActiveConfigListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "activateLinkUrl": "(string) undefined",
            "activatePhoneNo": "(string) undefined",
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 更新卡片激活相关配置信息    /v1/closedCycle/activeConfig/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      closeBankConfigParam          更新卡片激活相关配置信息参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putClosedCycleActiveConfigIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        activateLinkUrl: '(string) undefined',
        activatePhoneNo: '(string) undefined',
        bankId: '(integer) undefined',
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
 * 新增度查询配置记录内容    /v1/closedCycle/config/add
 *
 * @params      { Object   }      closedCycleBankInfoParam                         度查询配置记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postClosedCycleConfigAddV1({
    data: {
        bankId: '(integer) undefined',
        bankLinkUrl: '(string) undefined',
        bankName: '(string) undefined',
        noticeInfo: '(string) undefined',
        status: '(integer) undefined',
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
 * 获取所有未配置的的银行信息列表    /v1/closedCycle/config/bank/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getClosedCycleConfigBankListV1({
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
 * 查询进度查询配置记录详情信息    /v1/closedCycle/config/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getClosedCycleConfigDetailIdV1({
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
    "bankId": "(integer) undefined",
    "bankLinkUrl": "(string) undefined",
    "bankName": "(string) undefined",
    "noticeInfo": "(string) undefined",
    "status": "(integer) undefined"
}
*/



/**
 * 获取所有度查询配置的内容列表    /v1/closedCycle/config/list
 *
 * @params      { Object   }      pageRequest                   分页查询参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postClosedCycleConfigListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankLinkUrl": "(string) undefined",
            "bankName": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改进度配置的记录的显示状态    /v1/closedCycle/config/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putClosedCycleConfigUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 更新度查询配置记录记录信息    /v1/closedCycle/config/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      closedCycleBankInfoParam                         度查询配置记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putClosedCycleConfigIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        bankId: '(integer) undefined',
        bankLinkUrl: '(string) undefined',
        bankName: '(string) undefined',
        noticeInfo: '(string) undefined',
        status: '(integer) undefined',
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
 * 新增banner位广告内容记录配置信息    /v1/column/banner/item/add
 *
 * @params      { Array    }      advertiseIdList[]             新增的广告位的记录ID列表信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnBannerItemAddV1({
    params: {
        'advertiseIdList[]': 'undefined',
    },
    headers: {
        versionId: 'undefined', //versionId
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
 * 获取所有未选择的广告位内容列表记录信息    /v1/column/banner/item/advertise/list
 *
 * @params      { Object   }      pageRequest                   分页数据信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnBannerItemAdvertiseListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "advertiseName": "(string) undefined",
            "autoId": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改banner位栏目内容记录信息    /v1/column/banner/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnBannerItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改banner位栏目内容记录的显示状态    /v1/column/banner/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnBannerItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除banner位栏目内容记录信息    /v1/column/banner/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteColumnBannerItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 获取banner位的列表    /v1/column/banner/list
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnBannerListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "advertiseName": "(string) undefined",
            "autoId": "(integer) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 新增综合业务栏目内容记录详情信息    /v1/column/business/item/add
 *
 * @params      { Object   }      businessInfoParam             综合业务栏目内容记录参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnBusinessItemAddV1({
    data: {
        businessName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
    },
    headers: {
        versionId: 'undefined', //versionId
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
 * 查询综合业务栏目内容记录详情信息    /v1/column/business/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnBusinessItemDetailIdV1({
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
    "businessName": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined"
}
*/



/**
 * 修改综合业务栏目内容记录信息    /v1/column/business/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnBusinessItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改综合业务栏目内容记录的显示状态    /v1/column/business/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnBusinessItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除综合业务栏目内容记录信息    /v1/column/business/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteColumnBusinessItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新综合业务栏目内容记录详情信息    /v1/column/business/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      businessInfoParam             综合业务栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnBusinessItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        businessName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
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
 * 获取综合业务栏列表信息    /v1/column/business/list
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnBusinessListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "businessName": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改热门银行栏目关联信用卡列表的推荐位    /v1/column/cardHotBank/card/resetrecommend/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          控位的值(type: 0:控制；1：不控制)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankCardResetrecommendIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改热门银行栏目关联信用卡列表的展示顺序    /v1/column/cardHotBank/card/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankCardShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改热门银行栏目内容记录下面卡片的显示状态    /v1/column/cardHotBank/card/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankCardUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 查询热门银行栏目内容里的卡片记录详情信息    /v1/column/cardHotBank/card/{id}/detail
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnCardHotBankCardIdDetailV1({
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
    "cardId": "(string) undefined",
    "cardName": "(string) undefined",
    "cardPictureUrl": "(string) undefined",
    "cardownerRecommendation": "(string) undefined",
    "fixedPositionFlag": "(integer) undefined",
    "hotTag": "(string) undefined",
    "indexOrder": "(integer) undefined",
    "linkUrl": "(string) undefined",
    "prizeImageUrl": "(string) undefined",
    "promotionTag": "(string) undefined",
    "status": "(string) undefined"
}
*/



/**
 * 更新热门银行栏目内容里的卡片记录详情信息    /v1/column/cardHotBank/card/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      hotBankInfoParam              热门银行栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankCardIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        cardId: '(string) undefined',
        cardownerRecommendation: '(string) undefined',
        hotTag: '(string) undefined',
        linkUrl: '(string) undefined',
        prizeImageUrl: '(string) undefined',
        promotionTag: '(string) undefined',
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
 * 查询热门银行下面的所有信用卡列表信息    /v1/column/cardHotBank/cards/list
 *
 * @params      { Object   }      hotBankCardQueryParam                            热门银行下面的所有信用卡参数封装,ID:标识具体的栏目内容记录,0标识新增,其他具体值
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnCardHotBankCardsListV1({
    data: {
        hotBankId: '(integer) undefined',
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 热门银行列表    /v1/column/cardHotBank/hotBank/list
 *
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnCardHotBankHotBankListV1({
    headers: {
        versionId: 'undefined', //versionId
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
        "hotBankId": "(integer) undefined",
        "hotBankName": "(string) undefined"
    }
]
*/



/**
 * 新增热门银行栏目内容记录详情信息    /v1/column/cardHotBank/item/add
 *
 * @params      { Object   }      hotBankInfoParam              热门银行栏目内容记录参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnCardHotBankItemAddV1({
    data: {
        hotBankCardParamList: [{
        	cardId: '(string) undefined',
        	cardownerRecommendation: '(string) undefined',
        	hotTag: '(string) undefined',
        	linkUrl: '(string) undefined',
        	prizeImageUrl: '(string) undefined',
        	promotionTag: '(string) undefined',
        }],
        hotBankId: '(integer) undefined',
        hotBankName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        promotionDetailPage: '(string) undefined',
        promotionTag: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
    },
    headers: {
        versionId: 'undefined', //versionId
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
 * 查询热门银行栏目内容记录详情信息    /v1/column/cardHotBank/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnCardHotBankItemDetailIdV1({
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
    "hotBankCardDTOList": [
        {
            "autoId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined",
            "status": "(string) undefined"
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
}
*/



/**
 * 修改热门银行栏目内容展示顺序    /v1/column/cardHotBank/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改热门银行栏目内容记录的控位状态    /v1/column/cardHotBank/item/updateFixedPositionFlag/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      fixedPositionFlag             修改的状态信息(fixedPositionFlag: 0 固定，1，解除固定)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankItemUpdateFixedPositionFlagIdV1({
    params: {
        id: 'undefined',
        fixedPositionFlag: 'undefined',
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
 * 修改热门银行栏目内容记录的显示状态    /v1/column/cardHotBank/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除热门银行栏目内容记录信息    /v1/column/cardHotBank/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteColumnCardHotBankItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新热门银行栏目内容记录详情信息    /v1/column/cardHotBank/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      hotBankInfoParam              热门银行栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnCardHotBankItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        hotBankCardParamList: [{
        	cardId: '(string) undefined',
        	cardownerRecommendation: '(string) undefined',
        	hotTag: '(string) undefined',
        	linkUrl: '(string) undefined',
        	prizeImageUrl: '(string) undefined',
        	promotionTag: '(string) undefined',
        }],
        hotBankId: '(integer) undefined',
        hotBankName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        promotionDetailPage: '(string) undefined',
        promotionTag: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * 获取热门银行的列表信息    /v1/column/cardHotBank/list
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnCardHotBankListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotBankId": "(integer) undefined",
            "hotBankName": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 获取banner位的详情页配置信息    /v1/column/config/banner/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnConfigBannerDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "bannerInfoDTOList": {
        "data": [
            {
                "advertiseName": "(string) undefined",
                "autoId": "(integer) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "status": "(integer) undefined"
}
*/



/**
 * 获取综合业务栏目配置详情页信息    /v1/column/config/business/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnConfigBusinessDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "businessInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "businessName": "(string) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "status": "(integer) undefined"
}
*/



/**
 * 获取热门银行的详情页配置信息    /v1/column/config/cardHotBank/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnConfigCardHotBankDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "hotBankInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "fixedPositionFlag": "(integer) undefined",
                "hotBankId": "(integer) undefined",
                "hotBankName": "(string) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "promotionTag": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "status": "(integer) undefined"
}
*/



/**
 * 获取热门卡片的详情页配置信息    /v1/column/config/hotCard/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnConfigHotCardDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "hotCardInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "cardId": "(string) undefined",
                "fixedPositionFlag": "(integer) undefined",
                "hotTag": "(string) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "recommendName": "(string) undefined",
                "recommendTag": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "status": "(integer) undefined"
}
*/



/**
 * 获取所有的栏目列表配置    /v1/column/config/list
 *
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnConfigListV1({
    headers: {
        versionId: 'undefined', //versionId
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
        "autoId": "(integer) undefined",
        "columnConfigFLag": "(integer) undefined",
        "columnName": "(string) undefined",
        "columnShortName": "(string) undefined",
        "orderIndex": "(integer) undefined",
        "status": "(integer) undefined"
    }
]
*/



/**
 * 获取今日推荐的详情页配置信息    /v1/column/config/recommend/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnConfigRecommendDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "recommendInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "fixedPositionFlag": "(integer) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "recommendDetail": "(string) undefined",
                "recommendName": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "status": "(integer) undefined"
}
*/



/**
 * 修改上下移的位置    /v1/column/config/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID
 * @params      { Integer  }      type                          移动类型(1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnConfigShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 获取主题精选栏目的的详情页配置信息    /v1/column/config/theme/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnConfigThemeDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "status": "(integer) undefined",
    "themeInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "customThemeName": "(string) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    }
}
*/



/**
 * 修改栏目名字和状态信息    /v1/column/config/update/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      columnName                    栏目名字
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnConfigUpdateIdV1({
    params: {
        id: 'undefined',
        columnName: 'undefined',
        status: 'undefined',
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
 * 更新栏目配置是否展示状态    /v1/column/config/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID
 * @params      { Integer  }      status                        状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnConfigUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 修改栏目内容配置名字信息    /v1/column/config/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      columnName                    栏目名称信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnConfigIdUpdateV1({
    params: {
        id: 'undefined',
        columnName: 'undefined',
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
 * 热门卡片栏目中的已选信用卡信息列表    /v1/column/hotCard/cardsSelected/list
 *
 * @params      { Object   }      pageRequest                   查询参数
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnHotCardCardsSelectedListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "cardId": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "recommendName": "(string) undefined",
            "recommendTag": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 热门卡片栏目中的未选信用卡信息列表    /v1/column/hotCard/cardsUnSelected/list
 *
 * @params      { Object   }      cardUnSelectedQueryParam                         热门卡片栏目内容记录参数信息(bankId&#x3D;0标识全部)
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnHotCardCardsUnSelectedListV1({
    data: {
        bankId: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 新增热门卡片栏目中的信用卡信息    /v1/column/hotCard/item/add
 *
 * @params      { Array    }      cardIdList[]                  热门卡片栏目内容记录参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnHotCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined',
    },
    headers: {
        versionId: 'undefined', //versionId
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
 * 查询热门卡片栏目内容记录详情信息    /v1/column/hotCard/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnHotCardItemDetailIdV1({
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
    "hotTag": "(string) undefined",
    "indexOrder": "(integer) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "recommendName": "(string) undefined",
    "recommendTag": "(string) undefined",
    "status": "(integer) undefined"
}
*/



/**
 * 修改热门卡片栏目内容记录信息    /v1/column/hotCard/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnHotCardItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改热门卡片栏目内容记录的控位状态    /v1/column/hotCard/item/updateFixedPositionFlag/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      fixedPositionFlag             修改的状态信息(fixedPositionFlag: 0 固定，1，解除固定)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnHotCardItemUpdateFixedPositionFlagIdV1({
    params: {
        id: 'undefined',
        fixedPositionFlag: 'undefined',
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
 * 修改热门卡片栏目内容记录的显示状态    /v1/column/hotCard/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnHotCardItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除热门卡片栏目内容记录信息    /v1/column/hotCard/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteColumnHotCardItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新热门卡片栏目内容记录详情信息    /v1/column/hotCard/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      hotCardInfoParam              热门卡片栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnHotCardItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        hotTag: '(string) undefined',
        linkUrl: '(string) undefined',
        recommendTag: '(string) undefined',
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
 * 查询推荐栏目卡库卡片查询参数(添加+编辑)    /v1/column/recommend/cards/list
 *
 * @params      { Object   }      recommendCardQueryParam                          查询推荐栏目卡库卡片查询参数(queryType:1按银行查询,2按卡片名称查询,(今天推荐栏目记录ID)id:添加时为0,编辑为具体的值),bankId:0表示全部银行
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnRecommendCardsListV1({
    data: {
        bankId: '(integer) undefined',
        cardName: '(string) undefined',
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardId": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "selectedFlag": "(boolean) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 新增今日推荐栏目内容记录详情信息    /v1/column/recommend/item/add
 *
 * @params      { Object   }      recommendInfoParam            今日推荐栏目内容记录参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnRecommendItemAddV1({
    data: {
        cardId: '(string) undefined',
        cardLinkUrl: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        recommendDetail: '(string) undefined',
        recommendName: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
    },
    headers: {
        versionId: 'undefined', //versionId
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
 * 查询今日推荐栏目内容记录详情信息    /v1/column/recommend/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnRecommendItemDetailIdV1({
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
}
*/



/**
 * 查询全部推荐栏目内容记录详情列表    /v1/column/recommend/item/list
 *
 * @params      { Object   }      pageRequest                   pageRequest
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnRecommendItemListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendName": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改今日推荐栏目内容记录信息    /v1/column/recommend/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnRecommendItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改今日推荐内容记录的控位状态    /v1/column/recommend/item/updateFixedPositionFlag/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      fixedPositionFlag             修改的状态信息(fixedPositionFlag: 0 固定，1，解除固定)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnRecommendItemUpdateFixedPositionFlagIdV1({
    params: {
        id: 'undefined',
        fixedPositionFlag: 'undefined',
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
 * 修改今日推荐栏目内容记录的显示状态    /v1/column/recommend/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnRecommendItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除今日推荐栏目内容记录信息    /v1/column/recommend/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteColumnRecommendItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新今日推荐栏目内容记录详情信息    /v1/column/recommend/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      recommendInfoParam            今日推荐栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnRecommendItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        cardId: '(string) undefined',
        cardLinkUrl: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        recommendDetail: '(string) undefined',
        recommendName: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * 查询公共资源库中主题精内容简单信息列表    /v1/column/theme/cardTheme/list
 *
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnThemeCardThemeListV1({
    headers: {
        versionId: 'undefined', //versionId
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
        "themeId": "(integer) undefined",
        "themeName": "(string) undefined"
    }
]
*/



/**
 * 新增主题精选栏目内容记录详情信息    /v1/column/theme/item/add
 *
 * @params      { Object   }      themeInfoParam                主题精选栏目内容记录参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnThemeItemAddV1({
    data: {
        customThemeName: '(string) undefined',
        fontColor: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        themeId: '(integer) undefined',
    },
    headers: {
        versionId: 'undefined', //versionId
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
 * 查询主题精选栏目内容记录详情信息    /v1/column/theme/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnThemeItemDetailIdV1({
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
    "customThemeName": "(string) undefined",
    "fontColor": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "themeId": "(integer) undefined",
    "themeName": "(string) undefined"
}
*/



/**
 * 修改主题精选栏目内容记录信息    /v1/column/theme/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnThemeItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 修改主题精选栏目内容记录的显示状态    /v1/column/theme/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnThemeItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除主题精选栏目内容记录信息    /v1/column/theme/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteColumnThemeItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 更新主题精选栏目内容记录详情信息    /v1/column/theme/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      themeInfoParam                主题精选栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnThemeItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        customThemeName: '(string) undefined',
        fontColor: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        themeId: '(integer) undefined',
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
 * 获取主题精选栏目的列表信息    /v1/column/theme/list
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnThemeListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "customThemeName": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 新增配置版本信息    /v1/column/version/add
 *
 * @params      { String   }      versionInfo                   新增的版本信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postColumnVersionAddV1({
    params: {
        versionInfo: 'undefined',
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
 * 获取配置版本的列表信息    /v1/column/version/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getColumnVersionListV1({
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
        "defaultVersionFlag": "(integer) undefined",
        "versionId": "(integer) undefined",
        "versionName": "(string) undefined"
    }
]
*/



/**
 * 删除配置版本信息    /v1/column/version/{versionId}/delete
 *
 * @params      { Integer  }      versionId                     记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteColumnVersionVersionIdDeleteV1({
    params: {
        versionId: 'undefined',
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
 * 修改配置版本信息    /v1/column/version/{versionId}/update
 *
 * @params      { String   }      versionInfo                   版本信息
 * @params      { Integer  }      versionId                     记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putColumnVersionVersionIdUpdateV1({
    params: {
        versionInfo: 'undefined',
        versionId: 'undefined',
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
 * 新增额度测试配置信息    /v1/limittest/config/add
 *
 * @params      { Integer  }      limitType                     额度类别
 * @params      { Array    }      cardIdList[]                  配置项卡片ID信息
 * @params      { Integer  }      versionId                     版本信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postLimittestConfigAddV1({
    params: {
        limitType: 'undefined',
        'cardIdList[]': 'undefined',
    },
    headers: {
        versionId: 'undefined', //版本信息
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
 * 获取额度测试配置的列表信息    /v1/limittest/config/list
 *
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getLimittestConfigListV1({
    headers: {
        versionId: 'undefined', //versionId
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
        "limitType": "(integer) undefined",
        "limitTypeDescribe": "(string) undefined"
    }
]
*/



/**
 * 删除额度测试配置信息    /v1/limittest/config/{id}/delete
 *
 * @params      { Integer  }      id                            limitType的值
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteLimittestConfigIdDeleteV1({
    params: {
        id: 'undefined',
    },
    headers: {
        versionId: '1', //versionId
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
 * 获取额度测试配置的详细信息    /v1/limittest/config/{id}/detail
 *
 * @params      { Integer  }      id                            id
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getLimittestConfigIdDetailV1({
    params: {
        id: 'undefined',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "limitRecommendCardInfoDTOList": [
        {
            "cardId": "(string) undefined",
            "cardName": "(string) undefined"
        }
    ],
    "limitType": "(integer) undefined",
    "limitTypeDescribe": "(string) undefined"
}
*/



/**
 * 修改额度测试配置信息    /v1/limittest/config/{id}/update
 *
 * @params      { Array    }      cardIdList[]                  配置的卡片信息
 * @params      { Integer  }      id                            limitType的值
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putLimittestConfigIdUpdateV1({
    params: {
        'cardIdList[]': 'undefined',
        id: 'undefined',
    },
    headers: {
        versionId: 'undefined', //versionId
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
 * 获取搜索配置的列表信息    /v1/search/config/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getSearchConfigListV1({
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
        "id": "(integer) undefined",
        "searchHotWords": [],
        "searchRecommendWords": "(string) undefined",
        "searchType": "(integer) undefined",
        "searchTypeDescribe": "(string) undefined"
    }
]
*/



/**
 * 修改搜索配置信息    /v1/search/config/{id}/update
 *
 * @params      { Array    }      configContent[]               修改后的配置项内容
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putSearchConfigIdUpdateV1({
    params: {
        'configContent[]': 'undefined',
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
"(integer) undefined"
*/



/**
 * 新增邀请办卡分享配置    /v1/shareConfig/add
 *
 * @params      { Object   }      shareInfoParam                shareInfoParam
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postShareConfigAddV1({
    data: {
        shareImgUrl: '(string) 期数图标',
        shareSubTitle: '(string) 期数分享子标题',
        shareTitle: '(string) 期数分享标题',
        shareUrl: '(string) 期数跳转链接',
        termId: '(integer) 期数Id',
        termTitle: '(string) 期数名',
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
 * 删除分享配置    /v1/shareConfig/delete/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteShareConfigDeleteIdV1({
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
"(integer) undefined"
*/



/**
 * 获取分享配置    /v1/shareConfig/list
 *
 * @params      { Integer  }      termId                        termId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getShareConfigListV1({
    params: {
        termId: 'undefined',
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
    "data": [
        {
            "id": "(integer) undefined",
            "shareImgUrl": "(string) undefined",
            "shareSubTitle": "(string) undefined",
            "shareTitle": "(string) undefined",
            "shareUrl": "(string) undefined",
            "termId": "(integer) undefined",
            "termTitle": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改奖励配置    /v1/shareConfig/update/{termId}
 *
 * @params      { Integer  }      termId                        termId
 * @params      { Object   }      shareInfoParam                shareInfoParam
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putShareConfigUpdateTermIdV1({
    params: {
        termId: 'undefined',
    },
    data: {
        shareImgUrl: '(string) 期数图标',
        shareSubTitle: '(string) 期数分享子标题',
        shareTitle: '(string) 期数分享标题',
        shareUrl: '(string) 期数跳转链接',
        termId: '(integer) 期数Id',
        termTitle: '(string) 期数名',
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
 * 新增全部信用中的信用卡信息    /v1/successPageCard/item/add
 *
 * @params      { Array    }      cardIdList[]                  信用卡记录ID
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postSuccessPageCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined',
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
 * 查询全部已选信用卡记录列表    /v1/successPageCard/selectedCard/list
 *
 * @params      { Object   }      pageRequest                   pageRequest
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postSuccessPageCardSelectedCardListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "recommendName": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改全部信用卡显示顺序    /v1/successPageCard/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putSuccessPageCardShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * 查询全部未选信用卡内容记录列表    /v1/successPageCard/unSelectedCard/list
 *
 * @params      { Object   }      cardUnSelectedQueryParam                         查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postSuccessPageCardUnSelectedCardListV1({
    data: {
        bankId: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 修改全部信用卡内容记录的显示状态    /v1/successPageCard/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putSuccessPageCardUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 删除全部信用卡内容记录信息    /v1/successPageCard/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteSuccessPageCardIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * 新增期数配置    /v1/term/add
 *
 * @params      { Object   }      termParam                     termParam
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postTermAddV1({
    data: {
        bankInfoDTOList: [{
        	bankId: '(integer) undefined',
        	bankName: '(string) undefined',
        }],
        endTime: '(string) undefined',
        rule: '(string) undefined',
        startTime: '(string) undefined',
        title: '(string) undefined',
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
 * 获取银行配置    /v1/term/bank/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getTermBankListV1({
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
        "bankName": "(string) undefined"
    }
]
*/



/**
 * 删除期数配置    /v1/term/delete/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteTermDeleteIdV1({
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
"(integer) undefined"
*/



/**
 * 禁用期数    /v1/term/enable/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { Integer  }      status                        status
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putTermEnableIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * 获取期数配置    /v1/term/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getTermListV1({
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
    "data": [
        {
            "bankInfoDTOList": [
                {
                    "bankId": "(integer) undefined",
                    "bankName": "(string) undefined"
                }
            ],
            "endTime": "(string) undefined",
            "id": "(integer) undefined",
            "rule": "(string) undefined",
            "startTime": "(string) undefined",
            "status": "(integer) undefined",
            "title": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 获取期数配置    /v1/term/simple/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getTermSimpleListV1({
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
        "termId": "(integer) undefined",
        "termTitle": "(string) undefined"
    }
]
*/



/**
 * 获取期数配置    /v1/term/term/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getTermTermIdV1({
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
    "bankInfoDTOList": [
        {
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined"
        }
    ],
    "endTime": "(string) undefined",
    "id": "(integer) undefined",
    "rule": "(string) undefined",
    "startTime": "(string) undefined",
    "status": "(integer) undefined",
    "title": "(string) undefined"
}
*/



/**
 * 修改期数配置    /v1/term/update/{id}
 *
 * @params      { Integer  }      id                            id
 * @params      { Object   }      termParam                     termParam
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putTermUpdateIdV1({
    params: {
        id: 'undefined',
    },
    data: {
        bankInfoDTOList: [{
        	bankId: '(integer) undefined',
        	bankName: '(string) undefined',
        }],
        endTime: '(string) undefined',
        rule: '(string) undefined',
        startTime: '(string) undefined',
        title: '(string) undefined',
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
 * 测试接口    /v1/tool/test
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postToolTestV1({
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
 * 新增智能选卡配置信息    /v1/wise/config/add
 *
 * @params      { Integer  }      recommendType                 推荐类别类型
 * @params      { Object   }      recommendCardInfoDTOList                         配置项内容
 * @params      { Integer  }      versionId                     版本信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWiseConfigAddV1({
    params: {
        recommendType: 'undefined',
    },
    data: {
        recommendCardInfoDTOList: [
    {
        "cardId": "(string) undefined",
        "otherLimitType": "(integer) undefined"
    }
],

    },
    headers: {
        versionId: '1', //版本信息
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
 * 获取智能选卡配置的列表信息    /v1/wise/config/list
 *
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWiseConfigListV1({
    headers: {
        versionId: 'undefined', //versionId
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
        "recommendType": "(integer) undefined",
        "recommendTypeDescribe": "(string) undefined"
    }
]
*/



/**
 * 删除智能选卡配置信息    /v1/wise/config/{id}/delete
 *
 * @params      { Integer  }      id                            推荐类别recommendType
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteWiseConfigIdDeleteV1({
    params: {
        id: 'undefined',
    },
    headers: {
        versionId: '1', //versionId
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
 * 获取智能选卡配置的详细信息    /v1/wise/config/{id}/detail
 *
 * @params      { Integer  }      id                            id
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWiseConfigIdDetailV1({
    params: {
        id: 'undefined',
    },
    headers: {
        versionId: 'undefined', //versionId
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
    "recommendType": "(integer) undefined",
    "recommendTypeDescribe": "(string) undefined",
    "wiseRecommendCardInfoDTOList": [
        {
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "otherLimitType": "(integer) undefined",
            "otherLimitTypeDescribe": "(string) undefined"
        }
    ]
}
*/



/**
 * 修改智能选卡配置信息    /v1/wise/config/{id}/update
 *
 * @params      { Integer  }      id                            推荐类别recommendType
 * @params      { Object   }      recommendCardInfoDTOList                         修改后的配置项内容
 * @params      { Integer  }      versionId                     versionId
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWiseConfigIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        recommendCardInfoDTOList: [
    {
        "cardId": "(string) undefined",
        "otherLimitType": "(integer) undefined"
    }
],

    },
    headers: {
        versionId: 'undefined', //versionId
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
 * [微信小程序]修改热门银行栏目关联信用卡列表的展示顺序    /v1/wxColumn/cardHotBank/card/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnCardHotBankCardShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * [微信小程序]查询热门银行下面的所有信用卡列表信息    /v1/wxColumn/cardHotBank/cards/list
 *
 * @params      { Object   }      hotBankCardQueryParam                            热门银行下面的所有信用卡参数封装,ID:标识具体的栏目内容记录,0标识新增,其他具体值
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnCardHotBankCardsListV1({
    data: {
        hotBankId: '(integer) undefined',
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * [微信小程序]热门银行列表    /v1/wxColumn/cardHotBank/hotBank/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWxColumnCardHotBankHotBankListV1({
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
        "hotBankId": "(integer) undefined",
        "hotBankName": "(string) undefined"
    }
]
*/



/**
 * [微信小程序]新增热门银行栏目内容记录详情信息    /v1/wxColumn/cardHotBank/item/add
 *
 * @params      { Object   }      hotBankInfoParam              热门银行栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnCardHotBankItemAddV1({
    data: {
        hotBankCardParamList: [{
        	cardId: '(string) undefined',
        	cardownerRecommendation: '(string) undefined',
        	hotTag: '(string) undefined',
        	linkUrl: '(string) undefined',
        	prizeImageUrl: '(string) undefined',
        	promotionTag: '(string) undefined',
        }],
        hotBankId: '(integer) undefined',
        hotBankName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        promotionDetailPage: '(string) undefined',
        promotionTag: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * [微信小程序]查询热门银行栏目内容记录详情信息    /v1/wxColumn/cardHotBank/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWxColumnCardHotBankItemDetailIdV1({
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
    "hotBankCardDTOList": [
        {
            "autoId": "(integer) undefined",
            "cardId": "(string) undefined",
            "cardName": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "cardownerRecommendation": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "prizeImageUrl": "(string) undefined",
            "promotionTag": "(string) undefined",
            "status": "(string) undefined"
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
}
*/



/**
 * [微信小程序]修改热门银行栏目内容展示顺序    /v1/wxColumn/cardHotBank/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnCardHotBankItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * [微信小程序]修改热门银行栏目内容记录的显示状态    /v1/wxColumn/cardHotBank/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnCardHotBankItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * [微信小程序]删除热门银行栏目内容记录信息    /v1/wxColumn/cardHotBank/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteWxColumnCardHotBankItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * [微信小程序]更新热门银行栏目内容记录详情信息    /v1/wxColumn/cardHotBank/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      hotBankInfoParam              热门银行栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnCardHotBankItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        hotBankCardParamList: [{
        	cardId: '(string) undefined',
        	cardownerRecommendation: '(string) undefined',
        	hotTag: '(string) undefined',
        	linkUrl: '(string) undefined',
        	prizeImageUrl: '(string) undefined',
        	promotionTag: '(string) undefined',
        }],
        hotBankId: '(integer) undefined',
        hotBankName: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        promotionDetailPage: '(string) undefined',
        promotionTag: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * [微信小程序]获取热门银行的列表信息    /v1/wxColumn/cardHotBank/list
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnCardHotBankListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotBankId": "(integer) undefined",
            "hotBankName": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "promotionTag": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * [微信小程序]获取热门银行的详情页配置信息    /v1/wxColumn/config/cardHotBank/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnConfigCardHotBankDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "hotBankInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "fixedPositionFlag": "(integer) undefined",
                "hotBankId": "(integer) undefined",
                "hotBankName": "(string) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "promotionTag": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "status": "(integer) undefined"
}
*/



/**
 * [微信小程序]获取热门卡片的详情页配置信息    /v1/wxColumn/config/hotCard/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnConfigHotCardDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "hotCardInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "cardId": "(string) undefined",
                "fixedPositionFlag": "(integer) undefined",
                "hotTag": "(string) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "recommendName": "(string) undefined",
                "recommendTag": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "status": "(integer) undefined"
}
*/



/**
 * [微信小程序]获取所有的栏目列表配置    /v1/wxColumn/config/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWxColumnConfigListV1({
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
        "autoId": "(integer) undefined",
        "columnConfigFLag": "(integer) undefined",
        "columnName": "(string) undefined",
        "columnShortName": "(string) undefined",
        "orderIndex": "(integer) undefined",
        "status": "(integer) undefined"
    }
]
*/



/**
 * [微信小程序]获取今日推荐的详情页配置信息    /v1/wxColumn/config/recommend/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnConfigRecommendDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "recommendInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "fixedPositionFlag": "(integer) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "recommendDetail": "(string) undefined",
                "recommendName": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    },
    "status": "(integer) undefined"
}
*/



/**
 * [微信小程序]修改上下移的位置    /v1/wxColumn/config/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID
 * @params      { Integer  }      type                          移动类型(1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnConfigShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * [微信小程序]获取主题精选栏目的的详情页配置信息    /v1/wxColumn/config/theme/detail
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnConfigThemeDetailV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "columnName": "(string) undefined",
    "columnShortName": "(string) undefined",
    "status": "(integer) undefined",
    "themeInfoDTOList": {
        "data": [
            {
                "autoId": "(integer) undefined",
                "customThemeName": "(string) undefined",
                "indexOrder": "(integer) undefined",
                "linkUrl": "(string) undefined",
                "pictureUrl": "(string) undefined",
                "promotionDetail": "(string) undefined",
                "status": "(integer) undefined"
            }
        ],
        "total": "(integer) undefined"
    }
}
*/



/**
 * [微信小程序]修改栏目名字和状态信息    /v1/wxColumn/config/update/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      columnName                    栏目名字
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnConfigUpdateIdV1({
    params: {
        id: 'undefined',
        columnName: 'undefined',
        status: 'undefined',
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
 * [微信小程序]更新栏目配置是否展示状态    /v1/wxColumn/config/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID
 * @params      { Integer  }      status                        状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnConfigUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * [微信小程序]修改栏目内容配置名字信息    /v1/wxColumn/config/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      columnName                    栏目名称信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnConfigIdUpdateV1({
    params: {
        id: 'undefined',
        columnName: 'undefined',
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
 * [微信小程序]热门卡片栏目中的已选信用卡信息列表    /v1/wxColumn/hotCard/cardsSelected/list
 *
 * @params      { Object   }      pageRequest                   查询参数
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnHotCardCardsSelectedListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "cardId": "(string) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "hotTag": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "recommendName": "(string) undefined",
            "recommendTag": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * [微信小程序]热门卡片栏目中的未选信用卡信息列表    /v1/wxColumn/hotCard/cardsUnSelected/list
 *
 * @params      { Object   }      cardUnSelectedQueryParam                         热门卡片栏目内容记录参数信息(bankId&#x3D;0标识全部)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnHotCardCardsUnSelectedListV1({
    data: {
        bankId: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardBackgroundPictureUrl": "(string) undefined",
            "cardCopyWriting": "(string) undefined",
            "cardId": "(string) undefined",
            "cardLinkUrl": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "customLinkUrl": "(string) undefined",
            "hotTag": "(string) undefined",
            "identificationFlag": "(integer) undefined",
            "moreInfoLinkUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendStar": "(number) undefined",
            "status": "(string) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * [微信小程序]新增热门卡片栏目中的信用卡信息    /v1/wxColumn/hotCard/item/add
 *
 * @params      { Array    }      cardIdList[]                  热门卡片栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnHotCardItemAddV1({
    params: {
        'cardIdList[]': 'undefined',
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
 * [微信小程序]查询热门卡片栏目内容记录详情信息    /v1/wxColumn/hotCard/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWxColumnHotCardItemDetailIdV1({
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
    "hotTag": "(string) undefined",
    "indexOrder": "(integer) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "recommendName": "(string) undefined",
    "recommendTag": "(string) undefined",
    "status": "(integer) undefined"
}
*/



/**
 * [微信小程序]修改热门卡片栏目内容记录信息    /v1/wxColumn/hotCard/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnHotCardItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * [微信小程序]修改热门卡片栏目内容记录的显示状态    /v1/wxColumn/hotCard/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnHotCardItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * [微信小程序]删除热门卡片栏目内容记录信息    /v1/wxColumn/hotCard/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteWxColumnHotCardItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * [微信小程序]更新热门卡片栏目内容记录详情信息    /v1/wxColumn/hotCard/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      hotCardInfoParam              热门卡片栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnHotCardItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        hotTag: '(string) undefined',
        linkUrl: '(string) undefined',
        recommendTag: '(string) undefined',
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
 * [微信小程序]查询推荐栏目卡库卡片查询参数(添加+编辑)    /v1/wxColumn/recommend/cards/list
 *
 * @params      { Object   }      recommendCardQueryParam                          查询推荐栏目卡库卡片查询参数(queryType:1按银行查询,2按卡片名称查询,(今天推荐栏目记录ID)id:添加时为0,编辑为具体的值),bankId:0表示全部银行
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnRecommendCardsListV1({
    data: {
        bankId: '(integer) undefined',
        cardName: '(string) undefined',
        id: '(integer) undefined',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "bankId": "(integer) undefined",
            "bankName": "(string) undefined",
            "cardId": "(string) undefined",
            "cardPictureUrl": "(string) undefined",
            "creditCardName": "(string) undefined",
            "selectedFlag": "(boolean) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * [微信小程序]新增今日推荐栏目内容记录详情信息    /v1/wxColumn/recommend/item/add
 *
 * @params      { Object   }      recommendInfoParam            今日推荐栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnRecommendItemAddV1({
    data: {
        cardId: '(string) undefined',
        cardLinkUrl: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        recommendDetail: '(string) undefined',
        recommendName: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * [微信小程序]查询今日推荐栏目内容记录详情信息    /v1/wxColumn/recommend/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWxColumnRecommendItemDetailIdV1({
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
}
*/



/**
 * [微信小程序]查询全部推荐栏目内容记录详情列表    /v1/wxColumn/recommend/item/list
 *
 * @params      { Object   }      pageRequest                   pageRequest
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnRecommendItemListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "fixedPositionFlag": "(integer) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "recommendDetail": "(string) undefined",
            "recommendName": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * [微信小程序]修改今日推荐栏目内容记录信息    /v1/wxColumn/recommend/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnRecommendItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * [微信小程序]修改今日推荐栏目内容记录的显示状态    /v1/wxColumn/recommend/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnRecommendItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * [微信小程序]删除今日推荐栏目内容记录信息    /v1/wxColumn/recommend/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteWxColumnRecommendItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * [微信小程序]更新今日推荐栏目内容记录详情信息    /v1/wxColumn/recommend/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      recommendInfoParam            今日推荐栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnRecommendItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        cardId: '(string) undefined',
        cardLinkUrl: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        recommendDetail: '(string) undefined',
        recommendName: '(string) undefined',
        showCities: [{
        	code: '(string) 城市编号',
        	name: '(string) 城市名称',
        }],
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
 * [微信小程序]查询公共资源库中主题精内容简单信息列表    /v1/wxColumn/theme/cardTheme/list
 *
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWxColumnThemeCardThemeListV1({
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
        "themeId": "(integer) undefined",
        "themeName": "(string) undefined"
    }
]
*/



/**
 * [微信小程序]新增主题精选栏目内容记录详情信息    /v1/wxColumn/theme/item/add
 *
 * @params      { Object   }      themeInfoParam                主题精选栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnThemeItemAddV1({
    data: {
        customThemeName: '(string) undefined',
        fontColor: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        themeId: '(integer) undefined',
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
 * [微信小程序]查询主题精选栏目内容记录详情信息    /v1/wxColumn/theme/item/detail/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getWxColumnThemeItemDetailIdV1({
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
    "customThemeName": "(string) undefined",
    "fontColor": "(string) undefined",
    "linkUrl": "(string) undefined",
    "pictureUrl": "(string) undefined",
    "promotionDetail": "(string) undefined",
    "themeId": "(integer) undefined",
    "themeName": "(string) undefined"
}
*/



/**
 * [微信小程序]修改主题精选栏目内容记录信息    /v1/wxColumn/theme/item/shift/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      type                          修改的状态信息(type: 1:上移；2：下移 ；3:置顶)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnThemeItemShiftIdV1({
    params: {
        id: 'undefined',
        type: 'undefined',
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
 * [微信小程序]修改主题精选栏目内容记录的显示状态    /v1/wxColumn/theme/item/updateStatus/{id}
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Integer  }      status                        修改的状态信息(status: 0 启用，1，禁用)
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnThemeItemUpdateStatusIdV1({
    params: {
        id: 'undefined',
        status: 'undefined',
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
 * [微信小程序]删除主题精选栏目内容记录信息    /v1/wxColumn/theme/item/{id}/delete
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.deleteWxColumnThemeItemIdDeleteV1({
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
"(integer) undefined"
*/



/**
 * [微信小程序]更新主题精选栏目内容记录详情信息    /v1/wxColumn/theme/item/{id}/update
 *
 * @params      { Integer  }      id                            记录ID信息
 * @params      { Object   }      themeInfoParam                主题精选栏目内容记录参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.putWxColumnThemeItemIdUpdateV1({
    params: {
        id: 'undefined',
    },
    data: {
        customThemeName: '(string) undefined',
        fontColor: '(string) undefined',
        linkUrl: '(string) undefined',
        pictureUrl: '(string) undefined',
        promotionDetail: '(string) undefined',
        themeId: '(integer) undefined',
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
 * [微信小程序]获取主题精选栏目的列表信息    /v1/wxColumn/theme/list
 *
 * @params      { Object   }      pageRequest                   分页参数信息
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postWxColumnThemeListV1({
    data: {
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录条数',
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
    "data": [
        {
            "autoId": "(integer) undefined",
            "customThemeName": "(string) undefined",
            "indexOrder": "(integer) undefined",
            "linkUrl": "(string) undefined",
            "pictureUrl": "(string) undefined",
            "promotionDetail": "(string) undefined",
            "status": "(integer) undefined"
        }
    ],
    "total": "(integer) undefined"
}
*/



/**
 * 新增或更新第三方渠道    /v2/channel/config/createOrUpdate
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postChannelConfigCreateOrUpdateV2({
    data: {
        channelCode: '(string) undefined',
        channelName: '(string) undefined',
        id: '(integer) undefined',
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
    "channelLink": "(string) 渠道链接",
    "channelName": "(string) 渠道名",
    "defaultFlag": "(integer) 是否主渠道标志，0：主渠道，1：第三方渠道",
    "id": "(integer) 渠道id，兼容原versionId",
    "status": "(integer) 渠道状态"
}
*/



/**
 * 查询渠道基本信息列表    /v2/channel/config/list
 *
 * @params      { Integer  }      pageSize                      pageSize
 * @params      { Integer  }      pageIndex                     pageIndex
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.getChannelConfigListV2({
    params: {
        pageSize: 'undefined',
        pageIndex: 'undefined',
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
        "channelLink": "(string) 渠道链接",
        "channelName": "(string) 渠道名",
        "defaultFlag": "(integer) 是否主渠道标志，0：主渠道，1：第三方渠道",
        "id": "(integer) 渠道id，兼容原versionId",
        "status": "(integer) 渠道状态"
    }
]
*/



/**
 * 更改渠道状态    /v2/channel/config/status
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      Authorization                 service token
 */
BdcBankaManager.postChannelConfigStatusV2({
    data: {
        id: '(integer) 渠道的id',
        status: '(integer) 需要修改为的状态，0启用，1禁用',
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



