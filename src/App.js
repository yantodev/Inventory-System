import React, { Component } from "react";
import "./App.css";
import { Navbar, Body, Footer } from "./template";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }
  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    return (
      <>
        <Navbar page={this.state.currentPage} goToPage={this.changePage} />
        <Body page={this.state.currentPage} />
        <Footer />
      </>
    );
  }
}

export default App;
