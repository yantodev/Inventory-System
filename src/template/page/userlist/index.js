import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import UserService from "../../../service/users/user";
import Swal from "sweetalert2";

class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  delete = (id) => {
    Swal.fire("WOW", "Users is deleted!!!", "warning");
    UserService.deleteUser(id);
    setTimeout(function () {
      window.location.reload(1);
    }, 500);
  };
  renderTable = () => {
    const { userList } = this.props;
    console.log("cek list:", userList);
    return userList.map((user, idx) => (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>
          <Link to={"register/" + user.id}>
            <button type="">edit</button>
          </Link>
          <button type="" onClick={() => this.delete(user.id)}>
            delete
          </button>
        </td>
      </tr>
    ));
  };
  render() {
    let h1 = {
      textAlign: "center",
    };
    return (
      <>
        <div>
          <h1 style={h1}>Daftar User List</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Fullname</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  userList: state.Auth.listUser,
});

export default connect(mapStateToProps)(Userlist);
