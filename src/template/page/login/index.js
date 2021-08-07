import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { FirebaseContext } from "../../../config/firebase";

class LoginFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      this.props.firebase
        .loginFirebaseUser({ email, password })
        .then((res) => this.props.doLogin())
        .then((res) => Swal.fire("Login Success", res, "success"))
        .catch((err) => Swal.fire("Oops...", err.message, "error"));
    } else alert("Field ada yang kosong");
  };
  onRegisterHandler = () => {
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      this.props.firebase
        .createFirebaseUser({ email, password })
        .then((res) => Swal.fire("Registrasi Success", res, "success"))
        .then((res) => console.log("res:", res))
        .catch((err) => alert(err.message));
    } else alert("Field ada yang kosong");
  };
  checkFirebase = () => {
    return (a) => {
      console.log(a);
      return <h1>firebase connected</h1>;
    };
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        {/* <FirebaseContext.Consumer>
          {this.checkFirebase()}
        </FirebaseContext.Consumer> */}
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <div className="form">
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography className="title" variant="h4">
                Form Login
              </Typography>
              <form className="form" onSubmit={this.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email address"
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    {" "}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                    >
                      Sign In
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      onClick={this.onRegisterHandler}
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Link to="/forgot-password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/register/_add" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.isLogedIn.statusLogin) return <Redirect to="/parkir" />;
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <LoginFirebase {...this.props} firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogedIn: state.Auth,
});
const mapDispatchToProps = (dispatch) => ({
  doLogin: () => dispatch({ type: "LOGIN" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
