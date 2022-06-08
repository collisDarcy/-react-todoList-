import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'
export default class Header extends Component {
  // 对传入的方法进行类型的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleKeyUp = (event) => {
    if (event.keyCode !== 13) return
    if (event.target.value.trim() === '') {
      alert('添加的内容不能为空！')
      return
    }
    // console.log(event.target.value)
    //准备一个obj对象
    const todoObj = { id: nanoid(), name: event.target.value, done: false }
    //将todoObj传递给App
    this.props.addTodo(todoObj)
    event.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
