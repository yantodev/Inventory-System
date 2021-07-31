import React, { Component } from "react";

import { Home, About, Login, Pembelian, LabaRugi, ProductList } from "../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      detailProduct: {},
      statusPembelian: false,
      index: 0,
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

  pembelianBaru = (newUser) => {
    console.log("data baru", newUser);

    let copyProduct = this.state.productList;
    newUser.id = copyProduct.length + 1;

    copyProduct.push(newUser);

    this.setState({
      productList: copyProduct,
    });
  };

  statusPembelian = (id) => {
    this.setState({
      statusPembelian: true,
      index: id,
    });
  };

  detailHandler = (id) => {
    const user = this.state.productList[id];
    this.setState({
      detailProduct: user,
    });
    console.log("id", id);
  };

  clearUserEdit = () => this.setState({ detailProduct: {} });

  changeStatus = (statusbaru) => {
    this.setState({
      statusEdit: statusbaru,
    });
  };

  renderPage = () => {
    const page = this.props.page;
    if (page === "about") return <About />;

    if (page === "login") return <Login />;

    if (page === "pembelian")
      return (
        <Pembelian
          statusPembelian={this.statusPembelian}
          productList={this.state.productList}
          detailProduct={this.state.detailProduct}
          addPembelian={this.addPembelian}
          clearUserEdit={this.clearUserEdit}
          goToPage={this.props.goToPage}
          pembelianBaru={this.pembelianBaru}
          changeStatus={this.changeStatus}
        />
      );

    if (page === "labaRugi") return <LabaRugi />;

    if (page === "productList")
      return (
        <ProductList
          statusPembelian={this.statusPembelian}
          productList={this.state.productList}
          detailProduct={this.state.detailProduct}
          addPembelian={this.addPembelian}
          clearUserEdit={this.props.clearUserEdit}
          goToPage={this.props.goToPage}
          detailHandler={this.detailHandler}
        />
      );

    return <Home />;
  };

  addPembelian = (newUser) => {
    // newUser.preventDefault();
    console.log("data baruuuuuuuuuuuuu", newUser);
    console.log(this.state.productList);

    let copyProduct = this.state.productList;
    console.log("ini copy student : ", copyProduct);

    copyProduct.splice(this.state.index, 1, newUser);
    this.setState({
      productList: copyProduct,
    });
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
