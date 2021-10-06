import React, { Component } from "react";
import { connect } from "react-redux";

class LabaRugi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listPembelianProduk: this.props.product.listPenjualan,
    };
  }
  //   getTotalHarga() {
  //     console.log("data Pembelian", this.state.listPembelianProduk);
  //     if (this.state.listPembelianProduk.length === 0) return 0;

  //     let totalnew = [];
  //     this.state.listPembelianProduk.map(({ totalHarga }) => {
  //       if (totalHarga) totalnew.push(totalHarga);
  //       return totalnew;
  //     });
  //     console.log(totalnew);
  //     let total = totalnew.reduce((old, current) => {
  //       return old + current;
  //     });
  //     console.log(
  //       totalnew.reduce((old, current) => {
  //         return old + current;
  //       })
  //     );

  //     return total;
  //   }

  convertRp = (e) => {
    const format = e.toString().split("").reverse().join(""); //diformat ke dalam string
    const convert = format.match(/\d{1,3}/g); //ambil 3 angka
    const rupiah =
      "Rp " + convert.join(".").split("").reverse().join("") + ",00"; //join hasil format dan ambil 3 angka
    return rupiah;
  };
  getDates = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const hh = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    today = mm + "/" + dd + "/" + yyyy + "(" + hh + ":" + min + ":" + sec + ")";

    console.log("sdsdsd", today);
    return today;
  };
  renderData = () => {
    const listPenjualan = this.props.product.listPenjualan;
    console.log("list penjualan:", listPenjualan);
    for (let i = 0; i < listPenjualan.length; i++) {
      return listPenjualan[i].map((data, index) => {
        console.log("cek data:", data[0]);
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.nameProduct}</td>
            <td>{this.convertRp(data.hargaBeli)}</td>
            <td>{this.convertRp(data.hargaJual)}</td>
            <td>{data.qty}</td>
            <td>{this.convertRp(data.totalHarga)}</td>
            <td>{data.tanggal}</td>
          </tr>
        );
      });
    }
  };
  render() {
    return (
      <div className="container-table">
        <br />
        <br />
        <h2 align="center" className="title-table">
          History Pembelian
          {this.getDates}
        </h2>

        <div className="table-work">
          <table className="table-work" align="center">
            <thead className="thead-table">
              <tr className="tr-table">
                <th className="th-table">ID</th>
                <th className="th-table">Nama Barang</th>
                <th className="th-table">Harga Barang Beli</th>
                <th className="th-table">Harga Barang Jual</th>
                <th className="th-table">Quantity</th>
                <th className="th-table">Pembayaran</th>
                <th className="th-table">tanggal pembelian</th>
              </tr>
            </thead>
            <tbody>{this.renderData()}</tbody>
            <tfoot>
              <tr>
                <th id="total" colSpan="5">
                  Total Penjualan
                </th>
                {/* <td colSpan="2" align="center">
                  {this.convertRp(this.getTotalHarga())}
                </td> */}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.Product,
});
const mapDispatchToProps = (dispatch) => ({
  buttonBuy: () => dispatch({ type: "btn-buy" }),
  listPenjualan: (newPenjualan) =>
    dispatch({ type: "buy-item", payload: { newPenjualan } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(LabaRugi);
// export default LabaRugi;
