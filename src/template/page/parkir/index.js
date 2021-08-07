import React, { Component } from "react";
import { FirebaseContext } from "../../../config/firebase";

class ParkirFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkir: [],
    };
    this.ref = this.props.firebase.getAllParkir();
    this.unsubscribe = null;
  }
  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = () => {
    const { plat, lokasi } = this.state;
    if (plat !== "" && lokasi !== "") {
      this.props.firebase
        .createDataParkir({ plat, lokasi })
        .then((res) => console.log("res:", res))
        .catch((err) => alert(err.message));
    } else alert("Field ada yang kosong");
  };

  onCollectionUpdate = (querySnapshot) => {
    let parkir = [];
    querySnapshot.forEach((doc) => {
      const { name, plat, lokasi, status } = doc.data();
      parkir.push({
        key: doc.id,
        // doc, // DocumentSnapshot
        name,
        plat,
        lokasi,
        status,
      });
    });
    this.setState({
      parkir,
    });
  };
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <>
        <h1>ini halaman parkir</h1>
        <form>
          <div>
            <input
              type="text"
              name="plat"
              value={this.state.plat}
              onChange={this.setValue}
            />
          </div>
          <div>
            <input
              type="text"
              name="lokasi"
              value={this.state.lokasi}
              onChange={this.setValue}
            />
          </div>
          <button onClick={this.onSubmitHandler}>ADD</button>
        </form>
        <table className="customers-list" width="80%">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Lokasi</th>
              <th>Plat Nomor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.parkir.map((parkir, idx) => {
              console.log("cek parkir", parkir);
              return (
                <tr key={idx}>
                  <td>{parkir.name}</td>
                  <td>{parkir.lokasi}</td>
                  <td>{parkir.plat}</td>
                  <td>{parkir.status ? "In" : "Out"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

class Parkir extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <ParkirFirebase {...this.props} firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  }
}

export default Parkir;
