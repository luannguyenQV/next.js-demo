import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor (props) {
    super(props)

    this.state = { todo: this.props.todo.todo }
  }

  _onKeyDown = e => {
    const value = e.target.value.trim()
    const { todo } = this.props

    if (e.keyCode === 13
        && value.length > 1 && value.length < 42) {
      this.props.updateTodo(Object.assign(todo, {todo: value}))
    }
  }

  _onChange = e => {
    this.setState({ todo: e.target.value })
  }

  _onBlur = e => {
    const todo = e.target.value.trim()
    if (todo != this.state.todo && todo.length > 1 && todo.length < 42) {
      this.props.updateTodo(todo)
    }
  }

  render() {
    const {
      todo,
      todos,
      deleteTodo,
      markAsCompleted
    } = this.props

    return (
      <li>
        <input type='checkbox'
          checked={todo.completed}
          onChange={() => {
            const todo = Object.assign(
              {}, 
              this.props.todo, 
              { completed: !this.props.todo.completed }
            )
            markAsCompleted({ todo, todos })
          }}
        />
        <input
          type='text'
          value={this.state.todo}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown} 
        />
        <button onClick={() => deleteTodo(todo.id)} />
      </li>
    )
  }
}
