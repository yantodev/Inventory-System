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

class Login extends Component {
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

    const { listUser } = this.props.isLogedIn;
    console.log(`isLogedIn`, listUser);
    for (let i = 0; i < listUser.length; i++) {
      console.log("user login as :", listUser[i]["email"]);
      if (
        email === listUser[i]["email"] &&
        password === listUser[i]["password"]
      ) {
        listUser
          .filter((user) => user.email === email && user.password === password)
          .map((filterData) => {
            return filterData;
          });

        this.setState({
          email: "",
          password: "",
        });
        this.props.doLogin();
        <Link to="/home"></Link>;
        return Swal.fire("Yeahh...", "Login is success!", "success");
      }
    }
    return Swal.fire("Oops...", "Email/Password is wrong!", "error");
  };
  render() {
    if (this.props.isLogedIn.statusLogin) return <Redirect to="/productList" />;

    const { email, password } = this.state;
    return (
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign In
              </Button>
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
