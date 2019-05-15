import InsuranceGateway from './api/insurance-gateway/api';


/**
* 上传文件并拿到文件路径    /v1/files/upload
*
*/
InsuranceGateway.postFilesUploadV1({
    data: {
        file: 'undefined', //file
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 二手车评论列表    /v1/mobike/item/coment/list
*
*/
InsuranceGateway.getMobikeItemComentListV1({
    params: {
        itemId: 'undefined', //itemId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 二手车评论回复    /v1/mobike/item/coment/reply
*
*/
InsuranceGateway.postMobikeItemComentReplyV1({
    data: {
        commentReq: {
    "comment": "(string) undefined",
    "commentId": "(integer) undefined",
    "itemId": "(integer) undefined",
    "replyToUserAvatar": "(string) undefined",
    "replyToUserId": "(string) undefined",
    "replyToUserName": "(string) undefined",
    "replyUserAvatar": "(string) undefined",
    "replyUserId": "(string) undefined",
    "replyUserName": "(string) undefined"
}, //commentReq
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 商品详情    /v1/mobike/item/detail
*
*/
InsuranceGateway.getMobikeItemDetailV1({
    params: {
        itemId: 'undefined', //itemId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 商品列表    /v1/mobike/item/list
*
*/
InsuranceGateway.postMobikeItemListV1({
    data: {
        listItemRequest: {
    "city": "(string) undefined",
    "currentPage": "(integer) undefined",
    "itemType": "(integer) 店铺类型。0:车，1:电瓶, 2:其他配件",
    "lat": "(number) undefined",
    "lng": "(number) undefined",
    "pageSize": "(integer) undefined",
    "searchType": "(string) 检索方式。distance:距离,quality:精选",
    "shopId": "(integer) 店铺id。",
    "shopType": "(string) 店铺类型。sell:车行，service:服务点,all:全部"
}, //listItemRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 二手电动车商品详情    /v1/mobike/item/secHand/detail
*
*/
InsuranceGateway.getMobikeItemSecHandDetailV1({
    params: {
        itemId: 'undefined', //itemId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 商品更新    /v1/mobike/item/secHand/modify
*
*/
InsuranceGateway.postMobikeItemSecHandModifyV1({
    data: {
        modifySecHandBikeReq: {
    "address": "(string) 提货地址",
    "buyDate": "(string) 一手购买时间",
    "city": "(string) 城市",
    "description": "(string) 描述",
    "itemId": "(string) 商品id",
    "mobile": "(string) 联系手机号",
    "originPrice": "(integer) 一手购买价",
    "pics": [
        {
            "id": "(integer) undefined",
            "url": "(string) undefined"
        }
    ],
    "sellPrice": "(integer) 售卖价",
    "shopId": "(integer) 店铺id",
    "title": "(string) 标题",
    "userGroup": "(integer) 用户组",
    "userId": "(string) 用户id"
}, //modifySecHandBikeReq
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 二手电动车商品发布    /v1/mobike/item/secHand/publish
*
*/
InsuranceGateway.postMobikeItemSecHandPublishV1({
    data: {
        publishSecHandBikeReq: {
    "address": "(string) 提货地址",
    "buyDate": "(string) 一手购买时间",
    "city": "(string) 城市",
    "description": "(string) 描述",
    "itemId": "(string) 商品id",
    "mobile": "(string) 联系手机号",
    "originPrice": "(integer) 一手购买价",
    "pics": [
        {
            "id": "(integer) undefined",
            "url": "(string) undefined"
        }
    ],
    "sellPrice": "(integer) 售卖价",
    "shopId": "(integer) 店铺id",
    "title": "(string) 标题",
    "userGroup": "(integer) 用户组",
    "userId": "(string) 用户id"
}, //publishSecHandBikeReq
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 二手电动车商品列表    /v1/mobike/item/secHand/searchList
*
*/
InsuranceGateway.postMobikeItemSecHandSearchListV1({
    data: {
        secMobikeSearchRequest: {
    "city": "(string) undefined",
    "content": "(string) undefined",
    "currentPage": "(integer) undefined",
    "lat": "(number) undefined",
    "lng": "(number) undefined",
    "pageSize": "(integer) undefined",
    "userGroup": "(integer) undefined"
}, //secMobikeSearchRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加产品，包括新车以及电池    /v1/mobike/product/add
*
*/
InsuranceGateway.postMobikeProductAddV1({
    data: {
        request: {
    "brand": "(string) 品牌",
    "category": "(integer) 类别",
    "introduce": "(string) 介绍",
    "parameterJson": "(string) 基础参数json",
    "pics": [
        {}
    ],
    "price": "(integer) 最低价",
    "promotion": "(string) 推广信息",
    "shopId": "(integer) 店铺ID",
    "skuList": [
        {}
    ],
    "title": "(string) 产品名称"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 添加商铺    /v1/mobike/shop/add
*
*/
InsuranceGateway.postMobikeShopAddV1({
    data: {
        request: {
    "addUserId": "(string) 添加人userID",
    "address": "(string) 店铺详细地址（不含省市区）",
    "benefit": "(string) 优惠信息",
    "businessScope": "(string) 经营范围",
    "city": "(string) 城市",
    "county": "(string) 县区",
    "detailPic": "(string) 详情页图片",
    "listPic": "(string) 列表页图片",
    "ownerUserId": "(string) 店长userID",
    "province": "(string) 省份",
    "rent": "(string) 租车服务",
    "repairService": "(string) 维修服务",
    "saleService": "(string) 售后服务",
    "shopHolder": "(string) 店铺店长维修人员联系方式",
    "shopRepair": "(string) 店铺维修人员信息",
    "title": "(string) 店名"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 店铺详情    /v1/mobike/shop/detail
*
*/
InsuranceGateway.getMobikeShopDetailV1({
    params: {
        shopId: 'undefined', //shopId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 店铺列表    /v1/mobike/shop/list
*
*/
InsuranceGateway.postMobikeShopListV1({
    data: {
        listShopRequest: {
    "city": "(string) undefined",
    "currentPage": "(integer) undefined",
    "itemType": "(integer) 店铺类型。0:车，1:电瓶, 2:其他配件",
    "lat": "(number) undefined",
    "lng": "(number) undefined",
    "pageSize": "(integer) undefined",
    "searchType": "(string) 检索方式。distance:距离,quality:精选",
    "shopId": "(integer) 店铺id。",
    "shopType": "(string) 店铺类型。sell:车行，service:服务点,all:全部"
}, //listShopRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 店铺搜索    /v1/mobike/shop/search
*
*/
InsuranceGateway.postMobikeShopSearchV1({
    data: {
        searchRequest: {
    "city": "(string) undefined",
    "content": "(string) undefined",
    "currentPage": "(integer) undefined",
    "lat": "(number) undefined",
    "lng": "(number) undefined",
    "pageSize": "(integer) undefined",
    "userGroup": "(integer) undefined"
}, //searchRequest
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据userID搜索店铺列表    /v1/mobike/shop/shopByUserId
*
*/
InsuranceGateway.getMobikeShopShopByUserIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 注册新用户    /v1/mobike/user/add
*
*/
InsuranceGateway.postMobikeUserAddV1({
    data: {
        request: {
    "externalUserId": "(string) 51userId",
    "tel": "(string) 基本信息",
    "userType": "(string) 用户类型"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 查询用户详情    /v1/mobike/user/detail
*
*/
InsuranceGateway.getMobikeUserDetailV1({
    params: {
        tel: 'undefined', //tel
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 根据用户userID查询用户信息    /v1/mobike/user/detailByUserId
*
*/
InsuranceGateway.getMobikeUserDetailByUserIdV1({
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 商户认证    /v1/mobike/user/identify
*
*/
InsuranceGateway.postMobikeUserIdentifyV1({
    data: {
        request: {
    "idendifyDataRequest": {
        "cardNo": "(string) 身份证号",
        "licenseAddress": "(string) 营业执照地址",
        "phoneNo": "(string) 电话号码",
        "userName": "(string) 用户姓名"
    },
    "identifyType": "(string) 认证商户类型",
    "userId": "(string) 用户userID"
}, //request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
