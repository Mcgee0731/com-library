import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

module.exports = [
  {
    input:'index.js',
    output:[
      {
        file:'dist/index.js',
        format:'es'
      }
    ],
    plugins:[
      vue({
        css:true,  // js中引入css
        compileTemplate:true //  把模板转化为render函数
      }),
      terser()
    ]
  }
]