import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

var sectionStyle = {
    textAlign: 'center',
    color: 'white',
    height: '85vh',
};

var imgStyle = {
};

export default class Resume extends Component {
  render() {
    return (
      <div style={ sectionStyle }>
          <Image src={'https://www.cowboydr.com/images/testImages/Resume.jpg'} centered as='a' href='https://www.cowboydr.com/images/testImages/JGravesResume.pdf' target='_blank'/>
      </div>

    )
  }
}