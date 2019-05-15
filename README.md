## Api自动生成工具

`apimaker` 是根据swagger链接配置，自动获取swagger链接对应服务及`tag`下所有接口配置，并按照约定格式生成前端调用接口的代码到工程目录下直接使用，从而减少写接口调用代码的时间

## Example
http://git.51.nb/liaobolin/apiMaker/tree/master/demo/api

## 功能点
* 以服务为纬度生成格式统一的接口配置，可直接用于生产环境中
* 支持服务下指定`controller`与指定`api`生成，减少配置文件代码冗余
* 生成模版支持部分定制，可以使用任意异步接口库
* 良好的入参、出参注释，可直接拷贝使用接口调用代码
* 合并式的生成方式，在配置文件中添加自定义属性不会被覆盖掉

## 安装
```
nbm install @u51/apimaker --save-dev
或
nbm install @u51/apimaker -g
```
注意：需要nodejs版本 8.0及以上，如果出现`apimaker`命令不存在时，请切换node版本重新安装

## 使用步骤
1、在package.json中配置命令

```
"scripts": {
	......
    "api": "./node_modules/@u51/apimaker/bin/index.js create --config ./src/api/.api.config.js"
  },

```

2、在工程中添加配置文件`.api.config.js`

```
// 文件内容
module.exports = {
    output: './src/api',
    apis: [
        {
            swagger: 'http://immall.installment-mall-gateway.51.env/swagger-ui.html'
        },
        {
            swagger: 'http://weiwenyi2.insurance-gateway.51.env/swagger-ui.html', // 在http://ares.51.nb/中复制
            // 只生成指定controller下的接口
            controllers: ['提供前端相关api']
        },
        {
            swagger: 'http://jaq.usercenter-gateway.51.env/swagger-ui.html',
            controllers: ['app-weixin-controller', {
                controller: 'app-user-info-controller',
                // 更细粒度的接口控制，只生成某个controller下的某些接口
                apis: ['/usercenter-gateway/api/v2/user/info/modify']
            }]
        },
    ]
};
```

2、在工程根目录中运行命令

```
nbm run api
```

3、在 `output: './src/api'`配置的输出目录下生成如下文件

```
├── installment-mall-gateway
│   ├── api.js
│   ├── config.js
│   ├── example.full.js
│   └── example.required.js
└── insurance-gateway
    ├── api.js
    ├── config.js
    ├── example.full.js
    └── example.required.js
..........     

```

4、每个服务下的全部或指定`Controller`下的接口都会输出到`api.js`中，引用该文件并调用对应接口，`example.full.js`中有使用样例，可以直接复制

```
import InstallmentMallGateway from './api/installment-mall-gateway/api';

InstallmentMallGateway.postOrderPreSubmitV1({
    params: {
        status: '-1',
    },
    data: {
        orderPreSubmitDTO: '',
    },
    headers: {
        userId: '150001810', //用户的U51用户Id
        'X-FROM-TYPE': '10', //投放来源
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
```

## 高级功能&详细介绍
1、`config.js` `insurance-gateway`服务下的所有接口基本配置,

```
// insurance-gateway config

module.exports = {
    getProductDetailV1: {
        url: '/v1/product/detail',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
    getProductListOrderV1: {
        url: '/v1/product/listOrder',
        method: 'get',
        baseURL: '/api.u51.com/insurance-gateway/api',
    },
    .......
};

```
如果某个接口的配置需要加自定义字段，重新生成也是会保留自定义字段的（除以上3个字段外都是自定义字段）

2、`api.js`  `insurance-gateway`服务各个接口的调用方法

```
const axios = require('../axios');
const config = require('./config');

module.exports = {
    getProductDetailV1: param => axios(Object.assign(config.getProductDetailV1, param)),
    getProductListOrderV1: param => axios(Object.assign(config.getProductListOrderV1, param)),
	........
};
```

可以我们在调用接口时使用的不是`axios`库或者是调用方法不一样，所以支持部分模版自定义。

* 如 `const axios = require('../axios');`，由`.api.config.js`文件中的`importTpl`控制
* 调用的方法也可以自定义, 如 `getProductDetailV1: param => axios(Object.assign(config.getProductDetailV1, param)),`由`.api.config.js`文件中的`apiTpl`控制

如果我想用 `http`异步库，那么就可以如下配置`.api.config.js`文件

```
module.exports = {
    output: './demo/api',
    importTpl: "const http = require('http');",
    apiTpl: '{apiName}: params => http.sendRequest(config.{apiName}, params),',
	........
};
```

最终生成的`api.js`内容为

```
const http = require('http');
const config = require('./config');

module.exports = {
    getProductDetailV1: param => http.sendRequest(config.getProductDetailV1, param),
    getProductListOrderV1: param => http.sendRequest(config.getProductListOrderV1, param),
	........
};
```

注意：

 * `importTpl`字段中必须以`require`的方式引入文件
 * `apiTpl`字段中的{apiName}会被替换成对应的接口名称

3、`example.full.js` 完整版接口调用样例文件

```
import InstallmentMallGateway from './api/installment-mall-gateway/api';


/**
 * 推荐商品列表    /v1/activity/recommend
 *
 * @params      { String   }      latitude                      纬度
 * @params      { String   }      longitude                     经度
 * @params      { String   }      areaCode                      地区代码
 * @params      { String   }      X-FROM-TYPE                   X-FROM-TYPE
 * @params      { String   }      Authorization                 用户的U51Token
 * @params      { String   }      userId                        用户的U51用户Id
 */
InstallmentMallGateway.getActivityRecommendV1({
    params: {
        latitude: '30',
        longitude: '120',
        areaCode: '1_0_0_0',
    },
    headers: {
        'X-FROM-TYPE': '', //X-FROM-TYPE
        Authorization: 'encrypt MTUwMDAxODEwLXYx.bWZkutQm3LiArAke6DqX5V0y_bf5lNS7KHTLv-3EIuPY7ORv3jXLaRcGZU-tlM-RSJJKuJ07KDBlOxTL35xZVg', //用户的U51Token
        userId: '150001810', //用户的U51用户Id
    },
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
/*
* 返回结果
[
    {
        "allStockCount": "(integer,optional) 全部库存",
        "alreadyBuy": "(integer,optional) 已抢人数-目前已弃用",
        "imageUrl": "(string,optional) 商品图片",
        "installmentPrice": "(number,optional) 最低分期价格",
        "marketPrice": "(number,optional) 市场价",
        "price": "(number,optional) 商品价格",
        "process": "(number,optional) 进度",
        "productNo": "(string,optional) 商品编号",
        "stockCount": "(integer,optional) 剩余库存",
        "subTitle": "(string,optional) 副标题（商品描述）",
        "tag": "(string,optional) 标签",
        "title": "(string,optional) 主标题（商品名称）"
    }
]
*/
```

该文件包含所有接口的完整调用方式，每个参数的注释等等，使用时可以直接复制到使用的地方。除此之外，该接口返回字段的注释也会输出在接口下方，一目了然，基本上使用接口时可以告别ares了。


4、`example.full.js` 只有required接口调用样例文件

5、`.api.config.js`中配置`apiHost: xxx`, 会替换掉baseURL中的host


## 其他
1、当某些接口需要做特殊处理时，建议通过配置自定义字段，然后在axios的拦截器中做处理，比如对`restful`参数做替换

```
// restful 参数替换
instance.interceptors.request.use(config => {
    const reg = /\{(.*?)}/gi;
    const params = config.params || {};
    const restArgs = [];

    config.url = config.url.replace(reg, ($0, $1) => {
        if (params[$1]) {
            restArgs.push($1);

            return params[$1];
        }

        return $0;
    });

    // path 参数替换后是否保留
    if (!config.retain) {
        for (let i = 0; i < restArgs.length; i++) {
            delete params[restArgs[i]];
        }
    }

    return config;
});
```

2、在ares中配置的参数类型，`query`与`path`都放到了 `params`中，`body`与`formData`放到了 `data`中

3、在多个tag下切换开发时，运行该工具创建出的接口配置为一个并集，并不会删掉接口，如果是在ares上已经删掉的接口，需要手动去api.js与config.js中删掉

4、运行命令时如果报接口错误，可能是对应的服务在重启或者，等待对应服务部署结束之后再运行脚本

## 结束
如果有特殊的需求或者使用方式，以及使用过程中遇到的问题，都可以随时找我

## CHANGE LOG

### 2019-05-15  1.1.6

[ M ] - 修改baseURL生成方式
[ M ] - 修改模版catch默认为空