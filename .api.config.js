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
            controllers: ['提供前端相关api', '投保相关api', '提供保单相关api']
        },
        {
            swagger: 'http://tlpay.installment-mall.51.env/swagger-ui.html',
        },
        {
            swagger: 'http://it.bank-manager.51.env/swagger-ui.html',
        },
        {
            swagger: 'http://bankaTest.bdc-banka.51.env/swagger-ui.html',
        },
        {
            swagger: 'http://stable.bdc-banka-manager.51.env/swagger-ui.html',
        },
        {
            swagger: 'http://stable.usercenter-gateway.51.env/swagger-ui.html',
            controllers: [
                { controller: 'web-user-info-controller', apis: ['/usercenter-gateway/api/v2/web/user/info']}
            ],
        },
    ]
};