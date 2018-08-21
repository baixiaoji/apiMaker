import InsuranceGateway from './api/insurance-gateway/api';


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
*     /v1/product/render
*
*/
InsuranceGateway.getProductRenderV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

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
