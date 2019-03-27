import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { data } from './utils/TeamStats';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const initialState = {
  data,
  hometeamValue: '',
  awayteamValue: ''
};

class App extends React.Component {
  state = initialState;

  handleChangeHomeTeam = (e) => {
    this.setState({
      hometeamValue: e.target.value,
    });
  };

  handleChangeAwayTeam = (e) => {
    this.setState({
      awayteamValue: e.target.value,
    });
  };

  render() {

    const { data } = this.state;

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
                Pick your favorite Team:
                <select value={this.state.value} onChange={this.handleChangeHomeTeam}>
                  <option value="Atletico">Atletico</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Betis">Betis</option>
                  <option value="Real">Real</option>
                  <option value="Sevilla">Sevilla</option>
                  <option value="Valencia">Valencia</option>
                  <option value="Villareal">Villareal</option>
                </select>
                <select value={this.state.value} onChange={this.handleChangeAwayTeam}>
                  <option value="Atletico">Atletico</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Betis">Betis</option>
                  <option value="Real">Real</option>
                  <option value="Sevilla">Sevilla</option>
                  <option value="Valencia">Valencia</option>
                  <option value="Villareal">Villareal</option>
                </select>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey={this.state.hometeamValue} stroke='#c60000' activeDot={{fill: '#132908', stroke: 'none', r: 6}}/>
                    <Line type='monotone' dataKey={this.state.awayteamValue} stroke='#132908' activeDot={{fill: '#132908', stroke: 'none', r: 6}}/>
                  </LineChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
