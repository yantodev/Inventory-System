import React, { Component } from "react";
import "./App.css";
import { Navbar, Body, Footer } from "./template";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      loginStatus: true,
    };
  }
  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  changeStatus = (status, page) => {
    this.setState({
      currentPage: page,
      loginStatus: status,
    });
  };
  render() {
    console.log(this.state.currentPage);
    return (
      <>
        <Navbar
          page={this.state.currentPage}
          goToPage={this.changePage}
          loginStatus={this.state.loginStatus}
          changeStatus={this.changeStatus}
        />

        <Body
          page={this.state.currentPage}
          goToPage={this.changePage}
          changeStatus={this.changeStatus}
          loginStatus={this.state.loginStatus}
        />
        <Footer />
      </>
    );
  }
}

export default App;
