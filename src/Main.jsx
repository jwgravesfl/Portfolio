import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Header from './Header'

var sectionStyle = {
    backgroundColor: "#000",
    height: "100vh",
    width: "100wh",
};

export default class Main extends Component {
  render() {
    return (
      <main style={ sectionStyle }>
        <Header />  
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/resume' component={Resume} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </main>

    )
  }
}