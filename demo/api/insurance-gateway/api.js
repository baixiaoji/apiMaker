const axios = require('../axios');
const config = require('./config');

module.exports = {
    getProductQueryPriceV1: param => axios(Object.assign(config.getProductQueryPriceV1, param)),
    getProductRenderV1: param => axios(Object.assign(config.getProductRenderV1, param)),
    getProductQueryOrderV1: param => axios(Object.assign(config.getProductQueryOrderV1, param)),
    postInsuranceInsureV1: param => axios(Object.assign(config.postInsuranceInsureV1, param)),
    getProductDetailV1: param => axios(Object.assign(config.getProductDetailV1, param)),
    getProductListOrderV1: param => axios(Object.assign(config.getProductListOrderV1, param)),
    getProductRecommendV1: param => axios(Object.assign(config.getProductRecommendV1, param)),
    getProductRenderUserIdV1: param => axios(Object.assign(config.getProductRenderUserIdV1, param)),
};
