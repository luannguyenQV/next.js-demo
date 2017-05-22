import { handleActions } from 'redux-actions'
import {
  addTodo,
  deleteTodo
} from './actions'

// const defaultState = {
//   todos: []
// }

// const handlers = {
//   [addTodo]: (state, action) => ({...state,
//     ...{todos: [...state.todos, action.payload]}
//   }),
//   [deleteTodo]: (state, action) => ({...state,
//     ...{todos: [...state.todos, action.payload]}
//   })
// }

//export default handleActions(handlers, defaultState)

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action)
      return ({...state,
        ...{todos: [...state.todos, action.payload]}
      })
    default:
      return state
  }
}

export default todos
