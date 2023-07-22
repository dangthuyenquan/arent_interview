import React, { Component } from 'react'
import Home from '../../pages/Home'
import Footer from '../Footer'
import Header from '../Header'
import './style.css'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MyRecord from '../../pages/MyRecord'
import Recommended from '../../pages/Recommended'


export default class Main extends Component {
  render() {
    return (<div className='wrapper'>
      <Header />
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/my-record" component={MyRecord} />
        <Route path="/recommended" component={Recommended} />
      </Router>
      <Footer />
    </div>)
  }
}
