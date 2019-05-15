import InsuranceGateway from './api/insurance-gateway/api';


/**
 * 上传文件并拿到文件路径    /v1/files/upload
 *
 * @params      { File     }      file                          file
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
InsuranceGateway.postFilesUploadV1({
    data: {
        file: 'undefined',

    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": "(string) undefined",
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 二手车评论列表    /v1/mobike/item/coment/list
 *
 * @params      { Integer  }      itemId                        itemId
 */
InsuranceGateway.getMobikeItemComentListV1({
    params: {
        itemId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": [
        {
            "commentId": "(integer) 评论id",
            "createTime": "(integer) 评论时间",
            "reply": [
                {
                    "commentId": "(integer) 评论id",
                    "createTime": "(integer) 评论时间",
                    "reply": [
                        {
                            "commentId": "(integer) 评论id",
                            "createTime": "(integer) 评论时间",
                            "reply": [
                                {
                                    "commentId": "(integer) 评论id",
                                    "createTime": "(integer) 评论时间",
                                    "reply": [
                                        {
                                            "commentId": "(integer) 评论id",
                                            "createTime": "(integer) 评论时间",
                                            "reply": [
                                                {
                                                    "commentId": "(integer) 评论id",
                                                    "createTime": "(integer) 评论时间",
                                                    "reply": [
                                                        {
                                                            "commentId": "(integer) 评论id",
                                                            "createTime": "(integer) 评论时间",
                                                            "reply": [
                                                                {
                                                                    "commentId": "(integer) 评论id",
                                                                    "createTime": "(integer) 评论时间",
                                                                    "reply": [
                                                                        {
                                                                            "commentId": "(integer) 评论id",
                                                                            "createTime": "(integer) 评论时间",
                                                                            "reply": [
                                                                                {
                                                                                    "commentId": "(integer) 评论id",
                                                                                    "createTime": "(integer) 评论时间",
                                                                                    "reply": "#/definitions/二手电瓶车详情回复",
                                                                                    "replyText": "(string) 评论内容",
                                                                                    "replyToUserAvatar": "(string) 回复评论用户头像",
                                                                                    "replyToUserId": "(string) 回复评论用户id",
                                                                                    "replyToUserName": "(string) 回复评论用户名",
                                                                                    "replyUserAvatar": "(string) 评论用户头像",
                                                                                    "replyUserId": "(string) 评论用户id",
                                                                                    "replyUserName": "(string) 评论用户名称"
                                                                                }
                                                                            ],
                                                                            "replyText": "(string) 评论内容",
                                                                            "replyToUserAvatar": "(string) 回复评论用户头像",
                                                                            "replyToUserId": "(string) 回复评论用户id",
                                                                            "replyToUserName": "(string) 回复评论用户名",
                                                                            "replyUserAvatar": "(string) 评论用户头像",
                                                                            "replyUserId": "(string) 评论用户id",
                                                                            "replyUserName": "(string) 评论用户名称"
                                                                        }
                                                                    ],
                                                                    "replyText": "(string) 评论内容",
                                                                    "replyToUserAvatar": "(string) 回复评论用户头像",
                                                                    "replyToUserId": "(string) 回复评论用户id",
                                                                    "replyToUserName": "(string) 回复评论用户名",
                                                                    "replyUserAvatar": "(string) 评论用户头像",
                                                                    "replyUserId": "(string) 评论用户id",
                                                                    "replyUserName": "(string) 评论用户名称"
                                                                }
                                                            ],
                                                            "replyText": "(string) 评论内容",
                                                            "replyToUserAvatar": "(string) 回复评论用户头像",
                                                            "replyToUserId": "(string) 回复评论用户id",
                                                            "replyToUserName": "(string) 回复评论用户名",
                                                            "replyUserAvatar": "(string) 评论用户头像",
                                                            "replyUserId": "(string) 评论用户id",
                                                            "replyUserName": "(string) 评论用户名称"
                                                        }
                                                    ],
                                                    "replyText": "(string) 评论内容",
                                                    "replyToUserAvatar": "(string) 回复评论用户头像",
                                                    "replyToUserId": "(string) 回复评论用户id",
                                                    "replyToUserName": "(string) 回复评论用户名",
                                                    "replyUserAvatar": "(string) 评论用户头像",
                                                    "replyUserId": "(string) 评论用户id",
                                                    "replyUserName": "(string) 评论用户名称"
                                                }
                                            ],
                                            "replyText": "(string) 评论内容",
                                            "replyToUserAvatar": "(string) 回复评论用户头像",
                                            "replyToUserId": "(string) 回复评论用户id",
                                            "replyToUserName": "(string) 回复评论用户名",
                                            "replyUserAvatar": "(string) 评论用户头像",
                                            "replyUserId": "(string) 评论用户id",
                                            "replyUserName": "(string) 评论用户名称"
                                        }
                                    ],
                                    "replyText": "(string) 评论内容",
                                    "replyToUserAvatar": "(string) 回复评论用户头像",
                                    "replyToUserId": "(string) 回复评论用户id",
                                    "replyToUserName": "(string) 回复评论用户名",
                                    "replyUserAvatar": "(string) 评论用户头像",
                                    "replyUserId": "(string) 评论用户id",
                                    "replyUserName": "(string) 评论用户名称"
                                }
                            ],
                            "replyText": "(string) 评论内容",
                            "replyToUserAvatar": "(string) 回复评论用户头像",
                            "replyToUserId": "(string) 回复评论用户id",
                            "replyToUserName": "(string) 回复评论用户名",
                            "replyUserAvatar": "(string) 评论用户头像",
                            "replyUserId": "(string) 评论用户id",
                            "replyUserName": "(string) 评论用户名称"
                        }
                    ],
                    "replyText": "(string) 评论内容",
                    "replyToUserAvatar": "(string) 回复评论用户头像",
                    "replyToUserId": "(string) 回复评论用户id",
                    "replyToUserName": "(string) 回复评论用户名",
                    "replyUserAvatar": "(string) 评论用户头像",
                    "replyUserId": "(string) 评论用户id",
                    "replyUserName": "(string) 评论用户名称"
                }
            ],
            "replyText": "(string) 评论内容",
            "replyToUserAvatar": "(string) 回复评论用户头像",
            "replyToUserId": "(string) 回复评论用户id",
            "replyToUserName": "(string) 回复评论用户名",
            "replyUserAvatar": "(string) 评论用户头像",
            "replyUserId": "(string) 评论用户id",
            "replyUserName": "(string) 评论用户名称"
        }
    ],
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 二手车评论回复    /v1/mobike/item/coment/reply
 *
 * @params      { Object   }      commentReq                    commentReq
 */
InsuranceGateway.postMobikeItemComentReplyV1({
    data: {
        comment: '(string) undefined',
        commentId: '(integer) undefined',
        itemId: '(integer) undefined',
        replyToUserAvatar: '(string) undefined',
        replyToUserId: '(string) undefined',
        replyToUserName: '(string) undefined',
        replyUserAvatar: '(string) undefined',
        replyUserId: '(string) undefined',
        replyUserName: '(string) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": "(boolean) undefined",
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 商品详情    /v1/mobike/item/detail
 *
 * @params      { Integer  }      itemId                        itemId
 */
InsuranceGateway.getMobikeItemDetailV1({
    params: {
        itemId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "address": "(string) 店铺地址",
        "brand": "(string) 品牌",
        "category": "(integer) 商品类目",
        "detailPic": "(string) 详情页商品介绍图",
        "ext": "(string) 拓展字段",
        "headPic": "(string) 详情页头图",
        "id": "(integer) 商品id",
        "introduce": "(string) 商品介绍",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "parameterJson": "(string) 参数json",
        "price": "(integer) 商品价格，分",
        "promotion": "(string) 优惠信息",
        "sale": "(integer) 销量",
        "shopDetailDesc": "(string) 店铺描述",
        "shopId": "(integer) 店铺id",
        "shopListPic": "(string) 店铺列表页图片",
        "shopTitle": "(string) 店铺名",
        "title": "(string) 商品主标题"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 商品列表    /v1/mobike/item/list
 *
 * @params      { Object   }      listItemRequest               listItemRequest
 */
InsuranceGateway.postMobikeItemListV1({
    data: {
        city: '(string) undefined',
        currentPage: '(integer) undefined',
        itemType: '(integer) 店铺类型。0:车，1:电瓶, 2:其他配件',
        lat: '(number) undefined',
        lng: '(number) undefined',
        pageSize: '(integer) undefined',
        searchType: '(string) 检索方式。distance:距离,quality:精选',
        shopId: '(integer) 店铺id。',
        shopType: '(string) 店铺类型。sell:车行，service:服务点,all:全部',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "list": [
        {
            "category": "(integer) 商品类目",
            "id": "(integer) 商品id",
            "listPic": "(string) 列表页图片",
            "price": "(integer) 商品价格，分",
            "sale": "(integer) 销量",
            "title": "(string) 商品主标题"
        }
    ],
    "page": "(integer) 当前页码",
    "pageCount": "(integer) 总页数",
    "pageSize": "(integer) 一页里包含的记录条数",
    "totalSize": "(integer) 总条数"
}
*/



/**
 * 二手电动车商品详情    /v1/mobike/item/secHand/detail
 *
 * @params      { Integer  }      itemId                        itemId
 */
InsuranceGateway.getMobikeItemSecHandDetailV1({
    params: {
        itemId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "address": "(string) 店铺地址",
        "buyDate": "(integer) 商品一手购买时间戳",
        "commentList": [
            {
                "commentId": "(integer) 评论id",
                "createTime": "(integer) 评论时间",
                "reply": [
                    {
                        "commentId": "(integer) 评论id",
                        "createTime": "(integer) 评论时间",
                        "reply": [
                            {
                                "commentId": "(integer) 评论id",
                                "createTime": "(integer) 评论时间",
                                "reply": [
                                    {
                                        "commentId": "(integer) 评论id",
                                        "createTime": "(integer) 评论时间",
                                        "reply": [
                                            {
                                                "commentId": "(integer) 评论id",
                                                "createTime": "(integer) 评论时间",
                                                "reply": [
                                                    {
                                                        "commentId": "(integer) 评论id",
                                                        "createTime": "(integer) 评论时间",
                                                        "reply": [
                                                            {
                                                                "commentId": "(integer) 评论id",
                                                                "createTime": "(integer) 评论时间",
                                                                "reply": [
                                                                    {
                                                                        "commentId": "(integer) 评论id",
                                                                        "createTime": "(integer) 评论时间",
                                                                        "reply": [
                                                                            {
                                                                                "commentId": "(integer) 评论id",
                                                                                "createTime": "(integer) 评论时间",
                                                                                "reply": [
                                                                                    {
                                                                                        "commentId": "(integer) 评论id",
                                                                                        "createTime": "(integer) 评论时间",
                                                                                        "reply": "#/definitions/二手电瓶车详情回复",
                                                                                        "replyText": "(string) 评论内容",
                                                                                        "replyToUserAvatar": "(string) 回复评论用户头像",
                                                                                        "replyToUserId": "(string) 回复评论用户id",
                                                                                        "replyToUserName": "(string) 回复评论用户名",
                                                                                        "replyUserAvatar": "(string) 评论用户头像",
                                                                                        "replyUserId": "(string) 评论用户id",
                                                                                        "replyUserName": "(string) 评论用户名称"
                                                                                    }
                                                                                ],
                                                                                "replyText": "(string) 评论内容",
                                                                                "replyToUserAvatar": "(string) 回复评论用户头像",
                                                                                "replyToUserId": "(string) 回复评论用户id",
                                                                                "replyToUserName": "(string) 回复评论用户名",
                                                                                "replyUserAvatar": "(string) 评论用户头像",
                                                                                "replyUserId": "(string) 评论用户id",
                                                                                "replyUserName": "(string) 评论用户名称"
                                                                            }
                                                                        ],
                                                                        "replyText": "(string) 评论内容",
                                                                        "replyToUserAvatar": "(string) 回复评论用户头像",
                                                                        "replyToUserId": "(string) 回复评论用户id",
                                                                        "replyToUserName": "(string) 回复评论用户名",
                                                                        "replyUserAvatar": "(string) 评论用户头像",
                                                                        "replyUserId": "(string) 评论用户id",
                                                                        "replyUserName": "(string) 评论用户名称"
                                                                    }
                                                                ],
                                                                "replyText": "(string) 评论内容",
                                                                "replyToUserAvatar": "(string) 回复评论用户头像",
                                                                "replyToUserId": "(string) 回复评论用户id",
                                                                "replyToUserName": "(string) 回复评论用户名",
                                                                "replyUserAvatar": "(string) 评论用户头像",
                                                                "replyUserId": "(string) 评论用户id",
                                                                "replyUserName": "(string) 评论用户名称"
                                                            }
                                                        ],
                                                        "replyText": "(string) 评论内容",
                                                        "replyToUserAvatar": "(string) 回复评论用户头像",
                                                        "replyToUserId": "(string) 回复评论用户id",
                                                        "replyToUserName": "(string) 回复评论用户名",
                                                        "replyUserAvatar": "(string) 评论用户头像",
                                                        "replyUserId": "(string) 评论用户id",
                                                        "replyUserName": "(string) 评论用户名称"
                                                    }
                                                ],
                                                "replyText": "(string) 评论内容",
                                                "replyToUserAvatar": "(string) 回复评论用户头像",
                                                "replyToUserId": "(string) 回复评论用户id",
                                                "replyToUserName": "(string) 回复评论用户名",
                                                "replyUserAvatar": "(string) 评论用户头像",
                                                "replyUserId": "(string) 评论用户id",
                                                "replyUserName": "(string) 评论用户名称"
                                            }
                                        ],
                                        "replyText": "(string) 评论内容",
                                        "replyToUserAvatar": "(string) 回复评论用户头像",
                                        "replyToUserId": "(string) 回复评论用户id",
                                        "replyToUserName": "(string) 回复评论用户名",
                                        "replyUserAvatar": "(string) 评论用户头像",
                                        "replyUserId": "(string) 评论用户id",
                                        "replyUserName": "(string) 评论用户名称"
                                    }
                                ],
                                "replyText": "(string) 评论内容",
                                "replyToUserAvatar": "(string) 回复评论用户头像",
                                "replyToUserId": "(string) 回复评论用户id",
                                "replyToUserName": "(string) 回复评论用户名",
                                "replyUserAvatar": "(string) 评论用户头像",
                                "replyUserId": "(string) 评论用户id",
                                "replyUserName": "(string) 评论用户名称"
                            }
                        ],
                        "replyText": "(string) 评论内容",
                        "replyToUserAvatar": "(string) 回复评论用户头像",
                        "replyToUserId": "(string) 回复评论用户id",
                        "replyToUserName": "(string) 回复评论用户名",
                        "replyUserAvatar": "(string) 评论用户头像",
                        "replyUserId": "(string) 评论用户id",
                        "replyUserName": "(string) 评论用户名称"
                    }
                ],
                "replyText": "(string) 评论内容",
                "replyToUserAvatar": "(string) 回复评论用户头像",
                "replyToUserId": "(string) 回复评论用户id",
                "replyToUserName": "(string) 回复评论用户名",
                "replyUserAvatar": "(string) 评论用户头像",
                "replyUserId": "(string) 评论用户id",
                "replyUserName": "(string) 评论用户名称"
            }
        ],
        "description": "(string) 描述",
        "distance": "(integer) 与当前坐标距离",
        "group": "(integer) 用户组，0：个人，1：商家",
        "id": "(integer) 商品id",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "mobile": "(string) 联系方式",
        "originPrice": "(integer) 原价",
        "pics": [
            {
                "id": "(integer) undefined",
                "url": "(string) undefined"
            }
        ],
        "publishTimeStamp": "(integer) 商品发布时间戳",
        "sellPrice": "(integer) 售卖价",
        "sellerAvatar": "(string) 卖家头像",
        "sellerId": "(string) 卖家id",
        "sellerName": "(string) 卖家名",
        "shopId": "(integer) 店铺id",
        "shopTitle": "(string) 店铺名",
        "title": "(string) 商品标题",
        "userId": "(string) 用户id",
        "viewCount": "(integer) 浏览量"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 商品更新    /v1/mobike/item/secHand/modify
 *
 * @params      { Object   }      modifySecHandBikeReq          modifySecHandBikeReq
 */
InsuranceGateway.postMobikeItemSecHandModifyV1({
    data: {
        address: '(string) 提货地址',
        buyDate: '(string) 一手购买时间',
        city: '(string) 城市',
        description: '(string) 描述',
        itemId: '(string) 商品id',
        mobile: '(string) 联系手机号',
        originPrice: '(integer) 一手购买价',
        pics: [{
        	id: '(integer) undefined',
        	url: '(string) undefined',
        }],
        sellPrice: '(integer) 售卖价',
        shopId: '(integer) 店铺id',
        title: '(string) 标题',
        userGroup: '(integer) 用户组',
        userId: '(string) 用户id',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": "(boolean) undefined",
    "msg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 二手电动车商品发布    /v1/mobike/item/secHand/publish
 *
 * @params      { Object   }      publishSecHandBikeReq                            publishSecHandBikeReq
 */
InsuranceGateway.postMobikeItemSecHandPublishV1({
    data: {
        address: '(string) 提货地址',
        buyDate: '(string) 一手购买时间',
        city: '(string) 城市',
        description: '(string) 描述',
        itemId: '(string) 商品id',
        mobile: '(string) 联系手机号',
        originPrice: '(integer) 一手购买价',
        pics: [{
        	id: '(integer) undefined',
        	url: '(string) undefined',
        }],
        sellPrice: '(integer) 售卖价',
        shopId: '(integer) 店铺id',
        title: '(string) 标题',
        userGroup: '(integer) 用户组',
        userId: '(string) 用户id',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": "(integer) undefined",
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 二手电动车商品列表    /v1/mobike/item/secHand/searchList
 *
 * @params      { Object   }      secMobikeSearchRequest                           secMobikeSearchRequest
 */
InsuranceGateway.postMobikeItemSecHandSearchListV1({
    data: {
        city: '(string) undefined',
        content: '(string) undefined',
        currentPage: '(integer) undefined',
        lat: '(number) undefined',
        lng: '(number) undefined',
        pageSize: '(integer) undefined',
        userGroup: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "list": [
        {
            "address": "(string) 地址",
            "distance": "(integer) 与当前坐标距离",
            "group": "(integer) 用户组，0：个人，1：商家",
            "id": "(integer) 商品id",
            "lat": "(number) 纬度",
            "listPic": "(string) 列表页图片",
            "lng": "(number) 经度",
            "originPrice": "(integer) 原价",
            "sellPrice": "(integer) 售卖价",
            "title": "(string) 商品标题",
            "userId": "(string) 用户id"
        }
    ],
    "page": "(integer) 当前页码",
    "pageCount": "(integer) 总页数",
    "pageSize": "(integer) 一页里包含的记录条数",
    "totalSize": "(integer) 总条数"
}
*/



/**
 * 添加产品，包括新车以及电池    /v1/mobike/product/add
 *
 * @params      { Object   }      request                       request
 */
InsuranceGateway.postMobikeProductAddV1({
    data: {
        brand: '(string) 品牌',
        category: '(integer) 类别',
        introduce: '(string) 介绍',
        parameterJson: '(string) 基础参数json',
        pics: [{}],
        price: '(integer) 最低价',
        promotion: '(string) 推广信息',
        shopId: '(integer) 店铺ID',
        skuList: [{}],
        title: '(string) 产品名称',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "address": "(string) 店铺地址",
        "brand": "(string) 品牌",
        "category": "(integer) 商品类目",
        "detailPic": "(string) 详情页商品介绍图",
        "ext": "(string) 拓展字段",
        "headPic": "(string) 详情页头图",
        "id": "(integer) 商品id",
        "introduce": "(string) 商品介绍",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "parameterJson": "(string) 参数json",
        "price": "(integer) 商品价格，分",
        "promotion": "(string) 优惠信息",
        "sale": "(integer) 销量",
        "shopDetailDesc": "(string) 店铺描述",
        "shopId": "(integer) 店铺id",
        "shopListPic": "(string) 店铺列表页图片",
        "shopTitle": "(string) 店铺名",
        "title": "(string) 商品主标题"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 添加商铺    /v1/mobike/shop/add
 *
 * @params      { Object   }      request                       request
 */
InsuranceGateway.postMobikeShopAddV1({
    data: {
        addUserId: '(string) 添加人userID',
        address: '(string) 店铺详细地址（不含省市区）',
        benefit: '(string) 优惠信息',
        businessScope: '(string) 经营范围',
        city: '(string) 城市',
        county: '(string) 县区',
        detailPic: '(string) 详情页图片',
        listPic: '(string) 列表页图片',
        ownerUserId: '(string) 店长userID',
        province: '(string) 省份',
        rent: '(string) 租车服务',
        repairService: '(string) 维修服务',
        saleService: '(string) 售后服务',
        shopHolder: '(string) 店铺店长维修人员联系方式',
        shopRepair: '(string) 店铺维修人员信息',
        title: '(string) 店名',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "addUserId": "(string) 添加人userID",
        "address": "(string) 店铺地址",
        "benefit": "(string) 优惠信息",
        "businessScope": "(string) 经营范围",
        "county": "(string) 县区",
        "detailAddress": "(string) 详细地址",
        "detailPic": "(string) 详情页图片",
        "distance": "(integer) 与当前坐标距离",
        "externalUserId": "(string) 外部userID",
        "gmtCreate": "(string) 创建时间",
        "gmtModified": "(string) 更改时间",
        "id": "(integer) 店铺id",
        "identifyData": "(string) 认证信息",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "ownerUserId": "(string) 店长userID",
        "province": "(string) 省份",
        "rent": "(string) 租车服务",
        "repairService": "(string) 维修服务",
        "saleService": "(string) 售后服务",
        "shopHolder": "(string) 店长",
        "shopRepair": "(string) 维修人员",
        "tel": "(string) 用户信息",
        "title": "(string) 店铺名",
        "type": "(string) 用户类型",
        "userId": "(string) 用户ID",
        "version": "(integer) 版本"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 店铺详情    /v1/mobike/shop/detail
 *
 * @params      { Integer  }      shopId                        shopId
 */
InsuranceGateway.getMobikeShopDetailV1({
    params: {
        shopId: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "addUserId": "(string) 添加人userID",
        "address": "(string) 店铺地址",
        "benefit": "(string) 优惠信息",
        "businessScope": "(string) 经营范围",
        "county": "(string) 县区",
        "detailAddress": "(string) 详细地址",
        "detailPic": "(string) 详情页图片",
        "distance": "(integer) 与当前坐标距离",
        "externalUserId": "(string) 外部userID",
        "gmtCreate": "(string) 创建时间",
        "gmtModified": "(string) 更改时间",
        "id": "(integer) 店铺id",
        "identifyData": "(string) 认证信息",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "ownerUserId": "(string) 店长userID",
        "province": "(string) 省份",
        "rent": "(string) 租车服务",
        "repairService": "(string) 维修服务",
        "saleService": "(string) 售后服务",
        "shopHolder": "(string) 店长",
        "shopRepair": "(string) 维修人员",
        "tel": "(string) 用户信息",
        "title": "(string) 店铺名",
        "type": "(string) 用户类型",
        "userId": "(string) 用户ID",
        "version": "(integer) 版本"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 店铺列表    /v1/mobike/shop/list
 *
 * @params      { Object   }      listShopRequest               listShopRequest
 */
InsuranceGateway.postMobikeShopListV1({
    data: {
        city: '(string) undefined',
        currentPage: '(integer) undefined',
        itemType: '(integer) 店铺类型。0:车，1:电瓶, 2:其他配件',
        lat: '(number) undefined',
        lng: '(number) undefined',
        pageSize: '(integer) undefined',
        searchType: '(string) 检索方式。distance:距离,quality:精选',
        shopId: '(integer) 店铺id。',
        shopType: '(string) 店铺类型。sell:车行，service:服务点,all:全部',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "list": [
        {
            "addUserId": "(string) 添加人userID",
            "address": "(string) 店铺地址",
            "benefit": "(string) 优惠信息",
            "businessScope": "(string) 经营范围",
            "county": "(string) 县区",
            "detailAddress": "(string) 详细地址",
            "detailPic": "(string) 详情页图片",
            "distance": "(integer) 与当前坐标距离",
            "externalUserId": "(string) 外部userID",
            "gmtCreate": "(string) 创建时间",
            "gmtModified": "(string) 更改时间",
            "id": "(integer) 店铺id",
            "identifyData": "(string) 认证信息",
            "lat": "(number) 纬度",
            "listPic": "(string) 列表页图片",
            "lng": "(number) 经度",
            "ownerUserId": "(string) 店长userID",
            "province": "(string) 省份",
            "rent": "(string) 租车服务",
            "repairService": "(string) 维修服务",
            "saleService": "(string) 售后服务",
            "shopHolder": "(string) 店长",
            "shopRepair": "(string) 维修人员",
            "tel": "(string) 用户信息",
            "title": "(string) 店铺名",
            "type": "(string) 用户类型",
            "userId": "(string) 用户ID",
            "version": "(integer) 版本"
        }
    ],
    "page": "(integer) 当前页码",
    "pageCount": "(integer) 总页数",
    "pageSize": "(integer) 一页里包含的记录条数",
    "totalSize": "(integer) 总条数"
}
*/



/**
 * 店铺搜索    /v1/mobike/shop/search
 *
 * @params      { Object   }      searchRequest                 searchRequest
 */
InsuranceGateway.postMobikeShopSearchV1({
    data: {
        city: '(string) undefined',
        content: '(string) undefined',
        currentPage: '(integer) undefined',
        lat: '(number) undefined',
        lng: '(number) undefined',
        pageSize: '(integer) undefined',
        userGroup: '(integer) undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "list": [
        {
            "addUserId": "(string) 添加人userID",
            "address": "(string) 店铺地址",
            "benefit": "(string) 优惠信息",
            "businessScope": "(string) 经营范围",
            "county": "(string) 县区",
            "detailAddress": "(string) 详细地址",
            "detailPic": "(string) 详情页图片",
            "distance": "(integer) 与当前坐标距离",
            "externalUserId": "(string) 外部userID",
            "gmtCreate": "(string) 创建时间",
            "gmtModified": "(string) 更改时间",
            "id": "(integer) 店铺id",
            "identifyData": "(string) 认证信息",
            "lat": "(number) 纬度",
            "listPic": "(string) 列表页图片",
            "lng": "(number) 经度",
            "ownerUserId": "(string) 店长userID",
            "province": "(string) 省份",
            "rent": "(string) 租车服务",
            "repairService": "(string) 维修服务",
            "saleService": "(string) 售后服务",
            "shopHolder": "(string) 店长",
            "shopRepair": "(string) 维修人员",
            "tel": "(string) 用户信息",
            "title": "(string) 店铺名",
            "type": "(string) 用户类型",
            "userId": "(string) 用户ID",
            "version": "(integer) 版本"
        }
    ],
    "page": "(integer) 当前页码",
    "pageCount": "(integer) 总页数",
    "pageSize": "(integer) 一页里包含的记录条数",
    "totalSize": "(integer) 总条数"
}
*/



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
/*
* 返回结果
{
    "data": [
        {
            "addUserId": "(string) 添加人userID",
            "address": "(string) 店铺地址",
            "benefit": "(string) 优惠信息",
            "businessScope": "(string) 经营范围",
            "county": "(string) 县区",
            "detailAddress": "(string) 详细地址",
            "detailPic": "(string) 详情页图片",
            "distance": "(integer) 与当前坐标距离",
            "externalUserId": "(string) 外部userID",
            "gmtCreate": "(string) 创建时间",
            "gmtModified": "(string) 更改时间",
            "id": "(integer) 店铺id",
            "identifyData": "(string) 认证信息",
            "lat": "(number) 纬度",
            "listPic": "(string) 列表页图片",
            "lng": "(number) 经度",
            "ownerUserId": "(string) 店长userID",
            "province": "(string) 省份",
            "rent": "(string) 租车服务",
            "repairService": "(string) 维修服务",
            "saleService": "(string) 售后服务",
            "shopHolder": "(string) 店长",
            "shopRepair": "(string) 维修人员",
            "tel": "(string) 用户信息",
            "title": "(string) 店铺名",
            "type": "(string) 用户类型",
            "userId": "(string) 用户ID",
            "version": "(integer) 版本"
        }
    ],
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 注册新用户    /v1/mobike/user/add
 *
 * @params      { Object   }      request                       request
 */
InsuranceGateway.postMobikeUserAddV1({
    data: {
        externalUserId: '(string) 51userId',
        tel: '(string) 基本信息',
        userType: '(string) 用户类型',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "addUserId": "(string) 添加人userID",
        "address": "(string) 店铺地址",
        "benefit": "(string) 优惠信息",
        "businessScope": "(string) 经营范围",
        "county": "(string) 县区",
        "detailAddress": "(string) 详细地址",
        "detailPic": "(string) 详情页图片",
        "distance": "(integer) 与当前坐标距离",
        "externalUserId": "(string) 外部userID",
        "gmtCreate": "(string) 创建时间",
        "gmtModified": "(string) 更改时间",
        "id": "(integer) 店铺id",
        "identifyData": "(string) 认证信息",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "ownerUserId": "(string) 店长userID",
        "province": "(string) 省份",
        "rent": "(string) 租车服务",
        "repairService": "(string) 维修服务",
        "saleService": "(string) 售后服务",
        "shopHolder": "(string) 店长",
        "shopRepair": "(string) 维修人员",
        "tel": "(string) 用户信息",
        "title": "(string) 店铺名",
        "type": "(string) 用户类型",
        "userId": "(string) 用户ID",
        "version": "(integer) 版本"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 查询用户详情    /v1/mobike/user/detail
 *
 * @params      { String   }      tel                           tel
 */
InsuranceGateway.getMobikeUserDetailV1({
    params: {
        tel: 'undefined',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "addUserId": "(string) 添加人userID",
        "address": "(string) 店铺地址",
        "benefit": "(string) 优惠信息",
        "businessScope": "(string) 经营范围",
        "county": "(string) 县区",
        "detailAddress": "(string) 详细地址",
        "detailPic": "(string) 详情页图片",
        "distance": "(integer) 与当前坐标距离",
        "externalUserId": "(string) 外部userID",
        "gmtCreate": "(string) 创建时间",
        "gmtModified": "(string) 更改时间",
        "id": "(integer) 店铺id",
        "identifyData": "(string) 认证信息",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "ownerUserId": "(string) 店长userID",
        "province": "(string) 省份",
        "rent": "(string) 租车服务",
        "repairService": "(string) 维修服务",
        "saleService": "(string) 售后服务",
        "shopHolder": "(string) 店长",
        "shopRepair": "(string) 维修人员",
        "tel": "(string) 用户信息",
        "title": "(string) 店铺名",
        "type": "(string) 用户类型",
        "userId": "(string) 用户ID",
        "version": "(integer) 版本"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



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
/*
* 返回结果
{
    "data": {
        "addUserId": "(string) 添加人userID",
        "address": "(string) 店铺地址",
        "benefit": "(string) 优惠信息",
        "businessScope": "(string) 经营范围",
        "county": "(string) 县区",
        "detailAddress": "(string) 详细地址",
        "detailPic": "(string) 详情页图片",
        "distance": "(integer) 与当前坐标距离",
        "externalUserId": "(string) 外部userID",
        "gmtCreate": "(string) 创建时间",
        "gmtModified": "(string) 更改时间",
        "id": "(integer) 店铺id",
        "identifyData": "(string) 认证信息",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "ownerUserId": "(string) 店长userID",
        "province": "(string) 省份",
        "rent": "(string) 租车服务",
        "repairService": "(string) 维修服务",
        "saleService": "(string) 售后服务",
        "shopHolder": "(string) 店长",
        "shopRepair": "(string) 维修人员",
        "tel": "(string) 用户信息",
        "title": "(string) 店铺名",
        "type": "(string) 用户类型",
        "userId": "(string) 用户ID",
        "version": "(integer) 版本"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



/**
 * 商户认证    /v1/mobike/user/identify
 *
 * @params      { Object   }      request                       request
 */
InsuranceGateway.postMobikeUserIdentifyV1({
    data: {
        idendifyDataRequest: {
        	cardNo: '(string) 身份证号',
        	licenseAddress: '(string) 营业执照地址',
        	phoneNo: '(string) 电话号码',
        	userName: '(string) 用户姓名',
        },
        identifyType: '(string) 认证商户类型',
        userId: '(string) 用户userID',
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "data": {
        "addUserId": "(string) 添加人userID",
        "address": "(string) 店铺地址",
        "benefit": "(string) 优惠信息",
        "businessScope": "(string) 经营范围",
        "county": "(string) 县区",
        "detailAddress": "(string) 详细地址",
        "detailPic": "(string) 详情页图片",
        "distance": "(integer) 与当前坐标距离",
        "externalUserId": "(string) 外部userID",
        "gmtCreate": "(string) 创建时间",
        "gmtModified": "(string) 更改时间",
        "id": "(integer) 店铺id",
        "identifyData": "(string) 认证信息",
        "lat": "(number) 纬度",
        "listPic": "(string) 列表页图片",
        "lng": "(number) 经度",
        "ownerUserId": "(string) 店长userID",
        "province": "(string) 省份",
        "rent": "(string) 租车服务",
        "repairService": "(string) 维修服务",
        "saleService": "(string) 售后服务",
        "shopHolder": "(string) 店长",
        "shopRepair": "(string) 维修人员",
        "tel": "(string) 用户信息",
        "title": "(string) 店铺名",
        "type": "(string) 用户类型",
        "userId": "(string) 用户ID",
        "version": "(integer) 版本"
    },
    "errorCode": "(string) undefined",
    "errorMsg": "(string) undefined",
    "success": "(boolean) undefined"
}
*/



