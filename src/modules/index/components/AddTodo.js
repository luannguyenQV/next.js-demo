import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor (props) {
    super(props)

    this.state = { 
      todo: ''
    }
  }

  handleSubmit = e => {
    const todo = e.target.value.trim()
    if (e.which === 13 && todo.length > 1 && todo.length < 42) {
      this.props.addTodo(todo)
      this.setState({ todo: '' })
    }
  }

  handleChange = e => {
    this.setState({ todo: e.target.value })
  }

  render() {
    const { todos, updateAllTodoCompleted, markAllCompleted } = this.props

    return (
      <div className='header'>
        <input type='checkbox'
          checked={markAllCompleted}
          onClick={() => {
            updateAllTodoCompleted({ todos, markAllCompleted })
          }} 
        />
        <input
          className='new-todo'
          type='text'
          placeholder='what need todo now...'
          autoFocus='true'
          value={this.state.todo}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} 
        />
      </div>
    )
  }
}
