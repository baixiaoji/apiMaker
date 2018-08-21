import BkCobrandedcardManager from './api/bk-cobrandedcard-manager/api';


/**
 * 查询省市区列表    /v1/address/
 *
 * @params      { Integer  }      bankId                        银行Id
 */
BkCobrandedcardManager.getAddressV1({
    params: {
        bankId: '0',
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
                "areas": [
                    {
                        "areaCode": "(string) 区code",
                        "areaName": "(string) 区名称"
                    }
                ],
                "cityCode": "(string) 市code",
                "cityName": "(string) 市名称"
            }
        ],
        "provinceCode": "(string) 省code",
        "provinceName": "(string) 省名称"
    }
]
*/



/**
 * 查询区列表    /v1/address/area
 *
 * @params      { Integer  }      bankId                        银行Id
 * @params      { String   }      cityCode                      市code
 */
BkCobrandedcardManager.getAddressAreaV1({
    params: {
        bankId: '',
        cityCode: '',
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
        "areaCode": "(string) 区code",
        "areaName": "(string) 区名称"
    }
]
*/



/**
 * 查询市列表    /v1/address/city
 *
 * @params      { Integer  }      bankId                        银行Id
 * @params      { String   }      provinceCode                  省code
 */
BkCobrandedcardManager.getAddressCityV1({
    params: {
        bankId: '',
        provinceCode: '',
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
        "areas": [
            {
                "areaCode": "(string) 区code",
                "areaName": "(string) 区名称"
            }
        ],
        "cityCode": "(string) 市code",
        "cityName": "(string) 市名称"
    }
]
*/



/**
 * 查询省列表    /v1/address/province
 *
 * @params      { Integer  }      bankId                        银行Id
 */
BkCobrandedcardManager.getAddressProvinceV1({
    params: {
        bankId: '0',
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
                "areas": [
                    {
                        "areaCode": "(string) 区code",
                        "areaName": "(string) 区名称"
                    }
                ],
                "cityCode": "(string) 市code",
                "cityName": "(string) 市名称"
            }
        ],
        "provinceCode": "(string) 省code",
        "provinceName": "(string) 省名称"
    }
]
*/



/**
 * menus    /v1/auth/menus
 *
 */
BkCobrandedcardManager.getAuthMenusV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "message": "(string) undefined",
    "resourceInfos": [
        {
            "app_id": "(string) undefined",
            "code": "(string) undefined",
            "create_time": "(string) undefined",
            "describe": "(string) undefined",
            "icon": "(string) undefined",
            "is_annotation": "(boolean) undefined",
            "last_modify_time": "(string) undefined",
            "method": "(string) undefined",
            "parent_code": "(string) undefined",
            "res_id": "(string) undefined",
            "res_type": "(string) undefined",
            "sort": "(integer) undefined",
            "status": "(integer) undefined",
            "target": "(string) undefined",
            "uri": "(string) undefined"
        }
    ],
    "resultCode": "(integer) undefined"
}
*/



/**
 * 已出账单日志查询    /v1/bill/
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      mobile                        用户手机号
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getBillV1({
    params: {
        userId: '',
        mobile: '',
        pageIndex: '',
        pageSize: '',
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
        "billDate": "(string) 账单日",
        "billMonth": "(integer) 当前账期yyyyMM",
        "billShoppingSheetLogBeanList": [
            {
                "amountMoney": "(number) 交易金额",
                "amountMoneyFlag": "(string) 交易金额符号",
                "description": "(string) 交易摘要",
                "transDate": "(string) 交易时间",
                "transType": "(string) 交易类型",
                "updateTime": "(string) 更新时间"
            }
        ],
        "currentBalance": "(number) 本期账单剩余应还",
        "currentMinPayment": "(number) 本期账单最低应还",
        "lastUpdateBillTime": "(string) 最后更新时间",
        "minPayment": "(number) 最低还款额",
        "newBalance": "(number) 本期账单金额",
        "repaymentDate": "(string) 还款日"
    }
]
*/



/**
 * 未出账单日志查询    /v1/bill/sheet
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      mobile                        用户手机号
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getBillSheetV1({
    params: {
        userId: '',
        mobile: '',
        pageIndex: '',
        pageSize: '',
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
        "amountMoney": "(number) 交易金额",
        "amountMoneyFlag": "(string) 交易金额符号",
        "description": "(string) 交易摘要",
        "transDate": "(string) 交易时间",
        "transType": "(string) 交易类型",
        "updateTime": "(string) 更新时间"
    }
]
*/



/**
 * 查询黑名单列表    /v1/blacklist/
 *
 * @params      { Integer  }      userId                        用户userId
 * @params      { String   }      userMobile                    用户手机号码
 * @params      { String   }      userName                      用户姓名
 * @params      { Integer  }      pageIndex                     当前页码，从1开始
 * @params      { Integer  }      pageSize                      页面大小，5~500
 */
BkCobrandedcardManager.getBlacklistV1({
    params: {
        userId: '',
        userMobile: '',
        userName: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "autoId": "(integer) autoId",
            "bankId": "(integer) 黑名单用户已申请|意向申请的联名卡银行Id",
            "idCardNo": "(string) 黑名单用户身份证号码",
            "mobile": "(string) 黑名单用户手机号码",
            "name": "(string) 黑名单用户姓名",
            "note": "(string) 备注",
            "reason": "(string) 原因",
            "type": "(string) 进入黑名单原因：（0：其他 1 客户习惯性投诉抱怨 2：欺诈 3：机器人）-默认1",
            "typeDesc": "(string) 类型详细描述",
            "userId": "(integer) 黑名单用户管家userId"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 提交保存用户黑名单信息    /v1/blacklist/add
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postBlacklistAddV1({
    data: {
        param: '',
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
 * 批量提交保存用户黑名单信息    /v1/blacklist/batchadd
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postBlacklistBatchaddV1({
    data: {
        param: '',
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
 * Excel导入保存用户黑名单信息    /v1/blacklist/excelimport
 *
 * @params      { File     }      file                          待上传黑名单Excel
 */
BkCobrandedcardManager.postBlacklistExcelimportV1({
    data: {
        file: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "failNum": "(integer) 导入失败记录数",
    "showTips": "(string) 导入完成后响应提示",
    "succNum": "(integer) 导入成功记录数"
}
*/



/**
 * 新增或更新启动屏    /v1/bootscreen/addOrUpdate
 *
 * @params      { Object   }      dto                           dto
 */
BkCobrandedcardManager.postBootscreenAddOrUpdateV1({
    data: {
        dto: '',
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
 * 启动屏列表    /v1/bootscreen/list
 *
 * @params      { String   }      fromTime                      查询开始时间
 * @params      { String   }      toTime                        查询截止时间
 * @params      { Integer  }      activityStatus                活动状态
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getBootscreenListV1({
    params: {
        fromTime: '',
        toTime: '',
        activityStatus: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "activityName": "(string) 活动名称",
            "activityStatus": "(string) 活动状态",
            "createTime": "(string) 创建时间",
            "endTime": "(string) 活动结束时间",
            "id": "(integer) undefined",
            "imgLinkUrl": "(string) 图片跳转链接url",
            "imgUrl": "(string) 图片url",
            "startTime": "(string) 活动开始时间"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 上传图片    /v1/bootscreen/uploadImg
 *
 * @params      { File     }      file                          图片文件 
 */
BkCobrandedcardManager.postBootscreenUploadImgV1({
    data: {
        file: '',
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
 * 删除启动屏    /v1/bootscreen/{id}
 *
 * @params      { Integer  }      id                            id
 */
BkCobrandedcardManager.deleteBootscreenIdV1({
    params: {
        id: '',
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
 * 查看卡片推荐配置    /v1/cardrecommend/
 *
 */
BkCobrandedcardManager.getCardrecommendV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "applyId": "(integer) 订单ID",
        "applyIdStr": "(string) 用于详情页面传入使用的订单ID",
        "applyMobile": "(string) 申卡手机号",
        "applyStatus": "(integer) 申卡状态",
        "applyStatusDesc": "(string) 申卡状态描述",
        "bankName": "(string) 银行名称",
        "barCode": "(string) 进件条码",
        "cardTypeId": "(integer) 卡类型Id",
        "cardTypeName": "(string) 卡类型名称",
        "channelName": "(string) 订单来源",
        "companyProvinceCity": "(string) 公司省市",
        "confirmTime": "(string) 订单提交时间",
        "coreStreamList": [
            {
                "extendMsg": {},
                "nodeMsg": "(string) 节点信息",
                "nodeTime": "(string) 节点的时间显示",
                "nodeType": "(integer) 节点类型。0普通节点；10补件节点；20快递节点；30面签节点；40解锁激活节点"
            }
        ],
        "createTime": "(string) 创建时间",
        "deliverTo": "(string) 快递方式",
        "eventStreamList": [
            {
                "createTime": "(string) 创建时间",
                "eventId": "(integer) 事件类型",
                "eventMsg": "(string) 事件内容",
                "eventTime": "(string) 事件时间",
                "isShow": "(boolean) 是否向用户显示",
                "updateTime": "(string) 更新时间"
            }
        ],
        "idCardNo": "(string) 身份证号",
        "interviewRecordId": "(integer) 面签记录的ID",
        "location": "(string) 申请时的定位信息",
        "realIp": "(string) 申请时的IP",
        "registerMobile": "(string) 注册手机号",
        "residentialProvinceCity": "(string) 住宅省市",
        "riskAuditResult": "(string) 风险件审核状态",
        "riskReportRecordId": "(integer) 风险件提报ID",
        "riskReportRecordIdStr": "(string) 风险件提报ID",
        "riskReportTime": "(string) 风险件提报时间",
        "riskReporter": "(string) 风险件提报人",
        "riskTypeDesc": "(string) 风险件类型",
        "saleBranchCode": "(string) 销售支行代码",
        "showCreateInterview": "(boolean) 是否显示创建面签记录按钮",
        "showRevokeCancelStatus": "(boolean) 撤销卡片注销状态 当卡片是已注销时，允许取消注销到审核通过状态",
        "showUnlockActive": "(boolean) 是否显示解锁激活按钮",
        "supplementDocumentRecordId": "(integer) 补件记录ID",
        "updateTime": "(string) 更新时间",
        "userId": "(integer) 用户ID",
        "userName": "(string) 用户姓名"
    }
]
*/



/**
 * 查找cg人群    /v1/cardrecommend/cggroup
 *
 * @params      { Integer  }      cgGroupId                     cgGroupId
 */
BkCobrandedcardManager.getCardrecommendCggroupV1({
    params: {
        cgGroupId: '0',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "groupId": "(integer) 分群id",
    "groupName": "(string) 分群名称"
}
*/



/**
 * queryOpenCityList    /v1/common/manager/opencities
 *
 * @params      { Integer  }      bankId                        银行ID
 * @params      { String   }      cityName                      城市名称
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getCommonManagerOpencitiesV1({
    params: {
        bankId: '',
        cityName: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "bankId": "(integer) 银行ID",
            "bankName": "(string) 银行名称",
            "cityName": "(string) 城市中文名称",
            "configId": "(integer) 配置ID",
            "createTime": "(string) 创建时间",
            "pyCityName": "(string) 城市拼音名称",
            "regionId": "(integer) 所属大区ID",
            "regionName": "(string) 所属大区名称",
            "saleBranchCode": "(string) 销售支行代码",
            "spreadManCode": "(string) 推广人员代码",
            "spreadOrgCode": "(string) 推广机构代码",
            "standardCityCode": "(string) 标准城市代码",
            "standardCityName": "(string) 标准城市名称"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * updateOpenCity    /v1/common/manager/opencity
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postCommonManagerOpencityV1({
    data: {
        param: '',
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
    "cityName": "(string) 城市中文名称",
    "configId": "(integer) 配置ID",
    "createTime": "(string) 创建时间",
    "pyCityName": "(string) 城市拼音名称",
    "regionId": "(integer) 所属大区ID",
    "regionName": "(string) 所属大区名称",
    "saleBranchCode": "(string) 销售支行代码",
    "spreadManCode": "(string) 推广人员代码",
    "spreadOrgCode": "(string) 推广机构代码",
    "standardCityCode": "(string) 标准城市代码",
    "standardCityName": "(string) 标准城市名称"
}
*/



/**
 * delOpenCity    /v1/common/manager/opencity/{configId}
 *
 * @params      { Integer  }      configId                      configId
 */
BkCobrandedcardManager.deleteCommonManagerOpencityConfigIdV1({
    params: {
        configId: '',
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
 * 获取面签开放城市    /v1/common/opencities/
 *
 */
BkCobrandedcardManager.getCommonOpencitiesV1({
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
                "areas": [
                    {
                        "areaCode": "(string) 区code",
                        "areaName": "(string) 区名称",
                        "totalCount": "(integer) 待处理订单数量"
                    }
                ],
                "cityCode": "(string) 市code",
                "cityName": "(string) 市名称",
                "totalCount": "(integer) 待处理订单数量"
            }
        ],
        "provinceCode": "(string) 省code",
        "provinceName": "(string) 省名称"
    }
]
*/



/**
 * 获取面签大区    /v1/common/region/
 *
 */
BkCobrandedcardManager.getCommonRegionV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "key": {},
        "value": {}
    }
]
*/



/**
 * 获取面签人员列表    /v1/common/salesman/
 *
 */
BkCobrandedcardManager.getCommonSalesmanV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "id": "(string) 客户经理Id",
        "mobile": "(string) 客户经理手机号",
        "name": "(string) 客户经理姓名"
    }
]
*/



/**
 * salesManPagerDetailList    /v1/common/salesman/detaillist/
 *
 * @params      { String   }      nameOrMobile                  姓名或手机号
 * @params      { String   }      provinceCode                  所属省code
 * @params      { String   }      cityCode                      所属市code
 * @params      { String   }      areaCode                      所属区code
 * @params      { String   }      locationCity                  定位城市
 * @params      { Ref      }      belongCity                    省 市 区
 * @params      { Integer  }      regionId                      地区code
 * @params      { Integer  }      status                        面签人员状态
 * @params      { Boolean  }      addressRelated                是否关联查询面签业务人员负责区域（true：是 false：否）
 * @params      { Integer  }      pageIndex                     当前页码，从1开始
 * @params      { Integer  }      pageSize                      页面大小，5~500
 */
BkCobrandedcardManager.getCommonSalesmanDetaillistV1({
    params: {
        nameOrMobile: '',
        provinceCode: '',
        cityCode: '',
        areaCode: '',
        locationCity: '',
        belongCity: '',
        regionId: '',
        status: '',
        addressRelated: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "areas": [
                {
                    "areaCode": "(string) 区code",
                    "areaName": "(string) 区名称",
                    "cityCode": "(string) 市code",
                    "cityName": "(string) 市名称",
                    "provinceCode": "(string) 省code",
                    "provinceName": "(string) 省名称"
                }
            ],
            "city": "(string) 所属城市",
            "deviceKey": "(string) 业务员登录设备key",
            "mobile": "(string) 面签业务员电话",
            "name": "(string) 面签业务员姓名",
            "salesManAccountId": "(integer) 面签人员账户Id",
            "salesManAccountIdMask": "(string) 面签人员账户Id",
            "shortFormLimit": "(integer) 短表单派单上限",
            "status": "(integer) 状态(0:正常 1:删除 2：休息)",
            "statusDesc": "(string) 状态描述"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 获取联名卡支持的银行列表    /v1/common/supportbank/
 *
 */
BkCobrandedcardManager.getCommonSupportbankV1({
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
        "bankName": "(string) 银行名称"
    }
]
*/



/**
 * 图片文件上传    /v1/image/upload
 *
 * @params      { File     }      file                          图片文件 
 */
BkCobrandedcardManager.postImageUploadV1({
    data: {
        file: '',
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
 * 查询面签列表    /v1/interview/
 *
 * @params      { String   }      searchType                    关键字检索类型：（1 手机号码或者姓名 2 ：userId）
 * @params      { String   }      nameOrMobile                  查询条件 持卡人姓名或手机号码或者用户userId
 * @params      { String   }      salesManId                    客户经理id
 * @params      { Integer  }      regionId                      面签人员所属大区
 * @params      { String   }      belongCityList                所属城市列表 belongCityList,格式为 &#x27;city1,city2,city3,...&#x27; 
 * @params      { String   }      provinceCode                  工作城市 省code
 * @params      { String   }      cityCode                      工作城市 市code
 * @params      { String   }      areaCode                      工作城市 区code
 * @params      { Integer  }      channelId                     渠道Id
 * @params      { Integer  }      interviewType                 来源code
 * @params      { Integer  }      interviewStatus               订单状态
 * @params      { String   }      applyTimeFrom                 申请时间from
 * @params      { String   }      applyTimeTo                   申请时间to
 * @params      { String   }      activeTimeFrom                激活时间from
 * @params      { String   }      activeTimeTo                  激活时间to
 * @params      { Integer  }      pageIndex                     当前页码，从1开始
 * @params      { Integer  }      pageSize                      页面大小，5~500
 */
BkCobrandedcardManager.getInterviewV1({
    params: {
        searchType: '',
        nameOrMobile: '',
        salesManId: '',
        regionId: '',
        belongCityList: '',
        provinceCode: '',
        cityCode: '',
        areaCode: '',
        channelId: '',
        interviewType: '',
        interviewStatus: '',
        applyTimeFrom: '',
        applyTimeTo: '',
        activeTimeFrom: '',
        activeTimeTo: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "address": "(string) 地址",
            "applyId": "(integer) 申请Id",
            "applyIdMask": "(string) 申请Id mask",
            "applyNode": "(integer) 申请节点（0：待上传 1：待审 2：审核通过 3：审核不通过 4：异常订单 5:已激活）",
            "applyTime": "(string) 申请时间",
            "areaName": "(string) 所属区",
            "auditMan": "(string) 审核员姓名",
            "auditTime": "(string) 审核时间",
            "barCode": "(string) 进件条码",
            "channel": "(string) 渠道（管家、人品、给你花、外部投放...）",
            "cityCode": "(string) 市code",
            "cityName": "(string) 所属市",
            "companyName": "(string) 公司名称",
            "companyPhone": "(string) 单位电话",
            "creditLimitLevel": "(string) 客户额度 档位",
            "department": "(string) 部门",
            "detailNote": "(string) 客户经理备注（风险提示备注）",
            "faceVerifySimiliarity": "(string) 人脸相似度",
            "idCardNo": "(string) 身份证号",
            "interviewMan": "(string) 面签员姓名",
            "interviewManMobile": "(string) 面签员电话",
            "interviewStatus": "(integer) 面签状态（0初始状态 2快递问题订单 5无需处理订单 10待面签 20待审核 25风险用户不予面签 30审核通过 40审核不通过 50用户柜面面签通过）",
            "interviewStatusDesc": "(string) 面签状态描述",
            "key": "(integer) key(列表item排序用)",
            "lastSavedRealAddress": "(string) 最新入（真实信息）库客户公司地址",
            "mobile": "(string) 联系方式（持卡人手机号码）",
            "note": "(string) 客户经理备注（深挖备注）",
            "position": "(string) 职位",
            "provinceName": "(string) 所属省",
            "realAddressEditable": "(boolean) 客户经理补全地址是否可编辑",
            "realCompanyAddress": "(string) 客户经理补全 详细地址(编辑用)",
            "realCompanyAddressDisplay": "(string) 客户经理补全 详细地址(显示用)",
            "realCompanyArea": "(string) 客户经理补全 区代码(编辑用)",
            "realCompanyCity": "(string) 客户经理补全 市代码(编辑用)",
            "realCompanyProvince": "(string) 客户经理补全 省代码(编辑用)",
            "realName": "(string) 申请人（持卡人姓名）",
            "reasonDesc": "(string) 拒绝原因",
            "recordType": "(integer) 面签记录类别（0：面签记录 1：深挖用户 2补件订单 3深挖补件订单）",
            "recordTypeDesc": "(string) 面签记录类别",
            "reserveTime": "(string) 面签预约时间",
            "riskId": "(string) 风险件Id",
            "riskLabel": "(string) 当前订单的风险状态对应显示的标签（风险待审核、风险件银行止付、风险件不予面签、申卡黑名单...）",
            "riskLevel": "(string) 风险程度",
            "riskStatus": "(integer) 当前订单的风险状态（1：风险件 2：黑名单）",
            "updateTime": "(string) 更新时间",
            "uploadTime": "(string) 上传时间",
            "userId": "(integer) undefined"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 更新面签业务人员状态    /v1/interview/altersaleman
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewAltersalemanV1({
    data: {
        param: '',
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
 * 保存面签人员负责区域配置    /v1/interview/areaconfig
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewAreaconfigV1({
    data: {
        param: '',
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
 * 确认不同步客户真实信息    /v1/interview/cancelsync
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewCancelsyncV1({
    data: {
        param: '',
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
 * 获取指定的图片    /v1/interview/image
 *
 * @params      { Integer  }      applyId                       卡申请ID
 * @params      { Integer  }      fileId                        文件ID
 */
BkCobrandedcardManager.getInterviewImageV1({
    params: {
        applyId: '0',
        fileId: '0',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "description": "(string) undefined",
    "file": "(file) undefined",
    "filename": "(string) undefined",
    "inputStream": {},
    "open": "(boolean) undefined",
    "readable": "(boolean) undefined",
    "uri": {
        "absolute": "(boolean) undefined",
        "authority": "(string) undefined",
        "fragment": "(string) undefined",
        "host": "(string) undefined",
        "opaque": "(boolean) undefined",
        "path": "(string) undefined",
        "port": "(integer) undefined",
        "query": "(string) undefined",
        "rawAuthority": "(string) undefined",
        "rawFragment": "(string) undefined",
        "rawPath": "(string) undefined",
        "rawQuery": "(string) undefined",
        "rawSchemeSpecificPart": "(string) undefined",
        "rawUserInfo": "(string) undefined",
        "scheme": "(string) undefined",
        "schemeSpecificPart": "(string) undefined",
        "userInfo": "(string) undefined"
    },
    "url": {
        "authority": "(string) undefined",
        "content": {},
        "defaultPort": "(integer) undefined",
        "file": "(string) undefined",
        "host": "(string) undefined",
        "path": "(string) undefined",
        "port": "(integer) undefined",
        "protocol": "(string) undefined",
        "query": "(string) undefined",
        "ref": "(string) undefined",
        "userInfo": "(string) undefined"
    }
}
*/



/**
 * 面签资料文件上传    /v1/interview/image/base64
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewImageBase64V1({
    data: {
        param: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "applyId": "(integer) 申卡Id",
    "applyIdMask": "(string) 申卡Id mask",
    "fileId": "(integer) 文件Id",
    "fileIdMask": "(string) 文件Id mask",
    "fileType": "(integer) 文件类型（1:身份证正面、2:身份证反面、3:合影照、4：业务确认书、5公司门头照、6客户签字照、 7其它、10工作/财力证明 12补件资料）",
    "fileTypeDesc": "(string) 文件类型字符（1:身份证正面、2:身份证反面、3:合影照、4：业务确认书、5公司门头照、6客户签字照、 7其它、10工作/财力证明 12补件资料）",
    "imageUrl": "(string) 图片下载地址"
}
*/



/**
 * 设置面签客户经理短表单接单上限    /v1/interview/limitsetting
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewLimitsettingV1({
    data: {
        param: '',
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
 * 修改业务员绑定的登录设备    /v1/interview/logindevice
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewLogindeviceV1({
    data: {
        param: '',
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
 * 分页查看用户登录日志列表    /v1/interview/loginlist/
 *
 * @params      { Integer  }      pageIndex                     当前页码，从1开始
 * @params      { Integer  }      pageSize                      页面大小，5~500
 * @params      { Integer  }      salesManAccountId             业务员accountId
 */
BkCobrandedcardManager.getInterviewLoginlistV1({
    params: {
        pageIndex: '',
        pageSize: '',
        salesManAccountId: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "deviceKey": "(string) 登录设备",
            "ipAddress": "(string) 登录ip地址",
            "loginTime": "(string) 登录时间",
            "salesManId": "(string) 业务员id",
            "status": "(integer) 登录状态"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 后台管理系统登出    /v1/interview/loginout
 *
 */
BkCobrandedcardManager.getInterviewLoginoutV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "message": "(string) undefined",
    "resultCode": "(integer) undefined"
}
*/



/**
 * 查询开放城市（市、区）列表    /v1/interview/opencities
 *
 */
BkCobrandedcardManager.getInterviewOpencitiesV1({
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
                "areas": [
                    {
                        "areaCode": "(string) 区code",
                        "areaName": "(string) 区名称",
                        "totalCount": "(integer) 待处理订单数量"
                    }
                ],
                "cityCode": "(string) 市code",
                "cityName": "(string) 市名称",
                "totalCount": "(integer) 待处理订单数量"
            }
        ],
        "provinceCode": "(string) 省code",
        "provinceName": "(string) 省名称"
    }
]
*/



/**
 * 提交保存客户真实信息    /v1/interview/realinfo
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewRealinfoV1({
    data: {
        param: '',
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
 * 获取拒绝原因选择项列表    /v1/interview/rejectreasons
 *
 */
BkCobrandedcardManager.getInterviewRejectreasonsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "reasonDesc": "(string) 审核失败原因描述",
        "reasonId": "(integer) 审核失败原因Id"
    }
]
*/



/**
 * 删除指定的面签人员    /v1/interview/salesman/{salesManAccountId}
 *
 * @params      { Integer  }      salesManAccountId             删除的面签人员ID
 */
BkCobrandedcardManager.deleteInterviewSalesmanSalesManAccountIdV1({
    params: {
        salesManAccountId: '0',
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
 * 查询面签人员列表    /v1/interview/salesmanlist
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewSalesmanlistV1({
    data: {
        param: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "areas": [
                {
                    "areaCode": "(string) 区code",
                    "areaName": "(string) 区名称",
                    "cityCode": "(string) 市code",
                    "cityName": "(string) 市名称",
                    "provinceCode": "(string) 省code",
                    "provinceName": "(string) 省名称"
                }
            ],
            "city": "(string) 所属城市",
            "deviceKey": "(string) 业务员登录设备key",
            "mobile": "(string) 面签业务员电话",
            "name": "(string) 面签业务员姓名",
            "salesManAccountId": "(integer) 面签人员账户Id",
            "salesManAccountIdMask": "(string) 面签人员账户Id",
            "shortFormLimit": "(integer) 短表单派单上限",
            "status": "(integer) 状态(0:正常 1:删除 2：休息)",
            "statusDesc": "(string) 状态描述"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 获取列表查询panel    /v1/interview/searchoptions
 *
 */
BkCobrandedcardManager.getInterviewSearchoptionsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "applyChannels": [
        {
            "key": {},
            "value": {}
        }
    ],
    "interviewStatus": [
        {
            "key": {},
            "value": {}
        }
    ],
    "interviewTypes": [
        {
            "key": {},
            "value": {}
        }
    ],
    "openCities": [
        {
            "cities": [
                {
                    "areas": [
                        {
                            "areaCode": "(string) 区code",
                            "areaName": "(string) 区名称",
                            "totalCount": "(integer) 待处理订单数量"
                        }
                    ],
                    "cityCode": "(string) 市code",
                    "cityName": "(string) 市名称",
                    "totalCount": "(integer) 待处理订单数量"
                }
            ],
            "provinceCode": "(string) 省code",
            "provinceName": "(string) 省名称"
        }
    ],
    "regions": [
        {
            "key": {},
            "value": {}
        }
    ],
    "salesManList": [
        {
            "key": {},
            "value": {}
        }
    ],
    "salesManStatus": [
        {
            "key": {},
            "value": {}
        }
    ]
}
*/



/**
 * 提交面签资料至审核    /v1/interview/toaudit
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewToauditV1({
    data: {
        param: '',
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
 * 获取登录用户信息    /v1/interview/userinfo
 *
 */
BkCobrandedcardManager.getInterviewUserinfoV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "account": "(string) undefined",
    "create_time": "(string) undefined",
    "departmentName": "(string) undefined",
    "department_id": "(string) undefined",
    "email": "(string) undefined",
    "last_modify_time": "(string) undefined",
    "mobile": "(string) undefined",
    "name": "(string) undefined",
    "new_department_chain": "(string) undefined",
    "old_department_chain": "(string) undefined",
    "regional_authority": "(string) undefined",
    "status": "(integer) undefined",
    "superior": "(string) undefined",
    "user_id": "(string) undefined",
    "work_no": "(string) undefined"
}
*/



/**
 * 查询短表单列表列表    /v1/manager/shortform/
 *
 * @params      { String   }      queryValue                    查询值，手机号或姓名/userid
 * @params      { Integer  }      queryType                     申请人查询类型 1手机号或姓名 2userid
 * @params      { String   }      salesManNameOrMobile          查询条件 业务员姓名或手机号码或业务员id
 * @params      { String   }      provinceCode                  申请人工作所在省份
 * @params      { String   }      cityCode                      申请人工作所在市
 * @params      { String   }      areaCode                      申请人工作所在区
 * @params      { String   }      countTimeFrom                 起算时间from
 * @params      { String   }      countTimeTo                   起算时间to
 * @params      { Integer  }      applyStatus                   申请状态
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getManagerShortformV1({
    params: {
        queryValue: '',
        queryType: '',
        salesManNameOrMobile: '',
        provinceCode: '',
        cityCode: '',
        areaCode: '',
        countTimeFrom: '',
        countTimeTo: '',
        applyStatus: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "applyId": "(integer) 申请Id",
            "applyIdStr": "(string) 申请Id",
            "applyStatus": "(integer) 申请状态 0：未申请 1： 已申请 2：已激活 3授信成功 4授信失败",
            "applyStatusDesc": "(string) 申请状态描述",
            "applyTime": "(string) 申请时间",
            "areaCode": "(string) 区code",
            "cityCode": "(string) 市code",
            "cnRealName": "(string) 用户名",
            "companyAddress": "(string) 公司地址",
            "companyCity": "(string) 工作城市",
            "companyName": "(string) 公司名称",
            "confirmDays": "(integer) 距离确认回填已过天数",
            "countTime": "(string) 申请时间",
            "dealStatus": "(integer) 处理状态 0.待处理,1.联系不上,2,待联系,3.确认回填,4.已拒绝",
            "dealStatusDesc": "(string) 处理状态 待处理,联系不上,待联系,确认回填,已拒绝",
            "mobile": "(string) 手机号码",
            "node": "(string) 截止填写页面节点",
            "note": "(string) 备注信息",
            "provinceCode": "(string) 省code",
            "residentialAddress": "(string) 家庭住址",
            "respectfulName": "(string) 用户名(尊称)",
            "salesMan": "(string) 业务员",
            "salesManMobile": "(string) 业务员手机号码",
            "shortFormId": "(integer) 短表单ID",
            "shortFormIdStr": "(string) 短表单ID",
            "userId": "(integer) 用户ID"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 获取短表单相关的列表项    /v1/manager/shortform/option
 *
 */
BkCobrandedcardManager.getManagerShortformOptionV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "applyStatusList": [
        {
            "key": {},
            "value": {}
        }
    ]
}
*/



/**
 * 短表单业务员指派    /v1/manager/shortform/salesman
 *
 * @params      { Object   }      param                         短表单业务员指派参数
 */
BkCobrandedcardManager.postManagerShortformSalesmanV1({
    data: {
        param: '',
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
 * 查询订单列表    /v1/order/
 *
 * @params      { Integer  }      queryParamType                用户条件参数类型。0订单ID 1用户ID；2注册手机号；3申卡手机号；4用户姓名；5用户身份证号; 6进件条码
 * @params      { String   }      queryParamValue               用户条件参数值
 * @params      { Integer  }      bankId                        银行ID。0或null，则表示不限制
 */
BkCobrandedcardManager.getOrderV1({
    params: {
        queryParamType: '',
        queryParamValue: '',
        bankId: '',
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
        "applyId": "(integer) 订单ID",
        "applyIdStr": "(string) 用于详情页面传入使用的订单ID",
        "applyMobile": "(string) 申卡手机号",
        "applyStatus": "(integer) 申卡状态",
        "applyStatusDesc": "(string) 申卡状态描述",
        "bankName": "(string) 银行名称",
        "cardTypeId": "(integer) 卡类型Id",
        "cardTypeName": "(string) 卡类型名称",
        "channelName": "(string) 订单来源",
        "confirmTime": "(string) 订单提交时间",
        "createTime": "(string) 创建时间",
        "registerMobile": "(string) 注册手机号",
        "updateTime": "(string) 更新时间",
        "userId": "(integer) 用户ID",
        "userName": "(string) 用户姓名"
    }
]
*/



/**
 * 查看指定订单详情    /v1/order/{applyIdStr}
 *
 * @params      { String   }      applyIdStr                    applyIdStr
 */
BkCobrandedcardManager.getOrderApplyIdStrV1({
    params: {
        applyIdStr: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "applyId": "(integer) 订单ID",
    "applyIdStr": "(string) 用于详情页面传入使用的订单ID",
    "applyMobile": "(string) 申卡手机号",
    "applyStatus": "(integer) 申卡状态",
    "applyStatusDesc": "(string) 申卡状态描述",
    "bankName": "(string) 银行名称",
    "barCode": "(string) 进件条码",
    "cardTypeId": "(integer) 卡类型Id",
    "cardTypeName": "(string) 卡类型名称",
    "channelName": "(string) 订单来源",
    "companyProvinceCity": "(string) 公司省市",
    "confirmTime": "(string) 订单提交时间",
    "coreStreamList": [
        {
            "extendMsg": {},
            "nodeMsg": "(string) 节点信息",
            "nodeTime": "(string) 节点的时间显示",
            "nodeType": "(integer) 节点类型。0普通节点；10补件节点；20快递节点；30面签节点；40解锁激活节点"
        }
    ],
    "createTime": "(string) 创建时间",
    "deliverTo": "(string) 快递方式",
    "eventStreamList": [
        {
            "createTime": "(string) 创建时间",
            "eventId": "(integer) 事件类型",
            "eventMsg": "(string) 事件内容",
            "eventTime": "(string) 事件时间",
            "isShow": "(boolean) 是否向用户显示",
            "updateTime": "(string) 更新时间"
        }
    ],
    "idCardNo": "(string) 身份证号",
    "interviewRecordId": "(integer) 面签记录的ID",
    "location": "(string) 申请时的定位信息",
    "realIp": "(string) 申请时的IP",
    "registerMobile": "(string) 注册手机号",
    "residentialProvinceCity": "(string) 住宅省市",
    "riskAuditResult": "(string) 风险件审核状态",
    "riskReportRecordId": "(integer) 风险件提报ID",
    "riskReportRecordIdStr": "(string) 风险件提报ID",
    "riskReportTime": "(string) 风险件提报时间",
    "riskReporter": "(string) 风险件提报人",
    "riskTypeDesc": "(string) 风险件类型",
    "saleBranchCode": "(string) 销售支行代码",
    "showCreateInterview": "(boolean) 是否显示创建面签记录按钮",
    "showRevokeCancelStatus": "(boolean) 撤销卡片注销状态 当卡片是已注销时，允许取消注销到审核通过状态",
    "showUnlockActive": "(boolean) 是否显示解锁激活按钮",
    "supplementDocumentRecordId": "(integer) 补件记录ID",
    "updateTime": "(string) 更新时间",
    "userId": "(integer) 用户ID",
    "userName": "(string) 用户姓名"
}
*/



/**
 * 创建订单的面签记录    /v1/order/{applyIdStr}/interviewrecord
 *
 * @params      { String   }      applyIdStr                    applyIdStr
 */
BkCobrandedcardManager.putOrderApplyIdStrInterviewrecordV1({
    params: {
        applyIdStr: '',
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
 * 撤销注销    /v1/order/{applyIdStr}/revokecancel
 *
 * @params      { String   }      applyIdStr                    applyIdStr
 */
BkCobrandedcardManager.postOrderApplyIdStrRevokecancelV1({
    params: {
        applyIdStr: '',
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
 * 解锁激活锁定    /v1/order/{applyIdStr}/unlockactive
 *
 * @params      { String   }      applyIdStr                    applyIdStr
 */
BkCobrandedcardManager.postOrderApplyIdStrUnlockactiveV1({
    params: {
        applyIdStr: '',
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
 * 添加权限单元    /v1/permission/manage/unit/add
 *
 * @params      { Object   }      unitParam                     unitParam
 */
BkCobrandedcardManager.postPermissionManageUnitAddV1({
    data: {
        unitParam: '',
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
 * 添加权限单元区域    /v1/permission/manage/unit/addregion
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postPermissionManageUnitAddregionV1({
    data: {
        param: '',
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
 * 添加权限单元用户    /v1/permission/manage/unit/adduser
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postPermissionManageUnitAdduserV1({
    data: {
        param: '',
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
 * 删除权限单元区域    /v1/permission/manage/unit/deleteregion
 *
 * @params      { Integer  }      unitId                        单元id
 * @params      { String   }      regionCode                    区域编码
 */
BkCobrandedcardManager.deletePermissionManageUnitDeleteregionV1({
    params: {
        unitId: '0',
        regionCode: '0',
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
 * 删除权限单元用户    /v1/permission/manage/unit/deleteuser
 *
 * @params      { Integer  }      unitId                        单元id
 * @params      { String   }      targetAccount                 用户Account
 */
BkCobrandedcardManager.deletePermissionManageUnitDeleteuserV1({
    params: {
        unitId: '0',
        targetAccount: '0',
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
 * 获取权限单元列表    /v1/permission/manage/unit/query
 *
 * @params      { Boolean  }      fetchUnitUserInfo             是否获取单元包含的用户信息
 * @params      { Boolean  }      fetchUnitRegionInfo           是否获取单元关联的区域信息
 */
BkCobrandedcardManager.getPermissionManageUnitQueryV1({
    params: {
        fetchUnitUserInfo: 'false',
        fetchUnitRegionInfo: 'false',
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
        "regionList": [
            {
                "regionCode": "(string) 区域编码",
                "regionName": "(string) 区域名称",
                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
            }
        ],
        "unitId": "(integer) 单元id",
        "unitName": "(string) 单元名称",
        "userList": [
            {
                "account": "(string) 登录账户唯一标识",
                "departmentName": "(string) 所属部门",
                "email": "(string) 邮箱",
                "mobile": "(string) 手机号",
                "name": "(string) 登录账户姓名",
                "regionList": [
                    {
                        "regionCode": "(string) 区域编码",
                        "regionName": "(string) 区域名称",
                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                    }
                ],
                "unitList": [
                    {
                        "regionList": [
                            {
                                "regionCode": "(string) 区域编码",
                                "regionName": "(string) 区域名称",
                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                            }
                        ],
                        "unitId": "(integer) 单元id",
                        "unitName": "(string) 单元名称",
                        "userList": [
                            {
                                "account": "(string) 登录账户唯一标识",
                                "departmentName": "(string) 所属部门",
                                "email": "(string) 邮箱",
                                "mobile": "(string) 手机号",
                                "name": "(string) 登录账户姓名",
                                "regionList": [
                                    {
                                        "regionCode": "(string) 区域编码",
                                        "regionName": "(string) 区域名称",
                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                    }
                                ],
                                "unitList": [
                                    {
                                        "regionList": [
                                            {
                                                "regionCode": "(string) 区域编码",
                                                "regionName": "(string) 区域名称",
                                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                            }
                                        ],
                                        "unitId": "(integer) 单元id",
                                        "unitName": "(string) 单元名称",
                                        "userList": [
                                            {
                                                "account": "(string) 登录账户唯一标识",
                                                "departmentName": "(string) 所属部门",
                                                "email": "(string) 邮箱",
                                                "mobile": "(string) 手机号",
                                                "name": "(string) 登录账户姓名",
                                                "regionList": [
                                                    {
                                                        "regionCode": "(string) 区域编码",
                                                        "regionName": "(string) 区域名称",
                                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                    }
                                                ],
                                                "unitList": [
                                                    {
                                                        "regionList": [
                                                            {
                                                                "regionCode": "(string) 区域编码",
                                                                "regionName": "(string) 区域名称",
                                                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                            }
                                                        ],
                                                        "unitId": "(integer) 单元id",
                                                        "unitName": "(string) 单元名称",
                                                        "userList": [
                                                            {
                                                                "account": "(string) 登录账户唯一标识",
                                                                "departmentName": "(string) 所属部门",
                                                                "email": "(string) 邮箱",
                                                                "mobile": "(string) 手机号",
                                                                "name": "(string) 登录账户姓名",
                                                                "regionList": [
                                                                    {
                                                                        "regionCode": "(string) 区域编码",
                                                                        "regionName": "(string) 区域名称",
                                                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                                    }
                                                                ],
                                                                "unitList": [
                                                                    {
                                                                        "regionList": [
                                                                            {
                                                                                "regionCode": "(string) 区域编码",
                                                                                "regionName": "(string) 区域名称",
                                                                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                                            }
                                                                        ],
                                                                        "unitId": "(integer) 单元id",
                                                                        "unitName": "(string) 单元名称",
                                                                        "userList": [
                                                                            {
                                                                                "account": "(string) 登录账户唯一标识",
                                                                                "departmentName": "(string) 所属部门",
                                                                                "email": "(string) 邮箱",
                                                                                "mobile": "(string) 手机号",
                                                                                "name": "(string) 登录账户姓名",
                                                                                "regionList": [
                                                                                    {
                                                                                        "regionCode": "(string) 区域编码",
                                                                                        "regionName": "(string) 区域名称",
                                                                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                                                    }
                                                                                ],
                                                                                "unitList": [
                                                                                    {
                                                                                        "regionList": "#/definitions/区域信息",
                                                                                        "unitId": "(integer) 单元id",
                                                                                        "unitName": "(string) 单元名称",
                                                                                        "userList": [
                                                                                            {
                                                                                                "account": "(string) 登录账户唯一标识",
                                                                                                "departmentName": "(string) 所属部门",
                                                                                                "email": "(string) 邮箱",
                                                                                                "mobile": "(string) 手机号",
                                                                                                "name": "(string) 登录账户姓名",
                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                "unitList": [
                                                                                                    {
                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                        "unitId": "(integer) 单元id",
                                                                                                        "unitName": "(string) 单元名称",
                                                                                                        "userList": [
                                                                                                            {
                                                                                                                "account": "(string) 登录账户唯一标识",
                                                                                                                "departmentName": "(string) 所属部门",
                                                                                                                "email": "(string) 邮箱",
                                                                                                                "mobile": "(string) 手机号",
                                                                                                                "name": "(string) 登录账户姓名",
                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                "unitList": [
                                                                                                                    {
                                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                                        "unitId": "(integer) 单元id",
                                                                                                                        "unitName": "(string) 单元名称",
                                                                                                                        "userList": [
                                                                                                                            {
                                                                                                                                "account": "(string) 登录账户唯一标识",
                                                                                                                                "departmentName": "(string) 所属部门",
                                                                                                                                "email": "(string) 邮箱",
                                                                                                                                "mobile": "(string) 手机号",
                                                                                                                                "name": "(string) 登录账户姓名",
                                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                                "unitList": [
                                                                                                                                    {
                                                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                                                        "unitId": "(integer) 单元id",
                                                                                                                                        "unitName": "(string) 单元名称",
                                                                                                                                        "userList": [
                                                                                                                                            {
                                                                                                                                                "account": "(string) 登录账户唯一标识",
                                                                                                                                                "departmentName": "(string) 所属部门",
                                                                                                                                                "email": "(string) 邮箱",
                                                                                                                                                "mobile": "(string) 手机号",
                                                                                                                                                "name": "(string) 登录账户姓名",
                                                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                                                "unitList": [
                                                                                                                                                    {
                                                                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                                                                        "unitId": "(integer) 单元id",
                                                                                                                                                        "unitName": "(string) 单元名称",
                                                                                                                                                        "userList": [
                                                                                                                                                            {
                                                                                                                                                                "account": "(string) 登录账户唯一标识",
                                                                                                                                                                "departmentName": "(string) 所属部门",
                                                                                                                                                                "email": "(string) 邮箱",
                                                                                                                                                                "mobile": "(string) 手机号",
                                                                                                                                                                "name": "(string) 登录账户姓名",
                                                                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                                                                "unitList": "#/definitions/权限单元",
                                                                                                                                                                "work_no": "(string) 工号"
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "work_no": "(string) 工号"
                                                                                                                                            }
                                                                                                                                        ]
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "work_no": "(string) 工号"
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    }
                                                                                                                ],
                                                                                                                "work_no": "(string) 工号"
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ],
                                                                                                "work_no": "(string) 工号"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ],
                                                                                "work_no": "(string) 工号"
                                                                            }
                                                                        ]
                                                                    }
                                                                ],
                                                                "work_no": "(string) 工号"
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "work_no": "(string) 工号"
                                            }
                                        ]
                                    }
                                ],
                                "work_no": "(string) 工号"
                            }
                        ]
                    }
                ],
                "work_no": "(string) 工号"
            }
        ]
    }
]
*/



/**
 * 添加用户直接关联的区域    /v1/permission/manage/user/addregion
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postPermissionManageUserAddregionV1({
    data: {
        param: '',
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
 * 删除用户直接关联的区域    /v1/permission/manage/user/deleteregion
 *
 * @params      { String   }      targetAccount                 账户
 * @params      { String   }      regionCode                    区域编码
 */
BkCobrandedcardManager.deletePermissionManageUserDeleteregionV1({
    params: {
        targetAccount: '0',
        regionCode: '0',
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
 * 获取用户列表    /v1/permission/manage/user/query
 *
 * @params      { Boolean  }      fetchUserUnitInfo             是否获取用户关联的单元信息
 * @params      { Boolean  }      fetchUserRegionInfo           是否获取用户直接关联的区域信息
 */
BkCobrandedcardManager.getPermissionManageUserQueryV1({
    params: {
        fetchUserUnitInfo: 'false',
        fetchUserRegionInfo: 'false',
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
        "account": "(string) 登录账户唯一标识",
        "departmentName": "(string) 所属部门",
        "email": "(string) 邮箱",
        "mobile": "(string) 手机号",
        "name": "(string) 登录账户姓名",
        "regionList": [
            {
                "regionCode": "(string) 区域编码",
                "regionName": "(string) 区域名称",
                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
            }
        ],
        "unitList": [
            {
                "regionList": [
                    {
                        "regionCode": "(string) 区域编码",
                        "regionName": "(string) 区域名称",
                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                    }
                ],
                "unitId": "(integer) 单元id",
                "unitName": "(string) 单元名称",
                "userList": [
                    {
                        "account": "(string) 登录账户唯一标识",
                        "departmentName": "(string) 所属部门",
                        "email": "(string) 邮箱",
                        "mobile": "(string) 手机号",
                        "name": "(string) 登录账户姓名",
                        "regionList": [
                            {
                                "regionCode": "(string) 区域编码",
                                "regionName": "(string) 区域名称",
                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                            }
                        ],
                        "unitList": [
                            {
                                "regionList": [
                                    {
                                        "regionCode": "(string) 区域编码",
                                        "regionName": "(string) 区域名称",
                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                    }
                                ],
                                "unitId": "(integer) 单元id",
                                "unitName": "(string) 单元名称",
                                "userList": [
                                    {
                                        "account": "(string) 登录账户唯一标识",
                                        "departmentName": "(string) 所属部门",
                                        "email": "(string) 邮箱",
                                        "mobile": "(string) 手机号",
                                        "name": "(string) 登录账户姓名",
                                        "regionList": [
                                            {
                                                "regionCode": "(string) 区域编码",
                                                "regionName": "(string) 区域名称",
                                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                            }
                                        ],
                                        "unitList": [
                                            {
                                                "regionList": [
                                                    {
                                                        "regionCode": "(string) 区域编码",
                                                        "regionName": "(string) 区域名称",
                                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                    }
                                                ],
                                                "unitId": "(integer) 单元id",
                                                "unitName": "(string) 单元名称",
                                                "userList": [
                                                    {
                                                        "account": "(string) 登录账户唯一标识",
                                                        "departmentName": "(string) 所属部门",
                                                        "email": "(string) 邮箱",
                                                        "mobile": "(string) 手机号",
                                                        "name": "(string) 登录账户姓名",
                                                        "regionList": [
                                                            {
                                                                "regionCode": "(string) 区域编码",
                                                                "regionName": "(string) 区域名称",
                                                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                            }
                                                        ],
                                                        "unitList": [
                                                            {
                                                                "regionList": [
                                                                    {
                                                                        "regionCode": "(string) 区域编码",
                                                                        "regionName": "(string) 区域名称",
                                                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                                    }
                                                                ],
                                                                "unitId": "(integer) 单元id",
                                                                "unitName": "(string) 单元名称",
                                                                "userList": [
                                                                    {
                                                                        "account": "(string) 登录账户唯一标识",
                                                                        "departmentName": "(string) 所属部门",
                                                                        "email": "(string) 邮箱",
                                                                        "mobile": "(string) 手机号",
                                                                        "name": "(string) 登录账户姓名",
                                                                        "regionList": [
                                                                            {
                                                                                "regionCode": "(string) 区域编码",
                                                                                "regionName": "(string) 区域名称",
                                                                                "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                                            }
                                                                        ],
                                                                        "unitList": [
                                                                            {
                                                                                "regionList": [
                                                                                    {
                                                                                        "regionCode": "(string) 区域编码",
                                                                                        "regionName": "(string) 区域名称",
                                                                                        "regionType": "(integer) 区域类型，1：省份，2：城市，3：区"
                                                                                    }
                                                                                ],
                                                                                "unitId": "(integer) 单元id",
                                                                                "unitName": "(string) 单元名称",
                                                                                "userList": [
                                                                                    {
                                                                                        "account": "(string) 登录账户唯一标识",
                                                                                        "departmentName": "(string) 所属部门",
                                                                                        "email": "(string) 邮箱",
                                                                                        "mobile": "(string) 手机号",
                                                                                        "name": "(string) 登录账户姓名",
                                                                                        "regionList": "#/definitions/区域信息",
                                                                                        "unitList": [
                                                                                            {
                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                "unitId": "(integer) 单元id",
                                                                                                "unitName": "(string) 单元名称",
                                                                                                "userList": [
                                                                                                    {
                                                                                                        "account": "(string) 登录账户唯一标识",
                                                                                                        "departmentName": "(string) 所属部门",
                                                                                                        "email": "(string) 邮箱",
                                                                                                        "mobile": "(string) 手机号",
                                                                                                        "name": "(string) 登录账户姓名",
                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                        "unitList": [
                                                                                                            {
                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                "unitId": "(integer) 单元id",
                                                                                                                "unitName": "(string) 单元名称",
                                                                                                                "userList": [
                                                                                                                    {
                                                                                                                        "account": "(string) 登录账户唯一标识",
                                                                                                                        "departmentName": "(string) 所属部门",
                                                                                                                        "email": "(string) 邮箱",
                                                                                                                        "mobile": "(string) 手机号",
                                                                                                                        "name": "(string) 登录账户姓名",
                                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                                        "unitList": [
                                                                                                                            {
                                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                                "unitId": "(integer) 单元id",
                                                                                                                                "unitName": "(string) 单元名称",
                                                                                                                                "userList": [
                                                                                                                                    {
                                                                                                                                        "account": "(string) 登录账户唯一标识",
                                                                                                                                        "departmentName": "(string) 所属部门",
                                                                                                                                        "email": "(string) 邮箱",
                                                                                                                                        "mobile": "(string) 手机号",
                                                                                                                                        "name": "(string) 登录账户姓名",
                                                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                                                        "unitList": [
                                                                                                                                            {
                                                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                                                "unitId": "(integer) 单元id",
                                                                                                                                                "unitName": "(string) 单元名称",
                                                                                                                                                "userList": [
                                                                                                                                                    {
                                                                                                                                                        "account": "(string) 登录账户唯一标识",
                                                                                                                                                        "departmentName": "(string) 所属部门",
                                                                                                                                                        "email": "(string) 邮箱",
                                                                                                                                                        "mobile": "(string) 手机号",
                                                                                                                                                        "name": "(string) 登录账户姓名",
                                                                                                                                                        "regionList": "#/definitions/区域信息",
                                                                                                                                                        "unitList": [
                                                                                                                                                            {
                                                                                                                                                                "regionList": "#/definitions/区域信息",
                                                                                                                                                                "unitId": "(integer) 单元id",
                                                                                                                                                                "unitName": "(string) 单元名称",
                                                                                                                                                                "userList": "#/definitions/iam 用户信息"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "work_no": "(string) 工号"
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "work_no": "(string) 工号"
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "work_no": "(string) 工号"
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ],
                                                                                                        "work_no": "(string) 工号"
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ],
                                                                                        "work_no": "(string) 工号"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ],
                                                                        "work_no": "(string) 工号"
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "work_no": "(string) 工号"
                                                    }
                                                ]
                                            }
                                        ],
                                        "work_no": "(string) 工号"
                                    }
                                ]
                            }
                        ],
                        "work_no": "(string) 工号"
                    }
                ]
            }
        ],
        "work_no": "(string) 工号"
    }
]
*/



/**
 * 查询风险件列表    /v1/risk/
 *
 * @params      { String   }      queryValue                    用户查询值
 * @params      { Integer  }      queryType                     查询类型 1手机号/姓名  2userid
 * @params      { Integer  }      reportStatus                  订单提报状态 2待审核 3已审核  若为全部则不传
 * @params      { Integer  }      riskProperty                  风险性质 1个人风险 2团体风险  若为全部则不传
 * @params      { String   }      salesManId                    客户经理Id
 * @params      { Integer  }      regionId                      面签人员所属大区
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getRiskV1({
    params: {
        queryValue: '',
        queryType: '',
        reportStatus: '',
        riskProperty: '',
        salesManId: '',
        regionId: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "auditTime": "(string) 审核时间",
            "reportStatus": "(integer) 提报状态 1待提报 2待审核 3已审核",
            "reportStatusDesc": "(string) 提报状态 1待提报 2待审核 3已审核",
            "reportTime": "(string) 提报时间",
            "riskId": "(integer) 风险件id",
            "riskIdMask": "(string) 风险件id",
            "riskProperty": "(integer) 风险性质 1个人风险 2团体风险",
            "riskPropertyDesc": "(string) 风险性质 1个人风险 2团体风险",
            "riskUserList": [
                {
                    "applyId": "(integer) 申卡记录id",
                    "applyIdMask": "(string) 申卡记录id",
                    "applyStatusDesc": "(string) 用户状态",
                    "applyTypeDesc": "(string) 订单类型",
                    "auditResult": "(integer) 风险判定结果 1不予面签 2银行止付 3无风险",
                    "auditResultDesc": "(string) 风险判定结果描述 1不予面签 2银行止付 3无风险",
                    "companyAddress": "(string) 工作单位地址",
                    "companyName": "(string) 工作单位",
                    "detailInfo": [
                        {
                            "applyIdMask": "(string) applyId mask",
                            "detailType": "(integer) 详情类型 1面签详情 2补件详情",
                            "detailTypeDesc": "(string) 详情类型描述 1面签详情 2补件详情",
                            "paramId": "(integer) 查看详情所需的参数"
                        }
                    ],
                    "idCardNo": "(string) 用户身份证号",
                    "userId": "(integer) 用户id",
                    "userMobile": "(string) 用户手机号",
                    "userName": "(string) 用户姓名"
                }
            ],
            "saleManMobile": "(string) 业务员手机号",
            "saleManName": "(string) 业务员姓名",
            "saleManRegion": "(string) 业务员区域"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 提交风险件审核结果    /v1/risk/auditresult
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postRiskAuditresultV1({
    data: {
        param: '',
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
 * 风险件详情查询    /v1/risk/detail
 *
 * @params      { Integer  }      riskId                        风险件id
 */
BkCobrandedcardManager.getRiskDetailV1({
    params: {
        riskId: '0',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "auditComment": "(string) 审核意见",
    "auditMan": "(string) 审核人员",
    "auditStatus": "(integer) 订单状态 2待审核 3已审核",
    "auditStatusDesc": "(string) 订单状态描述 2待审核 3已审核",
    "auditTime": "(string) 审核时间",
    "reportNote": "(string) 业务员提报说明",
    "reportTime": "(string) 提报时间",
    "riskId": "(integer) 风险件id",
    "riskImageList": [
        {
            "fileId": "(integer) 文件Id",
            "fileType": "(integer) 文件类型 1风险证明  10其它",
            "fileTypeDesc": "(string) 文件类型文件类型 1风险证明  10其它",
            "imageBase64": "(string) 图片内容（base64编码）,已压缩",
            "mediaType": "(string) 图片类型"
        }
    ],
    "riskProperty": "(integer) 风险性质 1个人风险 2团体风险",
    "riskPropertyDesc": "(string) 风险性质 1个人风险 2团体风险",
    "riskType": "(integer) 风险类型 1涉及中介代办、挂靠 2申请信息虚假或不一致 3无工作证明或离职 4贷款投资类公司 5禁止客群、行业 6无办公场所 10其它",
    "riskTypeDesc": "(string) 风险类型 1涉及中介代办、挂靠 2申请信息虚假或不一致 3无工作证明或离职 4贷款投资类公司 5禁止客群、行业 6无办公场所 10其它",
    "riskUserList": [
        {
            "applyId": "(integer) 申卡记录id",
            "applyIdMask": "(string) 申卡记录id",
            "applyStatusDesc": "(string) 用户状态",
            "applyTypeDesc": "(string) 订单类型",
            "auditResult": "(integer) 风险判定结果 1不予面签 2银行止付 3无风险",
            "auditResultDesc": "(string) 风险判定结果描述 1不予面签 2银行止付 3无风险",
            "companyAddress": "(string) 工作单位地址",
            "companyName": "(string) 工作单位",
            "detailInfo": [
                {
                    "applyIdMask": "(string) applyId mask",
                    "detailType": "(integer) 详情类型 1面签详情 2补件详情",
                    "detailTypeDesc": "(string) 详情类型描述 1面签详情 2补件详情",
                    "paramId": "(integer) 查看详情所需的参数"
                }
            ],
            "idCardNo": "(string) 用户身份证号",
            "userId": "(integer) 用户id",
            "userMobile": "(string) 用户手机号",
            "userName": "(string) 用户姓名"
        }
    ],
    "visitedDepartment": "(integer) 是否亲访单位 1是 2否"
}
*/



/**
 * 获取风险件审核相关的列表项    /v1/risk/option
 *
 */
BkCobrandedcardManager.getRiskOptionV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "reportStatus": [
        {
            "key": {},
            "value": {}
        }
    ],
    "riskAuditResult": [
        {
            "key": {},
            "value": {}
        }
    ],
    "riskProperty": [
        {
            "key": {},
            "value": {}
        }
    ],
    "riskType": [
        {
            "key": {},
            "value": {}
        }
    ]
}
*/



/**
 * 提交保存用户敏感字字库    /v1/sensitivewords/add
 *
 * @params      { String   }      token                         任务授权访问码
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postSensitivewordsAddV1({
    params: {
        token: '',
    },
    data: {
        param: '',
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
 * 批量提交保存用户敏感字字库    /v1/sensitivewords/batchadd
 *
 * @params      { String   }      token                         任务授权访问码
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postSensitivewordsBatchaddV1({
    params: {
        token: '',
    },
    data: {
        param: '',
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
 * 账户额度日志查询    /v1/status/cardcredit
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      mobile                        用户手机号
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getStatusCardcreditV1({
    params: {
        userId: '',
        mobile: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "accountRemainAmt": "(number) 账面余额",
            "availableCashLimit": "(number) 取现可用额度",
            "cardCreditLogCreateTime": "(string) 创建时间",
            "cashLimit": "(number) 取现额度",
            "creditLimit": "(number) 信用额度",
            "currentAvailableCredit": "(number) 可用额度"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 分期额度日志查询    /v1/status/cardplancredit
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      mobile                        用户手机号
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getStatusCardplancreditV1({
    params: {
        userId: '',
        mobile: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "availableCashPlanLimit": "(number) 现金分期可用额度",
            "cardPlanCreditLogCreateTime": "(string) 创建时间",
            "cashPlanLimit": "(number) 现金分期额度"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 卡片状态日志查询    /v1/status/cardstatus
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      mobile                        用户手机号
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getStatusCardstatusV1({
    params: {
        userId: '',
        mobile: '',
        pageIndex: '',
        pageSize: '',
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
        "cardStatusDesc": "(string) 卡片状态描述",
        "cardStatusLogCreateTime": "(string) 创建时间",
        "consumeStatusDesc": "(string) 卡片消费功能描述",
        "remitStatusDesc": "(string) 卡片转账功能描述",
        "withdrawStatusDesc": "(string) 卡片取现功能描述"
    }
]
*/



/**
 * 查询补件列表    /v1/supplement/
 *
 * @params      { Integer  }      searchType                    关键字检索类型 1:手机号码或者姓名 2:userId
 * @params      { String   }      searchValue                   查询条件 持卡人姓名或手机号码或者用户userId
 * @params      { String   }      belongCityList                所属城市列表 belongCityList,格式为 &#x27;city1,city2,city3,...&#x27; 
 * @params      { String   }      provinceCode                  省code
 * @params      { String   }      cityCode                      市code
 * @params      { String   }      areaCode                      区code
 * @params      { String   }      salesManId                    客户经理id
 * @params      { Integer  }      regionId                      面签人员所属大区
 * @params      { Integer  }      supplementStatus              订单状态1:待上传 2:待审核 3:审核通过 4:审核失败 若全部则不传
 * @params      { Integer  }      pageIndex                     当前页码，从1开始
 * @params      { Integer  }      pageSize                      页面大小，5~500
 */
BkCobrandedcardManager.getSupplementV1({
    params: {
        searchType: '',
        searchValue: '',
        belongCityList: '',
        provinceCode: '',
        cityCode: '',
        areaCode: '',
        salesManId: '',
        regionId: '',
        supplementStatus: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "address": "(string) 公司所在省市区",
            "applyId": "(integer) 申请Id",
            "applyIdMask": "(string) 申请Id Mask",
            "applyTime": "(string) 卡申请时间",
            "cityCode": "(string) 客户工作所在的市code",
            "interviewMan": "(string) 业务员姓名",
            "interviewManMobile": "(string) 业务员电话",
            "interviewManRegion": "(string) 业务员区域",
            "mobile": "(string) 联系方式（持卡人手机号码）",
            "realName": "(string) 申请人（持卡人姓名）",
            "riskId": "(string) 风险件Id",
            "riskLabel": "(string) 当前订单的风险状态对应显示的标签（风险待审核、风险件银行止付、风险件不予面签、申卡黑名单...）",
            "riskStatus": "(integer) 最新入（真实信息）库客户公司地址",
            "supplementStatus": "(integer) 补件状态（1:待上传 2:待审核 3:审核通过 4:审核失败）",
            "supplementStatusDesc": "(string) 补件状态描述（1:待上传 2:待审核 3:审核通过 4:审核失败）",
            "updateTime": "(string) 更新时间",
            "userId": "(integer) undefined"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 提交补件审核结果    /v1/supplement/audit
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postSupplementAuditV1({
    data: {
        param: '',
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
 * 获取补件相关的列表项    /v1/supplement/option
 *
 */
BkCobrandedcardManager.getSupplementOptionV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "supplementFileType": [
        {
            "key": {},
            "value": {}
        }
    ],
    "supplementStatus": [
        {
            "key": {},
            "value": {}
        }
    ]
}
*/



/**
 * 提交补件资料至审核    /v1/supplement/toaudit
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postSupplementToauditV1({
    data: {
        param: '',
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
 * 获取开关列表    /v1/switch/
 *
 */
BkCobrandedcardManager.getSwitchV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "autoId": "(integer) 开关配置值",
        "bankId": "(integer) 银行ID",
        "bankName": "(string) 银行名称",
        "switchIsOpen": "(boolean) 开关值是否是打开状态",
        "switchName": "(string) 开关名称"
    }
]
*/



/**
 * 修改指定项开关    /v1/switch/value
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postSwitchValueV1({
    data: {
        param: '',
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
 * 转账订单日志查询    /v1/transferorder/
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      mobile                        用户手机号
 * @params      { String   }      startTime                     开始时间
 * @params      { String   }      endTime                       结束时间
 * @params      { Integer  }      pageIndex                     当前页索引号。从1开始计数
 * @params      { Integer  }      pageSize                      页面页码
 */
BkCobrandedcardManager.getTransferorderV1({
    params: {
        userId: '',
        mobile: '',
        startTime: '',
        endTime: '',
        pageIndex: '',
        pageSize: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "currentPage": "(integer) 当前页码，从1开始",
    "data": [
        {
            "bankAcceptTime": "(string) 银行受理时间",
            "payAcctNo": "(string) 付款账号",
            "rcvAcctNo": "(string) 收款账号",
            "rcvBankName": "(string) 收款银行名称",
            "termsPlan": "(integer) 分期期数",
            "transAmount": "(number) 转账金额",
            "transApplyTime": "(string) 申请转账时间",
            "transFailedReason": "(string) 交易失败原因",
            "transFinishTime": "(string) 交易完成时间",
            "transNo": "(string) 流水号",
            "transStatus": "(string) 转账状态",
            "updateTime": "(string) 更新时间"
        }
    ],
    "pageSize": "(integer) 页面容量",
    "totalPages": "(integer) 总页数",
    "totalRecord": "(integer) 总记录数"
}
*/



/**
 * 面签资料审核    /v2/interview/audit
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postInterviewAuditV2({
    data: {
        param: '',
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
 * 查询审核记录列表    /v2/interview/audithistory
 *
 * @params      { String   }      applyIdMask                   applyId mask
 * @params      { Integer  }      recordType                    记录类型（0:面签订单 1:深挖订单 2：补件订单）
 */
BkCobrandedcardManager.getInterviewAudithistoryV2({
    params: {
        applyIdMask: '',
        recordType: '',
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
        "auditNote": "(string) 审核备注",
        "auditResult": "(string) 审核结果描述",
        "auditSuggestion": "(string) 审核意见",
        "auditTime": "(string) 审核时间",
        "operator": "(string) 操作人",
        "rejectReason": "(string) 拒绝理由"
    }
]
*/



/**
 * 面签批量改派    /v2/interview/batchassign
 *
 * @params      { Object   }      param                         面签批量改派参数
 */
BkCobrandedcardManager.postInterviewBatchassignV2({
    data: {
        param: '',
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
 * 面签详情查询    /v2/interview/detail/{applyId}
 *
 * @params      { String   }      applyId                       卡申请ID
 */
BkCobrandedcardManager.getInterviewDetailApplyIdV2({
    params: {
        applyId: '0',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "address": "(string) 地址",
    "applyId": "(integer) 申请Id",
    "applyIdMask": "(string) 申请Id mask",
    "applyNode": "(integer) 申请节点（0：待上传 1：待审 2：审核通过 3：审核不通过 4：异常订单 5:已激活）",
    "applyTime": "(string) 申请时间",
    "areaName": "(string) 所属区",
    "auditMan": "(string) 审核员姓名",
    "auditTime": "(string) 审核时间",
    "barCode": "(string) 进件条码",
    "channel": "(string) 渠道（管家、人品、给你花、外部投放...）",
    "cityCode": "(string) 市code",
    "cityName": "(string) 所属市",
    "companyName": "(string) 公司名称",
    "companyPhone": "(string) 单位电话",
    "creditLimitLevel": "(string) 客户额度 档位",
    "department": "(string) 部门",
    "detailNote": "(string) 客户经理备注（风险提示备注）",
    "faceVerifySimiliarity": "(string) 人脸相似度",
    "idCardNo": "(string) 身份证号",
    "imageList": [
        {
            "applyId": "(integer) 申卡Id",
            "applyIdMask": "(string) 申卡Id mask",
            "fileId": "(integer) 文件Id",
            "fileIdMask": "(string) 文件Id mask",
            "fileType": "(integer) 文件类型（1:身份证正面、2:身份证反面、3:合影照、4：业务确认书、5公司门头照、6客户签字照、 7其它、10工作/财力证明 12补件资料）",
            "fileTypeDesc": "(string) 文件类型字符（1:身份证正面、2:身份证反面、3:合影照、4：业务确认书、5公司门头照、6客户签字照、 7其它、10工作/财力证明 12补件资料）",
            "imageUrl": "(string) 图片下载地址"
        }
    ],
    "interviewMan": "(string) 面签员姓名",
    "interviewManMobile": "(string) 面签员电话",
    "interviewStatus": "(integer) 面签状态（0初始状态 2快递问题订单 5无需处理订单 10待面签 20待审核 25风险用户不予面签 30审核通过 40审核不通过 50用户柜面面签通过）",
    "interviewStatusDesc": "(string) 面签状态描述",
    "key": "(integer) key(列表item排序用)",
    "lastSavedRealAddress": "(string) 最新入（真实信息）库客户公司地址",
    "mobile": "(string) 联系方式（持卡人手机号码）",
    "note": "(string) 客户经理备注（深挖备注）",
    "position": "(string) 职位",
    "provinceName": "(string) 所属省",
    "realAddressEditable": "(boolean) 客户经理补全地址是否可编辑",
    "realCompanyAddress": "(string) 客户经理补全 详细地址(编辑用)",
    "realCompanyAddressDisplay": "(string) 客户经理补全 详细地址(显示用)",
    "realCompanyArea": "(string) 客户经理补全 区代码(编辑用)",
    "realCompanyCity": "(string) 客户经理补全 市代码(编辑用)",
    "realCompanyProvince": "(string) 客户经理补全 省代码(编辑用)",
    "realName": "(string) 申请人（持卡人姓名）",
    "reasonDesc": "(string) 拒绝原因",
    "recordType": "(integer) 面签记录类别（0：面签记录 1：深挖用户 2补件订单 3深挖补件订单）",
    "recordTypeDesc": "(string) 面签记录类别",
    "reserveTime": "(string) 面签预约时间",
    "riskId": "(string) 风险件Id",
    "riskLabel": "(string) 当前订单的风险状态对应显示的标签（风险待审核、风险件银行止付、风险件不予面签、申卡黑名单...）",
    "riskLevel": "(string) 风险程度",
    "riskStatus": "(integer) 当前订单的风险状态（1：风险件 2：黑名单）",
    "riskTips": [
        {
            "confirmTel": "(string) 客户经理补全电话",
            "editable": "(boolean) 是否支持编辑",
            "extraInfo": [
                {
                    "extraDesc": "(string) 补充信息值",
                    "extraType": "(integer) 补充信息类型",
                    "extraTypeDesc": "(string) 补充信息类型描述",
                    "riskTipName": "(string) 风险单位名称",
                    "riskTipType": "(integer) 风险提示类型 1确认单位信息 2确认单位电话"
                }
            ],
            "riskTipName": "(string) 风险单位名称",
            "riskTipType": "(integer) 风险提示类型 0风控电话核实 1确认单位信息 2确认单位电话",
            "riskTips": [],
            "telResult": "(integer) 客户经理补全手机是否是固话(10提报单位电话手机号 11提报单位电话固话)"
        }
    ],
    "updateTime": "(string) 更新时间",
    "uploadTime": "(string) 上传时间",
    "userId": "(integer) undefined"
}
*/



/**
 * 查询跟进记录    /v2/interview/followlist/{applyId}
 *
 * @params      { String   }      applyId                       卡申请ID
 */
BkCobrandedcardManager.getInterviewFollowlistApplyIdV2({
    params: {
        applyId: '0',
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
        "followTime": "(string) 跟进记录时间",
        "note": "(string) 备注",
        "situationCode": "(integer) 跟进记录标签code",
        "situationDesc": "(string) 跟进记录标签描述"
    }
]
*/



/**
 * 获取指定的图片    /v2/interview/image
 *
 * @params      { String   }      applyId                       卡申请ID
 * @params      { String   }      fileId                        文件ID
 */
BkCobrandedcardManager.getInterviewImageV2({
    params: {
        applyId: '0',
        fileId: '0',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "description": "(string) undefined",
    "file": "(file) undefined",
    "filename": "(string) undefined",
    "inputStream": {},
    "open": "(boolean) undefined",
    "readable": "(boolean) undefined",
    "uri": {
        "absolute": "(boolean) undefined",
        "authority": "(string) undefined",
        "fragment": "(string) undefined",
        "host": "(string) undefined",
        "opaque": "(boolean) undefined",
        "path": "(string) undefined",
        "port": "(integer) undefined",
        "query": "(string) undefined",
        "rawAuthority": "(string) undefined",
        "rawFragment": "(string) undefined",
        "rawPath": "(string) undefined",
        "rawQuery": "(string) undefined",
        "rawSchemeSpecificPart": "(string) undefined",
        "rawUserInfo": "(string) undefined",
        "scheme": "(string) undefined",
        "schemeSpecificPart": "(string) undefined",
        "userInfo": "(string) undefined"
    },
    "url": {
        "authority": "(string) undefined",
        "content": {},
        "defaultPort": "(integer) undefined",
        "file": "(string) undefined",
        "host": "(string) undefined",
        "path": "(string) undefined",
        "port": "(integer) undefined",
        "protocol": "(string) undefined",
        "query": "(string) undefined",
        "ref": "(string) undefined",
        "userInfo": "(string) undefined"
    }
}
*/



/**
 * 面签审核拒绝原因列表    /v2/interview/rejectreasons/
 *
 */
BkCobrandedcardManager.getInterviewRejectreasonsV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [
                                                            {
                                                                "children": [
                                                                    {
                                                                        "children": [
                                                                            {
                                                                                "children": "#/definitions/RejectReasonBean",
                                                                                "id": "(integer) 拒绝原因Id",
                                                                                "key": "(string) 拒绝原因key"
                                                                            }
                                                                        ],
                                                                        "id": "(integer) 拒绝原因Id",
                                                                        "key": "(string) 拒绝原因key"
                                                                    }
                                                                ],
                                                                "id": "(integer) 拒绝原因Id",
                                                                "key": "(string) 拒绝原因key"
                                                            }
                                                        ],
                                                        "id": "(integer) 拒绝原因Id",
                                                        "key": "(string) 拒绝原因key"
                                                    }
                                                ],
                                                "id": "(integer) 拒绝原因Id",
                                                "key": "(string) 拒绝原因key"
                                            }
                                        ],
                                        "id": "(integer) 拒绝原因Id",
                                        "key": "(string) 拒绝原因key"
                                    }
                                ],
                                "id": "(integer) 拒绝原因Id",
                                "key": "(string) 拒绝原因key"
                            }
                        ],
                        "id": "(integer) 拒绝原因Id",
                        "key": "(string) 拒绝原因key"
                    }
                ],
                "id": "(integer) 拒绝原因Id",
                "key": "(string) 拒绝原因key"
            }
        ],
        "id": "(integer) 拒绝原因Id",
        "key": "(string) 拒绝原因key"
    }
]
*/



/**
 * 获取指定订单的风险标签列表    /v2/interview/risktips/{applyId}
 *
 * @params      { String   }      applyId                       卡申请ID
 */
BkCobrandedcardManager.getInterviewRisktipsApplyIdV2({
    params: {
        applyId: '0',
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
        "confirmTel": "(string) 客户经理补全电话",
        "editable": "(boolean) 是否支持编辑",
        "extraInfo": [
            {
                "extraDesc": "(string) 补充信息值",
                "extraType": "(integer) 补充信息类型",
                "extraTypeDesc": "(string) 补充信息类型描述",
                "riskTipName": "(string) 风险单位名称",
                "riskTipType": "(integer) 风险提示类型 1确认单位信息 2确认单位电话"
            }
        ],
        "riskTipName": "(string) 风险单位名称",
        "riskTipType": "(integer) 风险提示类型 0风控电话核实 1确认单位信息 2确认单位电话",
        "riskTips": [],
        "telResult": "(integer) 客户经理补全手机是否是固话(10提报单位电话手机号 11提报单位电话固话)"
    }
]
*/



/**
 * 获取面签订单检索条件项    /v2/interview/searchoptions
 *
 */
BkCobrandedcardManager.getInterviewSearchoptionsV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "applyChannels": [
        {
            "key": {},
            "value": {}
        }
    ],
    "interviewStatus": [
        {
            "key": {},
            "value": {}
        }
    ],
    "interviewTypes": [
        {
            "key": {},
            "value": {}
        }
    ],
    "openCities": [
        {
            "cities": [
                {
                    "areas": [
                        {
                            "areaCode": "(string) 区code",
                            "areaName": "(string) 区名称",
                            "totalCount": "(integer) 待处理订单数量"
                        }
                    ],
                    "cityCode": "(string) 市code",
                    "cityName": "(string) 市名称",
                    "totalCount": "(integer) 待处理订单数量"
                }
            ],
            "provinceCode": "(string) 省code",
            "provinceName": "(string) 省名称"
        }
    ],
    "regions": [
        {
            "key": {},
            "value": {}
        }
    ],
    "salesManList": [
        {
            "key": {},
            "value": {}
        }
    ],
    "salesManStatus": [
        {
            "key": {},
            "value": {}
        }
    ]
}
*/



/**
 * 面签派单（手动指派面签业务经理）    /v2/interview/toassign
 *
 * @params      { Object   }      param                         面签改派参数
 */
BkCobrandedcardManager.postInterviewToassignV2({
    data: {
        param: '',
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
 * 短表单批量改派    /v2/manager/shortform/batchassign
 *
 * @params      { Object   }      param                         短表单批量改派参数
 */
BkCobrandedcardManager.postManagerShortformBatchassignV2({
    data: {
        param: '',
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
 * 短表单业务员指派    /v2/manager/shortform/salesman
 *
 * @params      { Object   }      param                         短表单业务员指派参数
 */
BkCobrandedcardManager.postManagerShortformSalesmanV2({
    data: {
        param: '',
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
 * 提交风险件审核结果    /v2/risk/auditresult
 *
 * @params      { Object   }      param                         param
 */
BkCobrandedcardManager.postRiskAuditresultV2({
    data: {
        param: '',
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
 * 查询风险件详情V2    /v2/risk/detail/{riskId}
 *
 * @params      { String   }      riskId                        风险件id
 */
BkCobrandedcardManager.getRiskDetailRiskIdV2({
    params: {
        riskId: '0',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "auditComment": "(string) 审核意见",
    "auditMan": "(string) 审核人员",
    "auditStatus": "(integer) 订单状态 2待审核 3已审核",
    "auditStatusDesc": "(string) 订单状态描述 2待审核 3已审核",
    "auditTime": "(string) 审核时间",
    "reportNote": "(string) 业务员提报说明",
    "reportTime": "(string) 提报时间",
    "riskId": "(integer) 风险件id",
    "riskImageList": [
        {
            "fileId": "(integer) 文件Id",
            "fileType": "(integer) 文件类型 1风险证明  10其它",
            "fileTypeDesc": "(string) 文件类型文件类型 1风险证明  10其它",
            "imageBase64": "(string) 图片内容（base64编码）,已压缩",
            "mediaType": "(string) 图片类型"
        }
    ],
    "riskProperty": "(integer) 风险性质 1个人风险 2团体风险",
    "riskPropertyDesc": "(string) 风险性质 1个人风险 2团体风险",
    "riskType": "(integer) 风险类型 1涉及中介代办、挂靠 2申请信息虚假或不一致 3无工作证明或离职 4贷款投资类公司 5禁止客群、行业 6无办公场所 10其它",
    "riskTypeDesc": "(string) 风险类型 1涉及中介代办、挂靠 2申请信息虚假或不一致 3无工作证明或离职 4贷款投资类公司 5禁止客群、行业 6无办公场所 10其它",
    "riskUserList": [
        {
            "applyId": "(integer) 申卡记录id",
            "applyIdMask": "(string) 申卡记录id",
            "applyStatusDesc": "(string) 用户状态",
            "applyTypeDesc": "(string) 订单类型",
            "auditResult": "(integer) 风险判定结果 1不予面签 2银行止付 3无风险",
            "auditResultDesc": "(string) 风险判定结果描述 1不予面签 2银行止付 3无风险",
            "companyAddress": "(string) 工作单位地址",
            "companyName": "(string) 工作单位",
            "detailInfo": [
                {
                    "applyIdMask": "(string) applyId mask",
                    "detailType": "(integer) 详情类型 1面签详情 2补件详情",
                    "detailTypeDesc": "(string) 详情类型描述 1面签详情 2补件详情",
                    "paramId": "(integer) 查看详情所需的参数"
                }
            ],
            "idCardNo": "(string) 用户身份证号",
            "userId": "(integer) 用户id",
            "userMobile": "(string) 用户手机号",
            "userName": "(string) 用户姓名"
        }
    ],
    "visitedDepartment": "(integer) 是否亲访单位 1是 2否"
}
*/



/**
 * 补件面签人员批量改派    /v2/supplement/batchassign
 *
 * @params      { Object   }      param                         补件面签人员批量改派参数
 */
BkCobrandedcardManager.postSupplementBatchassignV2({
    data: {
        param: '',
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
 * 补件详情查询    /v2/supplement/detail/{applyId}
 *
 * @params      { String   }      applyId                       卡申请ID
 */
BkCobrandedcardManager.getSupplementDetailApplyIdV2({
    params: {
        applyId: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "address": "(string) 所在城市",
    "allowUpLoadAndSubmitToAudit": "(boolean) 是否允许再次上传补件资料至审核,true允许、false不允许",
    "applyId": "(integer) 申请Id",
    "applyIdMask": "(string) 申请Id",
    "auditFileList": [],
    "barCode": "(string) 进件条码",
    "companyName": "(string) 公司名称",
    "idCardNo": "(string) 身份证号",
    "imageList": [
        {
            "applyId": "(integer) 申卡Id",
            "applyIdMask": "(string) 申卡Id mask",
            "fileId": "(integer) 文件Id",
            "fileIdMask": "(string) 文件Id mask",
            "fileType": "(integer) 文件类型（1:身份证正面、2:身份证反面、3:合影照、4：业务确认书、5公司门头照、6客户签字照、 7其它、10工作/财力证明 12补件资料）",
            "fileTypeDesc": "(string) 文件类型字符（1:身份证正面、2:身份证反面、3:合影照、4：业务确认书、5公司门头照、6客户签字照、 7其它、10工作/财力证明 12补件资料）",
            "imageUrl": "(string) 图片下载地址"
        }
    ],
    "mobile": "(string) 联系方式（持卡人手机号码）",
    "realName": "(string) 申请人（持卡人姓名）",
    "rejectReason": "(string) 补件拒绝原因",
    "supplementStatus": "(integer) 补件状态（1:待上传 2:待审核 3:审核通过 4:审核失败）",
    "supplementStatusDesc": "(string) 补件状态描述（1:待上传 2:待审核 3:审核通过 4:审核失败）",
    "userId": "(integer) 用户Id"
}
*/



/**
 * 补件+面签人员改派    /v2/supplement/toassign
 *
 * @params      { Object   }      param                         补件面签人员改派参数
 */
BkCobrandedcardManager.postSupplementToassignV2({
    data: {
        param: '',
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



