import { createAction } from 'redux-actions'

const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

// export function addTodo (payload) {
//   return {
//     type: ADD_TODO,
//     payload
//   }
// }

// export function deleteTodo (payload) {
//   return {
//     type: DELETE_TODO,
//     payload
//   }
// }

export const addTodo = createAction(ADD_TODO)

export const updateTodo = createAction(UPDATE_TODO)

export const deleteTodo = createAction(DELETE_TODO)
