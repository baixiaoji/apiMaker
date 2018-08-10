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

handlebars.registerHelper('addSpace', function(str='object') {

    return utils.upperCase(str) + ('        '.slice(0, 8-str.length));
});


handlebars.registerHelper('formatStr', function(str) {
    return /[-|\s]/.test(str) ? `'${str}'` : str;
});

module.exports = handlebars;