import InstallmentMall from './api/installment-mall/api';


/**
* 获取商品详情(供运营活动组抽奖活动调用)    /v1/activity/front/products
*
*/
InstallmentMall.postActivityFrontProductsV1({
    data: {
        productNos: [], //商品编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动集合(供运营活动组抽奖活动调用)    /v1/activity/front/promotions
*
*/
InstallmentMall.getActivityFrontPromotionsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 预提交订单    /v1/activity/preSubmit/{userId}
*
*/
InstallmentMall.postActivityPreSubmitUserIdV1({
    params: {
        fromType: '10', //渠道商城编码
        userId: '150001810', //51用户ID
    },
    data: {
        orderPreSubmitDTO: {
    "promotionType": "(integer) 促销类型(0:普通,1:秒杀,2:活动专区)",
    "receiverAddressId": "(integer) 收货地址ID",
    "skuList": [
        {
            "productNo": "(string) 商品运营编号",
            "skuAttributes": "(string) 所选SKU属性集合",
            "skuCount": "(integer) SKU数量",
            "skuNo": "(string) SKU编号"
        }
    ],
    "status": "(integer) 活动状态"
}, //订单预提交请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情    /v1/activity/productDetailV3
*
*/
InstallmentMall.getActivityProductDetailV3V1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取推荐商品    /v1/activity/recommend
*
*/
InstallmentMall.getActivityRecommendV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 申请售后页面    /v1/afterSale/applyPage
*
*/
InstallmentMall.getAfterSaleApplyPageV1({
    params: {
        userId: '150001810', //用户ID
        orderNo: '111072444619', //订单编号
        orderDetailNo: '111072444619', //订单详情编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 取消售后    /v1/afterSale/cancel/{afterSaleNo}
*
*/
InstallmentMall.getAfterSaleCancelAfterSaleNoV1({
    params: {
        afterSaleNo: 'undefined', //服务单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 申请售后服务    /v1/afterSale/create
*
*/
InstallmentMall.postAfterSaleCreateV1({
    data: {
        requestAfterSaleDTO: {
    "contactName": "(string) 联系人姓名",
    "contactPhone": "(string) 联系人电话",
    "deliverySupplierType": "(integer) 物流提供方类型（10:京东,默认）",
    "orderDetailNo": "(string) 订单详细编号",
    "orderNo": "(string) 订单编号",
    "pickAddress": "(string) 取件地址",
    "pickCityCode": "(integer) 取件城市编码",
    "pickCountyCode": "(integer) 取件区县编码",
    "pickFullAddress": "(string) 取件地址全名",
    "pickProvinceCode": "(integer) 取件省份编码",
    "pickVillageCode": "(integer) 取件乡镇编码",
    "pictureUrl": "(string) 图片1链接",
    "productSupplierType": "(integer) 商品提供方类型（10:京东,默认）",
    "receiveAddress": "(string) 收货地址",
    "receiveCityCode": "(integer) 收货城市编码",
    "receiveCountyCode": "(integer) 收货区县编码",
    "receiveFullAddress": "(string) 收货地址全名",
    "receiveProvinceCode": "(integer) 收货省份编码",
    "receiveSameAsPick": "(boolean) 收货地址同取件地址,默认true",
    "receiveVillageCode": "(integer) 收货乡镇编码",
    "refundType": "(integer) 退款方式（1:原路返回,默认）",
    "requestCount": "(integer) 申请数量",
    "requestReason": "(string) 问题描述",
    "requestTime": "(string) 申请时间",
    "returnType": "(integer) 商品取回方式（1:上门取件,默认,2:客户送货）",
    "serviceType": "(integer) 服务类型（1:退货,2:换货,3:维修）",
    "userId": "(integer) 51用户ID"
}, //申请售后数据结构
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取服务单详情    /v1/afterSale/detail
*
*/
InstallmentMall.getAfterSaleDetailV1({
    params: {
        userId: '150001810', //用户ID
        orderNo: '111072444619', //订单号
        orderDetailNo: 'undefined', //订单详细号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传售后图片    /v1/afterSale/uploadImage
*
*/
InstallmentMall.postAfterSaleUploadImageV1({
    data: {
        base64Image: '(string) undefined', //图片的base64转码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取全部服务降级配置列表    /v1/degrade/listAll
*
*/
InstallmentMall.getDegradeListAllV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加活动详情    /v1/manage/activity/addActivityConfig
*
*/
InstallmentMall.postManageActivityAddActivityConfigV1({
    data: {
        ActivityConfigMDTO: {
    "activeTime": "(string) 开始时间",
    "autoId": "(integer) 自增主键",
    "expireTime": "(string) 结束时间",
    "orderIndex": "(integer) 排序值",
    "promtionStatus": "(string) 进行状态（待开始，进行中，已结束）",
    "seqNo": "(integer) 序号",
    "status": "(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用",
    "title": "(string) 标题"
}, //活动信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从商品列表中添加    /v1/manage/activity/addActivityProductFromProductId
*
*/
InstallmentMall.postManageActivityAddActivityProductFromProductIdV1({
    params: {
        activityId: '1', //活动Id
    },
    data: {
        productIdList: [], //productIdList
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动详情    /v1/manage/activity/getActivityConfig
*
*/
InstallmentMall.getManageActivityGetActivityConfigV1({
    params: {
        autoId: 'undefined', //活动Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取获奖信息    /v1/manage/activity/getActivityMessage
*
*/
InstallmentMall.getManageActivityGetActivityMessageV1({
    params: {
        autoId: 'undefined', //活动Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情    /v1/manage/activity/getActivityProduct
*
*/
InstallmentMall.getManageActivityGetActivityProductV1({
    params: {
        autoId: 'undefined', //商品Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动集合    /v1/manage/activity/list
*
*/
InstallmentMall.getManageActivityListV1({
    params: {
        pageIndex: '1', //页码(0开始)
        pageSize: '10', //每页记录数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品列表    /v1/manage/activity/listActivityProducts
*
*/
InstallmentMall.getManageActivityListActivityProductsV1({
    params: {
        pageIndex: '1', //页码(0开始)
        pageSize: '10', //每页记录数
        configId: '1', //活动Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改活动详情    /v1/manage/activity/updateActivityConfig
*
*/
InstallmentMall.putManageActivityUpdateActivityConfigV1({
    data: {
        ActivityConfigMDTO: {
    "activeTime": "(string) 开始时间",
    "autoId": "(integer) 自增主键",
    "expireTime": "(string) 结束时间",
    "orderIndex": "(integer) 排序值",
    "promtionStatus": "(string) 进行状态（待开始，进行中，已结束）",
    "seqNo": "(integer) 序号",
    "status": "(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用",
    "title": "(string) 标题"
}, //活动信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改活动状态    /v1/manage/activity/updateActivityConfig/status
*
*/
InstallmentMall.putManageActivityUpdateActivityConfigStatusV1({
    params: {
        autoId: 'undefined', //活动Id
        status: 'undefined', //状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新商品配置    /v1/manage/activity/updateActivityProduct
*
*/
InstallmentMall.putManageActivityUpdateActivityProductV1({
    data: {
        ActivityProductMDTO: {
    "activityConfigId": "(integer) 关联配置ID",
    "autoId": "(integer) 自增id",
    "detailLink": "(string) 详情链接",
    "discountPeriods": "(string) 免息期数，可以为空",
    "imagePath": "(string) 图片路径",
    "newComersOnly": "(boolean) 是否新人专享",
    "orderIndex": "(integer) 排序",
    "productId": "(integer) 关联商品ID",
    "productNo": "(string) 商品运营编号",
    "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
    "skuList": [
        {
            "attributeMap": {},
            "autoId": "(integer) 自增主键",
            "contractPrice": "(number) 协议价格",
            "imagePath": "(string) 图片路径",
            "is7ToReturn": "(integer) 是否支持7天退货，1：是，0：不支持",
            "marketPrice": "(number) 市场价格",
            "marketPriceGap": "(number) 市场价格调整幅度",
            "marketPriceRate": "(number) 市场价格浮动比例",
            "marketPriceRateType": "(integer) 市场价格类型",
            "operationPrice": "(number) 运营价格",
            "operationPriceGap": "(number) 运营价格调整幅度 ",
            "operationPriceRate": "(number) 运营价格浮动比例 %n",
            "operationPriceRateType": "(integer) 运营价格类型",
            "price": "(number) 单品价格",
            "productId": "(integer) 产品id",
            "skuId": "(integer) skuId",
            "skuNo": "(string) sku编号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用",
            "subImagePath": "(string) 小图路径",
            "subTitle": "(string) 单品描述",
            "thirdPrice": "(number) 第三方价格（京东价）",
            "thirdSkuId": "(string) 第三方skuId",
            "title": "(string) 单品名称",
            "typeCode": "(integer) 供应商编号",
            "winningPrice": "(number) 中奖价"
        }
    ],
    "status": "(integer) 商品状态",
    "stockCount": "(integer) 库存数量",
    "subTitle": "(string) 副标题-用于push任务",
    "supportCoupon": "(boolean) 是否支持优惠券",
    "tag": "(string) 标签",
    "title": "(string) 标题"
}, //商品
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新商品状态    /v1/manage/activity/updateActivityProduct/status
*
*/
InstallmentMall.putManageActivityUpdateActivityProductStatusV1({
    params: {
        autoId: 'undefined', //商品Id
        status: 'undefined', //状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取服务单详情    /v1/manage/afterSale/detail
*
*/
InstallmentMall.getManageAfterSaleDetailV1({
    params: {
        userId: '150001810', //用户ID
        orderNo: '111072444619', //订单号
        orderDetailNo: 'undefined', //订单详细号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增Banner    /v1/manage/banner/add
*
*/
InstallmentMall.postManageBannerAddV1({
    data: {
        bannerConfigDTO: {
    "autoId": "(integer) 自增长ID",
    "cgData": [
        {
            "groupId": "(integer) 分群id",
            "groupName": "(string) 分群名称"
        }
    ],
    "extraLink": "(string) 跳转链接",
    "imagePath": "(string) 图片链接",
    "linkType": "(integer) 跳转链接类型 1 - 壳内跳转链接， 2 - 壳外跳转链接",
    "location": "(integer) 显示位置，0:上，10:中，20:底",
    "name": "(string) banner名称",
    "orderIndex": "(integer) 顺序",
    "seqNo": "(integer) 序号",
    "status": "(integer) 状态，参照GenericStatsuEnum"
}, //bannerConfigDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取Banner列表    /v1/manage/banner/list
*
*/
InstallmentMall.getManageBannerListV1({
    params: {
        page: '1', //页数，从0开始
        limit: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新Banner    /v1/manage/banner/update
*
*/
InstallmentMall.putManageBannerUpdateV1({
    data: {
        bannerConfigDTO: {
    "autoId": "(integer) 自增长ID",
    "cgData": [
        {
            "groupId": "(integer) 分群id",
            "groupName": "(string) 分群名称"
        }
    ],
    "extraLink": "(string) 跳转链接",
    "imagePath": "(string) 图片链接",
    "linkType": "(integer) 跳转链接类型 1 - 壳内跳转链接， 2 - 壳外跳转链接",
    "location": "(integer) 显示位置，0:上，10:中，20:底",
    "name": "(string) banner名称",
    "orderIndex": "(integer) 顺序",
    "seqNo": "(integer) 序号",
    "status": "(integer) 状态，参照GenericStatsuEnum"
}, //bannerConfigDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改Banner状态    /v1/manage/banner/{autoId}/shift
*
*/
InstallmentMall.putManageBannerAutoIdShiftV1({
    params: {
        autoId: '1', //autoId
        shiftType: '1', //1 下移， -1 上移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改Banner状态    /v1/manage/banner/{autoId}/status
*
*/
InstallmentMall.putManageBannerAutoIdStatusV1({
    params: {
        autoId: '1', //autoId
        status: '1', //新状态， 1启用 0禁用 -1删除
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 批处理订单物流信息    /v1/manage/batch/logistics
*
*/
InstallmentMall.postManageBatchLogisticsV1({
    data: {
        base64File: '(string) undefined', //base64File
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 批处理自营商品信息    /v1/manage/batch/product
*
*/
InstallmentMall.postManageBatchProductV1({
    data: {
        base64File: '(string) undefined', //base64File
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取CG人群列表    /v1/manage/cg/list
*
*/
InstallmentMall.getManageCgListV1({
    params: {
        pageIndex: '1', //页码
        userName: 'baoning', //登录用户名
        pageSize: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增优惠券版块关联配置    /v1/manage/coupon/sectionConfig/add
*
*/
InstallmentMall.postManageCouponSectionConfigAddV1({
    data: {
        couponSectionConfigDTO: {
    "autoId": "(integer) 主键",
    "couponBatchCode": "(string) 优惠券批次号",
    "couponName": "(string) 优惠券名称",
    "fromType": "(integer) 投放来源",
    "orderIndex": "(integer) 顺序",
    "receiveBeginTime": "(string) 可领取起始时间",
    "receiveEndTime": "(string) 可领取结束时间",
    "sectionNo": "(string) 版块编号(活动专区:promotionNo,特定商品:productId)",
    "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4特定商品)",
    "status": "(integer) 状态"
}, //优惠券版块关联配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券版块关联配置    /v1/manage/coupon/sectionConfig/get/{autoId}
*
*/
InstallmentMall.getManageCouponSectionConfigGetAutoIdV1({
    params: {
        autoId: 'undefined', //主键ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券版块关联配置列表(分页)    /v1/manage/coupon/sectionConfig/list
*
*/
InstallmentMall.getManageCouponSectionConfigListV1({
    params: {
        sectionType: '3', //版块类型(0:全场通用,3:活动专区,4:特定商品)
        pageIndex: '1', //页码(1开始)
        pageSize: '10', //每页记录数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 移动顺序    /v1/manage/coupon/sectionConfig/shift/{autoId}
*
*/
InstallmentMall.putManageCouponSectionConfigShiftAutoIdV1({
    params: {
        autoId: 'undefined', //autoId
        shiftType: '1', //1 下移, -1 上移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改优惠券版块关联配置    /v1/manage/coupon/sectionConfig/update
*
*/
InstallmentMall.putManageCouponSectionConfigUpdateV1({
    data: {
        couponSectionConfigDTO: {
    "autoId": "(integer) 主键",
    "couponBatchCode": "(string) 优惠券批次号",
    "couponName": "(string) 优惠券名称",
    "fromType": "(integer) 投放来源",
    "orderIndex": "(integer) 顺序",
    "receiveBeginTime": "(string) 可领取起始时间",
    "receiveEndTime": "(string) 可领取结束时间",
    "sectionNo": "(string) 版块编号(活动专区:promotionNo,特定商品:productId)",
    "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4特定商品)",
    "status": "(integer) 状态"
}, //优惠券版块关联配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改优惠券版块关联配置状态    /v1/manage/coupon/sectionConfig/updateStatus/{autoId}
*
*/
InstallmentMall.putManageCouponSectionConfigUpdateStatusAutoIdV1({
    params: {
        autoId: 'undefined', //主键ID
        status: 'undefined', //状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券模板信息    /v1/manage/coupon/template
*
*/
InstallmentMall.getManageCouponTemplateV1({
    params: {
        couponBatchCode: 'undefined', //优惠券批次号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取服务降级配置    /v1/manage/degrade/get
*
*/
InstallmentMall.getManageDegradeGetV1({
    params: {
        fromType: '0', //投放来源(0:全渠道,10:管家,20:即刻有,30:给你花)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增服务降级配置    /v1/manage/degrade/insert
*
*/
InstallmentMall.postManageDegradeInsertV1({
    data: {
        serviceDegradeDTO: {
    "autoId": "(integer) 自增主键",
    "endTime": "(string) 降级生效结束时间",
    "fromType": "(integer) 投放来源",
    "noticeMessage": "(string) 全局公告消息",
    "startTime": "(string) 降级生效起始时间",
    "strategies": [
        {
            "noticeMessage": "(string) 公告消息",
            "scopeName": "(string) 范围名称",
            "scopeType": "(integer) 范围类型",
            "strategyName": "(string) 策略名称",
            "strategyType": "(integer) 策略类型",
            "subStrategyList": [
                {
                    "noticeMessage": "(string) 公告消息",
                    "scopeName": "(string) 范围名称",
                    "scopeType": "(integer) 范围类型",
                    "strategyName": "(string) 策略名称",
                    "strategyType": "(integer) 策略类型",
                    "subStrategyList": [
                        {
                            "noticeMessage": "(string) 公告消息",
                            "scopeName": "(string) 范围名称",
                            "scopeType": "(integer) 范围类型",
                            "strategyName": "(string) 策略名称",
                            "strategyType": "(integer) 策略类型",
                            "subStrategyList": [
                                {
                                    "noticeMessage": "(string) 公告消息",
                                    "scopeName": "(string) 范围名称",
                                    "scopeType": "(integer) 范围类型",
                                    "strategyName": "(string) 策略名称",
                                    "strategyType": "(integer) 策略类型",
                                    "subStrategyList": [
                                        {
                                            "noticeMessage": "(string) 公告消息",
                                            "scopeName": "(string) 范围名称",
                                            "scopeType": "(integer) 范围类型",
                                            "strategyName": "(string) 策略名称",
                                            "strategyType": "(integer) 策略类型",
                                            "subStrategyList": [
                                                {
                                                    "noticeMessage": "(string) 公告消息",
                                                    "scopeName": "(string) 范围名称",
                                                    "scopeType": "(integer) 范围类型",
                                                    "strategyName": "(string) 策略名称",
                                                    "strategyType": "(integer) 策略类型",
                                                    "subStrategyList": [
                                                        {
                                                            "noticeMessage": "(string) 公告消息",
                                                            "scopeName": "(string) 范围名称",
                                                            "scopeType": "(integer) 范围类型",
                                                            "strategyName": "(string) 策略名称",
                                                            "strategyType": "(integer) 策略类型",
                                                            "subStrategyList": [
                                                                {
                                                                    "noticeMessage": "(string) 公告消息",
                                                                    "scopeName": "(string) 范围名称",
                                                                    "scopeType": "(integer) 范围类型",
                                                                    "strategyName": "(string) 策略名称",
                                                                    "strategyType": "(integer) 策略类型",
                                                                    "subStrategyList": [
                                                                        {
                                                                            "noticeMessage": "(string) 公告消息",
                                                                            "scopeName": "(string) 范围名称",
                                                                            "scopeType": "(integer) 范围类型",
                                                                            "strategyName": "(string) 策略名称",
                                                                            "strategyType": "(integer) 策略类型",
                                                                            "subStrategyList": [
                                                                                {
                                                                                    "noticeMessage": "(string) 公告消息",
                                                                                    "scopeName": "(string) 范围名称",
                                                                                    "scopeType": "(integer) 范围类型",
                                                                                    "strategyName": "(string) 策略名称",
                                                                                    "strategyType": "(integer) 策略类型",
                                                                                    "subStrategyList": "#/definitions/服务降级策略配置"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}, //服务降级配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改服务降级配置    /v1/manage/degrade/update
*
*/
InstallmentMall.putManageDegradeUpdateV1({
    data: {
        serviceDegradeDTO: {
    "autoId": "(integer) 自增主键",
    "endTime": "(string) 降级生效结束时间",
    "fromType": "(integer) 投放来源",
    "noticeMessage": "(string) 全局公告消息",
    "startTime": "(string) 降级生效起始时间",
    "strategies": [
        {
            "noticeMessage": "(string) 公告消息",
            "scopeName": "(string) 范围名称",
            "scopeType": "(integer) 范围类型",
            "strategyName": "(string) 策略名称",
            "strategyType": "(integer) 策略类型",
            "subStrategyList": [
                {
                    "noticeMessage": "(string) 公告消息",
                    "scopeName": "(string) 范围名称",
                    "scopeType": "(integer) 范围类型",
                    "strategyName": "(string) 策略名称",
                    "strategyType": "(integer) 策略类型",
                    "subStrategyList": [
                        {
                            "noticeMessage": "(string) 公告消息",
                            "scopeName": "(string) 范围名称",
                            "scopeType": "(integer) 范围类型",
                            "strategyName": "(string) 策略名称",
                            "strategyType": "(integer) 策略类型",
                            "subStrategyList": [
                                {
                                    "noticeMessage": "(string) 公告消息",
                                    "scopeName": "(string) 范围名称",
                                    "scopeType": "(integer) 范围类型",
                                    "strategyName": "(string) 策略名称",
                                    "strategyType": "(integer) 策略类型",
                                    "subStrategyList": [
                                        {
                                            "noticeMessage": "(string) 公告消息",
                                            "scopeName": "(string) 范围名称",
                                            "scopeType": "(integer) 范围类型",
                                            "strategyName": "(string) 策略名称",
                                            "strategyType": "(integer) 策略类型",
                                            "subStrategyList": [
                                                {
                                                    "noticeMessage": "(string) 公告消息",
                                                    "scopeName": "(string) 范围名称",
                                                    "scopeType": "(integer) 范围类型",
                                                    "strategyName": "(string) 策略名称",
                                                    "strategyType": "(integer) 策略类型",
                                                    "subStrategyList": [
                                                        {
                                                            "noticeMessage": "(string) 公告消息",
                                                            "scopeName": "(string) 范围名称",
                                                            "scopeType": "(integer) 范围类型",
                                                            "strategyName": "(string) 策略名称",
                                                            "strategyType": "(integer) 策略类型",
                                                            "subStrategyList": [
                                                                {
                                                                    "noticeMessage": "(string) 公告消息",
                                                                    "scopeName": "(string) 范围名称",
                                                                    "scopeType": "(integer) 范围类型",
                                                                    "strategyName": "(string) 策略名称",
                                                                    "strategyType": "(integer) 策略类型",
                                                                    "subStrategyList": [
                                                                        {
                                                                            "noticeMessage": "(string) 公告消息",
                                                                            "scopeName": "(string) 范围名称",
                                                                            "scopeType": "(integer) 范围类型",
                                                                            "strategyName": "(string) 策略名称",
                                                                            "strategyType": "(integer) 策略类型",
                                                                            "subStrategyList": [
                                                                                {
                                                                                    "noticeMessage": "(string) 公告消息",
                                                                                    "scopeName": "(string) 范围名称",
                                                                                    "scopeType": "(integer) 范围类型",
                                                                                    "strategyName": "(string) 策略名称",
                                                                                    "strategyType": "(integer) 策略类型",
                                                                                    "subStrategyList": "#/definitions/服务降级策略配置"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}, //服务降级配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取guideBanner列表    /v1/manage/guide/list
*
*/
InstallmentMall.getManageGuideListV1({
    params: {
        pageIndex: '0', //页数，从0开始
        pageSize: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新guideBanner    /v1/manage/guide/update
*
*/
InstallmentMall.putManageGuideUpdateV1({
    data: {
        guideBannerDTO: {
    "autoId": "(integer) 自增主键",
    "extraLink": "(string) 跳转链接，可能为空",
    "fromType": "(integer) 投放来源",
    "groupId": "(integer) 组号",
    "imagePath": "(string) 图片链接",
    "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
    "name": "(string) 名称",
    "orderId": "(integer) 组内序号",
    "sampleImagePath": "(string) 示意图",
    "status": "(integer) 状态"
}, //guideBannerDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新guideBanner状态    /v1/manage/guide/{groupId}/status
*
*/
InstallmentMall.putManageGuideGroupIdStatusV1({
    params: {
        groupId: '1', //groupId
        status: '1', //新状态， 1启用 0禁用 -1删除
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取后台简介    /v1/manage/intro/get
*
*/
InstallmentMall.getManageIntroGetV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新后台简介    /v1/manage/intro/update
*
*/
InstallmentMall.postManageIntroUpdateV1({
    data: {
        managerIntroDTO: {
    "autoId": "(integer) 自增主键",
    "content": "(string) 内容"
}, //managerIntroDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加发票商品配置    /v1/manage/invoice/codeConfig/add
*
*/
InstallmentMall.postManageInvoiceCodeConfigAddV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取发票商品配置    /v1/manage/invoice/codeConfig/get/{autoId}
*
*/
InstallmentMall.getManageInvoiceCodeConfigGetAutoIdV1({
    params: {
        autoId: 'undefined', //autoId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取发票商品编码列表(分页)    /v1/manage/invoice/codeConfig/list
*
*/
InstallmentMall.getManageInvoiceCodeConfigListV1({
    params: {
        pageIndex: '1', //页数，从1开始
        pageSize: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改发票商品配置    /v1/manage/invoice/codeConfig/shift/{autoId}
*
*/
InstallmentMall.putManageInvoiceCodeConfigShiftAutoIdV1({
    params: {
        autoId: 'undefined', //autoId
        shiftType: '1', //1 下移, -1 上移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改发票商品配置    /v1/manage/invoice/codeConfig/update
*
*/
InstallmentMall.putManageInvoiceCodeConfigUpdateV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改发票商品配置状态    /v1/manage/invoice/codeConfig/updateStatus/{autoId}
*
*/
InstallmentMall.putManageInvoiceCodeConfigUpdateStatusAutoIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据开票状态导出开票列表    /v1/manage/invoice/export
*
*/
InstallmentMall.getManageInvoiceExportV1({
    params: {
        status: '1', //状态  1 - 待开票, 2 - 开票中, 3 - 已开票, 4 - 待作废, 5 - 作废中, 6 - 已作废
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据状态获取开票信息    /v1/manage/invoice/list
*
*/
InstallmentMall.getManageInvoiceListV1({
    params: {
        status: '1', //状态 1 - 待开票, 2 - 开票中, 3 - 已开票, 4 - 待作废, 5 - 作废中, 6 - 已作废
        pageIndex: '1', //页数，从1开始
        pageSize: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 批量更新订单开票状态    /v1/manage/invoice/updateStatus
*
*/
InstallmentMall.putManageInvoiceUpdateStatusV1({
    data: {
        invoiceIssueRequest: {
    "invoiceStatus": "(integer) 发票状态（2 - 开票中, 5 - 作废中）",
    "orderNoList": []
}, //开票请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从产品列表中添加    /v1/manage/operation/addHotProductFromProductId
*
*/
InstallmentMall.postManageOperationAddHotProductFromProductIdV1({
    data: {
        productIdList: [], //productIdList
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增秒杀场次配置    /v1/manage/operation/addSecKillConfig
*
*/
InstallmentMall.postManageOperationAddSecKillConfigV1({
    data: {
        secKillConfigDTO: {
    "activeTime": "(string) 开始时间",
    "autoId": "(integer) 自增主键",
    "expireTime": "(string) 结束时间",
    "productsCount": "(integer) 商品数量",
    "productsSoldCount": "(integer) 商品销量",
    "promtionStatus": "(string) 进行状态（待开始，进行中，已结束）",
    "seqNo": "(integer) 序号",
    "showType": "(integer) 展示类型，1首页展示 2活动页展示",
    "status": "(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用",
    "title": "(string) 标题"
}, //secKillConfigDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从产品列表中添加    /v1/manage/operation/addSecKillProductFromProductId
*
*/
InstallmentMall.postManageOperationAddSecKillProductFromProductIdV1({
    params: {
        configId: '1', //秒杀配置id
    },
    data: {
        productIdList: [], //productIdList
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 移除热门产品    /v1/manage/operation/hotProduct/{autoId}
*
*/
InstallmentMall.deleteManageOperationHotProductAutoIdV1({
    params: {
        autoId: '1', //热门产品Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门商品列表    /v1/manage/operation/hotProductDetail
*
*/
InstallmentMall.getManageOperationHotProductDetailV1({
    params: {
        autoId: '1', //页数，从0开始
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门商品列表    /v1/manage/operation/listHotProducts
*
*/
InstallmentMall.getManageOperationListHotProductsV1({
    params: {
        page: '1', //页数，从0开始
        limit: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀场次配置    /v1/manage/operation/listSecKillConfig
*
*/
InstallmentMall.getManageOperationListSecKillConfigV1({
    params: {
        page: '1', //页数，从0开始
        limit: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品列表    /v1/manage/operation/listSecKillProducts
*
*/
InstallmentMall.getManageOperationListSecKillProductsV1({
    params: {
        page: '0', //页数，从0开始
        limit: '20', //每页数量
        configId: '1', //秒杀配置id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改秒杀场次状态    /v1/manage/operation/secKill/{autoId}/status
*
*/
InstallmentMall.putManageOperationSecKillAutoIdStatusV1({
    params: {
        autoId: '1', //autoId
        status: '1', //新状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除秒杀场次产品关联    /v1/manage/operation/secKillProduct/{autoId}
*
*/
InstallmentMall.deleteManageOperationSecKillProductAutoIdV1({
    params: {
        autoId: '1', //页数，从0开始
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新商品顺序（上移小于0，下移大于0）    /v1/manage/operation/shiftProduct
*
*/
InstallmentMall.putManageOperationShiftProductV1({
    params: {
        productNo: '1', //热门产品编号
        shiftType: '1', //变更类型，-1上移，+1下移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新热门商品    /v1/manage/operation/updateHotProducts
*
*/
InstallmentMall.putManageOperationUpdateHotProductsV1({
    data: {
        hotProductConfigDTO: {
    "autoId": "(integer) 自增主键",
    "discountPeriods": "(string) 100%免息期数，单选 3，6，9，12",
    "imagePath": "(string) 图片路径",
    "newComersOnly": "(boolean) 是否新人专享",
    "productId": "(integer) undefined",
    "productNo": "(string) 商品编号",
    "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
    "skuList": [
        {
            "attributeMap": {},
            "autoId": "(integer) 自增主键",
            "contractPrice": "(number) 协议价格",
            "imagePath": "(string) 图片路径",
            "is7ToReturn": "(integer) 是否支持7天退货，1：是，0：不支持",
            "marketPrice": "(number) 市场价格",
            "marketPriceGap": "(number) 市场价格调整幅度",
            "marketPriceRate": "(number) 市场价格浮动比例",
            "marketPriceRateType": "(integer) 市场价格类型",
            "operationPrice": "(number) 运营价格",
            "operationPriceGap": "(number) 运营价格调整幅度 ",
            "operationPriceRate": "(number) 运营价格浮动比例 %n",
            "operationPriceRateType": "(integer) 运营价格类型",
            "price": "(number) 单品价格",
            "productId": "(integer) 产品id",
            "skuId": "(integer) skuId",
            "skuNo": "(string) sku编号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用",
            "subImagePath": "(string) 小图路径",
            "subTitle": "(string) 单品描述",
            "thirdPrice": "(number) 第三方价格（京东价）",
            "thirdSkuId": "(string) 第三方skuId",
            "title": "(string) 单品名称",
            "typeCode": "(integer) 供应商编号",
            "winningPrice": "(number) 中奖价"
        }
    ],
    "subTitle": "(string) 副标题",
    "supportCoupon": "(boolean) 是否支持用券",
    "tag": "(string) 标签",
    "title": "(string) 标题"
}, //hotProductConfigDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新运营商品状态（启用禁用）    /v1/manage/operation/updateOperationalProductStatus
*
*/
InstallmentMall.putManageOperationUpdateOperationalProductStatusV1({
    params: {
        productNo: '1', //产品编号，productNo
        status: '1', //状态， -1删除 0禁用 1 启用
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新秒杀场次配置    /v1/manage/operation/updateSecKillConfig
*
*/
InstallmentMall.putManageOperationUpdateSecKillConfigV1({
    data: {
        secKillConfigDTO: {
    "activeTime": "(string) 开始时间",
    "autoId": "(integer) 自增主键",
    "expireTime": "(string) 结束时间",
    "productsCount": "(integer) 商品数量",
    "productsSoldCount": "(integer) 商品销量",
    "promtionStatus": "(string) 进行状态（待开始，进行中，已结束）",
    "seqNo": "(integer) 序号",
    "showType": "(integer) 展示类型，1首页展示 2活动页展示",
    "status": "(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用",
    "title": "(string) 标题"
}, //secKillConfigDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据日期及fromType导出订单列表    /v1/manage/order/export
*
*/
InstallmentMall.getManageOrderExportV1({
    params: {
        orderCategory: '-1', //订单类型
        orderTimeBegin: '2018-03-01 00:00:00', //下单时间开始(yyyy-MM-dd HH:mm:ss)
        orderTimeEnd: '2018-04-01 00:00:00', //下单时间结束(yyyy-MM-dd HH:mm:ss)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单详情    /v1/manage/order/get/{userId}
*
*/
InstallmentMall.getManageOrderGetUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
        orderDetailNo: '111072444619', //详情订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单列表(分页)    /v1/manage/order/list
*
*/
InstallmentMall.postManageOrderListV1({
    params: {
        pageIndex: '1', //页码
        pageSize: '10', //每页记录数
    },
    data: {
        orderQueryDTO: {
    "fromType": "(integer) 投放来源",
    "orderCategory": "(integer) 订单类别",
    "orderNo": "(string) 订单号",
    "orderTimeBegin": "(string) 下单时间开始(yyyy-MM-dd HH:mm:ss)",
    "orderTimeEnd": "(string) 下单时间结束(yyyy-MM-dd HH:mm:ss)",
    "productName": "(string) 商品名称",
    "productSupplierType": "(integer) 商品来源",
    "userId": "(integer) 51用户ID"
}, //订单查询请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 订单发货    /v1/manage/order/shipping
*
*/
InstallmentMall.postManageOrderShippingV1({
    data: {
        shippingInfoDTO: {
    "deliverSupplierType": "(integer) 快递公司编号",
    "expressNo": "(string) 快递单号",
    "expressPrice": "(number) 快递费用",
    "orderNo": "(string) 订单编号",
    "userId": "(integer) userId"
}, //shippingInfoDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增otoBanner    /v1/manage/oto/add
*
*/
InstallmentMall.postManageOtoAddV1({
    data: {
        otoBannerDTO: {
    "autoId": "(integer) 自增主键",
    "extraLink": "(string) 跳转链接，可能为空",
    "fromType": "(integer) 投放来源",
    "imagePath": "(string) 图片链接",
    "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
    "name": "(string) 名称",
    "orderIndex": "(integer) 排序值",
    "status": "(integer) 状态",
    "tag": "(string) 角标"
}, //otoBannerDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取otoBanner列表    /v1/manage/oto/list
*
*/
InstallmentMall.getManageOtoListV1({
    params: {
        page: '0', //页数，从0开始
        limit: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新otoBanner    /v1/manage/oto/update
*
*/
InstallmentMall.putManageOtoUpdateV1({
    data: {
        otoBannerDTO: {
    "autoId": "(integer) 自增主键",
    "extraLink": "(string) 跳转链接，可能为空",
    "fromType": "(integer) 投放来源",
    "imagePath": "(string) 图片链接",
    "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
    "name": "(string) 名称",
    "orderIndex": "(integer) 排序值",
    "status": "(integer) 状态",
    "tag": "(string) 角标"
}, //otoBannerDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上下移动otoBanner    /v1/manage/oto/{autoId}/shift
*
*/
InstallmentMall.putManageOtoAutoIdShiftV1({
    params: {
        autoId: '1', //autoId
        shiftType: '1', //1 下移， -1 上移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新otoBanner状态    /v1/manage/oto/{autoId}/status
*
*/
InstallmentMall.putManageOtoAutoIdStatusV1({
    params: {
        autoId: '1', //autoId
        status: '1', //新状态， 1启用 0禁用 -1删除
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改发票商品配置    /v1/manage/position/codeConfig/shift/{autoId}
*
*/
InstallmentMall.putManagePositionCodeConfigShiftAutoIdV1({
    params: {
        autoId: 'undefined', //autoId
        oldRank: 'undefined', //原先排序值
        newRank: 'undefined', //现在排序值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 票券移动顺序    /v1/manage/position/sectionConfig/shift/coupon
*
*/
InstallmentMall.putManagePositionSectionConfigShiftCouponV1({
    params: {
        sectionType: 'undefined', //版块编号
        couponBatchCode: 'undefined', //优惠券批次号
        oldRank: 'undefined', //原先排序值
        newRank: 'undefined', //现在排序值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 功能banner跨越移动    /v1/manage/position/shiftOtoBanner
*
*/
InstallmentMall.putManagePositionShiftOtoBannerV1({
    params: {
        autoId: '1', //自增id
        oldRank: 'undefined', //原先排序值
        newRank: 'undefined', //现在排序值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新商品顺序    /v1/manage/position/shiftProduct
*
*/
InstallmentMall.putManagePositionShiftProductV1({
    params: {
        productNo: '1', //热门产品编号
        oldRank: 'undefined', //原先排序值
        newRank: 'undefined', //现在排序值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 活动上移／下移    /v1/manage/position/shiftPromotion
*
*/
InstallmentMall.putManagePositionShiftPromotionV1({
    params: {
        promotionId: '1', //活动的自增id
        oldRank: 'undefined', //原先排序值
        newRank: 'undefined', //现在排序值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 活动商品上移／下移    /v1/manage/position/shiftPromotionProduct
*
*/
InstallmentMall.putManagePositionShiftPromotionProductV1({
    params: {
        promotionProductId: '1', //活动的自增id
        oldRank: 'undefined', //原先排序值
        newRank: 'undefined', //现在排序值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改Banner状态    /v1/manage/position/{autoId}/shift
*
*/
InstallmentMall.putManagePositionAutoIdShiftV1({
    params: {
        autoId: '1', //autoId
        oldRank: 'undefined', //原先排序值
        newRank: 'undefined', //现在排序值
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改商品详情    /v1/manage/product
*
*/
InstallmentMall.putManageProductV1({
    data: {
        productDTO: {
    "autoId": "(integer) 自增主键",
    "description": "(string) 商品描述",
    "detailContent": "(string) 商品详细描述",
    "images": [],
    "invoiceProductCode": "(string) 发票商品编码",
    "invoiceProductName": "(string) 发票商品名称",
    "name": "(string) 商品名称",
    "shippingFee": "(number) 运费",
    "skuList": [
        {
            "attributeMap": {},
            "autoId": "(integer) 自增主键",
            "contractPrice": "(number) 协议价格",
            "imagePath": "(string) 图片路径",
            "is7ToReturn": "(integer) 是否支持7天退货，1：是，0：不支持",
            "price": "(number) 单品价格",
            "productId": "(integer) 产品id",
            "skuExtendDTOList": [
                {
                    "fromType": "(integer) 投放渠道",
                    "moduleId": "(string) 模块Id",
                    "moduleName": "(string) 模块名称",
                    "moduleProductId": "(integer) 模块商品Id",
                    "price": "(number) 售价",
                    "productNo": "(string) 商品编号",
                    "skuNo": "(string) sku编号"
                }
            ],
            "skuNo": "(string) sku编号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用",
            "subImagePath": "(string) 小图路径",
            "subTitle": "(string) 单品描述",
            "thirdPrice": "(number) 第三方价格（京东价）",
            "thirdSkuId": "(string) 第三方skuId",
            "title": "(string) 单品名称",
            "typeCode": "(integer) 供应商编号"
        }
    ],
    "status": "(integer) 状态， 参照ProductStatusEnum -1删除 0未上架 1 已上架",
    "typeCode": "(integer) 商品来源 10 京东， 51自营"
}, //productDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 通过skuId列表添加商品    /v1/manage/product/addFromSkuIds
*
*/
InstallmentMall.postManageProductAddFromSkuIdsV1({
    data: {
        thirdSkuIds: [], //thirdSkuIds
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取京东处同步的商品详情    /v1/manage/product/detail
*
*/
InstallmentMall.getManageProductDetailV1({
    params: {
        productId: '1', //产品自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情    /v1/manage/product/getNBProduct
*
*/
InstallmentMall.getManageProductGetNBProductV1({
    params: {
        productId: '1', //产品自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品列表    /v1/manage/product/list
*
*/
InstallmentMall.getManageProductListV1({
    params: {
        status: '1', //状态， -1删除 0未上架 1 已上架
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品预览页面    /v1/manage/product/preview/{productId}
*
*/
InstallmentMall.getManageProductPreviewProductIdV1({
    params: {
        productId: '1', //产品自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取第三方分类信息    /v1/manage/product/thirdCatList
*
*/
InstallmentMall.getManageProductThirdCatListV1({
    params: {
        page: '1', //页数，从0开始
        limit: '5000', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取第三方单品列表    /v1/manage/product/thirdSkuList
*
*/
InstallmentMall.getManageProductThirdSkuListV1({
    params: {
        page: '1', //页数，从0开始
        limit: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 增加／修改自营商品详情    /v1/manage/product/upsertNBProduct
*
*/
InstallmentMall.postManageProductUpsertNBProductV1({
    data: {
        productDTO: {
    "autoId": "(integer) 自增主键",
    "description": "(string) 商品描述",
    "detailContent": "(string) 商品详细描述",
    "images": [],
    "invoiceProductCode": "(string) 发票商品编码",
    "invoiceProductName": "(string) 发票商品名称",
    "name": "(string) 商品名称",
    "productAttrs": [
        {
            "autoId": "(integer) 自增长主键",
            "name": "(string) 商品规格名称",
            "values": [
                {
                    "autoId": "(integer) 自增长主键",
                    "productAttributeId": "(integer) 对应商品规格Id",
                    "value": "(string) 值"
                }
            ]
        }
    ],
    "shippingFee": "(number) 运费",
    "skuList": [
        {
            "attrs": [
                {
                    "attrId": "(integer) 规格对应id",
                    "attrValueId": "(integer) 规格值对应id"
                }
            ],
            "autoId": "(integer) 自增主键",
            "contractPrice": "(number) 协议价格",
            "imagePath": "(string) 图片路径",
            "is7ToReturn": "(integer) 是否支持7天退货，1：是，0：不支持",
            "price": "(number) 单品价格",
            "productId": "(integer) 产品id",
            "skuNo": "(string) sku编号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用",
            "stockCount": "(integer) 库存",
            "subImagePath": "(string) 小图路径",
            "subTitle": "(string) 单品描述",
            "thirdPrice": "(number) 第三方价格（京东价）",
            "thirdSkuId": "(string) 第三方skuId",
            "title": "(string) 单品名称",
            "typeCode": "(integer) 供应商编号"
        }
    ],
    "status": "(integer) 状态， 参照ProductStatusEnum -1删除 0未上架 1 已上架",
    "typeCode": "(integer) 商品来源 10 京东， 51自营"
}, //productDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 增加／修改自营商品规格    /v1/manage/product/upsertNBProductAttribute
*
*/
InstallmentMall.postManageProductUpsertNBProductAttributeV1({
    data: {
        attrDTO: {
    "autoId": "(integer) 自增长主键",
    "name": "(string) 商品规格名称",
    "values": [
        {
            "autoId": "(integer) 自增长主键",
            "productAttributeId": "(integer) 对应商品规格Id",
            "value": "(string) 值"
        }
    ]
}, //attrDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 增加／修改自营商品规格值    /v1/manage/product/upsertNBProductAttributeValue
*
*/
InstallmentMall.postManageProductUpsertNBProductAttributeValueV1({
    data: {
        attrValueDTO: {
    "autoId": "(integer) 自增长主键",
    "productAttributeId": "(integer) 对应商品规格Id",
    "value": "(string) 值"
}, //attrValueDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情    /v1/manage/product/{productId}
*
*/
InstallmentMall.getManageProductProductIdV1({
    params: {
        productId: '1', //产品自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更改商品状态    /v1/manage/product/{productId}/status
*
*/
InstallmentMall.putManageProductProductIdStatusV1({
    params: {
        productId: '1', //产品自增id
        status: '1', //状态， -1删除 0未上架 1 已上架
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增活动商品分组    /v1/manage/promotion/addPromotionGroup
*
*/
InstallmentMall.postManagePromotionAddPromotionGroupV1({
    data: {
        groupDto: {
    "autoId": "(integer) 自增id",
    "backgroundCss": "(string) 背景颜色",
    "orderIndex": "(integer) 顺序",
    "promotionNo": "(string) 活动编号",
    "title": "(string) 名称",
    "titleImageUrl": "(string) 标题的图片"
}, //groupDto
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从商品列表中添加活动商品    /v1/manage/promotion/addPromotionProductsFromProductId
*
*/
InstallmentMall.postManagePromotionAddPromotionProductsFromProductIdV1({
    params: {
        groupId: '1', //活动商品组自增id
    },
    data: {
        productIdList: [], //productIdList
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动列表(分页)，页号从0开始    /v1/manage/promotion/list
*
*/
InstallmentMall.getManagePromotionListV1({
    params: {
        pageIndex: '1', //页码
        pageSize: '10', //每页记录数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据活动商品的自增id获取对应的活动商品    /v1/manage/promotion/promotionProduct/{autoId}
*
*/
InstallmentMall.getManagePromotionPromotionProductAutoIdV1({
    params: {
        autoId: '1', //活动商品组自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动商品组相关的商品列表    /v1/manage/promotion/promotionProductList
*
*/
InstallmentMall.getManagePromotionPromotionProductListV1({
    params: {
        groupId: '1', //活动商品分组ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 活动上移／下移    /v1/manage/promotion/shiftPromotion
*
*/
InstallmentMall.putManagePromotionShiftPromotionV1({
    params: {
        promotionId: '1', //活动的自增id
        shiftType: '1', //变更类型，-1上移，+1下移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 活动上移／下移    /v1/manage/promotion/shiftPromotionProduct
*
*/
InstallmentMall.putManagePromotionShiftPromotionProductV1({
    params: {
        promotionProductId: '1', //活动的自增id
        shiftType: '1', //变更类型，-1上移，+1下移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改活动商品详情（售价、库存）    /v1/manage/promotion/updatePromotionProduct
*
*/
InstallmentMall.postManagePromotionUpdatePromotionProductV1({
    data: {
        dto: {
    "autoId": "(integer) 自增id",
    "discountPeriods": "(string) 免息期数",
    "imageUrl": "(string) 预览图链接",
    "newComersOnly": "(boolean) 新人专享",
    "productId": "(integer) 商品ID",
    "productNo": "(string) 商品编号",
    "quota": "(integer) 每人限购数量",
    "skuList": [
        {
            "attributeMap": {},
            "autoId": "(integer) 自增主键",
            "contractPrice": "(number) 协议价格",
            "imagePath": "(string) 图片路径",
            "is7ToReturn": "(integer) 是否支持7天退货，1：是，0：不支持",
            "marketPrice": "(number) 市场价格",
            "marketPriceGap": "(number) 市场价格调整幅度",
            "marketPriceRate": "(number) 市场价格浮动比例",
            "marketPriceRateType": "(integer) 市场价格类型",
            "operationPrice": "(number) 运营价格",
            "operationPriceGap": "(number) 运营价格调整幅度 ",
            "operationPriceRate": "(number) 运营价格浮动比例 %n",
            "operationPriceRateType": "(integer) 运营价格类型",
            "price": "(number) 单品价格",
            "productId": "(integer) 产品id",
            "skuId": "(integer) skuId",
            "skuNo": "(string) sku编号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用",
            "subImagePath": "(string) 小图路径",
            "subTitle": "(string) 单品描述",
            "thirdPrice": "(number) 第三方价格（京东价）",
            "thirdSkuId": "(string) 第三方skuId",
            "title": "(string) 单品名称",
            "typeCode": "(integer) 供应商编号",
            "winningPrice": "(number) 中奖价"
        }
    ],
    "stockCount": "(integer) 限卖数量",
    "supportCoupon": "(boolean) 是否支持优惠券",
    "tag": "(string) 标签",
    "title": "(string) 标题"
}, //dto
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改活动商品组状态    /v1/manage/promotion/updatePromotionProductGroupStatus
*
*/
InstallmentMall.putManagePromotionUpdatePromotionProductGroupStatusV1({
    params: {
        autoId: '1', //活动商品组自增id
        status: '1', //新的状态 -1 删除 0 禁用 1启用
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改活动商品的状态    /v1/manage/promotion/updatePromotionProductStatus
*
*/
InstallmentMall.putManagePromotionUpdatePromotionProductStatusV1({
    params: {
        promotionProductId: '1', //活动商品自增id
        status: '1', //状态 -1 删除 0 禁用 1启用
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改／增加活动详情    /v1/manage/promotion/upsertPromotion
*
*/
InstallmentMall.postManagePromotionUpsertPromotionV1({
    data: {
        promotionMDTO: {
    "autoId": "(integer) 自增id",
    "backgroundCss": "(string) 背景颜色",
    "backgroundCssEnd": "(string) 背景颜色-渐变色",
    "backgroundImageUrl": "(string) 背景图片",
    "bottomBannerImageUrl": "(string) 底部广告图片链接",
    "bottomBannerLinkType": "(integer) 底部广告跳转类型，1 - 壳内跳转链接， 2 - 壳外跳转链接",
    "bottomBannerLinkUrl": "(string) 底部广告跳转链接",
    "cgData": [
        {
            "groupId": "(integer) 分群id",
            "groupName": "(string) 分群名称"
        }
    ],
    "couponBackgroundCss": "(string) 优惠券颜色",
    "couponBackgroundImageUrl": "(string) 优惠券背景图片",
    "couponTitle": "(string) 优惠券标题",
    "imageUrl": "(string) 活动图片",
    "productGroups": [
        {
            "autoId": "(integer) 自增id",
            "backgroundCss": "(string) 背景颜色",
            "orderIndex": "(integer) 顺序",
            "promotionNo": "(string) 活动编号",
            "title": "(string) 名称",
            "titleImageUrl": "(string) 标题的图片"
        }
    ],
    "promotionNo": "(string) 活动编号",
    "showType": "(integer) 展示类型，1首页展示 2活动页展示",
    "status": "(integer) 活动状态 -1 - 删除 0 - 启用  1 - 禁用",
    "subTitle": "(string) 推荐文案",
    "tag": "(string) 活动标签",
    "title": "(string) 活动标题",
    "topBannerImageUrl": "(string) 活动图片"
}, //promotionMDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动详情    /v1/manage/promotion/{autoId}
*
*/
InstallmentMall.getManagePromotionAutoIdV1({
    params: {
        autoId: '1', //活动自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有对账信息    /v1/manage/reconciliation/file
*
*/
InstallmentMall.getManageReconciliationFileV1({
    params: {
        startDate: '2018-03-01', //开始日期，格式yyyy-MM-dd
        endDate: '2018-04-01', //结束日期，格式yyyy-MM-dd
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取京东对账信息    /v1/manage/reconciliation/jdAccountLogs
*
*/
InstallmentMall.getManageReconciliationJdAccountLogsV1({
    params: {
        page: '0', //页数，从0开始
        limit: '1000', //每页数量
        startDate: '2018-03-01', //开始日期，格式yyyy-MM-dd
        endDate: '2018-04-01', //结束日期，格式yyyy-MM-dd
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取所有对账信息    /v1/manage/reconciliation/orderInfo
*
*/
InstallmentMall.postManageReconciliationOrderInfoV1({
    data: {
        orderNo: [], //orderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单对账信息    /v1/manage/reconciliation/orders
*
*/
InstallmentMall.getManageReconciliationOrdersV1({
    params: {
        type: '0', //状态  1 - 支付成功, 2 - 收货成功, 3 - 退款成功
        page: '0', //页数，从0开始
        limit: '1000', //每页数量
        startDate: '2018-03-01', //开始日期，格式yyyy-MM-dd
        endDate: '2018-04-01', //结束日期，格式yyyy-MM-dd
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 计算订单价格    /v1/order/calculatePrice/{userId}
*
*/
InstallmentMall.getOrderCalculatePriceUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072446623', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 检查订单是否符合支付条件    /v1/order/check/{userId}
*
*/
InstallmentMall.getOrderCheckUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据类别统计订单数量    /v1/order/count/{userId}
*
*/
InstallmentMall.getOrderCountUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderCategory: '0', //订单类别(0:待付款,1:待收货,2:已完成,3:待发货,4:退款/售后)
    },
    headers: {
        fromType: '10', //来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单VO    /v1/order/get/{userId}
*
*/
InstallmentMall.getOrderGetUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单    /v1/order/getOrder/{userId}
*
*/
InstallmentMall.getOrderGetOrderUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取成功支付的订单数，并剔除历史首笔    /v1/order/getPaidNumExceptFirst/{userId}
*
*/
InstallmentMall.getOrderGetPaidNumExceptFirstUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        beginTimestamp: 'undefined', //起始时间戳
        endTimestamp: 'undefined', //结束时间戳
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取预订单    /v1/order/getPreOrder/{userId}
*
*/
InstallmentMall.getOrderGetPreOrderUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072446623', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取简要订单    /v1/order/getSimple/{userId}
*
*/
InstallmentMall.getOrderGetSimpleUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单VO    /v1/order/getV2/{userId}
*
*/
InstallmentMall.getOrderGetV2UserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交发票抬头    /v1/order/invoiceTitle/submit
*
*/
InstallmentMall.postOrderInvoiceTitleSubmitV1({
    data: {
        invoiceTitleSubmitDTO: {
    "invoiceCompanyName": "(string) 单位名称",
    "invoiceCompanyTaxCode": "(string) 单位税号",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "userId": "(integer) 51用户ID"
}, //发票抬头提交请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取发票抬头    /v1/order/invoiceTitle/{userId}
*
*/
InstallmentMall.getOrderInvoiceTitleUserIdV1({
    params: {
        userId: '150001810', //51用户ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单概要列表    /v1/order/list/{userId}
*
*/
InstallmentMall.getOrderListUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderCategory: '0', //订单类别(0:待付款,1:待收货,2:已完成,3:待发货,4:退款/售后)
        pageIndex: '1', //页码
        pageSize: '10', //每页记录数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单    /v1/order/listOrderForAntifraud
*
*/
InstallmentMall.postOrderListOrderForAntifraudV1({
    data: {
        orderAntifraudDTO: {
    "fullAddress": "(string) 完整地址",
    "orderNo": "(string) 订单编号",
    "orderTime": "(string) 下单时间",
    "pageIndex": "(integer) 页码",
    "pageSize": "(integer) 每页记录数",
    "receiverPhone": "(string) 收货人手机号"
}, //参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 用来接收oto订单支付信息    /v1/order/otosaas/pay/info
*
*/
InstallmentMall.postOrderOtosaasPayInfoV1({
    data: {
        otoPayInfoDTO: {
    "amount": "(string) 订单金额，单位：分",
    "expireTime": "(string) 订单失效时间，格式yyyyMMddHHmmss，不传表示无失效时间",
    "notifyUrl": "(string) 支付结果异步回调地址",
    "orderId": "(string) OTO SaaS商品订单号",
    "orderName": "(string) OTO SaaS商品订单号",
    "payOrderId": "(string) OTO SaaS支付订单号",
    "payResultUrl": "(string) 支付完成后跳转页面地址，注：若服务场景外进入，需在url中带入联合登录参数",
    "sign": "(string) 参数签名（OTO SaaS用生成的私钥签名，合作方用OTO SaaS提供的公钥验签）"
}, //otoPayInfoDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 预提交订单    /v1/order/preSubmit/{userId}
*
*/
InstallmentMall.postOrderPreSubmitUserIdV1({
    params: {
        userId: '150001810', //51用户ID
    },
    data: {
        orderPreSubmitDTO: {
    "promotionType": "(integer) 促销类型(0:普通,1:秒杀,2:活动专区)",
    "receiverAddressId": "(integer) 收货地址ID",
    "skuList": [
        {
            "productNo": "(string) 商品运营编号",
            "skuAttributes": "(string) 所选SKU属性集合",
            "skuCount": "(integer) SKU数量",
            "skuNo": "(string) SKU编号"
        }
    ]
}, //订单预提交请求
    },
    headers: {
        fromType: '10', //来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询账户余额    /v1/order/queryBalance/{typeCode}
*
*/
InstallmentMall.getOrderQueryBalanceTypeCodeV1({
    params: {
        typeCode: '10', //typeCode
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 保存离开收银台的理由    /v1/order/saveExitPayReason
*
*/
InstallmentMall.postOrderSaveExitPayReasonV1({
    data: {
        exitPayReasonDTO: {
    "exitPayReason": "(string) undefined",
    "exitPayReasonCode": "(integer) undefined",
    "orderNo": "(string) undefined",
    "userId": "(integer) undefined"
}, //离开收银台的理由
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交订单    /v1/order/submit/{userId}
*
*/
InstallmentMall.postOrderSubmitUserIdV1({
    params: {
        userId: '150001810', //51用户ID
    },
    data: {
        orderSubmitDTO: {
    "couponId": "(integer) 优惠券号",
    "couponType": "(integer) 优惠券类型（0:无可用优惠券,1:新人专享(废除),2:票券系统优惠券）",
    "extInfo": "(string) 支付信息",
    "fullAddress": "(string) 完整地址",
    "invoiceCompanyName": "(string) 单位名称",
    "invoiceCompanyTaxCode": "(string) 单位税号",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer) 发票类型（1:电子普通发票）",
    "preOrderNo": "(string) 预订单编号",
    "receiverAddressId": "(integer) 收货地址ID"
}, //订单提交请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单物流信息    /v1/order/track/{userId}
*
*/
InstallmentMall.getOrderTrackUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提供给oto查询订单详情使用    /v1/otosaas/order/info
*
*/
InstallmentMall.getOtosaasOrderInfoV1({
    params: {
        orderId: 'undefined', //oto订单号
        sign: 'undefined', //签名
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 退款订单信息接口    /v1/otosaas/order/refund
*
*/
InstallmentMall.postOtosaasOrderRefundV1({
    data: {
        otoRefundInfoDTO: {
    "notifyUrl": "(string) 退款结果异步回调地址，异步回调退款结果才需传入",
    "orderId": "(string) OTO SaaS商品订单号",
    "refundAmount": "(integer) 退款金额，单位：分",
    "refundOrderId": "(string) OTO SaaS退款订单号",
    "sign": "(string) 参数签名（（OTO SaaS用生成的私钥签名，合作方用OTO SaaS提供的公钥验签）",
    "timestamp": "(integer) 时间戳，毫秒"
}, //otoRefundInfoDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* oto订单状态变更回调通知接口    /v1/otosaas/order/status
*
*/
InstallmentMall.postOtosaasOrderStatusV1({
    data: {
        otoOrderStatusDTO: {
    "displayStatus": "(string) 订单状态字面值",
    "orderId": "(string) 订单ID",
    "price": "(string) 订单支付价格，对于那些先服务后支付的订单，会在后续计费完成后推送支付金额",
    "sign": "(string) 签名参数",
    "status": "(integer) 订单状态",
    "timestamp": "(integer) 签名时间戳",
    "userId": "(string) 用户ID"
}, //otoOrderStatusDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动列表(分页)，页号从0开始    /v1/promotionProduct/listByPromotionNo
*
*/
InstallmentMall.getPromotionProductListByPromotionNoV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
        promotionNo: 'undefined', //活动编号
        orderIndex: '1', //group的添加顺序
        pageIndex: '0', //页码
        pageSize: '10', //每页记录数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 实名查询及注册，若用户实名信息已存在，则返回是否匹配，若用户实名信息不存在，则尝试注册    /v1/realName/checkAndRegister/{userId}/
*
*/
InstallmentMall.postRealNameCheckAndRegisterUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        trueName: 'undefined', //姓名
        idCard: 'undefined', //身份证号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 实名查询及注册，若用户实名信息已存在，则返回是否匹配，若用户实名信息不存在，则尝试注册    /v1/realName/checkAndRegisterEx/{userId}/
*
*/
InstallmentMall.postRealNameCheckAndRegisterExUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        trueName: 'undefined', //姓名
        idCard: 'undefined', //身份证号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据Userid获取实名信息    /v1/realName/{userId}
*
*/
InstallmentMall.getRealNameUserIdV1({
    params: {
        userId: '150001810', //51用户ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 底部广告列表    /v1/salesProduct/bottomBanners
*
*/
InstallmentMall.getSalesProductBottomBannersV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取特卖商品    /v1/salesProduct/discountProducts
*
*/
InstallmentMall.getSalesProductDiscountProductsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 猜你喜欢商品列表    /v1/salesProduct/favoriteProducts
*
*/
InstallmentMall.getSalesProductFavoriteProductsV1({
    params: {
        userId: '180000029', //用户id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 导购banner列表    /v1/salesProduct/guideBanners
*
*/
InstallmentMall.getSalesProductGuideBannersV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门商品列表    /v1/salesProduct/hotProducts
*
*/
InstallmentMall.getSalesProductHotProductsV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品以及Banner    /v1/salesProduct/indexInfo
*
*/
InstallmentMall.getSalesProductIndexInfoV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品、精选专题以及Banner    /v1/salesProduct/indexInfoV2
*
*/
InstallmentMall.getSalesProductIndexInfoV2V1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品、精选专题以及Banner    /v1/salesProduct/indexInfoV3
*
*/
InstallmentMall.getSalesProductIndexInfoV3V1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取首页秒杀商品    /v1/salesProduct/indexPage/secKillProducts
*
*/
InstallmentMall.getSalesProductIndexPageSecKillProductsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 中部广告列表    /v1/salesProduct/middleBanners
*
*/
InstallmentMall.getSalesProductMiddleBannersV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 功能banner列表    /v1/salesProduct/otoBanners
*
*/
InstallmentMall.getSalesProductOtoBannersV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取oto saas 产品入口    /v1/salesProduct/otosaas/enter/list
*
*/
InstallmentMall.getSalesProductOtosaasEnterListV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情    /v1/salesProduct/productDetail
*
*/
InstallmentMall.getSalesProductProductDetailV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情    /v1/salesProduct/productDetailV2
*
*/
InstallmentMall.getSalesProductProductDetailV2V1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情    /v1/salesProduct/productDetailV3
*
*/
InstallmentMall.getSalesProductProductDetailV3V1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动详情    /v1/salesProduct/promotion/{promotionNo}
*
*/
InstallmentMall.getSalesProductPromotionPromotionNoV1({
    params: {
        promotionNo: '30', //专题编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取精选专题    /v1/salesProduct/promotions
*
*/
InstallmentMall.getSalesProductPromotionsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取活动页秒杀商品列表    /v1/salesProduct/secKillProducts
*
*/
InstallmentMall.getSalesProductSecKillProductsV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 顶部广告列表    /v1/salesProduct/topBanners
*
*/
InstallmentMall.getSalesProductTopBannersV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券分享配置信息    /v1/share/couponConfig
*
*/
InstallmentMall.getShareCouponConfigV1({
    params: {
        shareUserId: '180000029', //分享用户51ID
        orderNo: '111072548186', //订单编号
        fromType: '10', //渠道商城编码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 好友优惠券领取信息    /v1/share/couponReceivedList
*
*/
InstallmentMall.getShareCouponReceivedListV1({
    params: {
        shareSn: 'undefined', //分享标识
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 猜你喜欢商品展示列表    /v1/share/favoriteProducts
*
*/
InstallmentMall.getShareFavoriteProductsV1({
    params: {
        userId: '180000029', //用户id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新人专区商品展示列表    /v1/share/newUserProducts
*
*/
InstallmentMall.getShareNewUserProductsV1({
    params: {
        userId: '180000029', //用户id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取优惠券    /v1/share/receive/{receivedUserId}
*
*/
InstallmentMall.putShareReceiveReceivedUserIdV1({
    params: {
        receivedUserId: '150001810', //51领券用户ID
        shareSn: 'undefined', //分享标识
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 天天秒杀商品展示列表    /v1/share/secKillProducts
*
*/
InstallmentMall.getShareSecKillProductsV1({
    params: {
        userId: '180000029', //用户id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 分享链接商品展示列表    /v1/share/shareProducts
*
*/
InstallmentMall.getShareShareProductsV1({
    params: {
        userId: '180000029', //用户id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 个人优惠券领取展示    /v1/share/userCoupon
*
*/
InstallmentMall.getShareUserCouponV1({
    params: {
        receivedUserId: '180000029', //51领券用户ID
        shareSn: 'undefined', //分享标识
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 京东订单对账数据查询    /v1/tool/checkOrder
*
*/
InstallmentMall.getToolCheckOrderV1({
    params: {
        date: '2018-03-20', //日期yyyy-MM-dd
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* properties动态参数获取测试    /v1/tool/getParamValue
*
*/
InstallmentMall.getToolGetParamValueV1({
    params: {
        paramKey: 'hang.begin.time', //paramKey
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* invoiceCheckTask    /v1/tool/invoiceCheckTask
*
*/
InstallmentMall.putToolInvoiceCheckTaskV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 通过文件更新发票链接    /v1/tool/invoiceUpdate
*
*/
InstallmentMall.getToolInvoiceUpdateV1({
    params: {
        fileName: 'undefined', //文件名，文件路径在配置文件中
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 手动修复异常订单(内部)    /v1/tool/order/fixAbnormal/{userId}
*
*/
InstallmentMall.putToolOrderFixAbnormalUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单异常信息(内部)    /v1/tool/order/getAbnormal/{userId}
*
*/
InstallmentMall.getToolOrderGetAbnormalUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: '111072444619', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 订单支付结果通知(内部)    /v1/tool/order/paymentNotify
*
*/
InstallmentMall.postToolOrderPaymentNotifyV1({
    data: {
        statusNotifyDTO: {
    "creatTime": "(integer) undefined",
    "extInfo": "(string) undefined",
    "notifyType": "(string) undefined",
    "orderDetailNo": "(string) undefined",
    "orderNo": "(string) undefined",
    "payType": "(integer) undefined",
    "status": "(string) undefined",
    "tradeNo": "(string) undefined",
    "userId": "(integer) undefined"
}, //支付结果
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* updateRefundStatus    /v1/tool/order/updateRefundStatus/{userId}
*
*/
InstallmentMall.putToolOrderUpdateRefundStatusUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        orderNo: 'undefined', //订单号
        newRefundStatus: '0', //新状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* orderExpireCheckTask    /v1/tool/orderExpireCheckTask
*
*/
InstallmentMall.putToolOrderExpireCheckTaskV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* pushTest    /v1/tool/pushTest
*
*/
InstallmentMall.getToolPushTestV1({
    params: {
        userId: '150500949', //userId
        batchNo: 'batchNo123', //batchNo
        clearRedisBatchNo: 'batchNo123', //clearRedisBatchNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* pushTestEx    /v1/tool/pushTestEx
*
*/
InstallmentMall.getToolPushTestExV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询京东余额    /v1/tool/queryJdBalance
*
*/
InstallmentMall.getToolQueryJdBalanceV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除缓存    /v1/tool/redisKey
*
*/
InstallmentMall.deleteToolRedisKeyV1({
    params: {
        redisKey: 'undefined', //缓存键
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取缓存值    /v1/tool/redisValue
*
*/
InstallmentMall.getToolRedisValueV1({
    params: {
        redisKey: 'undefined', //缓存键
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 同步京东商品池数据    /v1/tool/syncSku
*
*/
InstallmentMall.getToolSyncSkuV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* testChinese    /v1/tool/testChinese
*
*/
InstallmentMall.getToolTestChineseV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* thirdPartyMessageHandleTask    /v1/tool/thirdPartyMessageHandleTask
*
*/
InstallmentMall.putToolThirdPartyMessageHandleTaskV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 重置京东AccessToken    /v1/tool/token
*
*/
InstallmentMall.putToolTokenV1({
    params: {
        tokenType: 'access', //token类型，access或者refresh
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传图片    /v1/tool/uploadImage
*
*/
InstallmentMall.postToolUploadImageV1({
    data: {
        base64Image: '(string) undefined', //图片的base64转码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 是否为新用户    /v1/user/isNewUser/{userId}
*
*/
InstallmentMall.getUserIsNewUserUserIdV1({
    params: {
        userId: '150001810', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加用户收货地址    /v1/user/receiverAddress/add/{userId}
*
*/
InstallmentMall.postUserReceiverAddressAddUserIdV1({
    params: {
        userId: '150001810', //51用户ID
    },
    data: {
        receiverAddressDTO: {
    "autoId": "(integer) 自增主键",
    "cityCode": "(string) 城市编码",
    "cityName": "(string) 城市名称",
    "countyCode": "(string) 区县编码",
    "countyName": "(string) 区县名称",
    "detailAddress": "(string) 详细地址",
    "isDefault": "(boolean) 是否为默认地址",
    "phone": "(string) 收货人手机号",
    "provinceCode": "(string) 省份编码",
    "provinceName": "(string) 省份名称",
    "receiver": "(string) 收货人姓名",
    "status": "(integer) 状态",
    "townCode": "(string) 乡镇编码",
    "townName": "(string) 乡镇名称",
    "typeCode": "(integer) 地区编码提供方类型(10:京东)",
    "userId": "(integer) 51用户ID"
}, //收货地址
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取一级地址    /v1/user/receiverAddress/allProvince
*
*/
InstallmentMall.getUserReceiverAddressAllProvinceV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取二级地址    /v1/user/receiverAddress/citiesByProvinceId/{provinceId}
*
*/
InstallmentMall.getUserReceiverAddressCitiesByProvinceIdProvinceIdV1({
    params: {
        provinceId: '15', //provinceId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取三级地址    /v1/user/receiverAddress/countiesByCityId/{cityId}
*
*/
InstallmentMall.getUserReceiverAddressCountiesByCityIdCityIdV1({
    params: {
        cityId: '1213', //cityId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除用户收货地址    /v1/user/receiverAddress/delete/{userId}
*
*/
InstallmentMall.deleteUserReceiverAddressDeleteUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        autoId: '1', //收货地址ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取收货地址    /v1/user/receiverAddress/get/{userId}
*
*/
InstallmentMall.getUserReceiverAddressGetUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        autoId: '1', //收货地址ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户收货地址列表    /v1/user/receiverAddress/list/{userId}
*
*/
InstallmentMall.getUserReceiverAddressListUserIdV1({
    params: {
        userId: '150001810', //51用户ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 设置默认用户收货地址    /v1/user/receiverAddress/setDefault/{userId}
*
*/
InstallmentMall.putUserReceiverAddressSetDefaultUserIdV1({
    params: {
        userId: '150001810', //51用户ID
        autoId: '1', //收货地址ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取四级地址    /v1/user/receiverAddress/townsByCountyId/{countryId}
*
*/
InstallmentMall.getUserReceiverAddressTownsByCountyIdCountryIdV1({
    params: {
        countryId: '3411', //countryId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改用户收货地址    /v1/user/receiverAddress/update/{userId}
*
*/
InstallmentMall.putUserReceiverAddressUpdateUserIdV1({
    params: {
        userId: '150001810', //51用户ID
    },
    data: {
        receiverAddressDTO: {
    "autoId": "(integer) 自增主键",
    "cityCode": "(string) 城市编码",
    "cityName": "(string) 城市名称",
    "countyCode": "(string) 区县编码",
    "countyName": "(string) 区县名称",
    "detailAddress": "(string) 详细地址",
    "isDefault": "(boolean) 是否为默认地址",
    "phone": "(string) 收货人手机号",
    "provinceCode": "(string) 省份编码",
    "provinceName": "(string) 省份名称",
    "receiver": "(string) 收货人姓名",
    "status": "(integer) 状态",
    "townCode": "(string) 乡镇编码",
    "townName": "(string) 乡镇名称",
    "typeCode": "(integer) 地区编码提供方类型(10:京东)",
    "userId": "(integer) 51用户ID"
}, //收货地址
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增优惠券版块关联配置    /v2/manage/coupon/sectionConfig/add
*
*/
InstallmentMall.postManageCouponSectionConfigAddV2({
    data: {
        couponSectionConfigDTO: {
    "couponBatchCode": "(string) 优惠券批次号",
    "couponName": "(string) 优惠券名称",
    "fromType": "(integer) 投放来源",
    "orderIndex": "(integer) 顺序",
    "receiveBeginTime": "(string) 可领取起始时间",
    "receiveEndTime": "(string) 可领取结束时间",
    "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)",
    "status": "(integer) 状态"
}, //优惠券版块关联配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券版块基础配置    /v2/manage/coupon/sectionConfig/get/{couponBatchCode}
*
*/
InstallmentMall.getManageCouponSectionConfigGetCouponBatchCodeV2({
    params: {
        couponBatchCode: 'undefined', //优惠券批次号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券版块关联配置列表(分页)    /v2/manage/coupon/sectionConfig/list
*
*/
InstallmentMall.getManageCouponSectionConfigListV2({
    params: {
        sectionType: '3', //版块类型(0:全场通用,3:活动专区,4:特定商品)
        pageIndex: '1', //页码(1开始)
        pageSize: '10', //每页记录数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新增优惠券版块关联商品/专区配置    /v2/manage/coupon/sectionConfig/relation/add
*
*/
InstallmentMall.postManageCouponSectionConfigRelationAddV2({
    data: {
        CouponSectionConfigRelationDTO: {
    "couponBatchCode": "(string) 优惠券批次号",
    "fromType": "(integer) 投放来源",
    "receiveBeginTime": "(string) 可领取起始时间",
    "receiveEndTime": "(string) 可领取结束时间",
    "sectionNos": [],
    "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)",
    "status": "(integer) 状态"
}, //优惠券版块关联配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券版块关联商品/专区配置    /v2/manage/coupon/sectionConfig/relation/get/{couponBatchCode}
*
*/
InstallmentMall.getManageCouponSectionConfigRelationGetCouponBatchCodeV2({
    params: {
        couponBatchCode: 'undefined', //优惠券批次号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 移动顺序    /v2/manage/coupon/sectionConfig/shift/coupon
*
*/
InstallmentMall.putManageCouponSectionConfigShiftCouponV2({
    params: {
        sectionType: 'undefined', //版块编号
        couponBatchCode: 'undefined', //优惠券批次号
        shiftType: '1', //1 下移, -1 上移
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改优惠券版块基础配置    /v2/manage/coupon/sectionConfig/update
*
*/
InstallmentMall.putManageCouponSectionConfigUpdateV2({
    data: {
        couponSectionConfigDTO: {
    "couponBatchCode": "(string) 优惠券批次号",
    "couponName": "(string) 优惠券名称",
    "fromType": "(integer) 投放来源",
    "orderIndex": "(integer) 顺序",
    "receiveBeginTime": "(string) 可领取起始时间",
    "receiveEndTime": "(string) 可领取结束时间",
    "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)",
    "status": "(integer) 状态"
}, //优惠券版块关联配置
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 优惠券的禁用启用    /v2/manage/coupon/sectionConfig/updateStatus/coupon
*
*/
InstallmentMall.putManageCouponSectionConfigUpdateStatusCouponV2({
    params: {
        sectionType: 'undefined', //版块编号
        couponBatchCode: 'undefined', //优惠券批次号
        status: 'undefined', //状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 优惠券关联单个活动/商品的禁用启用    /v2/manage/coupon/sectionConfig/updateStatus/{autoId}
*
*/
InstallmentMall.putManageCouponSectionConfigUpdateStatusAutoIdV2({
    params: {
        autoId: 'undefined', //主键ID
        status: 'undefined', //状态
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券模板信息    /v2/manage/coupon/template
*
*/
InstallmentMall.getManageCouponTemplateV2({
    params: {
        couponBatchCode: 'undefined', //优惠券批次号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从热门产品列表中添加    /v2/manage/operation/addHotProductFromProductId
*
*/
InstallmentMall.postManageOperationAddHotProductFromProductIdV2({
    data: {
        productIdList: [], //productIdList
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 从产品列表中添加    /v2/manage/operation/addSecKillProductFromProductId
*
*/
InstallmentMall.postManageOperationAddSecKillProductFromProductIdV2({
    params: {
        configId: '1', //秒杀配置id
    },
    data: {
        productIdList: [], //productIdList
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门商品详情    /v2/manage/operation/hotProduct/{autoId}
*
*/
InstallmentMall.getManageOperationHotProductAutoIdV2({
    params: {
        autoId: '1', //热门商品自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取热门商品列表    /v2/manage/operation/listHotProducts
*
*/
InstallmentMall.getManageOperationListHotProductsV2({
    params: {
        page: '1', //页数，从0开始
        limit: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品列表    /v2/manage/operation/listSecKillProducts
*
*/
InstallmentMall.getManageOperationListSecKillProductsV2({
    params: {
        page: '0', //页数，从0开始
        limit: '20', //每页数量
        configId: '1', //秒杀配置id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品详情    /v2/manage/operation/secKillProduct/{autoId}
*
*/
InstallmentMall.getManageOperationSecKillProductAutoIdV2({
    params: {
        autoId: '1', //活动商品组自增id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新热门商品    /v2/manage/operation/updateHotProducts
*
*/
InstallmentMall.putManageOperationUpdateHotProductsV2({
    data: {
        dto: {
    "autoId": "(integer) 自增主键",
    "discountPeriods": "(string) 100%免息期数，单选 3，6，9，12",
    "imagePath": "(string) 图片路径",
    "newComersOnly": "(boolean) 是否新人专享",
    "productId": "(integer) undefined",
    "productNo": "(string) 商品编号",
    "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
    "skuList": [
        {
            "attributeMap": {},
            "autoId": "(integer) 自增主键",
            "contractPrice": "(number) 协议价格",
            "imagePath": "(string) 图片路径",
            "is7ToReturn": "(integer) 是否支持7天退货，1：是，0：不支持",
            "marketPrice": "(number) 市场价格",
            "marketPriceGap": "(number) 市场价格调整幅度",
            "marketPriceRate": "(number) 市场价格浮动比例",
            "marketPriceRateType": "(integer) 市场价格类型",
            "operationPrice": "(number) 运营价格",
            "operationPriceGap": "(number) 运营价格调整幅度 ",
            "operationPriceRate": "(number) 运营价格浮动比例 %n",
            "operationPriceRateType": "(integer) 运营价格类型",
            "price": "(number) 单品价格",
            "productId": "(integer) 产品id",
            "skuId": "(integer) skuId",
            "skuNo": "(string) sku编号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用",
            "subImagePath": "(string) 小图路径",
            "subTitle": "(string) 单品描述",
            "thirdPrice": "(number) 第三方价格（京东价）",
            "thirdSkuId": "(string) 第三方skuId",
            "title": "(string) 单品名称",
            "typeCode": "(integer) 供应商编号",
            "winningPrice": "(number) 中奖价"
        }
    ],
    "subTitle": "(string) 副标题",
    "supportCoupon": "(boolean) 是否支持用券",
    "tag": "(string) 标签",
    "title": "(string) 标题"
}, //dto
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 更新秒杀产品配置    /v2/manage/operation/updateSecKillProduct
*
*/
InstallmentMall.putManageOperationUpdateSecKillProductV2({
    data: {
        dto: {
    "autoId": "(integer) 自增id",
    "detailLink": "(string) 详情链接",
    "discountPeriods": "(string) 免息期数，可以为空",
    "imagePath": "(string) 图片路径",
    "newComersOnly": "(boolean) 是否新人专享",
    "orderIndex": "(integer) 排序",
    "productId": "(integer) 关联商品ID",
    "productNo": "(string) 商品运营编号",
    "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
    "secKillConfigId": "(integer) 关联配置ID",
    "skuList": [
        {
            "attributeMap": {},
            "autoId": "(integer) 自增主键",
            "contractPrice": "(number) 协议价格",
            "imagePath": "(string) 图片路径",
            "is7ToReturn": "(integer) 是否支持7天退货，1：是，0：不支持",
            "marketPrice": "(number) 市场价格",
            "marketPriceGap": "(number) 市场价格调整幅度",
            "marketPriceRate": "(number) 市场价格浮动比例",
            "marketPriceRateType": "(integer) 市场价格类型",
            "operationPrice": "(number) 运营价格",
            "operationPriceGap": "(number) 运营价格调整幅度 ",
            "operationPriceRate": "(number) 运营价格浮动比例 %n",
            "operationPriceRateType": "(integer) 运营价格类型",
            "price": "(number) 单品价格",
            "productId": "(integer) 产品id",
            "skuId": "(integer) skuId",
            "skuNo": "(string) sku编号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用",
            "subImagePath": "(string) 小图路径",
            "subTitle": "(string) 单品描述",
            "thirdPrice": "(number) 第三方价格（京东价）",
            "thirdSkuId": "(string) 第三方skuId",
            "title": "(string) 单品名称",
            "typeCode": "(integer) 供应商编号",
            "winningPrice": "(number) 中奖价"
        }
    ],
    "stockCount": "(integer) 库存数量",
    "supportCoupon": "(boolean) 是否支持优惠券",
    "tag": "(string) 标签",
    "title": "(string) 标题"
}, //dto
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 展示支付小黄条（首次绑卡用户）    /v2/order/showRepayfundNotice/{userId}
*
*/
InstallmentMall.getOrderShowRepayfundNoticeUserIdV2({
    params: {
        userId: '150001810', //51用户ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交订单    /v2/order/submit/{userId}
*
*/
InstallmentMall.postOrderSubmitUserIdV2({
    params: {
        userId: '150001810', //51用户ID
        platform: 'undefined', //h5/app
    },
    data: {
        orderSubmitDTO: {
    "couponId": "(integer) 优惠券号",
    "couponType": "(integer) 优惠券类型（0:无可用优惠券,1:新人专享(废除),2:票券系统优惠券）",
    "extInfo": "(string) 支付信息",
    "fullAddress": "(string) 完整地址",
    "invoiceCompanyName": "(string) 单位名称",
    "invoiceCompanyTaxCode": "(string) 单位税号",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer) 发票类型（1:电子普通发票）",
    "preOrderNo": "(string) 预订单编号",
    "receiverAddressId": "(integer) 收货地址ID"
}, //订单提交请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取优惠券信息    /v2/user/coupon/get/{userId}
*
*/
InstallmentMall.getUserCouponGetUserIdV2({
    params: {
        userId: '150001810', //51用户ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取可用优惠券批次号列表(供票券系统调用)    /v2/user/coupon/listAvailableCoupon
*
*/
InstallmentMall.getUserCouponListAvailableCouponV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取优惠券    /v2/user/coupon/multipleReceive/{userId}
*
*/
InstallmentMall.putUserCouponMultipleReceiveUserIdV2({
    params: {
        userId: '150001810', //51用户ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取优惠券    /v2/user/coupon/receive/{userId}
*
*/
InstallmentMall.putUserCouponReceiveUserIdV2({
    params: {
        userId: '150001810', //51用户ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取页面获取优惠券列表    /v3/user/coupon/listForReceive/{userId}
*
*/
InstallmentMall.getUserCouponListForReceiveUserIdV3({
    params: {
        userId: '150001810', //userId
        sectionType: '3', //版块类型(0:全场通用,3:活动专区)
        fromType: '10', //来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取可用优惠券批次号列表(供票券系统调用)    /v3/user/coupon/product/listAvailableCoupon
*
*/
InstallmentMall.getUserCouponProductListAvailableCouponV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
