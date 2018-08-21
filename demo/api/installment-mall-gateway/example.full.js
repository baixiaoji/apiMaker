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

*/



