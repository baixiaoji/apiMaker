import InsuranceGateway from './api/insurance-gateway/api';


/**
* 投保    /v1/insurance/insure
*
*/
InsuranceGateway.postInsuranceInsureV1({
    data: {
        req: {
    "applicant": {
        "applicantType": "(integer) 投保人类型 0：个人（默认） 1：公司",
        "birthday": "(string) 出生日期 格式：yyyy-MM-dd",
        "cardCode": "(string) 证件号",
        "cardPeriod": "(string) 证件有效期，格式yyyy-MM-dd",
        "cardType": "(integer) 证件类型1:身份证， 2：护照",
        "cname": "(string) 中文名",
        "contactAddress": "(string) 联系地址",
        "contactPost": "(string) 联系地址邮编",
        "country": "(string) 国籍",
        "email": "(string) 邮箱",
        "ename": "(string) 拼音或英文名，境外旅游险必填",
        "hasSocialInsurance": "(boolean) 是否有社保",
        "height": "(string) 身高",
        "insuredExtInfo": [
            {
                "key": "(string) undefined",
                "name": "(string) undefined",
                "value": []
            }
        ],
        "job": "(string) 职业信息，职业id使用“-”拼接\n如：101414-101415-101416",
        "marryState": "(integer) 婚姻状态 1：已婚 2：未婚 3：离婚 4：丧偶 5：其他",
        "mobile": "(string) 手机号码",
        "officeAddress": "(string) 办公地址",
        "officePost": "(string) 办公地址邮编",
        "provCityId": "(string) 居住省市，地区编码使用“-”拼接\n如：320000-320100-320104",
        "sex": "(integer) 性别 0：女 1：男",
        "tel": "(string) 办公电话",
        "weight": "(string) 体重",
        "yearlyIncome": "(string) 年收入"
    },
    "applyNum": "(integer) 投保份数",
    "bizOrderId": "(string) undefined",
    "companyCode": "(string) 公司代码",
    "endDate": "(string) 终保时间  格式：yyyy-MM-dd HH:mm:ss",
    "ext": "(string) 投保标的",
    "insurants": [
        {
            "birthday": "(string) 出生日期 格式：yyyy-MM-dd",
            "cardCode": "(string) 证件号",
            "cardPeriod": "(string) 证件有效期，格式yyyy-MM-dd",
            "cardType": "(integer) 证件类型1:身份证， 2：护照",
            "cname": "(string) 中文名",
            "contactAddress": "(string) 联系地址",
            "contactPost": "(string) 联系地址邮编",
            "country": "(string) 国籍",
            "email": "(string) 邮箱",
            "ename": "(string) 拼音或英文名，境外旅游险必填",
            "hasSocialInsurance": "(boolean) 是否有社保",
            "height": "(string) 身高",
            "insuredExtInfo": [
                {
                    "key": "(string) undefined",
                    "name": "(string) undefined",
                    "value": []
                }
            ],
            "job": "(string) 职业信息，职业id使用“-”拼接\n如：101414-101415-101416",
            "marryState": "(integer) 婚姻状态 1：已婚 2：未婚 3：离婚 4：丧偶 5：其他",
            "mobile": "(string) 手机号码",
            "officeAddress": "(string) 办公地址",
            "officePost": "(string) 办公地址邮编",
            "provCityId": "(string) 居住省市，地区编码使用“-”拼接\n如：320000-320100-320104",
            "relationId": "(string) 与投保人关系（self：本人 mate：配偶 child：子女 parent：父母） ",
            "sex": "(integer) 性别 0：女 1：男",
            "tel": "(string) 办公电话",
            "weight": "(string) 体重",
            "yearlyIncome": "(string) 年收入"
        }
    ],
    "insureCode": "(string) 外部产品代码",
    "insureDate": "(string) 投保时间  格式：yyyy-MM-dd HH:mm:ss",
    "insurePeriod": "(string) 保障期限。格式1d，1y，1m 表示1天，1年，1个月",
    "planId": "(string) 方案代码",
    "productName": "(string) 产品名",
    "proposalNo": "(string) 投保单号(保险公司核保后返回，用于承保)",
    "startDate": "(string) 起保时间  格式：yyyy-MM-dd HH:mm:ss",
    "totalAmount": "(integer) 总保额 单位分",
    "totalPremium": "(integer) 总保费 单位分",
    "userId": "(string) undefined"
}, //req
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保单列表    /v1/order/listOrder
*
*/
InsuranceGateway.getOrderListOrderV1({
    params: {
        pageSize: 'undefined', //pageSize
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 标记即将过期保单已读    /v1/order/markRead
*
*/
InsuranceGateway.getOrderMarkReadV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保单详情    /v1/order/queryOrder
*
*/
InsuranceGateway.getOrderQueryOrderV1({
    params: {
        orderId: 'undefined', //orderId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据payId查询保单    /v1/order/queryOrderByPayId
*
*/
InsuranceGateway.getOrderQueryOrderByPayIdV1({
    params: {
        payId: 'undefined', //payId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 产品详情    /v1/product/detail
*
*/
InsuranceGateway.getProductDetailV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 产品额外信息    /v1/product/productExtInfo
*
*/
InsuranceGateway.getProductProductExtInfoV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询价格    /v1/product/queryPrice
*
*/
InsuranceGateway.getProductQueryPriceV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 推荐产品    /v1/product/recommend
*
*/
InsuranceGateway.getProductRecommendV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 产品列表渲染    /v1/product/render
*
*/
InsuranceGateway.getProductRenderV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
