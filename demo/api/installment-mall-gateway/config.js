// installment-mall-gateway config

module.exports = {
    getActivityRecommendV1: {
        url: '/v1/activity/recommend',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getAfterSaleApplyPageV1: {
        url: '/v1/afterSale/applyPage',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getAfterSaleCancelAfterSaleNoV1: {
        url: '/v1/afterSale/cancel/{afterSaleNo}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postAfterSaleCreateV1: {
        url: '/v1/afterSale/create',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getAfterSaleDetailV1: {
        url: '/v1/afterSale/detail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postAfterSaleUploadImageV1: {
        url: '/v1/afterSale/uploadImage',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderCalculatePriceV1: {
        url: '/v1/order/calculatePrice',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderGetV1: {
        url: '/v1/order/get',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderGetPreOrderV1: {
        url: '/v1/order/getPreOrder',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderInvoiceTitleV1: {
        url: '/v1/order/invoiceTitle',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOrderInvoiceTitleSubmitV1: {
        url: '/v1/order/invoiceTitle/submit',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderListV1: {
        url: '/v1/order/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOrderOtosaasPayInfoV1: {
        url: '/v1/order/otosaas/pay/info',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOrderPreSubmitV1: {
        url: '/v1/order/preSubmit',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOrderSaveExitPayReasonV1: {
        url: '/v1/order/saveExitPayReason',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOrderSubmitV1: {
        url: '/v1/order/submit',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderTrackV1: {
        url: '/v1/order/track',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOtosaasOrderInfoV1: {
        url: '/v1/otosaas/order/info',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOtosaasOrderRefundV1: {
        url: '/v1/otosaas/order/refund',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOtosaasOrderStatusV1: {
        url: '/v1/otosaas/order/status',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentBankListAllV1: {
        url: '/v1/payment/bank/listAll',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentBankListBindV1: {
        url: '/v1/payment/bank/listBind',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentBeforePrePayNoticeV1: {
        url: '/v1/payment/beforePrePayNotice',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postPaymentBindCardPaymentV1: {
        url: '/v1/payment/bindCardPayment',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentCardPreBindCardV1: {
        url: '/v1/payment/card/preBindCard',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postPaymentCardPreBindCardV2V1: {
        url: '/v1/payment/card/preBindCardV2',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentCheckOrderV1: {
        url: '/v1/payment/checkOrder',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postPaymentPaymentV1: {
        url: '/v1/payment/payment',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentPrePayV1: {
        url: '/v1/payment/prePay',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postPaymentResendSmsCodeV1: {
        url: '/v1/payment/resendSmsCode',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentSimplePaymentV1: {
        url: '/v1/payment/simplePayment',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postPaymentVerifyPayCodeV1: {
        url: '/v1/payment/verifyPayCode',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPromotionProductRecommendV1: {
        url: '/v1/promotionProduct/recommend',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductHotProductsV1: {
        url: '/v1/salesProduct/hotProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductIndexInfoV1: {
        url: '/v1/salesProduct/indexInfo',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductOtosaasEnterListV1: {
        url: '/v1/salesProduct/otosaas/enter/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductProductDetailV1: {
        url: '/v1/salesProduct/productDetail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductSecKillProductsV1: {
        url: '/v1/salesProduct/secKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getShareCouponConfigV1: {
        url: '/v1/share/couponConfig',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getShareCouponReceivedListV1: {
        url: '/v1/share/couponReceivedList',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getShareFavoriteProductsV1: {
        url: '/v1/share/favoriteProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getShareNewUserProductsV1: {
        url: '/v1/share/newUserProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    putShareReceiveV1: {
        url: '/v1/share/receive',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getShareSecKillProductsV1: {
        url: '/v1/share/secKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getShareShareProductsV1: {
        url: '/v1/share/shareProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getShareUserCouponV1: {
        url: '/v1/share/userCoupon',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getToolTimeoutV1: {
        url: '/v1/tool/timeout',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postUserReceiverAddressAddV1: {
        url: '/v1/user/receiverAddress/add',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getUserReceiverAddressAllProvinceV1: {
        url: '/v1/user/receiverAddress/allProvince',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getUserReceiverAddressCitiesByProvinceIdProvinceIdV1: {
        url: '/v1/user/receiverAddress/citiesByProvinceId/{provinceId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getUserReceiverAddressCountiesByCityIdCityIdV1: {
        url: '/v1/user/receiverAddress/countiesByCityId/{cityId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    deleteUserReceiverAddressDeleteV1: {
        url: '/v1/user/receiverAddress/delete',
        method: 'delete',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getUserReceiverAddressGetV1: {
        url: '/v1/user/receiverAddress/get',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getUserReceiverAddressListV1: {
        url: '/v1/user/receiverAddress/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    putUserReceiverAddressSetDefaultV1: {
        url: '/v1/user/receiverAddress/setDefault',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getUserReceiverAddressTownsByCountyIdCountyIdV1: {
        url: '/v1/user/receiverAddress/townsByCountyId/{countyId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    putUserReceiverAddressUpdateV1: {
        url: '/v1/user/receiverAddress/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderGetV2: {
        url: '/v2/order/get',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getOrderShowRepayfundNoticeV2: {
        url: '/v2/order/showRepayfundNotice',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    postOrderSubmitV2: {
        url: '/v2/order/submit',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getPaymentCheckOrderV2: {
        url: '/v2/payment/checkOrder',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductIndexInfoV2: {
        url: '/v2/salesProduct/indexInfo',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductProductDetailV2: {
        url: '/v2/salesProduct/productDetail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductPromotionPromotionNoV2: {
        url: '/v2/salesProduct/promotion/{promotionNo}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductSecKillProductsV2: {
        url: '/v2/salesProduct/secKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getUserCouponListForReceiveV2: {
        url: '/v2/user/coupon/listForReceive',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    putUserCouponMultipleReceiveV2: {
        url: '/v2/user/coupon/multipleReceive',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    putUserCouponReceiveV2: {
        url: '/v2/user/coupon/receive',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductFavoriteProductsV3: {
        url: '/v3/salesProduct/favoriteProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductJkyIndexPageV3: {
        url: '/v3/salesProduct/jkyIndexPage',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
    getSalesProductProductDetailV3: {
        url: '/v3/salesProduct/productDetail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall-gateway/api',
    },
};
