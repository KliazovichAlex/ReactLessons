import React, { Component } from "react";
import data from "./data.json";
import "./index.css";

class Text extends Component {
  render() {
    return data.map((element) => {
      return (
        <div className="user">
          <h1>{element.name.first}</h1>
          <h2>{element.name.last}</h2>
        </div>
      );
    });
  }
}

export default Text;
