import BkCobrandedcardManager from './api/bk-cobrandedcard-manager/api';


/**
* 查询省市区列表    /v1/address/
*
*/
BkCobrandedcardManager.getAddressV1({
    params: {
        bankId: '0', //银行Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询区列表    /v1/address/area
*
*/
BkCobrandedcardManager.getAddressAreaV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询市列表    /v1/address/city
*
*/
BkCobrandedcardManager.getAddressCityV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询省列表    /v1/address/province
*
*/
BkCobrandedcardManager.getAddressProvinceV1({
    params: {
        bankId: '0', //银行Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 已出账单日志查询    /v1/bill/
*
*/
BkCobrandedcardManager.getBillV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 未出账单日志查询    /v1/bill/sheet
*
*/
BkCobrandedcardManager.getBillSheetV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询黑名单列表    /v1/blacklist/
*
*/
BkCobrandedcardManager.getBlacklistV1({
    params: {
        pageIndex: 'undefined', //当前页码，从1开始
        pageSize: 'undefined', //页面大小，5~500
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交保存用户黑名单信息    /v1/blacklist/add
*
*/
BkCobrandedcardManager.postBlacklistAddV1({
    data: {
        param: {
    "bankId": "(integer) 黑名单用户已申请|意向申请的联名卡银行Id (选填)",
    "idCardNo": "(string) 黑名单用户身份证号码 (选填)",
    "mobile": "(string) 黑名单用户手机号码 (选填)",
    "name": "(string) 黑名单用户姓名 (选填)",
    "note": "(string) 备注(选填)",
    "reason": "(string) 原因(选填)",
    "recordTime": "(string) 手工记录时间",
    "type": "(integer) 进入黑名单原因：（0：其他 1 客户习惯性投诉抱怨 2：欺诈 3：机器人）-默认1",
    "typeDesc": "(string) 类型详细描述(选填)",
    "userId": "(integer) 黑名单用户管家userId(必填)"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 批量提交保存用户黑名单信息    /v1/blacklist/batchadd
*
*/
BkCobrandedcardManager.postBlacklistBatchaddV1({
    data: {
        param: {
    "userBlackList": [
        {
            "bankId": "(integer) 黑名单用户已申请|意向申请的联名卡银行Id (选填)",
            "idCardNo": "(string) 黑名单用户身份证号码 (选填)",
            "mobile": "(string) 黑名单用户手机号码 (选填)",
            "name": "(string) 黑名单用户姓名 (选填)",
            "note": "(string) 备注(选填)",
            "reason": "(string) 原因(选填)",
            "recordTime": "(string) 手工记录时间",
            "type": "(integer) 进入黑名单原因：（0：其他 1 客户习惯性投诉抱怨 2：欺诈 3：机器人）-默认1",
            "typeDesc": "(string) 类型详细描述(选填)",
            "userId": "(integer) 黑名单用户管家userId(必填)"
        }
    ]
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* Excel导入保存用户黑名单信息    /v1/blacklist/excelimport
*
*/
BkCobrandedcardManager.postBlacklistExcelimportV1({
    data: {
        file: 'undefined', //待上传黑名单Excel
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增或更新启动屏    /v1/bootscreen/addOrUpdate
*
*/
BkCobrandedcardManager.postBootscreenAddOrUpdateV1({
    data: {
        dto: {
    "activityName": "(string) 活动名称",
    "autoId": "(integer) 活动ID",
    "endTime": "(string) 活动结束时间",
    "imgLinkUrl": "(string) 图片跳转链接url",
    "imgUrl": "(string) 图片url",
    "lastOperator": "(string) 最后操作者",
    "startTime": "(string) 活动开始时间"
}, //dto
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 启动屏列表    /v1/bootscreen/list
*
*/
BkCobrandedcardManager.getBootscreenListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传图片    /v1/bootscreen/uploadImg
*
*/
BkCobrandedcardManager.postBootscreenUploadImgV1({
    data: {
        file: 'undefined', //图片文件 
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除启动屏    /v1/bootscreen/{id}
*
*/
BkCobrandedcardManager.deleteBootscreenIdV1({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 查找cg人群    /v1/cardrecommend/cggroup
*
*/
BkCobrandedcardManager.getCardrecommendCggroupV1({
    params: {
        cgGroupId: '0', //cgGroupId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* queryOpenCityList    /v1/common/manager/opencities
*
*/
BkCobrandedcardManager.getCommonManagerOpencitiesV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* updateOpenCity    /v1/common/manager/opencity
*
*/
BkCobrandedcardManager.postCommonManagerOpencityV1({
    data: {
        param: {
    "bankId": "(integer) 银行ID",
    "cityName": "(string) 城市名称",
    "configId": "(integer) 配置ID",
    "pyCityName": "(string) 城市拼音",
    "regionId": "(integer) 所属大区",
    "saleBranchCode": "(string) 销售支行代码",
    "spreadManCode": "(string) 推广人代码",
    "spreadOrgCode": "(string) 推广机构代码",
    "standardCityCode": "(string) 标准城市代码"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* delOpenCity    /v1/common/manager/opencity/{configId}
*
*/
BkCobrandedcardManager.deleteCommonManagerOpencityConfigIdV1({
    params: {
        configId: 'undefined', //configId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* salesManPagerDetailList    /v1/common/salesman/detaillist/
*
*/
BkCobrandedcardManager.getCommonSalesmanDetaillistV1({
    params: {
        pageIndex: 'undefined', //当前页码，从1开始
        pageSize: 'undefined', //页面大小，5~500
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 图片文件上传    /v1/image/upload
*
*/
BkCobrandedcardManager.postImageUploadV1({
    data: {
        file: 'undefined', //图片文件 
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询面签列表    /v1/interview/
*
*/
BkCobrandedcardManager.getInterviewV1({
    params: {
        pageIndex: 'undefined', //当前页码，从1开始
        pageSize: 'undefined', //页面大小，5~500
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新面签业务人员状态    /v1/interview/altersaleman
*
*/
BkCobrandedcardManager.postInterviewAltersalemanV1({
    data: {
        param: {
    "salesManAccountId": "(integer) 面签人员账户Id",
    "status": "(integer) 状态（1：删除 0：正常 2：休息）"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保存面签人员负责区域配置    /v1/interview/areaconfig
*
*/
BkCobrandedcardManager.postInterviewAreaconfigV1({
    data: {
        param: {
    "areas": [
        {
            "areaCode": "(string) 区code",
            "cityCode": "(string) 市code",
            "provinceCode": "(string) 省code"
        }
    ],
    "salesManAccountId": "(integer) 面签人员账户Id"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 确认不同步客户真实信息    /v1/interview/cancelsync
*
*/
BkCobrandedcardManager.postInterviewCancelsyncV1({
    data: {
        param: {
    "applyId": "(integer) 申请Id",
    "applyIdMask": "(string) 申请Id mask",
    "category": "(integer) 真实信息类型（100：客户公司真实地址信息 200：客户公司真实电话）"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取指定的图片    /v1/interview/image
*
*/
BkCobrandedcardManager.getInterviewImageV1({
    params: {
        applyId: '0', //卡申请ID
        fileId: '0', //文件ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 面签资料文件上传    /v1/interview/image/base64
*
*/
BkCobrandedcardManager.postInterviewImageBase64V1({
    data: {
        param: {
    "applyId": "(integer) 卡申请ID",
    "applyIdMask": "(string) 卡申请ID",
    "base64Image": "(string) 待上传的面签影像资料Base64编码",
    "fileName": "(string) 图片文件的文件名",
    "fileType": "(integer) 文件类型(1:身份证正面、2:身份证反面、3:合影照、4：业务确认书、5：公司门头照、6：客户签字照、7：其他证明、10：工作/财力证明)"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 设置面签客户经理短表单接单上限    /v1/interview/limitsetting
*
*/
BkCobrandedcardManager.postInterviewLimitsettingV1({
    data: {
        param: {
    "orderLimit": "(integer) 接单上限",
    "salesManAccountId": "(integer) 面签人员账户Id"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改业务员绑定的登录设备    /v1/interview/logindevice
*
*/
BkCobrandedcardManager.postInterviewLogindeviceV1({
    data: {
        param: {
    "deviceKey": "(string) 设备key",
    "salesManAccountId": "(integer) 面签人员账户id"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 分页查看用户登录日志列表    /v1/interview/loginlist/
*
*/
BkCobrandedcardManager.getInterviewLoginlistV1({
    params: {
        pageIndex: 'undefined', //当前页码，从1开始
        pageSize: 'undefined', //页面大小，5~500
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 提交保存客户真实信息    /v1/interview/realinfo
*
*/
BkCobrandedcardManager.postInterviewRealinfoV1({
    data: {
        param: {
    "applyId": "(integer) 申请Id",
    "applyIdMask": "(string) 申请Id mask",
    "areaCode": "(string) 真实工作城市：区code",
    "category": "(integer) 真实信息类型（100：客户公司真实地址信息 200：客户公司真实电话）",
    "cityCode": "(string) 真实工作城市：市code",
    "companyContact": "(string) 公司电话|手机号",
    "companyContactType": "(integer) 公司电话类型：10提报单位电话手机号 11提报单位电话固话",
    "detailAddress": "(string) 真实工作城市：详细地址",
    "provinceCode": "(string) 真实工作城市：省code"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 删除指定的面签人员    /v1/interview/salesman/{salesManAccountId}
*
*/
BkCobrandedcardManager.deleteInterviewSalesmanSalesManAccountIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询面签人员列表    /v1/interview/salesmanlist
*
*/
BkCobrandedcardManager.postInterviewSalesmanlistV1({
    data: {
        param: {
    "addressRelated": "(boolean) 是否关联查询面签业务人员负责区域（true：是 false：否）",
    "areaCode": "(string) 所属区code",
    "belongCity": [],
    "cityCode": "(string) 所属市code",
    "locationCity": "(string) 定位城市",
    "nameOrMobile": "(string) 姓名或手机号",
    "pageIndex": "(integer) 当前页码，从1开始",
    "pageSize": "(integer) 页面大小，5~500",
    "provinceCode": "(string) 所属省code",
    "regionId": "(integer) 地区code",
    "status": "(integer) 面签人员状态"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 提交面签资料至审核    /v1/interview/toaudit
*
*/
BkCobrandedcardManager.postInterviewToauditV1({
    data: {
        param: {
    "applyId": "(integer) 申请单号",
    "applyIdMask": "(string) 申请单号 mask"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 查询短表单列表列表    /v1/manager/shortform/
*
*/
BkCobrandedcardManager.getManagerShortformV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 短表单业务员指派    /v1/manager/shortform/salesman
*
*/
BkCobrandedcardManager.postManagerShortformSalesmanV1({
    data: {
        param: {
    "accountId": "(integer) 业务人员Id",
    "shortFormId": "(integer) 短表单Id"
}, //短表单业务员指派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询订单列表    /v1/order/
*
*/
BkCobrandedcardManager.getOrderV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查看指定订单详情    /v1/order/{applyIdStr}
*
*/
BkCobrandedcardManager.getOrderApplyIdStrV1({
    params: {
        applyIdStr: 'undefined', //applyIdStr
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 创建订单的面签记录    /v1/order/{applyIdStr}/interviewrecord
*
*/
BkCobrandedcardManager.putOrderApplyIdStrInterviewrecordV1({
    params: {
        applyIdStr: 'undefined', //applyIdStr
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 撤销注销    /v1/order/{applyIdStr}/revokecancel
*
*/
BkCobrandedcardManager.postOrderApplyIdStrRevokecancelV1({
    params: {
        applyIdStr: 'undefined', //applyIdStr
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 解锁激活锁定    /v1/order/{applyIdStr}/unlockactive
*
*/
BkCobrandedcardManager.postOrderApplyIdStrUnlockactiveV1({
    params: {
        applyIdStr: 'undefined', //applyIdStr
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加权限单元    /v1/permission/manage/unit/add
*
*/
BkCobrandedcardManager.postPermissionManageUnitAddV1({
    data: {
        unitParam: {
    "unitName": "(string) 区域名称"
}, //unitParam
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加权限单元区域    /v1/permission/manage/unit/addregion
*
*/
BkCobrandedcardManager.postPermissionManageUnitAddregionV1({
    data: {
        param: {
    "regionCode": "(string) 城市编码",
    "unitId": "(integer) 区域Id"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加权限单元用户    /v1/permission/manage/unit/adduser
*
*/
BkCobrandedcardManager.postPermissionManageUnitAdduserV1({
    data: {
        param: {
    "targetAccount": "(string) 用户account",
    "unitId": "(integer) 区域id"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除权限单元区域    /v1/permission/manage/unit/deleteregion
*
*/
BkCobrandedcardManager.deletePermissionManageUnitDeleteregionV1({
    params: {
        unitId: '0', //单元id
        regionCode: '0', //区域编码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除权限单元用户    /v1/permission/manage/unit/deleteuser
*
*/
BkCobrandedcardManager.deletePermissionManageUnitDeleteuserV1({
    params: {
        unitId: '0', //单元id
        targetAccount: '0', //用户Account
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取权限单元列表    /v1/permission/manage/unit/query
*
*/
BkCobrandedcardManager.getPermissionManageUnitQueryV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加用户直接关联的区域    /v1/permission/manage/user/addregion
*
*/
BkCobrandedcardManager.postPermissionManageUserAddregionV1({
    data: {
        param: {
    "regionCode": "(string) 城市编码",
    "targetAccount": "(string) 用户account"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除用户直接关联的区域    /v1/permission/manage/user/deleteregion
*
*/
BkCobrandedcardManager.deletePermissionManageUserDeleteregionV1({
    params: {
        targetAccount: '0', //账户
        regionCode: '0', //区域编码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户列表    /v1/permission/manage/user/query
*
*/
BkCobrandedcardManager.getPermissionManageUserQueryV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询风险件列表    /v1/risk/
*
*/
BkCobrandedcardManager.getRiskV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交风险件审核结果    /v1/risk/auditresult
*
*/
BkCobrandedcardManager.postRiskAuditresultV1({
    data: {
        param: {
    "auditComment": "(string) 审核意见",
    "auditResult": [
        {
            "applyId": "(integer) 用户申卡id",
            "applyIdMask": "(string) 用户申卡id",
            "riskResult": "(integer) 风险判定结果 1不予面签 2银行止付 3无风险"
        }
    ],
    "riskId": "(integer) 风险件id",
    "riskIdMask": "(string) 风险件id",
    "riskType": "(integer) 风险提报类型 1涉及中介代办、挂靠 2申请信息虚假或不一致 3无工作证明或离职 4贷款投资类公司 5禁止客群、行业 6无办公场所 10其它",
    "visitedDepartment": "(integer) 是否亲访单位"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 风险件详情查询    /v1/risk/detail
*
*/
BkCobrandedcardManager.getRiskDetailV1({
    params: {
        riskId: '0', //风险件id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 提交保存用户敏感字字库    /v1/sensitivewords/add
*
*/
BkCobrandedcardManager.postSensitivewordsAddV1({
    params: {
        token: 'undefined', //任务授权访问码
    },
    data: {
        param: {
    "category": "(integer) 关键字校验类别[0：公司职务 1：公司名称...]",
    "keyword": "(string) 敏感字(必填)",
    "keywordType": "(integer) 关键字类型[0：敏感字 1：非敏感字白名单]"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 批量提交保存用户敏感字字库    /v1/sensitivewords/batchadd
*
*/
BkCobrandedcardManager.postSensitivewordsBatchaddV1({
    params: {
        token: 'undefined', //任务授权访问码
    },
    data: {
        param: [
    {
        "category": "(integer) 关键字校验类别[0：公司职务 1：公司名称...]",
        "keyword": "(string) 敏感字(必填)",
        "keywordType": "(integer) 关键字类型[0：敏感字 1：非敏感字白名单]"
    }
], //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 账户额度日志查询    /v1/status/cardcredit
*
*/
BkCobrandedcardManager.getStatusCardcreditV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 分期额度日志查询    /v1/status/cardplancredit
*
*/
BkCobrandedcardManager.getStatusCardplancreditV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 卡片状态日志查询    /v1/status/cardstatus
*
*/
BkCobrandedcardManager.getStatusCardstatusV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询补件列表    /v1/supplement/
*
*/
BkCobrandedcardManager.getSupplementV1({
    params: {
        pageIndex: 'undefined', //当前页码，从1开始
        pageSize: 'undefined', //页面大小，5~500
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交补件审核结果    /v1/supplement/audit
*
*/
BkCobrandedcardManager.postSupplementAuditV1({
    data: {
        param: {
    "applyId": "(integer) 申请Id",
    "applyIdMask": "(string) 申请Id mask",
    "auditNote": "(string) 审核备注",
    "auditStatus": "(integer) 审核结果(1审核通过 2：审核不通过)",
    "reasonDesc": "(string) 补件未通过原因",
    "supplementFileTypeList": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 提交补件资料至审核    /v1/supplement/toaudit
*
*/
BkCobrandedcardManager.postSupplementToauditV1({
    data: {
        param: {
    "applyId": "(integer) 申请单号",
    "applyIdMask": "(string) 申请单号 mask"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 修改指定项开关    /v1/switch/value
*
*/
BkCobrandedcardManager.postSwitchValueV1({
    data: {
        param: {
    "autoId": "(integer) 修改的指定项",
    "bankId": "(integer) 修改的归属银行，做双层校验",
    "isOpened": "(boolean) 是否是打开状态"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 转账订单日志查询    /v1/transferorder/
*
*/
BkCobrandedcardManager.getTransferorderV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 面签资料审核    /v2/interview/audit
*
*/
BkCobrandedcardManager.postInterviewAuditV2({
    data: {
        param: {
    "applyIdMask": "(string) 申请Id mask",
    "auditNote": "(string) 审核备注",
    "auditStatus": "(integer) 审核结果（1审核通过 2：审核不通过）",
    "auditSuggestion": "(string) 审核意见",
    "rejectReasons": [
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
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询审核记录列表    /v2/interview/audithistory
*
*/
BkCobrandedcardManager.getInterviewAudithistoryV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 面签批量改派    /v2/interview/batchassign
*
*/
BkCobrandedcardManager.postInterviewBatchassignV2({
    data: {
        param: {
    "maskApplyIds": [],
    "salesManAccountIdMask": "(string) 面签人员账户Id"
}, //面签批量改派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 面签详情查询    /v2/interview/detail/{applyId}
*
*/
BkCobrandedcardManager.getInterviewDetailApplyIdV2({
    params: {
        applyId: '0', //卡申请ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询跟进记录    /v2/interview/followlist/{applyId}
*
*/
BkCobrandedcardManager.getInterviewFollowlistApplyIdV2({
    params: {
        applyId: '0', //卡申请ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取指定的图片    /v2/interview/image
*
*/
BkCobrandedcardManager.getInterviewImageV2({
    params: {
        applyId: '0', //卡申请ID
        fileId: '0', //文件ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 获取指定订单的风险标签列表    /v2/interview/risktips/{applyId}
*
*/
BkCobrandedcardManager.getInterviewRisktipsApplyIdV2({
    params: {
        applyId: '0', //卡申请ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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

/**
* 面签派单（手动指派面签业务经理）    /v2/interview/toassign
*
*/
BkCobrandedcardManager.postInterviewToassignV2({
    data: {
        param: {
    "applyIdMask": "(string) 申请记录Id",
    "salesManAccountIdMask": "(string) 面签人员账户Id"
}, //面签改派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 短表单批量改派    /v2/manager/shortform/batchassign
*
*/
BkCobrandedcardManager.postManagerShortformBatchassignV2({
    data: {
        param: {
    "accountIdMask": "(string) 业务人员Id mask",
    "shortFormMaskIds": []
}, //短表单批量改派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 短表单业务员指派    /v2/manager/shortform/salesman
*
*/
BkCobrandedcardManager.postManagerShortformSalesmanV2({
    data: {
        param: {
    "salesManAccountIdMask": "(string) 面签人员账户Id",
    "shortFormIdMask": "(string) 短表单Id"
}, //短表单业务员指派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交风险件审核结果    /v2/risk/auditresult
*
*/
BkCobrandedcardManager.postRiskAuditresultV2({
    data: {
        param: {
    "auditComment": "(string) 审核意见",
    "auditResult": [
        {
            "applyId": "(integer) 用户申卡id",
            "applyIdMask": "(string) 用户申卡id",
            "riskResult": "(integer) 风险判定结果 1不予面签 2银行止付 3无风险"
        }
    ],
    "riskId": "(integer) 风险件id",
    "riskIdMask": "(string) 风险件id",
    "riskType": "(integer) 风险提报类型 1涉及中介代办、挂靠 2申请信息虚假或不一致 3无工作证明或离职 4贷款投资类公司 5禁止客群、行业 6无办公场所 10其它",
    "visitedDepartment": "(integer) 是否亲访单位"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询风险件详情V2    /v2/risk/detail/{riskId}
*
*/
BkCobrandedcardManager.getRiskDetailRiskIdV2({
    params: {
        riskId: '0', //风险件id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 补件面签人员批量改派    /v2/supplement/batchassign
*
*/
BkCobrandedcardManager.postSupplementBatchassignV2({
    data: {
        param: {
    "maskApplyIds": [],
    "salesManAccountIdMask": "(string) 面签人员账户Id"
}, //补件面签人员批量改派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 补件详情查询    /v2/supplement/detail/{applyId}
*
*/
BkCobrandedcardManager.getSupplementDetailApplyIdV2({
    params: {
        applyId: 'undefined', //卡申请ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 补件+面签人员改派    /v2/supplement/toassign
*
*/
BkCobrandedcardManager.postSupplementToassignV2({
    data: {
        param: {
    "applyIdMask": "(string) 申请记录Id",
    "salesManAccountIdMask": "(string) 面签人员账户Id"
}, //补件面签人员改派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
