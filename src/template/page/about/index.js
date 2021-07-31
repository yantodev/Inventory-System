import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.datas,
    };
  }
  render() {
    console.log("data about", this.state.data);
    return <h1>Ini About {this.state.data}</h1>;
  }
}

export default About;
