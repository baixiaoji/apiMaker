const axios = require('../axios');
const config = require('./config');

module.exports = {
    getWebUserInfoV2: param => axios(Object.assign(config.getWebUserInfoV2, param)),
};
