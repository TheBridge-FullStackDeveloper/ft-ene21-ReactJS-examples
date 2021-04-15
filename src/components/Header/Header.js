import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        <h1>{this.props.brand}</h1>
        <img className="logo" src={logo} alt="Logo de la empresa" />
        {/* <Nav /> */}
      </header>
    );
  }
}

export default Header;