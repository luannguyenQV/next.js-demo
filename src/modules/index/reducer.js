import { handleActions } from 'redux-actions'
import {
  setFilter,
  markAllComplete,

  addTodo,
  updateTodo,
  deleteTodo
} from './actions'

const defaultState = {
  todos: [],
  filter: 'all',
  markAllCompleted: false
}

const handlers = {
  [setFilter]: (state, action) => ({...state,
    ...{filter: action.payload}
  }),
  [markAllComplete]: (state, action) => ({...state,
    ...{markAllCompleted: action.payload}
  }),

  [addTodo]: (state, action) => ({...state,
    ...{todos: [...state.todos, {
      id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      todo: action.payload,
      completed: false
    }]}
  }),
  [updateTodo]: (state, action) => {
    return ({...state,
      ...{todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)}
    })
  },
  [deleteTodo]: (state, action) => ({...state,
    ...{todos: state.todos.filter(todo => todo.id !== action.payload)}
  })
}

export default handleActions(handlers, defaultState)
