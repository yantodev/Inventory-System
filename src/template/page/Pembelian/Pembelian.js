import React, { Component } from "react";

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
    };
  }
  setValue = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  componentWillUnmount() {
    this.props.clearUserEdit();
  }
  addPembelian = (e) => {
    e.preventDefault();
    const user = {
      nameProduct: e.target[0].value,
      qty: e.target[1].value,
      hargaBeli: e.target[2].value,
      hargaJual: e.target[3].value,
    };
    console.log(user);
    if (this.props.statusPembelian) {
      this.props.addPembelian(user);
      console.log("cek edittttt", this.props.addPembelian(user));
      this.props.changeStatus(false);

      const { goToPage } = this.props;
      goToPage("productList");
    } else {
      this.props.pembelianBaru(user);
      alert("pembelian sukses");
      this.props.loginPage("login");
    }
  };

  moveToLogin = () => {
    this.setState({
      statusEdit: false,
    });
    this.props.loginPage("login");
  };

  render() {
    // const userID = this.findUserByID(index)
    // userID
    const statusPembelian = this.props.statusPembelian;
    const { nameProduct, hargaJual, hargaBeli, qty } = this.state;
    return (
      <body className="background-register">
        <div className="container-register">
          <br />
          <br />
          <br />

          <h1 align="center" className="title-register">
            PEMBELIAN BARANG
          </h1>

          <div>
            <form className="form-container" onSubmit={this.addPembelian}>
              <div className="input-container">
                {/* <input type="hidden" value={id} /> */}
                <label>Nama Product : </label>
                <label className="input-login">
                  <input
                    className="input-login"
                    type="text"
                    name="nameProduct"
                    value={nameProduct}
                    onChange={this.setValue}
                    placeholder="nameProduct"
                  />
                </label>
                <label>Quantity : </label>
                <label className="input-login">
                  <input
                    className="input-login"
                    type="text"
                    name="qty"
                    placeholder="qty"
                    value={qty}
                    onChange={this.setValue}
                  />
                </label>
                <label>Harga Barang : </label>
                <label className="input-login">
                  <input
                    className="input-login"
                    type="text"
                    name="hargaBeli"
                    placeholder="hargaBeli"
                    value={hargaBeli}
                    onChange={this.setValue}
                  />
                </label>
                <label>Quantity : </label>
                <label className="input-login">
                  <input
                    className="input-login"
                    type="text"
                    name="hargaJual"
                    placeholder="qty"
                    value={hargaJual}
                    onChange={this.setValue}
                  />
                </label>
              </div>
              {statusPembelian ? (
                <button className="button-register" type="submit">
                  SAVE
                </button>
              ) : (
                <>
                  <button className="button-register" type="submit">
                    BELI BARANG
                  </button>
                </>
              )}

              {/* <label>Name : </label>
            <label className="input-login">
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
