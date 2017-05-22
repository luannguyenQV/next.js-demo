import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import todoReducer from '../src/modules/index/reducer'
import { defaultPage } from '../src/common/hocs/defaultPage'
import TodoList from '../src/modules/index/containers/TodoList'
import AddTodo from '../src/modules/index/containers/AddTodo'
import stylesheet from '../src/common/styles/styles.css'

class Page extends Component {

  render () {
    return (
      <div className='home'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <h1>Todo</h1>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}


export default defaultPage({
  Page, moduleName: 'todos', moduleReducer: todoReducer 
})
