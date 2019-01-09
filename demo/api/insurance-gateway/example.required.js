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
    "mobile": "(string) 联系手机号",
    "originPrice": "(integer) 一手购买价",
    "pics": [],
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
