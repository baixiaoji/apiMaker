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
        pageIndex: '', //当前页码，从1开始
        pageSize: '', //页面大小，5~500
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
        param: '', //param
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
        param: '', //param
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
        file: '', //待上传黑名单Excel
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
        dto: '', //dto
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
        file: '', //图片文件 
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
        id: '', //id
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
        param: '', //param
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
        configId: '', //configId
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
        pageIndex: '', //当前页码，从1开始
        pageSize: '', //页面大小，5~500
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
        file: '', //图片文件 
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
        pageIndex: '', //当前页码，从1开始
        pageSize: '', //页面大小，5~500
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        pageIndex: '', //当前页码，从1开始
        pageSize: '', //页面大小，5~500
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        param: '', //短表单业务员指派参数
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
        applyIdStr: '', //applyIdStr
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
        applyIdStr: '', //applyIdStr
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
        applyIdStr: '', //applyIdStr
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
        applyIdStr: '', //applyIdStr
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
        unitParam: '', //unitParam
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        token: '', //任务授权访问码
    },
    data: {
        param: '', //param
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
        token: '', //任务授权访问码
    },
    data: {
        param: '', //param
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
        pageIndex: '', //当前页码，从1开始
        pageSize: '', //页面大小，5~500
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        param: '', //param
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
        param: '', //面签批量改派参数
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
        param: '', //面签改派参数
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
        param: '', //短表单批量改派参数
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
        param: '', //短表单业务员指派参数
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
        param: '', //param
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
        param: '', //补件面签人员批量改派参数
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
        applyId: '', //卡申请ID
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
        param: '', //补件面签人员改派参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
