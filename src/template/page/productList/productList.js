import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./productList.css";
import { Redirect } from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  editUser = (product) => this.props.updateUser(product);

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
    this.props.detailHandler(e.id - 1);
    this.props.tambahStok(e.id);
    this.props.goToPage("pembelian");
  };

  renderProductList = () => {
    const listProduct = this.props.product;
    console.log("INI", listProduct);

    return listProduct.map((product, idx) => {
      console.log("cek product:", product);

      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{product.nameProduct}</td>
          <td>{product.hargaBeli}</td>
          <td>{product.hargaJual}</td>
          <td>{product.qty}</td>
          <td>
            {/* <button data-id={product.id}>Detail</button> */}
            <Link to="/edit">
              <button
                className="editButton"
                // onClick={() => this.editUser(product)}
              >
                Edit
              </button>
            </Link>
            <Link to={"/diskon/" + product.id}>
              <button className="diskonButton">Diskon</button>
            </Link>
            <button
              className="stokButton"
              onClick={() => this.pembelianBarang(product)}
            >
              Add Stock
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    if (!this.props.isLogedIn.statusLogin) return <Redirect to="/login" />;
    return (
      <>
        <Link to="/addForm">
          <button className="buttonAdd">Add New Product</button>
        </Link>
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

const mapStateToProps = (state) => ({
  isLogedIn: state.Auth,
  product: state.Product.listProduct,
});
export default connect(mapStateToProps)(ProductList);
// export default ProductList;
