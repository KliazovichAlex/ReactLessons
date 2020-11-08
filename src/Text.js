import React, { Component } from "react";
import "./index.css";

class Text extends Component {
  state = {
    isSignedIn: false,
  };
  click = () => {
    this.setState({ isSignedIn: true });
  };
  render() {
    return this.state.isSignedIn === false ? (
      <div className="user">
        <button onClick={() => setTimeout(this.click, 3000)}>LogIn</button>
      </div>
    ) : (
      <div className="user">
        <h1>Welcome bro!</h1>
      </div>
    );
  }
}

export default Text;
