module.exports = {
  "testMatch":["**/__tests__/**/*.[jt]s?(x)"], // 从哪里找测试文件 js/ts文件
  "moduleFileExtensions":[ // 文件后缀类型
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ],
  "transform":{ // 转换,匹配到键，给值处理
    // 用 `vue-jest` 处理 `*.vue` 文件
    ".*\\.(vue)$":"vue-jest",
    // 用 `babel-jest` 处理 js
    ".*\\.(js)$":"babel-jest"
  }
}