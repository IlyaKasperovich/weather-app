import React, { Component } from "react";
import Container from "@material-ui/core/Container";

import InputCity from "./components/InputCity";
import SearchButton from "./components/SearchButton";
import WetherInfo from "./components/WetherInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      city: "",
      temp: "",
      desc: "",
      wind: "",
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleClick() {
    this.setState({ errorMessage: "" });
    this.fetchData(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  fetchData(city) {
    const baseUrl = `http://api.openweathermap.org`;
    const path = `/data/2.5/weather`;
    const appId = `1ae1ff4c3061b69a92c553bf23be10a8`;
    const query = `units=metric&lang=en&appid=${appId}`;

    let url = `${baseUrl}${path}?q=${city}&${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          city: data.name,
          temp: data.main.temp,
          desc: data.weather[0].description,
          wind: data.wind.speed
        })
      )
      .catch(() =>
        this.setState({ errorMessage: "city ​​entered incorrectly" })
      );
  }

  render() {
    let container;

    if (this.state.errorMessage) {
      container = <div className="error-message">{this.state.errorMessage}</div>;
    } else {
      container = (
        <WetherInfo
          city={this.state.city}
          temp={this.state.temp}
          desc={this.state.desc}
          wind={this.state.wind}
          error={this.state.errorMessage}
        />
      );
    }

    return (
      <Container maxWidth="sm">
        <div className="search-form-container">
          <InputCity value={this.state.inputValue} func={this.handleChange} />
          <SearchButton func={this.handleClick} />
        </div>
        {container}
      </Container>
    );
  }
}

export default App;
