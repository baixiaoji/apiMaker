const axios = require('../axios');
const config = require('./config');

module.exports = {
    getProductDetailV1: param => axios(Object.assign(config.getProductDetailV1, param)),
    getProductListOrderV1: param => axios(Object.assign(config.getProductListOrderV1, param)),
    getProductQueryPriceV1: param => axios(Object.assign(config.getProductQueryPriceV1, param)),
    getProductRecommendV1: param => axios(Object.assign(config.getProductRecommendV1, param)),
    getProductRenderUserIdV1: param => axios(Object.assign(config.getProductRenderUserIdV1, param)),
};
