import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// import Swal from "sweetalert2";

import { Home, About, Login, Register, Parkir } from "../page";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginStatusCheck = (e) => {
    const { loginStatus } = this.props;
    console.log("value", e.target.value);
    console.log("status", loginStatus);
  };

  renderPage = () => {
    const { loginStatus } = this.props;
    console.log("Status", loginStatus);
    return (
      <Switch>
        <Route path="/home" exact>
          <Home
            datas={this.state.productList}
            dataBeli={this.addDataPembelian}
            sendData={this.state.dataPembelian}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login changeStat={this.props.changeStatus} />
        </Route>
        <Route
          path="/register/:id"
          children={(props) => <Register {...props} />}
        />
        <Route path="/parkir">
          <Parkir />
        </Route>
      </Switch>
    );
  };

  render() {
    return (
      <>
        <div>{this.renderPage()}</div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  registrasi: (newUser) =>
    dispatch({ type: "registrasi", payload: { newUser } }),
  product: (product) => dispatch({ type: "product", payload: { product } }),
});
export default connect(null, mapDispatchToProps)(Body);
