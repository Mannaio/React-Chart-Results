import React from "react";
import axios from 'axios';
import Titles from "./components/Titles";
import Form from "./components/Form";

const API_KEY = "";

class App extends React.Component {

  state = {
    isLoading: true,
    list: [],
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    var url = ""
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
