import BankManager from './api/bank-manager/api';


/**
* 增加错误码    /v1/bankproxy/respCode/bankproxy/api/addRespCode
*
*/
BankManager.postBankproxyRespCodeBankproxyApiAddRespCodeV1({
    data: {
        request: {
    "code": "(string) 代码",
    "message": "(string) 文案",
    "state": "(boolean) 状态（是否生效）"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 增加错误码映射    /v1/bankproxy/respCode/bankproxy/api/addRespCodeMapping
*
*/
BankManager.postBankproxyRespCodeBankproxyApiAddRespCodeMappingV1({
    data: {
        request: {
    "bankCode": "(string) 银行代码",
    "platformCode": "(string) 平台",
    "proxyCode": "(string) 存管代码",
    "state": "(boolean) 状态（是否生效）"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改错误码    /v1/bankproxy/respCode/bankproxy/api/updateRespCode
*
*/
BankManager.postBankproxyRespCodeBankproxyApiUpdateRespCodeV1({
    data: {
        request: {
    "code": "(string) 代码",
    "message": "(string) 文案",
    "state": "(boolean) 状态（是否生效）"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改错误码映射    /v1/bankproxy/respCode/bankproxy/api/updateRespCodeMapping
*
*/
BankManager.postBankproxyRespCodeBankproxyApiUpdateRespCodeMappingV1({
    data: {
        request: {
    "bankCode": "(string) 银行代码",
    "platformCode": "(string) 平台",
    "proxyCode": "(string) 存管代码",
    "state": "(boolean) 状态（是否生效）"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 解密    /v1/bankproxy/tools/bankproxy/api/decrypt
*
*/
BankManager.postBankproxyToolsBankproxyApiDecryptV1({
    data: {
        request: {
    "text": "(string) 密文"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 重发Tmc消息    /v1/bankproxy/tools/bankproxy/api/resendTmcMsg
*
*/
BankManager.postBankproxyToolsBankproxyApiResendTmcMsgV1({
    data: {
        request: {
    "ids": "(string) ID列表，逗号分隔"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 同步订单状态    /v1/bankproxy/tools/syncOrderStatus
*
*/
BankManager.postBankproxyToolsSyncOrderStatusV1({
    data: {
        request: {
    "orderNos": "(string) 订单号列表，逗号分隔",
    "platformCode": "(string) 平台编号",
    "txCode": "(string) 业务类型"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* .    /v1/bjbank/account/aa
*
*/
BankManager.getBjbankAccountAaV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询本地账户信息(包含绑卡).    /v1/bjbank/account/accountInfoFromDepository
*
*/
BankManager.postBjbankAccountAccountInfoFromDepositoryV1({
    data: {
        input: {
    "idCode": "(string) 身份证号",
    "platcust": "(string) 北京银行客户编号"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 比对本地和银行绑卡记录.    /v1/bjbank/account/checkBindCard
*
*/
BankManager.getBjbankAccountCheckBindCardV1({
    params: {
        beginDate: 'undefined', //beginDate
        endDate: 'undefined', //endDate
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 比对本地和银行投标记录.    /v1/bjbank/account/checkInvestData
*
*/
BankManager.getBjbankAccountCheckInvestDataV1({
    params: {
        beginDate: 'undefined', //beginDate
        endDate: 'undefined', //endDate
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 比对本地和银行标的账户记录.    /v1/bjbank/account/checkProdAccount
*
*/
BankManager.getBjbankAccountCheckProdAccountV1({
    params: {
        autoId: 'undefined', //autoId
        modify: 'undefined', //modify
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 比对本地和银行标的还款记录.    /v1/bjbank/account/checkRepayData
*
*/
BankManager.getBjbankAccountCheckRepayDataV1({
    params: {
        beginDate: 'undefined', //beginDate
        endDate: 'undefined', //endDate
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新本地账户信息(姓名、身份证).    /v1/bjbank/account/modifyAccountInfo
*
*/
BankManager.postBjbankAccountModifyAccountInfoV1({
    data: {
        input: {
    "idCode": "(string) 证件号码",
    "name": "(string) 姓名",
    "platcust": "(string) 北京银行客户编号"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 订单查询.    /v1/bjbank/order/queryOrderByOrderNo/{orgTxCode}.htm/order/{orgOrderNo}
*
*/
BankManager.getBjbankOrderQueryOrderByOrderNoOrgTxCodehtmOrderOrgOrderNoV1({
    params: {
        orgTxCode: 'undefined', //原交易代码
        orgOrderNo: 'undefined', //原交易订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 订单查询.    /v1/bjbank/order/{orgTxCode}.htm/order/{orgOutOrderNo}
*
*/
BankManager.getBjbankOrderOrgTxCodehtmOrderOrgOutOrderNoV1({
    params: {
        orgTxCode: 'undefined', //原交易代码
        orgOutOrderNo: 'undefined', //原交易订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 通过outOrderNo查询    /v1/bjbank/withdraw/findByOutOrderNo
*
*/
BankManager.getBjbankWithdrawFindByOutOrderNoV1({
    params: {
        outOrderNo: 'undefined', //outOrderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 复制银行sftp文件到统一对账中心sftp.    /v1/bjbankFileToUnitedSftp
*
*/
BankManager.postBjbankFileToUnitedSftpV1({
    params: {
        date: 'undefined', //date
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 指定日期区间对账    /v1/check
*
*/
BankManager.postCheckV1({
    params: {
        startDate: 'undefined', //startDate
        endDate: 'undefined', //endDate
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 对账差错明细    /v1/checkError
*
*/
BankManager.getCheckErrorV1({
    params: {
        batchNo: 'undefined', //batchNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 对账记录汇总    /v1/checkSummary
*
*/
BankManager.getCheckSummaryV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 失败交易-由于业务方逻辑错，将订单置为失败并通知业务方..    /v1/compen/acceptFail/{txCode}
*
*/
BankManager.postCompenAcceptFailTxCodeV1({
    params: {
        txCode: 'undefined', //交易代码
        outOrderNo: 'undefined', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询失败状态的订单列表（该类型交易不允许失败）.    /v1/compen/failResultRecordList
*
*/
BankManager.getCompenFailResultRecordListV1({
    params: {
        startDateTime: 'undefined', //开始时间
        endDateTime: 'undefined', //结束时间
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 失败交易重试.    /v1/compen/failToRetry/{txCode}
*
*/
BankManager.postCompenFailToRetryTxCodeV1({
    params: {
        txCode: 'undefined', //交易代码
        outOrderNo: 'undefined', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询未明确状态的订单列表.    /v1/compen/unKnowResultRecordList
*
*/
BankManager.getCompenUnKnowResultRecordListV1({
    params: {
        startDateTime: 'undefined', //开始时间
        endDateTime: 'undefined', //结束时间
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据[outOrderNo]同步交易状态.    /v1/compen/{txCode}.htm/orders
*
*/
BankManager.postCompenTxCodehtmOrdersV1({
    params: {
        txCode: 'undefined', //交易代码
        outOrderNo: 'undefined', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据[outOrderNo]重新发送业务结果到tmc通知业务方.    /v1/compen/{txCode}.htm/reSendResultToTmc
*
*/
BankManager.postCompenTxCodehtmReSendResultToTmcV1({
    params: {
        txCode: 'undefined', //交易代码
        outOrderNo: 'undefined', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 本地同步转异步交易重新加入MQ.    /v1/compen/{txCode}.htm/repushToAsynMq
*
*/
BankManager.postCompenTxCodehtmRepushToAsynMqV1({
    params: {
        txCode: 'undefined', //交易代码
        outOrderNo: 'undefined', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* bankProxyTxCodes    /v1/enum/list/bankProxyTxCodes
*
*/
BankManager.getEnumListBankProxyTxCodesV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* firstSubjectTypeEnum    /v1/enum/list/firstSubjectTypeEnum
*
*/
BankManager.getEnumListFirstSubjectTypeEnumV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* orderFileType    /v1/enum/list/orderFileType
*
*/
BankManager.getEnumListOrderFileTypeV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* secondSubjectTypeEnum    /v1/enum/list/secondSubjectTypeEnum
*
*/
BankManager.getEnumListSecondSubjectTypeEnumV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* txCodeEnum    /v1/enum/list/txCodeEnumQueryAvailable
*
*/
BankManager.getEnumListTxCodeEnumQueryAvailableV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 导出数据文件名列表    /v1/export/fileNames
*
*/
BankManager.getExportFileNamesV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 导出数据到统一对账中心sftp    /v1/export/toSftp
*
*/
BankManager.postExportToSftpV1({
    params: {
        startDate: 'undefined', //startDate
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 对账文件导出    /v1/exportOrderFile
*
*/
BankManager.getExportOrderFileV1({
    params: {
        date: 'undefined', //date
        type: 'undefined', //type
        timeField: 'undefined', //timeField
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 目录列表    /v1/file/download/dirList
*
*/
BankManager.getFileDownloadDirListV1({
    params: {
        path: 'undefined', //path
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从银行sftp下载    /v1/file/download/fromBankSftp
*
*/
BankManager.getFileDownloadFromBankSftpV1({
    params: {
        fileName: 'undefined', //fileName
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 账户余额查询.    /v1/opt/accountBalance/{platcust}
*
*/
BankManager.getOptAccountBalancePlatcustV1({
    params: {
        platcust: 'undefined', //客户编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 个人、企业账户余额明细查询.    /v1/opt/accountBalanceDetail
*
*/
BankManager.postOptAccountBalanceDetailV1({
    data: {
        input: {
    "platCustTypeEnum": "(string) 客户类型",
    "platcust": "(string) 北京银行客户编号"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 账户信息查询.    /v1/opt/accountInfo
*
*/
BankManager.postOptAccountInfoV1({
    data: {
        input: {
    "idCode": "(string) 身份证号(仅供个人使用)",
    "orgName": "(string) 企业名称(仅供企业用户使用)",
    "platcust": "(string) 北京银行客户编号"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 小工具[解密]    /v1/opt/aesDecrypt
*
*/
BankManager.postOptAesDecryptV1({
    params: {
        text: 'undefined', //text
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 小工具[加密]    /v1/opt/aesEncrypt
*
*/
BankManager.postOptAesEncryptV1({
    params: {
        text: 'undefined', //text
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 资金变动明细查询.    /v1/opt/fundChange
*
*/
BankManager.postOptFundChangeV1({
    data: {
        input: {
    "endDate": "(string) 查询结束时间",
    "platcust": "(string) 客户编号",
    "startDate": "(string) 查询起始时间"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 订单状态查询.    /v1/opt/orderStatus/{orgOrderNo}
*
*/
BankManager.getOptOrderStatusOrgOrderNoV1({
    params: {
        orgOrderNo: 'undefined', //原交易订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 标的账户余额查询.    /v1/opt/productBalance
*
*/
BankManager.postOptProductBalanceV1({
    data: {
        input: {
    "prodId": "(string) 产品编号"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 标的信息查询.    /v1/opt/productInfo/{prodId}
*
*/
BankManager.getOptProductInfoProdIdV1({
    params: {
        prodId: 'undefined', //标的编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据标的、投资人查询投资明细.    /v1/opt/productInvestmentByPlatCustDetail
*
*/
BankManager.postOptProductInvestmentByPlatCustDetailV1({
    data: {
        input: {
    "platcust": "(string) 投资人客户号",
    "prodId": "(string) 产品编号"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 标的投资明细查询.    /v1/opt/productInvestmentDetail
*
*/
BankManager.postOptProductInvestmentDetailV1({
    data: {
        input: {
    "prodId": "(string) 产品编号"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [虚户]平台账户余额明细查询.    /v1/opt/queryPlatformAccountBalanceDetail
*
*/
BankManager.getOptQueryPlatformAccountBalanceDetailV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* [实户]平台对公账户余额查询.    /v1/opt/queryPlatformBankCardBalanceDetail/{companyAccountTypeEnum}
*
*/
BankManager.getOptQueryPlatformBankCardBalanceDetailCompanyAccountTypeEnumV1({
    params: {
        companyAccountTypeEnum: 'undefined', //账户类型
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 充值订单状态查询.    /v1/opt/rechargeStatus/{orgOrderNo}
*
*/
BankManager.getOptRechargeStatusOrgOrderNoV1({
    params: {
        orgOrderNo: 'undefined', //原交易订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 重新加载响应码字段到内存.    /v1/opt/reloadRespCode
*
*/
BankManager.getOptReloadRespCodeV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 还款明细查询.    /v1/opt/repayDetail
*
*/
BankManager.postOptRepayDetailV1({
    data: {
        input: {
    "endDate": "(string) 查询结束时间,格式yyyyMMdd;对应结果中`实际还款时间`",
    "platcust": "(string) 账户编号",
    "prodId": "(string) 产品编号",
    "startDate": "(string) 查询起始时间,格式yyyyMMdd;对应结果中`实际还款时间`",
    "typeEnum": "(string) 查询类型"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取serviceToken.    /v1/opt/serviceToken
*
*/
BankManager.getOptServiceTokenV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 对于分表交易,根据OutOrderNo查询所在分表.    /v1/opt/{orgTxCode}.htm/position/{orgOutOrderNo}
*
*/
BankManager.getOptOrgTxCodehtmPositionOrgOutOrderNoV1({
    params: {
        orgTxCode: 'undefined', //原交易代码
        orgOutOrderNo: 'undefined', //原交易订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 出金查询    /v1/pay-trade/paymentQuery/{orderNo}
*
*/
BankManager.getPayTradePaymentQueryOrderNoV1({
    params: {
        orderNo: 'undefined', //orderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 入金查询    /v1/pay-trade/queryCollectOrder/{orderNo}
*
*/
BankManager.getPayTradeQueryCollectOrderOrderNoV1({
    params: {
        orderNo: 'undefined', //orderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 平台充值.    /v1/platform/platformRecharge
*
*/
BankManager.postPlatformPlatformRechargeV1({
    data: {
        input: {
    "amount": "(number) 金额",
    "outOrderNo": "(string) 交易流水号",
    "rechargeTypeEnum": "(string) undefined"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 平台取现.    /v1/platform/platformWithdraw
*
*/
BankManager.postPlatformPlatformWithdrawV1({
    data: {
        input: {
    "amount": "(number) 金额",
    "outOrderNo": "(string) 交易流水号",
    "withdrawTypeEnum": "(string) undefined"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 平台不同账户转账.    /v1/platform/transferToPlatform
*
*/
BankManager.postPlatformTransferToPlatformV1({
    data: {
        input: {
    "amt": "(number) 转账金额",
    "destAccountEnum": "(string) 目标账户",
    "outOrderNo": "(string) 交易流水号",
    "sourceAccountEnum": "(string) 来源账户"
}, //input
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
