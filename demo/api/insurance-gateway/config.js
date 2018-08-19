// insurance-gateway config

module.exports = {
    getProductDetailV1: {
        url: '/v1/product/detail',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
    getProductListOrderV1: {
        url: '/v1/product/listOrder',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
    getProductQueryPriceV1: {
        url: '/v1/product/queryPrice',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
    getProductRecommendV1: {
        url: '/v1/product/recommend',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
    getProductRenderUserIdV1: {
        url: '/v1/product/render/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
};
