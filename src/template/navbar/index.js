import React, { Component } from "react";
import { Menu } from "../../component";
import logo from "../../image/avatar11066402_1.png";
import "./navbar.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }
  checkActivePage = (checkPage) => {
    const page = this.props.page;
    if (checkPage === page) return "active";
    return "";
  };
  checkLogin = () => {
    const { currentPage } = this.props;
    return (
      <Link to="/productList">
        <div className={`menu ${currentPage === "laba" ? "active" : ""}`}>
          ProductList
        </div>
      </Link>
    );
  };
  checkLogout = () => {
    const { loginStatus, changeStatus, currentPage } = this.props;
    if (loginStatus)
      return (
        <>
          <Link to="/laba">
            <div className={`menu ${currentPage === "laba" ? "active" : ""}`}>
              Laba Rugi
            </div>
          </Link>
          <Menu redirect={() => changeStatus(false, "Home")}>Logout</Menu>
        </>
      );
    return (
      <>
        <Link to="./login">
          <div className={`menu ${currentPage === "laba" ? "active" : ""}`}>
            Login
          </div>
        </Link>
      </>
    );
  };
  redirectPage = () => {
    this.props.goToPage("Home");
  };
  render() {
    // const { currentPage } = this.props;
    let currentPage = "about";
    return (
      <>
        <div className="topnav">
          <Link to="/home" className="logo">
            <span>
              <img src={logo} alt="logo" />
            </span>
            Tokopedei
          </Link>
          <div className="topnav-right">
            <Link to="/home">
              <div className={`menu ${currentPage === "home" ? "active" : ""}`}>
                Home
              </div>
            </Link>
            <Link to="/about">
              <div
                className={`menu ${currentPage === "about" ? "active" : ""}`}
              >
                About
              </div>
            </Link>
            {this.checkLogin()}
            {this.checkLogout()}
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
