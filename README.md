# npm-vue-template
## npm发布vue组件库模板，支持按需引入

## Project setup
```
yarn install
```
## 一、组件库开发部署
### 目录
|-- components
  -- index.js      // 导出组件库的文件
  |-- CommonFooter  // 单个组件文件夹
    -- CommonFooter.vue  // 组件文件
    -- index.js          // 组件导出文件
|-- src        // 用于本地测试组件demo
  -- main.js    // 全局导入组件用于测试
  -- app.vue    // 测试页入口
  |-- assets     // 图片等资源
|-- public      // 模板文件，与普通vue项目一致，可以忽略不关注
|-- lib         // 组件库打包后的文件夹


### 开发组件库流程说明
1. 修改package.json的name，例如vue-ui-demo。该值为将来发布的组件库名字
2. 组件库放在components文件夹下，需配置index.js。可参考CommonFooter组件
3. 组件测试页面 yarn serve
4. 打包及部署到npm见下面具体说明

### 组件测试页面
```
yarn serve
```
### 打包组件库
输出到lib文件夹
```
yarn build
```

### 发布npm的流程
1. 前提，得有个npm账号，没有就新注册一个账号https://www.npmjs.com/signup
2. 进入到项目的根目录下，运行 npm login 执行登录
一般情况下回提示你输入 你的用户名，密码和邮箱，若登录成功一般会显示：
`Logged in as` 你的名字 `on https://registry.npmjs.org/`.
3. 发布或者更新包的时候，需要手动修改 package.json 中的version版本号，一般惯例都是+1，比如1.0.0 --> 1.0.1。更改完成后，分别执行打包、登录npm、发布即可
```
yarn build 将组件打包
npm login
npm publish（在此之前可能需要npm login登录）
```
4. 关于版本号和标签
npm包的版本号遵循着一定的规范，比如1.5.2这个版本号，其中1是主版本号(major version)，5是次版本号(minor version)，而 2是补丁版本号(patch version)，主要用来bug修复的更新等。在包管理的时候遵循对应语义的版本号更新，便于后续维护。
同时，在发布一个新版本的时候，还可以使用打标签的方式进行标记，如：

如果你的包是已经发布过了，还可以对指定的版本号进行打标签:
npm dist-tag add npm-test@1.0.0 [stable]

#### 提示：
发包时提示name名错误，name名称不能有大写字母，一般建议小写字母加中横线连接

## 二、组件库使用
以组件库：vue-ui-demo，其中包含组件 CommonFooter为例

### 一、全局引入
```
// 在main.js中全局注册

import olympic2021Components from 'vue-ui-demo'
import 'vue-ui-demo/lib/index/style.css'
Vue.use(olympic2021Components)
```

#### 模板中使用方式：
```
<template>
  <div id="app">
    <common-footer></common-footer>
  </div>
</template>
```



### 二、按需部分引入
可以指定组件库中的某个组件单独引入。避免仅使用部分组件，要引入全部组件库的情况。
以引入组件库：vue-ui-demo中的组件 CommonFooter为例

##### 配置：使用插件 babel-plugin-component
```
npm i babel-plugin-component -D
```

插件使用文档：https://www.npmjs.com/package/babel-plugin-component

在babel.config.js中增加
```
  "plugins": [
    [
      "component",
      {
        "libraryName": "vue-ui-demo", // 组件的名称
        "camel2Dash": false,  // 组件路径保持驼峰，不自动转换为-连接
        "style": true   // 如果组件有样式文件，引入组件的单独的css
      }
    ],
  ]
```


#### 模板中使用方式：
```
<template>
  <div id="app">
    <common-footer></common-footer>
  </div>
</template>
```

#### 1. 直接全局注册：
```
// 在main.js中全局注册
import {CommonFooter} from 'vue-ui-demo'
Vue.use(CommonFooter)
```


#### 2. 组件内部注册：
```
// 使用组件的.vue文件中局部注册
<script>
import {CommonFooter} from 'vue-ui-demo'
export default {
  components:{
    'common-footer':CommonFooter
  }
}
</script>
```
### 参考文章： 
[【npm】将自己的vue组件发布为npm包](https://www.jianshu.com/p/0fd669635b76)
[Vue Cli 3 搭建一个可按需引入组件的组件库架子](https://blog.csdn.net/weixin_33923762/article/details/91397133?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
