import TodoItem from '../containers/TodoItem'

export default function TodoList ({ todos }) {
  console.log('todos: ', todos)
  return (
    <ul className='todos'>
      {(todos.length > 0) && todos.map((todo, id) =>
        <TodoItem key={id} todo={todo} />
      )}
    </ul>
  )
} 