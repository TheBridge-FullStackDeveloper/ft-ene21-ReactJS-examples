import React, { Component } from "react";
import { ThemeContextConsumer } from "../../contexts/ThemeContext";

class ThemeButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeContextConsumer>
      {context => (
        <button onClick={context.toggleTheme} className="button">
          {context.theme}
        </button>
      )}
      </ThemeContextConsumer>
    );
  }
}

export default ThemeButton;