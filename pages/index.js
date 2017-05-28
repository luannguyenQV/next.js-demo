import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { createStore, combineReducers, bindActionCreators } from 'redux'
import defaultPage from '../src/common/hocs/defaultPage'
import todoReducer from '../src/modules/index/reducer'
import TodoList from '../src/modules/index/containers/TodoList'
import AddTodo from '../src/modules/index/containers/AddTodo'
import { initStore, addTodo } from '../src/store'
import stylesheet from '../src/common/styles/styles.css'

class Page extends Component {
  static getInitialProps() {
    //
  }

  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default defaultPage({
  Page, 
  reducer: { todos: todoReducer }
})
