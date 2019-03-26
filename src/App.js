import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  { day: '15', Barcelona: 0, Betis: 0, Real: 0},
  { day: '16', Barcelona: 3, Betis: 3, Real: 3 },
  { day: '17', Barcelona: 6, Betis: 4, Real: 4 },
  { day: '18', Barcelona: 9, Betis: 1, Real: 7 },
  { day: '19', Barcelona: 12, Betis: -2, Real: 4 },
  { day: '20', Barcelona: 15, Betis: 1, Real: 7 },
  { day: '21', Barcelona: 18, Betis: -2, Real: 10},
  { day: '22', Barcelona: 19, Betis: 1, Real: 11 },
  { day: '23', Barcelona: 20, Betis: -2, Real: 14 },
  { day: '24', Barcelona: 23, Betis: -1, Real: 15 },
  { day: '25', Barcelona: 26, Betis: 2, Real: 12 },
  { day: '26', Barcelona: 29, Betis: -1, Real: 13 },
  { day: '27', Barcelona: 32, Betis: 2, Real: 16 },
];

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
                  <option value="Betis">Betis</option>
                  <option value="Real">Real</option>
                </select>
                <select value={this.state.value} onChange={this.handleChangeAwayTeam}>
                  <option value="Betis">Betis</option>
                  <option value="Real">Real</option>
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
                    // <Line type="monotone" dataKey={this.state.value} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type='monotone' dataKey={this.state.hometeamValue} stroke='#132908' activeDot={{fill: '#132908', stroke: 'none', r: 6}}/>
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
