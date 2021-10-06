import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProduct: "",
      hargaJual: "",
      hargaBeli: "",
      qty: "",
      diskon: "",
      totalHarga: "",
      statusBuy: false,
      newData: this.props.sendData,
    };
  }
  convertRp = (e) => {
    const format = e.toString().split("").reverse().join(""); //diformat ke dalam string
    const convert = format.match(/\d{1,3}/g); //ambil 3 angka
    const rupiah =
      "Rp " + convert.join(".").split("").reverse().join("") + ",00"; //join hasil format dan ambil 3 angka
    return rupiah;
  };
  renderKonten = () => {
    const listProduct = this.props.product.listProduct;
    console.log("cek data di body", listProduct);
    let coret = {
      textDecoration: "line-through",
      color: "red",
    };

    let diskon = {
      marginTop: "35px",
    };
    return listProduct.map((product) => {
      return (
        <div className="konten" key={product.id}>
          {product.diskon !== 0 ? (
            <div className="diskon">
              <span>{product.diskon} %</span>
            </div>
          ) : (
            <div className="diskon" style={diskon}></div>
          )}
          <div className="image">
            <img src={product.thumbnailURL} alt="contoh gambar" />
          </div>
          <div className="title">{product.nameProduct}</div>
          <div className="keterangan">
            {product.diskon !== 0 ? (
              <>
                <p style={coret}>{this.convertRp(product.hargaJual)}</p>
                <p>
                  {this.convertRp(
                    product.hargaJual -
                      product.hargaJual * (product.diskon / 100)
                  )}
                </p>
                <p>Stok : {product.qty}</p>
              </>
            ) : (
              <>
                <p>{this.convertRp(product.hargaJual)}</p>
                <p>Stok : {product.qty}</p>
              </>
            )}

            <div>
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => this.handlerBeli(product.id)}
              >
                Beli
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  handlerBeli = (e) => {
    console.log(e);
    this.props.buttonBuy();
    const oldData = this.props.product.listProduct;
    // const oldData = this.props.datas;
    // console.log("old data", oldData);
    const filterData = oldData.filter((product) => product.id === e);
    console.log("id item buy", filterData);
    this.setState({
      buy: filterData[0],
      nameProduct: filterData[0]["nameProduct"],
      hargaJual: filterData[0]["hargaJual"],
      hargaBeli: filterData[0]["hargaBeli"],
      qty: filterData[0]["qty"],
      diskon: filterData[0]["diskon"],
      totalHarga:
        filterData[0]["diskon"] !== 0
          ? (filterData[0]["hargaBeli"] * filterData[0]["diskon"]) / 100
          : filterData[0]["hargaBeli"],
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
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
  handleSubmit = (event) => {
    event.preventDefault();
    const { nameProduct, hargaJual, hargaBeli, qty, totalHarga } = this.state;
    console.log("cek total", totalHarga * qty);
    let totals = totalHarga * qty;
    console.log("panjang Data", this.state.newData.length);
    if (this.state.newData.length < 0) {
      let newData = [
        {
          nameProduct: nameProduct,
          hargaJual: hargaJual,
          hargaBeli: hargaBeli,
          qty: qty,
          totalHarga: totals,
          tanggal: this.getDates(),
        },
      ];
      this.setState({
        statusBuy: false,
        newData: newData,
      });
      this.props.listPenjualan(this.state.newData);
    } else {
      let newData = {
        nameProduct: nameProduct,
        hargaJual: hargaJual,
        hargaBeli: hargaBeli,
        qty: qty,
        totalHarga: totals,
        tanggal: this.getDates(),
      };
      this.state.newData.push(newData);
      console.log("data baru", this.state.newData);
      this.props.listPenjualan(this.state.newData);
    }
    this.setState({
      statusBuy: false,
    });
    return Swal.fire("Thanks!", "Pembelian berhasil!!!", "success");
  };
  render() {
    const { product } = this.props;
    console.log("cek buying", product);
    const status = this.props.product.statusBuy;
    const { nameProduct, hargaBeli, qty, diskon, totalHarga } = this.state;
    // const { email, password } = this.state.buy;
    return (
      <>
        {!status ? (
          <div className="container">{this.renderKonten()}</div>
        ) : (
          <div className="form-buy">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className="paper">
                <div className="form">
                  <Typography className="title" variant="h4">
                    Daftar Belanja
                  </Typography>
                  <form className="form" onSubmit={this.handleSubmit}>
                    <TextField
                      disabled
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="nameProduct"
                      label="Nama Product"
                      name="nameProduct"
                      autoFocus
                      value={nameProduct}
                      onChange={this.handleChange}
                    />
                    <TextField
                      disabled
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="hargaBeli"
                      label="Harga Beli"
                      type="number"
                      id="hargaBeli"
                      autoComplete="current-hargaBeli"
                      value={hargaBeli}
                      onChange={this.handleChange}
                    />
                    <TextField
                      disabled
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="diskon"
                      label="Diskon %"
                      type="number"
                      id="diskon"
                      autoComplete="current-diskon"
                      value={diskon}
                      onChange={this.handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="qty"
                      label="Quantity"
                      type="number"
                      id="qty"
                      autoComplete="current-qty"
                      value={qty}
                      onChange={this.handleChange}
                    />
                    <TextField
                      disabled
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="totalHarga"
                      label="Total Harga"
                      type="number"
                      id="totalHarga"
                      autoComplete="current-totalHarga"
                      value={totalHarga * qty}
                      onChange={this.handleChange}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                    >
                      Buy
                    </Button>
                  </form>
                </div>
              </div>
            </Container>
          </div>
        )}
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
