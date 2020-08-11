import React, { Component } from "react";
import Presentation from "./Presentation";

class Container extends Component {
  render() {
    return (
      <div>
        <Presentation setSelectedImg={this.props.setSelectedImg} />
      </div>
    );
  }
}
export default Container;
