import React, { Component } from "react";

import {
  Home,
  About,
  Login,
  Pembelian,
  LabaRugi,
  ProductList,
  Penjualan,
  Form,
} from "../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      userEdit: {},
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
    const { userEdit } = this.state;

    if (page === "about") return <About />;
    if (page === "login") return <Login />;
    if (page === "pembelian") return <Pembelian />;
    if (page === "labaRugi") return <LabaRugi />;
    if (page === "form")
      return (
        <Form
          selectedUser={userEdit}
          resetUserEdit={this.clearUserEdit}
          saveUser={this.updateUsers}
        />
      );
    if (page === "productList")
      return (
        <ProductList
          datas={this.state.productList}
          updateUser={this.setUserEdit}
        />
      );
    if (page === "penjualan") return <Penjualan />;
    return <Home datas={this.state.productList} />;
  };

  updateUsers = (newProduct) => {
    console.log(newProduct);
    if (newProduct.id === "") {
      const oldProduct = this.state.productList;
      oldProduct.push({
        id: oldProduct.length
          ? Math.max(...oldProduct.map((product) => product.id)) + 1
          : 1,
        nameProduct: newProduct.nameProduct,
        hargaBeli: newProduct.hargaBeli,
        hargaJual: newProduct.hargaJual,
        qty: newProduct.qty,
      });
      return this.setState(
        {
          productList: oldProduct,
        },
        () => this.props.goToPage("productList")
      );
    }

    const oldProduct = this.state.productList;
    const idxProduct = oldProduct
      .map((product) => product.id)
      .indexOf(newProduct.id);
    console.log(idxProduct);
    oldProduct.splice(idxProduct, 1, newProduct);
    this.setState(
      {
        productList: oldProduct,
      },
      () => this.props.goToPage("productList")
    );
  };

  setUserEdit = (userEdit) =>
    this.setState({ userEdit }, () => this.props.goToPage("form"));

  clearUserEdit = () => this.setState({ userEdit: {} });

  render() {
    return (
      <>
        <div>{this.renderPage()}</div>
      </>
    );
  }
}

export default Body;
