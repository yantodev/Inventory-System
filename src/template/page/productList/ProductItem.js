import React, { Component } from "react";

export default class PembelianItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // editEmployee = (e) => {
  //   this.props.statusEdit(e.target.id);
  //   this.props.detailHandler(e.target.id); // get id
  //   this.props.registerPage("register"); // ini untuk ke register
  // };

  // detailEmployee = (e) => {
  //   this.props.detailHandler(e.target.id); // get id
  //   this.props.registerPage("detailEmployee"); // move to detail
  // };

  pembelianBarang = (e) => {
    this.props.statusPembelian(e.target.id);
    this.props.detailHandler(e.target.id); // get id
    this.props.goToPage("pembelian"); // ini untuk ke register
  };

  render() {
    const { nameProduct, hargaBeli, qty, hargaJual } = this.props.product;

    return (
      <tr className="tr-table" key={this.props.index}>
        <td className="td-table">{nameProduct}</td>
        <td className="td-table">{qty}</td>
        <td className="td-table">{hargaBeli}</td>
        <td className="td-table">{hargaJual}</td>
        <td className="td-table">
          <button
            id={this.props.index}
            className="far fa-edit"
            onClick={this.pembelianBarang}
          ></button>
        </td>
        <td className="td-table">
          <i id={this.props.index} className="far fa-save" onClick={""}></i>
        </td>
      </tr>
    );
  }
}
