import React, { Component } from "react";
import { Menu } from "../../component";
import logo from "../../image/avatar11066402_1.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    this.props.doLogout();
  };
  checkLogin = () => {
    const { currentPage } = this.props;
    const isLogedIn = this.props.isLogedIn.statusLogin;
    if (isLogedIn)
      return (
        <>
          <Link to="/productList">
            <div className={`menu ${currentPage === "laba" ? "active" : ""}`}>
              ProductList
            </div>
          </Link>
          <Link to="/laba">
            <div className={`menu ${currentPage === "laba" ? "active" : ""}`}>
              Laba Rugi
            </div>
          </Link>
        </>
      );
  };
  checkLogout = () => {
    const { currentPage } = this.props;
    const isLogedIn = this.props.isLogedIn.statusLogin;
    if (isLogedIn)
      return (
        <>
          <Menu redirect={() => this.props.doLogout()}>Logout</Menu>
        </>
      );
    return (
      <>
        <Link to="./login">
          <div className={`menu ${currentPage === "login" ? "active" : ""}`}>
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
    console.log("cek status login ", this.login);
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
            <Link to="/user">
              <div className={`menu ${currentPage === "user" ? "active" : ""}`}>
                User
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
const mapStateToProps = (state) => ({
  isLogedIn: state.Auth,
});
const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch({ type: "LOGOUT" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
// export default Navbar;
