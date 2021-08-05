import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

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
          <button type="">delete</button>
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
