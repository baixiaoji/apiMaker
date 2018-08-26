// installment-mall config

module.exports = {
    postActivityFrontProductsV1: {
        url: '/v1/activity/front/products',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getActivityFrontPromotionsV1: {
        url: '/v1/activity/front/promotions',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postActivityPreSubmitUserIdV1: {
        url: '/v1/activity/preSubmit/{userId}',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getActivityProductDetailV3V1: {
        url: '/v1/activity/productDetailV3',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getActivityRecommendV1: {
        url: '/v1/activity/recommend',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getAfterSaleApplyPageV1: {
        url: '/v1/afterSale/applyPage',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getAfterSaleCancelAfterSaleNoV1: {
        url: '/v1/afterSale/cancel/{afterSaleNo}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postAfterSaleCreateV1: {
        url: '/v1/afterSale/create',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getAfterSaleDetailV1: {
        url: '/v1/afterSale/detail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postAfterSaleUploadImageV1: {
        url: '/v1/afterSale/uploadImage',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getDegradeListAllV1: {
        url: '/v1/degrade/listAll',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageActivityAddActivityConfigV1: {
        url: '/v1/manage/activity/addActivityConfig',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageActivityAddActivityProductFromProductIdV1: {
        url: '/v1/manage/activity/addActivityProductFromProductId',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageActivityGetActivityConfigV1: {
        url: '/v1/manage/activity/getActivityConfig',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageActivityGetActivityMessageV1: {
        url: '/v1/manage/activity/getActivityMessage',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageActivityGetActivityProductV1: {
        url: '/v1/manage/activity/getActivityProduct',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageActivityListV1: {
        url: '/v1/manage/activity/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageActivityListActivityProductsV1: {
        url: '/v1/manage/activity/listActivityProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageActivityUpdateActivityConfigV1: {
        url: '/v1/manage/activity/updateActivityConfig',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageActivityUpdateActivityConfigStatusV1: {
        url: '/v1/manage/activity/updateActivityConfig/status',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageActivityUpdateActivityProductV1: {
        url: '/v1/manage/activity/updateActivityProduct',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageActivityUpdateActivityProductStatusV1: {
        url: '/v1/manage/activity/updateActivityProduct/status',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageAfterSaleDetailV1: {
        url: '/v1/manage/afterSale/detail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageBannerAddV1: {
        url: '/v1/manage/banner/add',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageBannerListV1: {
        url: '/v1/manage/banner/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageBannerUpdateV1: {
        url: '/v1/manage/banner/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageBannerAutoIdShiftV1: {
        url: '/v1/manage/banner/{autoId}/shift',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageBannerAutoIdStatusV1: {
        url: '/v1/manage/banner/{autoId}/status',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageBatchLogisticsV1: {
        url: '/v1/manage/batch/logistics',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageBatchProductV1: {
        url: '/v1/manage/batch/product',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCgListV1: {
        url: '/v1/manage/cg/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageCouponSectionConfigAddV1: {
        url: '/v1/manage/coupon/sectionConfig/add',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCouponSectionConfigGetAutoIdV1: {
        url: '/v1/manage/coupon/sectionConfig/get/{autoId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCouponSectionConfigListV1: {
        url: '/v1/manage/coupon/sectionConfig/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageCouponSectionConfigShiftAutoIdV1: {
        url: '/v1/manage/coupon/sectionConfig/shift/{autoId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageCouponSectionConfigUpdateV1: {
        url: '/v1/manage/coupon/sectionConfig/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageCouponSectionConfigUpdateStatusAutoIdV1: {
        url: '/v1/manage/coupon/sectionConfig/updateStatus/{autoId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCouponTemplateV1: {
        url: '/v1/manage/coupon/template',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageDegradeGetV1: {
        url: '/v1/manage/degrade/get',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageDegradeInsertV1: {
        url: '/v1/manage/degrade/insert',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageDegradeUpdateV1: {
        url: '/v1/manage/degrade/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageGuideListV1: {
        url: '/v1/manage/guide/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageGuideUpdateV1: {
        url: '/v1/manage/guide/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageGuideGroupIdStatusV1: {
        url: '/v1/manage/guide/{groupId}/status',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageIntroGetV1: {
        url: '/v1/manage/intro/get',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageIntroUpdateV1: {
        url: '/v1/manage/intro/update',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageInvoiceCodeConfigAddV1: {
        url: '/v1/manage/invoice/codeConfig/add',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageInvoiceCodeConfigGetAutoIdV1: {
        url: '/v1/manage/invoice/codeConfig/get/{autoId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageInvoiceCodeConfigListV1: {
        url: '/v1/manage/invoice/codeConfig/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageInvoiceCodeConfigShiftAutoIdV1: {
        url: '/v1/manage/invoice/codeConfig/shift/{autoId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageInvoiceCodeConfigUpdateV1: {
        url: '/v1/manage/invoice/codeConfig/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageInvoiceCodeConfigUpdateStatusAutoIdV1: {
        url: '/v1/manage/invoice/codeConfig/updateStatus/{autoId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageInvoiceExportV1: {
        url: '/v1/manage/invoice/export',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageInvoiceListV1: {
        url: '/v1/manage/invoice/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageInvoiceUpdateStatusV1: {
        url: '/v1/manage/invoice/updateStatus',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOperationAddHotProductFromProductIdV1: {
        url: '/v1/manage/operation/addHotProductFromProductId',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOperationAddSecKillConfigV1: {
        url: '/v1/manage/operation/addSecKillConfig',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOperationAddSecKillProductFromProductIdV1: {
        url: '/v1/manage/operation/addSecKillProductFromProductId',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    deleteManageOperationHotProductAutoIdV1: {
        url: '/v1/manage/operation/hotProduct/{autoId}',
        method: 'delete',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationHotProductDetailV1: {
        url: '/v1/manage/operation/hotProductDetail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationListHotProductsV1: {
        url: '/v1/manage/operation/listHotProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationListSecKillConfigV1: {
        url: '/v1/manage/operation/listSecKillConfig',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationListSecKillProductsV1: {
        url: '/v1/manage/operation/listSecKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOperationSecKillAutoIdStatusV1: {
        url: '/v1/manage/operation/secKill/{autoId}/status',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    deleteManageOperationSecKillProductAutoIdV1: {
        url: '/v1/manage/operation/secKillProduct/{autoId}',
        method: 'delete',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOperationShiftProductV1: {
        url: '/v1/manage/operation/shiftProduct',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOperationUpdateHotProductsV1: {
        url: '/v1/manage/operation/updateHotProducts',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOperationUpdateOperationalProductStatusV1: {
        url: '/v1/manage/operation/updateOperationalProductStatus',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOperationUpdateSecKillConfigV1: {
        url: '/v1/manage/operation/updateSecKillConfig',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOrderExportV1: {
        url: '/v1/manage/order/export',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOrderGetUserIdV1: {
        url: '/v1/manage/order/get/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOrderListV1: {
        url: '/v1/manage/order/list',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOrderShippingV1: {
        url: '/v1/manage/order/shipping',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOtoAddV1: {
        url: '/v1/manage/oto/add',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOtoListV1: {
        url: '/v1/manage/oto/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOtoUpdateV1: {
        url: '/v1/manage/oto/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOtoAutoIdShiftV1: {
        url: '/v1/manage/oto/{autoId}/shift',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOtoAutoIdStatusV1: {
        url: '/v1/manage/oto/{autoId}/status',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePositionCodeConfigShiftAutoIdV1: {
        url: '/v1/manage/position/codeConfig/shift/{autoId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePositionSectionConfigShiftCouponV1: {
        url: '/v1/manage/position/sectionConfig/shift/coupon',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePositionShiftOtoBannerV1: {
        url: '/v1/manage/position/shiftOtoBanner',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePositionShiftProductV1: {
        url: '/v1/manage/position/shiftProduct',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePositionShiftPromotionV1: {
        url: '/v1/manage/position/shiftPromotion',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePositionShiftPromotionProductV1: {
        url: '/v1/manage/position/shiftPromotionProduct',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePositionAutoIdShiftV1: {
        url: '/v1/manage/position/{autoId}/shift',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageProductV1: {
        url: '/v1/manage/product',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageProductAddFromSkuIdsV1: {
        url: '/v1/manage/product/addFromSkuIds',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageProductDetailV1: {
        url: '/v1/manage/product/detail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageProductGetNBProductV1: {
        url: '/v1/manage/product/getNBProduct',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageProductListV1: {
        url: '/v1/manage/product/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageProductPreviewProductIdV1: {
        url: '/v1/manage/product/preview/{productId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageProductThirdCatListV1: {
        url: '/v1/manage/product/thirdCatList',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageProductThirdSkuListV1: {
        url: '/v1/manage/product/thirdSkuList',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageProductUpsertNBProductV1: {
        url: '/v1/manage/product/upsertNBProduct',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageProductUpsertNBProductAttributeV1: {
        url: '/v1/manage/product/upsertNBProductAttribute',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageProductUpsertNBProductAttributeValueV1: {
        url: '/v1/manage/product/upsertNBProductAttributeValue',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageProductProductIdV1: {
        url: '/v1/manage/product/{productId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageProductProductIdStatusV1: {
        url: '/v1/manage/product/{productId}/status',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManagePromotionAddPromotionGroupV1: {
        url: '/v1/manage/promotion/addPromotionGroup',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManagePromotionAddPromotionProductsFromProductIdV1: {
        url: '/v1/manage/promotion/addPromotionProductsFromProductId',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManagePromotionListV1: {
        url: '/v1/manage/promotion/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManagePromotionPromotionProductAutoIdV1: {
        url: '/v1/manage/promotion/promotionProduct/{autoId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManagePromotionPromotionProductListV1: {
        url: '/v1/manage/promotion/promotionProductList',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePromotionShiftPromotionV1: {
        url: '/v1/manage/promotion/shiftPromotion',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePromotionShiftPromotionProductV1: {
        url: '/v1/manage/promotion/shiftPromotionProduct',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManagePromotionUpdatePromotionProductV1: {
        url: '/v1/manage/promotion/updatePromotionProduct',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePromotionUpdatePromotionProductGroupStatusV1: {
        url: '/v1/manage/promotion/updatePromotionProductGroupStatus',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManagePromotionUpdatePromotionProductStatusV1: {
        url: '/v1/manage/promotion/updatePromotionProductStatus',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManagePromotionUpsertPromotionV1: {
        url: '/v1/manage/promotion/upsertPromotion',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManagePromotionAutoIdV1: {
        url: '/v1/manage/promotion/{autoId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageReconciliationFileV1: {
        url: '/v1/manage/reconciliation/file',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageReconciliationJdAccountLogsV1: {
        url: '/v1/manage/reconciliation/jdAccountLogs',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageReconciliationOrderInfoV1: {
        url: '/v1/manage/reconciliation/orderInfo',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageReconciliationOrdersV1: {
        url: '/v1/manage/reconciliation/orders',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderCalculatePriceUserIdV1: {
        url: '/v1/order/calculatePrice/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderCheckUserIdV1: {
        url: '/v1/order/check/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderCountUserIdV1: {
        url: '/v1/order/count/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderGetUserIdV1: {
        url: '/v1/order/get/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderGetOrderUserIdV1: {
        url: '/v1/order/getOrder/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderGetPaidNumExceptFirstUserIdV1: {
        url: '/v1/order/getPaidNumExceptFirst/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderGetPreOrderUserIdV1: {
        url: '/v1/order/getPreOrder/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderGetSimpleUserIdV1: {
        url: '/v1/order/getSimple/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderGetV2UserIdV1: {
        url: '/v1/order/getV2/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOrderInvoiceTitleSubmitV1: {
        url: '/v1/order/invoiceTitle/submit',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderInvoiceTitleUserIdV1: {
        url: '/v1/order/invoiceTitle/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderListUserIdV1: {
        url: '/v1/order/list/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOrderListOrderForAntifraudV1: {
        url: '/v1/order/listOrderForAntifraud',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOrderOtosaasPayInfoV1: {
        url: '/v1/order/otosaas/pay/info',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOrderPreSubmitUserIdV1: {
        url: '/v1/order/preSubmit/{userId}',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderQueryBalanceTypeCodeV1: {
        url: '/v1/order/queryBalance/{typeCode}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOrderSaveExitPayReasonV1: {
        url: '/v1/order/saveExitPayReason',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOrderSubmitUserIdV1: {
        url: '/v1/order/submit/{userId}',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderTrackUserIdV1: {
        url: '/v1/order/track/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOtosaasOrderInfoV1: {
        url: '/v1/otosaas/order/info',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOtosaasOrderRefundV1: {
        url: '/v1/otosaas/order/refund',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOtosaasOrderStatusV1: {
        url: '/v1/otosaas/order/status',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getPromotionProductListByPromotionNoV1: {
        url: '/v1/promotionProduct/listByPromotionNo',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postRealNameCheckAndRegisterUserIdV1: {
        url: '/v1/realName/checkAndRegister/{userId}/',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postRealNameCheckAndRegisterExUserIdV1: {
        url: '/v1/realName/checkAndRegisterEx/{userId}/',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getRealNameUserIdV1: {
        url: '/v1/realName/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductBottomBannersV1: {
        url: '/v1/salesProduct/bottomBanners',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductDiscountProductsV1: {
        url: '/v1/salesProduct/discountProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductFavoriteProductsV1: {
        url: '/v1/salesProduct/favoriteProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductGuideBannersV1: {
        url: '/v1/salesProduct/guideBanners',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductHotProductsV1: {
        url: '/v1/salesProduct/hotProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductIndexInfoV1: {
        url: '/v1/salesProduct/indexInfo',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductIndexInfoV2V1: {
        url: '/v1/salesProduct/indexInfoV2',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductIndexInfoV3V1: {
        url: '/v1/salesProduct/indexInfoV3',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductIndexPageSecKillProductsV1: {
        url: '/v1/salesProduct/indexPage/secKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductMiddleBannersV1: {
        url: '/v1/salesProduct/middleBanners',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductOtoBannersV1: {
        url: '/v1/salesProduct/otoBanners',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductOtosaasEnterListV1: {
        url: '/v1/salesProduct/otosaas/enter/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductProductDetailV1: {
        url: '/v1/salesProduct/productDetail',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductProductDetailV2V1: {
        url: '/v1/salesProduct/productDetailV2',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductProductDetailV3V1: {
        url: '/v1/salesProduct/productDetailV3',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductPromotionPromotionNoV1: {
        url: '/v1/salesProduct/promotion/{promotionNo}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductPromotionsV1: {
        url: '/v1/salesProduct/promotions',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductSecKillProductsV1: {
        url: '/v1/salesProduct/secKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getSalesProductTopBannersV1: {
        url: '/v1/salesProduct/topBanners',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getShareCouponConfigV1: {
        url: '/v1/share/couponConfig',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getShareCouponReceivedListV1: {
        url: '/v1/share/couponReceivedList',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getShareFavoriteProductsV1: {
        url: '/v1/share/favoriteProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getShareNewUserProductsV1: {
        url: '/v1/share/newUserProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putShareReceiveReceivedUserIdV1: {
        url: '/v1/share/receive/{receivedUserId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getShareSecKillProductsV1: {
        url: '/v1/share/secKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getShareShareProductsV1: {
        url: '/v1/share/shareProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getShareUserCouponV1: {
        url: '/v1/share/userCoupon',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolCheckOrderV1: {
        url: '/v1/tool/checkOrder',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolGetParamValueV1: {
        url: '/v1/tool/getParamValue',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putToolInvoiceCheckTaskV1: {
        url: '/v1/tool/invoiceCheckTask',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolInvoiceUpdateV1: {
        url: '/v1/tool/invoiceUpdate',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putToolOrderFixAbnormalUserIdV1: {
        url: '/v1/tool/order/fixAbnormal/{userId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolOrderGetAbnormalUserIdV1: {
        url: '/v1/tool/order/getAbnormal/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postToolOrderPaymentNotifyV1: {
        url: '/v1/tool/order/paymentNotify',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putToolOrderUpdateRefundStatusUserIdV1: {
        url: '/v1/tool/order/updateRefundStatus/{userId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putToolOrderExpireCheckTaskV1: {
        url: '/v1/tool/orderExpireCheckTask',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolPushTestV1: {
        url: '/v1/tool/pushTest',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolPushTestExV1: {
        url: '/v1/tool/pushTestEx',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolQueryJdBalanceV1: {
        url: '/v1/tool/queryJdBalance',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    deleteToolRedisKeyV1: {
        url: '/v1/tool/redisKey',
        method: 'delete',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolRedisValueV1: {
        url: '/v1/tool/redisValue',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolSyncSkuV1: {
        url: '/v1/tool/syncSku',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getToolTestChineseV1: {
        url: '/v1/tool/testChinese',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putToolThirdPartyMessageHandleTaskV1: {
        url: '/v1/tool/thirdPartyMessageHandleTask',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putToolTokenV1: {
        url: '/v1/tool/token',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postToolUploadImageV1: {
        url: '/v1/tool/uploadImage',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserIsNewUserUserIdV1: {
        url: '/v1/user/isNewUser/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postUserReceiverAddressAddUserIdV1: {
        url: '/v1/user/receiverAddress/add/{userId}',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserReceiverAddressAllProvinceV1: {
        url: '/v1/user/receiverAddress/allProvince',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserReceiverAddressCitiesByProvinceIdProvinceIdV1: {
        url: '/v1/user/receiverAddress/citiesByProvinceId/{provinceId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserReceiverAddressCountiesByCityIdCityIdV1: {
        url: '/v1/user/receiverAddress/countiesByCityId/{cityId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    deleteUserReceiverAddressDeleteUserIdV1: {
        url: '/v1/user/receiverAddress/delete/{userId}',
        method: 'delete',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserReceiverAddressGetUserIdV1: {
        url: '/v1/user/receiverAddress/get/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserReceiverAddressListUserIdV1: {
        url: '/v1/user/receiverAddress/list/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putUserReceiverAddressSetDefaultUserIdV1: {
        url: '/v1/user/receiverAddress/setDefault/{userId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserReceiverAddressTownsByCountyIdCountryIdV1: {
        url: '/v1/user/receiverAddress/townsByCountyId/{countryId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putUserReceiverAddressUpdateUserIdV1: {
        url: '/v1/user/receiverAddress/update/{userId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageCouponSectionConfigAddV2: {
        url: '/v2/manage/coupon/sectionConfig/add',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCouponSectionConfigGetCouponBatchCodeV2: {
        url: '/v2/manage/coupon/sectionConfig/get/{couponBatchCode}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCouponSectionConfigListV2: {
        url: '/v2/manage/coupon/sectionConfig/list',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageCouponSectionConfigRelationAddV2: {
        url: '/v2/manage/coupon/sectionConfig/relation/add',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCouponSectionConfigRelationGetCouponBatchCodeV2: {
        url: '/v2/manage/coupon/sectionConfig/relation/get/{couponBatchCode}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageCouponSectionConfigShiftCouponV2: {
        url: '/v2/manage/coupon/sectionConfig/shift/coupon',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageCouponSectionConfigUpdateV2: {
        url: '/v2/manage/coupon/sectionConfig/update',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageCouponSectionConfigUpdateStatusCouponV2: {
        url: '/v2/manage/coupon/sectionConfig/updateStatus/coupon',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageCouponSectionConfigUpdateStatusAutoIdV2: {
        url: '/v2/manage/coupon/sectionConfig/updateStatus/{autoId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageCouponTemplateV2: {
        url: '/v2/manage/coupon/template',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOperationAddHotProductFromProductIdV2: {
        url: '/v2/manage/operation/addHotProductFromProductId',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postManageOperationAddSecKillProductFromProductIdV2: {
        url: '/v2/manage/operation/addSecKillProductFromProductId',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationHotProductAutoIdV2: {
        url: '/v2/manage/operation/hotProduct/{autoId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationListHotProductsV2: {
        url: '/v2/manage/operation/listHotProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationListSecKillProductsV2: {
        url: '/v2/manage/operation/listSecKillProducts',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getManageOperationSecKillProductAutoIdV2: {
        url: '/v2/manage/operation/secKillProduct/{autoId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOperationUpdateHotProductsV2: {
        url: '/v2/manage/operation/updateHotProducts',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putManageOperationUpdateSecKillProductV2: {
        url: '/v2/manage/operation/updateSecKillProduct',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getOrderShowRepayfundNoticeUserIdV2: {
        url: '/v2/order/showRepayfundNotice/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    postOrderSubmitUserIdV2: {
        url: '/v2/order/submit/{userId}',
        method: 'post',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserCouponGetUserIdV2: {
        url: '/v2/user/coupon/get/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserCouponListAvailableCouponV2: {
        url: '/v2/user/coupon/listAvailableCoupon',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putUserCouponMultipleReceiveUserIdV2: {
        url: '/v2/user/coupon/multipleReceive/{userId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    putUserCouponReceiveUserIdV2: {
        url: '/v2/user/coupon/receive/{userId}',
        method: 'put',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserCouponListForReceiveUserIdV3: {
        url: '/v3/user/coupon/listForReceive/{userId}',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
    getUserCouponProductListAvailableCouponV3: {
        url: '/v3/user/coupon/product/listAvailableCoupon',
        method: 'get',
        baseURL: '/api.u51.com/installment-mall/api',
    },
};
