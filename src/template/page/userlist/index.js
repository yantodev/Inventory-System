import React, { Component } from "react";
import { connect } from "react-redux";

class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTable = () => {
    const { userList } = this.props;
    console.log("cek list:", userList);
    return userList.map((user, idx) => (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    ));
  };
  render() {
    return (
      <>
        <div>
          <h1>Daftar User List</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Password</th>
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
