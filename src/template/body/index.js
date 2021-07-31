import React, { Component } from "react";

import {
  Home,
  About,
  Login,
  Pembelian,
  LabaRugi,
  ProductList,
  Penjualan,
} from "../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    const urlFetch = fetch(
      "https://raw.githubusercontent.com/cahya93/JsonAPI/main/inventory.json"
    );
    urlFetch
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        const dataArr = resJson.map((data) => {
          return {
            id: data.id,
            nameProduct: data.nameProduct,
            hargaBeli: data.hargaBeli,
            hargaJual: data.hargaJual,
            qty: data.qty,
          };
        });
        console.log("JSONDATA:", dataArr);
        this.setState({
          productList: dataArr,
        });
      });
  }
  renderPage = () => {
    const page = this.props.page;
    if (page === "about") return <About />;
    if (page === "login") return <Login />;
    if (page === "pembelian") return <Pembelian />;
    if (page === "labaRugi") return <LabaRugi />;
    if (page === "productList")
      return <ProductList datas={this.state.productList} />;
    if (page === "penjualan") return <Penjualan />;
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
