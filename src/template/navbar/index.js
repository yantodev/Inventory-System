import React, { Component } from "react";
import { Menu } from "../../component";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  checkActivePage = (checkPage) => {
    const page = this.props.page;
    if (checkPage === page) return "active";
    return "";
  };
  render() {
    const goToPage = this.props.goToPage;
    return (
      <>
        <div className="topnav">
          <div className="logo">Yanto.olshop</div>
          <div className="topnav-right">
            <Menu
              activePage={this.checkActivePage("home")}
              redirect={() => goToPage("home")}
            >
              Home
            </Menu>
            <Menu
              activePage={this.checkActivePage("about")}
              redirect={() => goToPage("about")}
            >
              About
            </Menu>
            <Menu
              activePage={this.checkActivePage("productList")}
              redirect={() => goToPage("productList")}
            >
              Product List
            </Menu>
            <Menu
              activePage={this.checkActivePage("login")}
              redirect={() => goToPage("login")}
            >
              Login
            </Menu>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
