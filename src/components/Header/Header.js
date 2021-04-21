import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: "Hola"
    }
  }

  drawLogo = () => <img className="logo" src={logo} alt="Logo de la empresa" />
  
  componentDidMount() {
    // ...
  }

  render() {
    return (
      <header>
        <h1>{this.props.myBrand}</h1>
        <h2>{this.state.greeting}</h2>
        {this.drawLogo()}
        {/* <Nav /> */}
      </header>
    );
  }
}

export default Header;