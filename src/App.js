import React from "react";
import { scores } from './utils/TeamStats';
import Table from './components/Table';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';
import range from 'lodash/range';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

const getAverage = (league, team) => {

  if (isNaN(league[0][team])) return null;

  return league.map(x => x[team]).reduce((a, c) => a + c) / league.length;
};

const maxAverage = (league, teams) => {
  return teams.map(team => {
      return {
          team:team,
          avg: getAverage(scores[league],team)
      }
  }).reduce((a,b)=>a.avg>b.avg?a:b).team
}

const noOfItems = 12;
const noOfCards = 3;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 200px;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>
    {index+1}
  </SlideItem>
));


export default class App extends React.Component  {
  state = {
    selectedLeague: leagues[0],
    activeItemIndex: 0,
    scores
  };


  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  handleLeagueChange = event => {
    const selectedLeague = event.target.value;
    this.setState({ selectedLeague: selectedLeague }, () => {
      this.setState({ selectedHomeTeam: data[selectedLeague][0],selectedAwayTeam: data[selectedLeague][0] });
    });
  };

  handleHomeTeamChange = event => {
    this.setState({ selectedHomeTeam: event.target.value });
  };

  handleAwayTeamChange = event => {
    this.setState({ selectedAwayTeam: event.target.value });
  };

  render() {

    return (
      <div>
        <header className="Site-header">
          <div className="Header Header--cozy">
            <div className="Header-titles">
              <h1 className="Header-title">The Right Bet</h1>
              <h2 className="Header-subTitle">Your best tool to predict the matches results</h2>
            </div>
          </div>
        </header>
        <main className="Site-content">
          <div className="container">
            <div className="Grid Grid--gutters Grid--full large-Grid--fit u-textCenter">
              <div className="Grid-cell">
                <h2>Pick the League and Teams</h2>
                <div className="Select-Container">
                  <label>League</label>
                  <select
                    value={this.state.selectedLeague}
                    onChange={this.handleLeagueChange}
                  >
                    {leagueOptions}
                  </select>
                  <label>Home</label>
                  <select
                    value={this.state.selectedHomeTeam}
                    onChange={this.handleHomeTeamChange}
                  >
                    {getTeams(this.state.selectedLeague)}
                  </select>
                  <label>Away</label>
                  <select
                    value={this.state.selectedAwayTeam}
                    onChange={this.handleAwayTeamChange}
                  >
                    {getTeams(this.state.selectedLeague)}
                  </select>
                </div>
                <LineChart
                  width={500}
                  height={300}
                  data={scores[this.state.selectedLeague]}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey={this.state.selectedHomeTeam} stroke='#c60000' activeDot={{fill: '#c60000', stroke: 'none', r: 6}}/>
                  <Line type='monotone' dataKey={this.state.selectedAwayTeam} stroke='#132908' activeDot={{fill: '#132908', stroke: 'none', r: 6}}/>
                </LineChart>
              </div>
              <div className="Grid-cell">
                <div className="Stats-container">
                  <h2>Statistics</h2>
                  <p>Home Team: <span className="u-strong">{this.state.selectedHomeTeam}</span></p>
                  <p>Away Team: <span>{this.state.selectedAwayTeam}</span></p>
                  <p>Average {this.state.selectedHomeTeam}: <span className="strong">{getAverage(scores[this.state.selectedLeague], this.state.selectedHomeTeam)}</span></p>
                  <p>Average {this.state.selectedAwayTeam}: <span className="strong">{getAverage(scores[this.state.selectedLeague], this.state.selectedAwayTeam)}</span></p>
                  <p>Stronger Team: <span className="u-strong">{maxAverage(this.state.selectedLeague,[this.state.selectedHomeTeam,this.state.selectedAwayTeam])}</span></p>
                </div>
              </div>
            </div>
            <div className="Grid Grid--gutters Grid--full large-Grid--fit u-textCenter">
              <div className="Grid-cell">
                <p>Description: The trend is established using the <a href="https://it.wikipedia.org/wiki/Media_inglese" target="blank">English Average calculation</a></p>
                <Table />
                <h3>Description</h3>
                <p>There are three things taken in consideration, the team playing at home, the team playing away and their english average. Based on that we can better predict the matches, gambling on the result which gives a closer score to the average team.
                It is also important to consider looking at the team charts on the right that like in trade we are introducing some concepts as 'support', 'resistance' and 'consolidation'. Any team on his way has to face this. What does it mean? This means that we also have to take in consideration that the teams have to rest or react at some stages. This can be seen in the charts as an horizontal / flat step before going up or down again.</p>
                <h3>Tips</h3>
                <Wrapper>
                  <ItemsCarousel
                    gutter={12}
                    numberOfCards={noOfCards}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={this.onChange}
                    rightChevron={<button>{'>'}</button>}
                    leftChevron={<button>{'<'}</button>}
                    chevronWidth={chevronWidth}
                    children={carouselItems}
                  />
                </Wrapper>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
