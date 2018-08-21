// bk-cobrandedcard-manager config

module.exports = {
    getAddressV1: {
        url: '/v1/address/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getAddressAreaV1: {
        url: '/v1/address/area',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getAddressCityV1: {
        url: '/v1/address/city',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getAddressProvinceV1: {
        url: '/v1/address/province',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getAuthMenusV1: {
        url: '/v1/auth/menus',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getBillV1: {
        url: '/v1/bill/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getBillSheetV1: {
        url: '/v1/bill/sheet',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getBlacklistV1: {
        url: '/v1/blacklist/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postBlacklistAddV1: {
        url: '/v1/blacklist/add',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postBlacklistBatchaddV1: {
        url: '/v1/blacklist/batchadd',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postBlacklistExcelimportV1: {
        url: '/v1/blacklist/excelimport',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postBootscreenAddOrUpdateV1: {
        url: '/v1/bootscreen/addOrUpdate',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getBootscreenListV1: {
        url: '/v1/bootscreen/list',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postBootscreenUploadImgV1: {
        url: '/v1/bootscreen/uploadImg',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    deleteBootscreenIdV1: {
        url: '/v1/bootscreen/{id}',
        method: 'delete',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCardrecommendV1: {
        url: '/v1/cardrecommend/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCardrecommendCggroupV1: {
        url: '/v1/cardrecommend/cggroup',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCommonManagerOpencitiesV1: {
        url: '/v1/common/manager/opencities',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postCommonManagerOpencityV1: {
        url: '/v1/common/manager/opencity',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    deleteCommonManagerOpencityConfigIdV1: {
        url: '/v1/common/manager/opencity/{configId}',
        method: 'delete',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCommonOpencitiesV1: {
        url: '/v1/common/opencities/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCommonRegionV1: {
        url: '/v1/common/region/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCommonSalesmanV1: {
        url: '/v1/common/salesman/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCommonSalesmanDetaillistV1: {
        url: '/v1/common/salesman/detaillist/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getCommonSupportbankV1: {
        url: '/v1/common/supportbank/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postImageUploadV1: {
        url: '/v1/image/upload',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewV1: {
        url: '/v1/interview/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewAltersalemanV1: {
        url: '/v1/interview/altersaleman',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewAreaconfigV1: {
        url: '/v1/interview/areaconfig',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewCancelsyncV1: {
        url: '/v1/interview/cancelsync',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewImageV1: {
        url: '/v1/interview/image',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewImageBase64V1: {
        url: '/v1/interview/image/base64',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewLimitsettingV1: {
        url: '/v1/interview/limitsetting',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewLogindeviceV1: {
        url: '/v1/interview/logindevice',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewLoginlistV1: {
        url: '/v1/interview/loginlist/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewLoginoutV1: {
        url: '/v1/interview/loginout',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewOpencitiesV1: {
        url: '/v1/interview/opencities',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewRealinfoV1: {
        url: '/v1/interview/realinfo',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewRejectreasonsV1: {
        url: '/v1/interview/rejectreasons',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    deleteInterviewSalesmanSalesManAccountIdV1: {
        url: '/v1/interview/salesman/{salesManAccountId}',
        method: 'delete',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewSalesmanlistV1: {
        url: '/v1/interview/salesmanlist',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewSearchoptionsV1: {
        url: '/v1/interview/searchoptions',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewToauditV1: {
        url: '/v1/interview/toaudit',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewUserinfoV1: {
        url: '/v1/interview/userinfo',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getManagerShortformV1: {
        url: '/v1/manager/shortform/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getManagerShortformOptionV1: {
        url: '/v1/manager/shortform/option',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postManagerShortformSalesmanV1: {
        url: '/v1/manager/shortform/salesman',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getOrderV1: {
        url: '/v1/order/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getOrderApplyIdStrV1: {
        url: '/v1/order/{applyIdStr}',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    putOrderApplyIdStrInterviewrecordV1: {
        url: '/v1/order/{applyIdStr}/interviewrecord',
        method: 'put',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postOrderApplyIdStrRevokecancelV1: {
        url: '/v1/order/{applyIdStr}/revokecancel',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postOrderApplyIdStrUnlockactiveV1: {
        url: '/v1/order/{applyIdStr}/unlockactive',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postPermissionManageUnitAddV1: {
        url: '/v1/permission/manage/unit/add',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postPermissionManageUnitAddregionV1: {
        url: '/v1/permission/manage/unit/addregion',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postPermissionManageUnitAdduserV1: {
        url: '/v1/permission/manage/unit/adduser',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    deletePermissionManageUnitDeleteregionV1: {
        url: '/v1/permission/manage/unit/deleteregion',
        method: 'delete',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    deletePermissionManageUnitDeleteuserV1: {
        url: '/v1/permission/manage/unit/deleteuser',
        method: 'delete',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getPermissionManageUnitQueryV1: {
        url: '/v1/permission/manage/unit/query',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postPermissionManageUserAddregionV1: {
        url: '/v1/permission/manage/user/addregion',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    deletePermissionManageUserDeleteregionV1: {
        url: '/v1/permission/manage/user/deleteregion',
        method: 'delete',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getPermissionManageUserQueryV1: {
        url: '/v1/permission/manage/user/query',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getRiskV1: {
        url: '/v1/risk/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postRiskAuditresultV1: {
        url: '/v1/risk/auditresult',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getRiskDetailV1: {
        url: '/v1/risk/detail',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getRiskOptionV1: {
        url: '/v1/risk/option',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postSensitivewordsAddV1: {
        url: '/v1/sensitivewords/add',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postSensitivewordsBatchaddV1: {
        url: '/v1/sensitivewords/batchadd',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getStatusCardcreditV1: {
        url: '/v1/status/cardcredit',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getStatusCardplancreditV1: {
        url: '/v1/status/cardplancredit',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getStatusCardstatusV1: {
        url: '/v1/status/cardstatus',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getSupplementV1: {
        url: '/v1/supplement/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postSupplementAuditV1: {
        url: '/v1/supplement/audit',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getSupplementOptionV1: {
        url: '/v1/supplement/option',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postSupplementToauditV1: {
        url: '/v1/supplement/toaudit',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getSwitchV1: {
        url: '/v1/switch/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postSwitchValueV1: {
        url: '/v1/switch/value',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getTransferorderV1: {
        url: '/v1/transferorder/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewAuditV2: {
        url: '/v2/interview/audit',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewAudithistoryV2: {
        url: '/v2/interview/audithistory',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewBatchassignV2: {
        url: '/v2/interview/batchassign',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewDetailApplyIdV2: {
        url: '/v2/interview/detail/{applyId}',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewFollowlistApplyIdV2: {
        url: '/v2/interview/followlist/{applyId}',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewImageV2: {
        url: '/v2/interview/image',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewRejectreasonsV2: {
        url: '/v2/interview/rejectreasons/',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewRisktipsApplyIdV2: {
        url: '/v2/interview/risktips/{applyId}',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getInterviewSearchoptionsV2: {
        url: '/v2/interview/searchoptions',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postInterviewToassignV2: {
        url: '/v2/interview/toassign',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postManagerShortformBatchassignV2: {
        url: '/v2/manager/shortform/batchassign',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postManagerShortformSalesmanV2: {
        url: '/v2/manager/shortform/salesman',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postRiskAuditresultV2: {
        url: '/v2/risk/auditresult',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getRiskDetailRiskIdV2: {
        url: '/v2/risk/detail/{riskId}',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postSupplementBatchassignV2: {
        url: '/v2/supplement/batchassign',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    getSupplementDetailApplyIdV2: {
        url: '/v2/supplement/detail/{applyId}',
        method: 'get',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
    postSupplementToassignV2: {
        url: '/v2/supplement/toassign',
        method: 'post',
        baseURL: '/api.u51.com/bk-cobrandedcard-manager/api',
    },
};
