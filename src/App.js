import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

//
const apiKey = "a759890db9c9af4f6b914245b7107f39";
const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      couyntry: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      tempMax: undefined,
      tempMin: undefined,
      description: "",
      error: false
    };
    this.getWeather();
    this.weatherIcon = {
      thunderstorm: "wi-thunderstorm",
      drizzle: "wi-sleet",
      rain: "wi-storm-showers",
      snow: "wi-snow",
      atmosphere: "we-fog",
      clear: "wi-day-sunny",
      clouds: "wi-day-fog"
    };
  }

  calculateCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.clouds });
    }
  }

  getWeather = async () => {
    const apiCall = await fetch(url);
    const response = await apiCall.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calculateCelsius(response.main.temp),
      tempMax: this.calculateCelsius(response.main.temp_max),
      tempMin: this.calculateCelsius(response.main.temp_min),
      description: response.weather[0].description,
    });

    this.getWeatherIcon(this.weatherIcon, response.weather[0].id)
  };

  render() {
    return (
      <div className="App">
        <Form />
        <Weather
          city={this.state.city}
          country={this.state.country}
          celsius={this.state.celsius}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
