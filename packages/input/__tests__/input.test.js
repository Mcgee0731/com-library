/**
 * @jest-environment jsdom
 */


import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('mc-input',()=>{ // input 相关测试组

  // input 是否是文本框
  test('input-text',()=>{

    // 内存中挂载 input组件，返回一个包裹器
    const wrapper = mount(input)

    // 断言，判断是否是文本框
    expect(wrapper.html()).toContain('input type="text"')
  })

  test('input-password',()=>{
    const wrapper = mount(input,{
      propsData:{
        type:'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  // 测试组件状态 value
  test('input-password',()=>{
    const wrapper = mount(input,{
      propsData:{
        type:'password',
        value:'123456'
      }
    })
    expect(wrapper.props('value')).toBe('123456')
  })

  test('input-snapshot',()=>{
    const wrapper = mount(input,{
      propsData:{
        type:'text',
        value:'123456'
      }
    })

    // 给dom对象，拍一个快照，生成 .snap文件
    // 如果修改 type 类型 ，下次执行时会对比两次快照，不同就会报错
    // yarn jest -u 重新生成新快照
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})