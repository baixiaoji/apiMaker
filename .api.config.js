module.exports = {
    output: './demo/api',
    // importTpl: "import axios from '../axios'",
    // apiTpl: '{apiName}: params => axios(config.{apiName}, params),',
    ignore: {
        headers: ['userId', 'Authorization']
    },
    cookie: '',
    apis: [
        {
            swagger: 'http://immall.installment-mall-gateway.51.env/swagger-ui.html'
        },
        {
            swagger: 'http://stable.usercenter-gateway.51.env/swagger-ui.html',
            controllers: ['app-weixin-controller']
        },
        {
            swagger: 'http://weiwenyi2.insurance-gateway.51.env/swagger-ui.html',
            controllers: ['提供前端相关api']
        },
    ]
};