import React, { Component } from "react";
import App from '../App';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  constructor() {
    super();
    
    this.state = {
      theme: "Day"
    }
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

  render() {
    const dataContext = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
    }

    return <Provider value={dataContext}>
      <App />
    </Provider>;
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };