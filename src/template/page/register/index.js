import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    let newUser = [
      {
        email: email,
        password: password,
      },
    ];
    console.log("email", email);
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);
    if (password !== confirmPassword)
      return Swal.fire("Ops..", "Your Password don't match", "warning");
    this.props.registrasi(newUser);
    return Swal.fire("Okey", "Registrasi success", "success");
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    const { userList } = this.props;
    console.log("cek userlist", userList);
    return (
      <>
        <div>
          <h2>Daftar User</h2>
          {userList.map((user) => (
            <ul key={user.id}>
              <li>{user.email}</li>
            </ul>
          ))}
        </div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <div className="form">
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography className="title" variant="h4">
                Sign up
              </Typography>
              <form className="form" onSubmit={this.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
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
              </form>
            </div>
          </div>
          <Box mt={8}>{/* <Copyright /> */}</Box>
        </Container>
      </>
    );
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
