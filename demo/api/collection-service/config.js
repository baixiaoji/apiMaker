// collection-service config

module.exports = {
    getReceiptAtAccounts: {
        url: '/accounts/receipt-at',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postApproveApplyFlow: {
        url: '/applyFlow/approve',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postCreateApplyFlowApplyFlow: {
        url: '/applyFlow/createApplyFlow',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postGetApplyFlowListApplyFlow: {
        url: '/applyFlow/getApplyFlowList',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetApplyUsersApplyFlow: {
        url: '/applyFlow/getApplyUsers',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetApproveNodeListApplyFlow: {
        url: '/applyFlow/getApproveNodeList',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetCaseApplyFlowRecordsApplyFlow: {
        url: '/applyFlow/getCaseApplyFlowRecords',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getProofDownloadFidArbexpress: {
        url: '/arbexpress/proof/download/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postThirdArbexpress: {
        url: '/arbexpress/third',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postCaseRegistArbitrate: {
        url: '/arbitrate/caseRegist',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseRegistAllArbitrate: {
        url: '/arbitrate/caseRegistAll',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postExportArbitrate: {
        url: '/arbitrate/export',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postPreAuditArbitrate: {
        url: '/arbitrate/preAudit',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getPreAuditAllArbitrate: {
        url: '/arbitrate/preAuditAll',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getProofDownloadFidArbitrate: {
        url: '/arbitrate/proof/download/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getProofPreviewArbitrateIdArbitrate: {
        url: '/arbitrate/proof/preview/{arbitrateId}',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postProofUpdateArbitrate: {
        url: '/arbitrate/proof/update',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postProofUploadArbitrateIdArbitrate: {
        url: '/arbitrate/proof/upload/{arbitrateId}',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getProofGetArbitrate: {
        url: '/arbitrate/proofGet',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueryArbitrate: {
        url: '/arbitrate/query',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postRevokeArbitrate: {
        url: '/arbitrate/revoke',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getStopOutShowArbitrate: {
        url: '/arbitrate/stopOutShow',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postStopOutSubmitArbitrate: {
        url: '/arbitrate/stopOutSubmit',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postAutoAssignShowAssign: {
        url: '/assign/autoAssignShow',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetAllAssignRatioAssign: {
        url: '/assign/getAllAssignRatio',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postInnerAssignAssign: {
        url: '/assign/innerAssign',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postInnerAutoAssignAssign: {
        url: '/assign/innerAutoAssign',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postSyncAssignResultAssign: {
        url: '/assign/syncAssignResult',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpdateAssignRatioAssign: {
        url: '/assign/updateAssignRatio',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getClaimCaseSearchCases: {
        url: '/cases/claimCaseSearch',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postSearchCases: {
        url: '/cases/search',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getTempSearchCases: {
        url: '/cases/tempSearch',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getDetailClaim: {
        url: '/claim/detail',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postHandleClaim: {
        url: '/claim/handle',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postAddCompany: {
        url: '/company/add',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetAllCompany: {
        url: '/company/getAll',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpdateCompany: {
        url: '/company/update',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getDeleteConfig: {
        url: '/config/delete',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetAllConfig: {
        url: '/config/getAll',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetSystemSettingConfig: {
        url: '/config/getSystemSetting',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpdateSystemSettingConfig: {
        url: '/config/updateSystemSetting',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpsertConfig: {
        url: '/config/upsert',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postCaseIdCache_delContacts: {
        url: '/contacts/{caseId}/cache/_del',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getBaseInfoCustomer: {
        url: '/customer/baseInfo',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postCallAddCallRecordCustomer: {
        url: '/customer/call/addCallRecord',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postCallMobileStrategyCustomer: {
        url: '/customer/call/mobileStrategy',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseBillInfoCustomer: {
        url: '/customer/case/billInfo',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseCaseWithholdCustomer: {
        url: '/customer/case/caseWithhold',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseCaseIdAccessLogsCustomer: {
        url: '/customer/case/{caseId}/access-logs',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseCaseIdApplyLogsCustomer: {
        url: '/customer/case/{caseId}/apply-logs',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseCaseIdAssignLogsCustomer: {
        url: '/customer/case/{caseId}/assign-logs',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseCaseIdBillsCustomer: {
        url: '/customer/case/{caseId}/bills',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseCaseIdPendAmountCustomer: {
        url: '/customer/case/{caseId}/pendAmount',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseCaseIdTaobaoAddressCustomer: {
        url: '/customer/case/{caseId}/taobao-address',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postContactAddCustomer: {
        url: '/customer/contact/add',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postContactAddMobileBlackCustomer: {
        url: '/customer/contact/addMobileBlack',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postContactGetMobileBlackListCustomer: {
        url: '/customer/contact/getMobileBlackList',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postContactRemarkCustomer: {
        url: '/customer/contact/remark',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postContactRemoveMobileBlackCustomer: {
        url: '/customer/contact/removeMobileBlack',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getContactListCustomer: {
        url: '/customer/contactList',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGeneralDecodeCustomer: {
        url: '/customer/generalDecode',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getImageFidCustomer: {
        url: '/customer/image/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getImage2FidCustomer: {
        url: '/customer/image2/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getPhoneListCustomer: {
        url: '/customer/phoneList',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getRecordsCustomer: {
        url: '/customer/records',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postRecordsAddCustomer: {
        url: '/customer/records/add',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCompanyStatisticDataVisual: {
        url: '/dataVisual/companyStatistic',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGlobalStatisticDataVisual: {
        url: '/dataVisual/globalStatistic',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOperatorQueryDataVisual: {
        url: '/dataVisual/operatorQuery',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOutsourceQueryDataVisual: {
        url: '/dataVisual/outsourceQuery',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getDispatchedContactListDebtTransfer: {
        url: '/debtTransfer/dispatched/contactList',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postDispatchedSearchDebtTransfer: {
        url: '/debtTransfer/dispatched/search',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postInitialBatchRemoveDebtTransfer: {
        url: '/debtTransfer/initial/batchRemove',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postInitialDebtApplyDebtTransfer: {
        url: '/debtTransfer/initial/debtApply',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postInitialDebtInitiateDebtTransfer: {
        url: '/debtTransfer/initial/debtInitiate',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postInitialSearchDebtTransfer: {
        url: '/debtTransfer/initial/search',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueueAmountCalDebtTransfer: {
        url: '/debtTransfer/queue/amountCal',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueueBackDebtTransfer: {
        url: '/debtTransfer/queue/back',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getQueueBackBuyerDebtTransfer: {
        url: '/debtTransfer/queue/backBuyer',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueueCanRepayTagDebtTransfer: {
        url: '/debtTransfer/queue/canRepayTag',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getQueueCirculateHistoryDebtTransfer: {
        url: '/debtTransfer/queue/circulateHistory',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueueDebtOutDebtTransfer: {
        url: '/debtTransfer/queue/debtOut',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueueDispatchDebtTransfer: {
        url: '/debtTransfer/queue/dispatch',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getQueueLinkCaseDebtTransfer: {
        url: '/debtTransfer/queue/linkCase',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getQueueOperateHistoryDebtTransfer: {
        url: '/debtTransfer/queue/operateHistory',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueueSearchDebtTransfer: {
        url: '/debtTransfer/queue/search',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getiam: {
        url: '/iam',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postlogin: {
        url: '/login',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postlogout: {
        url: '/logout',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getDelayCancelMark: {
        url: '/mark/delayCancel',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postDelayMarkMark: {
        url: '/mark/delayMark',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postCustomizeQueryNotices: {
        url: '/notices/customize/query',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postCustomizeSendNotices: {
        url: '/notices/customize/send',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postPullNotices: {
        url: '/notices/pull',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postReadNotices: {
        url: '/notices/read',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getStatisticNotices: {
        url: '/notices/statistic',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getClaimOrderQueryOfflineclaim: {
        url: '/offlineclaim/claim/orderQuery',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postAddOperatorOperator: {
        url: '/operator/addOperator',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetCompanyOperatorOperator: {
        url: '/operator/getCompanyOperator',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetRoleOperator: {
        url: '/operator/getRole',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetSpecialistCompanyOperator: {
        url: '/operator/getSpecialistCompany',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetSystemOperatorOperator: {
        url: '/operator/getSystemOperator',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postModifyPwdOperator: {
        url: '/operator/modifyPwd',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpdateOperatorOperator: {
        url: '/operator/updateOperator',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getoptions: {
        url: '/options',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getArbitrateBatchOutsource: {
        url: '/outsource/arbitrateBatch',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postBatchHandleOutsource: {
        url: '/outsource/batchHandle',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getBatchHandleTemplateOutsource: {
        url: '/outsource/batchHandleTemplate',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postTransferOutsource: {
        url: '/outsource/transfer',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postArbitrateBatchHandleOutsrouce: {
        url: '/outsrouce/arbitrate/batchHandle',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postAddRolePrivilege: {
        url: '/privilege/addRole',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetAllPrivilege: {
        url: '/privilege/getAll',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetByCompanyPrivilege: {
        url: '/privilege/getByCompany',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getGetRolePrivilege: {
        url: '/privilege/getRole',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postQueryPrivilegesPrivilege: {
        url: '/privilege/queryPrivileges',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpdateCompanyPrivilege: {
        url: '/privilege/updateCompany',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpdateRolePrivilegesPrivilege: {
        url: '/privilege/updateRolePrivileges',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getLastReceipt: {
        url: '/receipt/last',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postActualTimeAssignReportReport: {
        url: '/report/actualTimeAssignReport',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getAgreementReport: {
        url: '/report/agreement',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postAssignReport: {
        url: '/report/assign',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postClaimReport: {
        url: '/report/claim',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getRepayDownloadReport: {
        url: '/report/repayDownload',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getRepayQueryReport: {
        url: '/report/repayQuery',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postRepaySyncReport: {
        url: '/report/repaySync',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postEditSmsTemplateSms: {
        url: '/sms/editSmsTemplate',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postGetCaseSmsRecordsSms: {
        url: '/sms/getCaseSmsRecords',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postGetSmsCostListSms: {
        url: '/sms/getSmsCostList',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postGetSmsTemplateSms: {
        url: '/sms/getSmsTemplate',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postReportSms: {
        url: '/sms/report',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postSendSmsSms: {
        url: '/sms/sendSms',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postSmsContentPreviewSms: {
        url: '/sms/smsContentPreview',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postSmsTemplateSwitchSms: {
        url: '/sms/smsTemplateSwitch',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postUpdateSmsCostSms: {
        url: '/sms/updateSmsCost',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postInsertTag: {
        url: '/tag/insert',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postModifyTag: {
        url: '/tag/modify',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getQueryTag: {
        url: '/tag/query',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getAllAssignCaseDataTest: {
        url: '/test/allAssignCaseData',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getAssignBatchBackTest: {
        url: '/test/assignBatchBack',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getAssignHistoryIdentifyTest: {
        url: '/test/assignHistoryIdentify',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getAssignHistorySyncTest: {
        url: '/test/assignHistorySync',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postAsyncRepayReportTest: {
        url: '/test/asyncRepayReport',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseLoanFixTest: {
        url: '/test/caseLoanFix',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseRefreshTest: {
        url: '/test/caseRefresh',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getCaseRepaySyncTest: {
        url: '/test/caseRepaySync',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postContactTest: {
        url: '/test/contact',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postContactPreHeatTest: {
        url: '/test/contactPreHeat',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getDataVisualDetailTest: {
        url: '/test/dataVisualDetail',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getDecodeTest: {
        url: '/test/decode',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getEncodeTest: {
        url: '/test/encode',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getExpireBatchDealTest: {
        url: '/test/expireBatchDeal',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postFixLogTest: {
        url: '/test/fix-log',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getFlushCityDataTest: {
        url: '/test/flushCityData',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getOperatorVisualDetailTest: {
        url: '/test/operatorVisualDetail',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getRedisBatchDelTest: {
        url: '/test/redisBatchDel',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getRedisDelTest: {
        url: '/test/redisDel',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getRepayBatchDealTest: {
        url: '/test/repayBatchDeal',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getRepayHistorySyncTest: {
        url: '/test/repayHistorySync',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postResetTest: {
        url: '/test/reset',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postSearchTest: {
        url: '/test/search',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postSendReportTest: {
        url: '/test/sendReport',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getSyncPrivilegesTest: {
        url: '/test/syncPrivileges',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postTranferTest: {
        url: '/test/tranfer',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postTranferCasesTest: {
        url: '/test/tranferCases',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postTranferFixTest: {
        url: '/test/tranferFix',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getverifyCode: {
        url: '/verifyCode',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOrdersWork: {
        url: '/work-orders',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOrders_dispatchWork: {
        url: '/work-orders/_dispatch',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOrders_finishWork: {
        url: '/work-orders/_finish',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOrders_forwardWork: {
        url: '/work-orders/_forward',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOrders_searchWork: {
        url: '/work-orders/_search',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOrders_submitWork: {
        url: '/work-orders/_submit',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    postOrders_updateWork: {
        url: '/work-orders/_update',
        method: 'post',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getOrdersOptionsWork: {
        url: '/work-orders/options',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getOrdersIdWork: {
        url: '/work-orders/{id}',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
    getClaimQueryClaimtype: {
        url: '/{claimtype}/claimQuery',
        method: 'get',
        baseURL: '/api.u51.com/collection-service/api',
    },
};
