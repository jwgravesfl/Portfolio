import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

var imgStyle = {
  marginTop: '18vh',
  height: '100%',
  maxWidth: '300px',
  border: "3px solid white",
};

var divStyle = {
    backgroundColor: '#000',
};

export default class HomePicture extends Component {
  render(){
    return (
      <div style={ divStyle }>
           <Image style={ imgStyle } src='https://www.cowboydr.com/images/testImages/JGravesResumePic.jpg' fluid centered circular />
      </div>

    )
  }
}