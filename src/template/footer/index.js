import React, { Component } from "react";
import { Typography, Link } from "@material-ui/core";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  copyright = () => {
    const footer = {
      color: "white",
    };
    return (
      <Typography
        style={footer}
        variant="body1"
        color="textSecondary"
        align="center"
      >
        {"Copyright © "}
        <Link
          style={footer}
          color="inherit"
          href="https://belajarbarengyanto.wordpress.com/"
        >
          tokopedei.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };
  render() {
    const style = {
      backgroundColor: "rgba(0, 0, 0, 0.692)",
    };
    return (
      <>
        <div style={style}>{this.copyright()}</div>
      </>
    );
  }
}

export default Footer;
