import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f4e8d4eb582a1977e7207ab08670e022";

class App extends React.Component {
  state = {
    isLoading: true,
    temperature: undefined,
    error: null
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Tarifa,ES&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric`)
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature: json.main.temp,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, temperature } = this.state;
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
