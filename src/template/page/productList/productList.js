import React, { Component } from "react";
import "./productList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderProductList = () => {
    const { datas } = this.props;
    console.log("INI", datas);

    datas.map((product, idx) => {
      return (
        <>
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{product.nameProduct}</td>
            <td>{product.hargaBeli}</td>
            <td>{product.hargaJual}</td>
            <td>{product.qty}</td>
            <td>
              <button onClick={() => this.editUser(product)}>Edit</button>
              <button data-id={product.id}>Detail</button>
            </td>
          </tr>
        </>
      );
    });
  };

  render() {
    return (
      <>
        <div className="pagination">
          <span>Prev</span>
          <span>1</span>
          <span>2</span>
          <span className="active">3</span>
          <span>4</span>
          <span>5</span>
          <span>Next</span>
        </div>
        <button className="buttonAdd" onclick="addRow()">
          Add New
        </button>
        ;
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
