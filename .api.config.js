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
    ]
};