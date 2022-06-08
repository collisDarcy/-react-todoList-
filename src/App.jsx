import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class todolist案例 extends Component {
  state = {
    todos: [
      {
        id: '01', name: '吃饭', done: true
      }, {
        id: '02', name: '敲代码', done: true
      },
      {
        id: '03', name: '睡觉', done: true
      },
      {
        id: '04', name: '敲代码', done: true
      }
    ]
  }
  //addTodo用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }
  // updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }
  //deleteTodo用于删除一个todo对象
  deleteTodo = (id) => {
    const { todos } = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }
  // handleCheckAll用于全选
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done }
    })
    this.setState({ todos: newTodos })
  }
  // clearAllDone用于清除所有已完成的
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
