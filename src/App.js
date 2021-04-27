import { useState } from 'react';

import './App.scss';

import HeaderF from './components/Header/HeaderF';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import MainF from './components/Main/MainF';
import Footer from './components/Footer/Footer';

import lightTheme from './styles/lightTheme';
import darkTheme from './styles/lightTheme';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/listado">
            <MainF theme={currentTheme} />
          </Route>
        </Switch>
      </Router>

      <Footer brand={state.myBrand} theme={currentThemeObject} />
    </div>
  );
}

export default App;