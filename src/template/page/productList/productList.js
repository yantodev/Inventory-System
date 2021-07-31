import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: props.selectedUser.id ? props.selectedUser.id : "",
      // name: props.selectedUser.name ? props.selectedUser.name : "",
      // address: props.selectedUser.address ? props.selectedUser.address : ""
    };
  }

  //   onSaveHandler = () => {
  //     const { id, name, address } = this.state;
  //     this.props.saveBarang({ id, namaBarang, hargaBarang, jumlahBarang });
  //   };

  // setValue = e => this.setState({ [e.target.name]: e.target.value })

  // componentWillUnmount() {
  //     this.props.resetUserEdit()
  // }

  render() {
    const { id, namaBarang, hargaBarang, quantity } = this.state;
    return (
      <table>
        <tbody>
          <tr>
            <td>Nama Barang</td>
            <td>
              <input type="hidden" value={id} />
              <input
                type="text"
                name="name"
                value={namaBarang}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Harga Barang</td>
            <td>
              <input
                type="text"
                name="hargaBarang"
                value={hargaBarang}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>
              <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              {/* <button onClick={this.onSaveHandler}>Save</button> */}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ProductList;
