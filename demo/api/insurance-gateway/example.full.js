import InsuranceGateway from './api/insurance-gateway/api';


/**
 * 产品详情    /v1/product/detail
 *
 * @params      { Integer  }      productId                     产品id
 * @params      { Integer  }      fcProductId                   账户产品id
 * @params      { String   }      userId                        用户id
 */
InsuranceGateway.getProductDetailV1({
    params: {
        productId: '',
        fcProductId: '',
        userId: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "defaultInsurePeriod": "(string,optional) 默认保障期限",
    "defaultPlanId": "(integer,optional) 默认方案id",
    "defaultPrice": "(integer,optional) 默认价格",
    "identity": {
        "idCard": "(string,optional) 身份证",
        "name": "(string,optional) 姓名",
        "phone": "(string,optional) 手机号"
    },
    "msg": "(string,optional) 提示",
    "plans": [
        {
            "id": "(integer,optional) 主键",
            "insureDuties": [
                {
                    "dutyDesc": "(string,optional) 描述",
                    "price": "(string,optional) 价格",
                    "title": "(string,optional) 标题"
                }
            ],
            "minPrice": "(integer,optional) 最低保费",
            "outProductNo": "(string,optional) 外部产品编号",
            "productId": "(integer,optional) 产品id",
            "title": "(string,optional) 标题"
        }
    ],
    "product": {
        "claimProcess": "(string,optional) 理赔流程",
        "countable": "(integer,optional) 投保份数是否可选, 0-否,1-是",
        "descList": "(Array[string],optional) 产品特色",
        "effectiveDate": "(integer,optional) 生效日期次日或可选, 1-次日,2-可选",
        "healthNotice": "(string,optional) 健康告知",
        "id": "(integer,optional) 主键",
        "insType": "(string,optional) 险种",
        "insureFor": "(object,optional) 为谁投保",
        "insurePeriodList": "(Array[string],optional) 保障期限",
        "insuredExtInfo": [
            {
                "key": "(string,optional) ",
                "name": "(string,optional) ",
                "value": "(Array[string],optional) "
            }
        ],
        "introURLs": "(string,optional) 产品介绍图地址",
        "orgName": "(string,optional) 机构名称",
        "orgPhoneNum": "(string,optional) 机构客服电话",
        "picURLs": "(string,optional) 头图地址",
        "priceFactor": "(Array[string],optional) 定价因子",
        "productExtInfo": [
            {
                "key": "(string,optional) ",
                "name": "(string,optional) ",
                "value": "(string,optional) "
            }
        ],
        "question": "(string,optional) 常见问题",
        "summary": "(string,optional) 副标题",
        "tagTip": "(string,optional) 标题角标, 例如:精选",
        "tagTitle": "(string,optional) 标签标题",
        "title": "(string,optional) 主标题"
    },
    "success": "(boolean,optional) 是否成功"
}
*/



/**
 * 推荐产品    /v1/product/listOrder
 *
 * @params      { String   }      userId                        userId
 * @params      { Integer  }      orderType                     orderType
 */
InsuranceGateway.getProductListOrderV1({
    params: {
        userId: '',
        orderType: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "aboutToExpire": "(boolean,optional) 是否即将到期:保障期小于等于30天为即将到期",
        "companyName": "(string,optional) 保险公司名称",
        "endInsure": "(string,optional) 保障结束时间",
        "insureDays": "(integer,optional) 已保障天数",
        "insureTime": "(string,optional) 投保时间",
        "orderId": "(integer,optional) 保单id",
        "productName": "(string,optional) 产品名",
        "startInsure": "(string,optional) 保障开始时间",
        "status": "(integer,optional) 保单状态：未支付、待生效、即将到期、有效保单、已过期"
    }
]
*/



/**
 * 查询价格    /v1/product/queryPrice
 *
 * @params      { Array    }      priceFactor                   定价因子
 * @params      { Integer  }      productId                     产品id
 * @params      { Integer  }      planId                        方案id
 * @params      { String   }      gender                        性别, 男-male,女-female
 * @params      { String   }      insurePeriod                  保障期限
 * @params      { Integer  }      age                           年龄
 */
InsuranceGateway.getProductQueryPriceV1({
    params: {
        priceFactor: '',
        productId: '',
        planId: '',
        gender: '',
        insurePeriod: '',
        age: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "msg": "(string,optional) 提示",
    "price": "(integer,optional) 价格,单位:分",
    "success": "(boolean,optional) 是否成功"
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
            "linkURL": "(string,optional) 链接地址",
            "name": "(string,optional) 名称",
            "picURL": "(string,optional) 图片地址"
        }
    ],
    "cats": [
        {
            "planeCode": "(string,optional) 版块code",
            "planeName": "(string,optional) 版块名称",
            "products": [
                {
                    "id": "(integer,optional) 主键",
                    "keywords": "(Array[string],optional) 宣传关键字",
                    "minPrice": "(string,optional) 最低费用: 100.00 （元起)",
                    "org": "(string,optional) 保险机构",
                    "picURL": "(string,optional) 图片地址",
                    "title": "(string,optional) 主标题"
                }
            ]
        }
    ],
    "msg": "(string,optional) 提示",
    "success": "(boolean,optional) 是否成功"
}
*/



/**
 * 产品列表渲染    /v1/product/render/{userId}
 *
 * @params      { String   }      userId                        userId
 */
InsuranceGateway.getProductRenderUserIdV1({
    params: {
        userId: '',
    },
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
            "insTypeCode": "(string,optional) 险种code",
            "insTypeDesc": "(string,optional) 险种描述",
            "insTypeName": "(string,optional) 险种名称",
            "products": [
                {
                    "id": "(integer,optional) 主键",
                    "keywords": "(Array[string],optional) 宣传关键字",
                    "minPrice": "(string,optional) 最低费用: 100.00 （元起)",
                    "org": "(string,optional) 保险机构",
                    "picURL": "(string,optional) 图片地址",
                    "title": "(string,optional) 主标题"
                }
            ]
        }
    ],
    "msg": "(string,optional) 提示",
    "success": "(boolean,optional) 是否成功"
}
*/



