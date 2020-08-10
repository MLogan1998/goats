import React from 'react';

import goatData from '../helpers/data/goatData';
import './App.scss';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
        <h1>G.O.A.T</h1>
        <img src="https://i.imgur.com/mOh9i2R.jpg" alt="goat"></img>
      </div>
    );
  }
}

export default App;
