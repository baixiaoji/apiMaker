import InsuranceGateway from './api/insurance-gateway/api';


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
    "msg": "(string) 提示",
    "price": "(integer) 价格,单位:分",
    "success": "(boolean) 是否成功"
}
*/



/**
 *     /v1/product/render
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

*/



/**
 *     /v1/product/queryOrder
 *
 */
InsuranceGateway.getProductQueryOrderV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果

*/



/**
 *     /v1/insurance/insure
 *
 */
InsuranceGateway.postInsuranceInsureV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果

*/



/**
 *     /v1/product/detail
 *
 */
InsuranceGateway.getProductDetailV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果

*/



/**
 *     /v1/product/listOrder
 *
 */
InsuranceGateway.getProductListOrderV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果

*/



/**
 *     /v1/product/recommend
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

*/



/**
 *     /v1/product/render/{userId}
 *
 */
InsuranceGateway.getProductRenderUserIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果

*/



