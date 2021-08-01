import React, { Component } from "react";
import "./about.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTeam = () => {
    return (
      <>
        <div className="member">
          <div className="image">
            <img
              src="https://avatars.githubusercontent.com/u/49233072?v=4"
              alt="user"
            />
          </div>
          <div className="nama">Eko Cahyanto</div>
          <div className="title">Project Manager</div>
        </div>
      </>
    );
  };

  render() {
    return (
      <>
        <div className="header">
          <h1>Our Team Member</h1>
        </div>
        <div>{this.renderTeam()}</div>
      </>
    );
  }
}

export default About;
