import { useState } from 'react';

import './App.scss';

import HeaderF from './components/Header/HeaderF';
import MainF from './components/Main/MainF';
import Footer from './components/Footer/Footer';

import lightTheme from './styles/lightTheme';
import darkTheme from './styles/lightTheme';

const App = () => {
  const [state, setState] = useState({ myBrand: "FyF", other: "xxx" })
  
  const [currentTheme, setCurrentTheme] = useState(true)
  const [currentThemeObject, setCurrentThemeObject] = useState(lightTheme)

  const setBrand = myBrand => setState({ myBrand })
  //const setBrand = myBrand => setState({ myBrand: myBrand })

  const changeTheme = () => {
    if (currentTheme) {
      setCurrentTheme(false)
      setCurrentThemeObject(darkTheme)
    }
    else {
      setCurrentTheme(true)
      setCurrentThemeObject(lightTheme)
    }
  }

  /* JSX */
  return (
    <div className="App">
      <HeaderF myBrand={state.myBrand} setBrand={setBrand} theme={currentThemeObject} changeTheme={changeTheme} />
      <MainF theme={currentTheme} />
      <Footer brand={state.myBrand} theme={currentThemeObject} />
    </div>
  );
}

export default App;