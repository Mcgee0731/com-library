
## 原型开发
```
yarn global add @vue/cli-service-global
```

## Monorepo

## Storybook
```
npx -p @storybook/cli sb init --type vue （npm i -g npx）
yarn add vue
yarn add vue-loader vue-template-compiler --dev
```

## yarn workspace
```
# package.json

"private":true, 
"workspaces":[ 
  "packages/*"
]
```

## Lerna

```
yarn global add lerna 全局安装

lerna init 初始化会在项目生成 lerna.json 配置文件

lerna publish 发布(添加npm scripts)
```

## 单元测试
#### 安装
```
yarn add jest @vue/test-utils vue-jest babel-jest -D -W
```
#### 配置测试脚本
```
# package.json

"scripts":{
  "test":"jest"
}
```
#### jest配置文件
```
# jest.config.js

module.exports = {
  "testMatch":["**/__tests__/**/*.[jt]s?(x)"], // 从哪里找测试文件 js/ts文件
  "moduleFileExtensions":[ // 文件后缀类型
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ],
  "transform":{ // 转换
    // 用 `vue-jest` 处理 `*.vue` 文件
    ".*\\.(vue)$":"vue-jest",
    // 用 `babel-jest` 处理 js
    ".*\\.(js)$":"babel-jest"
  }
}
```
#### Babel 配置文件
```
# babel.config.js

module.exports = {
  presets:[
    [
      '@babel/preset-env'
    ]
  ]
}
```
#### vue-jest 依赖babel@6 目前项目是@7版本
```
# babel 桥接工具

yarn add babel-core@bridge -D -W
```


## Rollup 打包
#### 安装
```
yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler -D -W

yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```
#### 配置文件
```
# rollup.config.js

import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    // Dynamically inject css as a <style> tag
    css: true,
    // Explicitly convert template to render function
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把 css 插入到 style 中
    // inject: true,
    // 把 css 放到和js同一目录
    extract: true
  })
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())

// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root)
  // 过滤，只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应的配置
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.join(root, item, pkg.module),
          format: 'es'
        },
      ],
      plugins: plugins
    }
  })
```
## 