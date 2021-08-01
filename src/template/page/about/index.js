import React, { Component } from "react";
import "./about.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTeam: [],
    };
  }
  componentDidMount() {
    const urlFetch = fetch(
      "https://raw.githubusercontent.com/cahya93/JsonAPI/main/our-team.json"
    );
    urlFetch
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        this.setState({
          dataTeam: resJson,
        });
      });
  }
  renderTeam = () => {
    const data = this.state.dataTeam;
    return data.map((d) => {
      return (
        <>
          <div className="member">
            <div className="image">
              <img src={d.image} alt="user" />
            </div>
            <div className="nama">{d.name}</div>
            <div className="title">{d.title}</div>
          </div>
        </>
      );
    });
  };

  render() {
    return (
      <>
        <div className="header">
          <h1>Our Team Member</h1>
        </div>
        <div className="about">
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            explicabo saepe a quas, illo repellat omnis quasi cupiditate
            corrupti, vero impedit in temporibus dignissimos suscipit magnam
            deserunt, debitis aut aspernatur incidunt!
          </h2>
        </div>
        <div className="konten">
          <div className="team">{this.renderTeam()}</div>
        </div>
      </>
    );
  }
}

export default About;
