export default function TodoList ({ todos }) {
  return (
    <ul>
      {(todos.length > 0) && todos.map((todo, id) =>
        <li key={id}>{todo.value}</li>
      )}
    </ul>
  )
} 