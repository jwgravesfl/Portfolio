import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

var imgStyle = {
  marginTop: '12vh',
  height: '100%',
  maxWidth: '300px',
};

export default class HomePicture extends Component {
  render(){
    return (
      <div>
           <Image style={ imgStyle } src='https://www.cowboydr.com/images/testImages/JGravesResumePic.jpg' fluid centered circular />
      </div>

    )
  }
}