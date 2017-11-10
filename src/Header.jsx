import React, { Component } from 'react'
import Navigation from './Navigation1'
import SocialLinks from './SocialLinks'

var socialLinksStyle = {
  textAlign: 'right',

};

export default class Resume extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <SocialLinks style={ socialLinksStyle } />
      </div>

    )
  }
}