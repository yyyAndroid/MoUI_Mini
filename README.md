
<p align="center">
     <img width="200" src="https://ojibl5jc1.qnssl.com/fucking_five.jpeg">
</p>

# DiveCore
### MoUI_Mini
DiveCore核心库之UI组件 - MoUI，高质量小程序UI组件。


##### 项目启动

````
安装依赖 npm install

编译文件 npm run dev

创建文件 npm run create

````

##### 框架

````
.
├── app                                     // 编译项目文件                                                                                   
├── build                                   // gulp构建文件                                      
│   └── build-dev.js                           
├── generate                                // 自动生成插件（支持组件和页面文件创建）
│   ├── config.js
│   ├── generate.js
│   ├── index.js
│   └── template
│       ├── componentJS.js
│       ├── componentJSON.js
│       ├── jade.js
│       ├── less.js
│       ├── pageJS.js
│       ├── pageJSON.js
│       ├── wxml.js
│       └── wxss.js
├── package-lock.json                       // 当前依赖版本
├── package.json                            // 依赖
└── src                                     // 源文件
    ├── app.js                              // 程序入口
    ├── app.json
    ├── app.wxss
    ├── assets                              // 资源文件
    │   └── image
    │       └── logo.jpg
    ├── component                           // 组件
    │   └── icon
    │       ├── icon.jade
    │       ├── icon.js
    │       ├── icon.json
    │       └── icon.less
    ├── pages                               // 页面
    │   └── home
    │       ├── home.jade
    │       ├── home.js
    │       ├── home.json
    │       └── home.less
    └── utils                               // 工具文件
        └── util.js
````