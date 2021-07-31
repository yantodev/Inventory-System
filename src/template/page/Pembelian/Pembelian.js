import React, { Component } from "react";

class Pembelian extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <body className="background-table">
        <div className="container-table">
          <br />
          <br />
          <h2 align="center" className="title-table">
            TABLE Pembelian
          </h2>

          <div className="table-work">
            <table className="table-work">
              <thead className="thead-table">
                <tr className="tr-table">
                  <th className="th-table">ID</th>
                  <th className="th-table">Nama Barang</th>
                  <th className="th-table">Harga Barang</th>
                  <th className="th-table">Quantity</th>
                  <th className="th-table">Total Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="th-table">1</td>
                  <td className="th-table">Beras</td>
                  <td className="th-table">3000</td>
                  <td className="th-table">
                    <input />
                  </td>
                  <td className="th-table">total gaji</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    );
  }
}

export default Pembelian;
