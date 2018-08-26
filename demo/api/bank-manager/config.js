// bank-manager config

module.exports = {
    postBankproxyRespCodeBankproxyApiAddRespCodeV1: {
        url: '/v1/bankproxy/respCode/bankproxy/api/addRespCode',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBankproxyRespCodeBankproxyApiAddRespCodeMappingV1: {
        url: '/v1/bankproxy/respCode/bankproxy/api/addRespCodeMapping',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBankproxyRespCodeBankproxyApiUpdateRespCodeV1: {
        url: '/v1/bankproxy/respCode/bankproxy/api/updateRespCode',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBankproxyRespCodeBankproxyApiUpdateRespCodeMappingV1: {
        url: '/v1/bankproxy/respCode/bankproxy/api/updateRespCodeMapping',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBankproxyToolsBankproxyApiDecryptV1: {
        url: '/v1/bankproxy/tools/bankproxy/api/decrypt',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBankproxyToolsBankproxyApiResendTmcMsgV1: {
        url: '/v1/bankproxy/tools/bankproxy/api/resendTmcMsg',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBankproxyToolsSyncOrderStatusV1: {
        url: '/v1/bankproxy/tools/syncOrderStatus',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankAccountAaV1: {
        url: '/v1/bjbank/account/aa',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBjbankAccountAccountInfoFromDepositoryV1: {
        url: '/v1/bjbank/account/accountInfoFromDepository',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankAccountCheckBindCardV1: {
        url: '/v1/bjbank/account/checkBindCard',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankAccountCheckInvestDataV1: {
        url: '/v1/bjbank/account/checkInvestData',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankAccountCheckProdAccountV1: {
        url: '/v1/bjbank/account/checkProdAccount',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankAccountCheckRepayDataV1: {
        url: '/v1/bjbank/account/checkRepayData',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBjbankAccountModifyAccountInfoV1: {
        url: '/v1/bjbank/account/modifyAccountInfo',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankOrderQueryOrderByOrderNoOrgTxCodehtmOrderOrgOrderNoV1: {
        url: '/v1/bjbank/order/queryOrderByOrderNo/{orgTxCode}.htm/order/{orgOrderNo}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankOrderOrgTxCodehtmOrderOrgOutOrderNoV1: {
        url: '/v1/bjbank/order/{orgTxCode}.htm/order/{orgOutOrderNo}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getBjbankWithdrawFindByOutOrderNoV1: {
        url: '/v1/bjbank/withdraw/findByOutOrderNo',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postBjbankFileToUnitedSftpV1: {
        url: '/v1/bjbankFileToUnitedSftp',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postCheckV1: {
        url: '/v1/check',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getCheckErrorV1: {
        url: '/v1/checkError',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getCheckSummaryV1: {
        url: '/v1/checkSummary',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postCompenAcceptFailTxCodeV1: {
        url: '/v1/compen/acceptFail/{txCode}',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getCompenFailResultRecordListV1: {
        url: '/v1/compen/failResultRecordList',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postCompenFailToRetryTxCodeV1: {
        url: '/v1/compen/failToRetry/{txCode}',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getCompenUnKnowResultRecordListV1: {
        url: '/v1/compen/unKnowResultRecordList',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postCompenTxCodehtmOrdersV1: {
        url: '/v1/compen/{txCode}.htm/orders',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postCompenTxCodehtmReSendResultToTmcV1: {
        url: '/v1/compen/{txCode}.htm/reSendResultToTmc',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postCompenTxCodehtmRepushToAsynMqV1: {
        url: '/v1/compen/{txCode}.htm/repushToAsynMq',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getEnumListBankProxyTxCodesV1: {
        url: '/v1/enum/list/bankProxyTxCodes',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getEnumListFirstSubjectTypeEnumV1: {
        url: '/v1/enum/list/firstSubjectTypeEnum',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getEnumListOrderFileTypeV1: {
        url: '/v1/enum/list/orderFileType',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getEnumListSecondSubjectTypeEnumV1: {
        url: '/v1/enum/list/secondSubjectTypeEnum',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getEnumListTxCodeEnumQueryAvailableV1: {
        url: '/v1/enum/list/txCodeEnumQueryAvailable',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getExportFileNamesV1: {
        url: '/v1/export/fileNames',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postExportToSftpV1: {
        url: '/v1/export/toSftp',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getExportOrderFileV1: {
        url: '/v1/exportOrderFile',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getFileDownloadDirListV1: {
        url: '/v1/file/download/dirList',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getFileDownloadFromBankSftpV1: {
        url: '/v1/file/download/fromBankSftp',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptAccountBalancePlatcustV1: {
        url: '/v1/opt/accountBalance/{platcust}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptAccountBalanceDetailV1: {
        url: '/v1/opt/accountBalanceDetail',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptAccountInfoV1: {
        url: '/v1/opt/accountInfo',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptAesDecryptV1: {
        url: '/v1/opt/aesDecrypt',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptAesEncryptV1: {
        url: '/v1/opt/aesEncrypt',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptFundChangeV1: {
        url: '/v1/opt/fundChange',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptOrderStatusOrgOrderNoV1: {
        url: '/v1/opt/orderStatus/{orgOrderNo}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptProductBalanceV1: {
        url: '/v1/opt/productBalance',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptProductInfoProdIdV1: {
        url: '/v1/opt/productInfo/{prodId}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptProductInvestmentByPlatCustDetailV1: {
        url: '/v1/opt/productInvestmentByPlatCustDetail',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptProductInvestmentDetailV1: {
        url: '/v1/opt/productInvestmentDetail',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptQueryPlatformAccountBalanceDetailV1: {
        url: '/v1/opt/queryPlatformAccountBalanceDetail',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptQueryPlatformBankCardBalanceDetailCompanyAccountTypeEnumV1: {
        url: '/v1/opt/queryPlatformBankCardBalanceDetail/{companyAccountTypeEnum}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptRechargeStatusOrgOrderNoV1: {
        url: '/v1/opt/rechargeStatus/{orgOrderNo}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptReloadRespCodeV1: {
        url: '/v1/opt/reloadRespCode',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postOptRepayDetailV1: {
        url: '/v1/opt/repayDetail',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptServiceTokenV1: {
        url: '/v1/opt/serviceToken',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getOptOrgTxCodehtmPositionOrgOutOrderNoV1: {
        url: '/v1/opt/{orgTxCode}.htm/position/{orgOutOrderNo}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getPayTradePaymentQueryOrderNoV1: {
        url: '/v1/pay-trade/paymentQuery/{orderNo}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    getPayTradeQueryCollectOrderOrderNoV1: {
        url: '/v1/pay-trade/queryCollectOrder/{orderNo}',
        method: 'get',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postPlatformPlatformRechargeV1: {
        url: '/v1/platform/platformRecharge',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postPlatformPlatformWithdrawV1: {
        url: '/v1/platform/platformWithdraw',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
    postPlatformTransferToPlatformV1: {
        url: '/v1/platform/transferToPlatform',
        method: 'post',
        baseURL: '/api.u51.com/bank-manager/api',
    },
};
