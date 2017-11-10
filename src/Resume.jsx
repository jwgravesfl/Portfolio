import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

var sectionStyle = {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#000',
};

export default class Resume extends Component {
  render() {
    return (
      <div style={ sectionStyle }>
          <Image style={ sectionStyle } label='Click to Download a PDF Copy' src={'https://www.cowboydr.com/images/testImages/Resume.jpg'} centered as='a' href='https://www.cowboydr.com/images/testImages/JGravesResume.pdf' target='_blank' />
      </div>

    )
  }
}