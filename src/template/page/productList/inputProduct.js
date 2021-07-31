import React, { Component } from "react";
import "./register.css";
import swal from "sweetalert";

export default class InputProduct extends Component {
  inputProduct = (datas) => {
    datas.preventDefault();

    const nameProduct = data.target[0].value;
    const hargaBeli = data.target[1].value;
    const hargaJual = data.target[2].value;
    const qty = data.target[3].value;

    console.log(nameProduct);
    console.log(hargaBeli);
    console.log(dataJual);
    console.log(qty);

    const datas = {
      nameProduct: dataNameProduct,
      hargaBeli: dataHargaBeli,
      hargaJual: dataHargaJual,
      qty: dataQty,
    };

    if (dataNameProduct && dataHargaBeli && dataHargaJual && dataQty) {
      this.props.input(datas);

      swal("Berhasil");

      //   this.props.redirect("login");

      data.target.nameProduct.value = "";
      data.target.hargaBeli.value = "";
      data.target.hargaJual.value = "";
      data.target.qty.value = "";
    } else {
      swal("Data Kosong");
    }
  };

  render() {
    return (
      <>
        <div id="MyCard">
          <div id="card-content">
            <div id="card-title">
              <h2 className="regist-title">Input Barang</h2>
              <div class="underline-register"></div>
            </div>

            <form
              name="username"
              method="post"
              class="form"
              onSubmit={this.inputProduct}
            >
              <label for="nameProduct" className="label">
                &nbsp;Name Product
              </label>
              <input
                class="form-content"
                type="text"
                name="nameProduct"
                required
              />
              <div class="form-border"></div>

              <label for="hargaBeli" className="label">
                &nbsp;Harga Beli
              </label>
              <input
                class="form-content"
                type="text"
                name="hargaBeli"
                required
              />
              <div class="form-border"></div>

              <label for="hargaJual" className="label">
                &nbsp;Harga Jual
              </label>

              <input
                class="form-content"
                type="text"
                name="hargaJual"
                required
              />
              <div class="form-border"></div>
              <label for="qty" className="label">
                &nbsp;Quantity
              </label>

              <input class="form-content" type="text" name="qty" required />
              <div class="form-border"></div>

              <div class="form-border"></div>

              <input
                id="submit-btn-input"
                type="submit"
                name="submit"
                value="InputProduct"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}
