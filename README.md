### Weex 工程模板



##### 一、入口地址

**Weex** : `http://YOUR.IP.ADDR:8800/js/index.weex.js`

**Web** : `http://YOUR.IP.ADDR:8800/index.html`



##### 二、命令

**1. 开发，将同时开启监听和热加载：**

```bash
$ nbm run dev
```

更换端口，可使用：

``` bash
$ PORT=8800 nbm run dev
```

**2. 打包：**

```bash
$ nbm run build
```



##### 三、配置

**1. 代理**

修改 `compile/proxy.config.js` 文件。

**2. 关闭或开启 Web 降级使用 flexible**

修改 `compile/webpack.sendRequest.js` 中的 `IS_FLEXIBLE` 变量。

**3. 指定 Web 打包的对外路径**

修改 `compile/webpack.sendRequest.js` 中的 `BUILD_PUBLIC_PATH` 变量。



##### 四、注意事项

**1. Vue 版本与依赖**

请确保项目的 Vue 版本和对应的 vue-template-compiler 保持一致的版本号。

**2. Vue 引用**

在 Web 环境，已经通过 `vendor.js` 文件注册了全局的 Vue 变量；在 Weex 环境则自带 Vue。因此，业务代码中，请直接使用 Vue 变量，而无需如下引用：

```javascript
// DO NOT IMPORT VUE
import Vue from 'vue';
```

这是因为，在一些 Vue 版本中（如 2.5.16），使用上述语句将在 Weex 环境中产生对 `window` 变量的使用，从而导致运行失败。

**3. CSS 尺寸单位**

基本地：

- 所有 ` px` 单位都会转为 `rem` 单位（浏览器）或者保留为 `px`（Weex Native）
- 所有 `pt` 单位会保留为 `px`（浏览器）或者 `wx` （Weex Native）

在 Web Flexible 模式中，以下行为对浏览器环境造成额外影响：

- 使用 `/*!px*/` 将转成 `[data-dpr]` 式的响应式像素尺寸
- `font-size` 始终保持响应式的 `px` 尺寸
- 不要使用 `/*!no*/`，请使用 `pt` 单位