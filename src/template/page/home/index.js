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
    let coret = {
      textDecoration: "line-through",
      color: "red",
    };

    let diskon = {
      marginTop: "35px",
    };
    return datas.map((product) => {
      return (
        <div className="konten">
          {product.diskon !== 0 ? (
            <div className="diskon">
              <span>{product.diskon} %</span>
            </div>
          ) : (
            <div className="diskon" style={diskon}></div>
          )}
          <div className="image">
            <img src={product.thumbnailUrl} alt="contoh gambar" />
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
