# uml_front_framework

## 目录介绍

Dir | Desc
--- | ---
 [build/](build/) | 构建脚本
 [config/](config/) | 配置
 [src/](src/) | 源码
 [test/](test/) | 单元测试

>

## Build Setup
#安装全局模块
node webpack

``` bash
# 安装依赖模块
npm install

# 热启动开发服务
npm run dev

# 构建产线资源
npm run build


# 框架介绍
* 前端框架：vue + vue-router + vuex
* 构建工具：webpack
* css预编译：less，sass
* 单元测试：karma + mocha + chai
* 代码检查：eslint
* 开发服务：node + express
# 使用
* 进入项目目录
* 安装依赖package,命令：
```
	npm install
```

# 架构结构说明
----
* 运行和配置部分（平时开发很少变动）对应build,config两个目录
* 生成产线代码的文件夹是dist目录
* 测试代码都在test目录下
* 生成的测试结果报告在coverage目录下
* 开发代码在src下

# src目录说明
* src/assets是静态资源目录
* src/components是共用组件目录
* src/entries webpack构建的入口文件。
* src/models 数据模型层，api配置，对业务逻辑层只提供取数据的方法。
* src/routes是路由页面，单页应用的每个页面都在这里，所以开发者关心的就这里，其他目录文件开发者平时不需要关心
* store 状态数据管理，vuex部分
* src/styles是共用样式
* src/templates 单页面的模板页面，因为一个项目可以会有多个单页面，每个单页面的文件结构不同。
* src/util 公共工具方法








# 功能支持
* 一键命令自动构建
* 监听文件变动，刷新构建
* 监听文件变动，无刷新热加载
* 支持es6
* 支持less，sass，postcss

