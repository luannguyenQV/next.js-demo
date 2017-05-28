import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../widgets/Header'

const initStore = (reducer, initialState) => {
  const buildStore = () =>
    createStore(
      combineReducers({...reducer}),
      initialState
    )
  return buildStore
}

const mainPage = (Page) => class DefaultPage extends Component {
  static getInitialProps() {
    //
  }

  render () {
    return (
      <div className='main'>
        <Page {...this.props}/>
      </div>
    )
  }
}

const defaultPage = ({ Page, reducer }) => (
  withRedux(
    initStore(reducer),
    null
  )(mainPage(Page))
)

export default defaultPage