const axios = require('../axios');
const config = require('./config');

module.exports = {
    getDownloadFidV1: param => axios(Object.assign(config.getDownloadFidV1, param)),
    postServiceUploadV1: param => axios(Object.assign(config.postServiceUploadV1, param)),
    postServiceUploadBase64V1: param => axios(Object.assign(config.postServiceUploadBase64V1, param)),
    getSfsv1DownloadAdaptorGroupFidV1: param => axios(Object.assign(config.getSfsv1DownloadAdaptorGroupFidV1, param)),
    postSfsv1UploadAdaptorV1: param => axios(Object.assign(config.postSfsv1UploadAdaptorV1, param)),
    postUploadV1: param => axios(Object.assign(config.postUploadV1, param)),
    postUploadBase64V1: param => axios(Object.assign(config.postUploadBase64V1, param)),
    getCommonDownloadFidV2: param => axios(Object.assign(config.getCommonDownloadFidV2, param)),
    getDownloadFidV2: param => axios(Object.assign(config.getDownloadFidV2, param)),
    postUploadV2: param => axios(Object.assign(config.postUploadV2, param)),
};
