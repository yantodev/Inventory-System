import React, { Component } from "react";
import "./productList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
        <table class="myTable" width="70%">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Harga Barang</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Beras Rojo Lele</td>
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
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductList;
