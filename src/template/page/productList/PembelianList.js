import React, { Component } from "react";
import PembelianItem from "./ProductItem";

export default class PembelianList extends Component {
  render() {
    const pembelian = this.props.productList;
    const trItem = pembelian.map((item, index) => (
      <PembelianItem
        key={index}
        product={item}
        index={index}
        productList={this.props.productList}
        statusPembelian={this.props.statusPembelian}
        detailHandler={this.props.detailHandler}
        goToPage={this.props.goToPage}
      />
    ));

    return <tbody>{trItem}</tbody>;
  }
}
