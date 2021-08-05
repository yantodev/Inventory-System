import React, { Component } from "react";
import UserService from "../../../service/users/user";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      id: "",
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, fullname, username, email, password, confirmPassword } =
      this.state;
    const { userList } = this.props;
    let newUser = [
      {
        fullname: fullname,
        username: username,
        email: email,
        password: password,
      },
    ];
    // console.log("email", email);
    // console.log("password", password);
    // console.log("confirmPassword", confirmPassword);
    console.log(`userList`, userList.email);
    for (let i = 0; i < userList.length; i++) {
      if (userList[i]["email"] === email)
        return Swal.fire(
          "Email already!!!",
          "Please change this email address",
          "warning"
        );
    }

    if (password !== confirmPassword)
      return Swal.fire("Ops..", "Your Password don't match", "warning");
    // this.props.registrasi(newUser[0]);
    if (id === "_add") {
      UserService.createUsers(newUser[0]);
      Swal.fire("Okey", "Registrasi success", "success");
      this.setState({ status: true });
      setTimeout(function () {
        window.location.reload(1);
      }, 500);
    } else {
      UserService.updateUser(newUser[0], id);
      console.log("data json :", newUser);
      Swal.fire("Okey", "Update success!!!", "success");
      this.setState({ status: true });
      setTimeout(function () {
        window.location.reload(1);
      }, 500);
    }
  };
  componentDidMount() {
    const userList = this.props.userList;
    if (this.props.match.params.id === "_add") {
      this.setState({ id: this.props.match.params.id });
    } else {
      const data = userList.filter(
        (user) => user.id === parseInt(this.props.match.params.id)
      );
      this.setState({
        id: this.props.match.params.id,
        fullname: data[0]["fullname"],
        username: data[0]["username"],
        email: data[0]["email"],
        password: data[0]["password"],
      });
    }
  }

  render() {
    const { fullname, username, email, password, confirmPassword } = this.state;
    // const { userList } = this.props;
    // console.log("cek userlist reg", userList[0]["email"]);
    console.log("cek id", this.state.id);
    if (this.state.status) return <Redirect to="/user" />;

    // if (this.props.match.params.id === "_add") {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <div className="form">
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography className="title" variant="h4">
                {this.state.id === "_add" ? "Sign Up" : "Form Edit"}
              </Typography>
              <form className="form" onSubmit={this.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="fullname"
                  label="Fullname"
                  name="fullname"
                  autoComplete="fullname"
                  autoFocus
                  value={fullname}
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="confirmPassword"
                  id="confirmPassword"
                  autoComplete="current-confirm-password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                />
                {this.state.id === "_add" ? (
                  <>
                    {" "}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                    >
                      Sign Up
                    </Button>
                    <Grid container>
                      <Grid item>
                        <Link to="/login" variant="body2">
                          {"have an account? Login"}
                        </Link>
                      </Grid>
                    </Grid>
                  </>
                ) : (
                  <>
                    {" "}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                    >
                      Update
                    </Button>
                  </>
                )}
              </form>
            </div>
          </div>
          <Box mt={8}>{/* <Copyright /> */}</Box>
        </Container>
      </>
    );
    // } else {
    //   return this.handlerEdit();
    //   // return <h1>ini halaman edit</h1>;
    // }
  }
}

const mapStateToProps = (state) => ({
  userList: state.Auth.listUser,
});
const mapDispatchToProps = (dispatch) => ({
  registrasi: (newUser) =>
    dispatch({ type: "registrasi", payload: { newUser } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
