import React, { Component } from "react";
import Presentation from "./Presentation";
import { SELECTED_FILE } from "../../contexts/types";
import { DataContext } from "../../contexts/reducer";

class Container extends Component {
  static contextType = DataContext;
  constructor() {
    super();
    this.state = {
      file: "",
      error: "",
    };
  }
  setFile = () => {
    const [state, dispatch] = this.context;
    this.setState({
      file: "",
    });
    dispatch({
      type: SELECTED_FILE,
      payload: {
        file: "",
      },
      dispatch: dispatch,
    });
  };
  changeHandler = (e) => {
    let selected = e.target.files[0];
    const [state, dispatch] = this.context;
    console.log(selected);
    const types = ["image/jpeg", "image/png"];
    if (selected && types.includes(selected.type)) {
      this.setState({
        file: selected,
        error: "",
      });
      dispatch({
        type: SELECTED_FILE,
        payload: {
          file: selected,
        },
        dispatch: dispatch,
      });
    } else {
      this.setState({
        file: "",
        error: "Please select an image file (png or jpeg)",
      });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Presentation
          setFile={this.setFile}
          changeHandler={this.changeHandler}
          data={this.state}
        />
      </div>
    );
  }
}
export default Container;
