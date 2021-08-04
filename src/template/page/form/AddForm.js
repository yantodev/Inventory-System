import React, { Component } from "react";
import { connect } from "react-redux";
import "./form.css";
import Swal from "sweetalert2";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  AddNewHandler = () => {
    const { nameProduct, hargaBeli, hargaJual, qty, thumbnailUrl } = this.state;
    if (
      nameProduct === "" ||
      hargaBeli === "" ||
      hargaJual === "" ||
      qty === "" ||
      thumbnailUrl === ""
    )
      return Swal.fire("Waahhh ... ", "yang bener dong", "error");
    const oldProduct = this.props.product;
    let newProduct = {
      id: oldProduct.length
        ? Math.max(...oldProduct.map((product) => product.id)) + 1
        : 1,
      nameProduct: nameProduct,
      hargaBeli: hargaBeli,
      hargaJual: hargaJual,
      qty: qty,
      thumbnailUrl: thumbnailUrl,
      diskon: 0,
    };

    this.props.addProduct(newProduct);
    return Swal.fire("Naaaahhh ... ", "gitu doong bener", "success");
  };
  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { id, nameProduct, hargaBeli, hargaJual, qty, thumbnailUrl, diskon } =
      this.state;
    console.log(this.state);

    return (
      <table className="MyTable">
        <tbody>
          <tr>
            <td>Name Product</td>
            <td>
              <input type="hidden" value={id} />
              <input
                type="text"
                name="nameProduct"
                value={nameProduct}
                required
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Foto Product</td>
            <td>
              <input
                type="text"
                name="thumbnailUrl"
                value={thumbnailUrl}
                onChange={this.setValue}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Harga Beli</td>
            <td>
              <input
                type="number"
                name="hargaBeli"
                value={hargaBeli}
                onChange={this.setValue}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Harga Jual</td>
            <td>
              <input
                type="number"
                name="hargaJual"
                value={hargaJual}
                onChange={this.setValue}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>
              <input
                type="number"
                name="qty"
                value={qty}
                onChange={this.setValue}
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3" align="left">
              <button className="buttonAddNew" onClick={this.AddNewHandler}>
                Add New
              </button>
              <button className="buttonAddNew" onClick={this.cancel}>
                Cancel
              </button>
            </td>
          </tr>
          <input type="hidden" value={diskon} />
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.Product.listProduct,
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (newProduct) =>
    dispatch({ type: "addProduct", payload: { newProduct } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
