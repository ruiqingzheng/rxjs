# 使用 @babel/register 支持 es module import

## 怎么使用 es module 的方式来使用 mocha 测试

mocha 的执行环境是在 node 环境

它的模块系统默认是 AMD 的而不是 es module

但很多时候我们项目中需要测试的模块都是 es module 方式导出的

那么怎么才能让 mocha 在 node 环境用 es module 来引入模块呢

如果让 mocha 项目整个设置为, type=module , 这样整体设置为 module 在 node 环境下并不是个好的方案

或 让 mocha 从项目编译后的代码中去引入需要测试的代码, 这样每次都依赖编译也不是好的方案

那么, 还有种方式是在 node 环境使用 babel/register 就可以动态的让 mocha 使用 es module

./node_modules/.bin/mocha --require @babel/register

安装依赖

```sh

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register core-js@3.27.2

@babel/core @babel/cli : 是babel基础包
@babel/preset-env ----  是babel常用参数配置
@babel/register  ---  是命令行参数模式调用babel 需要的入口
@core-js@3.27.2 --- 是低版本js环境补丁, 也就是以前的polyfill
```

babelrc 配置文件

```json
{ "presets": [["@babel/preset-env", { "useBuiltIns": "entry", "corejs": "3.22" }]] }
```

使用方式 1 , package 文件中加参数 --require @babel/register

注意 --require @babel/register 必须写在中间 , 写在最后无效!!!!

// node 调用

`$ node --require @babel/register ./race.js`

## 使用方式 2

参考: <https://blog.csdn.net/weixin_44691608/article/details/111932754>

入口文件中 require('@babel/register') ,

然后其他js文件, 只要经这个入口文件导入的, 都可以使用`import`,`export`

配置入口文件

入口文件中 require('@babel/register') , 并载入 使用了 es module 的源码文件

```js
require('@babel/register')
module.exports = require('./index.js')
```
