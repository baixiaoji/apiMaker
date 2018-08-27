import UsercenterGateway from './api/usercenter-gateway/api';


/**
* 获取用户信息    /v2/web/user/info
*
*/
UsercenterGateway.getWebUserInfoV2({
    params: {
        userId: 'undefined', //UserId
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
