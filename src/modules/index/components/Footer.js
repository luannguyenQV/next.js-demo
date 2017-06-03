import React, { Component } from 'react'

export default class AddTodo extends Component {
  render () {
    const { 
      todos, 
      actives, 
      filter: selectedFilter,
      setFilter, 
      deleteAllCompletedTodos 
    } = this.props

    return (
      <footer>
        <span>
          {actives === 0 ? 'no items ' : null}
          {actives === 1 ? '1 item ' : null}
          {actives > 1 ? actives + ' items ' : null}
          left
        </span>
        <ul className='filters'>
          {['all', 'active', 'completed'].map(filter =>
            <li key={filter}
              className={selectedFilter === filter && 'selected'}
              onClick={() => setFilter(filter)}>
              {filter}
            </li>
          )}
        </ul>
        <a 
          className='clearComplete'
          onClick={() => deleteAllCompletedTodos(todos)}>
          { (todos.length - actives > 0) ? 'Clear completed' : null }
        </a>
      </footer>
    )
  }
}
