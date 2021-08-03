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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    // const {username, password} = this.props.isLogedIn
    const { username, password } = this.state;
    console.log(`username : `, username);
    console.log(`password : `, password);
    this.props.doLogin(username, password);
    this.setState({
      username: "",
      password: "",
    });
    // console.log(`isLogedIn`, username);
    if (
      this.props.isLogedIn.listUser[0]["email"] === username &&
      this.props.isLogedIn.listUser[0]["password"] === password
    ) {
      // this.props.changeStat(true, "productList");
      return Swal.fire("Yeahh...", "Login is success!", "success");
    } else {
      return Swal.fire("Opss...", "Login is gagal!", "error");
    }
  };
  render() {
    console.log("cek data", this.props.isLogedIn.listUser[0]["username"]);
    const { username, password } = this.state;
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
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
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
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
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
  doLogin: (user, pass) => dispatch({ type: "LOGIN", payload: { user, pass } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
