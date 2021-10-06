import React, { Component } from "react";
import { connect } from "react-redux";
import "./diskon.css";
import { Redirect } from "react-router-dom";

class Diskon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameProduct: "",
      hargaJual: "",
      hargaBeli: "",
      qty: "",
      thumbnailUrl: "",
      diskon: "",
    };
  }

  handlerDiskon = () => {
    const id = this.props.match.params.id;
    console.log("cek id", id);
    const oldData = this.props.product;
    // const oldData = this.props.datas;

    console.log("old data", oldData);
    const data = oldData.filter((product) => product.id === parseInt(id));
    console.log("id item buy", data);
    return (
      <>
        <form onClick={this.diskonForm}>
          <div className="title">{data[0]["nameProduct"]}</div>
          <div className="image">
            <img src={data[0]["thumbnailUrl"]} alt={data[0]["nameProduct"]} />
          </div>
          <div>
            <input
              name="diskon"
              type="number"
              value={data[0]["diskon"]}
              onChange={this.setValue}
            />
          </div>
          <button onClick={() => this.props.redirect("home")}>Edit</button>
        </form>
      </>
    );
    // this.setState({
    //   id: filterData.id,
    //   nameProduct: filterData.nameProduct,
    //   hargaJual: filterData.hargaJual,
    //   hargaBeli: filterData.hargaBeli,
    //   qty: filterData.qty,
    //   thumbnailUrl: filterData.thumbnailUrl,
    //   diskon: filterData.diskon,
    // });
  };

  // diskonForm = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     id: this.state.id,
  //     nameProduct: this.state.nameProduct,
  //     thumbnailUrl: this.state.thumbnailUrl,
  //     diskon: this.state.diskon,
  //   };

  //   const { updateDiskon } = this.props;

  //   updateDiskon(data);
  // };

  setValue = (data) => {
    this.setState({
      [data.target.name]: data.target.value,
    });
  };

  render() {
    console.log("cek data diskon : ", this.props.product);
    if (!this.props.isLogedIn.statusLogin) return <Redirect to="/login" />;
    return (
      <>
        <div className="content">{this.handlerDiskon()}</div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogedIn: state.Auth,
  product: state.Product.listProduct,
});
// export default Diskon;
export default connect(mapStateToProps)(Diskon);
