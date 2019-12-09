import React from 'react';
import Form from './form';
import Weather from './weather';
import Titles from './title';
// import logo from './logo.svg';
import './App.css';
const divStyle = {
  color: 'blue'
};
class App extends React.Component {

  state = {
    temperature_min: undefined,
    temperature_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;
    e.preventDefault();
    const Api_Key = 'c0dbc8a405139cdea9f4ebde83363718';
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);

    const response = await api_call.json();

    console.log(response);
    if (city && country && response.cod === 200) {
      this.setState({
        temperature_min: response.main.temp_min,
        temperature_max: response.main.temp_max,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please make sure you are giving correct city name and country name"
      })
    }

  }
  render() {
    return (
      <div style={divStyle} >
        <Titles />
        <Form loadWeather={this.getWeather} />
          <Weather
            temperature_min={this.state.temperature_min}
            temperature_max={this.state.temperature_max}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
      </div>
    );
  }
}

export default App;
