import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import defaultPage from '../src/common/hocs/defaultPage'
import todoReducer from '../src/modules/index/reducer'
import AddTodo from '../src/modules/index/containers/AddTodo'
import TodoList from '../src/modules/index/containers/TodoList'
import Footer from '../src/modules/index/containers/Footer'
import stylesheet from '../src/common/styles/styles.css'

class Page extends Component {
  static getInitialProps() {
    //
  }

  render() {
    return (
      <section>
        <h1>todos</h1>
        <AddTodo />
        <TodoList />
        <Footer />
      </section>
    )
  }
}

export default defaultPage({
  Page, 
  reducer: { todos: todoReducer }
})
