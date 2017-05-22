const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

export function addTodo (payload) {
  return {
    type: ADD_TODO,
    payload
  }
}

export function deleteTodo (payload) {
  return {
    type: DELETE_TODO,
    payload
  }
}