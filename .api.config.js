module.exports = {
    output: './demo/api',
    // importTpl: "import axios from '../axios'",
    // apiTpl: '{apiName}: params => axios(config.{apiName}, params),',
    ignore: {
        headers: ['userId', 'Authorization']
    },
    apis: [
        {
            swagger: 'http://immall.installment-mall-gateway.51.env/swagger-ui.html'
        },
        {
            swagger: 'http://stable.usercenter-gateway.51.env/swagger-ui.html',
            controllers: ['app-weixin-controller']
        },
        {
            swagger: 'http://k8sdev.sfs-gateway.51.env/swagger-ui.html'
        },
        {
            swagger: 'http://charles.bk-cobrandedcard-manager.51.env/swagger-ui.html'
        },
    ]
};