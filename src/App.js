import React from 'react';
import './App.scss';
import Grid from './components/Grid/';

function App() {
  return (
    <div className="App">
      <div
        className="cyber-dressing"
        data-augmented-ui="tr-2-clip br-clip-x bl-clip-y border">
        <h1>grid</h1>
        <Grid />
      </div>


    </div>
  );
}

export default App;
