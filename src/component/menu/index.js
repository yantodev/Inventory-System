import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { activePage, redirect, children } = this.props;
    return (
      <div className={`menu ${activePage}`} onClick={redirect}>
        {children}
      </div>
    );
  }
}

export default Menu;
