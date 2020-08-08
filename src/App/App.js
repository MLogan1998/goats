import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Goats</h1>
        <img src="https://i.imgur.com/1GmEA8Z.jpg" alt="goat"></img>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
