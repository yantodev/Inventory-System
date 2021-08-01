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
  Diskon
} from "../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      detailProduct: {},
      statusPembelian: false,
      index: 0,
      userEdit: {},
      penjualanList: [],
      diskon: {}
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
            thumbnailUrl: data.thumbnailUrl,
            diskon: data.diskon,
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

  getlistPenjualan = (data) => {
    console.log("list penjualan in body", data);

    this.setState(
      {
        penjualanList: data,
      },
      () => this.props.goToPage("penjualan")
    );
  };

  addPembelian = (newUser) => {
    // newUser.preventDefault();
    console.log("data baruuuuuuuuuuuuu", newUser);
    console.log(this.state.productList);

    let copyProduct = this.state.productList;
    console.log("ini copy student : ", copyProduct);

    copyProduct.splice(this.state.index - 1, 1, newUser);
    this.setState({
      productList: copyProduct,
    });
  };

  renderPage = () => {
    const page = this.props.page;
    const { userEdit } = this.state;

    if (page === "about") return <About />;

    if (page === "login") return <Login />;

    if (page === "pembelian")
      return (
        <Pembelian
          datas={this.state.productList}
          detailProduct={this.state.detailProduct}
          selectedUser={userEdit}
          addPembelian={this.addPembelian}
          goToPage={this.props.goToPage}
          clearUserEdit={this.clearUserEdit}
        />
      );

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
          setDiskon={this.editDiskon}
          listProduct={this.getlistPenjualan}
          goToPage={this.props.goToPage}
          statusPembelian={this.statusPembelian}
          detailHandler={this.detailHandler}
        />
      );

    if (page === "penjualan")
      return <Penjualan listProduct={this.state.penjualanList} />;

    if (page === "diskon") return <Diskon diskon={this.state.diskon}/>

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

  editDiskon = data => {
    console.log("diskon in body: ", data);

    this.setState({
      diskon : data
    }, ()=> this.props.goToPage("diskon"))
  }

  setUserEdit = (userEdit) =>
    this.setState({ userEdit }, () => this.props.goToPage("form"));

  render() {
    return (
      <>
        <div>{this.renderPage()}</div>
      </>
    );
  }
}

export default Body;
