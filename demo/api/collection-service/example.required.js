import CollectionService from './api/collection-service/api';


/**
* 最近所有对公账号转账时间    /accounts/receipt-at
*
*/
CollectionService.getReceiptAtAccounts({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 审批流审核(支持单个和批量)    /applyFlow/approve
*
*/
CollectionService.postApproveApplyFlow({
    data: {
        param: {
    "applyFlowId": [],
    "applyType": "(string) 申请类型",
    "approveStatus": "(integer) 审核状态-1撤销 1通过 2拒绝",
    "approved": "(boolean) 是否审核通过",
    "caseIds": [],
    "memo": "(string) 操作备注"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 发起审批流程(支持单个和批量)    /applyFlow/createApplyFlow
*
*/
CollectionService.postCreateApplyFlowApplyFlow({
    data: {
        param: {
    "applyReason": "(string) 申请原因",
    "applySubType": "(string) 申请子类型",
    "applyType": "(string) 申请类型",
    "caseIds": [],
    "exchangeCompanyId": "(integer) 调案申请时指定的机构",
    "loanObjectId": "(string) 仲裁订单标的",
    "remark": "(string) 备注"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取审批列表    /applyFlow/getApplyFlowList
*
*/
CollectionService.postGetApplyFlowListApplyFlow({
    data: {
        param: {
    "applyEndDate": "(string) 申请截止时间",
    "applyProcess": "(string) 审核进度",
    "applyStartDate": "(string) 申请开始时间",
    "applyStatus": "(integer) 审批流状态 -1撤销 0待审批 1审批通过 2拒绝",
    "applyType": [],
    "applyUserId": [],
    "companyIdList": [],
    "direction": "(string) undefined",
    "hand": [],
    "offset": "(integer) undefined",
    "pageNumber": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "productGroupId": [],
    "property": "(string) undefined",
    "tabType": "(integer) tab类型 0审核列表 1申请列表"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取案件申请人列表    /applyFlow/getApplyUsers
*
*/
CollectionService.getGetApplyUsersApplyFlow({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 审批进度节点查看    /applyFlow/getApproveNodeList
*
*/
CollectionService.getGetApproveNodeListApplyFlow({
    params: {
        applyFlowId: 'undefined', //applyFlowId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取案件申请审批记录    /applyFlow/getCaseApplyFlowRecords
*
*/
CollectionService.getGetCaseApplyFlowRecordsApplyFlow({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 下载证据链    /arbexpress/proof/download/{fid}
*
*/
CollectionService.getProofDownloadFidArbexpress({
    params: {
        fid: 'undefined', //fid
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 外部获取信息/更新状态接口    /arbexpress/third
*
*/
CollectionService.postThirdArbexpress({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／诉讼订单批量提交立案    /arbitrate/caseRegist
*
*/
CollectionService.postCaseRegistArbitrate({
    data: {
        param: {
    "arbitrateIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／诉讼订单全量提交立案    /arbitrate/caseRegistAll
*
*/
CollectionService.getCaseRegistAllArbitrate({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／诉讼订单列表导出    /arbitrate/export
*
*/
CollectionService.postExportArbitrate({
    data: {
        param: {
    "endAt": "(string) 结束时间",
    "loanObjectId": "(string) 订单标的编号",
    "name": "(string) 姓名",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    },
    "startAt": "(string) 开始时间",
    "status": "(string) 仲裁状态",
    "type": "(string) 停催类型",
    "userId": "(string) 用户ID"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／诉讼订单批量提交预审    /arbitrate/preAudit
*
*/
CollectionService.postPreAuditArbitrate({
    data: {
        param: {
    "arbitrateIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／诉讼订单全量提交预审    /arbitrate/preAuditAll
*
*/
CollectionService.getPreAuditAllArbitrate({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 证据链下载    /arbitrate/proof/download/{fid}
*
*/
CollectionService.getProofDownloadFidArbitrate({
    params: {
        fid: 'undefined', //fid
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 证据链预览    /arbitrate/proof/preview/{arbitrateId}
*
*/
CollectionService.getProofPreviewArbitrateIdArbitrate({
    params: {
        arbitrateId: 'undefined', //arbitrateId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 保存证据链    /arbitrate/proof/update
*
*/
CollectionService.postProofUpdateArbitrate({
    data: {
        applyProof: {
    "proofParams": [
        {
            "fileId": "(string) undefined",
            "type": "(string) undefined",
            "url": "(string) undefined"
        }
    ],
    "arbitrateId": "(integer) undefined"
}, //applyProof
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 上传证据链    /arbitrate/proof/upload/{arbitrateId}
*
*/
CollectionService.postProofUploadArbitrateIdArbitrate({
    params: {
        arbitrateId: 'undefined', //arbitrateId
    },
    data: {
        file: 'undefined', //file
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／诉讼订单证据获取    /arbitrate/proofGet
*
*/
CollectionService.getProofGetArbitrate({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／诉讼订单列表查询    /arbitrate/query
*
*/
CollectionService.postQueryArbitrate({
    data: {
        param: {
    "endAt": "(string) 结束时间",
    "loanObjectId": "(string) 订单标的编号",
    "name": "(string) 姓名",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    },
    "startAt": "(string) 开始时间",
    "status": "(string) 仲裁状态",
    "type": "(string) 停催类型",
    "userId": "(string) 用户ID"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／案件撤回    /arbitrate/revoke
*
*/
CollectionService.postRevokeArbitrate({
    data: {
        arbitrateRevokeParam: {
    "arbitrateId": "(integer) undefined",
    "reason": "(string) undefined",
    "type": "(integer) undefined"
}, //arbitrateRevokeParam
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／停催退出-案件选择    /arbitrate/stopOutShow
*
*/
CollectionService.getStopOutShowArbitrate({
    params: {
        arbitrateId: 'undefined', //arbitrateId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外仲裁／停催退出-案件确认    /arbitrate/stopOutSubmit
*
*/
CollectionService.postStopOutSubmitArbitrate({
    data: {
        stopOutParam: {
    "applyReason": "(string) 申请原因",
    "arbitrateId": "(integer) 仲裁记录编号",
    "caseIds": []
}, //stopOutParam
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 自动分案(展示)    /assign/autoAssignShow
*
*/
CollectionService.postAutoAssignShowAssign({
    data: {
        param: {
    "area": "(string) 案件区域",
    "assignTagCode": "(string) 分案标签",
    "hand": "(integer) 手别",
    "productGroupIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外公司分案权重列表    /assign/getAllAssignRatio
*
*/
CollectionService.getGetAllAssignRatioAssign({
    params: {
        assignTagCode: 'undefined', //assignTagCode
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外机构内部分案    /assign/innerAssign
*
*/
CollectionService.postInnerAssignAssign({
    data: {
        param: {
    "caseIds": [],
    "operatorIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外机构自动分案    /assign/innerAutoAssign
*
*/
CollectionService.postInnerAutoAssignAssign({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 同步分案结果（自动和手动分案）    /assign/syncAssignResult
*
*/
CollectionService.postSyncAssignResultAssign({
    data: {
        param: {
    "expireHandMap": {},
    "paramList": [
        {
            "assignRemark": "(string) 手动分案原因",
            "assignType": "(string) 分案类型",
            "caseIds": [],
            "companyId": "(integer) 委外公司编号",
            "handLev": "(integer) 调整手别"
        }
    ]
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 更新委外公司分案权重    /assign/updateAssignRatio
*
*/
CollectionService.postUpdateAssignRatioAssign({
    params: {
        assignTagCode: 'undefined', //assignTagCode
    },
    data: {
        ratioList: [
    {}
], //ratioList
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* claimSearch    /cases/claimCaseSearch
*
*/
CollectionService.getClaimCaseSearchCases({
    params: {
        userId: 'undefined', //userId
        productGroupId: 'undefined', //productGroupId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* search    /cases/search
*
*/
CollectionService.postSearchCases({
    data: {
        param: {
    "accountStatus": [],
    "applicantId": "(integer) 申请人Id",
    "applyStatus": "(string) 申请状态",
    "applySubType": "(string) 申请子类型",
    "applyType": "(string) 申请类型",
    "approverId": "(integer) 审核人Id",
    "area": [],
    "assignExpireTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "assignTimeA": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "assignTimeB": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "caseId": "(integer) 案件ID",
    "caseStatus": [],
    "caseType": "(string) 案件类型",
    "city": [],
    "collectOffTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "collectResult": [],
    "collectTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "companyId": [],
    "hand": [],
    "idCard": [],
    "lastFollowTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "maxHistoryOverdueDays": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "maxHistoryOverdueStageCount": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "mobile": "(string) 手机号",
    "notInTagCode": [],
    "overdueAmount": {
        "min": "(number) undefined",
        "max": "(number) undefined"
    },
    "overdueDays": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "overdueStageCount": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "ownerId": [],
    "ownerName": "(string) 催收员姓名",
    "productGroupId": [],
    "province": [],
    "submitTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "tagCode": [],
    "totalAmount": {
        "min": "(number) undefined",
        "max": "(number) undefined"
    },
    "userId": "(string) 客户id",
    "userName": "(string) 客户姓名",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    }
}, //param
    },
    headers: {
        profile: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* search    /cases/tempSearch
*
*/
CollectionService.getTempSearchCases({
    params: {
        userId: 'undefined', //userId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 认领详情-历史列表    /claim/detail
*
*/
CollectionService.getDetailClaim({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 认领提交    /claim/handle
*
*/
CollectionService.postHandleClaim({
    data: {
        claimHandleParam: 'undefined', //claimHandleParam
        file: 'undefined', //file
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 新增委外公司    /company/add
*
*/
CollectionService.postAddCompany({
    data: {
        param: {
    "accountNum": "(integer) 账号上限",
    "companyName": "(string) 机构名字",
    "companyStatus": "(string) 机构状态",
    "contactEmail": "(string) 联系人邮箱",
    "contactMobile": "(string) 联系人手机号",
    "contactName": "(string) 联系人名字",
    "id": "(integer) 机构编号",
    "outsourceSpecialist": "(string) 委外专员",
    "province": "(string) 省份",
    "registAddr": "(string) 注册地址",
    "registAt": "(string) 系统注册时间"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取委外公司列表    /company/getAll
*
*/
CollectionService.getGetAllCompany({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 更新委外公司信息    /company/update
*
*/
CollectionService.postUpdateCompany({
    data: {
        param: {
    "accountNum": "(integer) 账号上限",
    "companyName": "(string) 机构名字",
    "companyStatus": "(string) 机构状态",
    "contactEmail": "(string) 联系人邮箱",
    "contactMobile": "(string) 联系人手机号",
    "contactName": "(string) 联系人名字",
    "id": "(integer) 机构编号",
    "outsourceSpecialist": "(string) 委外专员",
    "province": "(string) 省份",
    "registAddr": "(string) 注册地址",
    "registAt": "(string) 系统注册时间"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 删除配置    /config/delete
*
*/
CollectionService.getDeleteConfig({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取配置    /config/getAll
*
*/
CollectionService.getGetAllConfig({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取系统配置    /config/getSystemSetting
*
*/
CollectionService.getGetSystemSettingConfig({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 更改系统配置    /config/updateSystemSetting
*
*/
CollectionService.postUpdateSystemSettingConfig({
    data: {
        content: {
    "extend": "(string) 扩展信息",
    "switchOn": "(boolean) 开关是否开启",
    "type": "(string) 配置标识"
}, //content
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 新增或更改配置    /config/upsert
*
*/
CollectionService.postUpsertConfig({
    data: {
        config: {
    "confDesc": "(string) undefined",
    "confKey": "(string) undefined",
    "confName": "(string) undefined",
    "confType": "(integer) undefined",
    "confVal": "(string) undefined",
    "id": "(integer) undefined"
}, //config
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* delContactCache    /contacts/{caseId}/cache/_del
*
*/
CollectionService.postCaseIdCache_delContacts({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 案件基本信息    /customer/baseInfo
*
*/
CollectionService.getBaseInfoCustomer({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 增加通话记录    /customer/call/addCallRecord
*
*/
CollectionService.postCallAddCallRecordCustomer({
    data: {
        param: {
    "callFile": "(string) 录音文件地址",
    "callResult": "(integer) 呼叫结果 0 初始化 1已接通 2 未接通",
    "caseId": "(integer) 案件编号",
    "connectAt": "(string) 接通时间",
    "contactName": "(string) 联系人名称",
    "contactRelation": "(string) 联系人关系",
    "duration": "(integer) undefined",
    "endAt": "(string) 挂断时间",
    "mobile": "(string) 手机号码",
    "prefix": "(string) 电话前缀",
    "startAt": "(string) 拨打时间"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 呼叫相关线路    /customer/call/mobileStrategy
*
*/
CollectionService.postCallMobileStrategyCustomer({
    data: {
        param: {
    "caseId": "(integer) 案件编号",
    "mobile": "(string) 手机号明文(目前直接使用明文后面考虑废弃)",
    "mobileEncode": "(string) 加密后的手机号，后面明文下掉后使用加密手机号",
    "relation": "(string) 关系"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 账单信息    /customer/case/billInfo
*
*/
CollectionService.getCaseBillInfoCustomer({
    params: {
        caseId: 'undefined', //caseId
        applyId: 'undefined', //applyId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 订单代扣    /customer/case/caseWithhold
*
*/
CollectionService.getCaseCaseWithholdCustomer({
    params: {
        caseId: 'undefined', //caseId
        loanObjectId: 'undefined', //loanObjectId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 最近登录信息    /customer/case/{caseId}/access-logs
*
*/
CollectionService.getCaseCaseIdAccessLogsCustomer({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 流转记录    /customer/case/{caseId}/apply-logs
*
*/
CollectionService.getCaseCaseIdApplyLogsCustomer({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 协议流转    /customer/case/{caseId}/assign-logs
*
*/
CollectionService.getCaseCaseIdAssignLogsCustomer({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 信用卡账单总览接口    /customer/case/{caseId}/bills
*
*/
CollectionService.getCaseCaseIdBillsCustomer({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 挂账金额查询    /customer/case/{caseId}/pendAmount
*
*/
CollectionService.getCaseCaseIdPendAmountCustomer({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 淘宝地址    /customer/case/{caseId}/taobao-address
*
*/
CollectionService.getCaseCaseIdTaobaoAddressCustomer({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* add    /customer/contact/add
*
*/
CollectionService.postContactAddCustomer({
    data: {
        param: {
    "caseId": "(integer) 案件编号",
    "contactName": "(string) 联系人姓名",
    "mobile": "(string) 联系人电话",
    "mobileType": "(string) 是否手动, 1 运营商, 2 手动添加",
    "relation": "(string) 关系",
    "remark": "(string) 备注"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 通讯录黑名单添加    /customer/contact/addMobileBlack
*
*/
CollectionService.postContactAddMobileBlackCustomer({
    data: {
        param: {
    "caseId": "(integer) 案件编号",
    "contactName": "(string) 联系人姓名",
    "limitType": "(integer) 限制方式 0案件维度 1用户维度 2全局",
    "mobile": "(string) 手机号啊",
    "reason": "(string) 添加原因",
    "relation": "(string) 关系"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 通讯录黑名单列表获取    /customer/contact/getMobileBlackList
*
*/
CollectionService.postContactGetMobileBlackListCustomer({
    data: {
        param: {
    "direction": "(string) undefined",
    "limitType": "(integer) 0案件维度 1用户维度",
    "mobile": "(string) 手机号码",
    "offset": "(integer) undefined",
    "pageNumber": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "property": "(string) undefined",
    "userId": "(string) 51Id",
    "userName": "(string) 用户名称"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* remark    /customer/contact/remark
*
*/
CollectionService.postContactRemarkCustomer({
    data: {
        param: {
    "caseId": "(integer) 案件编号",
    "contactName": "(string) 联系人姓名",
    "mobile": "(string) 联系人电话",
    "mobileType": "(string) 是否手动, 1 运营商, 2 手动添加",
    "relation": "(string) 关系",
    "remark": "(string) 备注"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 释放通讯录黑名单    /customer/contact/removeMobileBlack
*
*/
CollectionService.postContactRemoveMobileBlackCustomer({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 通讯录    /customer/contactList
*
*/
CollectionService.getContactListCustomer({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 通用解密(身份证、银行卡等)    /customer/generalDecode
*
*/
CollectionService.getGeneralDecodeCustomer({
    params: {
        encodeContent: 'undefined', //encodeContent
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取小文件系统图片    /customer/image/{fid}
*
*/
CollectionService.getImageFidCustomer({
    params: {
        fid: 'undefined', //fid
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取小文件系统图片2    /customer/image2/{fid}
*
*/
CollectionService.getImage2FidCustomer({
    params: {
        fid: 'undefined', //fid
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 电话页    /customer/phoneList
*
*/
CollectionService.getPhoneListCustomer({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 催记    /customer/records
*
*/
CollectionService.getRecordsCustomer({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 催记添加    /customer/records/add
*
*/
CollectionService.postRecordsAddCustomer({
    data: {
        param: {
    "callRecordId": "(integer) 电话记录编号",
    "callResult": "(string) 电话结果",
    "caseId": "(integer) 案件ID",
    "caseStatus": "(string) 案件状态",
    "collectContent": "(string) 催收内容",
    "followPriority": "(integer) 重点跟进 0 不是  1是",
    "mobile": "(string) 联系人电话",
    "nextFollowTime": "(string) 下次跟进时间",
    "recordType": "(string) 催收方式",
    "relation": "(string) 与本人关系",
    "targetName": "(string) 联系人名称"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 商家端全局统计    /dataVisual/companyStatistic
*
*/
CollectionService.getCompanyStatisticDataVisual({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外端全局统计    /dataVisual/globalStatistic
*
*/
CollectionService.getGlobalStatisticDataVisual({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外端催收员维度明细查询    /dataVisual/operatorQuery
*
*/
CollectionService.postOperatorQueryDataVisual({
    data: {
        param: {
    "assignAt": "(string) 分案批次月份",
    "operatorIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外端数据明细查询    /dataVisual/outsourceQuery
*
*/
CollectionService.postOutsourceQueryDataVisual({
    data: {
        param: {
    "assignAt": "(string) 分案批次月份",
    "caseAmountTag": [],
    "company": [],
    "groupId": [],
    "hand": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 通讯录    /debtTransfer/dispatched/contactList
*
*/
CollectionService.getDispatchedContactListDebtTransfer({
    params: {
        debtId: 'undefined', //debtId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 搜索    /debtTransfer/dispatched/search
*
*/
CollectionService.postDispatchedSearchDebtTransfer({
    data: {
        param: {
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    },
    "userName": "(string) 用户姓名"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 初筛池批量剔除    /debtTransfer/initial/batchRemove
*
*/
CollectionService.postInitialBatchRemoveDebtTransfer({
    data: {
        param: {
    "idList": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 初筛池批量剔除    /debtTransfer/initial/debtApply
*
*/
CollectionService.postInitialDebtApplyDebtTransfer({
    data: {
        param: {
    "assetBatchNo": "(string) 资产批次号",
    "debtTag": "(string) 核销标识",
    "idList": [],
    "latestRepayLower": "(integer) 最近还款间距下限",
    "latestRepayUpper": "(integer) 最近还款间距上限",
    "totalAmountLimit": "(number) 申请总金额上限"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 债转发起    /debtTransfer/initial/debtInitiate
*
*/
CollectionService.postInitialDebtInitiateDebtTransfer({
    data: {
        param: {
    "assetType": "(integer) 资产类型",
    "isAdvanced": "(boolean) 是否安心计划垫付",
    "isAllOverdue": "(boolean) 是否全部到齐",
    "isRiskReversedZero": "(boolean) 风险准备金是否为0",
    "mainPart": "(integer) 主体",
    "maxOverdue": [],
    "overdueOfLastStage": [],
    "totalAmount": "(number) 核销总金额"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 初筛池搜索    /debtTransfer/initial/search
*
*/
CollectionService.postInitialSearchDebtTransfer({
    data: {
        param: {
    "orderId": "(string) undefined",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    },
    "status": "(string) undefined",
    "userId": "(string) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 派发/退包金额计算    /debtTransfer/queue/amountCal
*
*/
CollectionService.postQueueAmountCalDebtTransfer({
    data: {
        param: {
    "buyerId": "(integer) 受让方编号",
    "debtBatchNo": "(string) 核销批次号",
    "source": "(integer) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 核销退包    /debtTransfer/queue/back
*
*/
CollectionService.postQueueBackDebtTransfer({
    params: {
        debtBatchNo: 'undefined', //debtBatchNo
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 退包批次号对应机构获取    /debtTransfer/queue/backBuyer
*
*/
CollectionService.getQueueBackBuyerDebtTransfer({
    data: {
        param: {
    "buyerId": "(integer) 受让方编号",
    "debtBatchNo": "(string) 核销批次号",
    "source": "(integer) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 还款状态标识/指定受让方    /debtTransfer/queue/canRepayTag
*
*/
CollectionService.postQueueCanRepayTagDebtTransfer({
    data: {
        param: {
    "buyerId": "(integer) 受让方",
    "canRepayStatus": "(string) 还款状态",
    "debtBatchNo": "(string) 核销批次号",
    "debtOutExcluded": "(boolean) undefined",
    "debtTagEnum": "(string) 核销标识"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 流转历史查询    /debtTransfer/queue/circulateHistory
*
*/
CollectionService.getQueueCirculateHistoryDebtTransfer({
    params: {
        debtId: 'undefined', //debtId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 债转退出    /debtTransfer/queue/debtOut
*
*/
CollectionService.postQueueDebtOutDebtTransfer({
    data: {
        param: {
    "idList": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 核销派发    /debtTransfer/queue/dispatch
*
*/
CollectionService.postQueueDispatchDebtTransfer({
    data: {
        param: {
    "buyerId": "(integer) 受让方编号",
    "debtBatchNo": "(string) 核销批次号",
    "source": "(integer) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 关联催收案件    /debtTransfer/queue/linkCase
*
*/
CollectionService.getQueueLinkCaseDebtTransfer({
    params: {
        debtId: 'undefined', //debtId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 操作历史查询    /debtTransfer/queue/operateHistory
*
*/
CollectionService.getQueueOperateHistoryDebtTransfer({
    params: {
        debtId: 'undefined', //debtId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 债转队列搜索    /debtTransfer/queue/search
*
*/
CollectionService.postQueueSearchDebtTransfer({
    data: {
        param: {
    "buyerId": "(integer) 受让方编号",
    "canRepayStatus": "(string) 还款状态",
    "debtBatchNo": "(string) 核销批次号",
    "debtOutTag": "(string) 核销退出",
    "orderId": "(string) 订单编号",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    },
    "status": "(string) 核销订单状态",
    "userId": "(string) 51编号",
    "userName": "(string) 用户姓名"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 判断是否需要通过IAM登录    /iam
*
*/
CollectionService.getiam({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 登录    /login
*
*/
CollectionService.postlogin({
    data: {
        loginParam: {
    "account": "(string) undefined",
    "password": "(string) undefined",
    "userId": "(integer) undefined",
    "verifyCode": "(string) undefined"
}, //loginParam
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 退出    /logout
*
*/
CollectionService.postlogout({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外机构内部留案标记取消    /mark/delayCancel
*
*/
CollectionService.getDelayCancelMark({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外机构内部留案标记    /mark/delayMark
*
*/
CollectionService.postDelayMarkMark({
    data: {
        param: {
    "caseIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 查询自定义站内信    /notices/customize/query
*
*/
CollectionService.postCustomizeQueryNotices({
    data: {
        param: {
    "endAt": "(string) 截止时间",
    "keyword": "(string) 关键词,可以为null",
    "noticeSendType": "(string) 发送类型,可以为null",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    },
    "startAt": "(string) 开始时间"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 发送自定义站内信    /notices/customize/send
*
*/
CollectionService.postCustomizeSendNotices({
    data: {
        param: {
    "content": "(string) 站内信内容",
    "noticeSendType": "(string) 站内信发送方式",
    "noticeTime": "(string) 站内信发送时间，可以为null",
    "title": "(string) 站内信标题"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取站内信    /notices/pull
*
*/
CollectionService.postPullNotices({
    data: {
        pullParam: {
    "noticeType": "(string) undefined",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    }
}, //pullParam
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 站内信设为已读    /notices/read
*
*/
CollectionService.postReadNotices({
    data: {
        param: {
    "ids": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 站内信数量统计    /notices/statistic
*
*/
CollectionService.getStatisticNotices({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 根据UserId获取未结清的委外订单    /offlineclaim/claim/orderQuery
*
*/
CollectionService.getClaimOrderQueryOfflineclaim({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 新增人员    /operator/addOperator
*
*/
CollectionService.postAddOperatorOperator({
    data: {
        param: {
    "account": "(string) undefined",
    "assignFactor": "(integer) undefined",
    "companyId": "(integer) undefined",
    "domainAccount": "(string) undefined",
    "extensionTel": "(string) undefined",
    "idCard": "(string) undefined",
    "leaderId": "(integer) undefined",
    "name": "(string) undefined",
    "operatorType": "(string) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 查看人员    /operator/getCompanyOperator
*
*/
CollectionService.getGetCompanyOperatorOperator({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取当前角色信息    /operator/getRole
*
*/
CollectionService.getGetRoleOperator({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 查看专员及管理机构    /operator/getSpecialistCompany
*
*/
CollectionService.getGetSpecialistCompanyOperator({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 查看内部人员    /operator/getSystemOperator
*
*/
CollectionService.getGetSystemOperatorOperator({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 修改密码    /operator/modifyPwd
*
*/
CollectionService.postModifyPwdOperator({
    data: {
        param: {
    "assignFactor": "(integer) undefined",
    "disabled": "(boolean) undefined",
    "domainAccount": "(string) undefined",
    "extensionTel": "(string) undefined",
    "leaderId": "(integer) undefined",
    "newPassWord": "(string) undefined",
    "oldPassWord": "(string) undefined",
    "updateType": "(string) undefined",
    "userId": "(integer) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 更新人员信息    /operator/updateOperator
*
*/
CollectionService.postUpdateOperatorOperator({
    data: {
        param: {
    "assignFactor": "(integer) undefined",
    "disabled": "(boolean) undefined",
    "domainAccount": "(string) undefined",
    "extensionTel": "(string) undefined",
    "leaderId": "(integer) undefined",
    "newPassWord": "(string) undefined",
    "oldPassWord": "(string) undefined",
    "updateType": "(string) undefined",
    "userId": "(integer) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取相关信息    /options
*
*/
CollectionService.getoptions({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* excel文件批量发起委外仲裁／诉讼申请文件模版下载    /outsource/arbitrateBatch
*
*/
CollectionService.getArbitrateBatchOutsource({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* excel批量提交申请    /outsource/batchHandle
*
*/
CollectionService.postBatchHandleOutsource({
    params: {
        applyType: 'undefined', //applyType
        applySubType: 'undefined', //applySubType
        applyReason: 'undefined', //applyReason
        alias: 'undefined', //alias
    },
    data: {
        file: 'undefined', //file
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 委外批量操作导入模板下载    /outsource/batchHandleTemplate
*
*/
CollectionService.getBatchHandleTemplateOutsource({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 债转    /outsource/transfer
*
*/
CollectionService.postTransferOutsource({
    data: {
        param: {
    "alias": "(string) undefined",
    "loanObjectIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* excel批量提交仲裁申请    /outsrouce/arbitrate/batchHandle
*
*/
CollectionService.postArbitrateBatchHandleOutsrouce({
    params: {
        applyReason: 'undefined', //applyReason
    },
    data: {
        file: 'undefined', //file
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 添加角色    /privilege/addRole
*
*/
CollectionService.postAddRolePrivilege({
    data: {
        param: {
    "roleCode": "(string) 角色标识",
    "roleLevel": "(integer) 角色等级",
    "roleName": "(string) 角色名称",
    "roleType": "(string) 角色类型"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取权限列表    /privilege/getAll
*
*/
CollectionService.getGetAllPrivilege({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取委外机构权限列表    /privilege/getByCompany
*
*/
CollectionService.getGetByCompanyPrivilege({
    params: {
        companyId: 'undefined', //companyId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取角色    /privilege/getRole
*
*/
CollectionService.getGetRolePrivilege({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 查询权限列表    /privilege/queryPrivileges
*
*/
CollectionService.postQueryPrivilegesPrivilege({
    data: {
        param: {
    "companyId": "(integer) 公司编号 不输入默认查询全部",
    "roleCode": "(string) 角色编号"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 更新委外机构权限    /privilege/updateCompany
*
*/
CollectionService.postUpdateCompanyPrivilege({
    data: {
        param: {
    "companyId": "(integer) 机构编号",
    "privilegeIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 更新角色权限    /privilege/updateRolePrivileges
*
*/
CollectionService.postUpdateRolePrivilegesPrivilege({
    data: {
        param: {
    "companyId": "(integer) 公司编号",
    "privilegeIds": [],
    "roleCode": "(string) 角色"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 最近转账时间    /receipt/last
*
*/
CollectionService.getLastReceipt({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 实时-分案报表生成    /report/actualTimeAssignReport
*
*/
CollectionService.postActualTimeAssignReportReport({
    data: {
        param: {
    "assignAt": "(string) undefined",
    "productGroupIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 报表-在催    /report/agreement
*
*/
CollectionService.getAgreementReport({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 报表-分案    /report/assign
*
*/
CollectionService.postAssignReport({
    data: {
        param: {
    "assignAt": "(string) undefined",
    "productGroupIds": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 报表-认领    /report/claim
*
*/
CollectionService.postClaimReport({
    data: {
        param: {
    "endAt": "(string) 结束还款时间",
    "productGroupId": "(integer) 产品组编号",
    "startAt": "(string) 开始还款时间"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 报表-回款报表下载    /report/repayDownload
*
*/
CollectionService.getRepayDownloadReport({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 报表-回款报表下载    /report/repayQuery
*
*/
CollectionService.getRepayQueryReport({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 报表-回款报表异步执行    /report/repaySync
*
*/
CollectionService.postRepaySyncReport({
    data: {
        param: {
    "endAt": "(string) undefined",
    "productGroupIds": [],
    "startAt": "(string) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 编辑短信模板    /sms/editSmsTemplate
*
*/
CollectionService.postEditSmsTemplateSms({
    data: {
        param: {
    "modifyType": "(integer) 操作类型 0新增 1编辑",
    "sendTargetType": "(integer) 发送对象 0本人 1第三方",
    "templateGroupName": "(string) 模板类型",
    "templateVOList": [
        {
            "signList": [
                {
                    "processId": "(string) 审批工单",
                    "signName": "(string) 签名名称",
                    "status": "(string) 状态"
                }
            ],
            "switchFlag": "(boolean) 是否启用",
            "templateContent": "(string) 模板内容",
            "templateId": "(string) 短信模板编号 短信发送和预览场景使用",
            "templateName": "(string) 模板名",
            "templateNo": "(integer) 模板序列号 编辑场景或停启用场景使用"
        }
    ],
    "tenant": "(string) 模板租户"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取短信发送记录    /sms/getCaseSmsRecords
*
*/
CollectionService.postGetCaseSmsRecordsSms({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取短信收费标准    /sms/getSmsCostList
*
*/
CollectionService.postGetSmsCostListSms({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取短信发送模板    /sms/getSmsTemplate
*
*/
CollectionService.postGetSmsTemplateSms({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 短信记录报表    /sms/report
*
*/
CollectionService.postReportSms({
    data: {
        param: {
    "endAt": "(string) 截止时间",
    "startAt": "(string) 开始时间"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 发送短信    /sms/sendSms
*
*/
CollectionService.postSendSmsSms({
    data: {
        param: {
    "caseId": "(integer) 案件编号",
    "mobile": "(string) 手机号码",
    "receiveName": "(string) 接收人姓名",
    "receiveRelation": "(string) 接收人与发送人关系",
    "sendTargetType": "(integer) 发送对象 0本人 1第三方",
    "templateId": "(string) 模板编号"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 发送短信    /sms/smsContentPreview
*
*/
CollectionService.postSmsContentPreviewSms({
    data: {
        param: {
    "caseId": "(integer) 案件编号",
    "mobile": "(string) 手机号码",
    "receiveName": "(string) 接收人姓名",
    "receiveRelation": "(string) 接收人与发送人关系",
    "sendTargetType": "(integer) 发送对象 0本人 1第三方",
    "templateId": "(string) 模板编号"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 短信模板开关    /sms/smsTemplateSwitch
*
*/
CollectionService.postSmsTemplateSwitchSms({
    params: {
        templateGroupId: 'undefined', //templateGroupId
        templateNo: 'undefined', //templateNo
        switchFlag: 'undefined', //switchFlag
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 更新短信费用模板    /sms/updateSmsCost
*
*/
CollectionService.postUpdateSmsCostSms({
    data: {
        smsChannelCostVO: {
    "channelName": "(string) 渠道名称",
    "channelNo": "(string) 渠道编号",
    "cost": "(number) 价格单位：元",
    "sendTargetType": "(integer) 发送目标 0本人 1第三方"
}, //smsChannelCostVO
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 新增标签    /tag/insert
*
*/
CollectionService.postInsertTag({
    data: {
        param: {
    "deleted": "(boolean) 标签是否禁用，可修改",
    "extend": "(string) 标签额外内容，可修改",
    "id": "(integer) 标签ID,修改时传入",
    "tagCode": "(string) 标签编号，不能为空",
    "tagGroupName": "(string) 标签组",
    "tagName": "(string) 标签名称，可修改"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 修改标签    /tag/modify
*
*/
CollectionService.postModifyTag({
    data: {
        param: {
    "deleted": "(boolean) 标签是否禁用，可修改",
    "extend": "(string) 标签额外内容，可修改",
    "id": "(integer) 标签ID,修改时传入",
    "tagCode": "(string) 标签编号，不能为空",
    "tagGroupName": "(string) 标签组",
    "tagName": "(string) 标签名称，可修改"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取标签    /tag/query
*
*/
CollectionService.getQueryTag({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 在催数据    /test/allAssignCaseData
*
*/
CollectionService.getAllAssignCaseDataTest({
    params: {
        cursor: 'undefined', //cursor
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 全量退案    /test/assignBatchBack
*
*/
CollectionService.getAssignBatchBackTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* assignHistoryIdentify    /test/assignHistoryIdentify
*
*/
CollectionService.getAssignHistoryIdentifyTest({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* assignHistorySync    /test/assignHistorySync
*
*/
CollectionService.getAssignHistorySyncTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 异步生成回款报表    /test/asyncRepayReport
*
*/
CollectionService.postAsyncRepayReportTest({
    data: {
        param: {
    "endAt": "(string) undefined",
    "productGroupIds": [],
    "startAt": "(string) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* caseLoanFix    /test/caseLoanFix
*
*/
CollectionService.getCaseLoanFixTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* caseRefresh    /test/caseRefresh
*
*/
CollectionService.getCaseRefreshTest({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* repayRefresh    /test/caseRepaySync
*
*/
CollectionService.getCaseRepaySyncTest({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 通讯录    /test/contact
*
*/
CollectionService.postContactTest({
    params: {
        caseId: 'undefined', //caseId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 通讯录预热    /test/contactPreHeat
*
*/
CollectionService.postContactPreHeatTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 数据可视化-测试    /test/dataVisualDetail
*
*/
CollectionService.getDataVisualDetailTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 解密    /test/decode
*
*/
CollectionService.getDecodeTest({
    params: {
        code: 'undefined', //code
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 加密    /test/encode
*
*/
CollectionService.getEncodeTest({
    params: {
        code: 'undefined', //code
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* expireBatchRepair    /test/expireBatchDeal
*
*/
CollectionService.getExpireBatchDealTest({
    params: {
        assignAt: 'undefined', //assignAt
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* fix-log    /test/fix-log
*
*/
CollectionService.postFixLogTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 城市数据    /test/flushCityData
*
*/
CollectionService.getFlushCityDataTest({
    params: {
        cursor: 'undefined', //cursor
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 数据可视化-人员维度-测试    /test/operatorVisualDetail
*
*/
CollectionService.getOperatorVisualDetailTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 批量清除通讯录缓存    /test/redisBatchDel
*
*/
CollectionService.getRedisBatchDelTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 清除redis缓存    /test/redisDel
*
*/
CollectionService.getRedisDelTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* repayBatchRepair    /test/repayBatchDeal
*
*/
CollectionService.getRepayBatchDealTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* repayHistorySync    /test/repayHistorySync
*
*/
CollectionService.getRepayHistorySyncTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* reset    /test/reset
*
*/
CollectionService.postResetTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 案件搜索    /test/search
*
*/
CollectionService.postSearchTest({
    data: {
        param: {
    "accountStatus": [],
    "applicantId": "(integer) 申请人Id",
    "applyStatus": "(string) 申请状态",
    "applySubType": "(string) 申请子类型",
    "applyType": "(string) 申请类型",
    "approverId": "(integer) 审核人Id",
    "area": [],
    "assignExpireTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "assignTimeA": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "assignTimeB": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "caseId": "(integer) 案件ID",
    "caseStatus": [],
    "caseType": "(string) 案件类型",
    "city": [],
    "collectOffTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "collectResult": [],
    "collectTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "companyId": [],
    "hand": [],
    "idCard": [],
    "lastFollowTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "maxHistoryOverdueDays": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "maxHistoryOverdueStageCount": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "mobile": "(string) 手机号",
    "notInTagCode": [],
    "overdueAmount": {
        "min": "(number) undefined",
        "max": "(number) undefined"
    },
    "overdueDays": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "overdueStageCount": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "ownerId": [],
    "ownerName": "(string) 催收员姓名",
    "productGroupId": [],
    "province": [],
    "submitTime": {
        "min": "(integer) undefined",
        "max": "(integer) undefined"
    },
    "tagCode": [],
    "totalAmount": {
        "min": "(number) undefined",
        "max": "(number) undefined"
    },
    "userId": "(string) 客户id",
    "userName": "(string) 客户姓名",
    "pageRequest": {
        "offset": "(integer) undefined",
        "pageNumber": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "property": "(string) undefined",
        "direction": "(string) undefined"
    }
}, //param
    },
    headers: {
        profile: 'undefined', //profile
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 生成委外机构回款报表    /test/sendReport
*
*/
CollectionService.postSendReportTest({
    data: {
        companyIds: [], //companyIds
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* syncBatchPrivileges    /test/syncPrivileges
*
*/
CollectionService.getSyncPrivilegesTest({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 历史数据迁移    /test/tranfer
*
*/
CollectionService.postTranferTest({
    params: {
        begin: 'undefined', //begin
        end: 'undefined', //end
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 指定ID历史数据迁移    /test/tranferCases
*
*/
CollectionService.postTranferCasesTest({
    data: {
        ids: [], //ids
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 历史数据迁移补偿    /test/tranferFix
*
*/
CollectionService.postTranferFixTest({
    data: {
        time: '(string) undefined', //time
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 获取验证码    /verifyCode
*
*/
CollectionService.getverifyCode({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* create    /work-orders
*
*/
CollectionService.postOrdersWork({
    data: {
        dto: {
    "params": [
        {
            "autoId": "(integer) 表单参数实例ID",
            "formParamId": "(integer) 表单参数id",
            "paramName": "(string) 参数名称",
            "paramValue": "(string) 参数值",
            "stepInsId": "(integer) 步骤实例id",
            "valueType": "(integer) 数值类型 1-单值 2-数组",
            "workOrderId": "(integer) 工单id"
        }
    ],
    "stepInsInfo": {
        "autoId": "(integer) 步骤实例id",
        "beginTime": "(string) 开始时间",
        "endTime": "(string) 结束时间",
        "operator": "(string) 操作人",
        "remark": "(string) 备注",
        "skipThisStep": "(boolean) 是否跳过此步骤",
        "status": "(string) 步骤实例状态 1-初始状态 2-执行中 3-执行失败 4-执行取消 5-执行驳回 6-执行成功",
        "stepId": "(integer) 步骤id",
        "stepName": "(string) 步骤名称",
        "workOrderId": "(integer) 工单id"
    },
    "workOrderInfo": {
        "autoId": "(integer) 工单id",
        "beginTime": "(string) 开始时间",
        "businessLineId": "(integer) 业务线id",
        "channelCode": "(string) 来源渠道 1-电话 2-在线 3-反馈",
        "claimTime": "(string) 认领时间",
        "claimant": "(string) 认领人",
        "creator": "(string) 创建人账号",
        "curStepId": "(integer) 当前步骤id",
        "curStepInsId": "(integer) 当前步骤实例id",
        "curStepName": "(string) 当前步骤名称",
        "describe": "(string) 问题描述",
        "endTime": "(string) 结束时间",
        "issueKey": "(string) issue编号",
        "mobile": "(string) 手机号",
        "platformCode": "(string) 创建平台编号",
        "priority": "(string) 优先级 1-低 2-中 3-高",
        "remark": "(string) 工单的备注",
        "status": "(string) 工单状态 1-初始状态 2-处理中 3-等待处理 4-取消处理 5-异常处理 6-驳回处理 7-处理完成",
        "templateId": "(integer) 模板id",
        "templateName": "(string) 模板名称",
        "userId": "(string) 用户id"
    }
}, //dto
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 指派给委外专员    /work-orders/_dispatch
*
*/
CollectionService.postOrders_dispatchWork({
    data: {
        param: {
    "companyId": "(integer) 机构id",
    "ids": [],
    "operator": "(integer) 专员id"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 工单反馈客服    /work-orders/_finish
*
*/
CollectionService.postOrders_finishWork({
    data: {
        param: {
    "ids": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 下发至机构管理员    /work-orders/_forward
*
*/
CollectionService.postOrders_forwardWork({
    data: {
        param: {
    "ids": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* search    /work-orders/_search
*
*/
CollectionService.postOrders_searchWork({
    data: {
        param: {
    "area": [],
    "companyId": "(integer) undefined",
    "complaint": "(boolean) 投诉是否成了",
    "direction": "(string) undefined",
    "feedBackTime": {
        "min": "(string) undefined",
        "max": "(string) undefined"
    },
    "hand": [],
    "idNo": "(string) 身份证",
    "mobile": "(string) 手机号",
    "offset": "(integer) undefined",
    "operatorId": "(integer) 委外专员",
    "orderResult": [],
    "orderStatus": [],
    "pageNumber": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "productName": [],
    "property": "(string) undefined",
    "province": [],
    "sourceTime": {
        "min": "(string) undefined",
        "max": "(string) undefined"
    },
    "userId": "(string) 51id",
    "userName": "(string) 客户姓名",
    "visitType": "(string) 工单类型"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* companySubmit    /work-orders/_submit
*
*/
CollectionService.postOrders_submitWork({
    data: {
        param: {
    "ids": []
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* update    /work-orders/_update
*
*/
CollectionService.postOrders_updateWork({
    data: {
        param: {
    "complaint": "(boolean) undefined",
    "feedBackResult": "(string) undefined",
    "ids": [],
    "orderResult": "(string) undefined",
    "remark": "(string) undefined"
}, //param
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* options    /work-orders/options
*
*/
CollectionService.getOrdersOptionsWork({
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* detail    /work-orders/{id}
*
*/
CollectionService.getOrdersIdWork({
    params: {
        id: 'undefined', //id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});

/**
* 认领查询    /{claimtype}/claimQuery
*
*/
CollectionService.getClaimQueryClaimtype({
}).then(result => {
    console.log(result);
}).catch(() => {});
