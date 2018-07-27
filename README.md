# vue-login-template

> 使用vuex+axios+sessionStorage做登录验证

## 简介

作为vue的初学者，在了解了基础知识，通过查阅资料写的一个包含登录验证的vue基础模板，项目中只包含登录页面和一个极其简单的首页。

模板已在本地通过后台接口测试。

使用时需修改config文件夹中dev.env.js和prod.env.js中的BASE_URL为项目所使用的api地址，并根据修改login页面。

模板中的vuex是为了在后续页面开发中使用到的登录状态管理。

``` bash
# 安装依赖
npm install

# 配置完项目api之后运行，会自动打开浏览器
npm run dev

# 项目开发完成打包发布
npm run build

```
