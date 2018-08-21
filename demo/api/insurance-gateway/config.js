// insurance-gateway config

module.exports = {
    getProductQueryPriceV1: {
        url: '/v1/product/queryPrice',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
    getProductRenderV1: {
        url: '/v1/product/render',
        method: 'get',
        baseURL: '',
    },
    getProductQueryOrderV1: {
        url: '/v1/product/queryOrder',
        method: 'get',
        baseURL: '/api.u51.com',
    },
    postInsuranceInsureV1: {
        url: '/v1/insurance/insure',
        method: 'post',
        baseURL: '',
    },
    getProductDetailV1: {
        url: '/v1/product/detail',
        method: 'get',
        baseURL: '/api.u51.com',
    },
    getProductListOrderV1: {
        url: '/v1/product/listOrder',
        method: 'get',
        baseURL: '/api.u51.com',
    },
    getProductRecommendV1: {
        url: '/v1/product/recommend',
        method: 'get',
        baseURL: '/api.u51.com',
    },
    getProductRenderUserIdV1: {
        url: '/v1/product/render/{userId}',
        method: 'get',
        baseURL: '/api.u51.com',
    },
};
