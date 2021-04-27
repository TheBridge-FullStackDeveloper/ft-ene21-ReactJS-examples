import React, { Component } from "react";
import ThemeContext from "../../contexts/ThemeContext";

class ThemeButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeContext.Consumer>
      {context => (
        <button onClick={context.toggleTheme} className="button">
          {context.theme}
        </button>
      )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeButton;