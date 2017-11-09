import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

var sectionStyle = {
    fontSize: '3.6vh',
    textAlign: 'right',
};

var linkStyle = {
    color: '#000',
};

var dropDownHeaderStyle = {
    fontSize: '2vh',
    textAlign: 'right',
    color: '#000',
};

const DropdownExampleDivider = () => (
  <Dropdown style={ dropDownHeaderStyle } text='J. Graves Portfolio' icon='list layout' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Item style={ sectionStyle }><Link to='/' style={ linkStyle }><Icon loading name='home' />Home</Link></Dropdown.Item>
      <Dropdown.Item style={ sectionStyle }><Link to='/Resume' style={ linkStyle }><Icon name='download' />Resume</Link></Dropdown.Item>
      <Dropdown.Item style={ sectionStyle }><Link to='/Portfolio' style={ linkStyle }><Icon name='factory' />Portfolio</Link></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleDivider