import CollectionService from './api/collection-service/api';


/**
 * 最近所有对公账号转账时间    /accounts/receipt-at
 *
 * @params      { String   }      userId                        user id
 */
CollectionService.getReceiptAtAccounts({
    headers: {
        userId: 'undefined', //user id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "response": [
        {
            "account": "(string) undefined",
            "lastReceiptAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            }
        }
    ]
}
*/



/**
 * 审批流审核(支持单个和批量)    /applyFlow/approve
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postApproveApplyFlow({
    data: {
        applyFlowId: [],
        applyType: '(string) 申请类型',
        approveStatus: '(integer) 审核状态-1撤销 1通过 2拒绝',
        approved: '(boolean) 是否审核通过',
        caseIds: [],
        memo: '(string) 操作备注',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 发起审批流程(支持单个和批量)    /applyFlow/createApplyFlow
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postCreateApplyFlowApplyFlow({
    data: {
        applyReason: '(string) 申请原因',
        applySubType: '(string) 申请子类型',
        applyType: '(string) 申请类型',
        caseIds: [],
        exchangeCompanyId: '(integer) 调案申请时指定的机构',
        loanObjectId: '(string) 仲裁订单标的',
        remark: '(string) 备注',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{}
*/



/**
 * 获取审批列表    /applyFlow/getApplyFlowList
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postGetApplyFlowListApplyFlow({
    data: {
        applyEndDate: '(string) 申请截止时间',
        applyProcess: '(string) 审核进度',
        applyStartDate: '(string) 申请开始时间',
        applyStatus: '(integer) 审批流状态 -1撤销 0待审批 1审批通过 2拒绝',
        applyType: [],
        applyUserId: [],
        companyIdList: [],
        direction: '(string) undefined',
        hand: [],
        offset: '(integer) undefined',
        pageNumber: '(integer) undefined',
        pageSize: '(integer) undefined',
        productGroupId: [],
        property: '(string) undefined',
        tabType: '(integer) tab类型 0审核列表 1申请列表',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "applyDate": "(string) 申请日期",
            "applyProcess": "(string) 审核进度",
            "applyReason": "(string) 申请原因",
            "applyReasonClassify": "(string) 申请原因分类",
            "applyStatus": "(integer) 审批流状态-1撤销 0 待审批 1审批通过",
            "applyType": "(string) 申请类型",
            "applyUserId": "(integer) 申请人id",
            "applyUserName": "(string) 申请人姓名",
            "applyUserType": "(string) 申请人岗位类型",
            "assignExpireTime": "(string) 留案截止时间",
            "assignTimeA": "(string) 甲方分案时间",
            "caseId": "(integer) 案件编号",
            "currentOperatorType": "(string) 当前待审核人类型",
            "extData": "(string) 扩展参数",
            "hand": "(integer) 手别",
            "id": "(integer) 审批编号",
            "loanObjectId": "(string) 订单标的编号",
            "maxHistoryOverdueDays": "(integer) 历史最长逾期天数",
            "memo": "(string) 操作备注",
            "ownerCompanyId": "(integer) 催收员公司id",
            "ownerCompanyName": "(string) 催收员公司名称",
            "ownerId": "(integer) 催收员编号",
            "ownerName": "(string) 催收员名称",
            "preSettleAmount": "(number) 提前结清金额",
            "productGroupId": "(integer) 产品组编号",
            "productGroupName": "(string) 产品类型",
            "totalAmount": "(number) 应还总额",
            "userId": "(string) 客户51编号",
            "userName": "(string) 客户姓名"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * 获取案件申请人列表    /applyFlow/getApplyUsers
 *
 * @params      { String   }      userId                        
 */
CollectionService.getGetApplyUsersApplyFlow({
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "applyUserCompanyId": "(integer) 申请人公司id",
        "applyUserId": "(integer) 申请人id",
        "applyUserName": "(string) 申请人姓名",
        "applyUserType": "(string) 申请人岗位类型"
    }
]
*/



/**
 * 审批进度节点查看    /applyFlow/getApproveNodeList
 *
 * @params      { Integer  }      applyFlowId                   applyFlowId
 * @params      { String   }      userId                        
 */
CollectionService.getGetApproveNodeListApplyFlow({
    params: {
        applyFlowId: 'undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "applyFlowAggVO": {
        "applyDate": "(string) 申请日期",
        "applyProcess": "(string) 审核进度",
        "applyReason": "(string) 申请原因",
        "applyReasonClassify": "(string) 申请原因分类",
        "applyStatus": "(integer) 审批流状态-1撤销 0 待审批 1审批通过",
        "applyType": "(string) 申请类型",
        "applyUserId": "(integer) 申请人id",
        "applyUserName": "(string) 申请人姓名",
        "applyUserType": "(string) 申请人岗位类型",
        "assignExpireTime": "(string) 留案截止时间",
        "assignTimeA": "(string) 甲方分案时间",
        "caseId": "(integer) 案件编号",
        "currentOperatorType": "(string) 当前待审核人类型",
        "extData": "(string) 扩展参数",
        "hand": "(integer) 手别",
        "id": "(integer) 审批编号",
        "loanObjectId": "(string) 订单标的编号",
        "maxHistoryOverdueDays": "(integer) 历史最长逾期天数",
        "memo": "(string) 操作备注",
        "ownerCompanyId": "(integer) 催收员公司id",
        "ownerCompanyName": "(string) 催收员公司名称",
        "ownerId": "(integer) 催收员编号",
        "ownerName": "(string) 催收员名称",
        "preSettleAmount": "(number) 提前结清金额",
        "productGroupId": "(integer) 产品组编号",
        "productGroupName": "(string) 产品类型",
        "totalAmount": "(number) 应还总额",
        "userId": "(string) 客户51编号",
        "userName": "(string) 客户姓名"
    },
    "approveNodeList": [
        {
            "approveNodeName": "(string) 审批节点名称",
            "approveStatus": "(integer) 审核状态 -1删除 0 待审核 1通过 2拒绝",
            "timestamp": "(string) 事件发生时间戳"
        }
    ]
}
*/



/**
 * 获取案件申请审批记录    /applyFlow/getCaseApplyFlowRecords
 *
 * @params      { Integer  }      caseId                        caseId
 * @params      { String   }      userId                        
 */
CollectionService.getGetCaseApplyFlowRecordsApplyFlow({
    params: {
        caseId: 'undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "applyDate": "(string) 申请日期",
        "applyProcess": "(string) 审核进度",
        "applyReason": "(string) 申请原因",
        "applyReasonClassify": "(string) 申请原因分类",
        "applyStatus": "(integer) 审批流状态-1撤销 0 待审批 1审批通过",
        "applyType": "(string) 申请类型",
        "applyUserId": "(integer) 申请人id",
        "applyUserName": "(string) 申请人姓名",
        "applyUserType": "(string) 申请人岗位类型",
        "assignExpireTime": "(string) 留案截止时间",
        "assignTimeA": "(string) 甲方分案时间",
        "caseId": "(integer) 案件编号",
        "currentOperatorType": "(string) 当前待审核人类型",
        "extData": "(string) 扩展参数",
        "hand": "(integer) 手别",
        "id": "(integer) 审批编号",
        "loanObjectId": "(string) 订单标的编号",
        "maxHistoryOverdueDays": "(integer) 历史最长逾期天数",
        "memo": "(string) 操作备注",
        "ownerCompanyId": "(integer) 催收员公司id",
        "ownerCompanyName": "(string) 催收员公司名称",
        "ownerId": "(integer) 催收员编号",
        "ownerName": "(string) 催收员名称",
        "preSettleAmount": "(number) 提前结清金额",
        "productGroupId": "(integer) 产品组编号",
        "productGroupName": "(string) 产品类型",
        "totalAmount": "(number) 应还总额",
        "userId": "(string) 客户51编号",
        "userName": "(string) 客户姓名"
    }
]
*/



/**
 * 下载证据链    /arbexpress/proof/download/{fid}
 *
 * @params      { String   }      fid                           fid
 */
CollectionService.getProofDownloadFidArbexpress({
    params: {
        fid: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 外部获取信息/更新状态接口    /arbexpress/third
 *
 */
CollectionService.postThirdArbexpress({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 委外仲裁／诉讼订单批量提交立案    /arbitrate/caseRegist
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postCaseRegistArbitrate({
    data: {
        arbitrateIds: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外仲裁／诉讼订单全量提交立案    /arbitrate/caseRegistAll
 *
 */
CollectionService.getCaseRegistAllArbitrate({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外仲裁／诉讼订单列表导出    /arbitrate/export
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postExportArbitrate({
    data: {
        endAt: '(string) 结束时间',
        loanObjectId: '(string) 订单标的编号',
        name: '(string) 姓名',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
        startAt: '(string) 开始时间',
        status: '(string) 仲裁状态',
        type: '(string) 停催类型',
        userId: '(string) 用户ID',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 委外仲裁／诉讼订单批量提交预审    /arbitrate/preAudit
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postPreAuditArbitrate({
    data: {
        arbitrateIds: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外仲裁／诉讼订单全量提交预审    /arbitrate/preAuditAll
 *
 */
CollectionService.getPreAuditAllArbitrate({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 证据链下载    /arbitrate/proof/download/{fid}
 *
 * @params      { String   }      fid                           fid
 */
CollectionService.getProofDownloadFidArbitrate({
    params: {
        fid: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 证据链预览    /arbitrate/proof/preview/{arbitrateId}
 *
 * @params      { Integer  }      arbitrateId                   arbitrateId
 */
CollectionService.getProofPreviewArbitrateIdArbitrate({
    params: {
        arbitrateId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 保存证据链    /arbitrate/proof/update
 *
 * @params      { Object   }      applyProof                    applyProof
 */
CollectionService.postProofUpdateArbitrate({
    data: {
        proofParams: [{
        	fileId: '(string) undefined',
        	type: '(string) undefined',
        	url: '(string) undefined',
        }],
        arbitrateId: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 上传证据链    /arbitrate/proof/upload/{arbitrateId}
 *
 * @params      { Integer  }      arbitrateId                   arbitrateId
 * @params      { File     }      file                          file
 */
CollectionService.postProofUploadArbitrateIdArbitrate({
    params: {
        arbitrateId: 'undefined',
    },
    data: {
        file: 'undefined',

    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外仲裁／诉讼订单证据获取    /arbitrate/proofGet
 *
 */
CollectionService.getProofGetArbitrate({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外仲裁／诉讼订单列表查询    /arbitrate/query
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postQueryArbitrate({
    data: {
        endAt: '(string) 结束时间',
        loanObjectId: '(string) 订单标的编号',
        name: '(string) 姓名',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
        startAt: '(string) 开始时间',
        status: '(string) 仲裁状态',
        type: '(string) 停催类型',
        userId: '(string) 用户ID',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "applicant": "(string) 提交人",
            "arbCanCancel": "(boolean) 是否可撤回",
            "arbCanStopOut": "(boolean) 是否可停催退出",
            "arbStatus": "(string) 仲裁状态",
            "arbitrateAmount": "(number) 仲裁金额",
            "arbitrateAt": "(string) 仲裁时间",
            "arbitrateId": "(integer) 记录编号",
            "arbitrateType": "(string) 停催类型",
            "area": "(string) 案件区域名称",
            "caseId": "(integer) 案件编号",
            "hand": "(integer) 案件手别编号",
            "letTotalAmount": "(number) 应还总额",
            "loanObjectId": "(string) 订单标的编号",
            "overdue": "(integer) 逾期天数",
            "preSettleAmount": "(number) 提前结清金额",
            "productName": "(string) 产品名称",
            "reviewAt": "(string) 审核时间",
            "reviewer": "(string) 审核人",
            "submitAt": "(string) 提交时间",
            "userId": "(string) 51编号",
            "userName": "(string) 客户名称"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * 委外仲裁／案件撤回    /arbitrate/revoke
 *
 * @params      { Object   }      arbitrateRevokeParam          arbitrateRevokeParam
 */
CollectionService.postRevokeArbitrate({
    data: {
        arbitrateId: '(integer) undefined',
        reason: '(string) undefined',
        type: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外仲裁／停催退出-案件选择    /arbitrate/stopOutShow
 *
 * @params      { Integer  }      arbitrateId                   arbitrateId
 */
CollectionService.getStopOutShowArbitrate({
    params: {
        arbitrateId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外仲裁／停催退出-案件确认    /arbitrate/stopOutSubmit
 *
 * @params      { Object   }      stopOutParam                  stopOutParam
 */
CollectionService.postStopOutSubmitArbitrate({
    data: {
        applyReason: '(string) 申请原因',
        arbitrateId: '(integer) 仲裁记录编号',
        caseIds: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 自动分案(展示)    /assign/autoAssignShow
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      Authorization                 
 * @params      { String   }      userId                        
 */
CollectionService.postAutoAssignShowAssign({
    data: {
        area: '(string) 案件区域',
        assignTagCode: '(string) 分案标签',
        hand: '(integer) 手别',
        productGroupIds: [],
    },
    headers: {
        Authorization: '916e4f79-684a-454d-8ee1-3d75df7b2e9d', //
        userId: '1', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "area": "(string) 地区",
    "assignTagCode": "(string) 案件标签",
    "companyBeans": [
        {
            "assignAmount": "(number) 分案总金额",
            "caseDetails": {},
            "caseIds": [],
            "caseNum": "(integer) 委外机构分得案件量",
            "companyId": "(integer) 委外机构编号",
            "companyName": "(string) 委外机构名称"
        }
    ],
    "hand": "(integer) 手别",
    "totalCaseNum": "(integer) 总案件量"
}
*/



/**
 * 委外公司分案权重列表    /assign/getAllAssignRatio
 *
 * @params      { String   }      assignTagCode                 assignTagCode
 * @params      { String   }      userId                        
 */
CollectionService.getGetAllAssignRatioAssign({
    params: {
        assignTagCode: 'undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{}
*/



/**
 * 委外机构内部分案    /assign/innerAssign
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postInnerAssignAssign({
    data: {
        caseIds: [],
        operatorIds: [],
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外机构自动分案    /assign/innerAutoAssign
 *
 * @params      { String   }      userId                        
 */
CollectionService.postInnerAutoAssignAssign({
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 同步分案结果（自动和手动分案）    /assign/syncAssignResult
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      Authorization                 
 * @params      { String   }      userId                        
 */
CollectionService.postSyncAssignResultAssign({
    data: {
        expireHandMap: {},
        paramList: [{
        	assignRemark: '(string) 手动分案原因',
        	assignType: '(string) 分案类型',
        	caseIds: [],
        	companyId: '(integer) 委外公司编号',
        	handLev: '(integer) 调整手别',
        }],
    },
    headers: {
        Authorization: '916e4f79-684a-454d-8ee1-3d75df7b2e9d', //
        userId: '1', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 更新委外公司分案权重    /assign/updateAssignRatio
 *
 * @params      { String   }      assignTagCode                 assignTagCode
 * @params      { Object   }      ratioList                     ratioList
 * @params      { String   }      userId                        
 */
CollectionService.postUpdateAssignRatioAssign({
    params: {
        assignTagCode: 'undefined',
    },
    data: {
        ratioList: [
    {}
],

    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * claimSearch    /cases/claimCaseSearch
 *
 * @params      { String   }      userId                        userId
 * @params      { Integer  }      productGroupId                productGroupId
 */
CollectionService.getClaimCaseSearchCases({
    params: {
        userId: 'undefined',
        productGroupId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(string) undefined"
*/



/**
 * search    /cases/search
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 * @params      { String   }      profile                       
 */
CollectionService.postSearchCases({
    data: {
        accountStatus: [],
        applicantId: '(integer) 申请人Id',
        applyStatus: '(string) 申请状态',
        applySubType: '(string) 申请子类型',
        applyType: '(string) 申请类型',
        approverId: '(integer) 审核人Id',
        area: [],
        assignExpireTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        assignTimeA: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        assignTimeB: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        caseId: '(integer) 案件ID',
        caseStatus: [],
        caseType: '(string) 案件类型',
        city: [],
        collectOffTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        collectResult: [],
        collectTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        companyId: [],
        hand: [],
        idCard: [],
        lastFollowTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        maxHistoryOverdueDays: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        maxHistoryOverdueStageCount: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        mobile: '(string) 手机号',
        notInTagCode: [],
        overdueAmount: {
        	min: '(number) undefined',
        	max: '(number) undefined',
        },
        overdueDays: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        overdueStageCount: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        ownerId: [],
        ownerName: '(string) 催收员姓名',
        productGroupId: [],
        province: [],
        submitTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        tagCode: [],
        totalAmount: {
        	min: '(number) undefined',
        	max: '(number) undefined',
        },
        userId: '(string) 客户id',
        userName: '(string) 客户姓名',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
    },
    headers: {
        userId: 'undefined', //
        profile: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "applicantId": "(integer) 申请人",
            "applicantName": "(string) 申请人姓名",
            "applyDesc": [],
            "applyReason": "(string) 申请原因",
            "applyRemark": "(string) 留案截止时间",
            "applyStatus": "(string) 审核状态",
            "applySubType": "(string) 申请子类型",
            "applySubTypeName": "(string) 申请子类型名称",
            "applyTime": "(integer) 申贷时间",
            "applyType": "(string) 申请类型",
            "approveTime": "(integer) 审核时间",
            "approverId": "(integer) 审核人",
            "approverName": "(string) 审核姓名",
            "area": "(string) 区域",
            "assignExpireTime": "(integer) 分案到期时间",
            "assignTimeA": "(integer) 甲方分案时间",
            "assignTimeB": "(integer) 乙方分案时间",
            "beforeAssignCompany": "(string) 前手催收公司",
            "beforeAssignCompanyId": "(integer) undefined",
            "caseStatus": "(string) 案件状态",
            "caseTags": [],
            "caseType": "(string) 案件类型",
            "checkStatus": "(string) 清算核销状态",
            "collectOffTime": "(integer) 出催时间",
            "collectTime": "(integer) 入催时间",
            "companyId": "(integer) 公司",
            "companyName": "(string) undefined",
            "conflictCompany": [],
            "conflictCompanyId": [],
            "currentPhase": "(string) 逾期阶段",
            "hand": "(integer) 手别",
            "id": "(integer) 案件Id",
            "lastFollowResult": "(string) 最后一次跟进结果",
            "lastFollowTime": "(integer) 最后一次跟进时间",
            "maxHistoryOverdueDays": "(integer) 历史最大逾期天数",
            "maxHistoryOverdueStageCount": "(integer) 历史最大逾期期数",
            "nextFollowTime": "(integer) 下次跟进时间",
            "orderAmount": "(number) 订单金额",
            "overdueAmount": "(number) 逾期应还金额",
            "overdueDays": "(integer) 逾期天数",
            "overdueStageCount": "(integer) 逾期期数",
            "overdueStageSum": "(integer) 累计逾期期数",
            "ownerId": "(integer) 催收员",
            "ownerName": "(string) undefined",
            "pendAmount": "(number) 挂账金额",
            "preSettleAmount": "(number) 提前结清金额",
            "productGroupId": "(integer) undefined",
            "productGroupName": "(string) 产品组",
            "province": "(string) 省份",
            "recentRepayCompany": "(string) 最近还款机构",
            "recentRepayCompanyId": "(integer) undefined",
            "remark": "(string) 案件备注",
            "statusDesc": "(string) 案件状态描述",
            "submitTime": "(integer) 申请时间",
            "totalAmount": "(number) 总金额",
            "userId": "(string) 客户id",
            "userName": "(string) 客户姓名"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * search    /cases/tempSearch
 *
 * @params      { String   }      userId                        userId
 */
CollectionService.getTempSearchCases({
    params: {
        userId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 认领详情-历史列表    /claim/detail
 *
 * @params      { Integer  }      offlineClaimId                认领流水编号
 * @params      { String   }      userId                        user id
 */
CollectionService.getDetailClaim({
    params: {
        offlineClaimId: 'undefined',
    },
    headers: {
        userId: 'undefined', //user id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "response": [
        {
            "checkAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "checker": "(string) 最后审核人",
            "claimAmount": "(number) 认领金额",
            "claimAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "claimType": "(integer) 认领方式. 0:到期入账 1:提前结清 2:挂账",
            "claimantName": "(string) 确认认领人",
            "memo": "(string) 审核备注",
            "processType": "(integer) 认领的订单阶段，0:内催；1：委外",
            "status": "(string) 状态"
        }
    ]
}
*/



/**
 * 认领提交    /claim/handle
 *
 * @params      { Ref      }      claimHandleParam              claimHandleParam
 * @params      { File     }      file                          file
 * @params      { String   }      userId                        user id
 */
CollectionService.postHandleClaim({
    data: {
        claimHandleParam: 'undefined',
        file: 'undefined',

    },
    headers: {
        userId: 'undefined', //user id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "response": "(boolean) undefined"
}
*/



/**
 * 新增委外公司    /company/add
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postAddCompany({
    data: {
        accountNum: '(integer) 账号上限',
        companyName: '(string) 机构名字',
        companyStatus: '(string) 机构状态',
        contactEmail: '(string) 联系人邮箱',
        contactMobile: '(string) 联系人手机号',
        contactName: '(string) 联系人名字',
        id: '(integer) 机构编号',
        outsourceSpecialist: '(string) 委外专员',
        province: '(string) 省份',
        registAddr: '(string) 注册地址',
        registAt: '(string) 系统注册时间',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取委外公司列表    /company/getAll
 *
 */
CollectionService.getGetAllCompany({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "accountNum": "(integer) undefined",
        "companyName": "(string) undefined",
        "companyProv": "(string) undefined",
        "contactEmail": "(string) undefined",
        "contactMobile": "(string) undefined",
        "contactName": "(string) undefined",
        "effectiveAt": "(string) undefined",
        "emailList": [],
        "expiryAt": "(string) undefined",
        "gmt51Create": "(string) undefined",
        "gmt51Modify": "(string) undefined",
        "id": "(integer) undefined",
        "manageAccount": "(string) undefined",
        "mobileList": [],
        "outsourceSpecialist": "(string) undefined",
        "privileges": "(string) undefined",
        "registAddress": "(string) undefined",
        "registAt": "(string) undefined",
        "specialistName": "(string) undefined",
        "status": "(string) undefined",
        "zipCode": "(string) undefined"
    }
]
*/



/**
 * 更新委外公司信息    /company/update
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postUpdateCompany({
    data: {
        accountNum: '(integer) 账号上限',
        companyName: '(string) 机构名字',
        companyStatus: '(string) 机构状态',
        contactEmail: '(string) 联系人邮箱',
        contactMobile: '(string) 联系人手机号',
        contactName: '(string) 联系人名字',
        id: '(integer) 机构编号',
        outsourceSpecialist: '(string) 委外专员',
        province: '(string) 省份',
        registAddr: '(string) 注册地址',
        registAt: '(string) 系统注册时间',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 删除配置    /config/delete
 *
 * @params      { Integer  }      id                            id
 */
CollectionService.getDeleteConfig({
    params: {
        id: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取配置    /config/getAll
 *
 */
CollectionService.getGetAllConfig({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "confDesc": "(string) undefined",
        "confKey": "(string) undefined",
        "confName": "(string) undefined",
        "confType": "(integer) undefined",
        "confVal": "(string) undefined",
        "id": "(integer) undefined"
    }
]
*/



/**
 * 获取系统配置    /config/getSystemSetting
 *
 */
CollectionService.getGetSystemSettingConfig({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "configs": [
        {
            "extend": "(string) 扩展信息",
            "switchOn": "(boolean) 开关是否开启",
            "type": "(string) 配置标识"
        }
    ]
}
*/



/**
 * 更改系统配置    /config/updateSystemSetting
 *
 * @params      { Object   }      content                       content
 */
CollectionService.postUpdateSystemSettingConfig({
    data: {
        extend: '(string) 扩展信息',
        switchOn: '(boolean) 开关是否开启',
        type: '(string) 配置标识',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 新增或更改配置    /config/upsert
 *
 * @params      { Object   }      config                        config
 */
CollectionService.postUpsertConfig({
    data: {
        confDesc: '(string) undefined',
        confKey: '(string) undefined',
        confName: '(string) undefined',
        confType: '(integer) undefined',
        confVal: '(string) undefined',
        id: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * delContactCache    /contacts/{caseId}/cache/_del
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.postCaseIdCache_delContacts({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 案件基本信息    /customer/baseInfo
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getBaseInfoCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "caseDigests": [
        {
            "caseId": "(integer) 案件编号",
            "productGroupId": "(integer) undefined",
            "productGroupName": "(string) 产品组名称"
        }
    ],
    "caseInfo": {
        "address": "(string) 户籍地址",
        "apply": {
            "applicantId": "(integer) undefined",
            "applyReason": "(string) undefined",
            "applyRemark": "(string) undefined",
            "applyStatus": "(string) undefined",
            "applySubType": "(string) undefined",
            "applyType": "(string) undefined",
            "approveTime": "(string) undefined",
            "approverId": "(integer) undefined",
            "submitTime": "(string) undefined"
        },
        "applyTime": "(string) 申贷时间",
        "area": "(string) 案件区域",
        "assignExpireTime": "(string) 分案到期时间",
        "assignTimeA": "(string) 甲方分案时间",
        "assignTimeB": "(string) 乙方分案时间",
        "caseStatus": "(string) 案件状态",
        "caseTags": [
            {
                "caseId": "(integer) undefined",
                "createTime": "(string) undefined",
                "extend": "(string) undefined",
                "id": "(integer) undefined",
                "idCard": "(string) undefined",
                "tagCode": "(string) undefined",
                "tagGroup": "(string) undefined",
                "tagName": "(string) undefined",
                "updateTime": "(string) undefined"
            }
        ],
        "caseType": "(string) undefined",
        "collectOffTime": "(string) 出催时间",
        "collectTime": "(string) 入催时间",
        "collectionResult": "(string) 催收结果",
        "companyId": "(integer) undefined",
        "companyName": "(string) undefined",
        "currentHandRepaymentAmount": "(number) 当前协议期已还金额",
        "currentHandRepaymentDate": "(string) 当前批次最新还款日期",
        "currentMonthRepaymentAmount": "(number) 本月还款金额",
        "deductAmount": "(number) 减免",
        "encodeIdCard": "(string) 身份证号加密",
        "firstOverdueTime": "(string) undefined",
        "gender": "(string) 性别",
        "gratuity": "(number) 剩余服务费",
        "hand": "(integer) undefined",
        "id": "(integer) 案件编号",
        "idCard": "(string) 身份证号",
        "lastFollowResult": "(string) undefined",
        "lastFollowTime": "(string) undefined",
        "loans": [
            {
                "applyChannel": "(string) 申请渠道",
                "applyTime": "(string) 申请日",
                "billRepayments": [
                    {
                        "applyId": "(integer) 订单id",
                        "bankId": "(integer) 银行id",
                        "cardNum": "(string) 卡号",
                        "repayAt": "(string) 还款时间 yyyyMMdd",
                        "repaymentAmount": "(number) 还款金额"
                    }
                ],
                "caseId": "(integer) undefined",
                "checkStatus": "(integer) 核销状态",
                "collectTime": "(string) undefined",
                "couponRecords": [
                    {
                        "conponId": "(integer) 优惠券ID",
                        "deductAmount": "(number) 当期单个费用项的抵扣金额",
                        "deductItemEnum": "(string) 抵扣费用项",
                        "globalCouponId": "(string) string类CouponId",
                        "repayCouponTypeEnum": "(string) 优惠券类型",
                        "scheduleId": "(integer) 还款计划ID",
                        "stage": "(integer) 订单期数",
                        "status": "(string) 抵扣流水状态"
                    }
                ],
                "firstOverdueTime": "(string) undefined",
                "fromStage": "(integer) undefined",
                "fundCompany": "(string) 资金机构",
                "id": "(integer) undefined",
                "idCard": "(string) undefined",
                "loanObjectId": "(string) undefined",
                "loanType": "(integer) undefined",
                "maxHistoryOverdueDays": "(integer) 历史最长逾期天数",
                "orderAmount": "(number) 贷款金额",
                "orderId": "(string) 订单编号",
                "overdueAmount": "(number) 应还金额",
                "overdueStageCount": "(integer) 逾期期数",
                "pendAmount": "(number) 挂载金额",
                "productId": "(integer) undefined",
                "productName": "(string) 产品名称",
                "repayments": [
                    {
                        "bankCardNum": "(string) 扣款卡号",
                        "bankName": "(string) 银行名称",
                        "billNo": "(string) 清算流水号",
                        "channel": "(string) 代扣渠道",
                        "errorMessage": "(string) 错误消息",
                        "finishTime": "(string) 完成还款时间",
                        "outBillNo": "(string) 外部订单号（第三方流水号）",
                        "repayAmount": "(number) 还款金额",
                        "repayTime": "(string) 申请还款时间",
                        "status": "(string) 流水状态 0初始化 1成功 2失败 3处理中"
                    }
                ],
                "rsItems": [
                    {
                        "capital": "(number) undefined",
                        "clear": "(boolean) undefined",
                        "compensation": "(boolean) undefined",
                        "compensationAt": "(string) undefined",
                        "deduct": "(number) undefined",
                        "enniuGratuity": "(number) undefined",
                        "gratuity": "(number) undefined",
                        "id": "(string) undefined",
                        "interest": "(number) undefined",
                        "loanType": "(integer) undefined",
                        "orderId": "(string) undefined",
                        "overdue": "(integer) undefined",
                        "p2pGratuity": "(number) undefined",
                        "penalty": "(number) undefined",
                        "repaidTotalAmount": "(number) undefined",
                        "repayAt": "(string) undefined",
                        "riskReserved": "(number) undefined",
                        "settle": "(boolean) undefined",
                        "stage": "(integer) undefined",
                        "totalAmount": "(number) undefined",
                        "userDueAt": "(string) undefined",
                        "userId": "(string) undefined"
                    }
                ],
                "stages": "(integer) 期数",
                "toStage": "(integer) undefined",
                "totalAmount": "(number) 应还总额",
                "urgeBillBean": {
                    "accountId": "(integer) 账户表关联ID",
                    "accountSourceType": "(integer) 账户来源类型",
                    "applyMobile": "(string) 用户申请卡时的手机号",
                    "bankId": "(integer) 银行ID（23为温州银行）",
                    "bankMobile": "(string) 银行卡绑定手机号码",
                    "bankName": "(string) 银行名称",
                    "billDate": "(string) 账单日",
                    "billId": "(integer) 账单ID，与applyId，订单ID是同一个",
                    "billLineId": "(integer) 账单线id",
                    "billMonth": "(integer) 账期（如201704表示2017年4月的账单）",
                    "billStartDate": "(string) 账单开始日期",
                    "capitalAmount": "(number) 账单中的本金余额",
                    "capitalAmountV2": "(number) 逾期本金-最低还款额剩余金额中的本金",
                    "cardStyleId": "(integer) 卡样ID，针对温州银行则是1期、2期、3期",
                    "cashAmount": "(number) 已预借账单金额",
                    "cashFee": "(number) 预借现金手续费",
                    "cashLimit": "(number) 取现授信",
                    "companyPhone": "(string) 用户申请卡时填写的单位电话",
                    "creditLimit": "(number) 授信额度",
                    "currentAvailableCredit": "(number) 当前可用授信",
                    "currentBalance": "(number) 本期账单剩余应还",
                    "currentMinPayment": "(number) 本期账单最低应还",
                    "currentRepayment": "(number) 本期已还金额",
                    "delayStages": "(integer) 本次入催当天的逾期期数",
                    "enterCollectionDate": "(string) 入催日",
                    "enterDate4CurrentBill": "(string) 入催日期，指当前账单周期的入催收",
                    "fullCardNum": "(string) 全信用卡卡号",
                    "historyMaxDelayDays": "(integer) 历史最大逾期天数，包含本次入催",
                    "idCardAddress": "(string) 身份证OCR上的家庭地址",
                    "idCardNo": "(string) 用户身份证号",
                    "lastBillBalance": "(number) 最近一期账单金额(包括已还的)",
                    "lastTermMinRepayment": "(number) 上期最低剩余未还金额",
                    "minPayment": "(number) 最低还款额",
                    "newBalance": "(number) 账单金额",
                    "openCardDate": "(string) 开卡时间",
                    "organCode": "(string) 机构号",
                    "otherFee": "(number) 其它费用",
                    "overdue": "(integer) 逾期天数",
                    "overdueInterest": "(number) 逾期罚息",
                    "preSettleAmount": "(number) 提前结清金额",
                    "repaymentDate": "(string) 还款日",
                    "revolvingInterest": "(number) 循环利息",
                    "shortCardNum": "(string) 信用卡4位尾号",
                    "stageRemainAmount": "(number) 分期剩余本金",
                    "stageRemainTotalBalance": "(number) 分期付款剩余总额",
                    "totalBalance": "(number) 总透支余额",
                    "urgeStatus": "(integer) 出入催状态 0入催 1出催",
                    "userId": "(integer) 用户ID",
                    "userName": "(string) 用户姓名"
                },
                "userApplyAt": "(string) undefined",
                "userId": "(string) undefined"
            }
        ],
        "maxHistoryOverdueDays": "(integer) undefined",
        "maxHistoryOverdueStageCount": "(integer) undefined",
        "orderAmount": "(number) 贷款总额",
        "orders": "(integer) 订单数",
        "overdueAmount": "(number) 逾期金额/应还金额",
        "overdueDays": "(integer) undefined",
        "overdueStageCount": "(integer) undefined",
        "overdueStageSum": "(integer) undefined",
        "ownerId": "(integer) undefined",
        "ownerName": "(string) undefined",
        "penalty": "(number) 剩余罚息",
        "pendAmount": "(number) 挂账金额",
        "preSettleAmount": "(number) 提前结清金额",
        "productGroupId": "(integer) undefined",
        "productGroupName": "(string) undefined",
        "province": "(string) undefined",
        "remainCapital": "(number) 剩余本金",
        "remainInterest": "(number) 剩余利息",
        "remark": "(string) undefined",
        "repaymentIntervalDays": "(integer) 最近还款间距",
        "riskReserved": "(number) 剩余风险准备金",
        "totalAmount": "(number) 应还总额",
        "transferOrderNum": "(integer) 债转订单数",
        "userAge": "(integer) 年龄",
        "userId": "(string) undefined",
        "userName": "(string) undefined"
    },
    "caseTags": [
        {
            "caseId": "(integer) undefined",
            "createTime": "(string) undefined",
            "extend": "(string) undefined",
            "id": "(integer) undefined",
            "idCard": "(string) undefined",
            "tagCode": "(string) undefined",
            "tagGroup": "(string) undefined",
            "tagName": "(string) undefined",
            "updateTime": "(string) undefined"
        }
    ],
    "userInfo": {
        "address": "(string) 居住地址",
        "assetAutoType": "(integer) 车辆情况 1. 无车2.本人名下有车，无贷款3.本人名下有车，有按揭贷款4. 本人名下有车，但已被抵押 5.其它",
        "companyAddress": "(string) 单位地址",
        "companyName": "(string) 单位名称",
        "email": "(string) 常用邮箱地址",
        "familyLiveType": "(string) 居住方式 1.自有住房，无贷款、2.自有住房、有贷款、3.与父母/配偶同住、4.租房、5.公司宿舍、6.自建房7. 其他 8. 学生公寓",
        "gender": "(integer) 性别 0未知 1男性 2女性",
        "idAddress": "(string) 身份证归属地-北京市市辖区西城区",
        "idCardNegative": "(string) 身份证反面照",
        "idCardPositive": "(string) 身份证正面照",
        "marriage": "(integer) 婚姻情况 1.未婚2.已婚无子女3.已婚有子女4.离异5.丧偶6.复婚",
        "mobile": "(string) 手机号",
        "mobileRegAt": "(string) 手机入网时间",
        "monthlyAverageIncome": "(number) 月平均收入 isoptype=10,该字段存在",
        "occupation": "(integer) 职业类别 1. 企业主2. 个体户4. 工薪族5. 学生10. 自由职业",
        "ocrAddress": "(string) OCR解析地址/户籍地址",
        "qq": "(string) QQ",
        "registerTime": "(string) APP注册时间",
        "residentialAddress": "(string) 住宅详细地址",
        "userIncome": "(number) 月工资收入",
        "userSocialSecurity": "(integer) 现单位是否缴纳社保 1. 缴纳本地社保2. 无社保",
        "yearSalary": "(number) 年收入 万元"
    }
}
*/



/**
 * 增加通话记录    /customer/call/addCallRecord
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postCallAddCallRecordCustomer({
    data: {
        callFile: '(string) 录音文件地址',
        callResult: '(integer) 呼叫结果 0 初始化 1已接通 2 未接通',
        caseId: '(integer) 案件编号',
        connectAt: '(string) 接通时间',
        contactName: '(string) 联系人名称',
        contactRelation: '(string) 联系人关系',
        duration: '(integer) undefined',
        endAt: '(string) 挂断时间',
        mobile: '(string) 手机号码',
        prefix: '(string) 电话前缀',
        startAt: '(string) 拨打时间',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "callFile": "(string) undefined",
    "callResult": "(integer) undefined",
    "caseId": "(integer) undefined",
    "connectAt": "(string) undefined",
    "contactName": "(string) undefined",
    "contactRelation": "(string) undefined",
    "duration": "(integer) undefined",
    "endAt": "(string) undefined",
    "id": "(integer) undefined",
    "mobile": "(string) undefined",
    "operatorId": "(integer) undefined",
    "operatorTel": "(string) undefined",
    "prefix": "(string) undefined",
    "startAt": "(string) undefined",
    "status": "(integer) undefined",
    "userId": "(string) undefined"
}
*/



/**
 * 呼叫相关线路    /customer/call/mobileStrategy
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postCallMobileStrategyCustomer({
    data: {
        caseId: '(integer) 案件编号',
        mobile: '(string) 手机号明文(目前直接使用明文后面考虑废弃)',
        mobileEncode: '(string) 加密后的手机号，后面明文下掉后使用加密手机号',
        relation: '(string) 关系',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "actualNumber": "(string) 呼叫号码",
    "lineSnapshotVO": {
        "location": "(string) 地区",
        "prefix": "(string) 前缀",
        "recommendRate": "(number) 推荐度",
        "surplusTimes": "(integer) 剩余次数",
        "type": "(integer) 线路类型"
    },
    "peerNumber": "(string) 真实号码",
    "prefix": "(string) 前缀",
    "strategy": "(integer) 策略"
}
*/



/**
 * 账单信息    /customer/case/billInfo
 *
 * @params      { Integer  }      caseId                        caseId
 * @params      { Integer  }      applyId                       applyId
 */
CollectionService.getCaseBillInfoCustomer({
    params: {
        caseId: 'undefined',
        applyId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "accountBalance": "(number) 账面余额",
    "applyId": "(integer) 订单id",
    "cardStatus": "(string) 卡状态",
    "consumeStatus": "(string) 消费功能状态 -1：未知 1：开通 0：关闭",
    "isOverdueUser": "(boolean) 是否逾期用户",
    "payAmt": "(number) 本期已还金额",
    "remainMinAmt": "(number) 本期剩余最低应还金额",
    "remitStatus": "(string) 转账功能状态(-1：未知 1：开通 0：关闭),",
    "totalPayAmt": "(number) 账单剩余应还",
    "withdrawStatus": "(string) 取现功能状态(-1：未知 1：开通 0：关闭)"
}
*/



/**
 * 订单代扣    /customer/case/caseWithhold
 *
 * @params      { Integer  }      caseId                        caseId
 * @params      { String   }      loanObjectId                  loanObjectId
 */
CollectionService.getCaseCaseWithholdCustomer({
    params: {
        caseId: 'undefined',
        loanObjectId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 最近登录信息    /customer/case/{caseId}/access-logs
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseCaseIdAccessLogsCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "city": "(string) undefined",
        "deviceId": "(integer) undefined",
        "ip": "(string) undefined",
        "logTime": "(string) undefined",
        "platform": "(string) undefined"
    }
]
*/



/**
 * 流转记录    /customer/case/{caseId}/apply-logs
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseCaseIdApplyLogsCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "applyReason": "(string) undefined",
        "event": "(string) undefined",
        "operationTime": "(string) undefined",
        "operatorId": "(integer) undefined",
        "operatorName": "(string) undefined"
    }
]
*/



/**
 * 协议流转    /customer/case/{caseId}/assign-logs
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseCaseIdAssignLogsCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "assignExpireTime": "(string) 预计到期时间",
        "caseId": "(integer) undefined",
        "companyId": "(integer) undefined",
        "companyName": "(string) 催收员",
        "hand": "(integer) 催收阶段",
        "maxHistoryOverdueDays": "(integer) 历史最长逾期天数",
        "maxHistoryOverdueStageCount": "(integer) 历史最长逾期期数",
        "operationTime": "(string) 委托时间",
        "overdueDays": "(integer) 最长逾期天数",
        "overdueStageCount": "(integer) 最长逾期期数",
        "preSettleAmount": "(number) 分案金额",
        "realExpireTime": "(string) 实际退案时间",
        "repayBeforeAssign": "(number) 委前还款",
        "repaySum": "(number) 累计还款",
        "result": "(string) undefined"
    }
]
*/



/**
 * 信用卡账单总览接口    /customer/case/{caseId}/bills
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseCaseIdBillsCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "bankId": "(integer) 银行id",
        "bankName": "(string) 银行名称",
        "bills": [
            {
                "billDate": {
                    "date": "(integer) undefined",
                    "day": "(integer) undefined",
                    "hours": "(integer) undefined",
                    "minutes": "(integer) undefined",
                    "month": "(integer) undefined",
                    "nanos": "(integer) undefined",
                    "seconds": "(integer) undefined",
                    "time": "(integer) undefined",
                    "timezoneOffset": "(integer) undefined",
                    "year": "(integer) undefined"
                },
                "billId": "(integer) id",
                "cardNum": "(string) 卡号",
                "createTime": "(string) 信用卡账单导入时间",
                "creditLimit": "(number) 额度",
                "firstHandBill": "(boolean) 账单来源",
                "interest": "(number) 利息",
                "minPayment": "(number) 最低还款",
                "newBalance": "(number) 应还款",
                "overdue": "(number) 滞纳金",
                "payment": "(number) 实际还款",
                "paymentDueDate": {
                    "date": "(integer) undefined",
                    "day": "(integer) undefined",
                    "hours": "(integer) undefined",
                    "minutes": "(integer) undefined",
                    "month": "(integer) undefined",
                    "nanos": "(integer) undefined",
                    "seconds": "(integer) undefined",
                    "time": "(integer) undefined",
                    "timezoneOffset": "(integer) undefined",
                    "year": "(integer) undefined"
                },
                "repayRate": "(string) 还款比",
                "useRate": "(string) 额度使用率"
            }
        ],
        "cardNums": "(string) 卡号"
    }
]
*/



/**
 * 挂账金额查询    /customer/case/{caseId}/pendAmount
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseCaseIdPendAmountCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(number) undefined"
*/



/**
 * 淘宝地址    /customer/case/{caseId}/taobao-address
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseCaseIdTaobaoAddressCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "address": "(string) 地址",
        "count": "(integer) 使用次数",
        "lastUseTime": "(string) 最后使用时间",
        "mobile": "(string) undefined",
        "region": "(string) undefined",
        "userName": "(string) undefined"
    }
]
*/



/**
 * add    /customer/contact/add
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postContactAddCustomer({
    data: {
        caseId: '(integer) 案件编号',
        contactName: '(string) 联系人姓名',
        mobile: '(string) 联系人电话',
        mobileType: '(string) 是否手动, 1 运营商, 2 手动添加',
        relation: '(string) 关系',
        remark: '(string) 备注',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 通讯录黑名单添加    /customer/contact/addMobileBlack
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postContactAddMobileBlackCustomer({
    data: {
        caseId: '(integer) 案件编号',
        contactName: '(string) 联系人姓名',
        limitType: '(integer) 限制方式 0案件维度 1用户维度 2全局',
        mobile: '(string) 手机号啊',
        reason: '(string) 添加原因',
        relation: '(string) 关系',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 通讯录黑名单列表获取    /customer/contact/getMobileBlackList
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postContactGetMobileBlackListCustomer({
    data: {
        direction: '(string) undefined',
        limitType: '(integer) 0案件维度 1用户维度',
        mobile: '(string) 手机号码',
        offset: '(integer) undefined',
        pageNumber: '(integer) undefined',
        pageSize: '(integer) undefined',
        property: '(string) undefined',
        userId: '(string) 51Id',
        userName: '(string) 用户名称',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "caseId": "(integer) 案件编号",
            "contactName": "(string) 联系人姓名",
            "hand": "(integer) 手别",
            "id": "(integer) 黑名单记录主键",
            "limitType": "(integer) 适用维度",
            "mobile": "(string) 手机号码",
            "operatorId": "(integer) 操作人id",
            "operatorName": "(string) 操作人名称",
            "productGroupName": "(string) 产品组",
            "reason": "(string) 原因",
            "relation": "(string) 联系人关系",
            "updateTime": "(string) 操作事件",
            "userId": "(string) 51Id",
            "userName": "(string) 用户姓名"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * remark    /customer/contact/remark
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postContactRemarkCustomer({
    data: {
        caseId: '(integer) 案件编号',
        contactName: '(string) 联系人姓名',
        mobile: '(string) 联系人电话',
        mobileType: '(string) 是否手动, 1 运营商, 2 手动添加',
        relation: '(string) 关系',
        remark: '(string) 备注',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 释放通讯录黑名单    /customer/contact/removeMobileBlack
 *
 * @params      { Integer  }      id                            id
 */
CollectionService.postContactRemoveMobileBlackCustomer({
    params: {
        id: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 通讯录    /customer/contactList
 *
 * @params      { Integer  }      caseId                        案件编号
 */
CollectionService.getContactListCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "contactStat": {
        "callSelfCount": "(integer) 拨打本人通话数量",
        "callSelfEffCount": "(integer) 拨打本人有效通话",
        "callSurCount": "(integer) 拨打周边通话数量",
        "callSurEffCount": "(integer) 拨打周边有效通话",
        "recordWillingCount": "(integer) 愿意转告催记数量"
    },
    "contacts": [
        {
            "accountStatus": "(string) 账户状态",
            "callCountCur": "(integer) 本次拨打有效次数统计",
            "callCountHistory": "(integer) 历史拨打次数",
            "callRelationId": "(integer) 关系枚举code",
            "callResultId": "(integer) 电话结果",
            "callResultName": "(string) 电话结果描述",
            "collectTimes": "(integer) 催收次数",
            "completionName": "(string) 补充名称",
            "contactTagList": [],
            "createAt": "(string) 创建时间",
            "dialInCount": "(integer) 接通次数",
            "dialInLongest": "(integer) 总接听通话时间",
            "dialOutCount": "(integer) 拨打次数",
            "dialOutLongest": "(integer) 总拨打通话时间",
            "earliestContactTime": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "effCallCountCur": "(integer) 本次拨打有效次数统计",
            "effCountHistory": "(integer) 历史有效拨打",
            "encryptedMobile": "(string) 手机-用于获取实际手机号码",
            "followPriority": "(integer) 重点跟进0 否 1 是",
            "lastAccountStatus": "(string) 最后一次账户状态",
            "lastAccountStatusDesc": "(string) undefined",
            "lastContent": "(string) 最后一次催记内容",
            "lastEffectiveContent": "(string) 最后一次有效通话内容",
            "lastEffectiveTime": "(string) 最后一次有效的跟进时间",
            "lastFollowTime": "(string) 最后一次跟进时间",
            "lastOverdueReason": "(string) 最后一次逾期原因",
            "lastResult": "(string) 最近一次催记结果",
            "markCnt": "(integer) 标记次数",
            "mobile": "(string) 手机-掩码",
            "mobileBelongPlace": "(string) 手机号归属地",
            "mobileType": "(string) undefined",
            "name": "(string) 姓名",
            "priorityFollowTime": "(string) 重点跟进时间",
            "promiseRepayAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "relation": "(string) 关系",
            "remark": "(string) 通讯录备注",
            "score": "(integer) 案件评分",
            "seemMobile": "(string) 疑似长号",
            "smsCount": "(integer) 短信次数",
            "source": "(string) 来源"
        }
    ]
}
*/



/**
 * 通用解密(身份证、银行卡等)    /customer/generalDecode
 *
 * @params      { String   }      encodeContent                 encodeContent
 * @params      { Integer  }      caseId                        caseId
 * @params      { String   }      tag                           VIEW_ID_CARD 查看身份证 VIEW_BANK_NO 查看银行卡
 */
CollectionService.getGeneralDecodeCustomer({
    params: {
        encodeContent: 'undefined',
        caseId: 'undefined',
        tag: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 获取小文件系统图片    /customer/image/{fid}
 *
 * @params      { String   }      fid                           fid
 */
CollectionService.getImageFidCustomer({
    params: {
        fid: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取小文件系统图片2    /customer/image2/{fid}
 *
 * @params      { String   }      fid                           fid
 */
CollectionService.getImage2FidCustomer({
    params: {
        fid: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 电话页    /customer/phoneList
 *
 * @params      { Integer  }      caseId                        案件编号
 */
CollectionService.getPhoneListCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "contactStat": {
        "callSelfCount": "(integer) 拨打本人通话数量",
        "callSelfEffCount": "(integer) 拨打本人有效通话",
        "callSurCount": "(integer) 拨打周边通话数量",
        "callSurEffCount": "(integer) 拨打周边有效通话",
        "recordWillingCount": "(integer) 愿意转告催记数量"
    },
    "contacts": [
        {
            "accountStatus": "(string) 账户状态",
            "callCountCur": "(integer) 本次拨打有效次数统计",
            "callCountHistory": "(integer) 历史拨打次数",
            "callRelationId": "(integer) 关系枚举code",
            "callResultId": "(integer) 电话结果",
            "callResultName": "(string) 电话结果描述",
            "collectTimes": "(integer) 催收次数",
            "completionName": "(string) 补充名称",
            "contactTagList": [],
            "createAt": "(string) 创建时间",
            "dialInCount": "(integer) 接通次数",
            "dialInLongest": "(integer) 总接听通话时间",
            "dialOutCount": "(integer) 拨打次数",
            "dialOutLongest": "(integer) 总拨打通话时间",
            "earliestContactTime": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "effCallCountCur": "(integer) 本次拨打有效次数统计",
            "effCountHistory": "(integer) 历史有效拨打",
            "encryptedMobile": "(string) 手机-用于获取实际手机号码",
            "followPriority": "(integer) 重点跟进0 否 1 是",
            "lastAccountStatus": "(string) 最后一次账户状态",
            "lastAccountStatusDesc": "(string) undefined",
            "lastContent": "(string) 最后一次催记内容",
            "lastEffectiveContent": "(string) 最后一次有效通话内容",
            "lastEffectiveTime": "(string) 最后一次有效的跟进时间",
            "lastFollowTime": "(string) 最后一次跟进时间",
            "lastOverdueReason": "(string) 最后一次逾期原因",
            "lastResult": "(string) 最近一次催记结果",
            "markCnt": "(integer) 标记次数",
            "mobile": "(string) 手机-掩码",
            "mobileBelongPlace": "(string) 手机号归属地",
            "mobileType": "(string) undefined",
            "name": "(string) 姓名",
            "priorityFollowTime": "(string) 重点跟进时间",
            "promiseRepayAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "relation": "(string) 关系",
            "remark": "(string) 通讯录备注",
            "score": "(integer) 案件评分",
            "seemMobile": "(string) 疑似长号",
            "smsCount": "(integer) 短信次数",
            "source": "(string) 来源"
        }
    ]
}
*/



/**
 * 催记    /customer/records
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getRecordsCustomer({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "content": "(string) 内容",
        "operationTime": "(string) 操作时间",
        "operatorId": "(integer) undefined"
    }
]
*/



/**
 * 催记添加    /customer/records/add
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postRecordsAddCustomer({
    data: {
        callRecordId: '(integer) 电话记录编号',
        callResult: '(string) 电话结果',
        caseId: '(integer) 案件ID',
        caseStatus: '(string) 案件状态',
        collectContent: '(string) 催收内容',
        followPriority: '(integer) 重点跟进 0 不是  1是',
        mobile: '(string) 联系人电话',
        nextFollowTime: '(string) 下次跟进时间',
        recordType: '(string) 催收方式',
        relation: '(string) 与本人关系',
        targetName: '(string) 联系人名称',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 商家端全局统计    /dataVisual/companyStatistic
 *
 */
CollectionService.getCompanyStatisticDataVisual({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "assignedCaseNum": "(integer) 在催案件数",
    "totalRepayAmount": "(number) 自然月协议期回款总额",
    "unAssignRepayAmount": "(number) 自然月委案外回款总额"
}
*/



/**
 * 委外端全局统计    /dataVisual/globalStatistic
 *
 */
CollectionService.getGlobalStatisticDataVisual({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "assignedCaseNum": "(integer) 在催案件数",
    "totalRepayAmount": "(number) 自然月协议期回款总额",
    "unAssignRepayAmount": "(number) 自然月委案外回款总额"
}
*/



/**
 * 委外端催收员维度明细查询    /dataVisual/operatorQuery
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOperatorQueryDataVisual({
    data: {
        assignAt: '(string) 分案批次月份',
        operatorIds: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "details": [
        {
            "assignAmount": "(number) 分案金额",
            "assignBatch": "(string) 分案批次 yyyy年MM月",
            "assignedCaseNum": "(integer) 当前分案案件数",
            "batchRepayAmount": "(number) 批次回收金额",
            "batchRepayRate": "(number) 批次回款率",
            "companyName": "(string) 机构名称",
            "notFollowed": "(integer) 当前未跟进",
            "notFollowedLast7Days": "(integer) 最近7天未跟进",
            "onAssignCaseNum": "(integer) 当前在催案件数",
            "operatorName": "(string) 催收员名称"
        }
    ]
}
*/



/**
 * 委外端数据明细查询    /dataVisual/outsourceQuery
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOutsourceQueryDataVisual({
    data: {
        assignAt: '(string) 分案批次月份',
        caseAmountTag: [],
        company: [],
        groupId: [],
        hand: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "handDetail": [
        {
            "detail": [
                {
                    "assignAmount": "(number) 分案金额",
                    "assignBatch": "(string) 分案批次 yyyy年MM月",
                    "assignedCaseNum": "(integer) 当前分案案件数",
                    "batchRepayAmount": "(number) 批次回收金额",
                    "batchRepayRate": "(number) 批次回款率",
                    "companyName": "(string) 机构名称",
                    "hand": "(integer) 手别",
                    "notFollowed": "(integer) 当前未跟进",
                    "notFollowedLast7Days": "(integer) 最近7天未跟进",
                    "onAssignCaseNum": "(integer) 当前在催案件数"
                }
            ],
            "hand": "(integer) undefined",
            "handStatistic": {
                "assignAmount": "(number) 分案金额",
                "assignBatch": "(string) 分案批次 yyyy年MM月",
                "assignedCaseNum": "(integer) 当前分案案件数",
                "batchRepayAmount": "(number) 批次回收金额",
                "batchRepayRate": "(number) 批次回款率",
                "companyName": "(string) 机构名称",
                "hand": "(integer) 手别",
                "notFollowed": "(integer) 当前未跟进",
                "notFollowedLast7Days": "(integer) 最近7天未跟进",
                "onAssignCaseNum": "(integer) 当前在催案件数"
            }
        }
    ],
    "totalStatistic": {
        "assignAmount": "(number) 分案金额",
        "assignBatch": "(string) 分案批次 yyyy年MM月",
        "assignedCaseNum": "(integer) 当前分案案件数",
        "batchRepayAmount": "(number) 批次回收金额",
        "batchRepayRate": "(number) 批次回款率",
        "companyName": "(string) 机构名称",
        "hand": "(integer) 手别",
        "notFollowed": "(integer) 当前未跟进",
        "notFollowedLast7Days": "(integer) 最近7天未跟进",
        "onAssignCaseNum": "(integer) 当前在催案件数"
    }
}
*/



/**
 * 通讯录    /debtTransfer/dispatched/contactList
 *
 * @params      { Integer  }      debtId                        debtId
 */
CollectionService.getDispatchedContactListDebtTransfer({
    params: {
        debtId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "contactAt": "(string) undefined",
        "dialInCount": "(integer) undefined",
        "dialOutCount": "(integer) undefined",
        "location": "(string) undefined",
        "name": "(string) undefined",
        "phone": "(string) undefined",
        "relation": "(string) undefined",
        "smsCount": "(integer) undefined"
    }
]
*/



/**
 * 搜索    /debtTransfer/dispatched/search
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postDispatchedSearchDebtTransfer({
    data: {
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
        userName: '(string) 用户姓名',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "emg1Name": "(string) 紧急联系人1姓名",
            "emg1Phone": "(string) 紧急联系人1号码",
            "emg1Relation": "(string) 紧急联系人1关系",
            "emg2Name": "(string) 紧急联系人2姓名",
            "emg2Phone": "(string) 紧急联系人2号码",
            "emg2Relation": "(string) 紧急联系人2关系",
            "gender": "(string) 性别",
            "homeAddress": "(string) 家庭住址",
            "id": "(integer) 记录编号",
            "idAddress": "(string) 户籍地址",
            "idCardNum": "(string) 身份证号",
            "lendAmount": "(number) 放款金额",
            "loanType": "(integer) 清算产品编号",
            "orderId": "(string) 订单编号",
            "remainCapital": "(number) 剩余应还本金",
            "userName": "(string) 用户姓名"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * 初筛池批量剔除    /debtTransfer/initial/batchRemove
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postInitialBatchRemoveDebtTransfer({
    data: {
        idList: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 初筛池批量剔除    /debtTransfer/initial/debtApply
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postInitialDebtApplyDebtTransfer({
    data: {
        assetBatchNo: '(string) 资产批次号',
        debtTag: '(string) 核销标识',
        idList: [],
        latestRepayLower: '(integer) 最近还款间距下限',
        latestRepayUpper: '(integer) 最近还款间距上限',
        totalAmountLimit: '(number) 申请总金额上限',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 债转发起    /debtTransfer/initial/debtInitiate
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postInitialDebtInitiateDebtTransfer({
    data: {
        assetType: '(integer) 资产类型',
        isAdvanced: '(boolean) 是否安心计划垫付',
        isAllOverdue: '(boolean) 是否全部到齐',
        isRiskReversedZero: '(boolean) 风险准备金是否为0',
        lendingTime: '',
        mainPart: '(integer) 主体',
        maxOverdue: [],
        overdueOfLastStage: [],
        totalAmount: '(number) 核销总金额',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 初筛池搜索    /debtTransfer/initial/search
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postInitialSearchDebtTransfer({
    data: {
        orderId: '(string) undefined',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
        status: '(string) undefined',
        userId: '(string) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "pageResponse": {
        "content": [
            {
                "id": "(integer) 记录编号",
                "loanObjectId": "(string) 标的编号",
                "maxOverdue": "(integer) 最大逾期天数",
                "orderId": "(string) 订单编号",
                "processStatus": "(string) 处理状态",
                "transferAmount": "(number) 债转金额",
                "userId": "(string) 51编号",
                "userName": "(string) 客户姓名"
            }
        ],
        "pageNumber": "(integer) 当前页码",
        "pageSize": "(integer) 每页大小",
        "totalElements": "(integer) 总记录数"
    },
    "totalAmount": "(number) 当前筛选结果总金额"
}
*/



/**
 * 派发/退包金额计算    /debtTransfer/queue/amountCal
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postQueueAmountCalDebtTransfer({
    data: {
        buyerId: '(integer) 受让方编号',
        debtBatchNo: '(string) 核销批次号',
        source: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(number) undefined"
*/



/**
 * 核销退包    /debtTransfer/queue/back
 *
 * @params      { String   }      debtBatchNo                   debtBatchNo
 */
CollectionService.postQueueBackDebtTransfer({
    params: {
        debtBatchNo: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 退包批次号对应机构获取    /debtTransfer/queue/backBuyer
 *
 * @params      { Object   }      param                         param
 */
CollectionService.getQueueBackBuyerDebtTransfer({
    data: {
        buyerId: '(integer) 受让方编号',
        debtBatchNo: '(string) 核销批次号',
        source: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 还款状态标识/指定受让方    /debtTransfer/queue/canRepayTag
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postQueueCanRepayTagDebtTransfer({
    data: {
        buyerId: '(integer) 受让方',
        canRepayStatus: '(string) 还款状态',
        debtBatchNo: '(string) 核销批次号',
        debtOutExcluded: '(boolean) undefined',
        debtTagEnum: '(string) 核销标识',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 流转历史查询    /debtTransfer/queue/circulateHistory
 *
 * @params      { Integer  }      debtId                        debtId
 */
CollectionService.getQueueCirculateHistoryDebtTransfer({
    params: {
        debtId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "backTime": "(string) 退包时间",
        "buyerName": "(string) 受让方",
        "dispatchTime": "(string) 分配时间",
        "orderId": "(string) 订单编号",
        "userId": "(string) 51编号"
    }
]
*/



/**
 * 债转退出    /debtTransfer/queue/debtOut
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postQueueDebtOutDebtTransfer({
    data: {
        idList: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 核销派发    /debtTransfer/queue/dispatch
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postQueueDispatchDebtTransfer({
    data: {
        buyerId: '(integer) 受让方编号',
        debtBatchNo: '(string) 核销批次号',
        source: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 关联催收案件    /debtTransfer/queue/linkCase
 *
 * @params      { Integer  }      debtId                        debtId
 */
CollectionService.getQueueLinkCaseDebtTransfer({
    params: {
        debtId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 操作历史查询    /debtTransfer/queue/operateHistory
 *
 * @params      { Integer  }      debtId                        debtId
 */
CollectionService.getQueueOperateHistoryDebtTransfer({
    params: {
        debtId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "operateTime": "(string) 操作时间",
        "operateType": "(string) 操作类型",
        "operatorName": "(string) 操作人"
    }
]
*/



/**
 * 债转队列搜索    /debtTransfer/queue/search
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postQueueSearchDebtTransfer({
    data: {
        buyerId: '(integer) 受让方编号',
        canRepayStatus: '(string) 还款状态',
        debtBatchNo: '(string) 核销批次号',
        debtOutTag: '(string) 核销退出',
        orderId: '(string) 订单编号',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
        status: '(string) 核销订单状态',
        userId: '(string) 51编号',
        userName: '(string) 用户姓名',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "canRepayStatus": "(string) undefined",
            "debtBatchNo": "(string) undefined",
            "debtStatus": "(string) undefined",
            "id": "(integer) undefined",
            "loanObjectId": "(string) undefined",
            "orderId": "(string) undefined",
            "remainCapital": "(number) undefined",
            "remainInterest": "(number) undefined",
            "userId": "(string) undefined",
            "userName": "(string) undefined"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * 判断是否需要通过IAM登录    /iam
 *
 */
CollectionService.getiam({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 登录    /login
 *
 * @params      { Object   }      loginParam                    loginParam
 * @params      { String   }      Authorization                 Authorization
 */
CollectionService.postlogin({
    data: {
        account: '(string) undefined',
        password: '(string) undefined',
        userId: '(integer) undefined',
        verifyCode: '(string) undefined',
    },
    headers: {
        Authorization: 'undefined', //Authorization
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 退出    /logout
 *
 */
CollectionService.postlogout({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外机构内部留案标记取消    /mark/delayCancel
 *
 * @params      { Integer  }      caseId                        caseId
 * @params      { String   }      userId                        
 */
CollectionService.getDelayCancelMark({
    params: {
        caseId: 'undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 委外机构内部留案标记    /mark/delayMark
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postDelayMarkMark({
    data: {
        caseIds: [],
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 查询自定义站内信    /notices/customize/query
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postCustomizeQueryNotices({
    data: {
        endAt: '(string) 截止时间',
        keyword: '(string) 关键词,可以为null',
        noticeSendType: '(string) 发送类型,可以为null',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
        startAt: '(string) 开始时间',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "content": "(string) 站内信发送内容",
            "noticeSendType": "(string) 站内信发送类型",
            "noticeTime": "(string) 站内信发送时间",
            "senderId": "(integer) 站内信发送人编号",
            "senderName": "(string) 站内信发送人名称",
            "title": "(string) 站内信标题"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * 发送自定义站内信    /notices/customize/send
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postCustomizeSendNotices({
    data: {
        content: '(string) 站内信内容',
        noticeSendType: '(string) 站内信发送方式',
        noticeTime: '(string) 站内信发送时间，可以为null',
        title: '(string) 站内信标题',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取站内信    /notices/pull
 *
 * @params      { Object   }      pullParam                     pullParam
 */
CollectionService.postPullNotices({
    data: {
        noticeType: '(string) undefined',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "companyId": "(integer) undefined",
            "content": "(string) undefined",
            "createTime": "(string) undefined",
            "id": "(integer) undefined",
            "link": "(string) undefined",
            "noticeTime": "(string) undefined",
            "noticeType": "(string) undefined",
            "operatorId": "(integer) undefined",
            "readTime": "(string) undefined",
            "readed": "(boolean) undefined"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * 站内信设为已读    /notices/read
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postReadNotices({
    data: {
        ids: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 站内信数量统计    /notices/statistic
 *
 */
CollectionService.getStatisticNotices({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "detail": {},
    "total": "(integer) undefined"
}
*/



/**
 * 根据UserId获取未结清的委外订单    /offlineclaim/claim/orderQuery
 *
 * @params      { String   }      externalId                    51编号
 * @params      { Integer  }      groupId                       产品组编号
 * @params      { Number   }      toClaimAmountTotal            待认领总额
 * @params      { String   }      userId                        user id
 */
CollectionService.getClaimOrderQueryOfflineclaim({
    params: {
        externalId: 'undefined',
        groupId: 'undefined',
        toClaimAmountTotal: 'undefined',
    },
    headers: {
        userId: 'undefined', //user id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "response": [
        {
            "areaCode": "(string) 案件区域",
            "caseId": "(integer) 案件编号",
            "claimAmount": "(number) 需要认领的金额",
            "groupId": "(integer) 产品组ID",
            "loanId": "(integer) 催收订单编号",
            "loanObjectId": "(string) 标的Id",
            "maxHistoryOverdue": "(integer) 逾期天数",
            "operatorId": "(integer) 委外公司id",
            "operatorName": "(string) 操作员/委外公司名称",
            "orderId": "(string) 订单Id",
            "orderLetAmount": "(number) 应还金额",
            "orderLetTotalAmount": "(number) 应还总额",
            "outsourceName": "(string) 委外公司名称",
            "productId": "(integer) 产品ID",
            "productName": "(string) 产品名称",
            "userApplyAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "userDueAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "userId": "(string) 51ID",
            "userName": "(string) 客户姓名"
        }
    ]
}
*/



/**
 * 新增人员    /operator/addOperator
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postAddOperatorOperator({
    data: {
        account: '(string) undefined',
        assignFactor: '(integer) undefined',
        companyId: '(integer) undefined',
        domainAccount: '(string) undefined',
        extensionTel: '(string) undefined',
        idCard: '(string) undefined',
        leaderId: '(integer) undefined',
        name: '(string) undefined',
        operatorType: '(string) undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 查看人员    /operator/getCompanyOperator
 *
 * @params      { Integer  }      companyId                     companyId
 * @params      { String   }      operatorType                  operatorType
 * @params      { String   }      userId                        
 */
CollectionService.getGetCompanyOperatorOperator({
    params: {
        companyId: 'undefined',
        operatorType: 'undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "caseNum": "(integer) 案件数量",
        "leaderName": "(string) leader姓名",
        "operator": {
            "account": "(string) undefined",
            "admin": "(boolean) undefined",
            "applyLeaveAt": "(string) undefined",
            "assignFactor": "(integer) undefined",
            "code": "(string) undefined",
            "company": {
                "accountNum": "(integer) undefined",
                "companyName": "(string) undefined",
                "companyProv": "(string) undefined",
                "contactEmail": "(string) undefined",
                "contactMobile": "(string) undefined",
                "contactName": "(string) undefined",
                "effectiveAt": "(string) undefined",
                "emailList": [],
                "expiryAt": "(string) undefined",
                "gmt51Create": "(string) undefined",
                "gmt51Modify": "(string) undefined",
                "id": "(integer) undefined",
                "manageAccount": "(string) undefined",
                "mobileList": [],
                "outsourceSpecialist": "(string) undefined",
                "privileges": "(string) undefined",
                "registAddress": "(string) undefined",
                "registAt": "(string) undefined",
                "specialistName": "(string) undefined",
                "status": "(string) undefined",
                "zipCode": "(string) undefined"
            },
            "companyId": "(integer) undefined",
            "creater": "(string) undefined",
            "departmentId": "(string) undefined",
            "disabled": "(boolean) undefined",
            "domainAccount": "(string) undefined",
            "extensionTel": "(string) undefined",
            "gmt51Create": "(string) undefined",
            "gmt51Modify": "(string) undefined",
            "id": "(integer) undefined",
            "idCard": "(string) undefined",
            "init": "(boolean) undefined",
            "leaderId": "(integer) undefined",
            "leaveAt": "(string) undefined",
            "name": "(string) undefined",
            "operatorType": "(string) undefined",
            "out": "(boolean) undefined",
            "outManager": "(boolean) undefined",
            "passWord": "(string) undefined",
            "state": "(string) undefined",
            "system": "(boolean) undefined"
        },
        "recentTime": "(string) 最近登录时间",
        "roleName": "(string) 角色"
    }
]
*/



/**
 * 获取当前角色信息    /operator/getRole
 *
 * @params      { String   }      userId                        
 */
CollectionService.getGetRoleOperator({
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "caseNum": "(integer) 案件数量",
    "leaderName": "(string) leader姓名",
    "operator": {
        "account": "(string) undefined",
        "admin": "(boolean) undefined",
        "applyLeaveAt": "(string) undefined",
        "assignFactor": "(integer) undefined",
        "code": "(string) undefined",
        "company": {
            "accountNum": "(integer) undefined",
            "companyName": "(string) undefined",
            "companyProv": "(string) undefined",
            "contactEmail": "(string) undefined",
            "contactMobile": "(string) undefined",
            "contactName": "(string) undefined",
            "effectiveAt": "(string) undefined",
            "emailList": [],
            "expiryAt": "(string) undefined",
            "gmt51Create": "(string) undefined",
            "gmt51Modify": "(string) undefined",
            "id": "(integer) undefined",
            "manageAccount": "(string) undefined",
            "mobileList": [],
            "outsourceSpecialist": "(string) undefined",
            "privileges": "(string) undefined",
            "registAddress": "(string) undefined",
            "registAt": "(string) undefined",
            "specialistName": "(string) undefined",
            "status": "(string) undefined",
            "zipCode": "(string) undefined"
        },
        "companyId": "(integer) undefined",
        "creater": "(string) undefined",
        "departmentId": "(string) undefined",
        "disabled": "(boolean) undefined",
        "domainAccount": "(string) undefined",
        "extensionTel": "(string) undefined",
        "gmt51Create": "(string) undefined",
        "gmt51Modify": "(string) undefined",
        "id": "(integer) undefined",
        "idCard": "(string) undefined",
        "init": "(boolean) undefined",
        "leaderId": "(integer) undefined",
        "leaveAt": "(string) undefined",
        "name": "(string) undefined",
        "operatorType": "(string) undefined",
        "out": "(boolean) undefined",
        "outManager": "(boolean) undefined",
        "passWord": "(string) undefined",
        "state": "(string) undefined",
        "system": "(boolean) undefined"
    },
    "recentTime": "(string) 最近登录时间",
    "roleName": "(string) 角色"
}
*/



/**
 * 查看专员及管理机构    /operator/getSpecialistCompany
 *
 * @params      { String   }      userId                        
 */
CollectionService.getGetSpecialistCompanyOperator({
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "companyList": [],
        "operatorId": "(integer) undefined",
        "operatorName": "(string) undefined"
    }
]
*/



/**
 * 查看内部人员    /operator/getSystemOperator
 *
 * @params      { String   }      userId                        
 */
CollectionService.getGetSystemOperatorOperator({
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "caseNum": "(integer) 案件数量",
        "leaderName": "(string) leader姓名",
        "operator": {
            "account": "(string) undefined",
            "admin": "(boolean) undefined",
            "applyLeaveAt": "(string) undefined",
            "assignFactor": "(integer) undefined",
            "code": "(string) undefined",
            "company": {
                "accountNum": "(integer) undefined",
                "companyName": "(string) undefined",
                "companyProv": "(string) undefined",
                "contactEmail": "(string) undefined",
                "contactMobile": "(string) undefined",
                "contactName": "(string) undefined",
                "effectiveAt": "(string) undefined",
                "emailList": [],
                "expiryAt": "(string) undefined",
                "gmt51Create": "(string) undefined",
                "gmt51Modify": "(string) undefined",
                "id": "(integer) undefined",
                "manageAccount": "(string) undefined",
                "mobileList": [],
                "outsourceSpecialist": "(string) undefined",
                "privileges": "(string) undefined",
                "registAddress": "(string) undefined",
                "registAt": "(string) undefined",
                "specialistName": "(string) undefined",
                "status": "(string) undefined",
                "zipCode": "(string) undefined"
            },
            "companyId": "(integer) undefined",
            "creater": "(string) undefined",
            "departmentId": "(string) undefined",
            "disabled": "(boolean) undefined",
            "domainAccount": "(string) undefined",
            "extensionTel": "(string) undefined",
            "gmt51Create": "(string) undefined",
            "gmt51Modify": "(string) undefined",
            "id": "(integer) undefined",
            "idCard": "(string) undefined",
            "init": "(boolean) undefined",
            "leaderId": "(integer) undefined",
            "leaveAt": "(string) undefined",
            "name": "(string) undefined",
            "operatorType": "(string) undefined",
            "out": "(boolean) undefined",
            "outManager": "(boolean) undefined",
            "passWord": "(string) undefined",
            "state": "(string) undefined",
            "system": "(boolean) undefined"
        },
        "recentTime": "(string) 最近登录时间",
        "roleName": "(string) 角色"
    }
]
*/



/**
 * 修改密码    /operator/modifyPwd
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postModifyPwdOperator({
    data: {
        assignFactor: '(integer) undefined',
        disabled: '(boolean) undefined',
        domainAccount: '(string) undefined',
        extensionTel: '(string) undefined',
        leaderId: '(integer) undefined',
        newPassWord: '(string) undefined',
        oldPassWord: '(string) undefined',
        updateType: '(string) undefined',
        userId: '(integer) undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 更新人员信息    /operator/updateOperator
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postUpdateOperatorOperator({
    data: {
        assignFactor: '(integer) undefined',
        disabled: '(boolean) undefined',
        domainAccount: '(string) undefined',
        extensionTel: '(string) undefined',
        leaderId: '(integer) undefined',
        newPassWord: '(string) undefined',
        oldPassWord: '(string) undefined',
        updateType: '(string) undefined',
        userId: '(integer) undefined',
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取相关信息    /options
 *
 * @params      { String   }      userId                        
 */
CollectionService.getoptions({
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "accountTags": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "applyFlowProcess": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "applyFlowStatus": [
        {
            "key": "(integer) undefined",
            "value": "(string) undefined"
        }
    ],
    "applyStatus": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "applyTypes": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "arbitrateProofTypes": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "arbitrateStatus": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "arbitrateTypes": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "areas": [
        {
            "area": "(string) undefined",
            "province": "(string) undefined"
        }
    ],
    "assignTags": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "assignTypes": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "backTypes": [
        {
            "key": "(string) undefined",
            "value": "(string) undefined"
        }
    ],
    "caseAmountTags": "#/definitions/Option«string,string»",
    "companyMarkTags": "#/definitions/Option«string,string»",
    "companyStatusEnums": "#/definitions/Option«string,string»",
    "companys": [
        {
            "key": "(integer) undefined",
            "value": "(string) undefined"
        }
    ],
    "configTypeEnums": [
        {
            "key": "(integer) undefined",
            "value": "(string) undefined"
        }
    ],
    "delayTypes": "#/definitions/Option«string,string»",
    "hands": [
        {
            "key": "(integer) undefined",
            "value": "(string) undefined"
        }
    ],
    "noticeSendTypeEnums": "#/definitions/Option«string,string»",
    "noticeTypeEnums": "#/definitions/Option«string,string»",
    "operatorTypeEnums": "#/definitions/Option«string,string»",
    "outCallResultEnums": "#/definitions/Option«string,string»",
    "outCaseStatusEnums": "#/definitions/Option«string,string»",
    "productGroups": [
        {
            "key": "(integer) undefined",
            "value": "(string) undefined"
        }
    ],
    "relationEnums": "#/definitions/Option«string,string»",
    "repaymentTags": "#/definitions/Option«string,string»",
    "stopOutTypes": "#/definitions/Option«string,string»",
    "stopTypes": "#/definitions/Option«string,string»",
    "systemSettingConfigTypeEnums": "#/definitions/Option«string,string»",
    "tagGroups": "#/definitions/Option«string,string»",
    "userRepayStatusEnums": "#/definitions/Option«string,string»"
}
*/



/**
 * excel文件批量发起委外仲裁／诉讼申请文件模版下载    /outsource/arbitrateBatch
 *
 */
CollectionService.getArbitrateBatchOutsource({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * excel批量提交申请    /outsource/batchHandle
 *
 * @params      { String   }      applyType                     applyType
 * @params      { String   }      applySubType                  applySubType
 * @params      { String   }      applyReason                   applyReason
 * @params      { String   }      alias                         alias
 * @params      { File     }      file                          file
 * @params      { String   }      userId                        
 */
CollectionService.postBatchHandleOutsource({
    params: {
        applyType: 'undefined',
        applySubType: 'undefined',
        applyReason: 'undefined',
        alias: 'undefined',
    },
    data: {
        file: 'undefined',

    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 委外批量操作导入模板下载    /outsource/batchHandleTemplate
 *
 * @params      { String   }      userId                        
 */
CollectionService.getBatchHandleTemplateOutsource({
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 债转    /outsource/transfer
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      userId                        
 */
CollectionService.postTransferOutsource({
    data: {
        alias: '(string) undefined',
        loanObjectIds: [],
    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * excel批量提交仲裁申请    /outsrouce/arbitrate/batchHandle
 *
 * @params      { String   }      applyReason                   applyReason
 * @params      { File     }      file                          file
 * @params      { String   }      userId                        
 */
CollectionService.postArbitrateBatchHandleOutsrouce({
    params: {
        applyReason: 'undefined',
    },
    data: {
        file: 'undefined',

    },
    headers: {
        userId: 'undefined', //
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "result": {}
}
*/



/**
 * 添加角色    /privilege/addRole
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postAddRolePrivilege({
    data: {
        roleCode: '(string) 角色标识',
        roleLevel: '(integer) 角色等级',
        roleName: '(string) 角色名称',
        roleType: '(string) 角色类型',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取权限列表    /privilege/getAll
 *
 */
CollectionService.getGetAllPrivilege({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "hide": "(boolean) undefined",
        "id": "(integer) undefined",
        "name": "(string) undefined",
        "order": "(integer) undefined",
        "uri": []
    }
]
*/



/**
 * 获取委外机构权限列表    /privilege/getByCompany
 *
 * @params      { Integer  }      companyId                     companyId
 */
CollectionService.getGetByCompanyPrivilege({
    params: {
        companyId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[]
*/



/**
 * 获取角色    /privilege/getRole
 *
 */
CollectionService.getGetRolePrivilege({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "applyFlowRoleCodeView": "(string) undefined",
        "roleCode": "(string) undefined",
        "roleDefault": "(boolean) undefined",
        "roleLevel": "(integer) undefined",
        "roleName": "(string) undefined",
        "roleType": "(string) undefined"
    }
]
*/



/**
 * 查询权限列表    /privilege/queryPrivileges
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postQueryPrivilegesPrivilege({
    data: {
        companyId: '(integer) 公司编号 不输入默认查询全部',
        roleCode: '(string) 角色编号',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "flag": "(integer) 标记 0无权限 1有权限",
        "id": "(integer) 权限id",
        "name": "(string) 权限名称",
        "uri": []
    }
]
*/



/**
 * 更新委外机构权限    /privilege/updateCompany
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postUpdateCompanyPrivilege({
    data: {
        companyId: '(integer) 机构编号',
        privilegeIds: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 更新角色权限    /privilege/updateRolePrivileges
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postUpdateRolePrivilegesPrivilege({
    data: {
        companyId: '(integer) 公司编号',
        privilegeIds: [],
        roleCode: '(string) 角色',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 最近转账时间    /receipt/last
 *
 * @params      { String   }      userId                        user id
 */
CollectionService.getLastReceipt({
    headers: {
        userId: 'undefined', //user id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "response": {
        "date": "(integer) undefined",
        "day": "(integer) undefined",
        "hours": "(integer) undefined",
        "minutes": "(integer) undefined",
        "month": "(integer) undefined",
        "nanos": "(integer) undefined",
        "seconds": "(integer) undefined",
        "time": "(integer) undefined",
        "timezoneOffset": "(integer) undefined",
        "year": "(integer) undefined"
    }
}
*/



/**
 * 实时-分案报表生成    /report/actualTimeAssignReport
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postActualTimeAssignReportReport({
    data: {
        assignAt: '(string) undefined',
        productGroupIds: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 报表-在催    /report/agreement
 *
 * @params      { Integer  }      id                            id
 */
CollectionService.getAgreementReport({
    params: {
        id: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 报表-分案    /report/assign
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postAssignReport({
    data: {
        assignAt: '(string) undefined',
        productGroupIds: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 报表-认领    /report/claim
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postClaimReport({
    data: {
        endAt: '(string) 结束还款时间',
        productGroupId: '(integer) 产品组编号',
        startAt: '(string) 开始还款时间',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 报表-回款报表下载    /report/repayDownload
 *
 * @params      { Integer  }      id                            id
 */
CollectionService.getRepayDownloadReport({
    params: {
        id: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 报表-回款报表下载    /report/repayQuery
 *
 */
CollectionService.getRepayQueryReport({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "companyId": "(integer) undefined",
        "companyName": "(string) undefined",
        "fid": "(string) undefined",
        "gmt51Create": "(string) 记录创建时间/读取",
        "gmt51Modify": "(string) 记录修改时间/读取",
        "gmt51_create": "(string) 记录创建时间/存储",
        "gmt51_modify": "(string) 记录修改时间/存储",
        "id": "(integer) undefined",
        "logType": "(string) undefined",
        "productGroupId": "(integer) undefined",
        "productGroupName": "(string) undefined",
        "zipCode": "(string) undefined"
    }
]
*/



/**
 * 报表-回款报表异步执行    /report/repaySync
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postRepaySyncReport({
    data: {
        endAt: '(string) undefined',
        productGroupIds: [],
        startAt: '(string) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 编辑短信模板    /sms/editSmsTemplate
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postEditSmsTemplateSms({
    data: {
        modifyType: '(integer) 操作类型 0新增 1编辑',
        sendTargetType: '(integer) 发送对象 0本人 1第三方',
        templateGroupName: '(string) 模板类型',
        templateVOList: [{
        	signList: [{
        		processId: '(string) 审批工单',
        		signName: '(string) 签名名称',
        		status: '(string) 状态',
        	}],
        	switchFlag: '(boolean) 是否启用',
        	templateContent: '(string) 模板内容',
        	templateId: '(string) 短信模板编号 短信发送和预览场景使用',
        	templateName: '(string) 模板名',
        	templateNo: '(integer) 模板序列号 编辑场景或停启用场景使用',
        }],
        tenant: '(string) 模板租户',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取短信发送记录    /sms/getCaseSmsRecords
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.postGetCaseSmsRecordsSms({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "receiveMobile": "(string) 记录手机号码",
        "receiveName": "(string) 发送姓名",
        "receiveRelation": "(string) 发送关系",
        "sendResult": "(string) 发送结果",
        "sendTime": "(string) 发送时间",
        "smsContent": "(string) 发送内容"
    }
]
*/



/**
 * 获取短信收费标准    /sms/getSmsCostList
 *
 */
CollectionService.postGetSmsCostListSms({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "channelName": "(string) 渠道名称",
        "channelNo": "(string) 渠道编号",
        "cost": "(number) 价格单位：元",
        "sendTargetType": "(integer) 发送目标 0本人 1第三方"
    }
]
*/



/**
 * 获取短信发送模板    /sms/getSmsTemplate
 *
 * @params      { Integer  }      caseId                        caseId
 * @params      { String   }      tenant                        tenant
 */
CollectionService.postGetSmsTemplateSms({
    params: {
        caseId: 'undefined',
        tenant: 'collection-service',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
[
    {
        "sendTargetType": "(integer) 发送目标 0本人 1第三方",
        "templateGroupId": "(string) 模板分组编号",
        "templateGroupName": "(string) 模板分组名",
        "templateList": [
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
    }
]
*/



/**
 * 短信记录报表    /sms/report
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postReportSms({
    data: {
        endAt: '(string) 截止时间',
        startAt: '(string) 开始时间',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 发送短信    /sms/sendSms
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postSendSmsSms({
    data: {
        caseId: '(integer) 案件编号',
        mobile: '(string) 手机号码',
        receiveName: '(string) 接收人姓名',
        receiveRelation: '(string) 接收人与发送人关系',
        sendTargetType: '(integer) 发送对象 0本人 1第三方',
        templateId: '(string) 模板编号',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 发送短信    /sms/smsContentPreview
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postSmsContentPreviewSms({
    data: {
        caseId: '(integer) 案件编号',
        mobile: '(string) 手机号码',
        receiveName: '(string) 接收人姓名',
        receiveRelation: '(string) 接收人与发送人关系',
        sendTargetType: '(integer) 发送对象 0本人 1第三方',
        templateId: '(string) 模板编号',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "costMsg": "(string) 资费说明",
    "smsContent": "(string) 短信内容",
    "templateParams": {}
}
*/



/**
 * 短信模板开关    /sms/smsTemplateSwitch
 *
 * @params      { String   }      templateGroupId               templateGroupId
 * @params      { Integer  }      templateNo                    templateNo
 * @params      { Boolean  }      switchFlag                    switchFlag
 */
CollectionService.postSmsTemplateSwitchSms({
    params: {
        templateGroupId: 'undefined',
        templateNo: 'undefined',
        switchFlag: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 更新短信费用模板    /sms/updateSmsCost
 *
 * @params      { Object   }      smsChannelCostVO              smsChannelCostVO
 */
CollectionService.postUpdateSmsCostSms({
    data: {
        channelName: '(string) 渠道名称',
        channelNo: '(string) 渠道编号',
        cost: '(number) 价格单位：元',
        sendTargetType: '(integer) 发送目标 0本人 1第三方',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 新增标签    /tag/insert
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postInsertTag({
    data: {
        deleted: '(boolean) 标签是否禁用，可修改',
        extend: '(string) 标签额外内容，可修改',
        id: '(integer) 标签ID,修改时传入',
        tagCode: '(string) 标签编号，不能为空',
        tagGroupName: '(string) 标签组',
        tagName: '(string) 标签名称，可修改',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 修改标签    /tag/modify
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postModifyTag({
    data: {
        deleted: '(boolean) 标签是否禁用，可修改',
        extend: '(string) 标签额外内容，可修改',
        id: '(integer) 标签ID,修改时传入',
        tagCode: '(string) 标签编号，不能为空',
        tagGroupName: '(string) 标签组',
        tagName: '(string) 标签名称，可修改',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取标签    /tag/query
 *
 */
CollectionService.getQueryTag({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{}
*/



/**
 * 在催数据    /test/allAssignCaseData
 *
 * @params      { Integer  }      cursor                        cursor
 */
CollectionService.getAllAssignCaseDataTest({
    params: {
        cursor: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 全量退案    /test/assignBatchBack
 *
 */
CollectionService.getAssignBatchBackTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * assignHistoryIdentify    /test/assignHistoryIdentify
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getAssignHistoryIdentifyTest({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * assignHistorySync    /test/assignHistorySync
 *
 */
CollectionService.getAssignHistorySyncTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 异步生成回款报表    /test/asyncRepayReport
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postAsyncRepayReportTest({
    data: {
        endAt: '(string) undefined',
        productGroupIds: [],
        startAt: '(string) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * caseLoanFix    /test/caseLoanFix
 *
 */
CollectionService.getCaseLoanFixTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * caseRefresh    /test/caseRefresh
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseRefreshTest({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * repayRefresh    /test/caseRepaySync
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.getCaseRepaySyncTest({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 通讯录    /test/contact
 *
 * @params      { Integer  }      caseId                        caseId
 */
CollectionService.postContactTest({
    params: {
        caseId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "contactStat": {
        "callSelfCount": "(integer) 拨打本人通话数量",
        "callSelfEffCount": "(integer) 拨打本人有效通话",
        "callSurCount": "(integer) 拨打周边通话数量",
        "callSurEffCount": "(integer) 拨打周边有效通话",
        "recordWillingCount": "(integer) 愿意转告催记数量"
    },
    "contacts": [
        {
            "accountStatus": "(string) 账户状态",
            "callCountCur": "(integer) 本次拨打有效次数统计",
            "callCountHistory": "(integer) 历史拨打次数",
            "callRelationId": "(integer) 关系枚举code",
            "callResultId": "(integer) 电话结果",
            "callResultName": "(string) 电话结果描述",
            "collectTimes": "(integer) 催收次数",
            "completionName": "(string) 补充名称",
            "contactTagList": [],
            "createAt": "(string) 创建时间",
            "dialInCount": "(integer) 接通次数",
            "dialInLongest": "(integer) 总接听通话时间",
            "dialOutCount": "(integer) 拨打次数",
            "dialOutLongest": "(integer) 总拨打通话时间",
            "earliestContactTime": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "effCallCountCur": "(integer) 本次拨打有效次数统计",
            "effCountHistory": "(integer) 历史有效拨打",
            "encryptedMobile": "(string) 手机-用于获取实际手机号码",
            "followPriority": "(integer) 重点跟进0 否 1 是",
            "lastAccountStatus": "(string) 最后一次账户状态",
            "lastAccountStatusDesc": "(string) undefined",
            "lastContent": "(string) 最后一次催记内容",
            "lastEffectiveContent": "(string) 最后一次有效通话内容",
            "lastEffectiveTime": "(string) 最后一次有效的跟进时间",
            "lastFollowTime": "(string) 最后一次跟进时间",
            "lastOverdueReason": "(string) 最后一次逾期原因",
            "lastResult": "(string) 最近一次催记结果",
            "markCnt": "(integer) 标记次数",
            "mobile": "(string) 手机-掩码",
            "mobileBelongPlace": "(string) 手机号归属地",
            "mobileType": "(string) undefined",
            "name": "(string) 姓名",
            "priorityFollowTime": "(string) 重点跟进时间",
            "promiseRepayAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "relation": "(string) 关系",
            "remark": "(string) 通讯录备注",
            "score": "(integer) 案件评分",
            "seemMobile": "(string) 疑似长号",
            "smsCount": "(integer) 短信次数",
            "source": "(string) 来源"
        }
    ]
}
*/



/**
 * 通讯录预热    /test/contactPreHeat
 *
 */
CollectionService.postContactPreHeatTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 数据可视化-测试    /test/dataVisualDetail
 *
 */
CollectionService.getDataVisualDetailTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 解密    /test/decode
 *
 * @params      { String   }      code                          code
 */
CollectionService.getDecodeTest({
    params: {
        code: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 加密    /test/encode
 *
 * @params      { String   }      code                          code
 */
CollectionService.getEncodeTest({
    params: {
        code: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(string) undefined"
*/



/**
 * expireBatchRepair    /test/expireBatchDeal
 *
 * @params      { String   }      assignAt                      assignAt
 */
CollectionService.getExpireBatchDealTest({
    params: {
        assignAt: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * fix-log    /test/fix-log
 *
 */
CollectionService.postFixLogTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 城市数据    /test/flushCityData
 *
 * @params      { Integer  }      cursor                        cursor
 */
CollectionService.getFlushCityDataTest({
    params: {
        cursor: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 数据可视化-人员维度-测试    /test/operatorVisualDetail
 *
 */
CollectionService.getOperatorVisualDetailTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 批量清除通讯录缓存    /test/redisBatchDel
 *
 */
CollectionService.getRedisBatchDelTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 清除redis缓存    /test/redisDel
 *
 * @params      { String   }      key                           key
 */
CollectionService.getRedisDelTest({
    params: {
        key: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * repayBatchRepair    /test/repayBatchDeal
 *
 */
CollectionService.getRepayBatchDealTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * repayHistorySync    /test/repayHistorySync
 *
 */
CollectionService.getRepayHistorySyncTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * reset    /test/reset
 *
 */
CollectionService.postResetTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 案件搜索    /test/search
 *
 * @params      { Object   }      param                         param
 * @params      { String   }      profile                       profile
 * @params      { Integer  }      userId                        userId
 */
CollectionService.postSearchTest({
    data: {
        accountStatus: [],
        applicantId: '(integer) 申请人Id',
        applyStatus: '(string) 申请状态',
        applySubType: '(string) 申请子类型',
        applyType: '(string) 申请类型',
        approverId: '(integer) 审核人Id',
        area: [],
        assignExpireTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        assignTimeA: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        assignTimeB: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        caseId: '(integer) 案件ID',
        caseStatus: [],
        caseType: '(string) 案件类型',
        city: [],
        collectOffTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        collectResult: [],
        collectTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        companyId: [],
        hand: [],
        idCard: [],
        lastFollowTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        maxHistoryOverdueDays: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        maxHistoryOverdueStageCount: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        mobile: '(string) 手机号',
        notInTagCode: [],
        overdueAmount: {
        	min: '(number) undefined',
        	max: '(number) undefined',
        },
        overdueDays: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        overdueStageCount: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        ownerId: [],
        ownerName: '(string) 催收员姓名',
        productGroupId: [],
        province: [],
        submitTime: {
        	min: '(integer) undefined',
        	max: '(integer) undefined',
        },
        tagCode: [],
        totalAmount: {
        	min: '(number) undefined',
        	max: '(number) undefined',
        },
        userId: '(string) 客户id',
        userName: '(string) 客户姓名',
        pageRequest: {
        	offset: '(integer) undefined',
        	pageNumber: '(integer) undefined',
        	pageSize: '(integer) undefined',
        	property: '(string) undefined',
        	direction: '(string) undefined',
        },
    },
    headers: {
        profile: 'undefined', //profile
        userId: 'undefined', //userId
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "applicantId": "(integer) 申请人",
            "applicantName": "(string) 申请人姓名",
            "applyDesc": [],
            "applyReason": "(string) 申请原因",
            "applyRemark": "(string) 留案截止时间",
            "applyStatus": "(string) 审核状态",
            "applySubType": "(string) 申请子类型",
            "applySubTypeName": "(string) 申请子类型名称",
            "applyTime": "(integer) 申贷时间",
            "applyType": "(string) 申请类型",
            "approveTime": "(integer) 审核时间",
            "approverId": "(integer) 审核人",
            "approverName": "(string) 审核姓名",
            "area": "(string) 区域",
            "assignExpireTime": "(integer) 分案到期时间",
            "assignTimeA": "(integer) 甲方分案时间",
            "assignTimeB": "(integer) 乙方分案时间",
            "beforeAssignCompany": "(string) 前手催收公司",
            "beforeAssignCompanyId": "(integer) undefined",
            "caseStatus": "(string) 案件状态",
            "caseTags": [],
            "caseType": "(string) 案件类型",
            "checkStatus": "(string) 清算核销状态",
            "collectOffTime": "(integer) 出催时间",
            "collectTime": "(integer) 入催时间",
            "companyId": "(integer) 公司",
            "companyName": "(string) undefined",
            "conflictCompany": [],
            "conflictCompanyId": [],
            "currentPhase": "(string) 逾期阶段",
            "hand": "(integer) 手别",
            "id": "(integer) 案件Id",
            "lastFollowResult": "(string) 最后一次跟进结果",
            "lastFollowTime": "(integer) 最后一次跟进时间",
            "maxHistoryOverdueDays": "(integer) 历史最大逾期天数",
            "maxHistoryOverdueStageCount": "(integer) 历史最大逾期期数",
            "nextFollowTime": "(integer) 下次跟进时间",
            "orderAmount": "(number) 订单金额",
            "overdueAmount": "(number) 逾期应还金额",
            "overdueDays": "(integer) 逾期天数",
            "overdueStageCount": "(integer) 逾期期数",
            "overdueStageSum": "(integer) 累计逾期期数",
            "ownerId": "(integer) 催收员",
            "ownerName": "(string) undefined",
            "pendAmount": "(number) 挂账金额",
            "preSettleAmount": "(number) 提前结清金额",
            "productGroupId": "(integer) undefined",
            "productGroupName": "(string) 产品组",
            "province": "(string) 省份",
            "recentRepayCompany": "(string) 最近还款机构",
            "recentRepayCompanyId": "(integer) undefined",
            "remark": "(string) 案件备注",
            "statusDesc": "(string) 案件状态描述",
            "submitTime": "(integer) 申请时间",
            "totalAmount": "(number) 总金额",
            "userId": "(string) 客户id",
            "userName": "(string) 客户姓名"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * 生成委外机构回款报表    /test/sendReport
 *
 * @params      { Object   }      companyIds                    companyIds
 */
CollectionService.postSendReportTest({
    data: {
        companyIds: [],

    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * syncBatchPrivileges    /test/syncPrivileges
 *
 */
CollectionService.getSyncPrivilegesTest({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{}
*/



/**
 * 历史数据迁移    /test/tranfer
 *
 * @params      { Integer  }      begin                         begin
 * @params      { Integer  }      end                           end
 */
CollectionService.postTranferTest({
    params: {
        begin: 'undefined',
        end: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 指定ID历史数据迁移    /test/tranferCases
 *
 * @params      { Object   }      ids                           ids
 */
CollectionService.postTranferCasesTest({
    data: {
        ids: [],

    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 历史数据迁移补偿    /test/tranferFix
 *
 * @params      { Object   }      time                          time
 */
CollectionService.postTranferFixTest({
    data: {
        time: '(string) undefined',

    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 获取验证码    /verifyCode
 *
 */
CollectionService.getverifyCode({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * create    /work-orders
 *
 * @params      { Object   }      dto                           dto
 */
CollectionService.postOrdersWork({
    data: {
        params: [{
        	autoId: '(integer) 表单参数实例ID',
        	formParamId: '(integer) 表单参数id',
        	paramName: '(string) 参数名称',
        	paramValue: '(string) 参数值',
        	stepInsId: '(integer) 步骤实例id',
        	valueType: '(integer) 数值类型 1-单值 2-数组',
        	workOrderId: '(integer) 工单id',
        }],
        stepInsInfo: {
        	autoId: '(integer) 步骤实例id',
        	beginTime: '(string) 开始时间',
        	endTime: '(string) 结束时间',
        	operator: '(string) 操作人',
        	remark: '(string) 备注',
        	skipThisStep: '(boolean) 是否跳过此步骤',
        	status: '(string) 步骤实例状态 1-初始状态 2-执行中 3-执行失败 4-执行取消 5-执行驳回 6-执行成功',
        	stepId: '(integer) 步骤id',
        	stepName: '(string) 步骤名称',
        	workOrderId: '(integer) 工单id',
        },
        workOrderInfo: {
        	autoId: '(integer) 工单id',
        	beginTime: '(string) 开始时间',
        	businessLineId: '(integer) 业务线id',
        	channelCode: '(string) 来源渠道 1-电话 2-在线 3-反馈',
        	claimTime: '(string) 认领时间',
        	claimant: '(string) 认领人',
        	creator: '(string) 创建人账号',
        	curStepId: '(integer) 当前步骤id',
        	curStepInsId: '(integer) 当前步骤实例id',
        	curStepName: '(string) 当前步骤名称',
        	describe: '(string) 问题描述',
        	endTime: '(string) 结束时间',
        	issueKey: '(string) issue编号',
        	mobile: '(string) 手机号',
        	platformCode: '(string) 创建平台编号',
        	priority: '(string) 优先级 1-低 2-中 3-高',
        	remark: '(string) 工单的备注',
        	status: '(string) 工单状态 1-初始状态 2-处理中 3-等待处理 4-取消处理 5-异常处理 6-驳回处理 7-处理完成',
        	templateId: '(integer) 模板id',
        	templateName: '(string) 模板名称',
        	userId: '(string) 用户id',
        },
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "value": "(integer) undefined"
}
*/



/**
 * 指派给委外专员    /work-orders/_dispatch
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOrders_dispatchWork({
    data: {
        companyId: '(integer) 机构id',
        ids: [],
        operator: '(integer) 专员id',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 工单反馈客服    /work-orders/_finish
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOrders_finishWork({
    data: {
        ids: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "items": [
        {
            "key": "(integer) undefined",
            "message": "(string) undefined",
            "result": "(boolean) undefined"
        }
    ]
}
*/



/**
 * 下发至机构管理员    /work-orders/_forward
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOrders_forwardWork({
    data: {
        ids: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "items": [
        {
            "key": "(integer) undefined",
            "message": "(string) undefined",
            "result": "(boolean) undefined"
        }
    ]
}
*/



/**
 * search    /work-orders/_search
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOrders_searchWork({
    data: {
        area: [],
        companyId: '(integer) undefined',
        complaint: '(boolean) 投诉是否成了',
        direction: '(string) undefined',
        feedBackTime: {
        	min: '(string) undefined',
        	max: '(string) undefined',
        },
        hand: [],
        idNo: '(string) 身份证',
        mobile: '(string) 手机号',
        offset: '(integer) undefined',
        operatorId: '(integer) 委外专员',
        orderResult: [],
        orderStatus: [],
        pageNumber: '(integer) undefined',
        pageSize: '(integer) undefined',
        productName: [],
        property: '(string) undefined',
        province: [],
        sourceTime: {
        	min: '(string) undefined',
        	max: '(string) undefined',
        },
        userId: '(string) 51id',
        userName: '(string) 客户姓名',
        visitType: '(string) 工单类型',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "backMobile": "(string) 回电手机号",
            "callMobile": "(string) 来电手机号",
            "caseId": "(integer) undefined",
            "cid": "(integer) 客服系统工单id",
            "companyId": "(integer) undefined",
            "companyName": "(string) undefined",
            "complaint": "(boolean) 投诉是否成立",
            "feedBackResult": [
                {
                    "content": "(string) 内容",
                    "operationTime": "(string) 操作时间",
                    "operatorId": "(integer) undefined"
                }
            ],
            "feedBackTime": "(string) 反馈时间",
            "id": "(integer) undefined",
            "idNo": "(string) 身份证",
            "loanType": "(integer) loanType",
            "operatorId": "(integer) undefined",
            "operatorName": "(string) undefined",
            "orderId": "(string) 订单id",
            "orderResult": "(string) 处理结果",
            "orderStatus": "(string) 处理状态",
            "phone": "(string) 注册手机号",
            "priority": "(integer) 优先级1-low,2-middle,3-high",
            "productCode": "(string) undefined",
            "productName": "(string) 产品名称",
            "question": "(string) 问题描述",
            "remark": "(string) 备注",
            "riskTag": "(string) undefined",
            "sourceTime": "(string) 客服推送时间",
            "stepId": "(integer) 客服系统步骤id",
            "userId": "(string) 51Id",
            "userName": "(string) 客户姓名",
            "visitCount": "(integer) 投诉反馈次数",
            "visitType": "(string) 工单类型"
        }
    ],
    "pageNumber": "(integer) 当前页码",
    "pageSize": "(integer) 每页大小",
    "totalElements": "(integer) 总记录数"
}
*/



/**
 * companySubmit    /work-orders/_submit
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOrders_submitWork({
    data: {
        ids: [],
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "items": [
        {
            "key": "(integer) undefined",
            "message": "(string) undefined",
            "result": "(boolean) undefined"
        }
    ]
}
*/



/**
 * update    /work-orders/_update
 *
 * @params      { Object   }      param                         param
 */
CollectionService.postOrders_updateWork({
    data: {
        complaint: '(boolean) undefined',
        feedBackResult: '(string) undefined',
        ids: [],
        orderResult: '(string) undefined',
        remark: '(string) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * options    /work-orders/options
 *
 */
CollectionService.getOrdersOptionsWork({
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "area": [
        {
            "area": "(string) undefined",
            "province": "(string) undefined"
        }
    ],
    "companies": [
        {
            "accountNum": "(integer) undefined",
            "companyName": "(string) undefined",
            "companyProv": "(string) undefined",
            "contactEmail": "(string) undefined",
            "contactMobile": "(string) undefined",
            "contactName": "(string) undefined",
            "effectiveAt": "(string) undefined",
            "emailList": [],
            "expiryAt": "(string) undefined",
            "gmt51Create": "(string) undefined",
            "gmt51Modify": "(string) undefined",
            "id": "(integer) undefined",
            "manageAccount": "(string) undefined",
            "mobileList": [],
            "outsourceSpecialist": "(string) undefined",
            "privileges": "(string) undefined",
            "registAddress": "(string) undefined",
            "registAt": "(string) undefined",
            "specialistName": "(string) undefined",
            "status": "(string) undefined",
            "zipCode": "(string) undefined"
        }
    ],
    "orderResults": [],
    "orderStatus": [],
    "products": [],
    "visitTypes": []
}
*/



/**
 * detail    /work-orders/{id}
 *
 * @params      { Integer  }      id                            id
 */
CollectionService.getOrdersIdWork({
    params: {
        id: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "backMobile": "(string) 回电手机号",
    "callMobile": "(string) 来电手机号",
    "caseId": "(integer) undefined",
    "cid": "(integer) 客服系统工单id",
    "companyId": "(integer) undefined",
    "companyName": "(string) undefined",
    "complaint": "(boolean) 投诉是否成立",
    "feedBackResult": [
        {
            "content": "(string) 内容",
            "operationTime": "(string) 操作时间",
            "operatorId": "(integer) undefined"
        }
    ],
    "feedBackTime": "(string) 反馈时间",
    "id": "(integer) undefined",
    "idNo": "(string) 身份证",
    "loanType": "(integer) loanType",
    "operatorId": "(integer) undefined",
    "operatorName": "(string) undefined",
    "orderId": "(string) 订单id",
    "orderResult": "(string) 处理结果",
    "orderStatus": "(string) 处理状态",
    "phone": "(string) 注册手机号",
    "priority": "(integer) 优先级1-low,2-middle,3-high",
    "productCode": "(string) undefined",
    "productName": "(string) 产品名称",
    "question": "(string) 问题描述",
    "remark": "(string) 备注",
    "riskTag": "(string) undefined",
    "sourceTime": "(string) 客服推送时间",
    "stepId": "(integer) 客服系统步骤id",
    "userId": "(string) 51Id",
    "userName": "(string) 客户姓名",
    "visitCount": "(integer) 投诉反馈次数",
    "visitType": "(string) 工单类型"
}
*/



/**
 * 认领查询    /{claimtype}/claimQuery
 *
 * @params      { Integer  }      claimtype                     认领页面类型 0 未认领 1 认领中 2 已认领
 * @params      { Integer  }      receiptAt.nanos               
 * @params      { Array    }      operatorList                  可查询人列表
 * @params      { String   }      userName                      客户姓名
 * @params      { Integer  }      groupId                       产品组
 * @params      { Integer  }      claimant                      认领人
 * @params      { String   }      claimantName                  认领人名字
 * @params      { String   }      transferAccount               转账账号/卡号
 * @params      { Number   }      transferAmount                转账金额
 * @params      { String   }      transferMemo                  转账备注
 * @params      { String   }      transferor                    转账人
 * @params      { String   }      pageable                      分页和排序参数
 * @params      { String   }      userId                        用户id
 * @params      { String   }      userId                        user id
 */
CollectionService.getClaimQueryClaimtype({
    params: {
        claimtype: 'undefined',
        'receiptAt.nanos': 'undefined',
        operatorList: 'undefined',
        userName: 'undefined',
        groupId: 'undefined',
        claimant: 'undefined',
        claimantName: 'undefined',
        transferAccount: 'undefined',
        transferAmount: 'undefined',
        transferMemo: 'undefined',
        transferor: 'undefined',
        pageable: '{"page":1,"size":50,"sort":[{"property":"AutoId","direction":"DESC"}]}',
        userId: '314',
    },
    headers: {
        userId: 'undefined', //user id
    },
}).then(result => {
    console.log(result);
}).catch(() => {});
/*
* 返回结果
{
    "content": [
        {
            "autoId": "(integer) undefined",
            "caseId": "(integer) 案件编号",
            "checkAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "claimAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "claimant": "(integer) 确认认领s人Id",
            "claimantName": "(string) 确认认领人",
            "groupId": "(integer) 产品组Id",
            "groupName": "(string) 产品组",
            "latestClaimEntity": {
                "autoId": "(integer) undefined",
                "checkAt": {
                    "date": "(integer) undefined",
                    "day": "(integer) undefined",
                    "hours": "(integer) undefined",
                    "minutes": "(integer) undefined",
                    "month": "(integer) undefined",
                    "nanos": "(integer) undefined",
                    "seconds": "(integer) undefined",
                    "time": "(integer) undefined",
                    "timezoneOffset": "(integer) undefined",
                    "year": "(integer) undefined"
                },
                "checkMemo": "(string) undefined",
                "checker": "(string) undefined",
                "claimAt": {
                    "date": "(integer) undefined",
                    "day": "(integer) undefined",
                    "hours": "(integer) undefined",
                    "minutes": "(integer) undefined",
                    "month": "(integer) undefined",
                    "nanos": "(integer) undefined",
                    "seconds": "(integer) undefined",
                    "time": "(integer) undefined",
                    "timezoneOffset": "(integer) undefined",
                    "year": "(integer) undefined"
                },
                "claimCertificate": "(string) undefined",
                "claimant": "(integer) undefined",
                "groupId": "(integer) undefined",
                "isDeprecated": "(integer) undefined",
                "offlineRepayId": "(integer) undefined",
                "state": "(integer) 认领状态. -1:待确认 0:认领审核拒绝 1:认领审核通过, 2:挂账失败, 3:挂账成功",
                "userId": "(string) undefined"
            },
            "orderId": "(string) 订单编号",
            "outsourceCompany": "(string) 委外公司",
            "pendAmount": "(number) 挂账金额",
            "processType": "(integer) 流转阶段",
            "receiptAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "status": "(integer) 认领状态",
            "transferAccount": "(string) 实际转账账号",
            "transferAmount": "(number) 转账金额",
            "transferBillNo": "(string) 流水号",
            "transferMemo": "(string) 转账备注",
            "transferor": "(string) 实际转账人",
            "userId": "(string) 51编号",
            "userName": "(string) 客户姓名"
        }
    ],
    "page": "(integer) 当前页码",
    "size": "(integer) 每页大小",
    "summary": {
        "autoId": "(integer) undefined",
        "caseId": "(integer) 案件编号",
        "checkAt": {
            "date": "(integer) undefined",
            "day": "(integer) undefined",
            "hours": "(integer) undefined",
            "minutes": "(integer) undefined",
            "month": "(integer) undefined",
            "nanos": "(integer) undefined",
            "seconds": "(integer) undefined",
            "time": "(integer) undefined",
            "timezoneOffset": "(integer) undefined",
            "year": "(integer) undefined"
        },
        "claimAt": {
            "date": "(integer) undefined",
            "day": "(integer) undefined",
            "hours": "(integer) undefined",
            "minutes": "(integer) undefined",
            "month": "(integer) undefined",
            "nanos": "(integer) undefined",
            "seconds": "(integer) undefined",
            "time": "(integer) undefined",
            "timezoneOffset": "(integer) undefined",
            "year": "(integer) undefined"
        },
        "claimant": "(integer) 确认认领s人Id",
        "claimantName": "(string) 确认认领人",
        "groupId": "(integer) 产品组Id",
        "groupName": "(string) 产品组",
        "latestClaimEntity": {
            "autoId": "(integer) undefined",
            "checkAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "checkMemo": "(string) undefined",
            "checker": "(string) undefined",
            "claimAt": {
                "date": "(integer) undefined",
                "day": "(integer) undefined",
                "hours": "(integer) undefined",
                "minutes": "(integer) undefined",
                "month": "(integer) undefined",
                "nanos": "(integer) undefined",
                "seconds": "(integer) undefined",
                "time": "(integer) undefined",
                "timezoneOffset": "(integer) undefined",
                "year": "(integer) undefined"
            },
            "claimCertificate": "(string) undefined",
            "claimant": "(integer) undefined",
            "groupId": "(integer) undefined",
            "isDeprecated": "(integer) undefined",
            "offlineRepayId": "(integer) undefined",
            "state": "(integer) 认领状态. -1:待确认 0:认领审核拒绝 1:认领审核通过, 2:挂账失败, 3:挂账成功",
            "userId": "(string) undefined"
        },
        "orderId": "(string) 订单编号",
        "outsourceCompany": "(string) 委外公司",
        "pendAmount": "(number) 挂账金额",
        "processType": "(integer) 流转阶段",
        "receiptAt": {
            "date": "(integer) undefined",
            "day": "(integer) undefined",
            "hours": "(integer) undefined",
            "minutes": "(integer) undefined",
            "month": "(integer) undefined",
            "nanos": "(integer) undefined",
            "seconds": "(integer) undefined",
            "time": "(integer) undefined",
            "timezoneOffset": "(integer) undefined",
            "year": "(integer) undefined"
        },
        "status": "(integer) 认领状态",
        "transferAccount": "(string) 实际转账账号",
        "transferAmount": "(number) 转账金额",
        "transferBillNo": "(string) 流水号",
        "transferMemo": "(string) 转账备注",
        "transferor": "(string) 实际转账人",
        "userId": "(string) 51编号",
        "userName": "(string) 客户姓名"
    },
    "totalElements": "(integer) 总记录数"
}
*/



