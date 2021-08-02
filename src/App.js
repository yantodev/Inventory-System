import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Navbar, Body, Footer } from "./template";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: true,
    };
  }

  changeStatus = (status, page) => {
    this.setState({
      currentPage: page,
      loginStatus: status,
    });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar
            loginStatus={this.state.loginStatus}
            changeStatus={this.changeStatus}
          />
          <Body
            changeStatus={this.changeStatus}
            loginStatus={this.state.loginStatus}
          />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
