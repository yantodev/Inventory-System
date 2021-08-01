import React, { Component } from "react";
import "./productList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  editUser = (product) => this.props.updateUser(product);

  addProduct = (product) => {
    this.props.addProduct(product);
    this.props.goToPage("inputProduct");
    console.log("Cek Koboy Kucai >>>", product);
  };

  listPenjualan = (data) => {
    const { listProduct } = this.props;

    console.log("list penjualan in productList", data);

    listProduct(data);
  };

  editDiskon = (data) => {
    console.log("diskon in list: ", data);

    const { setDiskon } = this.props;
    setDiskon(data);
  };

  pembelianBarang = (e) => {
    // this.props.statusPembelian(e.id);
    this.props.detailHandler(e.id); // get id
    this.props.goToPage("pembelian"); // ini untuk ke register
    console.log("crooooootttt", e.id);
  };

  renderProductList = () => {
    const { datas } = this.props;
    console.log("INI", datas);

    return datas.map((product, idx) => {
      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{product.nameProduct}</td>
          <td>{product.hargaBeli}</td>
          <td>{product.hargaJual}</td>
          <td>{product.qty}</td>
          <td>
            {/* <button data-id={product.id}>Detail</button> */}
            <button onClick={() => this.editUser(product)}>Edit</button>
            <button onClick={() => this.editDiskon(product)}>Diskon</button>
            <button
              data-id={product.id}
              onClick={() => this.pembelianBarang(product)}
            >
              Stok
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <button className="buttonAdd" onClick={this.addProduct}>
          Add New
        </button>
        <table width="70%">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Harga Beli</th>
              <th>Harga Jual</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderProductList()}</tbody>
        </table>
      </>
    );
  }
}

export default ProductList;
