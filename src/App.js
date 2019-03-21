import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  { day: '15', Barcelona: 0, Betis: 0},
  { day: '16', Barcelona: 3, Betis: 3 },
  { day: '17', Barcelona: 6, Betis: 4 },
  { day: '18', Barcelona: 9, Betis: 1 },
  { day: '19', Barcelona: 12, Betis: -2 },
  { day: '20', Barcelona: 15, Betis: 1 },
  { day: '21', Barcelona: 18, Betis: -2 },
  { day: '22', Barcelona: 19, Betis: 1 },
  { day: '23', Barcelona: 20, Betis: -2 },
  { day: '24', Barcelona: 23, Betis: -1 },
  { day: '25', Barcelona: 26, Betis: 2 },
  { day: '26', Barcelona: 29, Betis: -1 },
  { day: '27', Barcelona: 32, Betis: 2 },
];

const initialState = {
  data,
};

class App extends React.Component {

  state = initialState;

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
                  <Form getWeather={this.getWeather} />
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
                    <Line type="monotone" dataKey="Barcelona" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Betis" stroke="#82ca9d" />
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
