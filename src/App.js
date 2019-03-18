import React from "react";
import axios from 'axios';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f4e8d4eb582a1977e7207ab08670e022";

// http://api.openweathermap.org/data/2.5/weather?q=Tarifa,ES&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric //
// http://api.openweathermap.org/data/2.5/forecast?q=Tarifa,ES&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric //
// http://api.openweathermap.org/data/2.5/forecast?q=Tarifa,ES&&cnt=5&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric //
// http://api.openweathermap.org/data/2.5/forecast?q=Tarifa,ES&&cnt=10&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric

class App extends React.Component {

  state = {
    isLoading: true,
    list: [],
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=Tarifa,ES&&cnt=10&appid=f4e8d4eb582a1977e7207ab08670e022&units=metric"
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({ list: d, isLoading: false });
        console.log("state", this.state.list)
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, error, list } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    if (error) {
      return <p>Error...</p>;
    }


    if (this.state.list.list && this.state.list.list.length > 0) {
      return (
          <div>
              {
                  this.state.list.list.map((d, index) =>
                      <div key={index}>
                          {d.dt_txt}
                      </div>
                  )
              }
          </div>
      );
    }

    return null
  }
};

export default App;
