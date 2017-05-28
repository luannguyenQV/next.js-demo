import { handleActions } from 'redux-actions'
import {
  addTodo,
  updateTodo,
  deleteTodo
} from './actions'

const defaultState = {
  todos: []
}

const handlers = {
  [addTodo]: (state, action) => ({...state,
    ...{todos: [...state.todos, action.payload]}
  }),
  [updateTodo]: (state, action) => ({...state,
    ...{todos: [...state.todos, action.payload]}
  }),
  [deleteTodo]: (state, action) => ({...state,
    ...{todos: [...state.todos, action.payload]}
  })
}

export default handleActions(handlers, defaultState)
