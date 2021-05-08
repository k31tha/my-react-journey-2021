import * as React from 'react';
import ClubDetailsContainer from './containers/ClubDetailsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClubDetailsContainer clubUrl={'woking'} />
    </div>
  );
}

export default App;
