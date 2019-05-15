const axios = require('../axios');
const config = require('./config');

module.exports = {
    postFilesUploadV1: param => axios(Object.assign(config.postFilesUploadV1, param)),
    getMobikeItemComentListV1: param => axios(Object.assign(config.getMobikeItemComentListV1, param)),
    postMobikeItemComentReplyV1: param => axios(Object.assign(config.postMobikeItemComentReplyV1, param)),
    getMobikeItemDetailV1: param => axios(Object.assign(config.getMobikeItemDetailV1, param)),
    postMobikeItemListV1: param => axios(Object.assign(config.postMobikeItemListV1, param)),
    getMobikeItemSecHandDetailV1: param => axios(Object.assign(config.getMobikeItemSecHandDetailV1, param)),
    postMobikeItemSecHandModifyV1: param => axios(Object.assign(config.postMobikeItemSecHandModifyV1, param)),
    postMobikeItemSecHandPublishV1: param => axios(Object.assign(config.postMobikeItemSecHandPublishV1, param)),
    postMobikeItemSecHandSearchListV1: param => axios(Object.assign(config.postMobikeItemSecHandSearchListV1, param)),
    postMobikeProductAddV1: param => axios(Object.assign(config.postMobikeProductAddV1, param)),
    postMobikeShopAddV1: param => axios(Object.assign(config.postMobikeShopAddV1, param)),
    getMobikeShopDetailV1: param => axios(Object.assign(config.getMobikeShopDetailV1, param)),
    postMobikeShopListV1: param => axios(Object.assign(config.postMobikeShopListV1, param)),
    postMobikeShopSearchV1: param => axios(Object.assign(config.postMobikeShopSearchV1, param)),
    getMobikeShopShopByUserIdV1: param => axios(Object.assign(config.getMobikeShopShopByUserIdV1, param)),
    postMobikeUserAddV1: param => axios(Object.assign(config.postMobikeUserAddV1, param)),
    getMobikeUserDetailV1: param => axios(Object.assign(config.getMobikeUserDetailV1, param)),
    getMobikeUserDetailByUserIdV1: param => axios(Object.assign(config.getMobikeUserDetailByUserIdV1, param)),
    postMobikeUserIdentifyV1: param => axios(Object.assign(config.postMobikeUserIdentifyV1, param)),
};
