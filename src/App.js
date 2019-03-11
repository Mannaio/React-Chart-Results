import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f4e8d4eb582a1977e7207ab08670e022";

// http://api.openweathermap.org/data/2.5/weather?q=Tarifa,ES&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric //
// http://api.openweathermap.org/data/2.5/forecast?q=Tarifa,ES&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric //
// http://api.openweathermap.org/data/2.5/forecast?q=Tarifa,ES&&cnt=5&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric //


class App extends React.Component {
  state = {
    isLoading: true,
    error: null,
    temperature: undefined,
    pressure: undefined,
    humidity: undefined,
    windspeed: undefined,
    winddeg: undefined,
    clouds: undefined,
    sunrise: undefined,
    sunset: undefined
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://api.openweathermap.org/data/2.5/weather?q=Tarifa,ES&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ temperature: data.main.temp, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, temperature, error } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    if (error) {
      return <p>Error...</p>;
    }

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Weather
                    temperature={this.state.temperature}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
