import React from 'react'

export default ({ addTodo }) => (
  <form
    action='javascript:'
    onSubmit={({target: {title}}) => {
      addTodo(title.value)
      title.value = ''
    }}
  >
    <input 
      type='text'
      name='title'
      placeholder='add new task'
    />
  </form>
)
