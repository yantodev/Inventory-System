import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { FirebaseContext } from "../../../config/firebase";
import Jam from "../parkir/jam";
import Swal from "sweetalert2";

class ParkirFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      license: "",
      type: "Car",
      vehicles: [],
    };
    this.subscribeVehicles = "";
  }
  onSaveHandler = async () => {
    const { license, type } = this.state;
    const res = await this.props.firebase.saveFirestoreVehicle({
      license,
      type,
      dateIn: new Date().getTime(),
    });

    if (res.id) return Swal.fire("Okay", "Data is saved!", "success");

    return Swal.fire("Ops!!", "Data can't save!", "error");
  };
  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  checkLoginSession = () => {
    this.props.firebase.checkFirebaseSession((o) => {
      console.log("o:", o);
    });
  };
  fetchAllData = async () => {
    const vehicles = await this.props.firebase.getAllFirestoreVehicle();

    let vehicleList = [];
    vehicles.forEach((vehicle) => {
      let data = vehicle.data();
      vehicleList.push({
        id: vehicle.id,
        ...data,
      });
    });

    if (vehicleList.length > 0)
      this.setState({
        vehicles: vehicleList,
      });
  };

  subscribeData = () => {
    this.subscribeVehicles = this.props.firebase.getUpdateFirestoreVehicle(
      (vehicles) => {
        console.log(vehicles.docChanges());

        let vehicleList = this.state.vehicles;
        vehicles.docChanges().forEach((change) => {
          const idData = change.doc.id;
          const objData = change.doc.data();
          if (change.type === "added") {
            vehicleList.push({
              id: idData,
              ...objData,
            });
          }
          if (change.type === "modified") {
            vehicleList = vehicleList.map((vehicle) => {
              if (vehicle.id === idData)
                return {
                  ...vehicle,
                  ...objData,
                };

              return vehicle;
            });
          }
          if (change.type === "removed") {
            vehicleList = vehicleList.filter(
              (vehicle) => vehicle.id !== idData
            );
          }
        });
        this.setState({
          vehicles: vehicleList,
        });
      }
    );
  };

  componentWillUnmount() {
    this.subscribeVehicles();
  }

  componentDidMount() {
    this.subscribeData();
  }

  render() {
    const { license, type } = this.state;
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Paper>
              <h1>Parkir Masuk</h1>
              <table>
                <tbody>
                  <tr>
                    <td>License</td>
                    <td>
                      <input
                        type="text"
                        name="license"
                        value={license}
                        onChange={this.setValue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>
                      <select name="type" value={type} onChange={this.setValue}>
                        <option value="Car">Car</option>
                        <option value="Motorcycle">Motorcycle</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" align="center">
                      <button onClick={this.onSaveHandler}>Save</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper>
              <h1>Parkir Keluar</h1>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Jam />
            </Paper>
          </Grid>
        </Grid>

        <table className="customers-list" width="80%">
          <thead>
            <tr>
              <th>No</th>
              <th>Licence</th>
              <th>Jenis</th>
              <th>Date In</th>
              <th>Date Out</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.vehicles.map((parkir, idx) => {
              console.log("cek parkir", parkir);
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{parkir.license}</td>
                  <td>{parkir.type}</td>
                  <td>{parkir.dateIn}</td>
                  <td>{parkir.dateOut}</td>
                  <td>{parkir.price}</td>
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
