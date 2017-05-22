import React,{Component} from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import Header from '../widgets/Header'
import todoReducer from '../../modules/index/reducer'

function initStore (moduleName, moduleReducer, initialState) {
  const todos = 'todos'
  const store = createStore(
    combineReducers({ [todos]: todoReducer }), 
    {    
      todos: {
        todos: [
          {
            value: 'hello'
          },
          {
            value: 'world'
          }
        ]
      }
    } 
  )

  store.reducers = combineReducers({ todos: todoReducer })
  return store
}

function buildingStore (moduleName, moduleReducer, initialState) {
  if (typeof window !== 'undefined') {
    if (!window.store) {
      window.store = initStore(moduleName, moduleReducer, initialState)
    } else if (!(moduleName in window.store.reducerss)) {
      const reducers = {
        ...window.store.reducers,
        todos: moduleReducer
      }
      window.store.replaceReducer(combineReducers(reducers))
      window.store.reducers = reducers
    }
    return window.store
  } else {
    const store = initStore(moduleName, moduleReducer, initialState)
    return store
  }
}

export const defaultPage = ({ Page, moduleName, moduleReducer }) => class DefaultPage extends Component {
  
  static getInitialProps () {
    const store = buildingStore('todos', moduleReducer)
    return { initialState: store.getState() }
  }

  constructor (props) {
    super(props)
    this.store = buildingStore(moduleName, moduleReducer, props.initialState) || null
  }

  render () {
    return (
      <Provider store={this.store}>
        <div>
          <Header />
          <Page {...this.props} />
        </div>
      </Provider>
    )
  }
}
