import React from "react";
import { scores, scoresseriea } from './utils/TeamStats';
import Table from "./components/Table";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = {
  Liga: ['Alaves','Atletico', 'Barcelona', 'Betis', 'Bilbao', 'Celta', 'Espanyol', 'Getafe', 'Granada', 'Leganes', 'Levante', 'Eibar', 'Mallorca', 'Osasuna', 'Real', 'Sevilla', 'Sociedad', 'Valencia', 'Valladolid', 'Villareal'],
  Seriea: ['Atalanta', 'Bologna', 'Brescia', 'Cagliari', 'Fiorentina', 'Genoa', 'Inter', 'Juventus', 'Lazio', 'Lecce', 'Milan', 'Napoli', 'Parma', 'Roma', 'Sampdoria', 'Sassuolo', 'Spal', 'Torino', 'Udinese', 'Verona']
};

const leagues = Object.keys(data);

const leagueOptions = leagues.map(name => <option key={name}>{name}</option>);

const getTeams = league =>
  league && data[league]
    ? data[league].map(name => (
        <option key={name} value={name}>
          {name}
        </option>
      ))
    : [];

const getAverage = team => {

  if (isNaN(scoresseriea[0][team])) return null;

  return scoresseriea.map(x => x[team]).reduce((a, c) => a + c) / scoresseriea.length;
};

const maxAverage = teams => {
  return teams.map(team => {return { team:team, avg: getAverage(team)}}).reduce((a,b)=>a.avg>b.avg?a:b).team
};


class App extends React.Component {
  state = {
    selectedLeague: leagues[0],
    selectedTeam: getTeams(leagues[0])[0],
    scoresseriea,
    homeTeam: '',
    awayTeam: ''
  };

  handleLeagueChange = event => {
    this.setState({ selectedLeague: event.target.value });
  };

  handleHomeTeamChange = event => {
    this.setState({ homeTeam: event.target.value });
  };

  handleAwayTeamChange = event => {
    this.setState({ awayTeam: event.target.value });
  };

  render() {

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <div className="header">
                		<h1 className="title-container__title">The right bet</h1>
                		<h3 className="title-container__subtitle">Your best tool to predict the matches results</h3>
                  </div>
                  <div>
                    <p>Home Team: <span className="strong-red">{this.state.homeTeam}</span></p>
                    <p>Away Team: <span className="strong-blue">{this.state.awayTeam}</span></p>
                    <p>Average {this.state.homeTeam}: <span className="strong">{getAverage(this.state.homeTeam)}</span></p>
                    <p>Average {this.state.awayTeam}: <span className="strong">{getAverage(this.state.awayTeam)}</span></p>
                    <p>Stronger Team: <span className="strong-red">{maxAverage([this.state.homeTeam,this.state.awayTeam])}</span></p>
                    <p>Description: The trend is established using the <a href="https://it.wikipedia.org/wiki/Media_inglese" target="blank">English Average calculation</a></p>.
                    <Table />
                    <h3>Description</h3>
                    <p>There are three things taken in consideration, the team playing at home, the team playing away and their english average. Based on that we can better predict the matches, gambling on the result which gives a closer score to the average team.
                    It is also important to consider looking at the team charts on the right that like in trade we are introducing some concepts as 'support', 'resistance' and 'consolidation'. Any team on his way has to face this. What does it mean? This means that we also have to take in consideration that the teams have to rest or react at some stages. This can be seen in the charts as an horizontal / flat step before going up or down again.</p>
                    <h3>Tips</h3>
                  </div>
                </div>
                <div className="col-xs-7 form-container">
                Pick the League
                <select
                  value={this.state.selectedLeague}
                  onChange={this.handleLeagueChange}
                >
                  {leagueOptions}
                </select>
                Pick the Home Team
                <select
                  value={this.state.homeTeam}
                  onChange={this.handleHomeTeamChange}
                >
                  {getTeams(this.state.selectedLeague)}
                </select>
                Pick the Away Team
                <select
                  value={this.state.awayTeam}
                  onChange={this.handleAwayTeamChange}
                >
                  {getTeams(this.state.selectedLeague)}
                </select>
                  <LineChart
                    width={500}
                    height={300}
                    data={scoresseriea}
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
