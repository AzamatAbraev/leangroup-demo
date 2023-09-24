import React, { Component } from "react";

import "./Backtop.scss";

import backtop from "../../assets/images/backtop.svg";

export class Backtop extends Component {
  render() {
    return (
      <div id="backtop">
        <div className="backtop-container">
          <a href="#products">
            <img src={backtop} alt="Backtop" />
          </a>
        </div>
      </div>
    );
  }
}

export default Backtop;
