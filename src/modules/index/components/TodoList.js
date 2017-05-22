export default function TodoList ({ todos }) {
  console.log(todos)
  return (
    <ul>
      {todos.length && todos.map((todo, id) =>
        <li key={id}>{todo.value}</li>
      )}
    </ul>
  )
} 