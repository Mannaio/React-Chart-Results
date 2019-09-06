import React from "react";
import Titles from "./components/Titles";
import { scores, liga } from './utils/TeamStats';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const initialState = {
  liga,
  scores,
  homeTeam: '',
  awayTeam: ''
};

const listItems = liga.map((name) =>
  <option key={name}>
    {name}
  </option>
);

const getAverage = team => {
  if (isNaN(scores[0][team])) return null;

  return scores.map(x => x[team]).reduce((a, c) => a + c) / scores.length;
};


class App extends React.Component {
  state = initialState;

  handleChangeHomeTeam = (e) => {
    this.setState({
      homeTeam: e.target.value,
    });
  };

  handleChangeAwayTeam = (e) => {
    this.setState({
      awayTeam: e.target.value,
    });
  };

  render() {

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
                Pick the scores:
                <select value={this.state.value} onChange={this.handleChangeHomeTeam}>
                  {listItems}
                </select>
                <select value={this.state.value} onChange={this.handleChangeAwayTeam}>
                  {listItems}
                </select>
                  <LineChart
                    width={500}
                    height={300}
                    data={scores}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey={this.state.homeTeam} stroke='#c60000' activeDot={{fill: '#c60000', stroke: 'none', r: 6}}/>
                    <Line type='monotone' dataKey={this.state.awayTeam} stroke='#132908' activeDot={{fill: '#132908', stroke: 'none', r: 6}}/>
                  </LineChart>
                  <p>Home Team:{this.state.homeTeam}</p>
                  <p>Away Team:{this.state.awayTeam}</p>
                  <p>Stronger Team:</p>
                  <p>Average {this.state.homeTeam}:{getAverage(this.state.homeTeam)}</p>
                  <p>Average {this.state.awayTeam}:{getAverage(this.state.awayTeam)}</p>
                  <p>Description:</p>
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
