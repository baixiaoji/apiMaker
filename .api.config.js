module.exports = {
    output: './demo/api',
    // importTpl: "import axios from '../axios'",
    // apiTpl: '{apiName}: params => axios(config.{apiName}, params),',
    ignore: {
        headers: ['userId', 'Authorization']
    },
    apis: [
        {
            swagger: 'http://ioctransfer.collection-service.51.env/swagger-ui.html'
        }
    ]
};