import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  convertRp = (e) => {
    const format = e.toString().split("").reverse().join(""); //diformat ke dalam string
    const convert = format.match(/\d{1,3}/g); //ambil 3 angka
    const rupiah =
      "Rp " + convert.join(".").split("").reverse().join("") + ",00"; //join hasil format dan ambil 3 angka
    return rupiah;
  };
  renderKonten = () => {
    const datas = this.props.datas;
    console.log("cek data di body", datas);
    return datas.map((product, idx) => {
      return (
        <div className="konten">
          <div className="title">{product.nameProduct}</div>
          <div className="image">
            <img
              src="https://via.placeholder.com/150/92c952"
              alt="contoh gambar"
            />
          </div>
          <div className="keterangan">
            <p>{this.convertRp(product.hargaJual)}</p>
            <div>
              <Button
                size="small"
                color="primary"
                variant="contained"
                type="submit"
              >
                Beli
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <div className="container">{this.renderKonten()}</div>
      </>
    );
  }
}

export default Home;
