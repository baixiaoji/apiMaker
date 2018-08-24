const axios = require('../axios');
const config = require('./config');

module.exports = {
    postInsuranceInsureV1: param => axios(Object.assign(config.postInsuranceInsureV1, param)),
    getOrderListOrderV1: param => axios(Object.assign(config.getOrderListOrderV1, param)),
    getOrderMarkReadV1: param => axios(Object.assign(config.getOrderMarkReadV1, param)),
    getOrderQueryOrderV1: param => axios(Object.assign(config.getOrderQueryOrderV1, param)),
    getOrderQueryOrderByPayIdV1: param => axios(Object.assign(config.getOrderQueryOrderByPayIdV1, param)),
    getProductDetailV1: param => axios(Object.assign(config.getProductDetailV1, param)),
    getProductProductExtInfoV1: param => axios(Object.assign(config.getProductProductExtInfoV1, param)),
    getProductQueryPriceV1: param => axios(Object.assign(config.getProductQueryPriceV1, param)),
    getProductRecommendV1: param => axios(Object.assign(config.getProductRecommendV1, param)),
    getProductRenderV1: param => axios(Object.assign(config.getProductRenderV1, param)),
};
