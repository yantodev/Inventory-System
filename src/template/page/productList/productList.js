import React, { Component } from "react";
import PembelianList from "./PembelianList";
import "./productList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <button className="buttonAdd" onclick="addRow()">
          Add New
        </button>
        ;
        <table class="myTable" width="70%">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>kujantiti</th>
              <th>harga beli</th>
              <th>harga jual</th>
              <th>aksi</th>
            </tr>
          </thead>
          <PembelianList
            productList={this.props.productList}
            statusPembelian={this.props.statusPembelian}
            detailHandler={this.props.detailHandler}
            goToPage={this.props.goToPage}
          />
          {/* <tbody>
            <tr>
              <td>1</td>
              <td>Beras Rojo Lele</td>
              <td>Rp.2000000</td>
              <td>2 Karung</td>
              <td>
                <button className="button-edit" onClick={this.editData}>
                  Edit
                </button>

                <button className="button-delete" onClick={this.deleteData}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Telor Naga</td>
              <td>Rp.70000</td>
              <td>isi 8 butir</td>
              <td>
                <button className="button-edit" onClick={this.editData}>
                  Edit
                </button>

                <button className="button-delete" onClick={this.deleteData}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gula Aren</td>
              <td>Rp.200000</td>
              <td>2 Karung</td>
              <td>
                <button className="button-edit" onClick={this.editData}>
                  Edit
                </button>

                <button className="button-delete" onClick={this.deleteData}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody> */}
        </table>
      </>
    );
  }
}

export default ProductList;
