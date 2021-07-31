import React, { Component } from "react";
import "./about.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="header">
          <h1>Our Team Member</h1>
        </div>
        <div className="member">
          <div className="image">
            <img
              src="https://avatars.githubusercontent.com/u/49233072?v=4"
              alt="user"
            />
          </div>
          <div className="nama">
            <h1>Eko Cahyanto</h1>
          </div>
          <div className="title">
            <h2>Project Manager</h2>
          </div>
        </div>
      </>
    );
  }
}

export default About;
