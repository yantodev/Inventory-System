import React, { Component } from "react";

import { Home, About, Login, ProductList } from "../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPage = () => {
    const page = this.props.page;
    if (page === "about") return <About />;
    if (page === "login") return <Login />;
    if (page === "productList") return <ProductList />;

    return <Home />;
  };
  render() {
    return (
      <>
        <div>{this.renderPage()}</div>
      </>
    );
  }
}

export default Body;
