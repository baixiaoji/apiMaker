import InsuranceGateway from './api/insurance-gateway/api';


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
* 推荐产品    /v1/product/listOrder
*
*/
InsuranceGateway.getProductListOrderV1({
    params: {
        userId: '', //userId
        orderType: '', //orderType
    },
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
* 产品列表渲染    /v1/product/render/{userId}
*
*/
InsuranceGateway.getProductRenderUserIdV1({
    params: {
        userId: '', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
