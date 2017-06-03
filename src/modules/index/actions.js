import { createAction } from 'redux-actions'

const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE'
const SET_FILTER = 'SET_FILTER'

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

export const setFilter = createAction(SET_FILTER)

export const markAllComplete = createAction(MARK_AS_COMPLETE)
