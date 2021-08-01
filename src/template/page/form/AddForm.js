import React, { Component } from "react";
import "./form.css";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.selectedUser.id ? props.selectedUser.id : "",
      nameProduct: props.selectedUser.nameProduct
        ? props.selectedUser.nameProduct
        : "",
      hargaBeli: props.selectedUser.hargaBeli
        ? props.selectedUser.hargaBeli
        : "",
      hargaJual: props.selectedUser.hargaJual
        ? props.selectedUser.hargaJual
        : "",
      qty: props.selectedUser.qty ? props.selectedUser.qty : "",
      thumbnailUrl: props.selectedUser.thumbnailUrl
        ? props.selectedUser.thumbnailUrl
        : "",
    };
  }

  onSaveHandler = () => {
    const { id, nameProduct, hargaBeli, hargaJual, qty } = this.state;
    this.props.saveUser({ id, nameProduct, hargaBeli, hargaJual, qty });
  };

  AddNewHandler = () => {
    const { id, nameProduct, hargaBeli, hargaJual, qty } = this.state;
    this.props.saveUser({ id, nameProduct, hargaBeli, hargaJual, qty });
  };
  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  componentWillUnmount() {
    this.props.resetUserEdit();
  }

  render() {
    const { id, nameProduct, hargaBeli, hargaJual, qty, thumbnailUrl } =
      this.state;
    return (
      <table className="MyTable">
        <tbody>
          <tr>
            <td>Name Product</td>
            <td>
              <input type="hidden" value={id} />
              <input type="hidden" value={thumbnailUrl} />

              <input
                type="text"
                name="nameProduct"
                value={nameProduct}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Harga Beli</td>
            <td>
              <input
                type="text"
                name="hargaBeli"
                value={hargaBeli}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Harga Jual</td>
            <td>
              <input
                type="text"
                name="hargaJual"
                value={hargaJual}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>
              <input
                type="text"
                name="qty"
                value={qty}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3" align="left">
              <button className="buttonAddNew" onClick={this.AddNewHandler}>
                Add New
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AddForm;
