import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

import Private from "../components/Private/Private";

class LoginContextProvider extends Component {
  constructor() {
    super();
    
    this.state = {
      token: ""
    }
  }
  
  // ...

  render() {
    return <Provider context={this.state.token}>
      <Private />
    </Provider>;
  }
}

export { LoginContextProvider, Consumer as LoginContextConsumer };