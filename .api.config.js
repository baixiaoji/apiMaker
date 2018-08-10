module.exports = {
    output: './demo/api',
    ignore: {
        headers: ['userId', 'Authorization']
    },
    apis: [
        // {
        //     swagger: 'http://immall.installment-mall-gateway.51.env/swagger-ui.html'
        // },
        {
            swagger: 'http://stable.usercenter-gateway.51.env/swagger-ui.html',
            controllers: ['app-weixin-controller']
        },
    ]
};