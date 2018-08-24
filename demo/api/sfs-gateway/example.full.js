import SfsGateway from './api/sfs-gateway/api';


/**
 * 下载V1版本,无userToken校验    /v1/download/{fid}
 *
 * @params      { String   }      fid                           fid
 * @params      { Integer  }      userId                        userId
 */
SfsGateway.getDownloadFidV1({
    params: {
        fid: 'undefined',
    },
    headers: {
        userId: 'undefined', //userId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 上传图片service接口(固定token)    /v1/service/upload
 *
 * @params      { Integer  }      thumbnail                     thumbnail
 * @params      { Integer  }      width                         width
 * @params      { Integer  }      height                        height
 * @params      { File     }      file                          file
 * @params      { String   }      Authorization                 service static token
 */
SfsGateway.postServiceUploadV1({
    params: {
        thumbnail: '0',
        width: '80',
        height: '80',
    },
    data: {
        file: 'undefined',
    },
    headers: {
        Authorization: 'personas 123', //service static token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "msg": "(string) undefined",
    "requestId": "(string) undefined"
}
*/



/**
 * 上传base64的img.    /v1/service/upload/base64
 *
 * @params      { Object   }      base64Request                 base64Request
 * @params      { String   }      Authorization                 imageService token
 */
SfsGateway.postServiceUploadBase64V1({
    data: {
        base64Request: {
    "body": "(string) undefined",
    "filename": "(string) undefined",
    "height": "(integer) undefined",
    "thumbnail": "(integer) undefined",
    "width": "(integer) undefined"
},
    },
    headers: {
        Authorization: 'personas 123', //imageService token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "data": {},
    "msg": "(string) undefined",
    "requestId": "(string) undefined"
}
*/



/**
 * UserToken校验方式下，下载文件    /v1/sfsv1/downloadAdaptor/{group}/{fid}
 *
 * @params      { String   }      group                         必填，业务组名称
 * @params      { String   }      fid                           可选，上传文件时获取的文件标示符
 * @params      { String   }      Authorization                 必填，管家APP对应的user token
 * @params      { String   }      userId                        必填，管家APP对应的user id
 * @params      { String   }      X-Tracking-ID                 可选，用于追踪请求的唯一id
 */
SfsGateway.getSfsv1DownloadAdaptorGroupFidV1({
    params: {
        group: 'undefined',
        fid: 'undefined',
    },
    headers: {
        Authorization: 'encrypt 4ZHZDMGjMD5RFKyAeDiXZpPtIXS8y7TXPPvWCmN9YNs9CxZfbRQ0ruj8sH2LKM+FmKBHc+i3rZ1hp2YfV5HBsQ==', //必填，管家APP对应的user token
        userId: '150000132', //必填，管家APP对应的user id
        'X-Tracking-ID': 'undefined', //可选，用于追踪请求的唯一id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "codec": "(string) undefined",
    "contentType": "(string) undefined",
    "createtime": "(string) undefined",
    "desc": "(string) undefined",
    "fid": "(string) undefined",
    "fileName": "(string) undefined",
    "fileSize": "(integer) undefined",
    "group": "(string) undefined",
    "isUpdate": "(boolean) undefined",
    "lastmodifytime": "(string) undefined",
    "success": "(boolean) undefined",
    "uid": "(string) undefined",
    "weedfsFileId": "(string) undefined"
}
*/



/**
 * UserToken校验方式下，上传文件    /v1/sfsv1/uploadAdaptor
 *
 * @params      { Array    }      files                         files
 * @params      { Ref      }      file                          必填，上传的文件，支持一次上传多个（服务器端会压缩成一个zip文件）
 * @params      { String   }      group                         必填，业务组名称
 * @params      { String   }      fid                           可选，如果不指定为创建，如果指定表示更新
 * @params      { String   }      codec                         可选，文件压缩方式，可选值[gzip]
 * @params      { String   }      desc                          可选，文件描述信息
 * @params      { String   }      dataCenter                    可选，数据中心，如不指定默认存储在defaultDataCenter
 * @params      { String   }      ttl                           可选，数据存活时间
 * @params      { String   }      userId                        必填，管家APP对应的user id
 * @params      { String   }      X-Tracking-ID                 可选，用于追踪请求的唯一id
 * @params      { String   }      Authorization                 必填，管家APP对应的user token
 */
SfsGateway.postSfsv1UploadAdaptorV1({
    data: {
        files: 'undefined',
        file: 'undefined',
        group: 'undefined',
        fid: 'undefined',
        codec: 'undefined',
        desc: 'undefined',
        dataCenter: 'undefined',
        ttl: 'undefined',
    },
    headers: {
        userId: '150000132', //必填，管家APP对应的user id
        'X-Tracking-ID': 'undefined', //可选，用于追踪请求的唯一id
        Authorization: 'encrypt 4ZHZDMGjMD5RFKyAeDiXZpPtIXS8y7TXPPvWCmN9YNs9CxZfbRQ0ruj8sH2LKM+FmKBHc+i3rZ1hp2YfV5HBsQ==', //必填，管家APP对应的user token
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "codec": "(string) undefined",
    "contentType": "(string) undefined",
    "createtime": "(string) undefined",
    "desc": "(string) undefined",
    "fid": "(string) undefined",
    "fileName": "(string) undefined",
    "fileSize": "(integer) undefined",
    "group": "(string) undefined",
    "isUpdate": "(boolean) undefined",
    "lastmodifytime": "(string) undefined",
    "success": "(boolean) undefined",
    "uid": "(string) undefined",
    "weedfsFileId": "(string) undefined"
}
*/



/**
 * 上传图片接口    /v1/upload
 *
 * @params      { String   }      token                         token
 * @params      { Ref      }      multipartRequest              必填，上传的文件，支持一次上传多个（服务器端会压缩成一个zip文件）
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 */
SfsGateway.postUploadV1({
    params: {
        token: 'undefined',
    },
    data: {
        multipartRequest: 'undefined',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        Authorization: 'encrypt 7zYyPCmZ/61IcLFhH/bSpdTib8qek5pOJ4vrij9D5exjBrdkU7H21g==', //user token
        userId: '7166048', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "requestId": "(string) undefined",
    "urls": [
        {
            "url": "(string) undefined"
        }
    ]
}
*/



/**
 * 上传图片base64接口    /v1/upload/base64
 *
 * @params      { String   }      token                         token
 * @params      { Integer  }      swidth                        swidth
 * @params      { Integer  }      sheight                       sheight
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 */
SfsGateway.postUploadBase64V1({
    params: {
        token: 'undefined',
        swidth: '80',
        sheight: '80',
    },
    headers: {
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        Authorization: 'encrypt 7zYyPCmZ/61IcLFhH/bSpdTib8qek5pOJ4vrij9D5exjBrdkU7H21g==', //user token
        userId: '7166048', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
{
    "code": "(integer) undefined",
    "msg": "(string) undefined",
    "requestId": "(string) undefined",
    "urls": [
        {
            "url": "(string) undefined"
        }
    ]
}
*/



/**
 * 下载V2版本, 不校验userToken    /v2/common/download/{fid}
 *
 * @params      { String   }      fid                           必填，上传文件时获取的文件标示符
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
SfsGateway.getCommonDownloadFidV2({
    params: {
        fid: 'undefined',
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
    "urls": []
}
*/



/**
 * 下载V2版本,有userToken校验    /v2/download/{fid}
 *
 * @params      { String   }      fid                           fid
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 * @params      { String   }      userId                        user id
 */
SfsGateway.getDownloadFidV2({
    params: {
        fid: 'undefined',
    },
    headers: {
        Authorization: 'encrypt 7zYyPCmZ/61IcLFhH/bSpdTib8qek5pOJ4vrij9D5exjBrdkU7H21g==', //user token
        'X-Tracking-ID': 'undefined', //用于追踪请求的唯一id
        userId: '7166048', //user id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
"(undefined) undefined"
*/



/**
 * 上传V2版本    /v2/upload
 *
 * @params      { Ref      }      multipartRequest              必填，上传的文件，支持一次上传多个（服务器端会压缩成一个zip文件）
 * @params      { Boolean  }      privateAccess                 可选，是否私有访问(只能自己访问）,默认为false
 * @params      { String   }      Authorization                 user token
 * @params      { String   }      userId                        user id
 * @params      { String   }      X-Tracking-ID                 用于追踪请求的唯一id
 */
SfsGateway.postUploadV2({
    data: {
        multipartRequest: 'undefined',
        privateAccess: 'undefined',
    },
    headers: {
        Authorization: 'encrypt 7zYyPCmZ/61IcLFhH/bSpdTib8qek5pOJ4vrij9D5exjBrdkU7H21g==', //user token
        userId: '7166048', //user id
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
    "urls": []
}
*/



