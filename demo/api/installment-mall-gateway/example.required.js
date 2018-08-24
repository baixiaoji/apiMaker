import InstallmentMallGateway from './api/installment-mall-gateway/api';


/**
* 推荐商品列表    /v1/activity/recommend
*
*/
InstallmentMallGateway.getActivityRecommendV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 申请售后页面[Aa2a]    /v1/afterSale/applyPage
*
*/
InstallmentMallGateway.getAfterSaleApplyPageV1({
    params: {
        orderNo: '111072487507', //订单编号
        orderDetailNo: '111072444619', //订单详情编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 取消售后[Aa5b]    /v1/afterSale/cancel/{afterSaleNo}
*
*/
InstallmentMallGateway.getAfterSaleCancelAfterSaleNoV1({
    params: {
        afterSaleNo: '16204E87B801112', //服务单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 申请售后服务[Aa2c]    /v1/afterSale/create
*
*/
InstallmentMallGateway.postAfterSaleCreateV1({
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
* 获取服务单详情[Aa5a]    /v1/afterSale/detail
*
*/
InstallmentMallGateway.getAfterSaleDetailV1({
    params: {
        orderNo: '111072487507', //订单号
        orderDetailNo: '111072487507', //订单详细号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传售后图片[Aa2b]    /v1/afterSale/uploadImage
*
*/
InstallmentMallGateway.postAfterSaleUploadImageV1({
    data: {
        base64Image: '(string) undefined', //图片的base64转码
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 计算订单价格    /v1/order/calculatePrice
*
*/
InstallmentMallGateway.getOrderCalculatePriceV1({
    params: {
        orderNo: '111072446623', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取订单[Oa2a/Ob2a]    /v1/order/get
*
*/
InstallmentMallGateway.getOrderGetV1({
    params: {
        orderNo: '111072487507', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取预订单[Oa4a]    /v1/order/getPreOrder
*
*/
InstallmentMallGateway.getOrderGetPreOrderV1({
    params: {
        orderNo: '111072446623', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取发票抬头    /v1/order/invoiceTitle
*
*/
InstallmentMallGateway.getOrderInvoiceTitleV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交发票抬头    /v1/order/invoiceTitle/submit
*
*/
InstallmentMallGateway.postOrderInvoiceTitleSubmitV1({
    data: {
        invoiceTitleSubmitDTO: {
    "invoiceCompanyName": "(string) 单位名称",
    "invoiceCompanyTaxCode": "(string) 单位税号",
    "invoiceTitleCode": "(integer) 发票抬头（1:个人,2:企业）",
    "userId": "(integer) 51用户ID"
}, //订单提交请求
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户订单列表(分页)[Oa1a/Ob1a]    /v1/order/list
*
*/
InstallmentMallGateway.getOrderListV1({
    params: {
        orderCategory: '0', //订单类别(0:待付款,1:待收货,2:已完成,3:待发货,4:退款/售后)
        pageIndex: '1', //页面索引，从1开始
        pageSize: '20', //每页记录条数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 接受到前端推送oto支付信息，用于获取返回收银台支付流水号    /v1/order/otosaas/pay/info
*
*/
InstallmentMallGateway.postOrderOtosaasPayInfoV1({
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
* 预提交订单[Oa3a]    /v1/order/preSubmit
*
*/
InstallmentMallGateway.postOrderPreSubmitV1({
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
}, //订单提交请求
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
InstallmentMallGateway.postOrderSaveExitPayReasonV1({
    data: {
        exitPayReasonDTO: {
    "exitPayReason": "(string) undefined",
    "exitPayReasonCode": "(integer) undefined",
    "orderNo": "(string) undefined",
    "userId": "(integer) undefined"
}, //exitPayReasonDTO
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交订单[Oa4b]    /v1/order/submit
*
*/
InstallmentMallGateway.postOrderSubmitV1({
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
* 获取订单物流信息[Oa8a]    /v1/order/track
*
*/
InstallmentMallGateway.getOrderTrackV1({
    params: {
        orderNo: '111072487507', //订单号
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
InstallmentMallGateway.getOtosaasOrderInfoV1({
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
InstallmentMallGateway.postOtosaasOrderRefundV1({
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
InstallmentMallGateway.postOtosaasOrderStatusV1({
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
* 获取所有银行-15家-并计算最低月供[Pa2a]    /v1/payment/bank/listAll
*
*/
InstallmentMallGateway.getPaymentBankListAllV1({
    params: {
        orderPrice: '5800', //订单金额
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户已绑定的信用卡-并计算最低月供[Pa6a]    /v1/payment/bank/listBind
*
*/
InstallmentMallGateway.getPaymentBankListBindV1({
    params: {
        orderPrice: '5800', //订单金额
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取在商品详情页的价格说明    /v1/payment/beforePrePayNotice
*
*/
InstallmentMallGateway.getPaymentBeforePrePayNoticeV1({
    params: {
        orderPrice: '5800', //订单金额
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 绑卡支付-支付+发验证码2个动作(卡已绑定)[Pa5a]    /v1/payment/bindCardPayment
*
*/
InstallmentMallGateway.postPaymentBindCardPaymentV1({
    data: {
        bindCardPayParam: {
    "cardNoMd5": "(string) 信用卡号Md5",
    "orderNo": "(string) 订单号",
    "payPrice": "(number) 实际支付金额",
    "period": "(integer) 期数"
}, //绑卡支付参数
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取预绑卡详情-进入绑卡页面请求的接口[Pa3a]    /v1/payment/card/preBindCard
*
*/
InstallmentMallGateway.getPaymentCardPreBindCardV1({
    params: {
        bankId: '8', //银行Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取预绑卡详情-进入绑卡页面请求的接口V2[Pa3a]    /v1/payment/card/preBindCardV2
*
*/
InstallmentMallGateway.postPaymentCardPreBindCardV2V1({
    data: {
        preBindCardRequest: {
    "bankId": "(integer) undefined",
    "cardNoMd5": "(string) undefined"
}, //preBindCardRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 检查订单是否满足支付条件（去支付按钮）    /v1/payment/checkOrder
*
*/
InstallmentMallGateway.getPaymentCheckOrderV1({
    params: {
        orderNo: '111072487507', //orderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 卡要素支付-绑卡+支付+发验证码3个动作[Pa3b]    /v1/payment/payment
*
*/
InstallmentMallGateway.postPaymentPaymentV1({
    data: {
        payInfoRequest: {
    "bankId": "(integer) 银行Id",
    "cardNo": "(string) 信用卡号",
    "cardNoMd5": "(string) 信用卡号MD5",
    "idNo": "(string) 身份证号",
    "orderNo": "(string) 订单号",
    "payPrice": "(number) 实际支付金额",
    "period": "(integer) 期数",
    "phone": "(string) 手机号",
    "safeNo": "(string) 安全码",
    "trueName": "(string) 真实姓名",
    "validDate": "(string) 有效期"
}, //支付卡号信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取预支付详情-进入收银台页面请求的接口[Pa1a]    /v1/payment/prePay
*
*/
InstallmentMallGateway.getPaymentPrePayV1({
    params: {
        orderNo: '111072487507', //orderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 重发短信验证码[]    /v1/payment/resendSmsCode
*
*/
InstallmentMallGateway.postPaymentResendSmsCodeV1({
    data: {
        resendSmsCodeRequest: {
    "orderNo": "(string) 订单号",
    "userId": "(integer) 用户id"
}, //支付卡号信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取简单支付记录    /v1/payment/simplePayment
*
*/
InstallmentMallGateway.getPaymentSimplePaymentV1({
    params: {
        orderNo: '111072487507', //orderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 验证短信验证码[Pa4a]    /v1/payment/verifyPayCode
*
*/
InstallmentMallGateway.postPaymentVerifyPayCodeV1({
    data: {
        verifyPayCodeRequest: {
    "orderNo": "(string) 订单号",
    "userId": "(integer) 用户id",
    "validateCode": "(string) 短信验证码"
}, //支付卡号信息
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取推荐的商品    /v1/promotionProduct/recommend
*
*/
InstallmentMallGateway.getPromotionProductRecommendV1({
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
* 获取热门商品列表[Sa1b]    /v1/salesProduct/hotProducts
*
*/
InstallmentMallGateway.getSalesProductHotProductsV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
        page: '1', //页数，从0开始
        limit: '20', //每页数量
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品以及Banner[Sa1c]    /v1/salesProduct/indexInfo
*
*/
InstallmentMallGateway.getSalesProductIndexInfoV1({
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
* 获取oto saas 产品入口    /v1/salesProduct/otosaas/enter/list
*
*/
InstallmentMallGateway.getSalesProductOtosaasEnterListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情[Sa2a]    /v1/salesProduct/productDetail
*
*/
InstallmentMallGateway.getSalesProductProductDetailV1({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
        productNo: '123456H11', //商品编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品列表[Sa1a]    /v1/salesProduct/secKillProducts
*
*/
InstallmentMallGateway.getSalesProductSecKillProductsV1({
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
* 获取优惠券分享配置信息    /v1/share/couponConfig
*
*/
InstallmentMallGateway.getShareCouponConfigV1({
    params: {
        orderNo: '111072548186', //订单编号
    },
    headers: {
        'X-FROM-TYPE': 'undefined', //X-FROM-TYPE
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
InstallmentMallGateway.getShareCouponReceivedListV1({
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
InstallmentMallGateway.getShareFavoriteProductsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 新人专区商品展示列表    /v1/share/newUserProducts
*
*/
InstallmentMallGateway.getShareNewUserProductsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取优惠券    /v1/share/receive
*
*/
InstallmentMallGateway.putShareReceiveV1({
    params: {
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
InstallmentMallGateway.getShareSecKillProductsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 分享链接商品展示列表    /v1/share/shareProducts
*
*/
InstallmentMallGateway.getShareShareProductsV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 个人优惠券领取展示    /v1/share/userCoupon
*
*/
InstallmentMallGateway.getShareUserCouponV1({
    params: {
        shareSn: 'undefined', //分享标识
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* timeout    /v1/tool/timeout
*
*/
InstallmentMallGateway.getToolTimeoutV1({
    params: {
        seconds: 'undefined', //seconds
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加用户收货地址[Ta2a]    /v1/user/receiverAddress/add
*
*/
InstallmentMallGateway.postUserReceiverAddressAddV1({
    data: {
        receiveAddressDTO: {
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
* 获取一级地址[Ta6a]    /v1/user/receiverAddress/allProvince
*
*/
InstallmentMallGateway.getUserReceiverAddressAllProvinceV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取二级地址[Ta7a]    /v1/user/receiverAddress/citiesByProvinceId/{provinceId}
*
*/
InstallmentMallGateway.getUserReceiverAddressCitiesByProvinceIdProvinceIdV1({
    params: {
        provinceId: '15', //provinceId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取三级地址[Ta8a]    /v1/user/receiverAddress/countiesByCityId/{cityId}
*
*/
InstallmentMallGateway.getUserReceiverAddressCountiesByCityIdCityIdV1({
    params: {
        cityId: '1213', //cityId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 删除用户收货地址[Ta4c]    /v1/user/receiverAddress/delete
*
*/
InstallmentMallGateway.deleteUserReceiverAddressDeleteV1({
    params: {
        autoId: '1', //收货地址ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取收货地址-修改前查询[Ta4a]    /v1/user/receiverAddress/get
*
*/
InstallmentMallGateway.getUserReceiverAddressGetV1({
    params: {
        autoId: '1', //收货地址ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取用户收货地址列表[Ta3a/Sa6a]    /v1/user/receiverAddress/list
*
*/
InstallmentMallGateway.getUserReceiverAddressListV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 设置默认用户收货地址[Ta4c]    /v1/user/receiverAddress/setDefault
*
*/
InstallmentMallGateway.putUserReceiverAddressSetDefaultV1({
    params: {
        autoId: '1', //收货地址ID
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取四级地址[Ta9a]    /v1/user/receiverAddress/townsByCountyId/{countyId}
*
*/
InstallmentMallGateway.getUserReceiverAddressTownsByCountyIdCountyIdV1({
    params: {
        countyId: '3411', //countyId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 修改用户收货地址[Ta4b]    /v1/user/receiverAddress/update
*
*/
InstallmentMallGateway.putUserReceiverAddressUpdateV1({
    data: {
        receiveAddressDTO: {
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
* 获取订单[Oa2a/Ob2a]    /v2/order/get
*
*/
InstallmentMallGateway.getOrderGetV2({
    params: {
        orderNo: '111072487507', //订单号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 用户是否展示小黄条／还款金领取成功提示    /v2/order/showRepayfundNotice
*
*/
InstallmentMallGateway.getOrderShowRepayfundNoticeV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 提交订单[Oa4b]    /v2/order/submit
*
*/
InstallmentMallGateway.postOrderSubmitV2({
    params: {
        platform: 'app', //h5/app
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
* 检查订单是否满足支付条件（去支付按钮）    /v2/payment/checkOrder
*
*/
InstallmentMallGateway.getPaymentCheckOrderV2({
    params: {
        orderNo: '111072487507', //orderNo
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取首页相关商品以及Banner[Sa1c]    /v2/salesProduct/indexInfo
*
*/
InstallmentMallGateway.getSalesProductIndexInfoV2({
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
* 获取商品详情[Sa2a]    /v2/salesProduct/productDetail
*
*/
InstallmentMallGateway.getSalesProductProductDetailV2({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
        productNo: '123456H11', //商品编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取专题商品列表    /v2/salesProduct/promotion/{promotionNo}
*
*/
InstallmentMallGateway.getSalesProductPromotionPromotionNoV2({
    params: {
        promotionNo: '30', //专题编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取秒杀商品以及Banner[Sa1c]    /v2/salesProduct/secKillProducts
*
*/
InstallmentMallGateway.getSalesProductSecKillProductsV2({
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
* 领取页面获取优惠券列表    /v2/user/coupon/listForReceive
*
*/
InstallmentMallGateway.getUserCouponListForReceiveV2({
    params: {
        sectionType: '3', //版块类型(0:全场通用,3:活动专区)
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取多张优惠券    /v2/user/coupon/multipleReceive
*
*/
InstallmentMallGateway.putUserCouponMultipleReceiveV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 领取优惠券    /v2/user/coupon/receive
*
*/
InstallmentMallGateway.putUserCouponReceiveV2({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取猜你喜欢商品详情    /v3/salesProduct/favoriteProducts
*
*/
InstallmentMallGateway.getSalesProductFavoriteProductsV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取即刻有首页内容    /v3/salesProduct/jkyIndexPage
*
*/
InstallmentMallGateway.getSalesProductJkyIndexPageV3({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 获取商品详情[Sa2a]    /v3/salesProduct/productDetail
*
*/
InstallmentMallGateway.getSalesProductProductDetailV3({
    params: {
        latitude: '30', //纬度
        longitude: '120', //经度
        productNo: '123456H11', //商品编号
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
