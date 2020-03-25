import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export default class InputCity extends Component {
  render() {
    return (
      <TextField
        id="standard-basic"
        label="City"
        type="text"
        autoComplete="off"
        value={this.props.value}
        onChange={this.props.func}
      />
    );
  }
}
