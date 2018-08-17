let handlebars = require('handlebars');
const utils = require('./index');

handlebars.registerHelper('list', function(items, options) {
    let out = "";

    for(let i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i]);
    }

    return out;
});

handlebars.registerHelper('arguments', function() {
    return !utils.isEmpty(this.params) && !utils.isEmpty(this.data);
});

handlebars.registerHelper('upperCase', function(str='object') {
    const parts = str.split('-');

    return parts.reduce((a, b) => {
        return utils.upperCase(a) + utils.upperCase(b);
    });
});

handlebars.registerHelper('addSpace', function(str='object', count) {

    return utils.filledBlank(str, count);
});

handlebars.registerHelper('addSpaceUpperCase', function(str='object', count) {

    return utils.filledBlank(utils.upperCase(str), count);
});


handlebars.registerHelper('formatStr', function(str) {
    return /[-|\s]/.test(str) ? `'${str}'` : str;
});

handlebars.registerHelper('apiTplFormat', function(tpl, apiName) {
    return tpl.replace(/\{apiName}/g, apiName);
});

handlebars.registerHelper('genBaseURL', function(url) {
    if (url.indexOf('api.u51.com') === -1) {
        return `/api.u51.com${url}`;
    }
});

module.exports = handlebars;