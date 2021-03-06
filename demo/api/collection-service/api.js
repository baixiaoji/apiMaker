const axios = require('../axios');
const config = require('./config');

module.exports = {
    getReceiptAtAccounts: param => axios(Object.assign(config.getReceiptAtAccounts, param)),
    postApproveApplyFlow: param => axios(Object.assign(config.postApproveApplyFlow, param)),
    postCreateApplyFlowApplyFlow: param => axios(Object.assign(config.postCreateApplyFlowApplyFlow, param)),
    postGetApplyFlowListApplyFlow: param => axios(Object.assign(config.postGetApplyFlowListApplyFlow, param)),
    getGetApplyUsersApplyFlow: param => axios(Object.assign(config.getGetApplyUsersApplyFlow, param)),
    getGetApproveNodeListApplyFlow: param => axios(Object.assign(config.getGetApproveNodeListApplyFlow, param)),
    getGetCaseApplyFlowRecordsApplyFlow: param => axios(Object.assign(config.getGetCaseApplyFlowRecordsApplyFlow, param)),
    getProofDownloadFidArbexpress: param => axios(Object.assign(config.getProofDownloadFidArbexpress, param)),
    postThirdArbexpress: param => axios(Object.assign(config.postThirdArbexpress, param)),
    postCaseRegistArbitrate: param => axios(Object.assign(config.postCaseRegistArbitrate, param)),
    getCaseRegistAllArbitrate: param => axios(Object.assign(config.getCaseRegistAllArbitrate, param)),
    postExportArbitrate: param => axios(Object.assign(config.postExportArbitrate, param)),
    postPreAuditArbitrate: param => axios(Object.assign(config.postPreAuditArbitrate, param)),
    getPreAuditAllArbitrate: param => axios(Object.assign(config.getPreAuditAllArbitrate, param)),
    getProofDownloadFidArbitrate: param => axios(Object.assign(config.getProofDownloadFidArbitrate, param)),
    getProofPreviewArbitrateIdArbitrate: param => axios(Object.assign(config.getProofPreviewArbitrateIdArbitrate, param)),
    postProofUpdateArbitrate: param => axios(Object.assign(config.postProofUpdateArbitrate, param)),
    postProofUploadArbitrateIdArbitrate: param => axios(Object.assign(config.postProofUploadArbitrateIdArbitrate, param)),
    getProofGetArbitrate: param => axios(Object.assign(config.getProofGetArbitrate, param)),
    postQueryArbitrate: param => axios(Object.assign(config.postQueryArbitrate, param)),
    postRevokeArbitrate: param => axios(Object.assign(config.postRevokeArbitrate, param)),
    getStopOutShowArbitrate: param => axios(Object.assign(config.getStopOutShowArbitrate, param)),
    postStopOutSubmitArbitrate: param => axios(Object.assign(config.postStopOutSubmitArbitrate, param)),
    postAutoAssignShowAssign: param => axios(Object.assign(config.postAutoAssignShowAssign, param)),
    getGetAllAssignRatioAssign: param => axios(Object.assign(config.getGetAllAssignRatioAssign, param)),
    postInnerAssignAssign: param => axios(Object.assign(config.postInnerAssignAssign, param)),
    postInnerAutoAssignAssign: param => axios(Object.assign(config.postInnerAutoAssignAssign, param)),
    postSyncAssignResultAssign: param => axios(Object.assign(config.postSyncAssignResultAssign, param)),
    postUpdateAssignRatioAssign: param => axios(Object.assign(config.postUpdateAssignRatioAssign, param)),
    getClaimCaseSearchCases: param => axios(Object.assign(config.getClaimCaseSearchCases, param)),
    postSearchCases: param => axios(Object.assign(config.postSearchCases, param)),
    getTempSearchCases: param => axios(Object.assign(config.getTempSearchCases, param)),
    getDetailClaim: param => axios(Object.assign(config.getDetailClaim, param)),
    postHandleClaim: param => axios(Object.assign(config.postHandleClaim, param)),
    postAddCompany: param => axios(Object.assign(config.postAddCompany, param)),
    getGetAllCompany: param => axios(Object.assign(config.getGetAllCompany, param)),
    postUpdateCompany: param => axios(Object.assign(config.postUpdateCompany, param)),
    getDeleteConfig: param => axios(Object.assign(config.getDeleteConfig, param)),
    getGetAllConfig: param => axios(Object.assign(config.getGetAllConfig, param)),
    getGetSystemSettingConfig: param => axios(Object.assign(config.getGetSystemSettingConfig, param)),
    postUpdateSystemSettingConfig: param => axios(Object.assign(config.postUpdateSystemSettingConfig, param)),
    postUpsertConfig: param => axios(Object.assign(config.postUpsertConfig, param)),
    postCaseIdCache_delContacts: param => axios(Object.assign(config.postCaseIdCache_delContacts, param)),
    getBaseInfoCustomer: param => axios(Object.assign(config.getBaseInfoCustomer, param)),
    postCallAddCallRecordCustomer: param => axios(Object.assign(config.postCallAddCallRecordCustomer, param)),
    postCallMobileStrategyCustomer: param => axios(Object.assign(config.postCallMobileStrategyCustomer, param)),
    getCaseBillInfoCustomer: param => axios(Object.assign(config.getCaseBillInfoCustomer, param)),
    getCaseCaseWithholdCustomer: param => axios(Object.assign(config.getCaseCaseWithholdCustomer, param)),
    getCaseCaseIdAccessLogsCustomer: param => axios(Object.assign(config.getCaseCaseIdAccessLogsCustomer, param)),
    getCaseCaseIdApplyLogsCustomer: param => axios(Object.assign(config.getCaseCaseIdApplyLogsCustomer, param)),
    getCaseCaseIdAssignLogsCustomer: param => axios(Object.assign(config.getCaseCaseIdAssignLogsCustomer, param)),
    getCaseCaseIdBillsCustomer: param => axios(Object.assign(config.getCaseCaseIdBillsCustomer, param)),
    getCaseCaseIdPendAmountCustomer: param => axios(Object.assign(config.getCaseCaseIdPendAmountCustomer, param)),
    getCaseCaseIdTaobaoAddressCustomer: param => axios(Object.assign(config.getCaseCaseIdTaobaoAddressCustomer, param)),
    postContactAddCustomer: param => axios(Object.assign(config.postContactAddCustomer, param)),
    postContactAddMobileBlackCustomer: param => axios(Object.assign(config.postContactAddMobileBlackCustomer, param)),
    postContactGetMobileBlackListCustomer: param => axios(Object.assign(config.postContactGetMobileBlackListCustomer, param)),
    postContactRemarkCustomer: param => axios(Object.assign(config.postContactRemarkCustomer, param)),
    postContactRemoveMobileBlackCustomer: param => axios(Object.assign(config.postContactRemoveMobileBlackCustomer, param)),
    getContactListCustomer: param => axios(Object.assign(config.getContactListCustomer, param)),
    getGeneralDecodeCustomer: param => axios(Object.assign(config.getGeneralDecodeCustomer, param)),
    getImageFidCustomer: param => axios(Object.assign(config.getImageFidCustomer, param)),
    getImage2FidCustomer: param => axios(Object.assign(config.getImage2FidCustomer, param)),
    getPhoneListCustomer: param => axios(Object.assign(config.getPhoneListCustomer, param)),
    getRecordsCustomer: param => axios(Object.assign(config.getRecordsCustomer, param)),
    postRecordsAddCustomer: param => axios(Object.assign(config.postRecordsAddCustomer, param)),
    getCompanyStatisticDataVisual: param => axios(Object.assign(config.getCompanyStatisticDataVisual, param)),
    getGlobalStatisticDataVisual: param => axios(Object.assign(config.getGlobalStatisticDataVisual, param)),
    postOperatorQueryDataVisual: param => axios(Object.assign(config.postOperatorQueryDataVisual, param)),
    postOutsourceQueryDataVisual: param => axios(Object.assign(config.postOutsourceQueryDataVisual, param)),
    getDispatchedContactListDebtTransfer: param => axios(Object.assign(config.getDispatchedContactListDebtTransfer, param)),
    postDispatchedSearchDebtTransfer: param => axios(Object.assign(config.postDispatchedSearchDebtTransfer, param)),
    postInitialBatchRemoveDebtTransfer: param => axios(Object.assign(config.postInitialBatchRemoveDebtTransfer, param)),
    postInitialDebtApplyDebtTransfer: param => axios(Object.assign(config.postInitialDebtApplyDebtTransfer, param)),
    postInitialDebtInitiateDebtTransfer: param => axios(Object.assign(config.postInitialDebtInitiateDebtTransfer, param)),
    postInitialSearchDebtTransfer: param => axios(Object.assign(config.postInitialSearchDebtTransfer, param)),
    postQueueAmountCalDebtTransfer: param => axios(Object.assign(config.postQueueAmountCalDebtTransfer, param)),
    postQueueBackDebtTransfer: param => axios(Object.assign(config.postQueueBackDebtTransfer, param)),
    getQueueBackBuyerDebtTransfer: param => axios(Object.assign(config.getQueueBackBuyerDebtTransfer, param)),
    postQueueCanRepayTagDebtTransfer: param => axios(Object.assign(config.postQueueCanRepayTagDebtTransfer, param)),
    getQueueCirculateHistoryDebtTransfer: param => axios(Object.assign(config.getQueueCirculateHistoryDebtTransfer, param)),
    postQueueDebtOutDebtTransfer: param => axios(Object.assign(config.postQueueDebtOutDebtTransfer, param)),
    postQueueDispatchDebtTransfer: param => axios(Object.assign(config.postQueueDispatchDebtTransfer, param)),
    getQueueLinkCaseDebtTransfer: param => axios(Object.assign(config.getQueueLinkCaseDebtTransfer, param)),
    getQueueOperateHistoryDebtTransfer: param => axios(Object.assign(config.getQueueOperateHistoryDebtTransfer, param)),
    postQueueSearchDebtTransfer: param => axios(Object.assign(config.postQueueSearchDebtTransfer, param)),
    getiam: param => axios(Object.assign(config.getiam, param)),
    postlogin: param => axios(Object.assign(config.postlogin, param)),
    postlogout: param => axios(Object.assign(config.postlogout, param)),
    getDelayCancelMark: param => axios(Object.assign(config.getDelayCancelMark, param)),
    postDelayMarkMark: param => axios(Object.assign(config.postDelayMarkMark, param)),
    postCustomizeQueryNotices: param => axios(Object.assign(config.postCustomizeQueryNotices, param)),
    postCustomizeSendNotices: param => axios(Object.assign(config.postCustomizeSendNotices, param)),
    postPullNotices: param => axios(Object.assign(config.postPullNotices, param)),
    postReadNotices: param => axios(Object.assign(config.postReadNotices, param)),
    getStatisticNotices: param => axios(Object.assign(config.getStatisticNotices, param)),
    getClaimOrderQueryOfflineclaim: param => axios(Object.assign(config.getClaimOrderQueryOfflineclaim, param)),
    postAddOperatorOperator: param => axios(Object.assign(config.postAddOperatorOperator, param)),
    getGetCompanyOperatorOperator: param => axios(Object.assign(config.getGetCompanyOperatorOperator, param)),
    getGetRoleOperator: param => axios(Object.assign(config.getGetRoleOperator, param)),
    getGetSpecialistCompanyOperator: param => axios(Object.assign(config.getGetSpecialistCompanyOperator, param)),
    getGetSystemOperatorOperator: param => axios(Object.assign(config.getGetSystemOperatorOperator, param)),
    postModifyPwdOperator: param => axios(Object.assign(config.postModifyPwdOperator, param)),
    postUpdateOperatorOperator: param => axios(Object.assign(config.postUpdateOperatorOperator, param)),
    getoptions: param => axios(Object.assign(config.getoptions, param)),
    getArbitrateBatchOutsource: param => axios(Object.assign(config.getArbitrateBatchOutsource, param)),
    postBatchHandleOutsource: param => axios(Object.assign(config.postBatchHandleOutsource, param)),
    getBatchHandleTemplateOutsource: param => axios(Object.assign(config.getBatchHandleTemplateOutsource, param)),
    postTransferOutsource: param => axios(Object.assign(config.postTransferOutsource, param)),
    postArbitrateBatchHandleOutsrouce: param => axios(Object.assign(config.postArbitrateBatchHandleOutsrouce, param)),
    postAddRolePrivilege: param => axios(Object.assign(config.postAddRolePrivilege, param)),
    getGetAllPrivilege: param => axios(Object.assign(config.getGetAllPrivilege, param)),
    getGetByCompanyPrivilege: param => axios(Object.assign(config.getGetByCompanyPrivilege, param)),
    getGetRolePrivilege: param => axios(Object.assign(config.getGetRolePrivilege, param)),
    postQueryPrivilegesPrivilege: param => axios(Object.assign(config.postQueryPrivilegesPrivilege, param)),
    postUpdateCompanyPrivilege: param => axios(Object.assign(config.postUpdateCompanyPrivilege, param)),
    postUpdateRolePrivilegesPrivilege: param => axios(Object.assign(config.postUpdateRolePrivilegesPrivilege, param)),
    getLastReceipt: param => axios(Object.assign(config.getLastReceipt, param)),
    postActualTimeAssignReportReport: param => axios(Object.assign(config.postActualTimeAssignReportReport, param)),
    getAgreementReport: param => axios(Object.assign(config.getAgreementReport, param)),
    postAssignReport: param => axios(Object.assign(config.postAssignReport, param)),
    postClaimReport: param => axios(Object.assign(config.postClaimReport, param)),
    getRepayDownloadReport: param => axios(Object.assign(config.getRepayDownloadReport, param)),
    getRepayQueryReport: param => axios(Object.assign(config.getRepayQueryReport, param)),
    postRepaySyncReport: param => axios(Object.assign(config.postRepaySyncReport, param)),
    postEditSmsTemplateSms: param => axios(Object.assign(config.postEditSmsTemplateSms, param)),
    postGetCaseSmsRecordsSms: param => axios(Object.assign(config.postGetCaseSmsRecordsSms, param)),
    postGetSmsCostListSms: param => axios(Object.assign(config.postGetSmsCostListSms, param)),
    postGetSmsTemplateSms: param => axios(Object.assign(config.postGetSmsTemplateSms, param)),
    postReportSms: param => axios(Object.assign(config.postReportSms, param)),
    postSendSmsSms: param => axios(Object.assign(config.postSendSmsSms, param)),
    postSmsContentPreviewSms: param => axios(Object.assign(config.postSmsContentPreviewSms, param)),
    postSmsTemplateSwitchSms: param => axios(Object.assign(config.postSmsTemplateSwitchSms, param)),
    postUpdateSmsCostSms: param => axios(Object.assign(config.postUpdateSmsCostSms, param)),
    postInsertTag: param => axios(Object.assign(config.postInsertTag, param)),
    postModifyTag: param => axios(Object.assign(config.postModifyTag, param)),
    getQueryTag: param => axios(Object.assign(config.getQueryTag, param)),
    getAllAssignCaseDataTest: param => axios(Object.assign(config.getAllAssignCaseDataTest, param)),
    getAssignBatchBackTest: param => axios(Object.assign(config.getAssignBatchBackTest, param)),
    getAssignHistoryIdentifyTest: param => axios(Object.assign(config.getAssignHistoryIdentifyTest, param)),
    getAssignHistorySyncTest: param => axios(Object.assign(config.getAssignHistorySyncTest, param)),
    postAsyncRepayReportTest: param => axios(Object.assign(config.postAsyncRepayReportTest, param)),
    getCaseLoanFixTest: param => axios(Object.assign(config.getCaseLoanFixTest, param)),
    getCaseRefreshTest: param => axios(Object.assign(config.getCaseRefreshTest, param)),
    getCaseRepaySyncTest: param => axios(Object.assign(config.getCaseRepaySyncTest, param)),
    postContactTest: param => axios(Object.assign(config.postContactTest, param)),
    postContactPreHeatTest: param => axios(Object.assign(config.postContactPreHeatTest, param)),
    getDataVisualDetailTest: param => axios(Object.assign(config.getDataVisualDetailTest, param)),
    getDecodeTest: param => axios(Object.assign(config.getDecodeTest, param)),
    getEncodeTest: param => axios(Object.assign(config.getEncodeTest, param)),
    getExpireBatchDealTest: param => axios(Object.assign(config.getExpireBatchDealTest, param)),
    postFixLogTest: param => axios(Object.assign(config.postFixLogTest, param)),
    getFlushCityDataTest: param => axios(Object.assign(config.getFlushCityDataTest, param)),
    getOperatorVisualDetailTest: param => axios(Object.assign(config.getOperatorVisualDetailTest, param)),
    getRedisBatchDelTest: param => axios(Object.assign(config.getRedisBatchDelTest, param)),
    getRedisDelTest: param => axios(Object.assign(config.getRedisDelTest, param)),
    getRepayBatchDealTest: param => axios(Object.assign(config.getRepayBatchDealTest, param)),
    getRepayHistorySyncTest: param => axios(Object.assign(config.getRepayHistorySyncTest, param)),
    postResetTest: param => axios(Object.assign(config.postResetTest, param)),
    postSearchTest: param => axios(Object.assign(config.postSearchTest, param)),
    postSendReportTest: param => axios(Object.assign(config.postSendReportTest, param)),
    getSyncPrivilegesTest: param => axios(Object.assign(config.getSyncPrivilegesTest, param)),
    postTranferTest: param => axios(Object.assign(config.postTranferTest, param)),
    postTranferCasesTest: param => axios(Object.assign(config.postTranferCasesTest, param)),
    postTranferFixTest: param => axios(Object.assign(config.postTranferFixTest, param)),
    getverifyCode: param => axios(Object.assign(config.getverifyCode, param)),
    postOrdersWork: param => axios(Object.assign(config.postOrdersWork, param)),
    postOrders_dispatchWork: param => axios(Object.assign(config.postOrders_dispatchWork, param)),
    postOrders_finishWork: param => axios(Object.assign(config.postOrders_finishWork, param)),
    postOrders_forwardWork: param => axios(Object.assign(config.postOrders_forwardWork, param)),
    postOrders_searchWork: param => axios(Object.assign(config.postOrders_searchWork, param)),
    postOrders_submitWork: param => axios(Object.assign(config.postOrders_submitWork, param)),
    postOrders_updateWork: param => axios(Object.assign(config.postOrders_updateWork, param)),
    getOrdersOptionsWork: param => axios(Object.assign(config.getOrdersOptionsWork, param)),
    getOrdersIdWork: param => axios(Object.assign(config.getOrdersIdWork, param)),
    getClaimQueryClaimtype: param => axios(Object.assign(config.getClaimQueryClaimtype, param)),
};
