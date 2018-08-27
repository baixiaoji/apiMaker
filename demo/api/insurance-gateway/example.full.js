import InsuranceGateway from './api/insurance-gateway/api';


/**
 * 投保    /v1/insurance/insure
 *
 * @params      { Object   }      req                           req
 * @params      { String   }      userId                        用户id
 * @params      { String   }      Authorization                 用户token
 */
InsuranceGateway.postInsuranceInsureV1({
    data: {
        applicant: {
        	applicantType: '(integer) 投保人类型 0：个人（默认） 1：公司',
        	birthday: '(string) 出生日期 格式：yyyy-MM-dd',
        	cardCode: '(string) 证件号',
        	cardPeriod: '(string) 证件有效期，格式yyyy-MM-dd',
        	cardType: '(integer) 证件类型1:身份证， 2：护照',
        	cname: '(string) 中文名',
        	contactAddress: '(string) 联系地址',
        	contactPost: '(string) 联系地址邮编',
        	country: '(string) 国籍',
        	email: '(string) 邮箱',
        	ename: '(string) 拼音或英文名，境外旅游险必填',
        	hasSocialInsurance: '(boolean) 是否有社保',
        	height: '(string) 身高',
        	insuredExtInfo: [{
        		key: '(string) undefined',
        		name: '(string) undefined',
        		value: [],
        	}],
        	job: '(string) 职业信息，职业id使用“-”拼接如：101414-101415-101416',
        	marryState: '(integer) 婚姻状态 1：已婚 2：未婚 3：离婚 4：丧偶 5：其他',
        	mobile: '(string) 手机号码',
        	officeAddress: '(string) 办公地址',
        	officePost: '(string) 办公地址邮编',
        	provCityId: '(string) 居住省市，地区编码使用“-”拼接如：320000-320100-320104',
        	sex: '(integer) 性别 0：女 1：男',
        	tel: '(string) 办公电话',
        	weight: '(string) 体重',
        	yearlyIncome: '(string) 年收入',
        },
        applyNum: '(integer) 投保份数',
        bizOrderId: '(string) undefined',
        companyCode: '(string) 公司代码',
        endDate: '(string) 终保时间  格式：yyyy-MM-dd HH:mm:ss',
        ext: '(string) 投保标的',
        insurants: [{
        	birthday: '(string) 出生日期 格式：yyyy-MM-dd',
        	cardCode: '(string) 证件号',
        	cardPeriod: '(string) 证件有效期，格式yyyy-MM-dd',
        	cardType: '(integer) 证件类型1:身份证， 2：护照',
        	cname: '(string) 中文名',
        	contactAddress: '(string) 联系地址',
        	contactPost: '(string) 联系地址邮编',
        	country: '(string) 国籍',
        	email: '(string) 邮箱',
        	ename: '(string) 拼音或英文名，境外旅游险必填',
        	hasSocialInsurance: '(boolean) 是否有社保',
        	height: '(string) 身高',
        	insuredExtInfo: [{
        		key: '(string) undefined',
        		name: '(string) undefined',
        		value: [],
        	}],
        	job: '(string) 职业信息，职业id使用“-”拼接如：101414-101415-101416',
        	marryState: '(integer) 婚姻状态 1：已婚 2：未婚 3：离婚 4：丧偶 5：其他',
        	mobile: '(string) 手机号码',
        	officeAddress: '(string) 办公地址',
        	officePost: '(string) 办公地址邮编',
        	provCityId: '(string) 居住省市，地区编码使用“-”拼接如：320000-320100-320104',
        	relationId: '(string) 与投保人关系（self：本人 mate：配偶 child：子女 parent：父母） ',
        	sex: '(integer) 性别 0：女 1：男',
        	tel: '(string) 办公电话',
        	weight: '(string) 体重',
        	yearlyIncome: '(string) 年收入',
        }],
        insureCode: '(string) 外部产品代码',
        insureDate: '(string) 投保时间  格式：yyyy-MM-dd HH:mm:ss',
        insurePeriod: '(string) 保障期限。格式1d，1y，1m 表示1天，1年，1个月',
        planId: '(string) 方案代码',
        productName: '(string) 产品名',
        promotionId: [],
        proposalNo: '(string) 投保单号(保险公司核保后返回，用于承保)',
        startDate: '(string) 起保时间  格式：yyyy-MM-dd HH:mm:ss',
        totalAmount: '(integer) 总保额 单位分',
        totalPremium: '(integer) 总保费 单位分',
        userId: '(string) undefined',
    },
    headers: {
        userId: 'undefined', //用户id
        Authorization: 'undefined', //用户token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "ext": {},
    "msg": "(string) 失败信息",
    "orderId": "(integer) 保单Id",
    "payId": "(string) 支付单号",
    "success": "(boolean) 结果"
}
*/



/**
 * 标记即将过期保单已读    /v1/order/closeOrder
 *
 * @params      { Integer  }      orderId                       orderId
 * @params      { String   }      userId                        用户id
 * @params      { String   }      Authorization                 用户token
 */
InsuranceGateway.getOrderCloseOrderV1({
    params: {
        orderId: 'undefined',
    },
    headers: {
        userId: 'undefined', //用户id
        Authorization: 'undefined', //用户token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": "(boolean) undefined",
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 保单列表    /v1/order/listOrder
 *
 * @params      { Integer  }      orderType                     保单类型 0:历史保单 1：正常保单
 * @params      { Integer  }      pageSize                      pageSize
 * @params      { Integer  }      currentPage                   从1开始
 */
InsuranceGateway.getOrderListOrderV1({
    params: {
        orderType: 'undefined',
        pageSize: 'undefined',
        currentPage: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "aboutToexpireOrderNum": "(integer) undefined",
        "hasHisotryOrder": "(boolean) undefined",
        "orderList": [
            {
                "aboutToExpire": "(boolean) 是否即将到期:保障期小于等于30天为即将到期",
                "companyName": "(string) 保险公司名称",
                "endInsure": "(string) 保障结束时间",
                "insureDays": "(integer) 已保障天数",
                "insureTime": "(string) 投保时间",
                "orderId": "(integer) 保单id",
                "payId": "(string) 支付订单id",
                "picURLs": "(string) 主图",
                "productName": "(string) 产品名",
                "startInsure": "(string) 保障开始时间",
                "status": "(integer) 保单状态：未支付、待生效、即将到期、有效保单、已过期"
            }
        ],
        "totalNum": "(integer) undefined"
    },
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 标记即将过期保单已读    /v1/order/markRead
 *
 * @params      { String   }      userId                        用户id
 * @params      { String   }      Authorization                 用户token
 */
InsuranceGateway.getOrderMarkReadV1({
    headers: {
        userId: 'undefined', //用户id
        Authorization: 'undefined', //用户token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": "(boolean) undefined",
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 保单详情    /v1/order/queryOrder
 *
 * @params      { Integer  }      orderId                       orderId
 * @params      { String   }      userId                        用户id
 * @params      { String   }      Authorization                 用户token
 */
InsuranceGateway.getOrderQueryOrderV1({
    params: {
        orderId: 'undefined',
    },
    headers: {
        userId: 'undefined', //用户id
        Authorization: 'undefined', //用户token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "aboutToExpire": "(boolean) 是否即将到期:保障期小于等于30天为即将到期",
        "claimProcess": "(string) 理赔流程",
        "companyName": "(string) 保险公司名称",
        "endInsure": "(string) 保障结束时间",
        "epolicyUrl": "(string) undefined",
        "faq": "(string) 常见问题",
        "holder": {
            "cardCode": "(string) 证件号",
            "cardType": "(integer) 证件类型1:身份证， 2：护照",
            "cname": "(string) 中文名",
            "insuredExtInfo": [
                {
                    "key": "(string) undefined",
                    "name": "(string) undefined",
                    "value": []
                }
            ],
            "mobile": "(string) 手机号码"
        },
        "insType": "(string) 保险类目",
        "insureDays": "(integer) 已保障天数",
        "insureDuties": [
            {
                "dutyDesc": "(string) 描述",
                "price": "(string) 价格",
                "title": "(string) 标题"
            }
        ],
        "insureTime": "(string) 投保时间",
        "insured": {
            "cardCode": "(string) 证件号",
            "cardType": "(integer) 证件类型1:身份证， 2：护照",
            "cname": "(string) 中文名",
            "insuredExtInfo": [
                {
                    "key": "(string) undefined",
                    "name": "(string) undefined",
                    "value": []
                }
            ],
            "mobile": "(string) 手机号码"
        },
        "orderId": "(integer) 保单id",
        "payAmount": "(integer) 实际支付费用",
        "payId": "(string) 支付订单id",
        "picURLs": "(string) 主图",
        "planId": "(string) 方案id",
        "policyNo": "(string) 保单号",
        "premium": "(integer) 保费",
        "productExtInfo": [
            {
                "key": "(string) undefined",
                "name": "(string) undefined",
                "value": "(string) undefined"
            }
        ],
        "productId": "(integer) 产品id",
        "productName": "(string) 产品名",
        "startInsure": "(string) 保障开始时间",
        "status": "(integer) 保单状态：未支付、待生效、即将到期、有效保单、已过期"
    },
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 根据payId查询保单    /v1/order/queryOrderByPayId
 *
 * @params      { String   }      payId                         payId
 * @params      { String   }      userId                        用户id
 * @params      { String   }      Authorization                 用户token
 */
InsuranceGateway.getOrderQueryOrderByPayIdV1({
    params: {
        payId: 'undefined',
    },
    headers: {
        userId: 'undefined', //用户id
        Authorization: 'undefined', //用户token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "aboutToExpire": "(boolean) 是否即将到期:保障期小于等于30天为即将到期",
        "claimProcess": "(string) 理赔流程",
        "companyName": "(string) 保险公司名称",
        "endInsure": "(string) 保障结束时间",
        "epolicyUrl": "(string) undefined",
        "faq": "(string) 常见问题",
        "holder": {
            "cardCode": "(string) 证件号",
            "cardType": "(integer) 证件类型1:身份证， 2：护照",
            "cname": "(string) 中文名",
            "insuredExtInfo": [
                {
                    "key": "(string) undefined",
                    "name": "(string) undefined",
                    "value": []
                }
            ],
            "mobile": "(string) 手机号码"
        },
        "insType": "(string) 保险类目",
        "insureDays": "(integer) 已保障天数",
        "insureDuties": [
            {
                "dutyDesc": "(string) 描述",
                "price": "(string) 价格",
                "title": "(string) 标题"
            }
        ],
        "insureTime": "(string) 投保时间",
        "insured": {
            "cardCode": "(string) 证件号",
            "cardType": "(integer) 证件类型1:身份证， 2：护照",
            "cname": "(string) 中文名",
            "insuredExtInfo": [
                {
                    "key": "(string) undefined",
                    "name": "(string) undefined",
                    "value": []
                }
            ],
            "mobile": "(string) 手机号码"
        },
        "orderId": "(integer) 保单id",
        "payAmount": "(integer) 实际支付费用",
        "payId": "(string) 支付订单id",
        "picURLs": "(string) 主图",
        "planId": "(string) 方案id",
        "policyNo": "(string) 保单号",
        "premium": "(integer) 保费",
        "productExtInfo": [
            {
                "key": "(string) undefined",
                "name": "(string) undefined",
                "value": "(string) undefined"
            }
        ],
        "productId": "(integer) 产品id",
        "productName": "(string) 产品名",
        "startInsure": "(string) 保障开始时间",
        "status": "(integer) 保单状态：未支付、待生效、即将到期、有效保单、已过期"
    },
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 产品详情    /v1/product/detail
 *
 * @params      { Integer  }      productId                     产品id
 * @params      { Integer  }      fcProductId                   账户产品id
 * @params      { String   }      userId                        用户id
 */
InsuranceGateway.getProductDetailV1({
    params: {
        productId: 'undefined',
        fcProductId: 'undefined',
        userId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "defaultInsurePeriod": "(string) 默认保障期限",
    "defaultPlanId": "(integer) 默认方案id",
    "defaultPrice": "(integer) 默认价格",
    "identity": {
        "idCard": "(string) 身份证",
        "name": "(string) 姓名",
        "phone": "(string) 手机号"
    },
    "msg": "(string) 提示",
    "plans": [
        {
            "extMap": {},
            "id": "(integer) 主键",
            "insureDuties": [
                {
                    "dutyDesc": "(string) 描述",
                    "price": "(string) 价格",
                    "title": "(string) 标题"
                }
            ],
            "minPrice": "(integer) 最低保费",
            "outProductNo": "(string) 外部产品编号",
            "productId": "(integer) 产品id",
            "title": "(string) 标题"
        }
    ],
    "product": {
        "claimProcess": "(string) 理赔流程",
        "countable": "(integer) 投保份数是否可选, 0-否,1-是",
        "descList": [],
        "effectiveDate": "(integer) 生效日期次日或可选, 1-指定生效天数,2-可选",
        "effectiveDayCnt": "(integer) 生效指定天数",
        "id": "(integer) 主键",
        "insType": "(string) 险种",
        "insureFor": [
            {
                "key": "(string) undefined",
                "value": "(string) undefined"
            }
        ],
        "insurePeriodList": [
            {
                "name": "(string) 描述, 1年",
                "value": "(string) 1_y"
            }
        ],
        "insuredExtInfo": [
            {
                "key": "(string) undefined",
                "name": "(string) undefined",
                "value": []
            }
        ],
        "introURLs": "(string) 产品介绍图地址",
        "orgCode": "(string) 机构编码",
        "orgName": "(string) 机构名称",
        "orgPhoneNum": "(string) 机构客服电话",
        "picURLs": "(string) 头图地址",
        "priceFactor": "(string) 定价因子, 逗号隔开",
        "productExtInfo": [
            {
                "key": "(string) undefined",
                "name": "(string) undefined",
                "value": "(string) undefined"
            }
        ],
        "question": "(string) 常见问题",
        "summary": "(string) 副标题",
        "tag": {
            "tagTip": [],
            "tagTitle": "(string) 标签标题"
        },
        "title": "(string) 主标题"
    },
    "success": "(boolean) 是否成功"
}
*/



/**
 * 产品额外信息    /v1/product/productExtInfo
 *
 * @params      { Integer  }      productId                     
 * @params      { String   }      field                         
 */
InsuranceGateway.getProductProductExtInfoV1({
    params: {
        productId: 'undefined',
        field: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "info": "(string) 返回结果",
    "msg": "(string) 提示",
    "success": "(boolean) 是否成功"
}
*/



/**
 * 查询价格    /v1/product/queryPrice
 *
 * @params      { Integer  }      productId                     产品id
 * @params      { Integer  }      planId                        方案id
 * @params      { String   }      priceFactor                   定价因子,逗号,隔开
 * @params      { String   }      insurePeriod                  保障期限
 * @params      { String   }      idCard                        身份证号
 */
InsuranceGateway.getProductQueryPriceV1({
    params: {
        productId: 'undefined',
        planId: 'undefined',
        priceFactor: 'undefined',
        insurePeriod: 'undefined',
        idCard: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "msg": "(string) 提示",
    "price": "(integer) 价格,单位:分",
    "success": "(boolean) 是否成功"
}
*/



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
/*
* 返回结果
{
    "banners": [
        {
            "linkURL": "(string) 链接地址",
            "name": "(string) 名称",
            "picURL": "(string) 图片地址"
        }
    ],
    "cats": [
        {
            "planeCode": "(string) 版块code",
            "planeName": "(string) 版块名称",
            "products": [
                {
                    "id": "(integer) 主键",
                    "keywords": [],
                    "minPrice": "(string) 最低费用: 100.00 （元起)",
                    "org": "(string) 保险机构",
                    "picURL": "(string) 图片地址",
                    "title": "(string) 主标题"
                }
            ]
        }
    ],
    "classList": [
        {
            "actionValue": "(string) feed路由Url参数",
            "coverImgs": [],
            "feedId": "(string) feedId",
            "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
            "operationCfgPreviewMap": {},
            "rankIndex": "(integer) 个性化推荐排序游标",
            "relatedFeedPreviewItems": [
                {
                    "actionValue": "(string) feed路由Url参数",
                    "coverImgs": [],
                    "feedId": "(string) feedId",
                    "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                    "operationCfgPreviewMap": {},
                    "rankIndex": "(integer) 个性化推荐排序游标",
                    "relatedFeedPreviewItems": [
                        {
                            "actionValue": "(string) feed路由Url参数",
                            "coverImgs": [],
                            "feedId": "(string) feedId",
                            "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                            "operationCfgPreviewMap": {},
                            "rankIndex": "(integer) 个性化推荐排序游标",
                            "relatedFeedPreviewItems": [
                                {
                                    "actionValue": "(string) feed路由Url参数",
                                    "coverImgs": [],
                                    "feedId": "(string) feedId",
                                    "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                                    "operationCfgPreviewMap": {},
                                    "rankIndex": "(integer) 个性化推荐排序游标",
                                    "relatedFeedPreviewItems": [
                                        {
                                            "actionValue": "(string) feed路由Url参数",
                                            "coverImgs": [],
                                            "feedId": "(string) feedId",
                                            "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                                            "operationCfgPreviewMap": {},
                                            "rankIndex": "(integer) 个性化推荐排序游标",
                                            "relatedFeedPreviewItems": [
                                                {
                                                    "actionValue": "(string) feed路由Url参数",
                                                    "coverImgs": [],
                                                    "feedId": "(string) feedId",
                                                    "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                                                    "operationCfgPreviewMap": {},
                                                    "rankIndex": "(integer) 个性化推荐排序游标",
                                                    "relatedFeedPreviewItems": [
                                                        {
                                                            "actionValue": "(string) feed路由Url参数",
                                                            "coverImgs": [],
                                                            "feedId": "(string) feedId",
                                                            "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                                                            "operationCfgPreviewMap": {},
                                                            "rankIndex": "(integer) 个性化推荐排序游标",
                                                            "relatedFeedPreviewItems": [
                                                                {
                                                                    "actionValue": "(string) feed路由Url参数",
                                                                    "coverImgs": [],
                                                                    "feedId": "(string) feedId",
                                                                    "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                                                                    "operationCfgPreviewMap": {},
                                                                    "rankIndex": "(integer) 个性化推荐排序游标",
                                                                    "relatedFeedPreviewItems": [
                                                                        {
                                                                            "actionValue": "(string) feed路由Url参数",
                                                                            "coverImgs": [],
                                                                            "feedId": "(string) feedId",
                                                                            "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                                                                            "operationCfgPreviewMap": {},
                                                                            "rankIndex": "(integer) 个性化推荐排序游标",
                                                                            "relatedFeedPreviewItems": [
                                                                                {
                                                                                    "actionValue": "(string) feed路由Url参数",
                                                                                    "coverImgs": [],
                                                                                    "feedId": "(string) feedId",
                                                                                    "feedType": "(integer) feed类型 1-优惠 2-文章 3-专题 4-卡单元 5-推荐专题入口",
                                                                                    "operationCfgPreviewMap": {},
                                                                                    "rankIndex": "(integer) 个性化推荐排序游标",
                                                                                    "relatedFeedPreviewItems": "#/definitions/feed预览单项",
                                                                                    "routerUrl": "(string) feed路由Url",
                                                                                    "title": "(string) 标题"
                                                                                }
                                                                            ],
                                                                            "routerUrl": "(string) feed路由Url",
                                                                            "title": "(string) 标题"
                                                                        }
                                                                    ],
                                                                    "routerUrl": "(string) feed路由Url",
                                                                    "title": "(string) 标题"
                                                                }
                                                            ],
                                                            "routerUrl": "(string) feed路由Url",
                                                            "title": "(string) 标题"
                                                        }
                                                    ],
                                                    "routerUrl": "(string) feed路由Url",
                                                    "title": "(string) 标题"
                                                }
                                            ],
                                            "routerUrl": "(string) feed路由Url",
                                            "title": "(string) 标题"
                                        }
                                    ],
                                    "routerUrl": "(string) feed路由Url",
                                    "title": "(string) 标题"
                                }
                            ],
                            "routerUrl": "(string) feed路由Url",
                            "title": "(string) 标题"
                        }
                    ],
                    "routerUrl": "(string) feed路由Url",
                    "title": "(string) 标题"
                }
            ],
            "routerUrl": "(string) feed路由Url",
            "title": "(string) 标题"
        }
    ],
    "msg": "(string) 提示",
    "success": "(boolean) 是否成功"
}
*/



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
/*
* 返回结果
{
    "cats": [
        {
            "insTypeCode": "(string) 险种code",
            "insTypeDesc": "(string) 险种描述",
            "insTypeName": "(string) 险种名称",
            "products": [
                {
                    "id": "(integer) 主键",
                    "keywords": [],
                    "minPrice": "(string) 最低费用: 100.00 （元起)",
                    "org": "(string) 保险机构",
                    "picURL": "(string) 图片地址",
                    "title": "(string) 主标题"
                }
            ]
        }
    ],
    "msg": "(string) 提示",
    "success": "(boolean) 是否成功"
}
*/



/**
 * 用户信息    /v1/product/userInfo
 *
 */
InsuranceGateway.getProductUserInfoV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "avatarUrl": "(string) 头像地址",
        "nickName": "(string) 用户昵称",
        "userName": "(string) 用户名"
    },
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



