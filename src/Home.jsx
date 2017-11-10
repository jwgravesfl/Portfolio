import React, { Component } from 'react'
import HomeName from './HomeName'
import HomePicture from './HomePicture'
import HomeIcons from './HomeIcons'

var middleStyle = {
  width: "100%",
  height: "35%",
  textAlign: "center",
  color: 'white',
  backgroundColor: '#000',
};

export default class Home extends Component {
  render(){
    return (
      <div style={ middleStyle }>
        <HomeName />
        <HomePicture />
        <HomeIcons />
        
      </div>

    )
  }
}