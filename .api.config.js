module.exports = {
    output: './demo/api',
    // importTpl: "import axios from '../axios'",
    // apiTpl: '{apiName}: params => axios(config.{apiName}, params),',
    ignore: {
        headers: ['userId', 'Authorization']
    },
    apis: [
        {
            swagger: 'http://weiwenyi2.insurance-gateway.51.env/swagger-ui.html',
            controllers: ['电瓶车相关api', '文件上传相关api', '电瓶车账户、商品相关api']
        },
        {
            swagger: 'http://stable.usercenter-gateway.51.env/swagger-ui.html',
            controllers: ['mini-weixin-controller']
        }
    ]
};