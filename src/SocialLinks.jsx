import React, { Component } from 'react'
import { Icon, Popup } from 'semantic-ui-react'

var middleStyle = {
  backgroundColor: '#000',
};

var iconStyle = {
  textAlign: "center",
  color: '#fff',
  fontSize: '4vh',
};

export default class SocialLinks extends Component {

  render(){

    return (
      <span style={ middleStyle }>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Popup
              trigger={<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jwgravesfl/"><Icon name='linkedin' style={ iconStyle } /></a>}
              content='J. Graves LinkedIn'
          />&nbsp;&nbsp;
          <Popup
              trigger={<a target="_blank" rel="noopener noreferrer" href="https://github.com/jwgravesfl"><Icon name='github' style={ iconStyle } /></a>}
              content='J. Graves Github'
          />&nbsp;&nbsp;
      </span>

    )
  }
}