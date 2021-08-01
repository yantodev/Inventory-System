import React, { Component } from "react";
import "./pembelian.css";
class Pembelian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.detailProduct.id ? props.detailProduct.id : "",
      nameProduct: props.detailProduct.nameProduct
        ? props.detailProduct.nameProduct
        : "",
      hargaBeli: props.detailProduct.hargaBeli
        ? props.detailProduct.hargaBeli
        : "",
      hargaJual: props.detailProduct.hargaJual
        ? props.detailProduct.hargaJual
        : "",
      qty: props.detailProduct.qty ? props.detailProduct.qty : "",
      thumbnailUrl: props.detailProduct.thumbnailUrl
        ? props.detailProduct.thumbnailUrl
        : "",
    };
  }
  setValue = (e) => {
    let target = parseInt(e.target.value);
    let qty = parseInt(this.state.qty);
    console.log("semvaak", target + qty);
    this.setState({
      [e.target.name]: target + qty,
    });
    console.log("bajengan", qty);
  };

  // tambah = (e) => {
  //   let oldQty = this.state.qty;

  //   this.setState({
  //     copyQty:
  //   });
  // };

  componentWillUnmount() {
    this.props.clearUserEdit();
  }

  addStok = (e) => {
    e.preventDefault();
    const user = {
      id: e.target[0].value,
      nameProduct: e.target[1].value,
      hargaBeli: e.target[2].value,
      hargaJual: e.target[3].value,
      qty: e.target[4].value,
      thumbnailUrl: e.target[5].value,
    };
    console.log(user);
    this.props.addPembelian(user);
    const { goToPage } = this.props;
    goToPage("productList");
  };

  render() {
    const { nameProduct, hargaJual, hargaBeli, qty, id, thumbnailUrl } =
      this.state;
    return (
      <body className="background-register">
        <div className="container-pembelian">
          <br />

          <h4 align="center" className="title-pembelian">
            PEMBELIAN BARANG
          </h4>

          <div>
            <form className="form-container" onSubmit={this.addStok}>
              <div className="input-container">
                <input type="hidden" value={id} />
                <label>Nama Product : </label>

                <input
                  className="input-pembelian"
                  type="text"
                  name="nameProduct"
                  value={nameProduct}
                  // onChange={this.setValue}
                  placeholder="nameProduct"
                />

                <label>Harga Beli : </label>

                <input
                  className="input-pembelian"
                  type="text"
                  name="hargaBeli"
                  placeholder="hargaBeli"
                  value={hargaBeli}
                  onChange={this.setValue}
                />

                <label>Harga Jual : </label>

                <input
                  className="input-pembelian"
                  type="text"
                  name="hargaJual"
                  placeholder="qty"
                  value={hargaJual}
                  // onChange={this.setValue}
                />

                <label>Quantity : </label>

                <input
                  className="input-pembelian"
                  type="text"
                  name="qty"
                  placeholder="qty"
                  defaultValue={qty}
                  onChange={this.setValue}
                />

                <input type="hidden" value={thumbnailUrl} />
                <button className="button-pembelian" type="submit">
                  BELI BARANG
                </button>
              </div>
              {/* {statusPembelian ? ( */}
              {/* <button className="button-pembelian" type="submit">
                  SAVE
                </button> */}
              {/* ) : ( */}
              {/* <> */}

              {/* </> */}
              {/* )} */}

              {/* <label>Name : </label>
            <label className="input-pembelian">
              <input
                className="input-login"
                type="text"
                name="jabatan"
                placeholder="Jabatan"
              />
            </label>

            <label>Username : </label>
            <label className="input-login">
              <input
                className="input-login"
                type="text"
                name="username"
                placeholder="Jabatan"
              />
            </label>

            <label>Jabatan : </label>
            <label className="input-login">
              <input
                className="input-login"
                type="text"
                name="jabatan"
                placeholder="Jabatan"
              />
            </label>
            <br />

            <label className="input-login">
              {statusEdit ? "Gaji Pokok :  " : "Password"}{" "}
            </label>
            <input
              className="input-login"
              type="text"
              name="gajiPokok"
              placeholder={statusEdit ? "Gaji Pokok" : "Password"}
            />
          </div>
          {statusEdit ? (
            <button className="button-register" type="submit">
              SAVE
            </button>
          ) : (
            <>
              <button className="button-register" type="submit">
                SIGN UP
              </button>
              <button className="button-register" onClick={this.moveToLogin}>
                LOGIN
              </button>
            </>
          )} */}
            </form>
          </div>
        </div>
      </body>
    );
  }
}

export default Pembelian;
