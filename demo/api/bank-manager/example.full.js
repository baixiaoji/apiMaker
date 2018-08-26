import BankManager from './api/bank-manager/api';


/**
 * 增加错误码    /v1/bankproxy/respCode/bankproxy/api/addRespCode
 *
 * @params      { Object   }      request                       request
 */
BankManager.postBankproxyRespCodeBankproxyApiAddRespCodeV1({
    data: {
        code: '(string) 代码',
        message: '(string) 文案',
        state: '(boolean) 状态（是否生效）',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 增加错误码映射    /v1/bankproxy/respCode/bankproxy/api/addRespCodeMapping
 *
 * @params      { Object   }      request                       request
 */
BankManager.postBankproxyRespCodeBankproxyApiAddRespCodeMappingV1({
    data: {
        bankCode: '(string) 银行代码',
        platformCode: '(string) 平台',
        proxyCode: '(string) 存管代码',
        state: '(boolean) 状态（是否生效）',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 修改错误码    /v1/bankproxy/respCode/bankproxy/api/updateRespCode
 *
 * @params      { Object   }      request                       request
 */
BankManager.postBankproxyRespCodeBankproxyApiUpdateRespCodeV1({
    data: {
        code: '(string) 代码',
        message: '(string) 文案',
        state: '(boolean) 状态（是否生效）',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 修改错误码映射    /v1/bankproxy/respCode/bankproxy/api/updateRespCodeMapping
 *
 * @params      { Object   }      request                       request
 */
BankManager.postBankproxyRespCodeBankproxyApiUpdateRespCodeMappingV1({
    data: {
        bankCode: '(string) 银行代码',
        platformCode: '(string) 平台',
        proxyCode: '(string) 存管代码',
        state: '(boolean) 状态（是否生效）',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 解密    /v1/bankproxy/tools/bankproxy/api/decrypt
 *
 * @params      { Object   }      request                       request
 */
BankManager.postBankproxyToolsBankproxyApiDecryptV1({
    data: {
        text: '(string) 密文',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "text": "(string) 明文"
}
*/



/**
 * 重发Tmc消息    /v1/bankproxy/tools/bankproxy/api/resendTmcMsg
 *
 * @params      { Object   }      request                       request
 */
BankManager.postBankproxyToolsBankproxyApiResendTmcMsgV1({
    data: {
        ids: '(string) ID列表，逗号分隔',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 同步订单状态    /v1/bankproxy/tools/syncOrderStatus
 *
 * @params      { Object   }      request                       request
 */
BankManager.postBankproxyToolsSyncOrderStatusV1({
    data: {
        orderNos: '(string) 订单号列表，逗号分隔',
        platformCode: '(string) 平台编号',
        txCode: '(string) 业务类型',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



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
/*
* 返回结果
"(string) undefined"
*/



/**
 * 查询本地账户信息(包含绑卡).    /v1/bjbank/account/accountInfoFromDepository
 *
 * @params      { Object   }      input                         input
 */
BankManager.postBjbankAccountAccountInfoFromDepositoryV1({
    data: {
        idCode: '(string) 身份证号',
        platcust: '(string) 北京银行客户编号',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "authedAmount": "(string) 授权金额",
    "authedLimittime": "(string) 授权期限",
    "bankLicense": "(string) 社会信用代码证",
    "businessLicense": "(string) 营业执照编号",
    "cancelFlg": "(string) 是否销户 0-未销户  1-已销户",
    "cardInfo": [
        {
            "cardNo": "(string) 银行卡号",
            "mobile": "(string) 预留手机号",
            "payCode": "(string) 鉴权渠道编号",
            "type": "(string) 绑卡类型0-四要素 1-三要素"
        }
    ],
    "cusType": "(string) 客户类型（1:个人客户，2:企业客户)",
    "eflg": "(string) 电子账户开户标记  0-未开通 1-已开通",
    "freezeFlg": "(string) 是否冻结 0-未冻结  1-已冻结",
    "idCode": "(string) 身份证号码",
    "mobile": "(string) 注册手机号",
    "name": "(string) 姓名",
    "orgName": "(string) 企业名称",
    "platcust": "(string) 平台客户号",
    "pwdFlg": "(string) 是否设置交易密码 0-未设置  1-已设置"
}
*/



/**
 * 比对本地和银行绑卡记录.    /v1/bjbank/account/checkBindCard
 *
 * @params      { String   }      beginDate                     beginDate
 * @params      { String   }      endDate                       endDate
 */
BankManager.getBjbankAccountCheckBindCardV1({
    params: {
        beginDate: 'undefined',
        endDate: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 比对本地和银行投标记录.    /v1/bjbank/account/checkInvestData
 *
 * @params      { String   }      beginDate                     beginDate
 * @params      { String   }      endDate                       endDate
 */
BankManager.getBjbankAccountCheckInvestDataV1({
    params: {
        beginDate: 'undefined',
        endDate: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 比对本地和银行标的账户记录.    /v1/bjbank/account/checkProdAccount
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Boolean  }      modify                        modify
 */
BankManager.getBjbankAccountCheckProdAccountV1({
    params: {
        autoId: 'undefined',
        modify: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 比对本地和银行标的还款记录.    /v1/bjbank/account/checkRepayData
 *
 * @params      { String   }      beginDate                     beginDate
 * @params      { String   }      endDate                       endDate
 */
BankManager.getBjbankAccountCheckRepayDataV1({
    params: {
        beginDate: 'undefined',
        endDate: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 更新本地账户信息(姓名、身份证).    /v1/bjbank/account/modifyAccountInfo
 *
 * @params      { Object   }      input                         input
 */
BankManager.postBjbankAccountModifyAccountInfoV1({
    data: {
        idCode: '(string) 证件号码',
        name: '(string) 姓名',
        platcust: '(string) 北京银行客户编号',
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



/**
 * 订单查询.    /v1/bjbank/order/queryOrderByOrderNo/{orgTxCode}.htm/order/{orgOrderNo}
 *
 * @params      { String   }      orgTxCode                     原交易代码
 * @params      { String   }      orgOrderNo                    原交易订单号
 */
BankManager.getBjbankOrderQueryOrderByOrderNoOrgTxCodehtmOrderOrgOrderNoV1({
    params: {
        orgTxCode: 'undefined',
        orgOrderNo: 'undefined',
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
 * 订单查询.    /v1/bjbank/order/{orgTxCode}.htm/order/{orgOutOrderNo}
 *
 * @params      { String   }      orgTxCode                     原交易代码
 * @params      { String   }      orgOutOrderNo                 原交易订单号
 */
BankManager.getBjbankOrderOrgTxCodehtmOrderOrgOutOrderNoV1({
    params: {
        orgTxCode: 'undefined',
        orgOutOrderNo: 'undefined',
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
 * 通过outOrderNo查询    /v1/bjbank/withdraw/findByOutOrderNo
 *
 * @params      { String   }      outOrderNo                    outOrderNo
 */
BankManager.getBjbankWithdrawFindByOutOrderNoV1({
    params: {
        outOrderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "advanceAmt": "(number) undefined",
    "amt": "(number) undefined",
    "autoId": "(integer) undefined",
    "bankId": "(string) undefined",
    "batchNo": "(string) undefined",
    "busiType": "(string) undefined",
    "cardNo": "(string) undefined",
    "cityCode": "(string) undefined",
    "clientProperty": "(string) undefined",
    "createTime": "(string) undefined",
    "feeAmt": "(number) undefined",
    "gmt51_create": "(string) undefined",
    "gmt51_modify": "(string) undefined",
    "hostReqSerialNo": "(string) undefined",
    "isAdvance": "(string) undefined",
    "lastModifyTime": "(string) undefined",
    "name": "(string) undefined",
    "openBranch": "(string) undefined",
    "orderNo": "(string) undefined",
    "orderStatus": "(string) undefined",
    "outOrderNo": "(string) undefined",
    "payCode": "(string) undefined",
    "payFinishDate": "(string) undefined",
    "payFinishTime": "(string) undefined",
    "payOrderNo": "(string) undefined",
    "platCust": "(string) undefined",
    "retCode": "(string) undefined",
    "retMsg": "(string) undefined",
    "state": "(integer) undefined",
    "transDate": "(string) undefined",
    "transTime": "(string) undefined",
    "withdrawType": "(string) undefined"
}
*/



/**
 * 复制银行sftp文件到统一对账中心sftp.    /v1/bjbankFileToUnitedSftp
 *
 * @params      { String   }      date                          date
 */
BankManager.postBjbankFileToUnitedSftpV1({
    params: {
        date: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 指定日期区间对账    /v1/check
 *
 * @params      { String   }      startDate                     startDate
 * @params      { String   }      endDate                       endDate
 */
BankManager.postCheckV1({
    params: {
        startDate: 'undefined',
        endDate: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 对账差错明细    /v1/checkError
 *
 * @params      { String   }      batchNo                       batchNo
 * @params      { Integer  }      page                          page
 * @params      { Integer  }      size                          size
 */
BankManager.getCheckErrorV1({
    params: {
        batchNo: 'undefined',
        page: '1',
        size: '100',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "content": [
        {
            "autoId": "(integer) undefined",
            "batchNo": "(string) undefined",
            "checkBuisDown": "(string) undefined",
            "checkBuisDownAmount": "(number) undefined",
            "checkBuisDownAutoId": "(integer) undefined",
            "checkBuisUp": "(string) undefined",
            "checkBuisUpAmount": "(number) undefined",
            "checkBuisUpAutoId": "(integer) undefined",
            "checkDate": "(string) undefined",
            "createTime": "(string) undefined",
            "errorType": "(string) undefined",
            "gmt51_create": "(string) undefined",
            "gmt51_modify": "(string) undefined",
            "handleDateTime": "(string) undefined",
            "handleDesc": "(string) undefined",
            "handleState": "(string) undefined",
            "handleType": "(string) undefined",
            "handler": "(string) undefined",
            "lastModifyTime": "(string) undefined",
            "seqNo": "(string) undefined"
        }
    ],
    "first": "(boolean) undefined",
    "last": "(boolean) undefined",
    "number": "(integer) undefined",
    "numberOfElements": "(integer) undefined",
    "size": "(integer) undefined",
    "sort": {},
    "totalElements": "(integer) undefined",
    "totalPages": "(integer) undefined"
}
*/



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
/*
* 返回结果
[
    {
        "autoId": "(integer) undefined",
        "batchNo": "(string) undefined",
        "checkBuisDown": "(string) undefined",
        "checkBuisDownAmount": "(number) undefined",
        "checkBuisDownCount": "(integer) undefined",
        "checkBuisUp": "(string) undefined",
        "checkBuisUpAmount": "(number) undefined",
        "checkBuisUpCount": "(integer) undefined",
        "checkDate": "(string) undefined",
        "checkErrTxAmount": "(number) undefined",
        "checkErrTxCount": "(integer) undefined",
        "checkState": "(string) undefined",
        "createTime": "(string) undefined",
        "gmt51_create": "(string) undefined",
        "gmt51_modify": "(string) undefined",
        "handleTxCount": "(integer) undefined",
        "lastModifyTime": "(string) undefined"
    }
]
*/



/**
 * 失败交易-由于业务方逻辑错，将订单置为失败并通知业务方..    /v1/compen/acceptFail/{txCode}
 *
 * @params      { String   }      txCode                        交易代码
 * @params      { String   }      outOrderNo                    订单号
 */
BankManager.postCompenAcceptFailTxCodeV1({
    params: {
        txCode: 'undefined',
        outOrderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 查询失败状态的订单列表（该类型交易不允许失败）.    /v1/compen/failResultRecordList
 *
 * @params      { String   }      txCode                        交易代码
 * @params      { String   }      startDateTime                 开始时间
 * @params      { String   }      endDateTime                   结束时间
 */
BankManager.getCompenFailResultRecordListV1({
    params: {
        txCode: 'undefined',
        startDateTime: 'undefined',
        endDateTime: 'undefined',
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
 * 失败交易重试.    /v1/compen/failToRetry/{txCode}
 *
 * @params      { String   }      txCode                        交易代码
 * @params      { String   }      outOrderNo                    订单号
 */
BankManager.postCompenFailToRetryTxCodeV1({
    params: {
        txCode: 'undefined',
        outOrderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 查询未明确状态的订单列表.    /v1/compen/unKnowResultRecordList
 *
 * @params      { String   }      txCode                        交易代码
 * @params      { String   }      startDateTime                 开始时间
 * @params      { String   }      endDateTime                   结束时间
 */
BankManager.getCompenUnKnowResultRecordListV1({
    params: {
        txCode: 'undefined',
        startDateTime: 'undefined',
        endDateTime: 'undefined',
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
 * 根据[outOrderNo]同步交易状态.    /v1/compen/{txCode}.htm/orders
 *
 * @params      { String   }      txCode                        交易代码
 * @params      { String   }      outOrderNo                    订单号
 * @params      { String   }      options                       -U:强制执行
 */
BankManager.postCompenTxCodehtmOrdersV1({
    params: {
        txCode: 'undefined',
        outOrderNo: 'undefined',
        options: 'undefined',
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
 * 根据[outOrderNo]重新发送业务结果到tmc通知业务方.    /v1/compen/{txCode}.htm/reSendResultToTmc
 *
 * @params      { String   }      txCode                        交易代码
 * @params      { String   }      outOrderNo                    订单号
 */
BankManager.postCompenTxCodehtmReSendResultToTmcV1({
    params: {
        txCode: 'undefined',
        outOrderNo: 'undefined',
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
 * 本地同步转异步交易重新加入MQ.    /v1/compen/{txCode}.htm/repushToAsynMq
 *
 * @params      { String   }      txCode                        交易代码
 * @params      { String   }      outOrderNo                    订单号
 */
BankManager.postCompenTxCodehtmRepushToAsynMqV1({
    params: {
        txCode: 'undefined',
        outOrderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



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
/*
* 返回结果
{}
*/



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
/*
* 返回结果
{}
*/



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
/*
* 返回结果
{}
*/



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
/*
* 返回结果
{}
*/



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
/*
* 返回结果
{}
*/



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
/*
* 返回结果
[]
*/



/**
 * 导出数据到统一对账中心sftp    /v1/export/toSftp
 *
 * @params      { String   }      startDate                     startDate
 * @params      { String   }      fileName                      fileName
 */
BankManager.postExportToSftpV1({
    params: {
        startDate: 'undefined',
        fileName: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 对账文件导出    /v1/exportOrderFile
 *
 * @params      { String   }      date                          date
 * @params      { String   }      type                          type
 * @params      { String   }      timeField                     timeField
 */
BankManager.getExportOrderFileV1({
    params: {
        date: 'undefined',
        type: 'undefined',
        timeField: 'undefined',
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
 * 目录列表    /v1/file/download/dirList
 *
 * @params      { String   }      path                          path
 */
BankManager.getFileDownloadDirListV1({
    params: {
        path: 'undefined',
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
 * 从银行sftp下载    /v1/file/download/fromBankSftp
 *
 * @params      { String   }      fileName                      fileName
 */
BankManager.getFileDownloadFromBankSftpV1({
    params: {
        fileName: 'undefined',
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
 * 账户余额查询.    /v1/opt/accountBalance/{platcust}
 *
 * @params      { String   }      platcust                      客户编号
 */
BankManager.getOptAccountBalancePlatcustV1({
    params: {
        platcust: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "balance": "(number) 余额"
}
*/



/**
 * 个人、企业账户余额明细查询.    /v1/opt/accountBalanceDetail
 *
 * @params      { Object   }      input                         input
 */
BankManager.postOptAccountBalanceDetailV1({
    data: {
        platCustTypeEnum: '(string) 客户类型',
        platcust: '(string) 北京银行客户编号',
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
            "fbalance": "(number) undefined",
            "nbalance": "(number) undefined",
            "subSubject": "(string) 子科目",
            "subject": "(string) 科目",
            "tbalance": "(number) undefined"
        }
    ]
}
*/



/**
 * 账户信息查询.    /v1/opt/accountInfo
 *
 * @params      { Object   }      input                         input
 */
BankManager.postOptAccountInfoV1({
    data: {
        idCode: '(string) 身份证号(仅供个人使用)',
        orgName: '(string) 企业名称(仅供企业用户使用)',
        platcust: '(string) 北京银行客户编号',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "authedAmount": "(string) 授权金额",
    "authedLimittime": "(string) 授权期限",
    "bankLicense": "(string) 社会信用代码证",
    "businessLicense": "(string) 营业执照编号",
    "cancelFlg": "(string) 是否销户 0-未销户  1-已销户",
    "cardInfo": [
        {
            "cardNo": "(string) 银行卡号",
            "mobile": "(string) 预留手机号",
            "payCode": "(string) 鉴权渠道编号",
            "type": "(string) 绑卡类型0-四要素 1-三要素"
        }
    ],
    "cusType": "(string) 客户类型（1:个人客户，2:企业客户)",
    "eflg": "(string) 电子账户开户标记  0-未开通 1-已开通",
    "freezeFlg": "(string) 是否冻结 0-未冻结  1-已冻结",
    "idCode": "(string) 身份证号码",
    "mobile": "(string) 注册手机号",
    "name": "(string) 姓名",
    "orgName": "(string) 企业名称",
    "platcust": "(string) 平台客户号",
    "pwdFlg": "(string) 是否设置交易密码 0-未设置  1-已设置"
}
*/



/**
 * 小工具[解密]    /v1/opt/aesDecrypt
 *
 * @params      { String   }      text                          text
 */
BankManager.postOptAesDecryptV1({
    params: {
        text: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 小工具[加密]    /v1/opt/aesEncrypt
 *
 * @params      { String   }      text                          text
 */
BankManager.postOptAesEncryptV1({
    params: {
        text: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 资金变动明细查询.    /v1/opt/fundChange
 *
 * @params      { Object   }      input                         input
 */
BankManager.postOptFundChangeV1({
    data: {
        endDate: '(string) 查询结束时间',
        platcust: '(string) 客户编号',
        startDate: '(string) 查询起始时间',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "dataList": [
        {
            "amt": "(string) 交易金额",
            "amtType": "(string) 资金变动类型 0是资金进，1是资金出",
            "oppoPlatcust": "(string) 对手客户编号",
            "orderNo": "(string) 原交易流水号",
            "outOrderNo": "(string) 原业务方交易流水号",
            "platcust": "(string) 平台客户编号",
            "remark": "(string) 交易描述",
            "transDate": "(string) 交易日期",
            "transName": "(string) 交易类型",
            "transTime": "(string) 交易时间",
            "txCodeEnum": "(string) 内部业务类型"
        }
    ]
}
*/



/**
 * 订单状态查询.    /v1/opt/orderStatus/{orgOrderNo}
 *
 * @params      { String   }      orgOrderNo                    原交易订单号
 */
BankManager.getOptOrderStatusOrgOrderNoV1({
    params: {
        orgOrderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "orgOutOrderNo": "(string) 原交易流水号",
    "returnCode": "(string) 交易响应码-第三方原始响应码",
    "returnMsg": "(string) 交易响应描述-第三方原始响应描述",
    "statusEnum": "(string) 订单状态"
}
*/



/**
 * 标的账户余额查询.    /v1/opt/productBalance
 *
 * @params      { Object   }      input                         input
 */
BankManager.postOptProductBalanceV1({
    data: {
        prodId: '(string) 产品编号',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "balance": "(number) 余额"
}
*/



/**
 * 标的信息查询.    /v1/opt/productInfo/{prodId}
 *
 * @params      { String   }      prodId                        标的编号
 */
BankManager.getOptProductInfoProdIdV1({
    params: {
        prodId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "chargeOffAutoEnum": "(string) 是否自动出账",
    "compensationList": [
        {
            "compensationTypeEnum": "(string) 代偿（委托）类型",
            "platcust": "(string) 代偿账户编号"
        }
    ],
    "istYear": "(number) 年利率",
    "prodAccount": "(string) 标的账户",
    "prodId": "(string) 产品id",
    "prodName": "(string) 标的名称",
    "productStateEnum": "(string) 标的状态",
    "remainLimit": "(number) 剩余份额",
    "saledLimit": "(number) 已卖份额",
    "totalLimit": "(number) 总份额"
}
*/



/**
 * 根据标的、投资人查询投资明细.    /v1/opt/productInvestmentByPlatCustDetail
 *
 * @params      { Object   }      input                         input
 */
BankManager.postOptProductInvestmentByPlatCustDetailV1({
    data: {
        platcust: '(string) 投资人客户号',
        prodId: '(string) 产品编号',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "dataList": [
        {
            "amtType": "(string) 进出明细",
            "platcust": "(string) 平台客户编号",
            "transDate": "(string) 交易日期",
            "transTime": "(string) 交易时间",
            "vol": "(number) 持有份额"
        }
    ]
}
*/



/**
 * 标的投资明细查询.    /v1/opt/productInvestmentDetail
 *
 * @params      { Object   }      input                         input
 */
BankManager.postOptProductInvestmentDetailV1({
    data: {
        prodId: '(string) 产品编号',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "dataList": [
        {
            "amtType": "(string) 进出明细",
            "platcust": "(string) 平台客户编号",
            "transDate": "(string) 交易日期",
            "transTime": "(string) 交易时间",
            "vol": "(number) 持有份额"
        }
    ]
}
*/



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
/*
* 返回结果
[
    {
        "fbalance": "(number) undefined",
        "nbalance": "(number) undefined",
        "subSubject": "(string) 子科目",
        "subject": "(string) 科目",
        "tbalance": "(number) undefined"
    }
]
*/



/**
 * [实户]平台对公账户余额查询.    /v1/opt/queryPlatformBankCardBalanceDetail/{companyAccountTypeEnum}
 *
 * @params      { String   }      companyAccountTypeEnum                           账户类型
 */
BankManager.getOptQueryPlatformBankCardBalanceDetailCompanyAccountTypeEnumV1({
    params: {
        companyAccountTypeEnum: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "acctNameCH": "(string) 账户名称",
    "balance": "(number) 余额",
    "openBank": "(string) 开户行号"
}
*/



/**
 * 充值订单状态查询.    /v1/opt/rechargeStatus/{orgOrderNo}
 *
 * @params      { String   }      orgOrderNo                    原交易订单号
 */
BankManager.getOptRechargeStatusOrgOrderNoV1({
    params: {
        orgOrderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "orgOutOrderNo": "(string) 查询的订单编号",
    "retCode": "(string) 响应码",
    "retMsg": "(string) 响应描述",
    "statusEnum": "(string) 订单状态"
}
*/



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
/*
* 返回结果
"(string) undefined"
*/



/**
 * 还款明细查询.    /v1/opt/repayDetail
 *
 * @params      { Object   }      input                         input
 */
BankManager.postOptRepayDetailV1({
    data: {
        endDate: '(string) 查询结束时间,格式yyyyMMdd;对应结果中`实际还款时间`',
        platcust: '(string) 账户编号',
        prodId: '(string) 产品编号',
        startDate: '(string) 查询起始时间,格式yyyyMMdd;对应结果中`实际还款时间`',
        typeEnum: '(string) 查询类型',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "dataList": [
        {
            "prodId": "(string) 标的编号",
            "realRepayAmt": "(string) 实际还款金额",
            "realRepayDate": "(string) 实际还款时间",
            "repayAmt": "(string) 计划还款金额",
            "repayDate": "(string) 计划还款时间",
            "repayNum": "(string) 还款期数",
            "status": "(string) 状态"
        }
    ]
}
*/



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
/*
* 返回结果
"(string) undefined"
*/



/**
 * 对于分表交易,根据OutOrderNo查询所在分表.    /v1/opt/{orgTxCode}.htm/position/{orgOutOrderNo}
 *
 * @params      { String   }      orgTxCode                     原交易代码
 * @params      { String   }      orgOutOrderNo                 原交易订单号
 */
BankManager.getOptOrgTxCodehtmPositionOrgOutOrderNoV1({
    params: {
        orgTxCode: 'undefined',
        orgOutOrderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 出金查询    /v1/pay-trade/paymentQuery/{orderNo}
 *
 * @params      { String   }      orderNo                       orderNo
 */
BankManager.getPayTradePaymentQueryOrderNoV1({
    params: {
        orderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "accountName": "(string) undefined",
    "amount": "(number) undefined",
    "bankAccount": "(string) undefined",
    "bankId": "(integer) undefined",
    "channelId": "(integer) undefined",
    "createAt": "(string) undefined",
    "errorMsg": "(string) undefined",
    "gatewayNo": "(string) undefined",
    "idCard": "(string) undefined",
    "memo": "(string) undefined",
    "orderNo": "(string) undefined",
    "phone": "(string) undefined",
    "productNo": "(string) undefined",
    "retCode": "(string) 返回码",
    "retMsg": "(string) 返回消息",
    "serialNo": "(string) undefined",
    "status": "(string) undefined",
    "updatedAt": "(string) undefined"
}
*/



/**
 * 入金查询    /v1/pay-trade/queryCollectOrder/{orderNo}
 *
 * @params      { String   }      orderNo                       orderNo
 */
BankManager.getPayTradeQueryCollectOrderOrderNoV1({
    params: {
        orderNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "accountName": "(string) undefined",
    "amount": "(number) undefined",
    "bankAccount": "(string) undefined",
    "bankId": "(integer) undefined",
    "channelExtInfo": "(string) undefined",
    "channelId": "(integer) undefined",
    "createAt": "(string) undefined",
    "errorMsg": "(string) undefined",
    "gatewayNo": "(string) undefined",
    "idCard": "(string) undefined",
    "memo": "(string) undefined",
    "orderNo": "(string) undefined",
    "pchannelId": "(integer) undefined",
    "phone": "(string) undefined",
    "productNo": "(string) undefined",
    "retCode": "(string) 返回码",
    "retMsg": "(string) 返回消息",
    "serialNo": "(string) undefined",
    "status": "(string) undefined",
    "updatedAt": "(string) undefined"
}
*/



/**
 * 平台充值.    /v1/platform/platformRecharge
 *
 * @params      { Object   }      input                         input
 */
BankManager.postPlatformPlatformRechargeV1({
    data: {
        amount: '(number) 金额',
        outOrderNo: '(string) 交易流水号',
        rechargeTypeEnum: '(string) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "busiStateEnum": "(string) 交易状态",
    "outOrderNo": "(string) 交易流水号",
    "processDate": "(string) 系统处理日期",
    "queryId": "(string) 系统处理日期",
    "retCode": "(string) 响应代码",
    "retMsg": "(string) 响应描述",
    "tid": "(string) tid",
    "txCodeEnum": "(string) 交易代码"
}
*/



/**
 * 平台取现.    /v1/platform/platformWithdraw
 *
 * @params      { Object   }      input                         input
 */
BankManager.postPlatformPlatformWithdrawV1({
    data: {
        amount: '(number) 金额',
        outOrderNo: '(string) 交易流水号',
        withdrawTypeEnum: '(string) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "busiStateEnum": "(string) 交易状态",
    "outOrderNo": "(string) 交易流水号",
    "processDate": "(string) 系统处理日期",
    "queryId": "(string) 系统处理日期",
    "retCode": "(string) 响应代码",
    "retMsg": "(string) 响应描述",
    "tid": "(string) tid",
    "txCodeEnum": "(string) 交易代码"
}
*/



/**
 * 平台不同账户转账.    /v1/platform/transferToPlatform
 *
 * @params      { Object   }      input                         input
 */
BankManager.postPlatformTransferToPlatformV1({
    data: {
        amt: '(number) 转账金额',
        destAccountEnum: '(string) 目标账户',
        outOrderNo: '(string) 交易流水号',
        sourceAccountEnum: '(string) 来源账户',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "busiStateEnum": "(string) 交易状态",
    "outOrderNo": "(string) 交易流水号",
    "retCode": "(string) 响应代码",
    "retMsg": "(string) 响应描述",
    "tid": "(string) tid",
    "txCodeEnum": "(string) 交易代码"
}
*/



