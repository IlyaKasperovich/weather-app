import React, { Component } from "react";

export default class WetherInfo extends Component {
  render() {
    if (this.props.city) {
      return (
        <div className="container">
          <div className="city">{this.props.city}</div>
          <div className="temp">{this.props.temp}℃</div>
          <div className="desc">{this.props.desc}</div>
          <div className="wind">Wind Speed: {this.props.wind}m/s</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
