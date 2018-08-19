import InstallmentMallGateway from './api/installment-mall-gateway/api';


/**
 * 推荐商品列表    /v1/activity/recommend
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getActivityRecommendV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "allStockCount": "(integer,optional) 全部库存",
        "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
        "imageUrl": "(string,optional) 商品图片",
        "installmentPrice": "(number,optional) 最低分期价格",
        "marketPrice": "(number,optional) 市场价",
        "price": "(number,optional) 商品价格",
        "process": "(number,optional) 进度",
        "productNo": "(string,optional) 商品编号",
        "stockCount": "(integer,optional) 剩余库存",
        "subTitle": "(string,optional) 副标题（商品描述）",
        "tag": "(string,optional) 标签",
        "title": "(string,optional) 主标题（商品名称）"
    }
]
*/



/**
 * 申请售后页面[Aa2a]    /v1/afterSale/applyPage
 *
 * @params      { String   }      orderNo                       订单编号
 * @params      { String   }      orderDetailNo                 订单详情编号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getAfterSaleApplyPageV1({
    params: {
        orderNo: '111072487507',
        orderDetailNo: '111072444619',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "supportAfterSaleTypes": "(Array[integer],optional) 支持售后服务类型（1:退货,2:换货,3:维修）",
        "supportPickTypes": "(Array[integer],optional) 支持商品取回方式（1:上门取件,2:客户送货）"
    },
    "order": {
        "cityCode": "(string,optional) 城市编码",
        "countyCode": "(string,optional) 区县编码",
        "couponId": "(integer,optional) 优惠券ID",
        "couponName": "(string,optional) 优惠券名称",
        "couponPrice": "(number,optional) 优惠券抵扣",
        "couponType": "(integer,optional) 优惠券类型（0:无优惠券,1:新人专享(废除),2:票券系统优惠券）",
        "deliverySupplierType": "(integer,optional) 物流提供方类型",
        "detailAddress": "(string,optional) 详细地址",
        "freight": "(number,optional) 运费",
        "fromType": "(integer,optional) 投放来源",
        "fullAddress": "(string,optional) 完整地址",
        "invoiceApplySerialNo": "(string,optional) 发票申请流水号",
        "invoiceCompanyName": "(string,optional) 单位名称",
        "invoiceCompanyTaxCode": "(string,optional) 单位税号",
        "invoiceStatus": "(integer,optional) 发票状态",
        "invoiceTitleCode": "(integer,optional) 发票抬头（1:个人,2:企业）",
        "invoiceType": "(integer,optional) 发票类型（1:电子普通发票）",
        "invoiceUrl": "(string,optional) 电子发票链接",
        "orderNo": "(string,optional) 订单编号",
        "orderPrice": "(number,optional) 订单价格( = 商品价格 - 优惠券抵扣 — 运费)",
        "orderStatus": "(integer,optional) 订单状态",
        "orderTime": "(string,optional) 下单时间",
        "payId": "(integer,optional) 收银台支付流水号",
        "payStatus": "(integer,optional) 支付状态",
        "payType": "(integer,optional) 支付方式",
        "productPrice": "(number,optional) 商品价格( = sku1单价 * sku1数量 + sku2单价 * sku2数量 + ...)",
        "productSupplierType": "(integer,optional) 商品提供方类型",
        "promotionType": "(integer,optional) 促销类型(0:普通,1:秒杀)",
        "provinceCode": "(string,optional) 省份编码",
        "receiverName": "(string,optional) 收货人姓名",
        "receiverPhone": "(string,optional) 收货人手机号",
        "refundStatus": "(integer,optional) 退款状态",
        "regionCodeProviderType": "(integer,optional) 地区编码提供方",
        "subOrderList": [
            {
                "afterSaleStatus": "(integer,optional) 售后状态",
                "afterSaleType": "(integer,optional) 售后类型",
                "couponPrice": "(number,optional) 优惠券抵扣",
                "couponType": "(integer,optional) 优惠券类型",
                "freight": "(number,optional) 运费",
                "orderDetailNo": "(string,optional) 订单详情编号",
                "orderPrice": "(number,optional) 订单价格",
                "productAfterSaleRemark": "(string,optional) 商品售后描述",
                "productName": "(string,optional) 商品名称",
                "productNo": "(string,optional) 商品运营编号",
                "productPicUrl": "(string,optional) 商品图片URL",
                "productPrice": "(number,optional) 商品价格",
                "refundStatus": "(integer,optional) 退款状态",
                "skuAttributes": "(string,optional) 所选SKU属性集合",
                "skuCount": "(integer,optional) SKU数量",
                "skuNo": "(string,optional) SKU编号",
                "skuPrice": "(number,optional) SKU单价",
                "thirdPartySkuNo": "(string,optional) 第三方SKU编号"
            }
        ],
        "thirdPartyOrderNo": "(string,optional) 第三方订单编号",
        "townCode": "(string,optional) 乡镇编码",
        "userId": "(integer,optional) 用户ID"
    }
}
*/



/**
 * 取消售后[Aa5b]    /v1/afterSale/cancel/{afterSaleNo}
 *
 * @params      { String   }      afterSaleNo                   服务单号
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getAfterSaleCancelAfterSaleNoV1({
    params: {
        afterSaleNo: '16204E87B801112',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"boolean"
*/



/**
 * 申请售后服务[Aa2c]    /v1/afterSale/create
 *
 * @params      { Object   }      requestAfterSaleDTO           申请售后数据结构
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postAfterSaleCreateV1({
    data: {
        requestAfterSaleDTO: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"boolean"
*/



/**
 * 获取服务单详情[Aa5a]    /v1/afterSale/detail
 *
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      orderDetailNo                 订单详细号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getAfterSaleDetailV1({
    params: {
        orderNo: '111072487507',
        orderDetailNo: '111072487507',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "afterSaleNo": "(string,optional) 售后单编号",
    "afterSaleSupport": "(boolean,optional) 是否支持申请售后",
    "amount": "(number,optional) 退款金额",
    "canCancel": "(boolean,optional) 是否可以取消",
    "contactName": "(string,optional) 联系人姓名",
    "contactPhone": "(string,optional) 联系人电话",
    "deliverySupplierType": "(integer,optional) 物流提供方类型（10:京东,默认）",
    "orderDetailNo": "(string,optional) 订单详细编号",
    "orderNo": "(string,optional) 订单编号",
    "pickFullAddress": "(string,optional) 取件地址全名",
    "pictureUrl": "(string,optional) 图片1链接",
    "productSupplierType": "(integer,optional) 商品提供方类型（10:京东,默认）",
    "receiveFullAddress": "(string,optional) 收货地址全名",
    "refundStatus": "(integer,optional) 退款状态",
    "refundType": "(integer,optional) 退款方式（1:原路返回,默认）",
    "requestCount": "(integer,optional) 申请数量",
    "requestReason": "(string,optional) 问题描述",
    "requestTime": "(string,optional) 申请时间",
    "returnType": "(integer,optional) 商品取回方式（1:上门取件,默认,2:客户送货）",
    "serviceStatus": "(integer,optional) 售后状态",
    "serviceType": "(integer,optional) 服务类型（1:退货,2:换货,3:维修,4:拒收退款）",
    "trackInfos": [
        {
            "createDate": "(string,optional) 创建时间",
            "description": "(string,optional) 售后描述",
            "status": "(integer,optional) 售后状态"
        }
    ],
    "userId": "(integer,optional) 51用户ID"
}
*/



/**
 * 上传售后图片[Aa2b]    /v1/afterSale/uploadImage
 *
 * @params      { Object   }      base64Image                   图片的base64转码
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postAfterSaleUploadImageV1({
    data: {
        base64Image: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"object"
*/



/**
 * 计算订单价格    /v1/order/calculatePrice
 *
 * @params      { String   }      orderNo                       订单号
 * @params      { Integer  }      couponId                      优惠券ID
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getOrderCalculatePriceV1({
    params: {
        orderNo: '111072446623',
        couponId: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"number"
*/



/**
 * 获取订单[Oa2a/Ob2a]    /v1/order/get
 *
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getOrderGetV1({
    params: {
        orderNo: '111072487507',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "canShare": "(boolean,optional) 能否分享",
    "cashierPay": "(boolean,optional) 是否为即刻有收银台支付",
    "couponName": "(string,optional) 优惠券名称",
    "couponPrice": "(number,optional) 优惠券抵扣",
    "couponType": "(integer,optional) 优惠券类型（0:无优惠券,1:新人专享(废除),2:票券系统优惠券）",
    "currentMillis": "(integer,optional) 当前时间戳(未支付/支付失败时有效)",
    "deliverySupplierType": "(integer,optional) 物流提供方类型（10:京东）",
    "freight": "(number,optional) 运费",
    "fromType": "(integer,optional) 投放来源",
    "fullAddress": "(string,optional) 完整地址",
    "invoiceTitleCode": "(integer,optional) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer,optional) 发票类型（1:电子普通发票）",
    "invoiceUrl": "(string,optional) 电子发票链接",
    "orderNo": "(string,optional) 订单编号",
    "orderPrice": "(number,optional) 订单价格( = 商品价格 - 优惠券抵扣 + 运费)",
    "orderStatus": "(integer,optional) 订单状态",
    "orderTime": "(string,optional) 下单时间",
    "payExpireDateMillis": "(integer,optional) 支付过期时间戳(即下单时间+过期时间，未支付/支付失败时有效)",
    "paymentStatus": "(integer,optional) 支付状态",
    "paymentTime": "(string,optional) 支付时间",
    "paymentType": "(string,optional) 支付方式",
    "periods": "(integer,optional) 分期期数",
    "productPrice": "(number,optional) 商品价格( = sku1单价 * sku1数量 + sku2单价 * sku2数量 + ...)",
    "productSupplierType": "(integer,optional) 商品提供方类型（10:京东）",
    "promotionType": "(integer,optional) 促销类型(0:普通,1:秒杀)",
    "receiverName": "(string,optional) 收货人姓名",
    "receiverPhone": "(string,optional) 收货人手机号",
    "refundStatus": "(integer,optional) 退款状态",
    "showInvoiceEntry": "(boolean,optional) 是否展示电子发票入口",
    "subOrderList": [
        {
            "afterSale": "(boolean,optional) 是否有售后服务记录",
            "afterSaleSupport": "(boolean,optional) 是否支持售后服务",
            "orderDetailNo": "(string,optional) 订单详情编号",
            "productAfterSaleRemark": "(string,optional) 商品售后描述",
            "productName": "(string,optional) 商品名称",
            "productPicUrl": "(string,optional) 商品图片URL",
            "productPrice": "(number,optional) 商品价格",
            "skuAttributes": "(string,optional) 所选SKU属性集合",
            "skuCount": "(integer,optional) SKU数量",
            "skuNo": "(string,optional) SKU编号",
            "skuPrice": "(number,optional) SKU单价"
        }
    ],
    "thirdPartyOrderNo": "(string,optional) 第三方订单编号",
    "userId": "(integer,optional) 51用户ID"
}
*/



/**
 * 获取预订单[Oa4a]    /v1/order/getPreOrder
 *
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getOrderGetPreOrderV1({
    params: {
        orderNo: '111072446623',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "couponPrice": "(number,optional) 优惠券抵扣",
    "couponType": "(integer,optional) 优惠券类型（0:无可用优惠券,1:新人专享）",
    "deliverySupplierType": "(integer,optional) 物流提供方类型（10:京东）",
    "freight": "(number,optional) 运费",
    "invoiceType": "(integer,optional) 发票类型（1:电子普通发票）",
    "orderNo": "(string,optional) 订单编号",
    "orderPrice": "(number,optional) 订单价格(= 商品价格 - 优惠券抵扣 + 运费)",
    "productPrice": "(number,optional) 商品价格(= sku单价 * sku数量)",
    "receiverAddressId": "(integer,optional) 收货地址ID",
    "skuList": [
        {
            "productAfterSaleRemark": "(string,optional) 商品售后描述",
            "productName": "(string,optional) 商品名称",
            "productPicUrl": "(string,optional) 商品图片URL",
            "productPrice": "(number,optional) 商品价格",
            "skuAttributes": "(string,optional) 所选SKU属性集合",
            "skuCount": "(integer,optional) SKU数量",
            "skuNo": "(string,optional) SKU编号",
            "skuPrice": "(number,optional) SKU单价"
        }
    ],
    "userId": "(integer,optional) 51用户ID"
}
*/



/**
 * 获取发票抬头    /v1/order/invoiceTitle
 *
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getOrderInvoiceTitleV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "invoiceCompanyName": "(string,optional) 单位名称",
    "invoiceCompanyTaxCode": "(string,optional) 单位税号"
}
*/



/**
 * 提交发票抬头    /v1/order/invoiceTitle/submit
 *
 * @params      { Object   }      invoiceTitleSubmitDTO                            订单提交请求
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postOrderInvoiceTitleSubmitV1({
    data: {
        invoiceTitleSubmitDTO: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 获取用户订单列表(分页)[Oa1a/Ob1a]    /v1/order/list
 *
 * @params      { Integer  }      orderCategory                 订单类别(0:待付款,1:待收货,2:已完成,3:待发货,4:退款/售后)
 * @params      { Integer  }      pageIndex                     页面索引，从1开始
 * @params      { Integer  }      pageSize                      每页记录条数
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 * @params      { String   }      X-FROM-TYPE                   投放来源
 */
InstallmentMallGateway.getOrderListV1({
    params: {
        orderCategory: '0',
        pageIndex: '1',
        pageSize: '20',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
    "pageIndex": "(integer,optional) ",
    "pageSize": "(integer,optional) ",
    "rowCount": "(integer,optional) ",
    "rows": [
        {
            "cashierPay": "(boolean,optional) 是否为即刻有收银台支付",
            "invoiceUrl": "(string,optional) 电子发票链接",
            "orderNo": "(string,optional) 订单编号",
            "orderPrice": "(number,optional) 订单金额",
            "orderStatus": "(integer,optional) 订单状态",
            "orderStatusDescribe": "(string,optional) 订单状态描述",
            "orderTime": "(string,optional) 下单时间",
            "payId": "(integer,optional) 订单支付流水ID",
            "paymentStatus": "(integer,optional) 支付状态(0:初始化,1:成功,2:失败,3:处理中)",
            "productPrice": "(number,optional) 商品金额",
            "productSupplierType": "(integer,optional) 商品提供方类型（10:京东）",
            "showInvoiceEntry": "(boolean,optional) 是否展示电子发票入口",
            "subOrderDTOList": [
                {
                    "detailLinkUrl": "(string,optional) 商品详情链接URL：目前只针对oto订单",
                    "productName": "(string,optional) 商品名称",
                    "productPicUrl": "(string,optional) 商品图片URL",
                    "productPrice": "(number,optional) 商品金额( = sku价格 * sku数量)",
                    "skuAttributes": "(string,optional) 商品属性",
                    "skuCount": "(integer,optional) 商品数量",
                    "skuNo": "(string,optional) sku编号",
                    "skuPrice": "(number,optional) SKU单价"
                }
            ]
        }
    ]
}
*/



/**
 * 接受到前端推送oto支付信息，用于获取返回收银台支付流水号    /v1/order/otosaas/pay/info
 *
 * @params      { Object   }      otoPayInfoDTO                 otoPayInfoDTO
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postOrderOtosaasPayInfoV1({
    data: {
        otoPayInfoDTO: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"string"
*/



/**
 * 预提交订单[Oa3a]    /v1/order/preSubmit
 *
 * @params      { Integer  }      status                        用户中奖状态
 * @params      { Object   }      orderPreSubmitDTO             订单提交请求
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 * @params      { String   }      X-FROM-TYPE                   投放来源
 */
InstallmentMallGateway.postOrderPreSubmitV1({
    params: {
        status: '-1',
    },
    data: {
        orderPreSubmitDTO: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
        'X-FROM-TYPE': '10', //投放来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"string"
*/



/**
 * 保存离开收银台的理由    /v1/order/saveExitPayReason
 *
 * @params      { Object   }      exitPayReasonDTO              exitPayReasonDTO
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postOrderSaveExitPayReasonV1({
    data: {
        exitPayReasonDTO: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 提交订单[Oa4b]    /v1/order/submit
 *
 * @params      { Object   }      orderSubmitDTO                订单提交请求
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postOrderSubmitV1({
    data: {
        orderSubmitDTO: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "extInfo": "(string,optional) 支付消息",
    "isSuccess": "(boolean,optional) 是否成功",
    "message": "(string,optional) 错误消息",
    "orderNo": "(string,optional) 订单号(为空时说明下单失败)",
    "payId": "(integer,optional) 支付流水号",
    "payNo": "(string,optional) 真正支付流水号",
    "retry": "(boolean,optional) 是否可重试"
}
*/



/**
 * 获取订单物流信息[Oa8a]    /v1/order/track
 *
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getOrderTrackV1({
    params: {
        orderNo: '111072487507',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "deliverySupplierType": "(integer,optional) 物流提供方类型(10:京东)",
    "orderNo": "(string,optional) 订单号",
    "orderTrackList": [
        {
            "event": "(string,optional) 事件描述",
            "operator": "(string,optional) 操作者",
            "time": "(string,optional) 时间(yyyy-MM-dd HH:mm:ss)"
        }
    ]
}
*/



/**
 * 提供给oto查询订单详情使用    /v1/otosaas/order/info
 *
 * @params      { String   }      orderId                       oto订单号
 * @params      { String   }      sign                          签名
 */
InstallmentMallGateway.getOtosaasOrderInfoV1({
    params: {
        orderId: '',
        sign: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": {
        "amount": "(integer,optional) 订单支付金额",
        "orderId": "(string,optional) oto saas 订单号",
        "payOrderId": "(string,optional) TO SaaS支付订单号",
        "payStatus": "(integer,optional) 订单支付状态",
        "payStatusDescribe": "(string,optional) 订单支付状态信息描述"
    },
    "message": "(string,optional) "
}
*/



/**
 * 退款订单信息接口    /v1/otosaas/order/refund
 *
 * @params      { Object   }      otoRefundInfoDTO              otoRefundInfoDTO
 */
InstallmentMallGateway.postOtosaasOrderRefundV1({
    data: {
        otoRefundInfoDTO: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(object,optional) ",
    "message": "(string,optional) "
}
*/



/**
 * oto订单状态变更回调通知接口    /v1/otosaas/order/status
 *
 * @params      { Object   }      otoOrderStatusDTO             otoOrderStatusDTO
 */
InstallmentMallGateway.postOtosaasOrderStatusV1({
    data: {
        otoOrderStatusDTO: '',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(object,optional) ",
    "message": "(string,optional) "
}
*/



/**
 * 获取所有银行-15家-并计算最低月供[Pa2a]    /v1/payment/bank/listAll
 *
 * @params      { Number   }      orderPrice                    订单金额
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentBankListAllV1({
    params: {
        orderPrice: '5800',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "bankId": "(integer,optional) 银行Id",
        "bankName": "(string,optional) 银行名称",
        "cardNoLastFour": "(string,optional) 信用卡4位尾号",
        "cardNoMd5": "(string,optional) 全卡号MD5",
        "doubleMonthPrice": "(number,optional) ",
        "monthPrice": "(number,optional) 最小的每期支付额度-即月供",
        "pictureUrl": "(string,optional) 银行logo链接",
        "seqIdx": "(integer,optional) "
    }
]
*/



/**
 * 获取用户已绑定的信用卡-并计算最低月供[Pa6a]    /v1/payment/bank/listBind
 *
 * @params      { Number   }      orderPrice                    订单金额
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentBankListBindV1({
    params: {
        orderPrice: '5800',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "bankId": "(integer,optional) 银行Id",
        "bankName": "(string,optional) 银行名称",
        "cardNoLastFour": "(string,optional) 信用卡4位尾号",
        "cardNoMd5": "(string,optional) 全卡号MD5",
        "doubleMonthPrice": "(number,optional) ",
        "monthPrice": "(number,optional) 最小的每期支付额度-即月供",
        "pictureUrl": "(string,optional) 银行logo链接",
        "seqIdx": "(integer,optional) "
    }
]
*/



/**
 * 获取在商品详情页的价格说明    /v1/payment/beforePrePayNotice
 *
 * @params      { Number   }      orderPrice                    订单金额
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentBeforePrePayNoticeV1({
    params: {
        orderPrice: '5800',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "details": [
            {
                "bankName": "(string,optional) 银行名称",
                "bankPictureUrl": "(string,optional) 银行logo链接",
                "monthPrice": "(number,optional) 月供",
                "receiveMoneyType": "(integer,optional) 收款类型,1-分期收取,2-一次性收取"
            }
        ],
        "period": "(integer,optional) 第几期"
    }
]
*/



/**
 * 绑卡支付-支付+发验证码2个动作(卡已绑定)[Pa5a]    /v1/payment/bindCardPayment
 *
 * @params      { Object   }      bindCardPayParam              绑卡支付参数
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postPaymentBindCardPaymentV1({
    data: {
        bindCardPayParam: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(object,optional) ",
    "msg": "(string,optional) "
}
*/



/**
 * 获取预绑卡详情-进入绑卡页面请求的接口[Pa3a]    /v1/payment/card/preBindCard
 *
 * @params      { Integer  }      bankId                        银行Id
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentCardPreBindCardV1({
    params: {
        bankId: '8',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bankName": "(string,optional) 银行名称",
    "bankPictureUrl": "(string,optional) 银行logo链接",
    "cardNos": [
        {
            "cardNo": "(string,optional) ",
            "trueName": "(string,optional) "
        }
    ],
    "idNo": "(string,optional) 身份证号",
    "phone": "(string,optional) 手机号",
    "preventNotice": "(string,optional) 支付环节预阻止用户的提示",
    "realNameStatus": "(integer,optional) 实名状态值-1实名已认证,0实名未认证",
    "trueName": "(string,optional) 真实姓名"
}
*/



/**
 * 获取预绑卡详情-进入绑卡页面请求的接口V2[Pa3a]    /v1/payment/card/preBindCardV2
 *
 * @params      { Object   }      preBindCardRequest            preBindCardRequest
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postPaymentCardPreBindCardV2V1({
    data: {
        preBindCardRequest: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bankName": "(string,optional) 银行名称",
    "bankPictureUrl": "(string,optional) 银行logo链接",
    "cardNo": "(string,optional) ",
    "cardNoMd5": "(string,optional) ",
    "cardNos": [
        {
            "cardNo": "(string,optional) ",
            "trueName": "(string,optional) "
        }
    ],
    "idNo": "(string,optional) 身份证号",
    "phone": "(string,optional) 手机号",
    "preventNotice": "(string,optional) 支付环节预阻止用户的提示",
    "realNameStatus": "(integer,optional) 实名状态值-1实名已认证,0实名未认证",
    "trueName": "(string,optional) 真实姓名"
}
*/



/**
 * 检查订单是否满足支付条件（去支付按钮）    /v1/payment/checkOrder
 *
 * @params      { String   }      orderNo                       orderNo
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentCheckOrderV1({
    params: {
        orderNo: '111072487507',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"boolean"
*/



/**
 * 卡要素支付-绑卡+支付+发验证码3个动作[Pa3b]    /v1/payment/payment
 *
 * @params      { Object   }      payInfoRequest                支付卡号信息
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postPaymentPaymentV1({
    data: {
        payInfoRequest: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(object,optional) ",
    "msg": "(string,optional) "
}
*/



/**
 * 获取预支付详情-进入收银台页面请求的接口[Pa1a]    /v1/payment/prePay
 *
 * @params      { Integer  }      bankId                        银行Id
 * @params      { String   }      orderNo                       orderNo
 * @params      { String   }      cardNoMd5                     卡号Md5值
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentPrePayV1({
    params: {
        bankId: '7',
        orderNo: '111072487507',
        cardNoMd5: 'eae4378ec2b6711dd090defa125803d7',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bankId": "(integer,optional) 银行Id,如果首次支付则置0,否则显示最近一个信用卡",
    "bankName": "(string,optional) 银行名称,如果首次支付则置空字符串",
    "bankPictureUrl": "(string,optional) 银行logo链接,如果首次支付则置空字符串",
    "cardNoLastFour": "(string,optional) 信用卡4位尾号",
    "cardNoMd5": "(string,optional) 卡号Md5",
    "exitPayNoticeType": "(integer,optional) 退出弹框类型，1-默认；2-搜集理由",
    "orderPrice": "(number,optional) 订单价格-按产品原型来决定是否显示",
    "preventNotice": "(string,optional) 支付环节预阻止用户的提示",
    "receiveMoneyType": "(integer,optional) 收款类型,1-分期收取,2-一次性收取",
    "supportPeriods": [
        {
            "details": [
                {
                    "monthPrice": "(number,optional) 月供",
                    "periodNo": "(integer,optional) 第几期",
                    "price": "(number,optional) 本金",
                    "serviceAmount": "(number,optional) 每月服务费"
                }
            ],
            "monthPrice": "(number,optional) 月供",
            "monthServiceAmount": "(number,optional) 月服务费",
            "notice": "(string,optional) 左上角提示",
            "oldMonthPrice": "(number,optional) 优惠前最小的每期支付额度-即月供",
            "oldServiceAmount": "(number,optional) 优惠前服务费,当收款类型=分期收取时这个是每月服务费;当收款类型=一次性收取时这个是合计收取服务费",
            "oldTotalAmount": "(number,optional) 优惠前合计需还",
            "payPrice": "(number,optional) 分期金额",
            "period": "(integer,optional) 第几期",
            "serviceAmount": "(number,optional) 总服务费",
            "totalAmount": "(number,optional) 合计需还"
        }
    ]
}
*/



/**
 * 重发短信验证码[]    /v1/payment/resendSmsCode
 *
 * @params      { Object   }      resendSmsCodeRequest          支付卡号信息
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postPaymentResendSmsCodeV1({
    data: {
        resendSmsCodeRequest: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(object,optional) ",
    "msg": "(string,optional) "
}
*/



/**
 * 获取简单支付记录    /v1/payment/simplePayment
 *
 * @params      { String   }      orderNo                       orderNo
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentSimplePaymentV1({
    params: {
        orderNo: '111072487507',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "orderNo": "(string,optional) ",
    "payNo": "(string,optional) ",
    "status": "(integer,optional) "
}
*/



/**
 * 验证短信验证码[Pa4a]    /v1/payment/verifyPayCode
 *
 * @params      { Object   }      verifyPayCodeRequest          支付卡号信息
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postPaymentVerifyPayCodeV1({
    data: {
        verifyPayCodeRequest: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(object,optional) ",
    "msg": "(string,optional) "
}
*/



/**
 * 获取推荐的商品    /v1/promotionProduct/recommend
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      promotionNo                   活动编号
 * @params      { Integer  }      orderIndex                    group的添加顺序
 * @params      { Integer  }      pageIndex                     页码
 * @params      { Integer  }      pageSize                      每页记录数
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 */
InstallmentMallGateway.getPromotionProductRecommendV1({
    params: {
        latitude: '30',
        longitude: '120',
        promotionNo: '',
        orderIndex: '1',
        pageIndex: '0',
        pageSize: '10',
    },
    headers: {
        userId: '', //userId
        'X-FROM-TYPE': '', //X-FROM-TYPE
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "backgroundCss": "(string,optional) 背景css",
    "backgroundImageUrl": "(string,optional) 背景图片链接",
    "bannerImageUrl": "(string,optional) 顶部活动图",
    "bottomBanner": {
        "entranceId": "(integer,optional) entranceId，前端埋点使用",
        "imageUrl": "(string,optional) 图片链接",
        "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string,optional) 跳转链接，可能为空"
    },
    "productGroups": [
        {
            "backgroundCss": "(string,optional) 背景颜色",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "title": "(string,optional) 商品分组标题",
            "titleImageUrl": "(string,optional) 标题的图片"
        }
    ],
    "tag": "(string,optional) 活动标签",
    "title": "(string,optional) 标题"
}
*/



/**
 * 获取热门商品列表[Sa1b]    /v1/salesProduct/hotProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      page                          页数，从0开始
 * @params      { Integer  }      limit                         每页数量
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 */
InstallmentMallGateway.getSalesProductHotProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        page: '1',
        limit: '20',
    },
    headers: {
        userId: '', //userId
        'X-FROM-TYPE': '', //X-FROM-TYPE
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "pageIndex": "(integer,optional) ",
    "pageSize": "(integer,optional) ",
    "rowCount": "(integer,optional) ",
    "rows": [
        {
            "allStockCount": "(integer,optional) 全部库存",
            "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
            "imageUrl": "(string,optional) 商品图片",
            "installmentPrice": "(number,optional) 最低分期价格",
            "marketPrice": "(number,optional) 市场价",
            "price": "(number,optional) 商品价格",
            "process": "(number,optional) 进度",
            "productNo": "(string,optional) 商品编号",
            "stockCount": "(integer,optional) 剩余库存",
            "subTitle": "(string,optional) 副标题（商品描述）",
            "tag": "(string,optional) 标签",
            "title": "(string,optional) 主标题（商品名称）"
        }
    ]
}
*/



/**
 * 获取秒杀商品以及Banner[Sa1c]    /v1/salesProduct/indexInfo
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 */
InstallmentMallGateway.getSalesProductIndexInfoV1({
    params: {
        latitude: '30',
        longitude: '120',
    },
    headers: {
        userId: '', //userId
        'X-FROM-TYPE': '', //X-FROM-TYPE
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
            "extraLink": "(string,optional) 跳转链接，可能为空",
            "imagePath": "(string,optional) 图片链接"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer,optional) 开始时间",
            "expireTime": "(integer,optional) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer,optional) 系统时间"
        }
    ]
}
*/



/**
 * 获取oto saas 产品入口    /v1/salesProduct/otosaas/enter/list
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      fromType                      渠道商城编码
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getSalesProductOtosaasEnterListV1({
    params: {
        latitude: '30',
        longitude: '120',
        fromType: '10',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "entranceId": "(string,optional) ",
        "iconUrl": "(string,optional) ",
        "name": "(string,optional) ",
        "open": "(boolean,optional) ",
        "orderType": "(string,optional) ",
        "routePath": "(string,optional) "
    }
]
*/



/**
 * 获取商品详情[Sa2a]    /v1/salesProduct/productDetail
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      receiverAddrId                用户收获地址id
 * @params      { String   }      productNo                     商品编号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getSalesProductProductDetailV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        receiverAddrId: '-1',
        productNo: '123456H11',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(integer,optional) 开始时间",
    "bannerImages": "(Array[string],optional) 商品轮播图片",
    "content": "(string,optional) 商品详情",
    "description": "(string,optional) 商品描述",
    "expireTime": "(integer,optional) 结束时间",
    "installmentPrice": "(number,optional) 分期价格，根据最低价格的单品进行分期计算结果",
    "name": "(string,optional) 商品名称",
    "price": "(number,optional) 单品价格，拥有多个单品的情况下，选取单价最低的",
    "promotionType": "(integer,optional) 商品的推广类型",
    "receiverAddrCode": "(string,optional) 用户地址四级编码",
    "receiverAddrId": "(integer,optional) 用户地址信息id，若用户未选地址信息，则为-1",
    "receiverAddrStr": "(string,optional) 用户地址信息详情，若是根据四级编码返回的，则是地址描述",
    "skuInfos": [
        {
            "afterSaleRemark": "(string,optional) 单品售后描述",
            "imagePath": "(string,optional) 单品大图",
            "installmentPrice": "(number,optional) 单品分期价格",
            "price": "(number,optional) 单品价格",
            "productNo": "(string,optional) 单品对应的产品编号",
            "skuNo": "(string,optional) 单品编号",
            "skuProps": "(object,optional) 单品属性",
            "stockCount": "(integer,optional) 库存数量",
            "subImagePath": "(string,optional) 单品小图",
            "subTitle": "(string,optional) 单品描述",
            "title": "(string,optional) 单品名称"
        }
    ],
    "supportCoupon": "(boolean,optional) 是否支持优惠券",
    "systemTime": "(integer,optional) 系统当前时间",
    "typeCode": "(integer,optional) 商品供应商",
    "unavailable": "(boolean,optional) 目前是否不可购买"
}
*/



/**
 * 获取秒杀商品列表[Sa1a]    /v1/salesProduct/secKillProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getSalesProductSecKillProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
            "activeTime": "(integer,optional) 开始时间",
            "expireTime": "(integer,optional) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer,optional) 系统时间"
        }
    ],
    "systemTime": "(string,optional) 系统当前时间"
}
*/



/**
 * 获取优惠券分享配置信息    /v1/share/couponConfig
 *
 * @params      { String   }      orderNo                       订单编号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getShareCouponConfigV1({
    params: {
        orderNo: '111072548186',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer,optional) 配置Id",
    "fromType": "(integer,optional) 分享链接来源",
    "orderNo": "(string,optional) 订单编号",
    "shareSn": "(string,optional) 分享标识",
    "shareUserId": "(integer,optional) 分享者Id",
    "status": "(integer,optional) 状态"
}
*/



/**
 * 好友优惠券领取信息    /v1/share/couponReceivedList
 *
 * @params      { String   }      shareSn                       分享标识
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getShareCouponReceivedListV1({
    params: {
        shareSn: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
            "couponValue": "(number,optional) 领取金额",
            "createTime": "(integer,optional) 领取时间",
            "imageUrl": "(string,optional) 用户头像",
            "name": "(string,optional) 用户昵称",
            "userId": "(integer,optional) 用户51Id"
        }
    ],
    "imageUrl": "(string,optional) 分享者头像",
    "name": "(string,optional) 分享者昵称",
    "shareSn": "(string,optional) 分享标识",
    "userId": "(integer,optional) "
}
*/



/**
 * 猜你喜欢商品展示列表    /v1/share/favoriteProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getShareFavoriteProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "allStockCount": "(integer,optional) 全部库存",
        "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
        "imageUrl": "(string,optional) 商品图片",
        "installmentPrice": "(number,optional) 最低分期价格",
        "marketPrice": "(number,optional) 市场价",
        "price": "(number,optional) 商品价格",
        "process": "(number,optional) 进度",
        "productNo": "(string,optional) 商品编号",
        "stockCount": "(integer,optional) 剩余库存",
        "subTitle": "(string,optional) 副标题（商品描述）",
        "tag": "(string,optional) 标签",
        "title": "(string,optional) 主标题（商品名称）"
    }
]
*/



/**
 * 新人专区商品展示列表    /v1/share/newUserProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getShareNewUserProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "allStockCount": "(integer,optional) 全部库存",
        "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
        "imageUrl": "(string,optional) 商品图片",
        "installmentPrice": "(number,optional) 最低分期价格",
        "marketPrice": "(number,optional) 市场价",
        "price": "(number,optional) 商品价格",
        "process": "(number,optional) 进度",
        "productNo": "(string,optional) 商品编号",
        "stockCount": "(integer,optional) 剩余库存",
        "subTitle": "(string,optional) 副标题（商品描述）",
        "tag": "(string,optional) 标签",
        "title": "(string,optional) 主标题（商品名称）"
    }
]
*/



/**
 * 领取优惠券    /v1/share/receive
 *
 * @params      { String   }      shareSn                       分享标识
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.putShareReceiveV1({
    params: {
        shareSn: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(string,optional) ",
    "msg": "(string,optional) "
}
*/



/**
 * 天天秒杀商品展示列表    /v1/share/secKillProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getShareSecKillProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "activeTime": "(integer,optional) 开始时间",
        "expireTime": "(integer,optional) 结束时间",
        "products": [
            {
                "allStockCount": "(integer,optional) 全部库存",
                "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                "imageUrl": "(string,optional) 商品图片",
                "installmentPrice": "(number,optional) 最低分期价格",
                "marketPrice": "(number,optional) 市场价",
                "price": "(number,optional) 商品价格",
                "process": "(number,optional) 进度",
                "productNo": "(string,optional) 商品编号",
                "stockCount": "(integer,optional) 剩余库存",
                "subTitle": "(string,optional) 副标题（商品描述）",
                "tag": "(string,optional) 标签",
                "title": "(string,optional) 主标题（商品名称）"
            }
        ],
        "systemTime": "(integer,optional) 系统时间"
    }
]
*/



/**
 * 分享链接商品展示列表    /v1/share/shareProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getShareShareProductsV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
            "allStockCount": "(integer,optional) 全部库存",
            "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
            "imageUrl": "(string,optional) 商品图片",
            "installmentPrice": "(number,optional) 最低分期价格",
            "marketPrice": "(number,optional) 市场价",
            "price": "(number,optional) 商品价格",
            "process": "(number,optional) 进度",
            "productNo": "(string,optional) 商品编号",
            "stockCount": "(integer,optional) 剩余库存",
            "subTitle": "(string,optional) 副标题（商品描述）",
            "tag": "(string,optional) 标签",
            "title": "(string,optional) 主标题（商品名称）"
        }
    ],
    "newUserProducts": [
        {
            "allStockCount": "(integer,optional) 全部库存",
            "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
            "imageUrl": "(string,optional) 商品图片",
            "installmentPrice": "(number,optional) 最低分期价格",
            "marketPrice": "(number,optional) 市场价",
            "price": "(number,optional) 商品价格",
            "process": "(number,optional) 进度",
            "productNo": "(string,optional) 商品编号",
            "stockCount": "(integer,optional) 剩余库存",
            "subTitle": "(string,optional) 副标题（商品描述）",
            "tag": "(string,optional) 标签",
            "title": "(string,optional) 主标题（商品名称）"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer,optional) 开始时间",
            "expireTime": "(integer,optional) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer,optional) 系统时间"
        }
    ]
}
*/



/**
 * 个人优惠券领取展示    /v1/share/userCoupon
 *
 * @params      { String   }      shareSn                       分享标识
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getShareUserCouponV1({
    params: {
        shareSn: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "amount": "(number,optional) 默认券金额|随机金额下限",
    "batchCode": "(string,optional) 批次号",
    "couponName": "(string,optional) 优惠券名称",
    "couponSectionConfigId": "(integer,optional) 优惠券版块配置ID",
    "couponStatus": "(integer,optional) 优惠券状态(0:未领取,1:已领取)",
    "couponType": "(integer,optional) 优惠券类型:CouponTypeEnum",
    "couponTypeName": "(string,optional) 优惠券类型:CouponTypeEnum",
    "orderRequiredAmount": "(number,optional) 订单使用限制金额(分期商城满减券使用)",
    "validTimePeriodText": "(string,optional) 有效时间范围文案"
}
*/



/**
 * timeout    /v1/tool/timeout
 *
 * @params      { Integer  }      seconds                       seconds
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getToolTimeoutV1({
    params: {
        seconds: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer,optional) ",
    "data": "(string,optional) ",
    "msg": "(string,optional) "
}
*/



/**
 * 添加用户收货地址[Ta2a]    /v1/user/receiverAddress/add
 *
 * @params      { Object   }      receiveAddressDTO             收货地址
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postUserReceiverAddressAddV1({
    data: {
        receiveAddressDTO: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 获取一级地址[Ta6a]    /v1/user/receiverAddress/allProvince
 *
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getUserReceiverAddressAllProvinceV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "name": "(string,optional) ",
        "value": "(integer,optional) "
    }
]
*/



/**
 * 获取二级地址[Ta7a]    /v1/user/receiverAddress/citiesByProvinceId/{provinceId}
 *
 * @params      { Integer  }      provinceId                    provinceId
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getUserReceiverAddressCitiesByProvinceIdProvinceIdV1({
    params: {
        provinceId: '15',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "name": "(string,optional) ",
        "value": "(integer,optional) "
    }
]
*/



/**
 * 获取三级地址[Ta8a]    /v1/user/receiverAddress/countiesByCityId/{cityId}
 *
 * @params      { Integer  }      cityId                        cityId
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getUserReceiverAddressCountiesByCityIdCityIdV1({
    params: {
        cityId: '1213',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "name": "(string,optional) ",
        "value": "(integer,optional) "
    }
]
*/



/**
 * 删除用户收货地址[Ta4c]    /v1/user/receiverAddress/delete
 *
 * @params      { Integer  }      autoId                        收货地址ID
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.deleteUserReceiverAddressDeleteV1({
    params: {
        autoId: '1',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 获取收货地址-修改前查询[Ta4a]    /v1/user/receiverAddress/get
 *
 * @params      { Integer  }      autoId                        收货地址ID
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getUserReceiverAddressGetV1({
    params: {
        autoId: '1',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "autoId": "(integer,optional) 自增主键",
    "cityCode": "(string,optional) 城市编码",
    "cityName": "(string,optional) 城市名称",
    "countyCode": "(string,optional) 区县编码",
    "countyName": "(string,optional) 区县名称",
    "detailAddress": "(string,optional) 详细地址",
    "isDefault": "(boolean,optional) 是否为默认地址",
    "phone": "(string,optional) 收货人手机号",
    "provinceCode": "(string,optional) 省份编码",
    "provinceName": "(string,optional) 省份名称",
    "receiver": "(string,optional) 收货人姓名",
    "status": "(integer,optional) 状态",
    "townCode": "(string,optional) 乡镇编码",
    "townName": "(string,optional) 乡镇名称",
    "typeCode": "(integer,optional) 地区编码提供方类型(10:京东)",
    "userId": "(integer,optional) 51用户ID"
}
*/



/**
 * 获取用户收货地址列表[Ta3a/Sa6a]    /v1/user/receiverAddress/list
 *
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getUserReceiverAddressListV1({
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "autoId": "(integer,optional) 自增主键",
        "cityCode": "(string,optional) 城市编码",
        "cityName": "(string,optional) 城市名称",
        "countyCode": "(string,optional) 区县编码",
        "countyName": "(string,optional) 区县名称",
        "detailAddress": "(string,optional) 详细地址",
        "isDefault": "(boolean,optional) 是否为默认地址",
        "phone": "(string,optional) 收货人手机号",
        "provinceCode": "(string,optional) 省份编码",
        "provinceName": "(string,optional) 省份名称",
        "receiver": "(string,optional) 收货人姓名",
        "status": "(integer,optional) 状态",
        "townCode": "(string,optional) 乡镇编码",
        "townName": "(string,optional) 乡镇名称",
        "typeCode": "(integer,optional) 地区编码提供方类型(10:京东)",
        "userId": "(integer,optional) 51用户ID"
    }
]
*/



/**
 * 设置默认用户收货地址[Ta4c]    /v1/user/receiverAddress/setDefault
 *
 * @params      { Integer  }      autoId                        收货地址ID
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.putUserReceiverAddressSetDefaultV1({
    params: {
        autoId: '1',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 获取四级地址[Ta9a]    /v1/user/receiverAddress/townsByCountyId/{countyId}
 *
 * @params      { Integer  }      countyId                      countyId
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getUserReceiverAddressTownsByCountyIdCountyIdV1({
    params: {
        countyId: '3411',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "name": "(string,optional) ",
        "value": "(integer,optional) "
    }
]
*/



/**
 * 修改用户收货地址[Ta4b]    /v1/user/receiverAddress/update
 *
 * @params      { Object   }      receiveAddressDTO             收货地址
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.putUserReceiverAddressUpdateV1({
    data: {
        receiveAddressDTO: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 获取订单[Oa2a/Ob2a]    /v2/order/get
 *
 * @params      { String   }      orderNo                       订单号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getOrderGetV2({
    params: {
        orderNo: '111072487507',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "canShare": "(boolean,optional) 能否分享",
    "cashierPay": "(boolean,optional) 是否为即刻有收银台支付",
    "couponName": "(string,optional) 优惠券名称",
    "couponPrice": "(number,optional) 优惠券抵扣",
    "couponType": "(integer,optional) 优惠券类型（0:无优惠券,1:新人专享(废除),2:票券系统优惠券）",
    "currentMillis": "(integer,optional) 当前时间戳(未支付/支付失败时有效)",
    "deliverySupplierType": "(integer,optional) 物流提供方类型（10:京东）",
    "freight": "(number,optional) 运费",
    "fromType": "(integer,optional) 投放来源",
    "fullAddress": "(string,optional) 完整地址",
    "invoiceTitleCode": "(integer,optional) 发票抬头（1:个人,2:企业）",
    "invoiceType": "(integer,optional) 发票类型（1:电子普通发票）",
    "invoiceUrl": "(string,optional) 电子发票链接",
    "orderNo": "(string,optional) 订单编号",
    "orderPrice": "(number,optional) 订单价格( = 商品价格 - 优惠券抵扣 + 运费)",
    "orderStatus": "(integer,optional) 订单状态",
    "orderTime": "(string,optional) 下单时间",
    "payExpireDateMillis": "(integer,optional) 支付过期时间戳(即下单时间+过期时间，未支付/支付失败时有效)",
    "paymentStatus": "(integer,optional) 支付状态",
    "paymentTime": "(string,optional) 支付时间",
    "paymentType": "(string,optional) 支付方式",
    "periods": "(integer,optional) 分期期数",
    "productPrice": "(number,optional) 商品价格( = sku1单价 * sku1数量 + sku2单价 * sku2数量 + ...)",
    "productSupplierType": "(integer,optional) 商品提供方类型（10:京东）",
    "promotionType": "(integer,optional) 促销类型(0:普通,1:秒杀)",
    "receiverName": "(string,optional) 收货人姓名",
    "receiverPhone": "(string,optional) 收货人手机号",
    "refundStatus": "(integer,optional) 退款状态",
    "showInvoiceEntry": "(boolean,optional) 是否展示电子发票入口",
    "subOrderList": [
        {
            "afterSale": "(boolean,optional) 是否有售后服务记录",
            "afterSaleSupport": "(boolean,optional) 是否支持售后服务",
            "orderDetailNo": "(string,optional) 订单详情编号",
            "productAfterSaleRemark": "(string,optional) 商品售后描述",
            "productName": "(string,optional) 商品名称",
            "productPicUrl": "(string,optional) 商品图片URL",
            "productPrice": "(number,optional) 商品价格",
            "skuAttributes": "(string,optional) 所选SKU属性集合",
            "skuCount": "(integer,optional) SKU数量",
            "skuNo": "(string,optional) SKU编号",
            "skuPrice": "(number,optional) SKU单价"
        }
    ],
    "thirdPartyOrderNo": "(string,optional) 第三方订单编号",
    "userId": "(integer,optional) 51用户ID"
}
*/



/**
 * 用户是否展示小黄条／还款金领取成功提示    /v2/order/showRepayfundNotice
 *
 * @params      { String   }      orderNo                       订单编号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getOrderShowRepayfundNoticeV2({
    params: {
        orderNo: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"boolean"
*/



/**
 * 提交订单[Oa4b]    /v2/order/submit
 *
 * @params      { String   }      platform                      h5/app
 * @params      { Object   }      orderSubmitDTO                订单提交请求
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.postOrderSubmitV2({
    params: {
        platform: 'app',
    },
    data: {
        orderSubmitDTO: '',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "extInfo": "(string,optional) 支付消息",
    "isSuccess": "(boolean,optional) 是否成功",
    "message": "(string,optional) 错误消息",
    "orderNo": "(string,optional) 订单号(为空时说明下单失败)",
    "payId": "(integer,optional) 支付流水号",
    "payNo": "(string,optional) 真正支付流水号",
    "retry": "(boolean,optional) 是否可重试"
}
*/



/**
 * 检查订单是否满足支付条件（去支付按钮）    /v2/payment/checkOrder
 *
 * @params      { String   }      orderNo                       orderNo
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getPaymentCheckOrderV2({
    params: {
        orderNo: '111072487507',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "isSuccess": "(boolean,optional) 是否满足支付条件",
    "payId": "(integer,optional) 收银台支付流水号"
}
*/



/**
 * 获取首页相关商品以及Banner[Sa1c]    /v2/salesProduct/indexInfo
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 */
InstallmentMallGateway.getSalesProductIndexInfoV2({
    params: {
        latitude: '30',
        longitude: '120',
    },
    headers: {
        userId: '', //userId
        'X-FROM-TYPE': '', //X-FROM-TYPE
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
            "entranceId": "(integer,optional) entranceId，前端埋点使用",
            "imageUrl": "(string,optional) 图片链接",
            "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string,optional) 跳转链接，可能为空"
        }
    ],
    "newUser": "(boolean,optional) newUser",
    "promotions": [
        {
            "imageUrl": "(string,optional) 图标图片链接",
            "promotionNo": "(string,optional) 专题编号",
            "subTitle": "(string,optional) 副标题",
            "tag": "(string,optional) 标签",
            "title": "(string,optional) 主标题"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer,optional) 开始时间",
            "expireTime": "(integer,optional) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer,optional) 系统时间"
        }
    ]
}
*/



/**
 * 获取商品详情[Sa2a]    /v2/salesProduct/productDetail
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      receiverAddrId                用户收获地址id
 * @params      { String   }      productNo                     商品编号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getSalesProductProductDetailV2({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        receiverAddrId: '-1',
        productNo: '123456H11',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(integer,optional) 开始时间",
    "bannerImages": "(Array[string],optional) 商品轮播图片",
    "content": "(string,optional) 商品详情",
    "description": "(string,optional) 商品描述",
    "expireTime": "(integer,optional) 结束时间",
    "installmentPrice": "(number,optional) 分期价格，根据最低价格的单品进行分期计算结果",
    "name": "(string,optional) 商品名称",
    "price": "(number,optional) 单品价格，拥有多个单品的情况下，选取单价最低的",
    "promotionType": "(integer,optional) 商品的推广类型",
    "receiverAddrCode": "(string,optional) 用户地址四级编码",
    "receiverAddrId": "(integer,optional) 用户地址信息id，若用户未选地址信息，则为-1",
    "receiverAddrStr": "(string,optional) 用户地址信息详情，若是根据四级编码返回的，则是地址描述",
    "skuInfos": [
        {
            "afterSaleRemark": "(string,optional) 单品售后描述",
            "imagePath": "(string,optional) 单品大图",
            "installmentPrice": "(number,optional) 单品分期价格",
            "price": "(number,optional) 单品价格",
            "productNo": "(string,optional) 单品对应的产品编号",
            "skuNo": "(string,optional) 单品编号",
            "skuProps": "(object,optional) 单品属性",
            "stockCount": "(integer,optional) 库存数量",
            "subImagePath": "(string,optional) 单品小图",
            "subTitle": "(string,optional) 单品描述",
            "title": "(string,optional) 单品名称"
        }
    ],
    "supportCoupon": "(boolean,optional) 是否支持优惠券",
    "systemTime": "(integer,optional) 系统当前时间",
    "typeCode": "(integer,optional) 商品供应商",
    "unavailable": "(boolean,optional) 目前是否不可购买"
}
*/



/**
 * 获取专题商品列表    /v2/salesProduct/promotion/{promotionNo}
 *
 * @params      { String   }      promotionNo                   专题编号
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getSalesProductPromotionPromotionNoV2({
    params: {
        promotionNo: '30',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "backgroundCss": "(string,optional) 背景css",
    "backgroundCssEnd": "(string,optional) 背景css-背景渐变色结束颜色",
    "backgroundImageUrl": "(string,optional) 背景图片链接",
    "bannerImageUrl": "(string,optional) 顶部活动图",
    "bottomBanner": {
        "entranceId": "(integer,optional) entranceId，前端埋点使用",
        "imageUrl": "(string,optional) 图片链接",
        "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
        "linkUlr": "(string,optional) 跳转链接，可能为空"
    },
    "couponBackgroundCss": "(string,optional) 优惠券颜色",
    "couponBackgroundImageUrl": "(string,optional) 优惠券背景图片",
    "couponTitle": "(string,optional) 优惠券标题",
    "productGroups": [
        {
            "backgroundCss": "(string,optional) 背景颜色",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "title": "(string,optional) 商品分组标题",
            "titleImageUrl": "(string,optional) 标题的图片"
        }
    ],
    "tag": "(string,optional) 活动标签",
    "title": "(string,optional) 标题"
}
*/



/**
 * 获取秒杀商品以及Banner[Sa1c]    /v2/salesProduct/secKillProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 */
InstallmentMallGateway.getSalesProductSecKillProductsV2({
    params: {
        latitude: '30',
        longitude: '120',
    },
    headers: {
        userId: '', //userId
        'X-FROM-TYPE': '', //X-FROM-TYPE
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
            "activeTime": "(integer,optional) 开始时间",
            "expireTime": "(integer,optional) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer,optional) 系统时间"
        }
    ],
    "systemTime": "(string,optional) 系统当前时间"
}
*/



/**
 * 领取页面获取优惠券列表    /v2/user/coupon/listForReceive
 *
 * @params      { Integer  }      sectionType                   版块类型(0:全场通用,3:活动专区)
 * @params      { String   }      sectionNo                     版块编号
 * @params      { Integer  }      flag                          标识(0:一定包含全场通用券)
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getUserCouponListForReceiveV2({
    params: {
        sectionType: '3',
        sectionNo: '',
        flag: '0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "amount": "(number,optional) 默认券金额|随机金额下限",
        "batchCode": "(string,optional) 批次号",
        "couponName": "(string,optional) 优惠券名称",
        "couponSectionConfigId": "(integer,optional) 优惠券版块配置ID",
        "couponStatus": "(integer,optional) 优惠券状态(0:未领取,1:已领取)",
        "couponType": "(integer,optional) 优惠券类型:CouponTypeEnum",
        "couponTypeName": "(string,optional) 优惠券类型:CouponTypeEnum",
        "orderRequiredAmount": "(number,optional) 订单使用限制金额(分期商城满减券使用)",
        "validTimePeriodText": "(string,optional) 有效时间范围文案"
    }
]
*/



/**
 * 领取多张优惠券    /v2/user/coupon/multipleReceive
 *
 * @params      { String   }      couponSectionConfigId                            优惠券版块配置ID，多个id以逗号分隔
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.putUserCouponMultipleReceiveV2({
    params: {
        couponSectionConfigId: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 领取优惠券    /v2/user/coupon/receive
 *
 * @params      { Integer  }      couponSectionConfigId                            优惠券版块配置ID
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.putUserCouponReceiveV2({
    params: {
        couponSectionConfigId: '',
    },
    headers: {
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"integer"
*/



/**
 * 获取猜你喜欢商品详情    /v3/salesProduct/favoriteProducts
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getSalesProductFavoriteProductsV3({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
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
        "allStockCount": "(integer,optional) 全部库存",
        "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
        "imageUrl": "(string,optional) 商品图片",
        "installmentPrice": "(number,optional) 最低分期价格",
        "marketPrice": "(number,optional) 市场价",
        "price": "(number,optional) 商品价格",
        "process": "(number,optional) 进度",
        "productNo": "(string,optional) 商品编号",
        "stockCount": "(integer,optional) 剩余库存",
        "subTitle": "(string,optional) 副标题（商品描述）",
        "tag": "(string,optional) 标签",
        "title": "(string,optional) 主标题（商品名称）"
    }
]
*/



/**
 * 获取即刻有首页内容    /v3/salesProduct/jkyIndexPage
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      userId                        userId
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 */
InstallmentMallGateway.getSalesProductJkyIndexPageV3({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        userId: '', //userId
        'X-FROM-TYPE': '', //X-FROM-TYPE
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "bannerL1": [
        {
            "entranceId": "(integer,optional) entranceId，前端埋点使用",
            "imageUrl": "(string,optional) 图片链接",
            "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string,optional) 跳转链接，可能为空"
        }
    ],
    "bannerL1Text": "(Array[string],optional) 清凉一夏底部文案显示，最长7个子",
    "bannerL2": [
        {
            "entranceId": "(integer,optional) entranceId，前端埋点使用",
            "imageUrl": "(string,optional) 图片链接",
            "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string,optional) 跳转链接，可能为空"
        }
    ],
    "bannerL3": [
        {
            "entranceId": "(integer,optional) entranceId，前端埋点使用",
            "imageUrl": "(string,optional) 图片链接",
            "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string,optional) 跳转链接，可能为空"
        }
    ],
    "discountOverSeckill": "(boolean,optional) 折扣专区是否在秒杀专区上方, true是",
    "discountProducts": [
        {
            "allStockCount": "(integer,optional) 全部库存",
            "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
            "imageUrl": "(string,optional) 商品图片",
            "installmentPrice": "(number,optional) 最低分期价格",
            "marketPrice": "(number,optional) 市场价",
            "price": "(number,optional) 商品价格",
            "process": "(number,optional) 进度",
            "productNo": "(string,optional) 商品编号",
            "stockCount": "(integer,optional) 剩余库存",
            "subTitle": "(string,optional) 副标题（商品描述）",
            "tag": "(string,optional) 标签",
            "title": "(string,optional) 主标题（商品名称）"
        }
    ],
    "guideBanner": [
        {
            "entranceId": "(integer,optional) entranceId，前端埋点使用",
            "imageUrl": "(string,optional) 图片链接",
            "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string,optional) 跳转链接，可能为空"
        }
    ],
    "otoSaasBanner": [
        {
            "entranceId": "(integer,optional) entranceId，前端埋点使用",
            "imageUrl": "(string,optional) 图片链接",
            "linkType": "(integer,optional) 跳转链接类型，1壳内跳转链接，2壳外跳转链接",
            "linkUlr": "(string,optional) 跳转链接，可能为空",
            "tag": "(string,optional) 角标，文字",
            "title": "(string,optional) 标题，文字（显示在图标下方）"
        }
    ],
    "promotions": [
        {
            "imageUrl": "(string,optional) 图标图片链接",
            "promotionNo": "(string,optional) 专题编号",
            "subTitle": "(string,optional) 副标题",
            "tag": "(string,optional) 标签",
            "title": "(string,optional) 主标题"
        }
    ],
    "secKillProducts": [
        {
            "activeTime": "(integer,optional) 开始时间",
            "expireTime": "(integer,optional) 结束时间",
            "products": [
                {
                    "allStockCount": "(integer,optional) 全部库存",
                    "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
                    "imageUrl": "(string,optional) 商品图片",
                    "installmentPrice": "(number,optional) 最低分期价格",
                    "marketPrice": "(number,optional) 市场价",
                    "price": "(number,optional) 商品价格",
                    "process": "(number,optional) 进度",
                    "productNo": "(string,optional) 商品编号",
                    "stockCount": "(integer,optional) 剩余库存",
                    "subTitle": "(string,optional) 副标题（商品描述）",
                    "tag": "(string,optional) 标签",
                    "title": "(string,optional) 主标题（商品名称）"
                }
            ],
            "systemTime": "(integer,optional) 系统时间"
        }
    ]
}
*/



/**
 * 获取商品详情[Sa2a]    /v3/salesProduct/productDetail
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { Integer  }      receiverAddrId                用户收获地址id
 * @params      { String   }      productNo                     商品编号
 * @params      { Integer  }      status                        用户中奖状态
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getSalesProductProductDetailV3({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
        receiverAddrId: '-1',
        productNo: '123456H11',
        status: '-1',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "activeTime": "(integer,optional) 开始时间",
    "bannerImages": "(Array[string],optional) 商品轮播图片",
    "content": "(string,optional) 商品详情",
    "description": "(string,optional) 商品描述",
    "expireTime": "(integer,optional) 结束时间",
    "installmentPrice": "(number,optional) 分期价格，根据最低价格的单品进行分期计算结果",
    "name": "(string,optional) 商品名称",
    "price": "(number,optional) 单品价格，拥有多个单品的情况下，选取单价最低的",
    "promotionType": "(integer,optional) 商品的推广类型",
    "receiverAddrCode": "(string,optional) 用户地址四级编码",
    "receiverAddrId": "(integer,optional) 用户地址信息id，若用户未选地址信息，则为-1",
    "receiverAddrStr": "(string,optional) 用户地址信息详情，若是根据四级编码返回的，则是地址描述",
    "skuInfos": [
        {
            "afterSaleRemark": "(string,optional) 单品售后描述",
            "imagePath": "(string,optional) 单品大图",
            "installmentPrice": "(number,optional) 单品分期价格",
            "price": "(number,optional) 单品价格",
            "productNo": "(string,optional) 单品对应的产品编号",
            "skuNo": "(string,optional) 单品编号",
            "skuProps": "(object,optional) 单品属性",
            "stockCount": "(integer,optional) 库存数量",
            "subImagePath": "(string,optional) 单品小图",
            "subTitle": "(string,optional) 单品描述",
            "title": "(string,optional) 单品名称"
        }
    ],
    "supportCoupon": "(boolean,optional) 是否支持优惠券",
    "systemTime": "(integer,optional) 系统当前时间",
    "typeCode": "(integer,optional) 商品供应商",
    "unavailable": "(boolean,optional) 目前是否不可购买"
}
*/



