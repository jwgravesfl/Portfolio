import React, { Component } from 'react';
import { Popup } from 'semantic-ui-react'

var iconStyle = {
  marginTop: '2vh',
  fontSize: '3vh',
};

var divIconStyle = {
  marginTop: '2vh',
};


export default class HomeIcons extends Component {
  render(){
    return (

  <div style={ iconStyle } >
          <div style={ iconStyle }>
          <Popup
              trigger={<i class="devicon-github-plain colored"></i>}
              content='Github'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-slack-plain colored"></i>}
              content='Slack'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-chrome-plain colored"></i>}
              content='Chrome'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-devicon-plain colored"></i>}
              content='Devicon'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-illustrator-plain colored"></i>}
              content='Adobe Illustator'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-photoshop-plain colored"></i>}
              content='Adobe Photoshop'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-visualstudio-plain colored"></i>}
              content='Visual Studio Code'
          />
          </div>
          <div style={ iconStyle }> 
          <Popup
              trigger={<i class="devicon-html5-plain colored"></i>}
              content='HTML5'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-css3-plain colored"></i>}
              content='CSS'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-bootstrap-plain colored"></i>}
              content='Twitter BootStrap'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-javascript-plain colored"></i>}
              content='JavaScript'
          />&nbsp;&nbsp;
          <Popup
              trigger={<i class="devicon-jquery-plain colored"></i>}
              content='JQuery'
          />
          <Popup
              trigger={<i class="devicon-react-original colored"></i>}
              content='ReactJS'
          />&nbsp;&nbsp;
           <Popup
              trigger={<i class="devicon-babel-plain colored"></i>}
              content='Babel'
          />
          </div>
          <div style={ iconStyle }>
          <Popup
              trigger={<i class="devicon-webpack-plain colored"></i>}
              content='Webpack'
          />&nbsp;&nbsp;
           <Popup
              trigger={<i class="devicon-meteor-plain colored"></i>}
              content='Meteor'
          />&nbsp;&nbsp;
           <Popup
              trigger={<i class="devicon-express-plain colored"></i>}
              content='ExpressJS'
          />&nbsp;&nbsp;
           <Popup
              trigger={<i class="devicon-nodejs-plain colored"></i>}
              content='Node.js'
          />&nbsp;&nbsp;
           <Popup
              trigger={ <i class="devicon-mongodb-plain colored"></i>}
              content='mongoDB'
          />&nbsp;&nbsp;
           <Popup
              trigger={<i class="devicon-mysql-plain colored"></i>}
              content='MySQL'
          />
          </div>
  </div>

    )
  }
}