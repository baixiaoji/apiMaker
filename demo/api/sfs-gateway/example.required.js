import SfsGateway from './api/sfs-gateway/api';


/**
* 下载V1版本,无userToken校验    /v1/download/{fid}
*
*/
SfsGateway.getDownloadFidV1({
    params: {
        fid: '', //fid
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传图片service接口(固定token)    /v1/service/upload
*
*/
SfsGateway.postServiceUploadV1({
    data: {
        file: '', //file
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传base64的img.    /v1/service/upload/base64
*
*/
SfsGateway.postServiceUploadBase64V1({
    data: {
        base64Request: '', //base64Request
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* UserToken校验方式下，下载文件    /v1/sfsv1/downloadAdaptor/{group}/{fid}
*
*/
SfsGateway.getSfsv1DownloadAdaptorGroupFidV1({
    params: {
        group: '', //必填，业务组名称
        fid: '', //可选，上传文件时获取的文件标示符
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* UserToken校验方式下，上传文件    /v1/sfsv1/uploadAdaptor
*
*/
SfsGateway.postSfsv1UploadAdaptorV1({
    data: {
        files: '', //files
        file: '', //必填，上传的文件，支持一次上传多个（服务器端会压缩成一个zip文件）
        group: '', //必填，业务组名称
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传图片接口    /v1/upload
*
*/
SfsGateway.postUploadV1({
    params: {
        token: '', //token
    },
    data: {
        multipartRequest: '', //必填，上传的文件，支持一次上传多个（服务器端会压缩成一个zip文件）
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传图片base64接口    /v1/upload/base64
*
*/
SfsGateway.postUploadBase64V1({
    params: {
        token: '', //token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 下载V2版本, 不校验userToken    /v2/common/download/{fid}
*
*/
SfsGateway.getCommonDownloadFidV2({
    params: {
        fid: '', //必填，上传文件时获取的文件标示符
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 下载V2版本,有userToken校验    /v2/download/{fid}
*
*/
SfsGateway.getDownloadFidV2({
    params: {
        fid: '', //fid
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

/**
* 上传V2版本    /v2/upload
*
*/
SfsGateway.postUploadV2({
    data: {
        multipartRequest: '', //必填，上传的文件，支持一次上传多个（服务器端会压缩成一个zip文件）
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
