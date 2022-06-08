import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = { mouse: false }
  handleMouse = (flag) => {
    // console.log(this.state.mouse)
    return () => {
      this.setState({ mouse: flag })
      //  console.log(this.state)
    }
  }
  // 勾选的某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
      // console.log(id,event.target.checked)
    }
  }
  // 删除一个todo的回调----子组价向父组件传值
  handleDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
