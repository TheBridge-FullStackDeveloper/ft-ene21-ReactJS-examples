import { useState } from 'react';
import './Header.css';
import logo from '../../assets/img/logo.jpg';

const HeaderF = props => {
  const [state, setState] = useState({ greeting: "Hola" });
  
  const drawLogo = () => <img className="logo" src={logo} alt="Logo de la empresa" />

  const changeGreeting = () => setState({ ...state, greeting: "Que pasa pisha??" })
  const addFarewell = () => setState({ ...state, farewell: "Taluego" })

  return (
      <header>
        <h1>{props.myBrand}</h1>
        <h2>{state.greeting}</h2>
        <h2>{state.farewell}</h2>
        {drawLogo()}
        {/* <Nav /> */}
        <button onClick={changeGreeting}>Cambiar saludo</button>
        <button onClick={addFarewell}>Añadir despedida</button>
      </header>
    )
}

export default HeaderF;