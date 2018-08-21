// sfs-gateway config

module.exports = {
    getDownloadFidV1: {
        url: '/v1/download/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    postServiceUploadV1: {
        url: '/v1/service/upload',
        method: 'post',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    postServiceUploadBase64V1: {
        url: '/v1/service/upload/base64',
        method: 'post',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    getSfsv1DownloadAdaptorGroupFidV1: {
        url: '/v1/sfsv1/downloadAdaptor/{group}/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    postSfsv1UploadAdaptorV1: {
        url: '/v1/sfsv1/uploadAdaptor',
        method: 'post',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    postUploadV1: {
        url: '/v1/upload',
        method: 'post',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    postUploadBase64V1: {
        url: '/v1/upload/base64',
        method: 'post',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    getCommonDownloadFidV2: {
        url: '/v2/common/download/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    getDownloadFidV2: {
        url: '/v2/download/{fid}',
        method: 'get',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
    postUploadV2: {
        url: '/v2/upload',
        method: 'post',
        baseURL: '/api.u51.com/sfs-gateway/api',
    },
};
