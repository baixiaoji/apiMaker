import InstallmentMall from './api/installment-mall/api';


/**
 * 获取商品详情(供运营活动组抽奖活动调用)    /v1/activity/front/products
 *
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { Object   }      productNos                    商品编号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postActivityFrontProductsV1({
    params: {
        payChannelId: '1',
    },
    data: {
        productNos: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "activeTime": "(integer) 开始时间",
        "activityName": "(string) 活动名称",
        "expireTime": "(integer) 结束时间",
        "product": {
            "imageUrl": "(string) 商品图片",
            "installmentPrice": "(number) 最低分期价格",
            "price": "(number) 商品价格",
            "productNo": "(string) 商品编号",
            "subTitle": "(string) 副标题（商品描述）",
            "title": "(string) 主标题（商品名称）"
        },
        "systemTime": "(integer) 系统时间"
    }
]
*/



/**
 * 获取活动集合(供运营活动组抽奖活动调用)    /v1/activity/front/promotions
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getActivityFrontPromotionsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "drawActivitys": [
        {
            "activeTime": "(integer) 开始时间",
            "activityName": "(string) 活动名称",
            "expireTime": "(integer) 结束时间",
            "product": {
                "imageUrl": "(string) 商品图片",
                "installmentPrice": "(number) 最低分期价格",
                "price": "(number) 商品价格",
                "productNo": "(string) 商品编号",
                "subTitle": "(string) 副标题（商品描述）",
                "title": "(string) 主标题（商品名称）"
            },
            "systemTime": "(integer) 系统时间"
        }
    ],
    "nextActivitys": [
        {
            "activeTime": "(integer) 开始时间",
            "activityName": "(string) 活动名称",
            "expireTime": "(integer) 结束时间",
            "product": {
                "imageUrl": "(string) 商品图片",
                "installmentPrice": "(number) 最低分期价格",
                "price": "(number) 商品价格",
                "productNo": "(string) 商品编号",
                "subTitle": "(string) 副标题（商品描述）",
                "title": "(string) 主标题（商品名称）"
            },
            "systemTime": "(integer) 系统时间"
        }
    ],
    "nowActivitys": [
        {
            "activeTime": "(integer) 开始时间",
            "activityName": "(string) 活动名称",
            "expireTime": "(integer) 结束时间",
            "product": {
                "imageUrl": "(string) 商品图片",
                "installmentPrice": "(number) 最低分期价格",
                "price": "(number) 商品价格",
                "productNo": "(string) 商品编号",
                "subTitle": "(string) 副标题（商品描述）",
                "title": "(string) 主标题（商品名称）"
            },
            "systemTime": "(integer) 系统时间"
        }
    ]
}
*/



/**
 * 预提交订单    /v1/activity/preSubmit/{userId}
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Object   }      orderPreSubmitDTO             订单预提交请求
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postActivityPreSubmitUserIdV1({
    params: {
        fromType: '10',
        userId: '150001810',
    },
    data: {
        promotionType: '(integer) 促销类型(0:普通,1:秒杀,2:活动专区)',
        receiverAddressId: '(integer) 收货地址ID',
        skuList: [{
        	productNo: '(string) 商品运营编号',
        	skuAttributes: '(string) 所选SKU属性集合',
        	skuCount: '(integer) SKU数量',
        	skuNo: '(string) SKU编号',
        }],
        status: '(integer) 活动状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 获取商品详情    /v1/activity/productDetailV3
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      receiverAddrId                用户收获地址id
 * @params      { String   }      productNo                     商品编号
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getActivityProductDetailV3V1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        receiverAddrId: '-1',
        productNo: '123456H11',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(integer) 开始时间",
    "bannerImages": [],
    "content": "(string) 商品详情",
    "description": "(string) 商品描述",
    "expireTime": "(integer) 结束时间",
    "installmentPrice": "(number) 分期价格，根据最低价格的单品进行分期计算结果",
    "name": "(string) 商品名称",
    "price": "(number) 单品价格，拥有多个单品的情况下，选取单价最低的",
    "promotionType": "(integer) 商品的推广类型",
    "receiverAddrCode": "(string) 用户地址四级编码",
    "receiverAddrId": "(integer) 用户地址信息id，若用户未选地址信息，则为-1",
    "receiverAddrStr": "(string) 用户地址信息详情，若是根据四级编码返回的，则是地址描述",
    "skuInfos": [
        {
            "afterSaleRemark": "(string) 单品售后描述",
            "imagePath": "(string) 单品大图",
            "installmentPrice": "(number) 单品分期价格",
            "price": "(number) 单品价格",
            "productNo": "(string) 单品对应的产品编号",
            "skuNo": "(string) 单品编号",
            "skuProps": {},
            "stockCount": "(integer) 库存数量",
            "subImagePath": "(string) 单品小图",
            "subTitle": "(string) 单品描述",
            "title": "(string) 单品名称"
        }
    ],
    "supportCoupon": "(boolean) 是否支持优惠券",
    "systemTime": "(integer) 系统当前时间",
    "typeCode": "(integer) 商品供应商",
    "unavailable": "(boolean) 目前是否不可购买"
}
*/



/**
 * 获取推荐商品    /v1/activity/recommend
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getActivityRecommendV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "allStockCount": "(integer) 全部库存",
        "alreadyBuy": "(integer) 已抢人数-目前已弃用",
        "imageUrl": "(string) 商品图片",
        "installmentPrice": "(number) 最低分期价格",
        "marketPrice": "(number) 市场价",
        "price": "(number) 商品价格",
        "process": "(number) 进度",
        "productNo": "(string) 商品编号",
        "stockCount": "(integer) 剩余库存",
        "subTitle": "(string) 副标题（商品描述）",
        "tag": "(string) 标签",
        "title": "(string) 主标题（商品名称）"
    }
]
*/



/**
 * 申请售后页面    /v1/afterSale/applyPage
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      orderNo                       订单编号
 * @params      { String   }      orderDetailNo                 订单详情编号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getAfterSaleApplyPageV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
        orderDetailNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "afterSaleApplyAvailableDTO": {
        "supportAfterSaleTypes": [],
        "supportPickTypes": []
    },
    "order": {
        "cityCode": "(string) 城市编码",
        "countyCode": "(string) 区县编码",
        "couponId": "(integer) 优惠券ID",
        "couponName": "(string) 优惠券名称",
        "couponPrice": "(number) 优惠券抵扣",
        "couponType": "(integer) 优惠券类型（0:无优惠券,1:新人专享(废除),2:票券系统优惠券）",
        "deliverySupplierType": "(integer) 物流提供方类型",
        "detailAddress": "(string) 详细地址",
        "freight": "(number) 运费",
        "fromType": "(integer) 投放来源",
        "fullAddress": "(string) 完整地址",
        "invoiceApplySerialNo": "(string) 发票申请流水号",
        "invoiceCompanyName": "(string) 单位名称",
        "invoiceCompanyTaxCode": "(string) 单位税号",
        "invoiceStatus": "(integer) 发票状态",
        "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
        "invoiceType": "(integer) 发票类型（1:电子普通发票）",
        "invoiceUrl": "(string) 电子发票链接",
        "orderNo": "(string) 订单编号",
        "orderPrice": "(number) 订单价格( = 商品价格 - 优惠券抵扣 — 运费)",
        "orderStatus": "(integer) 订单状态",
        "orderTime": "(string) 下单时间",
        "payId": "(integer) 收银台支付流水号",
        "payStatus": "(integer) 支付状态",
        "payType": "(integer) 支付方式",
        "productPrice": "(number) 商品价格( = sku1单价 * sku1数量 + sku2单价 * sku2数量 + ...)",
        "productSupplierType": "(integer) 商品提供方类型",
        "promotionType": "(integer) 促销类型(0:普通,1:秒杀)",
        "provinceCode": "(string) 省份编码",
        "receiverName": "(string) 收货人姓名",
        "receiverPhone": "(string) 收货人手机号",
        "refundStatus": "(integer) 退款状态",
        "regionCodeProviderType": "(integer) 地区编码提供方",
        "subOrderList": [
            {
                "afterSaleStatus": "(integer) 售后状态",
                "afterSaleType": "(integer) 售后类型",
                "couponPrice": "(number) 优惠券抵扣",
                "couponType": "(integer) 优惠券类型",
                "freight": "(number) 运费",
                "orderDetailNo": "(string) 订单详情编号",
                "orderPrice": "(number) 订单价格",
                "productAfterSaleRemark": "(string) 商品售后描述",
                "productName": "(string) 商品名称",
                "productNo": "(string) 商品运营编号",
                "productPicUrl": "(string) 商品图片URL",
                "productPrice": "(number) 商品价格",
                "refundStatus": "(integer) 退款状态",
                "skuAttributes": "(string) 所选SKU属性集合",
                "skuCount": "(integer) SKU数量",
                "skuNo": "(string) SKU编号",
                "skuPrice": "(number) SKU单价",
                "thirdPartySkuNo": "(string) 第三方SKU编号"
            }
        ],
        "thirdPartyOrderNo": "(string) 第三方订单编号",
        "townCode": "(string) 乡镇编码",
        "userId": "(integer) 用户ID"
    }
}
*/



/**
 * 取消售后    /v1/afterSale/cancel/{afterSaleNo}
 *
 * @params      { String   }      afterSaleNo                   服务单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getAfterSaleCancelAfterSaleNoV1({
    params: {
        afterSaleNo: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 申请售后服务    /v1/afterSale/create
 *
 * @params      { Object   }      requestAfterSaleDTO           申请售后数据结构
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postAfterSaleCreateV1({
    data: {
        contactName: '(string) 联系人姓名',
        contactPhone: '(string) 联系人电话',
        deliverySupplierType: '(integer) 物流提供方类型（10:京东,默认）',
        orderDetailNo: '(string) 订单详细编号',
        orderNo: '(string) 订单编号',
        pickAddress: '(string) 取件地址',
        pickCityCode: '(integer) 取件城市编码',
        pickCountyCode: '(integer) 取件区县编码',
        pickFullAddress: '(string) 取件地址全名',
        pickProvinceCode: '(integer) 取件省份编码',
        pickVillageCode: '(integer) 取件乡镇编码',
        pictureUrl: '(string) 图片1链接',
        productSupplierType: '(integer) 商品提供方类型（10:京东,默认）',
        receiveAddress: '(string) 收货地址',
        receiveCityCode: '(integer) 收货城市编码',
        receiveCountyCode: '(integer) 收货区县编码',
        receiveFullAddress: '(string) 收货地址全名',
        receiveProvinceCode: '(integer) 收货省份编码',
        receiveSameAsPick: '(boolean) 收货地址同取件地址,默认true',
        receiveVillageCode: '(integer) 收货乡镇编码',
        refundType: '(integer) 退款方式（1:原路返回,默认）',
        requestCount: '(integer) 申请数量',
        requestReason: '(string) 问题描述',
        requestTime: '(string) 申请时间',
        returnType: '(integer) 商品取回方式（1:上门取件,默认,2:客户送货）',
        serviceType: '(integer) 服务类型（1:退货,2:换货,3:维修）',
        userId: '(integer) 51用户ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 获取服务单详情    /v1/afterSale/detail
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      orderDetailNo                 订单详细号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getAfterSaleDetailV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
        orderDetailNo: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "afterSaleNo": "(string) 售后单编号",
    "afterSaleSupport": "(boolean) 是否支持申请售后",
    "amount": "(number) 退款金额",
    "canCancel": "(boolean) 是否可以取消",
    "contactName": "(string) 联系人姓名",
    "contactPhone": "(string) 联系人电话",
    "deliverySupplierType": "(integer) 物流提供方类型（10:京东,默认）",
    "orderDetailNo": "(string) 订单详细编号",
    "orderNo": "(string) 订单编号",
    "pickFullAddress": "(string) 取件地址全名",
    "pictureUrl": "(string) 图片1链接",
    "productSupplierType": "(integer) 商品提供方类型（10:京东,默认）",
    "receiveFullAddress": "(string) 收货地址全名",
    "refundStatus": "(integer) 退款状态",
    "refundType": "(integer) 退款方式（1:原路返回,默认）",
    "requestCount": "(integer) 申请数量",
    "requestReason": "(string) 问题描述",
    "requestTime": "(string) 申请时间",
    "returnType": "(integer) 商品取回方式（1:上门取件,默认,2:客户送货）",
    "serviceStatus": "(integer) 售后状态",
    "serviceType": "(integer) 服务类型（1:退货,2:换货,3:维修,4:拒收退款）",
    "trackInfos": [
        {
            "createDate": "(string) 创建时间",
            "description": "(string) 售后描述",
            "status": "(integer) 售后状态"
        }
    ],
    "userId": "(integer) 51用户ID"
}
*/



/**
 * 上传售后图片    /v1/afterSale/uploadImage
 *
 * @params      { Object   }      base64Image                   图片的base64转码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postAfterSaleUploadImageV1({
    data: {
        base64Image: '(string) undefined',

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{}
*/



/**
 * 获取全部服务降级配置列表    /v1/degrade/listAll
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getDegradeListAllV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
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
    }
]
*/



/**
 * 添加活动详情    /v1/manage/activity/addActivityConfig
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      ActivityConfigMDTO            活动信息
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageActivityAddActivityConfigV1({
    params: {
        fromType: '10',
    },
    data: {
        activeTime: '(string) 开始时间',
        autoId: '(integer) 自增主键',
        expireTime: '(string) 结束时间',
        orderIndex: '(integer) 排序值',
        promtionStatus: '(string) 进行状态（待开始，进行中，已结束）',
        seqNo: '(integer) 序号',
        status: '(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 从商品列表中添加    /v1/manage/activity/addActivityProductFromProductId
 *
 * @params      { Integer  }      activityId                    活动Id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      productIdList                 productIdList
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageActivityAddActivityProductFromProductIdV1({
    params: {
        activityId: '1',
        fromType: '10',
    },
    data: {
        productIdList: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取活动详情    /v1/manage/activity/getActivityConfig
 *
 * @params      { Integer  }      autoId                        活动Id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageActivityGetActivityConfigV1({
    params: {
        autoId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(string) 开始时间",
    "autoId": "(integer) 自增主键",
    "expireTime": "(string) 结束时间",
    "orderIndex": "(integer) 排序值",
    "promtionStatus": "(string) 进行状态（待开始，进行中，已结束）",
    "seqNo": "(integer) 序号",
    "status": "(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用",
    "title": "(string) 标题"
}
*/



/**
 * 获取获奖信息    /v1/manage/activity/getActivityMessage
 *
 * @params      { Integer  }      autoId                        活动Id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageActivityGetActivityMessageV1({
    params: {
        autoId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activityConfigId": "(integer) 活动ID",
    "activityManageStatus": "(integer) 活动开奖状态",
    "participant": "(integer) 参与总人数",
    "participation": "(integer) 参与总次数",
    "productNo": "(string) 奖品编号",
    "userId": "(integer) 中奖用户ID",
    "userParticipation": "(integer) 中奖用户参与次数"
}
*/



/**
 * 获取商品详情    /v1/manage/activity/getActivityProduct
 *
 * @params      { Integer  }      autoId                        商品Id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageActivityGetActivityProductV1({
    params: {
        autoId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取活动集合    /v1/manage/activity/list
 *
 * @params      { Integer  }      pageIndex                     页码(0开始)
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { String   }      startTime                     起始时间
 * @params      { String   }      endTime                       结束时间
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      promotionStatus               活动状态
 * @params      { String   }      searchText                    状态
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageActivityListV1({
    params: {
        pageIndex: '1',
        pageSize: '10',
        startTime: 'undefined',
        endTime: 'undefined',
        status: 'undefined',
        promotionStatus: 'undefined',
        searchText: 'undefined',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "activeTime": "(string) 开始时间",
            "autoId": "(integer) 自增主键",
            "expireTime": "(string) 结束时间",
            "productImagePath": "(string) 奖品图片",
            "productName": "(string) 奖品名称",
            "promtionStatus": "(string) 进行状态（待开始，进行中，已结束）",
            "seqNo": "(integer) 序号",
            "status": "(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用",
            "title": "(string) 标题"
        }
    ]
}
*/



/**
 * 获取商品列表    /v1/manage/activity/listActivityProducts
 *
 * @params      { Integer  }      pageIndex                     页码(0开始)
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { Integer  }      configId                      活动Id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageActivityListActivityProductsV1({
    params: {
        pageIndex: '1',
        pageSize: '10',
        configId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 自增长主键",
            "contractPrice": "(string) 采购价",
            "detailLink": "(string) 详情链接",
            "discountPeriods": "(string) 免息期数，可以为空",
            "exclusivePrice": "(string) 专享价格",
            "imagePath": "(string) 图片路径",
            "marketPrice": "(string) 市场价格",
            "newComersOnly": "(boolean) 是否新人专享",
            "orderIndex": "(integer) 排序",
            "productId": "(integer) 关联商品ID",
            "productNo": "(string) 商品运营编号",
            "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
            "salePrice": "(string) 销售价",
            "secKillConfigId": "(integer) 关联配置ID",
            "seqNo": "(integer) 序号",
            "status": "(integer) 商品状态",
            "stockCount": "(integer) 库存数量",
            "supportCoupon": "(boolean) 是否支持优惠券",
            "tag": "(string) 标签",
            "thirdPrice": "(string) 第三方价格（京东价）",
            "title": "(string) 标题",
            "winningPrice": "(string) 中奖价格"
        }
    ]
}
*/



/**
 * 修改活动详情    /v1/manage/activity/updateActivityConfig
 *
 * @params      { Object   }      ActivityConfigMDTO            活动信息
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageActivityUpdateActivityConfigV1({
    data: {
        activeTime: '(string) 开始时间',
        autoId: '(integer) 自增主键',
        expireTime: '(string) 结束时间',
        orderIndex: '(integer) 排序值',
        promtionStatus: '(string) 进行状态（待开始，进行中，已结束）',
        seqNo: '(integer) 序号',
        status: '(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改活动状态    /v1/manage/activity/updateActivityConfig/status
 *
 * @params      { Integer  }      autoId                        活动Id
 * @params      { Integer  }      status                        状态
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageActivityUpdateActivityConfigStatusV1({
    params: {
        autoId: 'undefined',
        status: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新商品配置    /v1/manage/activity/updateActivityProduct
 *
 * @params      { Object   }      ActivityProductMDTO           商品
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageActivityUpdateActivityProductV1({
    data: {
        activityConfigId: '(integer) 关联配置ID',
        autoId: '(integer) 自增id',
        detailLink: '(string) 详情链接',
        discountPeriods: '(string) 免息期数，可以为空',
        imagePath: '(string) 图片路径',
        newComersOnly: '(boolean) 是否新人专享',
        orderIndex: '(integer) 排序',
        productId: '(integer) 关联商品ID',
        productNo: '(string) 商品运营编号',
        quota: '(integer) 每人现购数量，若小于0，则不设置现购数量',
        skuList: [{
        	attributeMap: {},
        	autoId: '(integer) 自增主键',
        	contractPrice: '(number) 协议价格',
        	imagePath: '(string) 图片路径',
        	is7ToReturn: '(integer) 是否支持7天退货，1：是，0：不支持',
        	marketPrice: '(number) 市场价格',
        	marketPriceGap: '(number) 市场价格调整幅度',
        	marketPriceRate: '(number) 市场价格浮动比例',
        	marketPriceRateType: '(integer) 市场价格类型',
        	operationPrice: '(number) 运营价格',
        	operationPriceGap: '(number) 运营价格调整幅度 ',
        	operationPriceRate: '(number) 运营价格浮动比例 %n',
        	operationPriceRateType: '(integer) 运营价格类型',
        	price: '(number) 单品价格',
        	productId: '(integer) 产品id',
        	skuId: '(integer) skuId',
        	skuNo: '(string) sku编号',
        	status: '(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用',
        	subImagePath: '(string) 小图路径',
        	subTitle: '(string) 单品描述',
        	thirdPrice: '(number) 第三方价格（京东价）',
        	thirdSkuId: '(string) 第三方skuId',
        	title: '(string) 单品名称',
        	typeCode: '(integer) 供应商编号',
        	winningPrice: '(number) 中奖价',
        }],
        status: '(integer) 商品状态',
        stockCount: '(integer) 库存数量',
        subTitle: '(string) 副标题-用于push任务',
        supportCoupon: '(boolean) 是否支持优惠券',
        tag: '(string) 标签',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新商品状态    /v1/manage/activity/updateActivityProduct/status
 *
 * @params      { Integer  }      autoId                        商品Id
 * @params      { Integer  }      status                        状态
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageActivityUpdateActivityProductStatusV1({
    params: {
        autoId: 'undefined',
        status: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取服务单详情    /v1/manage/afterSale/detail
 *
 * @params      { Integer  }      userId                        用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      orderDetailNo                 订单详细号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageAfterSaleDetailV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
        orderDetailNo: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "afterSaleNo": "(string) 售后单编号",
    "afterSaleSupport": "(boolean) 是否支持申请售后",
    "amount": "(number) 退款金额",
    "canCancel": "(boolean) 是否可以取消",
    "contactName": "(string) 联系人姓名",
    "contactPhone": "(string) 联系人电话",
    "deliverySupplierType": "(integer) 物流提供方类型（10:京东,默认）",
    "orderDetailNo": "(string) 订单详细编号",
    "orderNo": "(string) 订单编号",
    "pickFullAddress": "(string) 取件地址全名",
    "pictureUrl": "(string) 图片1链接",
    "productSupplierType": "(integer) 商品提供方类型（10:京东,默认）",
    "receiveFullAddress": "(string) 收货地址全名",
    "refundStatus": "(integer) 退款状态",
    "refundType": "(integer) 退款方式（1:原路返回,默认）",
    "requestCount": "(integer) 申请数量",
    "requestReason": "(string) 问题描述",
    "requestTime": "(string) 申请时间",
    "returnType": "(integer) 商品取回方式（1:上门取件,默认,2:客户送货）",
    "serviceStatus": "(integer) 售后状态",
    "serviceType": "(integer) 服务类型（1:退货,2:换货,3:维修,4:拒收退款）",
    "trackInfos": [
        {
            "createDate": "(string) 创建时间",
            "description": "(string) 售后描述",
            "status": "(integer) 售后状态"
        }
    ],
    "userId": "(integer) 51用户ID"
}
*/



/**
 * 新增Banner    /v1/manage/banner/add
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      bannerConfigDTO               bannerConfigDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageBannerAddV1({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增长ID',
        cgData: [{
        	groupId: '(integer) 分群id',
        	groupName: '(string) 分群名称',
        }],
        extraLink: '(string) 跳转链接',
        imagePath: '(string) 图片链接',
        linkType: '(integer) 跳转链接类型 1 - 壳内跳转链接， 2 - 壳外跳转链接',
        location: '(integer) 显示位置，0:上，10:中，20:底',
        name: '(string) banner名称',
        orderIndex: '(integer) 顺序',
        seqNo: '(integer) 序号',
        status: '(integer) 状态，参照GenericStatsuEnum',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取Banner列表    /v1/manage/banner/list
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      status                        状态， -1删除 0未上架 1 已上架
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      searchText                    活动标题
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageBannerListV1({
    params: {
        page: '1',
        limit: '20',
        status: '1',
        fromType: '10',
        searchText: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
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
        }
    ]
}
*/



/**
 * 更新Banner    /v1/manage/banner/update
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      bannerConfigDTO               bannerConfigDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageBannerUpdateV1({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增长ID',
        cgData: [{
        	groupId: '(integer) 分群id',
        	groupName: '(string) 分群名称',
        }],
        extraLink: '(string) 跳转链接',
        imagePath: '(string) 图片链接',
        linkType: '(integer) 跳转链接类型 1 - 壳内跳转链接， 2 - 壳外跳转链接',
        location: '(integer) 显示位置，0:上，10:中，20:底',
        name: '(string) banner名称',
        orderIndex: '(integer) 顺序',
        seqNo: '(integer) 序号',
        status: '(integer) 状态，参照GenericStatsuEnum',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改Banner状态    /v1/manage/banner/{autoId}/shift
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      shiftType                     1 下移， -1 上移
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      status                        状态， -1删除 0未上架 1 已上架
 * @params      { String   }      searchText                    活动标题
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageBannerAutoIdShiftV1({
    params: {
        autoId: '1',
        shiftType: '1',
        fromType: '10',
        status: '1',
        searchText: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改Banner状态    /v1/manage/banner/{autoId}/status
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      status                        新状态， 1启用 0禁用 -1删除
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageBannerAutoIdStatusV1({
    params: {
        autoId: '1',
        status: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 批处理订单物流信息    /v1/manage/batch/logistics
 *
 * @params      { Object   }      base64File                    base64File
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageBatchLogisticsV1({
    data: {
        base64File: '(string) undefined',

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 批处理自营商品信息    /v1/manage/batch/product
 *
 * @params      { Object   }      base64File                    base64File
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageBatchProductV1({
    data: {
        base64File: '(string) undefined',

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取CG人群列表    /v1/manage/cg/list
 *
 * @params      { Integer  }      pageIndex                     页码
 * @params      { String   }      userName                      登录用户名
 * @params      { Integer  }      pageSize                      每页数量
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCgListV1({
    params: {
        pageIndex: '1',
        userName: 'baoning',
        pageSize: '20',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "groupId": "(integer) 分群id",
            "groupName": "(string) 分群名称"
        }
    ]
}
*/



/**
 * 新增优惠券版块关联配置    /v1/manage/coupon/sectionConfig/add
 *
 * @params      { Object   }      couponSectionConfigDTO                           优惠券版块关联配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageCouponSectionConfigAddV1({
    data: {
        autoId: '(integer) 主键',
        couponBatchCode: '(string) 优惠券批次号',
        couponName: '(string) 优惠券名称',
        fromType: '(integer) 投放来源',
        orderIndex: '(integer) 顺序',
        receiveBeginTime: '(string) 可领取起始时间',
        receiveEndTime: '(string) 可领取结束时间',
        sectionNo: '(string) 版块编号(活动专区:promotionNo,特定商品:productId)',
        sectionType: '(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4特定商品)',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取优惠券版块关联配置    /v1/manage/coupon/sectionConfig/get/{autoId}
 *
 * @params      { Integer  }      autoId                        主键ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCouponSectionConfigGetAutoIdV1({
    params: {
        autoId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取优惠券版块关联配置列表(分页)    /v1/manage/coupon/sectionConfig/list
 *
 * @params      { Integer  }      fromType                      来源
 * @params      { Integer  }      sectionType                   版块类型(0:全场通用,3:活动专区,4:特定商品)
 * @params      { String   }      sectionNo                     版块编号
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      pageIndex                     页码(1开始)
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCouponSectionConfigListV1({
    params: {
        fromType: 'undefined',
        sectionType: '3',
        sectionNo: 'undefined',
        status: 'undefined',
        pageIndex: '1',
        pageSize: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
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
        }
    ]
}
*/



/**
 * 移动顺序    /v1/manage/coupon/sectionConfig/shift/{autoId}
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      shiftType                     1 下移, -1 上移
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageCouponSectionConfigShiftAutoIdV1({
    params: {
        autoId: 'undefined',
        shiftType: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改优惠券版块关联配置    /v1/manage/coupon/sectionConfig/update
 *
 * @params      { Object   }      couponSectionConfigDTO                           优惠券版块关联配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageCouponSectionConfigUpdateV1({
    data: {
        autoId: '(integer) 主键',
        couponBatchCode: '(string) 优惠券批次号',
        couponName: '(string) 优惠券名称',
        fromType: '(integer) 投放来源',
        orderIndex: '(integer) 顺序',
        receiveBeginTime: '(string) 可领取起始时间',
        receiveEndTime: '(string) 可领取结束时间',
        sectionNo: '(string) 版块编号(活动专区:promotionNo,特定商品:productId)',
        sectionType: '(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4特定商品)',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改优惠券版块关联配置状态    /v1/manage/coupon/sectionConfig/updateStatus/{autoId}
 *
 * @params      { Integer  }      autoId                        主键ID
 * @params      { Integer  }      status                        状态
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageCouponSectionConfigUpdateStatusAutoIdV1({
    params: {
        autoId: 'undefined',
        status: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取优惠券模板信息    /v1/manage/coupon/template
 *
 * @params      { String   }      couponBatchCode               优惠券批次号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCouponTemplateV1({
    params: {
        couponBatchCode: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "amount": "(number) 默认券金额|随机金额下限",
    "batchCode": "(string) 批次号",
    "couponName": "(string) 优惠券名称",
    "couponType": "(integer) 优惠券类型:CouponTypeEnum",
    "couponTypeName": "(string) 优惠券类型名称:CouponTypeEnum",
    "effectTime": "(string) 券统一生效时间(到期后统一生效)",
    "effectiveDays": "(integer) 有效期天数",
    "effectiveMinute": "(integer) 有效期分钟数",
    "expireTime": "(string) 券过期时间(到期后不再发放)",
    "fromTypeName": "(string) 渠道来源名称",
    "orderRequiredAmount": "(number) 订单使用限制金额(分期商城满减券使用)",
    "scopeTypeName": "(string) 适用范围类型名称"
}
*/



/**
 * 获取服务降级配置    /v1/manage/degrade/get
 *
 * @params      { Integer  }      fromType                      投放来源(0:全渠道,10:管家,20:即刻有,30:给你花)
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageDegradeGetV1({
    params: {
        fromType: '0',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 新增服务降级配置    /v1/manage/degrade/insert
 *
 * @params      { Object   }      serviceDegradeDTO             服务降级配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageDegradeInsertV1({
    data: {
        autoId: '(integer) 自增主键',
        endTime: '(string) 降级生效结束时间',
        fromType: '(integer) 投放来源',
        noticeMessage: '(string) 全局公告消息',
        startTime: '(string) 降级生效起始时间',
        strategies: [{
        	noticeMessage: '(string) 公告消息',
        	scopeName: '(string) 范围名称',
        	scopeType: '(integer) 范围类型',
        	strategyName: '(string) 策略名称',
        	strategyType: '(integer) 策略类型',
        	subStrategyList: [{
        		noticeMessage: '(string) 公告消息',
        		scopeName: '(string) 范围名称',
        		scopeType: '(integer) 范围类型',
        		strategyName: '(string) 策略名称',
        		strategyType: '(integer) 策略类型',
        		subStrategyList: [{
        			noticeMessage: '(string) 公告消息',
        			scopeName: '(string) 范围名称',
        			scopeType: '(integer) 范围类型',
        			strategyName: '(string) 策略名称',
        			strategyType: '(integer) 策略类型',
        			subStrategyList: [{
        				noticeMessage: '(string) 公告消息',
        				scopeName: '(string) 范围名称',
        				scopeType: '(integer) 范围类型',
        				strategyName: '(string) 策略名称',
        				strategyType: '(integer) 策略类型',
        				subStrategyList: [{
        					noticeMessage: '(string) 公告消息',
        					scopeName: '(string) 范围名称',
        					scopeType: '(integer) 范围类型',
        					strategyName: '(string) 策略名称',
        					strategyType: '(integer) 策略类型',
        					subStrategyList: [{
        						noticeMessage: '(string) 公告消息',
        						scopeName: '(string) 范围名称',
        						scopeType: '(integer) 范围类型',
        						strategyName: '(string) 策略名称',
        						strategyType: '(integer) 策略类型',
        						subStrategyList: [{
        							noticeMessage: '(string) 公告消息',
        							scopeName: '(string) 范围名称',
        							scopeType: '(integer) 范围类型',
        							strategyName: '(string) 策略名称',
        							strategyType: '(integer) 策略类型',
        							subStrategyList: [{
        								noticeMessage: '(string) 公告消息',
        								scopeName: '(string) 范围名称',
        								scopeType: '(integer) 范围类型',
        								strategyName: '(string) 策略名称',
        								strategyType: '(integer) 策略类型',
        								subStrategyList: [{
        									noticeMessage: '(string) 公告消息',
        									scopeName: '(string) 范围名称',
        									scopeType: '(integer) 范围类型',
        									strategyName: '(string) 策略名称',
        									strategyType: '(integer) 策略类型',
        									subStrategyList: [{
        										noticeMessage: '(string) 公告消息',
        										scopeName: '(string) 范围名称',
        										scopeType: '(integer) 范围类型',
        										strategyName: '(string) 策略名称',
        										strategyType: '(integer) 策略类型',
        										subStrategyList: '#/definitions/服务降级策略配置',
        									}],
        								}],
        							}],
        						}],
        					}],
        				}],
        			}],
        		}],
        	}],
        }],
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改服务降级配置    /v1/manage/degrade/update
 *
 * @params      { Object   }      serviceDegradeDTO             服务降级配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageDegradeUpdateV1({
    data: {
        autoId: '(integer) 自增主键',
        endTime: '(string) 降级生效结束时间',
        fromType: '(integer) 投放来源',
        noticeMessage: '(string) 全局公告消息',
        startTime: '(string) 降级生效起始时间',
        strategies: [{
        	noticeMessage: '(string) 公告消息',
        	scopeName: '(string) 范围名称',
        	scopeType: '(integer) 范围类型',
        	strategyName: '(string) 策略名称',
        	strategyType: '(integer) 策略类型',
        	subStrategyList: [{
        		noticeMessage: '(string) 公告消息',
        		scopeName: '(string) 范围名称',
        		scopeType: '(integer) 范围类型',
        		strategyName: '(string) 策略名称',
        		strategyType: '(integer) 策略类型',
        		subStrategyList: [{
        			noticeMessage: '(string) 公告消息',
        			scopeName: '(string) 范围名称',
        			scopeType: '(integer) 范围类型',
        			strategyName: '(string) 策略名称',
        			strategyType: '(integer) 策略类型',
        			subStrategyList: [{
        				noticeMessage: '(string) 公告消息',
        				scopeName: '(string) 范围名称',
        				scopeType: '(integer) 范围类型',
        				strategyName: '(string) 策略名称',
        				strategyType: '(integer) 策略类型',
        				subStrategyList: [{
        					noticeMessage: '(string) 公告消息',
        					scopeName: '(string) 范围名称',
        					scopeType: '(integer) 范围类型',
        					strategyName: '(string) 策略名称',
        					strategyType: '(integer) 策略类型',
        					subStrategyList: [{
        						noticeMessage: '(string) 公告消息',
        						scopeName: '(string) 范围名称',
        						scopeType: '(integer) 范围类型',
        						strategyName: '(string) 策略名称',
        						strategyType: '(integer) 策略类型',
        						subStrategyList: [{
        							noticeMessage: '(string) 公告消息',
        							scopeName: '(string) 范围名称',
        							scopeType: '(integer) 范围类型',
        							strategyName: '(string) 策略名称',
        							strategyType: '(integer) 策略类型',
        							subStrategyList: [{
        								noticeMessage: '(string) 公告消息',
        								scopeName: '(string) 范围名称',
        								scopeType: '(integer) 范围类型',
        								strategyName: '(string) 策略名称',
        								strategyType: '(integer) 策略类型',
        								subStrategyList: [{
        									noticeMessage: '(string) 公告消息',
        									scopeName: '(string) 范围名称',
        									scopeType: '(integer) 范围类型',
        									strategyName: '(string) 策略名称',
        									strategyType: '(integer) 策略类型',
        									subStrategyList: [{
        										noticeMessage: '(string) 公告消息',
        										scopeName: '(string) 范围名称',
        										scopeType: '(integer) 范围类型',
        										strategyName: '(string) 策略名称',
        										strategyType: '(integer) 策略类型',
        										subStrategyList: '#/definitions/服务降级策略配置',
        									}],
        								}],
        							}],
        						}],
        					}],
        				}],
        			}],
        		}],
        	}],
        }],
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取guideBanner列表    /v1/manage/guide/list
 *
 * @params      { Integer  }      pageIndex                     页数，从0开始
 * @params      { Integer  }      pageSize                      每页数量
 * @params      { String   }      searchName                    Banner名字
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      groupId                       组号
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageGuideListV1({
    params: {
        pageIndex: '0',
        pageSize: '20',
        searchName: 'undefined',
        status: 'undefined',
        groupId: 'undefined',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "groupId": "(integer) 当前启用组号(0为全部禁用)",
    "guideBannerDTOs": {
        "pageIndex": "(integer) undefined",
        "pageSize": "(integer) undefined",
        "rowCount": "(integer) undefined",
        "rows": [
            {
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
            }
        ]
    }
}
*/



/**
 * 更新guideBanner    /v1/manage/guide/update
 *
 * @params      { Object   }      guideBannerDTO                guideBannerDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageGuideUpdateV1({
    data: {
        autoId: '(integer) 自增主键',
        extraLink: '(string) 跳转链接，可能为空',
        fromType: '(integer) 投放来源',
        groupId: '(integer) 组号',
        imagePath: '(string) 图片链接',
        linkType: '(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接',
        name: '(string) 名称',
        orderId: '(integer) 组内序号',
        sampleImagePath: '(string) 示意图',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新guideBanner状态    /v1/manage/guide/{groupId}/status
 *
 * @params      { Integer  }      groupId                       groupId
 * @params      { Integer  }      status                        新状态， 1启用 0禁用 -1删除
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageGuideGroupIdStatusV1({
    params: {
        groupId: '1',
        status: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取后台简介    /v1/manage/intro/get
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageIntroGetV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer) 自增主键",
    "content": "(string) 内容"
}
*/



/**
 * 更新后台简介    /v1/manage/intro/update
 *
 * @params      { Object   }      managerIntroDTO               managerIntroDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageIntroUpdateV1({
    data: {
        autoId: '(integer) 自增主键',
        content: '(string) 内容',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 添加发票商品配置    /v1/manage/invoice/codeConfig/add
 *
 * @params      { Object   }      invoiceProductConfigDTO                          发票商品配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageInvoiceCodeConfigAddV1({
    data: {
        autoId: '(integer) 主键',
        description: '(string) 说明',
        orderIndex: '(integer) 位置顺序',
        productCategoryName: '(string) 商品和服务分类简称',
        productCode: '(string) 商品合并编码',
        productName: '(string) 货物和劳务名称',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取发票商品配置    /v1/manage/invoice/codeConfig/get/{autoId}
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageInvoiceCodeConfigGetAutoIdV1({
    params: {
        autoId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer) 主键",
    "description": "(string) 说明",
    "orderIndex": "(integer) 位置顺序",
    "productCategoryName": "(string) 商品和服务分类简称",
    "productCode": "(string) 商品合并编码",
    "productName": "(string) 货物和劳务名称",
    "status": "(integer) 状态"
}
*/



/**
 * 获取发票商品编码列表(分页)    /v1/manage/invoice/codeConfig/list
 *
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      pageIndex                     页数，从1开始
 * @params      { Integer  }      pageSize                      每页数量
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageInvoiceCodeConfigListV1({
    params: {
        status: 'undefined',
        pageIndex: '1',
        pageSize: '20',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 主键",
            "description": "(string) 说明",
            "orderIndex": "(integer) 位置顺序",
            "productCategoryName": "(string) 商品和服务分类简称",
            "productCode": "(string) 商品合并编码",
            "productName": "(string) 货物和劳务名称",
            "status": "(integer) 状态"
        }
    ]
}
*/



/**
 * 修改发票商品配置    /v1/manage/invoice/codeConfig/shift/{autoId}
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      shiftType                     1 下移, -1 上移
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageInvoiceCodeConfigShiftAutoIdV1({
    params: {
        autoId: 'undefined',
        shiftType: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改发票商品配置    /v1/manage/invoice/codeConfig/update
 *
 * @params      { Object   }      invoiceProductConfigDTO                          发票商品配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageInvoiceCodeConfigUpdateV1({
    data: {
        autoId: '(integer) 主键',
        description: '(string) 说明',
        orderIndex: '(integer) 位置顺序',
        productCategoryName: '(string) 商品和服务分类简称',
        productCode: '(string) 商品合并编码',
        productName: '(string) 货物和劳务名称',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改发票商品配置状态    /v1/manage/invoice/codeConfig/updateStatus/{autoId}
 *
 * @params      { Integer  }      autoId                        主键
 * @params      { Integer  }      status                        状态
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageInvoiceCodeConfigUpdateStatusAutoIdV1({
    params: {
        autoId: 'undefined',
        status: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 根据开票状态导出开票列表    /v1/manage/invoice/export
 *
 * @params      { Integer  }      status                        状态  1 - 待开票, 2 - 开票中, 3 - 已开票, 4 - 待作废, 5 - 作废中, 6 - 已作废
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageInvoiceExportV1({
    params: {
        status: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "base64Str": "(string) undefined",
    "fileName": "(string) undefined"
}
*/



/**
 * 根据状态获取开票信息    /v1/manage/invoice/list
 *
 * @params      { Integer  }      status                        状态 1 - 待开票, 2 - 开票中, 3 - 已开票, 4 - 待作废, 5 - 作废中, 6 - 已作废
 * @params      { Integer  }      pageIndex                     页数，从1开始
 * @params      { Integer  }      pageSize                      每页数量
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageInvoiceListV1({
    params: {
        status: '1',
        pageIndex: '1',
        pageSize: '20',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "clientName": "(string) 客户姓名",
            "clientPhone": "(string) 客户注册手机号码",
            "invoiceCompanyName": "(string) 发票公司名称",
            "invoiceCompanyTaxCode": "(string) 发票公司税号",
            "invoiceStatus": "(integer) 开票状态",
            "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
            "invoiceType": "(integer) 发票类型（1:电子普通发票）",
            "invoiceUrl": "(string) 电子发票链接",
            "issueTime": "(string) 开票成功时间",
            "orderNo": "(string) 订单编号",
            "paymentPrice": "(number) 实付金额",
            "paymentTime": "(string) 支付时间",
            "productName": "(string) 商品名称",
            "receiveTime": "(string) 收货时间",
            "resultMessage": "(string) 开票结果信息",
            "seqNo": "(integer) 序号",
            "skuCount": "(integer) 商品数量",
            "skuPrice": "(number) SKU单价",
            "userId": "(integer) 51用户ID"
        }
    ]
}
*/



/**
 * 批量更新订单开票状态    /v1/manage/invoice/updateStatus
 *
 * @params      { Object   }      invoiceIssueRequest           开票请求
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageInvoiceUpdateStatusV1({
    data: {
        invoiceStatus: '(integer) 发票状态（2 - 开票中, 5 - 作废中）',
        orderNoList: [],
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 从产品列表中添加    /v1/manage/operation/addHotProductFromProductId
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      type                          热门商品类型(0:热销商品;1:特卖商品)
 * @params      { Object   }      productIdList                 productIdList
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOperationAddHotProductFromProductIdV1({
    params: {
        fromType: '10',
        type: '0',
    },
    data: {
        productIdList: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 新增秒杀场次配置    /v1/manage/operation/addSecKillConfig
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      secKillConfigDTO              secKillConfigDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOperationAddSecKillConfigV1({
    params: {
        fromType: '10',
    },
    data: {
        activeTime: '(string) 开始时间',
        autoId: '(integer) 自增主键',
        expireTime: '(string) 结束时间',
        productsCount: '(integer) 商品数量',
        productsSoldCount: '(integer) 商品销量',
        promtionStatus: '(string) 进行状态（待开始，进行中，已结束）',
        seqNo: '(integer) 序号',
        showType: '(integer) 展示类型，1首页展示 2活动页展示',
        status: '(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 从产品列表中添加    /v1/manage/operation/addSecKillProductFromProductId
 *
 * @params      { Integer  }      configId                      秒杀配置id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      productIdList                 productIdList
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOperationAddSecKillProductFromProductIdV1({
    params: {
        configId: '1',
        fromType: '10',
    },
    data: {
        productIdList: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 移除热门产品    /v1/manage/operation/hotProduct/{autoId}
 *
 * @params      { Integer  }      autoId                        热门产品Id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.deleteManageOperationHotProductAutoIdV1({
    params: {
        autoId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取热门商品列表    /v1/manage/operation/hotProductDetail
 *
 * @params      { Integer  }      autoId                        页数，从0开始
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationHotProductDetailV1({
    params: {
        autoId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取热门商品列表    /v1/manage/operation/listHotProducts
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      status                        状态， -1删除 0未上架 1 已上架
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      type                          热门商品分类(0:热销商品,1:特卖商品)
 * @params      { String   }      searchText                    活动标题
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationListHotProductsV1({
    params: {
        page: '1',
        limit: '20',
        status: '1',
        fromType: '10',
        type: '0',
        searchText: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 自增主键",
            "contractPrice": "(string) 采购价",
            "detailLink": "(string) 详情链接",
            "discountPeriods": "(string) 100%免息期数，单选 3，6，9，12",
            "discountPrice": "(string) 特卖价",
            "imagePath": "(string) 图片路径",
            "newComersOnly": "(boolean) 是否新人专享",
            "orderIndex": "(integer) 顺序",
            "productId": "(integer) 关联的商品ID",
            "productNo": "(string) 产品编码 形式为UUID",
            "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
            "salePrice": "(string) 销售价",
            "seqNo": "(integer) 序号",
            "soldCount": "(integer) 商品销量",
            "status": "(integer) 状态",
            "subTitle": "(string) 副标题",
            "supportCoupon": "(boolean) 是否支持优惠券",
            "tag": "(string) 标签",
            "thirdPrice": "(string) 第三方价格（京东价）",
            "title": "(string) 标题",
            "type": "(integer) 0:热销商品;1:特卖商品。见HotProductTypeEnum"
        }
    ]
}
*/



/**
 * 获取秒杀场次配置    /v1/manage/operation/listSecKillConfig
 *
 * @params      { String   }      startTime                     开始时间，格式为 yyyy-MM-dd
 * @params      { String   }      endTime                       结束时间 格式为 yyyy-MM-dd
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationListSecKillConfigV1({
    params: {
        startTime: '2018-03-23',
        endTime: '2018-03-24',
        page: '1',
        limit: '20',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
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
        }
    ]
}
*/



/**
 * 获取秒杀商品列表    /v1/manage/operation/listSecKillProducts
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      configId                      秒杀配置id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationListSecKillProductsV1({
    params: {
        page: '0',
        limit: '20',
        configId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 自增长主键",
            "contractPrice": "(string) 采购价",
            "detailLink": "(string) 详情链接",
            "discountPeriods": "(string) 免息期数，可以为空",
            "imagePath": "(string) 图片路径",
            "newComersOnly": "(boolean) 是否新人专享",
            "orderIndex": "(integer) 排序",
            "productId": "(integer) 关联商品ID",
            "productNo": "(string) 商品运营编号",
            "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
            "salePrice": "(string) 销售价",
            "secKillConfigId": "(integer) 关联配置ID",
            "seqNo": "(integer) 序号",
            "stockCount": "(integer) 库存数量",
            "supportCoupon": "(boolean) 是否支持优惠券",
            "tag": "(string) 标签",
            "thirdPrice": "(string) 第三方价格（京东价）",
            "title": "(string) 标题"
        }
    ]
}
*/



/**
 * 修改秒杀场次状态    /v1/manage/operation/secKill/{autoId}/status
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      status                        新状态
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOperationSecKillAutoIdStatusV1({
    params: {
        autoId: '1',
        status: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 删除秒杀场次产品关联    /v1/manage/operation/secKillProduct/{autoId}
 *
 * @params      { Integer  }      autoId                        页数，从0开始
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.deleteManageOperationSecKillProductAutoIdV1({
    params: {
        autoId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新商品顺序（上移小于0，下移大于0）    /v1/manage/operation/shiftProduct
 *
 * @params      { String   }      productNo                     热门产品编号
 * @params      { Integer  }      shiftType                     变更类型，-1上移，+1下移
 * @params      { Integer  }      status                        状态， -1删除 0未上架 1 已上架
 * @params      { String   }      searchText                    活动标题
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOperationShiftProductV1({
    params: {
        productNo: '1',
        shiftType: '1',
        status: '1',
        searchText: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新热门商品    /v1/manage/operation/updateHotProducts
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      hotProductConfigDTO           hotProductConfigDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOperationUpdateHotProductsV1({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增主键',
        discountPeriods: '(string) 100%免息期数，单选 3，6，9，12',
        imagePath: '(string) 图片路径',
        newComersOnly: '(boolean) 是否新人专享',
        productId: '(integer) undefined',
        productNo: '(string) 商品编号',
        quota: '(integer) 每人现购数量，若小于0，则不设置现购数量',
        skuList: [{
        	attributeMap: {},
        	autoId: '(integer) 自增主键',
        	contractPrice: '(number) 协议价格',
        	imagePath: '(string) 图片路径',
        	is7ToReturn: '(integer) 是否支持7天退货，1：是，0：不支持',
        	marketPrice: '(number) 市场价格',
        	marketPriceGap: '(number) 市场价格调整幅度',
        	marketPriceRate: '(number) 市场价格浮动比例',
        	marketPriceRateType: '(integer) 市场价格类型',
        	operationPrice: '(number) 运营价格',
        	operationPriceGap: '(number) 运营价格调整幅度 ',
        	operationPriceRate: '(number) 运营价格浮动比例 %n',
        	operationPriceRateType: '(integer) 运营价格类型',
        	price: '(number) 单品价格',
        	productId: '(integer) 产品id',
        	skuId: '(integer) skuId',
        	skuNo: '(string) sku编号',
        	status: '(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用',
        	subImagePath: '(string) 小图路径',
        	subTitle: '(string) 单品描述',
        	thirdPrice: '(number) 第三方价格（京东价）',
        	thirdSkuId: '(string) 第三方skuId',
        	title: '(string) 单品名称',
        	typeCode: '(integer) 供应商编号',
        	winningPrice: '(number) 中奖价',
        }],
        subTitle: '(string) 副标题',
        supportCoupon: '(boolean) 是否支持用券',
        tag: '(string) 标签',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新运营商品状态（启用禁用）    /v1/manage/operation/updateOperationalProductStatus
 *
 * @params      { String   }      productNo                     产品编号，productNo
 * @params      { Integer  }      status                        状态， -1删除 0禁用 1 启用
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOperationUpdateOperationalProductStatusV1({
    params: {
        productNo: '1',
        status: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新秒杀场次配置    /v1/manage/operation/updateSecKillConfig
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      secKillConfigDTO              secKillConfigDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOperationUpdateSecKillConfigV1({
    params: {
        fromType: '10',
    },
    data: {
        activeTime: '(string) 开始时间',
        autoId: '(integer) 自增主键',
        expireTime: '(string) 结束时间',
        productsCount: '(integer) 商品数量',
        productsSoldCount: '(integer) 商品销量',
        promtionStatus: '(string) 进行状态（待开始，进行中，已结束）',
        seqNo: '(integer) 序号',
        showType: '(integer) 展示类型，1首页展示 2活动页展示',
        status: '(integer) 状态， 参照GenericStatusEnum -1删除 1 启用，0禁用',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 根据日期及fromType导出订单列表    /v1/manage/order/export
 *
 * @params      { Integer  }      fromType                      投放来源
 * @params      { Integer  }      orderCategory                 订单类型
 * @params      { String   }      orderTimeBegin                下单时间开始(yyyy-MM-dd HH:mm:ss)
 * @params      { String   }      orderTimeEnd                  下单时间结束(yyyy-MM-dd HH:mm:ss)
 * @params      { Integer  }      productSupplierType           商品来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOrderExportV1({
    params: {
        fromType: '10',
        orderCategory: '-1',
        orderTimeBegin: '2018-03-01 00:00:00',
        orderTimeEnd: '2018-04-01 00:00:00',
        productSupplierType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "base64Str": "(string) undefined",
    "fileName": "(string) undefined"
}
*/



/**
 * 获取订单详情    /v1/manage/order/get/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      orderDetailNo                 详情订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOrderGetUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
        orderDetailNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "afterSaleRemark": "(string) 售后备注",
    "couponPrice": "(number) 优惠券抵扣",
    "discountPrice": "(number) 贴息优惠金额",
    "fullAddress": "(string) 完整地址",
    "hasAfterSale": "(boolean) 是否有售后详情",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer) 发票类型（1:电子普通发票）",
    "orderCategory": "(integer) 订单类别",
    "orderDetailNo": "(string) 订单详情编号",
    "orderNo": "(string) 订单编号",
    "orderPrice": "(number) 订单价格",
    "orderTime": "(string) 下单时间",
    "orderTrackList": [
        {
            "event": "(string) 事件描述",
            "operator": "(string) 操作者",
            "time": "(string) 时间(yyyy-MM-dd HH:mm:ss)"
        }
    ],
    "paymentPrice": "(number) 应付金额",
    "paymentTime": "(string) 支付时间",
    "paymentType": "(string) 支付方式",
    "productName": "(string) 商品名称",
    "productPicUrl": "(string) 商品图片URL",
    "productPrice": "(number) 商品价格",
    "receiverName": "(string) 收货人姓名",
    "receiverPhone": "(string) 收货人手机号",
    "skuAttributes": "(string) 所选SKU属性集合",
    "skuCount": "(integer) SKU数量",
    "skuNo": "(string) SKU编号",
    "skuPrice": "(number) SKU单价",
    "userId": "(integer) 51用户ID"
}
*/



/**
 * 获取订单列表(分页)    /v1/manage/order/list
 *
 * @params      { Integer  }      pageIndex                     页码
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { Object   }      orderQueryDTO                 订单查询请求
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOrderListV1({
    params: {
        pageIndex: '1',
        pageSize: '10',
    },
    data: {
        fromType: '(integer) 投放来源',
        orderCategory: '(integer) 订单类别',
        orderNo: '(string) 订单号',
        orderTimeBegin: '(string) 下单时间开始(yyyy-MM-dd HH:mm:ss)',
        orderTimeEnd: '(string) 下单时间结束(yyyy-MM-dd HH:mm:ss)',
        productName: '(string) 商品名称',
        productSupplierType: '(integer) 商品来源',
        userId: '(integer) 51用户ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "bankName": "(string) 支付银行",
            "couponPrice": "(number) 优惠券金额",
            "discountPrice": "(number) 贴息优惠金额",
            "fromType": "(integer) 投放来源",
            "fullAddress": "(string) 详细收货地址",
            "orderCategory": "(integer) 订单类别",
            "orderCategoryName": "(string) 订单类别名称",
            "orderDetailNo": "(string) 订单详情编号",
            "orderNo": "(string) 订单概要编号",
            "orderPrice": "(number) 订单金额",
            "orderPromotionType": "(string) 订单推广类型（普通/秒杀/活动专区）",
            "orderTime": "(string) 下单时间",
            "paymentPrice": "(number) 应付金额",
            "paymentTime": "(string) 支付时间",
            "productName": "(string) 商品名称",
            "productPicUrl": "(string) 商品图片",
            "productPrice": "(number) 商品金额",
            "productSupplierCode": "(integer) 供应商",
            "productSupplierName": "(string) 供应商名称",
            "skuCount": "(integer) 商品数量",
            "skuNo": "(string) sku编号",
            "skuPrice": "(number) SKU单价",
            "stages": "(integer) 分期期数",
            "thirdPartyOrderNo": "(string) 第三方订单编号",
            "userId": "(integer) 51用户ID"
        }
    ]
}
*/



/**
 * 订单发货    /v1/manage/order/shipping
 *
 * @params      { Object   }      shippingInfoDTO               shippingInfoDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOrderShippingV1({
    data: {
        deliverSupplierType: '(integer) 快递公司编号',
        expressNo: '(string) 快递单号',
        expressPrice: '(number) 快递费用',
        orderNo: '(string) 订单编号',
        userId: '(integer) userId',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 新增otoBanner    /v1/manage/oto/add
 *
 * @params      { Object   }      otoBannerDTO                  otoBannerDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOtoAddV1({
    data: {
        autoId: '(integer) 自增主键',
        extraLink: '(string) 跳转链接，可能为空',
        fromType: '(integer) 投放来源',
        imagePath: '(string) 图片链接',
        linkType: '(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接',
        name: '(string) 名称',
        orderIndex: '(integer) 排序值',
        status: '(integer) 状态',
        tag: '(string) 角标',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取otoBanner列表    /v1/manage/oto/list
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { String   }      searchName                    Banner名字
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      searchTag                     Banner角标
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOtoListV1({
    params: {
        page: '0',
        limit: '20',
        searchName: 'undefined',
        status: 'undefined',
        fromType: '10',
        searchTag: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 自增主键",
            "extraLink": "(string) 跳转链接，可能为空",
            "fromType": "(integer) 投放来源",
            "imagePath": "(string) 图片链接",
            "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "name": "(string) 名称",
            "orderIndex": "(integer) 排序值",
            "status": "(integer) 状态",
            "tag": "(string) 角标"
        }
    ]
}
*/



/**
 * 更新otoBanner    /v1/manage/oto/update
 *
 * @params      { Object   }      otoBannerDTO                  otoBannerDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOtoUpdateV1({
    data: {
        autoId: '(integer) 自增主键',
        extraLink: '(string) 跳转链接，可能为空',
        fromType: '(integer) 投放来源',
        imagePath: '(string) 图片链接',
        linkType: '(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接',
        name: '(string) 名称',
        orderIndex: '(integer) 排序值',
        status: '(integer) 状态',
        tag: '(string) 角标',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 上下移动otoBanner    /v1/manage/oto/{autoId}/shift
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      shiftType                     1 下移， -1 上移
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOtoAutoIdShiftV1({
    params: {
        autoId: '1',
        shiftType: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新otoBanner状态    /v1/manage/oto/{autoId}/status
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      status                        新状态， 1启用 0禁用 -1删除
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOtoAutoIdStatusV1({
    params: {
        autoId: '1',
        status: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改发票商品配置    /v1/manage/position/codeConfig/shift/{autoId}
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      oldRank                       原先排序值
 * @params      { Integer  }      newRank                       现在排序值
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePositionCodeConfigShiftAutoIdV1({
    params: {
        autoId: 'undefined',
        oldRank: 'undefined',
        newRank: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 票券移动顺序    /v1/manage/position/sectionConfig/shift/coupon
 *
 * @params      { Integer  }      sectionType                   版块编号
 * @params      { String   }      couponBatchCode               优惠券批次号
 * @params      { Integer  }      oldRank                       原先排序值
 * @params      { Integer  }      newRank                       现在排序值
 * @params      { Integer  }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePositionSectionConfigShiftCouponV1({
    params: {
        sectionType: 'undefined',
        couponBatchCode: 'undefined',
        oldRank: 'undefined',
        newRank: 'undefined',
        fromType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 功能banner跨越移动    /v1/manage/position/shiftOtoBanner
 *
 * @params      { Integer  }      autoId                        自增id
 * @params      { Integer  }      oldRank                       原先排序值
 * @params      { Integer  }      newRank                       现在排序值
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePositionShiftOtoBannerV1({
    params: {
        autoId: '1',
        oldRank: 'undefined',
        newRank: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新商品顺序    /v1/manage/position/shiftProduct
 *
 * @params      { String   }      productNo                     热门产品编号
 * @params      { Integer  }      oldRank                       原先排序值
 * @params      { Integer  }      newRank                       现在排序值
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePositionShiftProductV1({
    params: {
        productNo: '1',
        oldRank: 'undefined',
        newRank: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 活动上移／下移    /v1/manage/position/shiftPromotion
 *
 * @params      { Integer  }      promotionId                   活动的自增id
 * @params      { Integer  }      oldRank                       原先排序值
 * @params      { Integer  }      newRank                       现在排序值
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePositionShiftPromotionV1({
    params: {
        promotionId: '1',
        oldRank: 'undefined',
        newRank: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 活动商品上移／下移    /v1/manage/position/shiftPromotionProduct
 *
 * @params      { Integer  }      promotionProductId            活动的自增id
 * @params      { Integer  }      oldRank                       原先排序值
 * @params      { Integer  }      newRank                       现在排序值
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePositionShiftPromotionProductV1({
    params: {
        promotionProductId: '1',
        oldRank: 'undefined',
        newRank: 'undefined',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改Banner状态    /v1/manage/position/{autoId}/shift
 *
 * @params      { Integer  }      autoId                        autoId
 * @params      { Integer  }      oldRank                       原先排序值
 * @params      { Integer  }      newRank                       现在排序值
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePositionAutoIdShiftV1({
    params: {
        autoId: '1',
        oldRank: 'undefined',
        newRank: 'undefined',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改商品详情    /v1/manage/product
 *
 * @params      { Object   }      productDTO                    productDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageProductV1({
    data: {
        autoId: '(integer) 自增主键',
        description: '(string) 商品描述',
        detailContent: '(string) 商品详细描述',
        images: [],
        invoiceProductCode: '(string) 发票商品编码',
        invoiceProductName: '(string) 发票商品名称',
        name: '(string) 商品名称',
        shippingFee: '(number) 运费',
        skuList: [{
        	attributeMap: {},
        	autoId: '(integer) 自增主键',
        	contractPrice: '(number) 协议价格',
        	imagePath: '(string) 图片路径',
        	is7ToReturn: '(integer) 是否支持7天退货，1：是，0：不支持',
        	price: '(number) 单品价格',
        	productId: '(integer) 产品id',
        	skuExtendDTOList: [{
        		fromType: '(integer) 投放渠道',
        		moduleId: '(string) 模块Id',
        		moduleName: '(string) 模块名称',
        		moduleProductId: '(integer) 模块商品Id',
        		price: '(number) 售价',
        		productNo: '(string) 商品编号',
        		skuNo: '(string) sku编号',
        	}],
        	skuNo: '(string) sku编号',
        	status: '(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用',
        	subImagePath: '(string) 小图路径',
        	subTitle: '(string) 单品描述',
        	thirdPrice: '(number) 第三方价格（京东价）',
        	thirdSkuId: '(string) 第三方skuId',
        	title: '(string) 单品名称',
        	typeCode: '(integer) 供应商编号',
        }],
        status: '(integer) 状态， 参照ProductStatusEnum -1删除 0未上架 1 已上架',
        typeCode: '(integer) 商品来源 10 京东， 51自营',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 通过skuId列表添加商品    /v1/manage/product/addFromSkuIds
 *
 * @params      { Object   }      thirdSkuIds                   thirdSkuIds
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageProductAddFromSkuIdsV1({
    data: {
        thirdSkuIds: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "resultMsg": "(string) undefined",
    "successCount": "(integer) undefined",
    "totalCount": "(integer) undefined"
}
*/



/**
 * 获取京东处同步的商品详情    /v1/manage/product/detail
 *
 * @params      { Integer  }      productId                     产品自增id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageProductDetailV1({
    params: {
        productId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "detailContent": "(string) undefined",
    "detailCss": "(string) undefined"
}
*/



/**
 * 获取商品详情    /v1/manage/product/getNBProduct
 *
 * @params      { Integer  }      productId                     产品自增id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageProductGetNBProductV1({
    params: {
        productId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取商品列表    /v1/manage/product/list
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      status                        状态， -1删除 0未上架 1 已上架
 * @params      { String   }      searchTxt                     商品名称
 * @params      { Integer  }      typeCode                      商品来源 10 - 京东， 51 - 自营， 30 - 网易严选
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageProductListV1({
    params: {
        page: '1',
        limit: '20',
        status: '1',
        searchTxt: 'undefined',
        typeCode: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "activeTime": "(string) 上架时间",
            "autoId": "(integer) 自增长主键",
            "contractPrice": "(string) 采购价",
            "createTime": "(string) 入库时间",
            "detailLink": "(string) 详情链接",
            "name": "(string) 商品名称",
            "onSale": "(boolean) 是否销售中（当前秒杀商品/热销商品关联）",
            "productImage": "(string) undefined",
            "pvLatest7": "(integer) 最近7天pv",
            "salePrice": "(string) 销售价",
            "seqNo": "(integer) 序号",
            "soldCountLatest7": "(integer) 最近7天销量",
            "thirdPrice": "(string) 第三方售价",
            "typeCode": "(integer) undefined",
            "typeCodeName": "(string) undefined",
            "uvLatest7": "(integer) 最近7天uv"
        }
    ]
}
*/



/**
 * 获取商品预览页面    /v1/manage/product/preview/{productId}
 *
 * @params      { Integer  }      productId                     产品自增id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageProductPreviewProductIdV1({
    params: {
        productId: '1',
        fromType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponList": [
        {
            "couponBatchCode": "(string) 优惠券批次号",
            "couponName": "(string) 优惠券名称",
            "fromType": "(integer) 投放来源",
            "orderIndex": "(integer) 顺序",
            "receiveBeginTime": "(string) 可领取起始时间",
            "receiveEndTime": "(string) 可领取结束时间",
            "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)",
            "status": "(integer) 状态"
        }
    ],
    "moduleInfos": [
        {
            "enabled": "(boolean) 是否被启用，若未被启用，则不会填充名字等相关信息",
            "moduleId": "(string) 模块ID-由商品类型加自增ID",
            "moduleName": "(string) 模块名称",
            "moduleNo": "(string) 模块编号-用于商品专区",
            "moduleProductId": "(integer) 模块商品ID",
            "moduleType": "(integer) 模块类型",
            "productNo": "(string) 商品编号",
            "subModuleType": "(integer) 模块子类型-如热门商品底下有2种"
        }
    ],
    "productId": "(integer) 商品ID",
    "productName": "(string) 商品名称",
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
    "soldData": [
        {
            "countLast7": "(integer) undefined",
            "fromType": "(integer) undefined"
        }
    ],
    "soldTotalLast7": "(integer) 7天总销量"
}
*/



/**
 * 获取第三方分类信息    /v1/manage/product/thirdCatList
 *
 * @params      { Integer  }      parentId                      父类id
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageProductThirdCatListV1({
    params: {
        parentId: '1',
        page: '1',
        limit: '5000',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "categoryId": "(integer) 分类id",
            "name": "(string) 分类名称"
        }
    ]
}
*/



/**
 * 获取第三方单品列表    /v1/manage/product/thirdSkuList
 *
 * @params      { String   }      searchTxt                     第三方SkuId
 * @params      { Integer  }      typeCode                      合作方代号，默认京东10
 * @params      { String   }      categoryId                    第三方分类id
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageProductThirdSkuListV1({
    params: {
        searchTxt: 'undefined',
        typeCode: '10',
        categoryId: '1316;1625;1662',
        page: '1',
        limit: '20',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "contractPrice": "(number) 协议价格",
            "is7ToReturn": "(integer) 是否支持7天无理由退换，1支持 0不支持",
            "thirdCategoryId": "(string) 第三方分类ID",
            "thirdPrice": "(number) 第三方售卖价格",
            "thirdSkuId": "(string) 第三方SKUId",
            "title": "(string) 商品名称"
        }
    ]
}
*/



/**
 * 增加／修改自营商品详情    /v1/manage/product/upsertNBProduct
 *
 * @params      { Object   }      productDTO                    productDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageProductUpsertNBProductV1({
    data: {
        autoId: '(integer) 自增主键',
        description: '(string) 商品描述',
        detailContent: '(string) 商品详细描述',
        images: [],
        invoiceProductCode: '(string) 发票商品编码',
        invoiceProductName: '(string) 发票商品名称',
        name: '(string) 商品名称',
        productAttrs: [{
        	autoId: '(integer) 自增长主键',
        	name: '(string) 商品规格名称',
        	values: [{
        		autoId: '(integer) 自增长主键',
        		productAttributeId: '(integer) 对应商品规格Id',
        		value: '(string) 值',
        	}],
        }],
        shippingFee: '(number) 运费',
        skuList: [{
        	attrs: [{
        		attrId: '(integer) 规格对应id',
        		attrValueId: '(integer) 规格值对应id',
        	}],
        	autoId: '(integer) 自增主键',
        	contractPrice: '(number) 协议价格',
        	imagePath: '(string) 图片路径',
        	is7ToReturn: '(integer) 是否支持7天退货，1：是，0：不支持',
        	price: '(number) 单品价格',
        	productId: '(integer) 产品id',
        	skuNo: '(string) sku编号',
        	status: '(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用',
        	stockCount: '(integer) 库存',
        	subImagePath: '(string) 小图路径',
        	subTitle: '(string) 单品描述',
        	thirdPrice: '(number) 第三方价格（京东价）',
        	thirdSkuId: '(string) 第三方skuId',
        	title: '(string) 单品名称',
        	typeCode: '(integer) 供应商编号',
        }],
        status: '(integer) 状态， 参照ProductStatusEnum -1删除 0未上架 1 已上架',
        typeCode: '(integer) 商品来源 10 京东， 51自营',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 增加／修改自营商品规格    /v1/manage/product/upsertNBProductAttribute
 *
 * @params      { Object   }      attrDTO                       attrDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageProductUpsertNBProductAttributeV1({
    data: {
        autoId: '(integer) 自增长主键',
        name: '(string) 商品规格名称',
        values: [{
        	autoId: '(integer) 自增长主键',
        	productAttributeId: '(integer) 对应商品规格Id',
        	value: '(string) 值',
        }],
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
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
*/



/**
 * 增加／修改自营商品规格值    /v1/manage/product/upsertNBProductAttributeValue
 *
 * @params      { Object   }      attrValueDTO                  attrValueDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageProductUpsertNBProductAttributeValueV1({
    data: {
        autoId: '(integer) 自增长主键',
        productAttributeId: '(integer) 对应商品规格Id',
        value: '(string) 值',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer) 自增长主键",
    "productAttributeId": "(integer) 对应商品规格Id",
    "value": "(string) 值"
}
*/



/**
 * 获取商品详情    /v1/manage/product/{productId}
 *
 * @params      { Integer  }      productId                     产品自增id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageProductProductIdV1({
    params: {
        productId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 更改商品状态    /v1/manage/product/{productId}/status
 *
 * @params      { Integer  }      productId                     产品自增id
 * @params      { Integer  }      status                        状态， -1删除 0未上架 1 已上架
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageProductProductIdStatusV1({
    params: {
        productId: '1',
        status: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 新增活动商品分组    /v1/manage/promotion/addPromotionGroup
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      groupDto                      groupDto
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManagePromotionAddPromotionGroupV1({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增id',
        backgroundCss: '(string) 背景颜色',
        orderIndex: '(integer) 顺序',
        promotionNo: '(string) 活动编号',
        title: '(string) 名称',
        titleImageUrl: '(string) 标题的图片',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer) 自增id",
    "backgroundCss": "(string) 背景颜色",
    "orderIndex": "(integer) 顺序",
    "promotionNo": "(string) 活动编号",
    "title": "(string) 名称",
    "titleImageUrl": "(string) 标题的图片"
}
*/



/**
 * 从商品列表中添加活动商品    /v1/manage/promotion/addPromotionProductsFromProductId
 *
 * @params      { Integer  }      groupId                       活动商品组自增id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      productIdList                 productIdList
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManagePromotionAddPromotionProductsFromProductIdV1({
    params: {
        groupId: '1',
        fromType: '10',
    },
    data: {
        productIdList: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取活动列表(分页)，页号从0开始    /v1/manage/promotion/list
 *
 * @params      { Integer  }      pageIndex                     页码
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      searchText                    活动标题
 * @params      { String   }      createTime                    活动创建时间
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManagePromotionListV1({
    params: {
        pageIndex: '1',
        pageSize: '10',
        status: 'undefined',
        fromType: '10',
        searchText: 'undefined',
        createTime: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 自增id",
            "cgData": [
                {
                    "groupId": "(integer) 分群id",
                    "groupName": "(string) 分群名称"
                }
            ],
            "createTime": "(string) 创建时间",
            "imageUrl": "(string) 活动图片",
            "promotionNo": "(string) 活动编号",
            "seqNo": "(integer) 序号",
            "status": "(integer) 状态 -1 - 删除 0 - 禁用 1 - 启用",
            "title": "(string) 名称"
        }
    ]
}
*/



/**
 * 根据活动商品的自增id获取对应的活动商品    /v1/manage/promotion/promotionProduct/{autoId}
 *
 * @params      { Integer  }      autoId                        活动商品组自增id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManagePromotionPromotionProductAutoIdV1({
    params: {
        autoId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取活动商品组相关的商品列表    /v1/manage/promotion/promotionProductList
 *
 * @params      { Integer  }      groupId                       活动商品分组ID
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManagePromotionPromotionProductListV1({
    params: {
        groupId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "autoId": "(integer) 自增id",
        "contractPrice": "(string) 采购价",
        "imageUrl": "(string) 商品图片",
        "productNo": "(string) 商品编号",
        "promotionPrice": "(string) 活动特价",
        "salePrice": "(string) 销售价",
        "seqNo": "(integer) 序号",
        "status": "(integer) 状态 -1 - 删除 0 - 禁用 1 - 启用",
        "title": "(string) 商品名称"
    }
]
*/



/**
 * 活动上移／下移    /v1/manage/promotion/shiftPromotion
 *
 * @params      { Integer  }      promotionId                   活动的自增id
 * @params      { Integer  }      status                        状态
 * @params      { String   }      searchText                    活动标题
 * @params      { Integer  }      shiftType                     变更类型，-1上移，+1下移
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePromotionShiftPromotionV1({
    params: {
        promotionId: '1',
        status: 'undefined',
        searchText: 'undefined',
        shiftType: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 活动上移／下移    /v1/manage/promotion/shiftPromotionProduct
 *
 * @params      { Integer  }      promotionProductId            活动的自增id
 * @params      { Integer  }      shiftType                     变更类型，-1上移，+1下移
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePromotionShiftPromotionProductV1({
    params: {
        promotionProductId: '1',
        shiftType: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改活动商品详情（售价、库存）    /v1/manage/promotion/updatePromotionProduct
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      dto                           dto
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManagePromotionUpdatePromotionProductV1({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增id',
        discountPeriods: '(string) 免息期数',
        imageUrl: '(string) 预览图链接',
        newComersOnly: '(boolean) 新人专享',
        productId: '(integer) 商品ID',
        productNo: '(string) 商品编号',
        quota: '(integer) 每人限购数量',
        skuList: [{
        	attributeMap: {},
        	autoId: '(integer) 自增主键',
        	contractPrice: '(number) 协议价格',
        	imagePath: '(string) 图片路径',
        	is7ToReturn: '(integer) 是否支持7天退货，1：是，0：不支持',
        	marketPrice: '(number) 市场价格',
        	marketPriceGap: '(number) 市场价格调整幅度',
        	marketPriceRate: '(number) 市场价格浮动比例',
        	marketPriceRateType: '(integer) 市场价格类型',
        	operationPrice: '(number) 运营价格',
        	operationPriceGap: '(number) 运营价格调整幅度 ',
        	operationPriceRate: '(number) 运营价格浮动比例 %n',
        	operationPriceRateType: '(integer) 运营价格类型',
        	price: '(number) 单品价格',
        	productId: '(integer) 产品id',
        	skuId: '(integer) skuId',
        	skuNo: '(string) sku编号',
        	status: '(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用',
        	subImagePath: '(string) 小图路径',
        	subTitle: '(string) 单品描述',
        	thirdPrice: '(number) 第三方价格（京东价）',
        	thirdSkuId: '(string) 第三方skuId',
        	title: '(string) 单品名称',
        	typeCode: '(integer) 供应商编号',
        	winningPrice: '(number) 中奖价',
        }],
        stockCount: '(integer) 限卖数量',
        supportCoupon: '(boolean) 是否支持优惠券',
        tag: '(string) 标签',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改活动商品组状态    /v1/manage/promotion/updatePromotionProductGroupStatus
 *
 * @params      { Integer  }      autoId                        活动商品组自增id
 * @params      { Integer  }      status                        新的状态 -1 删除 0 禁用 1启用
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePromotionUpdatePromotionProductGroupStatusV1({
    params: {
        autoId: '1',
        status: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改活动商品的状态    /v1/manage/promotion/updatePromotionProductStatus
 *
 * @params      { Integer  }      promotionProductId            活动商品自增id
 * @params      { Integer  }      status                        状态 -1 删除 0 禁用 1启用
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManagePromotionUpdatePromotionProductStatusV1({
    params: {
        promotionProductId: '1',
        status: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改／增加活动详情    /v1/manage/promotion/upsertPromotion
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      promotionMDTO                 promotionMDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManagePromotionUpsertPromotionV1({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增id',
        backgroundCss: '(string) 背景颜色',
        backgroundCssEnd: '(string) 背景颜色-渐变色',
        backgroundImageUrl: '(string) 背景图片',
        bottomBannerImageUrl: '(string) 底部广告图片链接',
        bottomBannerLinkType: '(integer) 底部广告跳转类型，1 - 壳内跳转链接， 2 - 壳外跳转链接',
        bottomBannerLinkUrl: '(string) 底部广告跳转链接',
        cgData: [{
        	groupId: '(integer) 分群id',
        	groupName: '(string) 分群名称',
        }],
        couponBackgroundCss: '(string) 优惠券颜色',
        couponBackgroundImageUrl: '(string) 优惠券背景图片',
        couponTitle: '(string) 优惠券标题',
        imageUrl: '(string) 活动图片',
        productGroups: [{
        	autoId: '(integer) 自增id',
        	backgroundCss: '(string) 背景颜色',
        	orderIndex: '(integer) 顺序',
        	promotionNo: '(string) 活动编号',
        	title: '(string) 名称',
        	titleImageUrl: '(string) 标题的图片',
        }],
        promotionNo: '(string) 活动编号',
        showType: '(integer) 展示类型，1首页展示 2活动页展示',
        status: '(integer) 活动状态 -1 - 删除 0 - 启用  1 - 禁用',
        subTitle: '(string) 推荐文案',
        tag: '(string) 活动标签',
        title: '(string) 活动标题',
        topBannerImageUrl: '(string) 活动图片',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取活动详情    /v1/manage/promotion/{autoId}
 *
 * @params      { Integer  }      autoId                        活动自增id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManagePromotionAutoIdV1({
    params: {
        autoId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取所有对账信息    /v1/manage/reconciliation/file
 *
 * @params      { String   }      startDate                     开始日期，格式yyyy-MM-dd
 * @params      { String   }      endDate                       结束日期，格式yyyy-MM-dd
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageReconciliationFileV1({
    params: {
        startDate: '2018-03-01',
        endDate: '2018-04-01',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "base64Str": "(string) undefined",
    "fileName": "(string) undefined"
}
*/



/**
 * 获取京东对账信息    /v1/manage/reconciliation/jdAccountLogs
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { String   }      startDate                     开始日期，格式yyyy-MM-dd
 * @params      { String   }      endDate                       结束日期，格式yyyy-MM-dd
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageReconciliationJdAccountLogsV1({
    params: {
        page: '0',
        limit: '1000',
        startDate: '2018-03-01',
        endDate: '2018-04-01',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "accountType": "(integer) 账户类型",
            "amount": "(number) 交易金额",
            "autoId": "(integer) 自增id",
            "balance": "(number) 账户余额",
            "createDate": "(string) 交易时间",
            "jdId": "(integer) 京东序列号",
            "orderId": "(string) 京东订单号",
            "orderNo": "(string) 订单编号",
            "pin": "(string) 京东账号",
            "productCategory": "(string) 商品分类",
            "productName": "(string) 商品名称",
            "remark": "(string) 备注",
            "tradeNo": "(integer) 京东交易流水号",
            "tradeType": "(integer) 交易类型编号",
            "tradeTypeName": "(string) 交易类型名称"
        }
    ]
}
*/



/**
 * 获取所有对账信息    /v1/manage/reconciliation/orderInfo
 *
 * @params      { Object   }      orderNo                       orderNo
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageReconciliationOrderInfoV1({
    data: {
        orderNo: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "contractPrice": "(string) undefined",
        "fromTypeName": "(string) undefined",
        "jdOrderId": "(string) 供应商订单ID",
        "orderNo": "(string) undefined",
        "productSupplierName": "(string) 供应商类型",
        "receiveTime": "(string) undefined"
    }
]
*/



/**
 * 获取订单对账信息    /v1/manage/reconciliation/orders
 *
 * @params      { Integer  }      type                          状态  1 - 支付成功, 2 - 收货成功, 3 - 退款成功
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { String   }      startDate                     开始日期，格式yyyy-MM-dd
 * @params      { String   }      endDate                       结束日期，格式yyyy-MM-dd
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageReconciliationOrdersV1({
    params: {
        type: '0',
        page: '0',
        limit: '1000',
        startDate: '2018-03-01',
        endDate: '2018-04-01',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "contractPrice": "(string) 商品进货单价",
            "couponAmount": "(string) 优惠券金额",
            "incomeAmount": "(string) 实收金额",
            "jdAccount": "(string) 京东账号",
            "jdBizType": "(string) 京东业务类型",
            "jdOrderAmount": "(string) 京东交易金额",
            "jdOrderNo": "(string) 京东订单编号",
            "merchantOrderNo": "(string) 51流水号",
            "orderAmount": "(string) 订单金额",
            "orderNo": "(string) 订单编号",
            "orderStatus": "(string) 订单状态",
            "payAmount": "(string) 用户实付金额",
            "paySuccessTime": "(string) 支付成功时间",
            "payType": "(integer) 支付渠道 1-雅酷 2信用花",
            "productCategory": "(string) 商品分类",
            "productName": "(string) 入库商品名称",
            "refundAmount": "(string) 退款金额",
            "refundCreateTime": "(string) 退款申请时间",
            "refundJdAmount": "(string) 京东退款金额",
            "refundJdBizType": "(string) 京东退款类型",
            "refundJdShippingFee": "(string) 京东退款邮费补贴",
            "refundMerchantNo": "(string) 51退款流水号",
            "refundSuccessTime": "(string) 退款成功时间",
            "saleCount": "(integer) 数量",
            "salePrice": "(string) 商品销售单价",
            "skuNo": "(string) 入库单品编号",
            "stages": "(integer) 分期数",
            "successTime": "(string) 首列显示的时间，如支付成功时间／收货成功时间／退款成功时间",
            "thirdPartyOrderNo": "(string) 渠道支付流水号",
            "thirdPartyRefundNo": "(string) 渠道退款流水号",
            "tradeCharge": "(string) 交易手续费",
            "userId": "(integer) 买家用户ID"
        }
    ]
}
*/



/**
 * 计算订单价格    /v1/order/calculatePrice/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { Integer  }      couponId                      优惠券ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderCalculatePriceUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072446623',
        couponId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(number) undefined"
*/



/**
 * 检查订单是否符合支付条件    /v1/order/check/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderCheckUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponId": "(integer) 优惠券ID",
    "discountPeriods": "(string) 免息期数",
    "orderPrice": "(number) 订单价格",
    "orderPromotionType": "(integer) 订单促销类型(0:普通，1:秒杀)",
    "orderStatus": "(integer) 订单状态",
    "payDisableMsg": "(string) 不允许支付的消息",
    "payExpireTime": "(string) 剩余支付时间(XX小时XX分钟)",
    "payId": "(integer) 收银台支付流水号",
    "productSupplierType": "(integer) 供应商编号"
}
*/



/**
 * 根据类别统计订单数量    /v1/order/count/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      orderCategory                 订单类别(0:待付款,1:待收货,2:已完成,3:待发货,4:退款/售后)
 * @params      { String   }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 * @params      { String   }      X-FROM-TYPE                   投放来源
 */
InstallmentMall.getOrderCountUserIdV1({
    params: {
        userId: '150001810',
        orderCategory: '0',
    },
    headers: {
        fromType: '10', //来源
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
        'X-FROM-TYPE': '10', //投放来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取订单VO    /v1/order/get/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderGetUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "afterSaleRemark": "(string) 售后备注",
    "couponPrice": "(number) 优惠券抵扣",
    "discountPrice": "(number) 贴息优惠金额",
    "fullAddress": "(string) 完整地址",
    "hasAfterSale": "(boolean) 是否有售后详情",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer) 发票类型（1:电子普通发票）",
    "orderCategory": "(integer) 订单类别",
    "orderDetailNo": "(string) 订单详情编号",
    "orderNo": "(string) 订单编号",
    "orderPrice": "(number) 订单价格",
    "orderTime": "(string) 下单时间",
    "orderTrackList": [
        {
            "event": "(string) 事件描述",
            "operator": "(string) 操作者",
            "time": "(string) 时间(yyyy-MM-dd HH:mm:ss)"
        }
    ],
    "paymentPrice": "(number) 应付金额",
    "paymentTime": "(string) 支付时间",
    "paymentType": "(string) 支付方式",
    "productName": "(string) 商品名称",
    "productPicUrl": "(string) 商品图片URL",
    "productPrice": "(number) 商品价格",
    "receiverName": "(string) 收货人姓名",
    "receiverPhone": "(string) 收货人手机号",
    "skuAttributes": "(string) 所选SKU属性集合",
    "skuCount": "(integer) SKU数量",
    "skuNo": "(string) SKU编号",
    "skuPrice": "(number) SKU单价",
    "userId": "(integer) 51用户ID"
}
*/



/**
 * 获取订单    /v1/order/getOrder/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderGetOrderUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "cityCode": "(string) 城市编码",
    "countyCode": "(string) 区县编码",
    "couponId": "(integer) 优惠券ID",
    "couponName": "(string) 优惠券名称",
    "couponPrice": "(number) 优惠券抵扣",
    "couponType": "(integer) 优惠券类型（0:无优惠券,1:新人专享(废除),2:票券系统优惠券）",
    "deliverySupplierType": "(integer) 物流提供方类型",
    "detailAddress": "(string) 详细地址",
    "freight": "(number) 运费",
    "fromType": "(integer) 投放来源",
    "fullAddress": "(string) 完整地址",
    "invoiceApplySerialNo": "(string) 发票申请流水号",
    "invoiceCompanyName": "(string) 单位名称",
    "invoiceCompanyTaxCode": "(string) 单位税号",
    "invoiceStatus": "(integer) 发票状态",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer) 发票类型（1:电子普通发票）",
    "invoiceUrl": "(string) 电子发票链接",
    "orderNo": "(string) 订单编号",
    "orderPrice": "(number) 订单价格( = 商品价格 - 优惠券抵扣 — 运费)",
    "orderStatus": "(integer) 订单状态",
    "orderTime": "(string) 下单时间",
    "payId": "(integer) 收银台支付流水号",
    "payStatus": "(integer) 支付状态",
    "payType": "(integer) 支付方式",
    "productPrice": "(number) 商品价格( = sku1单价 * sku1数量 + sku2单价 * sku2数量 + ...)",
    "productSupplierType": "(integer) 商品提供方类型",
    "promotionType": "(integer) 促销类型(0:普通,1:秒杀)",
    "provinceCode": "(string) 省份编码",
    "receiverName": "(string) 收货人姓名",
    "receiverPhone": "(string) 收货人手机号",
    "refundStatus": "(integer) 退款状态",
    "regionCodeProviderType": "(integer) 地区编码提供方",
    "subOrderList": [
        {
            "afterSaleStatus": "(integer) 售后状态",
            "afterSaleType": "(integer) 售后类型",
            "couponPrice": "(number) 优惠券抵扣",
            "couponType": "(integer) 优惠券类型",
            "freight": "(number) 运费",
            "orderDetailNo": "(string) 订单详情编号",
            "orderPrice": "(number) 订单价格",
            "productAfterSaleRemark": "(string) 商品售后描述",
            "productName": "(string) 商品名称",
            "productNo": "(string) 商品运营编号",
            "productPicUrl": "(string) 商品图片URL",
            "productPrice": "(number) 商品价格",
            "refundStatus": "(integer) 退款状态",
            "skuAttributes": "(string) 所选SKU属性集合",
            "skuCount": "(integer) SKU数量",
            "skuNo": "(string) SKU编号",
            "skuPrice": "(number) SKU单价",
            "thirdPartySkuNo": "(string) 第三方SKU编号"
        }
    ],
    "thirdPartyOrderNo": "(string) 第三方订单编号",
    "townCode": "(string) 乡镇编码",
    "userId": "(integer) 用户ID"
}
*/



/**
 * 获取成功支付的订单数，并剔除历史首笔    /v1/order/getPaidNumExceptFirst/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      beginTimestamp                起始时间戳
 * @params      { Integer  }      endTimestamp                  结束时间戳
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderGetPaidNumExceptFirstUserIdV1({
    params: {
        userId: '150001810',
        beginTimestamp: 'undefined',
        endTimestamp: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取预订单    /v1/order/getPreOrder/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderGetPreOrderUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072446623',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponPrice": "(number) 优惠券抵扣",
    "couponType": "(integer) 优惠券类型（0:无可用优惠券,1:新人专享）",
    "deliverySupplierType": "(integer) 物流提供方类型（10:京东）",
    "freight": "(number) 运费",
    "invoiceType": "(integer) 发票类型（1:电子普通发票）",
    "orderNo": "(string) 订单编号",
    "orderPrice": "(number) 订单价格(= 商品价格 - 优惠券抵扣 + 运费)",
    "productPrice": "(number) 商品价格(= sku单价 * sku数量)",
    "receiverAddressId": "(integer) 收货地址ID",
    "skuList": [
        {
            "productAfterSaleRemark": "(string) 商品售后描述",
            "productName": "(string) 商品名称",
            "productPicUrl": "(string) 商品图片URL",
            "productPrice": "(number) 商品价格",
            "skuAttributes": "(string) 所选SKU属性集合",
            "skuCount": "(integer) SKU数量",
            "skuNo": "(string) SKU编号",
            "skuPrice": "(number) SKU单价"
        }
    ],
    "userId": "(integer) 51用户ID"
}
*/



/**
 * 获取简要订单    /v1/order/getSimple/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderGetSimpleUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponId": "(integer) 优惠券ID",
    "discountPeriods": "(string) 免息期数",
    "orderPrice": "(number) 订单价格",
    "orderPromotionType": "(integer) 订单促销类型(0:普通，1:秒杀)",
    "orderStatus": "(integer) 订单状态",
    "payDisableMsg": "(string) 不允许支付的消息",
    "payExpireTime": "(string) 剩余支付时间(XX小时XX分钟)",
    "payId": "(integer) 收银台支付流水号",
    "productSupplierType": "(integer) 供应商编号"
}
*/



/**
 * 获取订单VO    /v1/order/getV2/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderGetV2UserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "afterSaleRemark": "(string) 售后备注",
    "couponPrice": "(number) 优惠券抵扣",
    "discountPrice": "(number) 贴息优惠金额",
    "fullAddress": "(string) 完整地址",
    "hasAfterSale": "(boolean) 是否有售后详情",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer) 发票类型（1:电子普通发票）",
    "orderCategory": "(integer) 订单类别",
    "orderDetailNo": "(string) 订单详情编号",
    "orderNo": "(string) 订单编号",
    "orderPrice": "(number) 订单价格",
    "orderTime": "(string) 下单时间",
    "orderTrackList": [
        {
            "event": "(string) 事件描述",
            "operator": "(string) 操作者",
            "time": "(string) 时间(yyyy-MM-dd HH:mm:ss)"
        }
    ],
    "paymentPrice": "(number) 应付金额",
    "paymentTime": "(string) 支付时间",
    "paymentType": "(string) 支付方式",
    "productName": "(string) 商品名称",
    "productPicUrl": "(string) 商品图片URL",
    "productPrice": "(number) 商品价格",
    "receiverName": "(string) 收货人姓名",
    "receiverPhone": "(string) 收货人手机号",
    "skuAttributes": "(string) 所选SKU属性集合",
    "skuCount": "(integer) SKU数量",
    "skuNo": "(string) SKU编号",
    "skuPrice": "(number) SKU单价",
    "userId": "(integer) 51用户ID"
}
*/



/**
 * 提交发票抬头    /v1/order/invoiceTitle/submit
 *
 * @params      { Object   }      invoiceTitleSubmitDTO                            发票抬头提交请求
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOrderInvoiceTitleSubmitV1({
    data: {
        invoiceCompanyName: '(string) 单位名称',
        invoiceCompanyTaxCode: '(string) 单位税号',
        invoiceTitleCode: '(integer) 发票抬头（1:个人,2:企业）',
        userId: '(integer) 51用户ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取发票抬头    /v1/order/invoiceTitle/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderInvoiceTitleUserIdV1({
    params: {
        userId: '150001810',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "invoiceCompanyName": "(string) 单位名称",
    "invoiceCompanyTaxCode": "(string) 单位税号"
}
*/



/**
 * 获取订单概要列表    /v1/order/list/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      orderCategory                 订单类别(0:待付款,1:待收货,2:已完成,3:待发货,4:退款/售后)
 * @params      { Integer  }      pageIndex                     页码
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { String   }      Authorization                 service token
 * @params      { String   }      X-FROM-TYPE                   投放来源
 */
InstallmentMall.getOrderListUserIdV1({
    params: {
        userId: '150001810',
        orderCategory: '0',
        pageIndex: '1',
        pageSize: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
        'X-FROM-TYPE': '10', //投放来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "cashierPay": "(boolean) 是否为即刻有收银台支付",
            "invoiceUrl": "(string) 电子发票链接",
            "orderNo": "(string) 订单编号",
            "orderPrice": "(number) 订单金额",
            "orderStatus": "(integer) 订单状态",
            "orderStatusDescribe": "(string) 订单状态描述",
            "orderTime": "(string) 下单时间",
            "payId": "(integer) 订单支付流水ID",
            "paymentStatus": "(integer) 支付状态(0:初始化,1:成功,2:失败,3:处理中)",
            "productPrice": "(number) 商品金额",
            "productSupplierType": "(integer) 商品提供方类型（10:京东）",
            "showInvoiceEntry": "(boolean) 是否展示电子发票入口",
            "subOrderDTOList": [
                {
                    "detailLinkUrl": "(string) 商品详情链接URL：目前只针对oto订单",
                    "productName": "(string) 商品名称",
                    "productPicUrl": "(string) 商品图片URL",
                    "productPrice": "(number) 商品金额( = sku价格 * sku数量)",
                    "skuAttributes": "(string) 商品属性",
                    "skuCount": "(integer) 商品数量",
                    "skuNo": "(string) sku编号",
                    "skuPrice": "(number) SKU单价"
                }
            ]
        }
    ]
}
*/



/**
 * 获取订单    /v1/order/listOrderForAntifraud
 *
 * @params      { Object   }      orderAntifraudDTO             参数
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOrderListOrderForAntifraudV1({
    data: {
        fullAddress: '(string) 完整地址',
        orderNo: '(string) 订单编号',
        orderTime: '(string) 下单时间',
        pageIndex: '(integer) 页码',
        pageSize: '(integer) 每页记录数',
        receiverPhone: '(string) 收货人手机号',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) undefined",
            "cityCode": "(string) undefined",
            "countyCode": "(string) undefined",
            "couponId": "(integer) undefined",
            "couponName": "(string) undefined",
            "couponPrice": "(number) undefined",
            "couponType": "(integer) undefined",
            "deliverySupplierType": "(integer) undefined",
            "detailAddress": "(string) undefined",
            "expressNo": "(string) undefined",
            "freight": "(number) undefined",
            "fromType": "(integer) undefined",
            "fullAddress": "(string) undefined",
            "invoiceCompanyName": "(string) undefined",
            "invoiceCompanyTaxCode": "(string) undefined",
            "invoiceStatus": "(integer) undefined",
            "invoiceTitleCode": "(integer) undefined",
            "invoiceType": "(integer) undefined",
            "invoiceUrl": "(string) undefined",
            "orderNo": "(string) undefined",
            "orderPrice": "(number) undefined",
            "orderStatus": "(integer) undefined",
            "orderTime": "(string) undefined",
            "orderType": "(integer) undefined",
            "payId": "(integer) undefined",
            "payStatus": "(integer) undefined",
            "payType": "(integer) undefined",
            "productPrice": "(number) undefined",
            "productSupplierType": "(integer) undefined",
            "promotionType": "(integer) undefined",
            "provinceCode": "(string) undefined",
            "receiverAddressId": "(integer) undefined",
            "receiverName": "(string) undefined",
            "receiverPhone": "(string) undefined",
            "refundStatus": "(integer) undefined",
            "regionCodeProviderType": "(integer) undefined",
            "subFromType": "(integer) undefined",
            "thirdPartyOrderNo": "(string) undefined",
            "townCode": "(string) undefined",
            "userId": "(integer) undefined"
        }
    ]
}
*/



/**
 * 用来接收oto订单支付信息    /v1/order/otosaas/pay/info
 *
 * @params      { Object   }      otoPayInfoDTO                 otoPayInfoDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOrderOtosaasPayInfoV1({
    data: {
        amount: '(string) 订单金额，单位：分',
        expireTime: '(string) 订单失效时间，格式yyyyMMddHHmmss，不传表示无失效时间',
        notifyUrl: '(string) 支付结果异步回调地址',
        orderId: '(string) OTO SaaS商品订单号',
        orderName: '(string) OTO SaaS商品订单号',
        payOrderId: '(string) OTO SaaS支付订单号',
        payResultUrl: '(string) 支付完成后跳转页面地址，注：若服务场景外进入，需在url中带入联合登录参数',
        sign: '(string) 参数签名（OTO SaaS用生成的私钥签名，合作方用OTO SaaS提供的公钥验签）',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 预提交订单    /v1/order/preSubmit/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Object   }      orderPreSubmitDTO             订单预提交请求
 * @params      { String   }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 * @params      { String   }      X-FROM-TYPE                   投放来源
 */
InstallmentMall.postOrderPreSubmitUserIdV1({
    params: {
        userId: '150001810',
    },
    data: {
        promotionType: '(integer) 促销类型(0:普通,1:秒杀,2:活动专区)',
        receiverAddressId: '(integer) 收货地址ID',
        skuList: [{
        	productNo: '(string) 商品运营编号',
        	skuAttributes: '(string) 所选SKU属性集合',
        	skuCount: '(integer) SKU数量',
        	skuNo: '(string) SKU编号',
        }],
    },
    headers: {
        fromType: '10', //来源
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
        'X-FROM-TYPE': '10', //投放来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 查询账户余额    /v1/order/queryBalance/{typeCode}
 *
 * @params      { Integer  }      typeCode                      typeCode
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderQueryBalanceTypeCodeV1({
    params: {
        typeCode: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(number) undefined"
*/



/**
 * 保存离开收银台的理由    /v1/order/saveExitPayReason
 *
 * @params      { Object   }      exitPayReasonDTO              离开收银台的理由
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOrderSaveExitPayReasonV1({
    data: {
        exitPayReason: '(string) undefined',
        exitPayReasonCode: '(integer) undefined',
        orderNo: '(string) undefined',
        userId: '(integer) undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 提交订单    /v1/order/submit/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Object   }      orderSubmitDTO                订单提交请求
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOrderSubmitUserIdV1({
    params: {
        userId: '150001810',
    },
    data: {
        couponId: '(integer) 优惠券号',
        couponType: '(integer) 优惠券类型（0:无可用优惠券,1:新人专享(废除),2:票券系统优惠券）',
        extInfo: '(string) 支付信息',
        fullAddress: '(string) 完整地址',
        invoiceCompanyName: '(string) 单位名称',
        invoiceCompanyTaxCode: '(string) 单位税号',
        invoiceTitleCode: '(integer) 发票抬头（1:个人,2:企业）',
        invoiceType: '(integer) 发票类型（1:电子普通发票）',
        preOrderNo: '(string) 预订单编号',
        receiverAddressId: '(integer) 收货地址ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "extInfo": "(string) 支付消息",
    "isSuccess": "(boolean) 是否成功",
    "message": "(string) 错误消息",
    "orderNo": "(string) 订单号(为空时说明下单失败)",
    "payId": "(integer) 支付流水号",
    "payNo": "(string) 真正支付流水号",
    "retry": "(boolean) 是否可重试"
}
*/



/**
 * 获取订单物流信息    /v1/order/track/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderTrackUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "deliverySupplierType": "(integer) 物流提供方类型(10:京东)",
    "orderNo": "(string) 订单号",
    "orderTrackList": [
        {
            "event": "(string) 事件描述",
            "operator": "(string) 操作者",
            "time": "(string) 时间(yyyy-MM-dd HH:mm:ss)"
        }
    ]
}
*/



/**
 * 提供给oto查询订单详情使用    /v1/otosaas/order/info
 *
 * @params      { String   }      orderId                       oto订单号
 * @params      { String   }      sign                          签名
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOtosaasOrderInfoV1({
    params: {
        orderId: 'undefined',
        sign: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {
        "amount": "(integer) 订单支付金额",
        "orderId": "(string) oto saas 订单号",
        "payOrderId": "(string) TO SaaS支付订单号",
        "payStatus": "(integer) 订单支付状态",
        "payStatusDescribe": "(string) 订单支付状态信息描述"
    },
    "message": "(string) undefined"
}
*/



/**
 * 退款订单信息接口    /v1/otosaas/order/refund
 *
 * @params      { Object   }      otoRefundInfoDTO              otoRefundInfoDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOtosaasOrderRefundV1({
    data: {
        notifyUrl: '(string) 退款结果异步回调地址，异步回调退款结果才需传入',
        orderId: '(string) OTO SaaS商品订单号',
        refundAmount: '(integer) 退款金额，单位：分',
        refundOrderId: '(string) OTO SaaS退款订单号',
        sign: '(string) 参数签名（（OTO SaaS用生成的私钥签名，合作方用OTO SaaS提供的公钥验签）',
        timestamp: '(integer) 时间戳，毫秒',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "message": "(string) undefined"
}
*/



/**
 * oto订单状态变更回调通知接口    /v1/otosaas/order/status
 *
 * @params      { Object   }      otoOrderStatusDTO             otoOrderStatusDTO
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOtosaasOrderStatusV1({
    data: {
        displayStatus: '(string) 订单状态字面值',
        orderId: '(string) 订单ID',
        price: '(string) 订单支付价格，对于那些先服务后支付的订单，会在后续计费完成后推送支付金额',
        sign: '(string) 签名参数',
        status: '(integer) 订单状态',
        timestamp: '(integer) 签名时间戳',
        userId: '(string) 用户ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "message": "(string) undefined"
}
*/



/**
 * 获取活动列表(分页)，页号从0开始    /v1/promotionProduct/listByPromotionNo
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        用户id
 * @params      { String   }      promotionNo                   活动编号
 * @params      { Integer  }      orderIndex                    group的添加顺序
 * @params      { Integer  }      pageIndex                     页码
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getPromotionProductListByPromotionNoV1({
    params: {
        latitude: '30',
        longitude: '120',
        userId: '180000029',
        promotionNo: 'undefined',
        orderIndex: '1',
        pageIndex: '0',
        pageSize: '10',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "backgroundCss": "(string) 背景css",
    "backgroundImageUrl": "(string) 背景图片链接",
    "bannerImageUrl": "(string) 顶部活动图",
    "bottomBanner": {
        "entranceId": "(integer) entranceId，前端埋点使用",
        "imageUrl": "(string) 图片链接",
        "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string) 跳转链接，可能为空"
    },
    "productGroups": [
        {
            "backgroundCss": "(string) 背景颜色",
            "products": [
                {
                    "allStockCount": "(integer) 全部库存",
                    "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                    "imageUrl": "(string) 商品图片",
                    "installmentPrice": "(number) 最低分期价格",
                    "marketPrice": "(number) 市场价",
                    "price": "(number) 商品价格",
                    "process": "(number) 进度",
                    "productNo": "(string) 商品编号",
                    "stockCount": "(integer) 剩余库存",
                    "subTitle": "(string) 副标题（商品描述）",
                    "tag": "(string) 标签",
                    "title": "(string) 主标题（商品名称）"
                }
            ],
            "title": "(string) 商品分组标题",
            "titleImageUrl": "(string) 标题的图片"
        }
    ],
    "tag": "(string) 活动标签",
    "title": "(string) 标题"
}
*/



/**
 * 实名查询及注册，若用户实名信息已存在，则返回是否匹配，若用户实名信息不存在，则尝试注册    /v1/realName/checkAndRegister/{userId}/
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      trueName                      姓名
 * @params      { String   }      idCard                        身份证号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postRealNameCheckAndRegisterUserIdV1({
    params: {
        userId: '150001810',
        trueName: 'undefined',
        idCard: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 实名查询及注册，若用户实名信息已存在，则返回是否匹配，若用户实名信息不存在，则尝试注册    /v1/realName/checkAndRegisterEx/{userId}/
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      trueName                      姓名
 * @params      { String   }      idCard                        身份证号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postRealNameCheckAndRegisterExUserIdV1({
    params: {
        userId: '150001810',
        trueName: 'undefined',
        idCard: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "idNo": "(string) undefined",
    "status": "(integer) undefined",
    "trueName": "(string) undefined"
}
*/



/**
 * 根据Userid获取实名信息    /v1/realName/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getRealNameUserIdV1({
    params: {
        userId: '150001810',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 底部广告列表    /v1/salesProduct/bottomBanners
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductBottomBannersV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "entranceId": "(integer) entranceId，前端埋点使用",
        "imageUrl": "(string) 图片链接",
        "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string) 跳转链接，可能为空"
    }
]
*/



/**
 * 获取特卖商品    /v1/salesProduct/discountProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductDiscountProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "allStockCount": "(integer) 全部库存",
        "alreadyBuy": "(integer) 已抢人数-目前已弃用",
        "imageUrl": "(string) 商品图片",
        "installmentPrice": "(number) 最低分期价格",
        "marketPrice": "(number) 市场价",
        "price": "(number) 商品价格",
        "process": "(number) 进度",
        "productNo": "(string) 商品编号",
        "stockCount": "(integer) 剩余库存",
        "subTitle": "(string) 副标题（商品描述）",
        "tag": "(string) 标签",
        "title": "(string) 主标题（商品名称）"
    }
]
*/



/**
 * 猜你喜欢商品列表    /v1/salesProduct/favoriteProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductFavoriteProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "allStockCount": "(integer) 全部库存",
        "alreadyBuy": "(integer) 已抢人数-目前已弃用",
        "imageUrl": "(string) 商品图片",
        "installmentPrice": "(number) 最低分期价格",
        "marketPrice": "(number) 市场价",
        "price": "(number) 商品价格",
        "process": "(number) 进度",
        "productNo": "(string) 商品编号",
        "stockCount": "(integer) 剩余库存",
        "subTitle": "(string) 副标题（商品描述）",
        "tag": "(string) 标签",
        "title": "(string) 主标题（商品名称）"
    }
]
*/



/**
 * 导购banner列表    /v1/salesProduct/guideBanners
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductGuideBannersV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "entranceId": "(integer) entranceId，前端埋点使用",
        "imageUrl": "(string) 图片链接",
        "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string) 跳转链接，可能为空"
    }
]
*/



/**
 * 获取热门商品列表    /v1/salesProduct/hotProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductHotProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        userId: '180000029',
        page: '1',
        limit: '20',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "allStockCount": "(integer) 全部库存",
            "alreadyBuy": "(integer) 已抢人数-目前已弃用",
            "imageUrl": "(string) 商品图片",
            "installmentPrice": "(number) 最低分期价格",
            "marketPrice": "(number) 市场价",
            "price": "(number) 商品价格",
            "process": "(number) 进度",
            "productNo": "(string) 商品编号",
            "stockCount": "(integer) 剩余库存",
            "subTitle": "(string) 副标题（商品描述）",
            "tag": "(string) 标签",
            "title": "(string) 主标题（商品名称）"
        }
    ]
}
*/



/**
 * 获取秒杀商品以及Banner    /v1/salesProduct/indexInfo
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductIndexInfoV1({
    params: {
        latitude: '30',
        longitude: '120',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "banners": [
        {
            "extraLink": "(string) 跳转链接，可能为空",
            "imagePath": "(string) 图片链接"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer) 开始时间",
            "expireTime": "(integer) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer) 全部库存",
                    "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                    "imageUrl": "(string) 商品图片",
                    "installmentPrice": "(number) 最低分期价格",
                    "marketPrice": "(number) 市场价",
                    "price": "(number) 商品价格",
                    "process": "(number) 进度",
                    "productNo": "(string) 商品编号",
                    "stockCount": "(integer) 剩余库存",
                    "subTitle": "(string) 副标题（商品描述）",
                    "tag": "(string) 标签",
                    "title": "(string) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer) 系统时间"
        }
    ]
}
*/



/**
 * 获取秒杀商品、精选专题以及Banner    /v1/salesProduct/indexInfoV2
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductIndexInfoV2V1({
    params: {
        latitude: '30',
        longitude: '120',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "banners": [
        {
            "entranceId": "(integer) entranceId，前端埋点使用",
            "imageUrl": "(string) 图片链接",
            "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string) 跳转链接，可能为空"
        }
    ],
    "newUser": "(boolean) newUser",
    "promotions": [
        {
            "imageUrl": "(string) 图标图片链接",
            "promotionNo": "(string) 专题编号",
            "subTitle": "(string) 副标题",
            "tag": "(string) 标签",
            "title": "(string) 主标题"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer) 开始时间",
            "expireTime": "(integer) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer) 全部库存",
                    "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                    "imageUrl": "(string) 商品图片",
                    "installmentPrice": "(number) 最低分期价格",
                    "marketPrice": "(number) 市场价",
                    "price": "(number) 商品价格",
                    "process": "(number) 进度",
                    "productNo": "(string) 商品编号",
                    "stockCount": "(integer) 剩余库存",
                    "subTitle": "(string) 副标题（商品描述）",
                    "tag": "(string) 标签",
                    "title": "(string) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer) 系统时间"
        }
    ]
}
*/



/**
 * 获取秒杀商品、精选专题以及Banner    /v1/salesProduct/indexInfoV3
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductIndexInfoV3V1({
    params: {
        latitude: '30',
        longitude: '120',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "banners": [
        {
            "entranceId": "(integer) entranceId，前端埋点使用",
            "imageUrl": "(string) 图片链接",
            "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string) 跳转链接，可能为空"
        }
    ],
    "newUser": "(boolean) newUser",
    "promotions": [
        {
            "imageUrl": "(string) 图标图片链接",
            "promotionNo": "(string) 专题编号",
            "subTitle": "(string) 副标题",
            "tag": "(string) 标签",
            "title": "(string) 主标题"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer) 开始时间",
            "expireTime": "(integer) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer) 全部库存",
                    "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                    "imageUrl": "(string) 商品图片",
                    "installmentPrice": "(number) 最低分期价格",
                    "marketPrice": "(number) 市场价",
                    "price": "(number) 商品价格",
                    "process": "(number) 进度",
                    "productNo": "(string) 商品编号",
                    "stockCount": "(integer) 剩余库存",
                    "subTitle": "(string) 副标题（商品描述）",
                    "tag": "(string) 标签",
                    "title": "(string) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer) 系统时间"
        }
    ]
}
*/



/**
 * 获取首页秒杀商品    /v1/salesProduct/indexPage/secKillProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductIndexPageSecKillProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "activeTime": "(integer) 开始时间",
        "expireTime": "(integer) 结束时间",
        "products": [
            {
                "allStockCount": "(integer) 全部库存",
                "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                "imageUrl": "(string) 商品图片",
                "installmentPrice": "(number) 最低分期价格",
                "marketPrice": "(number) 市场价",
                "price": "(number) 商品价格",
                "process": "(number) 进度",
                "productNo": "(string) 商品编号",
                "stockCount": "(integer) 剩余库存",
                "subTitle": "(string) 副标题（商品描述）",
                "tag": "(string) 标签",
                "title": "(string) 主标题（商品名称）"
            }
        ],
        "systemTime": "(integer) 系统时间"
    }
]
*/



/**
 * 中部广告列表    /v1/salesProduct/middleBanners
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductMiddleBannersV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "entranceId": "(integer) entranceId，前端埋点使用",
        "imageUrl": "(string) 图片链接",
        "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string) 跳转链接，可能为空"
    }
]
*/



/**
 * 功能banner列表    /v1/salesProduct/otoBanners
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductOtoBannersV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "entranceId": "(integer) entranceId，前端埋点使用",
        "imageUrl": "(string) 图片链接",
        "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string) 跳转链接，可能为空",
        "tag": "(string) 角标，文字",
        "title": "(string) 标题，文字（显示在图标下方）"
    }
]
*/



/**
 * 获取oto saas 产品入口    /v1/salesProduct/otosaas/enter/list
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductOtosaasEnterListV1({
    params: {
        latitude: '30',
        longitude: '120',
        userId: '180000029',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "entranceId": "(string) undefined",
        "iconUrl": "(string) undefined",
        "name": "(string) undefined",
        "open": "(boolean) undefined",
        "orderType": "(string) undefined",
        "routePath": "(string) undefined"
    }
]
*/



/**
 * 获取商品详情    /v1/salesProduct/productDetail
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      receiverAddrId                用户收获地址id
 * @params      { String   }      productNo                     商品编号
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductProductDetailV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        receiverAddrId: '-1',
        productNo: '123456H11',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(integer) 开始时间",
    "bannerImages": [],
    "content": "(string) 商品详情",
    "description": "(string) 商品描述",
    "expireTime": "(integer) 结束时间",
    "installmentPrice": "(number) 分期价格，根据最低价格的单品进行分期计算结果",
    "name": "(string) 商品名称",
    "price": "(number) 单品价格，拥有多个单品的情况下，选取单价最低的",
    "promotionType": "(integer) 商品的推广类型",
    "receiverAddrCode": "(string) 用户地址四级编码",
    "receiverAddrId": "(integer) 用户地址信息id，若用户未选地址信息，则为-1",
    "receiverAddrStr": "(string) 用户地址信息详情，若是根据四级编码返回的，则是地址描述",
    "skuInfos": [
        {
            "afterSaleRemark": "(string) 单品售后描述",
            "imagePath": "(string) 单品大图",
            "installmentPrice": "(number) 单品分期价格",
            "price": "(number) 单品价格",
            "productNo": "(string) 单品对应的产品编号",
            "skuNo": "(string) 单品编号",
            "skuProps": {},
            "stockCount": "(integer) 库存数量",
            "subImagePath": "(string) 单品小图",
            "subTitle": "(string) 单品描述",
            "title": "(string) 单品名称"
        }
    ],
    "supportCoupon": "(boolean) 是否支持优惠券",
    "systemTime": "(integer) 系统当前时间",
    "typeCode": "(integer) 商品供应商",
    "unavailable": "(boolean) 目前是否不可购买"
}
*/



/**
 * 获取商品详情    /v1/salesProduct/productDetailV2
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      receiverAddrId                用户收获地址id
 * @params      { String   }      productNo                     商品编号
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductProductDetailV2V1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        receiverAddrId: '-1',
        productNo: '123456H11',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(integer) 开始时间",
    "bannerImages": [],
    "content": "(string) 商品详情",
    "description": "(string) 商品描述",
    "expireTime": "(integer) 结束时间",
    "installmentPrice": "(number) 分期价格，根据最低价格的单品进行分期计算结果",
    "name": "(string) 商品名称",
    "price": "(number) 单品价格，拥有多个单品的情况下，选取单价最低的",
    "promotionType": "(integer) 商品的推广类型",
    "receiverAddrCode": "(string) 用户地址四级编码",
    "receiverAddrId": "(integer) 用户地址信息id，若用户未选地址信息，则为-1",
    "receiverAddrStr": "(string) 用户地址信息详情，若是根据四级编码返回的，则是地址描述",
    "skuInfos": [
        {
            "afterSaleRemark": "(string) 单品售后描述",
            "imagePath": "(string) 单品大图",
            "installmentPrice": "(number) 单品分期价格",
            "price": "(number) 单品价格",
            "productNo": "(string) 单品对应的产品编号",
            "skuNo": "(string) 单品编号",
            "skuProps": {},
            "stockCount": "(integer) 库存数量",
            "subImagePath": "(string) 单品小图",
            "subTitle": "(string) 单品描述",
            "title": "(string) 单品名称"
        }
    ],
    "supportCoupon": "(boolean) 是否支持优惠券",
    "systemTime": "(integer) 系统当前时间",
    "typeCode": "(integer) 商品供应商",
    "unavailable": "(boolean) 目前是否不可购买"
}
*/



/**
 * 获取商品详情    /v1/salesProduct/productDetailV3
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      receiverAddrId                用户收获地址id
 * @params      { String   }      productNo                     商品编号
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductProductDetailV3V1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        receiverAddrId: '-1',
        productNo: '123456H11',
        userId: '180000029',
        payChannelId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(integer) 开始时间",
    "bannerImages": [],
    "content": "(string) 商品详情",
    "description": "(string) 商品描述",
    "expireTime": "(integer) 结束时间",
    "installmentPrice": "(number) 分期价格，根据最低价格的单品进行分期计算结果",
    "name": "(string) 商品名称",
    "price": "(number) 单品价格，拥有多个单品的情况下，选取单价最低的",
    "promotionType": "(integer) 商品的推广类型",
    "receiverAddrCode": "(string) 用户地址四级编码",
    "receiverAddrId": "(integer) 用户地址信息id，若用户未选地址信息，则为-1",
    "receiverAddrStr": "(string) 用户地址信息详情，若是根据四级编码返回的，则是地址描述",
    "skuInfos": [
        {
            "afterSaleRemark": "(string) 单品售后描述",
            "imagePath": "(string) 单品大图",
            "installmentPrice": "(number) 单品分期价格",
            "price": "(number) 单品价格",
            "productNo": "(string) 单品对应的产品编号",
            "skuNo": "(string) 单品编号",
            "skuProps": {},
            "stockCount": "(integer) 库存数量",
            "subImagePath": "(string) 单品小图",
            "subTitle": "(string) 单品描述",
            "title": "(string) 单品名称"
        }
    ],
    "supportCoupon": "(boolean) 是否支持优惠券",
    "systemTime": "(integer) 系统当前时间",
    "typeCode": "(integer) 商品供应商",
    "unavailable": "(boolean) 目前是否不可购买"
}
*/



/**
 * 获取活动详情    /v1/salesProduct/promotion/{promotionNo}
 *
 * @params      { String   }      promotionNo                   专题编号
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductPromotionPromotionNoV1({
    params: {
        promotionNo: '30',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "backgroundCss": "(string) 背景css",
    "backgroundCssEnd": "(string) 背景css-背景渐变色结束颜色",
    "backgroundImageUrl": "(string) 背景图片链接",
    "bannerImageUrl": "(string) 顶部活动图",
    "bottomBanner": {
        "entranceId": "(integer) entranceId，前端埋点使用",
        "imageUrl": "(string) 图片链接",
        "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string) 跳转链接，可能为空"
    },
    "couponBackgroundCss": "(string) 优惠券颜色",
    "couponBackgroundImageUrl": "(string) 优惠券背景图片",
    "couponTitle": "(string) 优惠券标题",
    "productGroups": [
        {
            "backgroundCss": "(string) 背景颜色",
            "products": [
                {
                    "allStockCount": "(integer) 全部库存",
                    "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                    "imageUrl": "(string) 商品图片",
                    "installmentPrice": "(number) 最低分期价格",
                    "marketPrice": "(number) 市场价",
                    "price": "(number) 商品价格",
                    "process": "(number) 进度",
                    "productNo": "(string) 商品编号",
                    "stockCount": "(integer) 剩余库存",
                    "subTitle": "(string) 副标题（商品描述）",
                    "tag": "(string) 标签",
                    "title": "(string) 主标题（商品名称）"
                }
            ],
            "title": "(string) 商品分组标题",
            "titleImageUrl": "(string) 标题的图片"
        }
    ],
    "tag": "(string) 活动标签",
    "title": "(string) 标题"
}
*/



/**
 * 获取精选专题    /v1/salesProduct/promotions
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductPromotionsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "imageUrl": "(string) 图标图片链接",
        "promotionNo": "(string) 专题编号",
        "subTitle": "(string) 副标题",
        "tag": "(string) 标签",
        "title": "(string) 主标题"
    }
]
*/



/**
 * 获取活动页秒杀商品列表    /v1/salesProduct/secKillProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductSecKillProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "sckillList": [
        {
            "activeTime": "(integer) 开始时间",
            "expireTime": "(integer) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer) 全部库存",
                    "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                    "imageUrl": "(string) 商品图片",
                    "installmentPrice": "(number) 最低分期价格",
                    "marketPrice": "(number) 市场价",
                    "price": "(number) 商品价格",
                    "process": "(number) 进度",
                    "productNo": "(string) 商品编号",
                    "stockCount": "(integer) 剩余库存",
                    "subTitle": "(string) 副标题（商品描述）",
                    "tag": "(string) 标签",
                    "title": "(string) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer) 系统时间"
        }
    ],
    "systemTime": "(string) 系统当前时间"
}
*/



/**
 * 顶部广告列表    /v1/salesProduct/topBanners
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getSalesProductTopBannersV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "entranceId": "(integer) entranceId，前端埋点使用",
        "imageUrl": "(string) 图片链接",
        "linkType": "(integer) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string) 跳转链接，可能为空"
    }
]
*/



/**
 * 获取优惠券分享配置信息    /v1/share/couponConfig
 *
 * @params      { Integer  }      shareUserId                   分享用户51ID
 * @params      { String   }      orderNo                       订单编号
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getShareCouponConfigV1({
    params: {
        shareUserId: '180000029',
        orderNo: '111072548186',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer) 配置Id",
    "fromType": "(integer) 分享链接来源",
    "orderNo": "(string) 订单编号",
    "shareSn": "(string) 分享标识",
    "shareUserId": "(integer) 分享者Id",
    "status": "(integer) 状态"
}
*/



/**
 * 好友优惠券领取信息    /v1/share/couponReceivedList
 *
 * @params      { String   }      shareSn                       分享标识
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getShareCouponReceivedListV1({
    params: {
        shareSn: 'undefined',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponReceivedList": [
        {
            "couponValue": "(number) 领取金额",
            "createTime": "(integer) 领取时间",
            "imageUrl": "(string) 用户头像",
            "name": "(string) 用户昵称",
            "userId": "(integer) 用户51Id"
        }
    ],
    "imageUrl": "(string) 分享者头像",
    "name": "(string) 分享者昵称",
    "shareSn": "(string) 分享标识",
    "userId": "(integer) undefined"
}
*/



/**
 * 猜你喜欢商品展示列表    /v1/share/favoriteProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getShareFavoriteProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "allStockCount": "(integer) 全部库存",
        "alreadyBuy": "(integer) 已抢人数-目前已弃用",
        "imageUrl": "(string) 商品图片",
        "installmentPrice": "(number) 最低分期价格",
        "marketPrice": "(number) 市场价",
        "price": "(number) 商品价格",
        "process": "(number) 进度",
        "productNo": "(string) 商品编号",
        "stockCount": "(integer) 剩余库存",
        "subTitle": "(string) 副标题（商品描述）",
        "tag": "(string) 标签",
        "title": "(string) 主标题（商品名称）"
    }
]
*/



/**
 * 新人专区商品展示列表    /v1/share/newUserProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getShareNewUserProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "allStockCount": "(integer) 全部库存",
        "alreadyBuy": "(integer) 已抢人数-目前已弃用",
        "imageUrl": "(string) 商品图片",
        "installmentPrice": "(number) 最低分期价格",
        "marketPrice": "(number) 市场价",
        "price": "(number) 商品价格",
        "process": "(number) 进度",
        "productNo": "(string) 商品编号",
        "stockCount": "(integer) 剩余库存",
        "subTitle": "(string) 副标题（商品描述）",
        "tag": "(string) 标签",
        "title": "(string) 主标题（商品名称）"
    }
]
*/



/**
 * 领取优惠券    /v1/share/receive/{receivedUserId}
 *
 * @params      { Integer  }      receivedUserId                51领券用户ID
 * @params      { String   }      shareSn                       分享标识
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putShareReceiveReceivedUserIdV1({
    params: {
        receivedUserId: '150001810',
        shareSn: 'undefined',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": "(string) undefined",
    "msg": "(string) undefined"
}
*/



/**
 * 天天秒杀商品展示列表    /v1/share/secKillProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getShareSecKillProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "activeTime": "(integer) 开始时间",
        "expireTime": "(integer) 结束时间",
        "products": [
            {
                "allStockCount": "(integer) 全部库存",
                "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                "imageUrl": "(string) 商品图片",
                "installmentPrice": "(number) 最低分期价格",
                "marketPrice": "(number) 市场价",
                "price": "(number) 商品价格",
                "process": "(number) 进度",
                "productNo": "(string) 商品编号",
                "stockCount": "(integer) 剩余库存",
                "subTitle": "(string) 副标题（商品描述）",
                "tag": "(string) 标签",
                "title": "(string) 主标题（商品名称）"
            }
        ],
        "systemTime": "(integer) 系统时间"
    }
]
*/



/**
 * 分享链接商品展示列表    /v1/share/shareProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        用户id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      payChannelId                  支付渠道id
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getShareShareProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        userId: '180000029',
        fromType: '10',
        payChannelId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "favoriteProducts": [
        {
            "allStockCount": "(integer) 全部库存",
            "alreadyBuy": "(integer) 已抢人数-目前已弃用",
            "imageUrl": "(string) 商品图片",
            "installmentPrice": "(number) 最低分期价格",
            "marketPrice": "(number) 市场价",
            "price": "(number) 商品价格",
            "process": "(number) 进度",
            "productNo": "(string) 商品编号",
            "stockCount": "(integer) 剩余库存",
            "subTitle": "(string) 副标题（商品描述）",
            "tag": "(string) 标签",
            "title": "(string) 主标题（商品名称）"
        }
    ],
    "newUserProducts": [
        {
            "allStockCount": "(integer) 全部库存",
            "alreadyBuy": "(integer) 已抢人数-目前已弃用",
            "imageUrl": "(string) 商品图片",
            "installmentPrice": "(number) 最低分期价格",
            "marketPrice": "(number) 市场价",
            "price": "(number) 商品价格",
            "process": "(number) 进度",
            "productNo": "(string) 商品编号",
            "stockCount": "(integer) 剩余库存",
            "subTitle": "(string) 副标题（商品描述）",
            "tag": "(string) 标签",
            "title": "(string) 主标题（商品名称）"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer) 开始时间",
            "expireTime": "(integer) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer) 全部库存",
                    "alreadyBuy": "(integer) 已抢人数-目前已弃用",
                    "imageUrl": "(string) 商品图片",
                    "installmentPrice": "(number) 最低分期价格",
                    "marketPrice": "(number) 市场价",
                    "price": "(number) 商品价格",
                    "process": "(number) 进度",
                    "productNo": "(string) 商品编号",
                    "stockCount": "(integer) 剩余库存",
                    "subTitle": "(string) 副标题（商品描述）",
                    "tag": "(string) 标签",
                    "title": "(string) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer) 系统时间"
        }
    ]
}
*/



/**
 * 个人优惠券领取展示    /v1/share/userCoupon
 *
 * @params      { Integer  }      receivedUserId                51领券用户ID
 * @params      { String   }      shareSn                       分享标识
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getShareUserCouponV1({
    params: {
        receivedUserId: '180000029',
        shareSn: 'undefined',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "amount": "(number) 默认券金额|随机金额下限",
    "batchCode": "(string) 批次号",
    "couponName": "(string) 优惠券名称",
    "couponSectionConfigId": "(integer) 优惠券版块配置ID",
    "couponStatus": "(integer) 优惠券状态(0:未领取,1:已领取)",
    "couponType": "(integer) 优惠券类型:CouponTypeEnum",
    "couponTypeName": "(string) 优惠券类型:CouponTypeEnum",
    "orderRequiredAmount": "(number) 订单使用限制金额(分期商城满减券使用)",
    "validTimePeriodText": "(string) 有效时间范围文案"
}
*/



/**
 * 京东订单对账数据查询    /v1/tool/checkOrder
 *
 * @params      { String   }      date                          日期yyyy-MM-dd
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolCheckOrderV1({
    params: {
        date: '2018-03-20',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": [
        {
            "code": "(string) undefined",
            "result": {
                "curPage": "(integer) undefined",
                "orders": [
                    {
                        "hangUpState": "(integer) undefined",
                        "invoiceState": "(integer) undefined",
                        "jdOrderId": "(integer) undefined",
                        "orderPrice": "(number) undefined",
                        "state": "(integer) undefined",
                        "time": "(string) undefined"
                    }
                ],
                "total": "(integer) undefined",
                "totalPage": "(integer) undefined"
            },
            "resultCode": "(string) undefined",
            "resultMessage": "(string) undefined",
            "success": "(boolean) undefined"
        }
    ],
    "msg": "(string) undefined"
}
*/



/**
 * properties动态参数获取测试    /v1/tool/getParamValue
 *
 * @params      { String   }      paramKey                      paramKey
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolGetParamValueV1({
    params: {
        paramKey: 'hang.begin.time',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "msg": "(string) undefined"
}
*/



/**
 * invoiceCheckTask    /v1/tool/invoiceCheckTask
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putToolInvoiceCheckTaskV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 通过文件更新发票链接    /v1/tool/invoiceUpdate
 *
 * @params      { String   }      fileName                      文件名，文件路径在配置文件中
 */
InstallmentMall.getToolInvoiceUpdateV1({
    params: {
        fileName: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": "(string) undefined",
    "msg": "(string) undefined"
}
*/



/**
 * 手动修复异常订单(内部)    /v1/tool/order/fixAbnormal/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putToolOrderFixAbnormalUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 获取订单异常信息(内部)    /v1/tool/order/getAbnormal/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolOrderGetAbnormalUserIdV1({
    params: {
        userId: '150001810',
        orderNo: '111072444619',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer) undefined",
    "fixTryCount": "(integer) undefined",
    "orderNo": "(string) undefined",
    "reason": "(string) undefined",
    "recordTime": "(string) undefined",
    "remark": "(string) undefined",
    "typeCode": "(integer) undefined",
    "userId": "(integer) undefined"
}
*/



/**
 * 订单支付结果通知(内部)    /v1/tool/order/paymentNotify
 *
 * @params      { Object   }      statusNotifyDTO               支付结果
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postToolOrderPaymentNotifyV1({
    data: {
        creatTime: '(integer) undefined',
        extInfo: '(string) undefined',
        notifyType: '(string) undefined',
        orderDetailNo: '(string) undefined',
        orderNo: '(string) undefined',
        payType: '(integer) undefined',
        status: '(string) undefined',
        tradeNo: '(string) undefined',
        userId: '(integer) undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * updateRefundStatus    /v1/tool/order/updateRefundStatus/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      orderDetailNo                 订单号
 * @params      { Integer  }      newRefundStatus               新状态
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putToolOrderUpdateRefundStatusUserIdV1({
    params: {
        userId: '150001810',
        orderNo: 'undefined',
        orderDetailNo: 'undefined',
        newRefundStatus: '0',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * orderExpireCheckTask    /v1/tool/orderExpireCheckTask
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putToolOrderExpireCheckTaskV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * pushTest    /v1/tool/pushTest
 *
 * @params      { String   }      userId                        userId
 * @params      { String   }      batchNo                       batchNo
 * @params      { String   }      clearRedisBatchNo             clearRedisBatchNo
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolPushTestV1({
    params: {
        userId: '150500949',
        batchNo: 'batchNo123',
        clearRedisBatchNo: 'batchNo123',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {
        "batchNo": "(string) 批次号"
    },
    "msg": "(string) undefined"
}
*/



/**
 * pushTestEx    /v1/tool/pushTestEx
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolPushTestExV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "msg": "(string) undefined"
}
*/



/**
 * 查询京东余额    /v1/tool/queryJdBalance
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolQueryJdBalanceV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": [
        {
            "code": "(string) undefined",
            "result": "(string) undefined",
            "resultCode": "(string) undefined",
            "resultMessage": "(string) undefined",
            "success": "(boolean) undefined"
        }
    ],
    "msg": "(string) undefined"
}
*/



/**
 * 删除缓存    /v1/tool/redisKey
 *
 * @params      { String   }      redisKey                      缓存键
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.deleteToolRedisKeyV1({
    params: {
        redisKey: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取缓存值    /v1/tool/redisValue
 *
 * @params      { String   }      redisKey                      缓存键
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolRedisValueV1({
    params: {
        redisKey: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 同步京东商品池数据    /v1/tool/syncSku
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolSyncSkuV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": "(integer) undefined",
    "msg": "(string) undefined"
}
*/



/**
 * testChinese    /v1/tool/testChinese
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getToolTestChineseV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * thirdPartyMessageHandleTask    /v1/tool/thirdPartyMessageHandleTask
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putToolThirdPartyMessageHandleTaskV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 重置京东AccessToken    /v1/tool/token
 *
 * @params      { String   }      token                         新的token值
 * @params      { String   }      tokenType                     token类型，access或者refresh
 * @params      { Boolean  }      reset                         是否重置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putToolTokenV1({
    params: {
        token: 'undefined',
        tokenType: 'access',
        reset: 'false',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": "(string) undefined",
    "msg": "(string) undefined"
}
*/



/**
 * 上传图片    /v1/tool/uploadImage
 *
 * @params      { Object   }      base64Image                   图片的base64转码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postToolUploadImageV1({
    data: {
        base64Image: '(string) undefined',

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(string) undefined"
*/



/**
 * 是否为新用户    /v1/user/isNewUser/{userId}
 *
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserIsNewUserUserIdV1({
    params: {
        userId: '150001810',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 添加用户收货地址    /v1/user/receiverAddress/add/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Object   }      receiverAddressDTO            收货地址
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postUserReceiverAddressAddUserIdV1({
    params: {
        userId: '150001810',
    },
    data: {
        autoId: '(integer) 自增主键',
        cityCode: '(string) 城市编码',
        cityName: '(string) 城市名称',
        countyCode: '(string) 区县编码',
        countyName: '(string) 区县名称',
        detailAddress: '(string) 详细地址',
        isDefault: '(boolean) 是否为默认地址',
        phone: '(string) 收货人手机号',
        provinceCode: '(string) 省份编码',
        provinceName: '(string) 省份名称',
        receiver: '(string) 收货人姓名',
        status: '(integer) 状态',
        townCode: '(string) 乡镇编码',
        townName: '(string) 乡镇名称',
        typeCode: '(integer) 地区编码提供方类型(10:京东)',
        userId: '(integer) 51用户ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取一级地址    /v1/user/receiverAddress/allProvince
 *
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserReceiverAddressAllProvinceV1({
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "name": "(string) undefined",
        "value": "(integer) undefined"
    }
]
*/



/**
 * 获取二级地址    /v1/user/receiverAddress/citiesByProvinceId/{provinceId}
 *
 * @params      { Integer  }      provinceId                    provinceId
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserReceiverAddressCitiesByProvinceIdProvinceIdV1({
    params: {
        provinceId: '15',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "name": "(string) undefined",
        "value": "(integer) undefined"
    }
]
*/



/**
 * 获取三级地址    /v1/user/receiverAddress/countiesByCityId/{cityId}
 *
 * @params      { Integer  }      cityId                        cityId
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserReceiverAddressCountiesByCityIdCityIdV1({
    params: {
        cityId: '1213',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "name": "(string) undefined",
        "value": "(integer) undefined"
    }
]
*/



/**
 * 删除用户收货地址    /v1/user/receiverAddress/delete/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      autoId                        收货地址ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.deleteUserReceiverAddressDeleteUserIdV1({
    params: {
        userId: '150001810',
        autoId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取收货地址    /v1/user/receiverAddress/get/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      autoId                        收货地址ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserReceiverAddressGetUserIdV1({
    params: {
        userId: '150001810',
        autoId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取用户收货地址列表    /v1/user/receiverAddress/list/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserReceiverAddressListUserIdV1({
    params: {
        userId: '150001810',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
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
    }
]
*/



/**
 * 设置默认用户收货地址    /v1/user/receiverAddress/setDefault/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      autoId                        收货地址ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putUserReceiverAddressSetDefaultUserIdV1({
    params: {
        userId: '150001810',
        autoId: '1',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取四级地址    /v1/user/receiverAddress/townsByCountyId/{countryId}
 *
 * @params      { Integer  }      countryId                     countryId
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserReceiverAddressTownsByCountyIdCountryIdV1({
    params: {
        countryId: '3411',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "name": "(string) undefined",
        "value": "(integer) undefined"
    }
]
*/



/**
 * 修改用户收货地址    /v1/user/receiverAddress/update/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Object   }      receiverAddressDTO            收货地址
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putUserReceiverAddressUpdateUserIdV1({
    params: {
        userId: '150001810',
    },
    data: {
        autoId: '(integer) 自增主键',
        cityCode: '(string) 城市编码',
        cityName: '(string) 城市名称',
        countyCode: '(string) 区县编码',
        countyName: '(string) 区县名称',
        detailAddress: '(string) 详细地址',
        isDefault: '(boolean) 是否为默认地址',
        phone: '(string) 收货人手机号',
        provinceCode: '(string) 省份编码',
        provinceName: '(string) 省份名称',
        receiver: '(string) 收货人姓名',
        status: '(integer) 状态',
        townCode: '(string) 乡镇编码',
        townName: '(string) 乡镇名称',
        typeCode: '(integer) 地区编码提供方类型(10:京东)',
        userId: '(integer) 51用户ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 新增优惠券版块关联配置    /v2/manage/coupon/sectionConfig/add
 *
 * @params      { Object   }      couponSectionConfigDTO                           优惠券版块关联配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageCouponSectionConfigAddV2({
    data: {
        couponBatchCode: '(string) 优惠券批次号',
        couponName: '(string) 优惠券名称',
        fromType: '(integer) 投放来源',
        orderIndex: '(integer) 顺序',
        receiveBeginTime: '(string) 可领取起始时间',
        receiveEndTime: '(string) 可领取结束时间',
        sectionType: '(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取优惠券版块基础配置    /v2/manage/coupon/sectionConfig/get/{couponBatchCode}
 *
 * @params      { String   }      couponBatchCode               优惠券批次号
 * @params      { Integer  }      sectionType                   版块类型
 * @params      { Integer  }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCouponSectionConfigGetCouponBatchCodeV2({
    params: {
        couponBatchCode: 'undefined',
        sectionType: 'undefined',
        fromType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponBatchCode": "(string) 优惠券批次号",
    "couponName": "(string) 优惠券名称",
    "fromType": "(integer) 投放来源",
    "orderIndex": "(integer) 顺序",
    "receiveBeginTime": "(string) 可领取起始时间",
    "receiveEndTime": "(string) 可领取结束时间",
    "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)",
    "status": "(integer) 状态"
}
*/



/**
 * 获取优惠券版块关联配置列表(分页)    /v2/manage/coupon/sectionConfig/list
 *
 * @params      { Integer  }      sectionType                   版块类型(0:全场通用,3:活动专区,4:特定商品)
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      pageIndex                     页码(1开始)
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { Integer  }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCouponSectionConfigListV2({
    params: {
        sectionType: '3',
        status: 'undefined',
        pageIndex: '1',
        pageSize: '10',
        fromType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "couponBatchCode": "(string) 优惠券批次号",
            "couponName": "(string) 优惠券名称",
            "fromType": "(integer) 投放来源",
            "orderIndex": "(integer) 顺序",
            "receiveBeginTime": "(string) 可领取起始时间",
            "receiveEndTime": "(string) 可领取结束时间",
            "sectionType": "(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)",
            "status": "(integer) 状态"
        }
    ]
}
*/



/**
 * 新增优惠券版块关联商品/专区配置    /v2/manage/coupon/sectionConfig/relation/add
 *
 * @params      { Object   }      CouponSectionConfigRelationDTO                   优惠券版块关联配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageCouponSectionConfigRelationAddV2({
    data: {
        couponBatchCode: '(string) 优惠券批次号',
        fromType: '(integer) 投放来源',
        receiveBeginTime: '(string) 可领取起始时间',
        receiveEndTime: '(string) 可领取结束时间',
        sectionNos: [],
        sectionType: '(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取优惠券版块关联商品/专区配置    /v2/manage/coupon/sectionConfig/relation/get/{couponBatchCode}
 *
 * @params      { String   }      couponBatchCode               优惠券批次号
 * @params      { Integer  }      sectionType                   版块类型
 * @params      { Integer  }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCouponSectionConfigRelationGetCouponBatchCodeV2({
    params: {
        couponBatchCode: 'undefined',
        sectionType: 'undefined',
        fromType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponBatchCode": "(string) 优惠券批次号",
    "productRelationDTOS": [
        {
            "activeTime": "(string) 上架时间",
            "autoId": "(integer) 优惠券配置id",
            "contractPrice": "(string) 采购价",
            "createTime": "(string) 入库时间",
            "detailLink": "(string) 详情链接",
            "name": "(string) 商品名称",
            "onSale": "(boolean) 是否销售中（当前秒杀商品/热销商品关联）",
            "productId": "(integer) 商品id",
            "productImage": "(string) undefined",
            "pvLatest7": "(integer) 最近7天pv",
            "salePrice": "(string) 销售价",
            "seqNo": "(integer) 序号",
            "soldCountLatest7": "(integer) 最近7天销量",
            "thirdPrice": "(string) 第三方售价",
            "typeCode": "(integer) undefined",
            "typeCodeName": "(string) undefined",
            "uvLatest7": "(integer) 最近7天uv"
        }
    ],
    "promotionRelationDTOS": [
        {
            "autoId": "(integer) 优惠券配置id",
            "createTime": "(string) 创建时间",
            "imageUrl": "(string) 活动图片",
            "promotionId": "(integer) 活动id",
            "promotionNo": "(string) 活动编号",
            "seqNo": "(integer) 序号",
            "status": "(integer) 状态 -1 - 删除 0 - 禁用 1 - 启用",
            "title": "(string) 名称"
        }
    ]
}
*/



/**
 * 移动顺序    /v2/manage/coupon/sectionConfig/shift/coupon
 *
 * @params      { Integer  }      sectionType                   版块编号
 * @params      { String   }      couponBatchCode               优惠券批次号
 * @params      { Integer  }      shiftType                     1 下移, -1 上移
 * @params      { Integer  }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageCouponSectionConfigShiftCouponV2({
    params: {
        sectionType: 'undefined',
        couponBatchCode: 'undefined',
        shiftType: '1',
        fromType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 修改优惠券版块基础配置    /v2/manage/coupon/sectionConfig/update
 *
 * @params      { Object   }      couponSectionConfigDTO                           优惠券版块关联配置
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageCouponSectionConfigUpdateV2({
    data: {
        couponBatchCode: '(string) 优惠券批次号',
        couponName: '(string) 优惠券名称',
        fromType: '(integer) 投放来源',
        orderIndex: '(integer) 顺序',
        receiveBeginTime: '(string) 可领取起始时间',
        receiveEndTime: '(string) 可领取结束时间',
        sectionType: '(integer) 版块类型(0:全场通用,1:热销,2:秒杀,3:活动专区,4:特定商品)',
        status: '(integer) 状态',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 优惠券的禁用启用    /v2/manage/coupon/sectionConfig/updateStatus/coupon
 *
 * @params      { Integer  }      sectionType                   版块编号
 * @params      { String   }      couponBatchCode               优惠券批次号
 * @params      { Integer  }      status                        状态
 * @params      { Integer  }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageCouponSectionConfigUpdateStatusCouponV2({
    params: {
        sectionType: 'undefined',
        couponBatchCode: 'undefined',
        status: 'undefined',
        fromType: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 优惠券关联单个活动/商品的禁用启用    /v2/manage/coupon/sectionConfig/updateStatus/{autoId}
 *
 * @params      { Integer  }      autoId                        主键ID
 * @params      { Integer  }      status                        状态
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageCouponSectionConfigUpdateStatusAutoIdV2({
    params: {
        autoId: 'undefined',
        status: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取优惠券模板信息    /v2/manage/coupon/template
 *
 * @params      { String   }      couponBatchCode               优惠券批次号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageCouponTemplateV2({
    params: {
        couponBatchCode: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "amount": "(number) 默认券金额|随机金额下限",
    "batchCode": "(string) 批次号",
    "couponName": "(string) 优惠券名称",
    "couponType": "(integer) 优惠券类型:CouponTypeEnum",
    "couponTypeName": "(string) 优惠券类型名称:CouponTypeEnum",
    "effectTime": "(string) 券统一生效时间(到期后统一生效)",
    "effectiveDays": "(integer) 有效期天数",
    "effectiveMinute": "(integer) 有效期分钟数",
    "expireTime": "(string) 券过期时间(到期后不再发放)",
    "fromType": "(integer) 适用产品类型, 0=全渠道|10=管家｜20=给你花｜30=即刻有",
    "fromTypeName": "(string) 渠道来源名称",
    "loanProductType": "(integer) 适用产品类型, 100=全渠道|101=管家｜14=给你花｜36=即刻有",
    "orderRequiredAmount": "(number) 订单使用限制金额(分期商城满减券使用)",
    "scopeTypeName": "(string) 适用范围类型名称",
    "sectionType": "(integer) 0:全场通用，3:特定专区，4:特定商品",
    "userType": "(integer) 0:全场通用，1:特定专区，2:特定商品"
}
*/



/**
 * 从热门产品列表中添加    /v2/manage/operation/addHotProductFromProductId
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Integer  }      type                          热门商品类型(0:热销商品;1:特卖商品)
 * @params      { Object   }      productIdList                 productIdList
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOperationAddHotProductFromProductIdV2({
    params: {
        fromType: '10',
        type: '0',
    },
    data: {
        productIdList: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 从产品列表中添加    /v2/manage/operation/addSecKillProductFromProductId
 *
 * @params      { Integer  }      configId                      秒杀配置id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      productIdList                 productIdList
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postManageOperationAddSecKillProductFromProductIdV2({
    params: {
        configId: '1',
        fromType: '10',
    },
    data: {
        productIdList: [],

    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 获取热门商品详情    /v2/manage/operation/hotProduct/{autoId}
 *
 * @params      { Integer  }      autoId                        热门商品自增id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationHotProductAutoIdV2({
    params: {
        autoId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 获取热门商品列表    /v2/manage/operation/listHotProducts
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      status                        状态， -1删除 0未上架 1 已上架
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      searchText                    活动标题
 * @params      { Integer  }      type                          热门商品分类(0:热销商品,1:特卖商品)
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationListHotProductsV2({
    params: {
        page: '1',
        limit: '20',
        status: '1',
        fromType: '10',
        searchText: 'undefined',
        type: '0',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 自增主键",
            "contractPrice": "(string) 采购价",
            "detailLink": "(string) 详情链接",
            "discountPeriods": "(string) 100%免息期数，单选 3，6，9，12",
            "discountPrice": "(string) 特卖价",
            "imagePath": "(string) 图片路径",
            "newComersOnly": "(boolean) 是否新人专享",
            "orderIndex": "(integer) 顺序",
            "productId": "(integer) 关联的商品ID",
            "productNo": "(string) 产品编码 形式为UUID",
            "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
            "salePrice": "(string) 销售价",
            "seqNo": "(integer) 序号",
            "soldCount": "(integer) 商品销量",
            "status": "(integer) 状态",
            "subTitle": "(string) 副标题",
            "supportCoupon": "(boolean) 是否支持优惠券",
            "tag": "(string) 标签",
            "thirdPrice": "(string) 第三方价格（京东价）",
            "title": "(string) 标题",
            "type": "(integer) 0:热销商品;1:特卖商品。见HotProductTypeEnum"
        }
    ]
}
*/



/**
 * 获取秒杀商品列表    /v2/manage/operation/listSecKillProducts
 *
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      configId                      秒杀配置id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationListSecKillProductsV2({
    params: {
        page: '0',
        limit: '20',
        configId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer) undefined",
    "pageSize": "(integer) undefined",
    "rowCount": "(integer) undefined",
    "rows": [
        {
            "autoId": "(integer) 自增长主键",
            "contractPrice": "(string) 采购价",
            "detailLink": "(string) 详情链接",
            "discountPeriods": "(string) 免息期数，可以为空",
            "imagePath": "(string) 图片路径",
            "newComersOnly": "(boolean) 是否新人专享",
            "orderIndex": "(integer) 排序",
            "productId": "(integer) 关联商品ID",
            "productNo": "(string) 商品运营编号",
            "quota": "(integer) 每人现购数量，若小于0，则不设置现购数量",
            "salePrice": "(string) 销售价",
            "secKillConfigId": "(integer) 关联配置ID",
            "secKillPrice": "(string) 秒杀价格",
            "seqNo": "(integer) 序号",
            "stockCount": "(integer) 库存数量",
            "supportCoupon": "(boolean) 是否支持优惠券",
            "tag": "(string) 标签",
            "thirdPrice": "(string) 第三方价格（京东价）",
            "title": "(string) 标题"
        }
    ]
}
*/



/**
 * 获取秒杀商品详情    /v2/manage/operation/secKillProduct/{autoId}
 *
 * @params      { Integer  }      autoId                        活动商品组自增id
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getManageOperationSecKillProductAutoIdV2({
    params: {
        autoId: '1',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
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
}
*/



/**
 * 更新热门商品    /v2/manage/operation/updateHotProducts
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      dto                           dto
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOperationUpdateHotProductsV2({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增主键',
        discountPeriods: '(string) 100%免息期数，单选 3，6，9，12',
        imagePath: '(string) 图片路径',
        newComersOnly: '(boolean) 是否新人专享',
        productId: '(integer) undefined',
        productNo: '(string) 商品编号',
        quota: '(integer) 每人现购数量，若小于0，则不设置现购数量',
        skuList: [{
        	attributeMap: {},
        	autoId: '(integer) 自增主键',
        	contractPrice: '(number) 协议价格',
        	imagePath: '(string) 图片路径',
        	is7ToReturn: '(integer) 是否支持7天退货，1：是，0：不支持',
        	marketPrice: '(number) 市场价格',
        	marketPriceGap: '(number) 市场价格调整幅度',
        	marketPriceRate: '(number) 市场价格浮动比例',
        	marketPriceRateType: '(integer) 市场价格类型',
        	operationPrice: '(number) 运营价格',
        	operationPriceGap: '(number) 运营价格调整幅度 ',
        	operationPriceRate: '(number) 运营价格浮动比例 %n',
        	operationPriceRateType: '(integer) 运营价格类型',
        	price: '(number) 单品价格',
        	productId: '(integer) 产品id',
        	skuId: '(integer) skuId',
        	skuNo: '(string) sku编号',
        	status: '(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用',
        	subImagePath: '(string) 小图路径',
        	subTitle: '(string) 单品描述',
        	thirdPrice: '(number) 第三方价格（京东价）',
        	thirdSkuId: '(string) 第三方skuId',
        	title: '(string) 单品名称',
        	typeCode: '(integer) 供应商编号',
        	winningPrice: '(number) 中奖价',
        }],
        subTitle: '(string) 副标题',
        supportCoupon: '(boolean) 是否支持用券',
        tag: '(string) 标签',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 更新秒杀产品配置    /v2/manage/operation/updateSecKillProduct
 *
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { Object   }      dto                           dto
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putManageOperationUpdateSecKillProductV2({
    params: {
        fromType: '10',
    },
    data: {
        autoId: '(integer) 自增id',
        detailLink: '(string) 详情链接',
        discountPeriods: '(string) 免息期数，可以为空',
        imagePath: '(string) 图片路径',
        newComersOnly: '(boolean) 是否新人专享',
        orderIndex: '(integer) 排序',
        productId: '(integer) 关联商品ID',
        productNo: '(string) 商品运营编号',
        quota: '(integer) 每人现购数量，若小于0，则不设置现购数量',
        secKillConfigId: '(integer) 关联配置ID',
        skuList: [{
        	attributeMap: {},
        	autoId: '(integer) 自增主键',
        	contractPrice: '(number) 协议价格',
        	imagePath: '(string) 图片路径',
        	is7ToReturn: '(integer) 是否支持7天退货，1：是，0：不支持',
        	marketPrice: '(number) 市场价格',
        	marketPriceGap: '(number) 市场价格调整幅度',
        	marketPriceRate: '(number) 市场价格浮动比例',
        	marketPriceRateType: '(integer) 市场价格类型',
        	operationPrice: '(number) 运营价格',
        	operationPriceGap: '(number) 运营价格调整幅度 ',
        	operationPriceRate: '(number) 运营价格浮动比例 %n',
        	operationPriceRateType: '(integer) 运营价格类型',
        	price: '(number) 单品价格',
        	productId: '(integer) 产品id',
        	skuId: '(integer) skuId',
        	skuNo: '(string) sku编号',
        	status: '(integer) 状态， 参照GenericStatusEnum -1删除 0禁用 1启用',
        	subImagePath: '(string) 小图路径',
        	subTitle: '(string) 单品描述',
        	thirdPrice: '(number) 第三方价格（京东价）',
        	thirdSkuId: '(string) 第三方skuId',
        	title: '(string) 单品名称',
        	typeCode: '(integer) 供应商编号',
        	winningPrice: '(number) 中奖价',
        }],
        stockCount: '(integer) 库存数量',
        supportCoupon: '(boolean) 是否支持优惠券',
        tag: '(string) 标签',
        title: '(string) 标题',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 展示支付小黄条（首次绑卡用户）    /v2/order/showRepayfundNotice/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      orderNo                       订单编号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getOrderShowRepayfundNoticeUserIdV2({
    params: {
        userId: '150001810',
        orderNo: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(boolean) undefined"
*/



/**
 * 提交订单    /v2/order/submit/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      platform                      h5/app
 * @params      { Object   }      orderSubmitDTO                订单提交请求
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.postOrderSubmitUserIdV2({
    params: {
        userId: '150001810',
        platform: 'undefined',
    },
    data: {
        couponId: '(integer) 优惠券号',
        couponType: '(integer) 优惠券类型（0:无可用优惠券,1:新人专享(废除),2:票券系统优惠券）',
        extInfo: '(string) 支付信息',
        fullAddress: '(string) 完整地址',
        invoiceCompanyName: '(string) 单位名称',
        invoiceCompanyTaxCode: '(string) 单位税号',
        invoiceTitleCode: '(integer) 发票抬头（1:个人,2:企业）',
        invoiceType: '(integer) 发票类型（1:电子普通发票）',
        preOrderNo: '(string) 预订单编号',
        receiverAddressId: '(integer) 收货地址ID',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "extInfo": "(string) 支付消息",
    "isSuccess": "(boolean) 是否成功",
    "message": "(string) 错误消息",
    "orderNo": "(string) 订单号(为空时说明下单失败)",
    "payId": "(integer) 支付流水号",
    "payNo": "(string) 真正支付流水号",
    "retry": "(boolean) 是否可重试"
}
*/



/**
 * 获取优惠券信息    /v2/user/coupon/get/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      couponId                      优惠券ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserCouponGetUserIdV2({
    params: {
        userId: '150001810',
        couponId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "amount": "(number) 优惠券金额",
    "batchCode": "(string) 批次号",
    "couponId": "(integer) 优惠券ID",
    "couponName": "(string) 优惠券名称",
    "couponState": "(integer) 优惠券状态:0=待生效|1=未使用|2=冻结中|-1=已使用|-2=已过期"
}
*/



/**
 * 获取可用优惠券批次号列表(供票券系统调用)    /v2/user/coupon/listAvailableCoupon
 *
 * @params      { String   }      promotionNo                   活动专区号
 * @params      { String   }      productNo                     商品运营编号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserCouponListAvailableCouponV2({
    params: {
        promotionNo: 'undefined',
        productNo: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[]
*/



/**
 * 领取优惠券    /v2/user/coupon/multipleReceive/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { String   }      couponSectionConfigId                            优惠券版块配置ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putUserCouponMultipleReceiveUserIdV2({
    params: {
        userId: '150001810',
        couponSectionConfigId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 领取优惠券    /v2/user/coupon/receive/{userId}
 *
 * @params      { Integer  }      userId                        51用户ID
 * @params      { Integer  }      couponSectionConfigId                            优惠券版块配置ID
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.putUserCouponReceiveUserIdV2({
    params: {
        userId: '150001810',
        couponSectionConfigId: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(integer) undefined"
*/



/**
 * 领取页面获取优惠券列表    /v3/user/coupon/listForReceive/{userId}
 *
 * @params      { Integer  }      userId                        userId
 * @params      { Integer  }      sectionType                   版块类型(0:全场通用,3:活动专区)
 * @params      { String   }      sectionNo                     版块编号
 * @params      { Integer  }      flag                          标识(0:一定包含全场通用券)
 * @params      { Integer  }      fromType                      来源
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserCouponListForReceiveUserIdV3({
    params: {
        userId: '150001810',
        sectionType: '3',
        sectionNo: 'undefined',
        flag: '0',
        fromType: '10',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "amount": "(number) 默认券金额|随机金额下限",
        "batchCode": "(string) 批次号",
        "couponName": "(string) 优惠券名称",
        "couponSectionConfigId": "(integer) 优惠券版块配置ID",
        "couponStatus": "(integer) 优惠券状态(0:未领取,1:已领取)",
        "couponType": "(integer) 优惠券类型:CouponTypeEnum",
        "couponTypeName": "(string) 优惠券类型:CouponTypeEnum",
        "orderRequiredAmount": "(number) 订单使用限制金额(分期商城满减券使用)",
        "validTimePeriodText": "(string) 有效时间范围文案"
    }
]
*/



/**
 * 获取可用优惠券批次号列表(供票券系统调用)    /v3/user/coupon/product/listAvailableCoupon
 *
 * @params      { String   }      productNo                     商品运营编号
 * @params      { String   }      Authorization                 service token
 */
InstallmentMall.getUserCouponProductListAvailableCouponV3({
    params: {
        productNo: 'undefined',
    },
    headers: {
        Authorization: 'service F8113C16-4BDD-4048-8C2C-14AE7A688835', //service token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[]
*/



