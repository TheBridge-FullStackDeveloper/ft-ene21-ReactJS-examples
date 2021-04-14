import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>[HEADER'S MOVIDAS {typeof this.props.redro === "string" ? this.props.redro : `${this.props.redro.id} ${this.props.redro.name}` }]</header>
    )
  }
}

export default Header;