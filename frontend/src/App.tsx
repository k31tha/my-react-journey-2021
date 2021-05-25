import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ClubDetailsContainer from './containers/ClubDetailsContainer';
import ClubSearchContainer from './containers/ClubSearchContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ClubDetailsContainer clubUrl={'woking-fc'} />
        <ClubSearchContainer />
      </div>
    </Router>
  );
}
//<ClubDetailsContainer clubUrl={'knaphill-fc'} />
export default App;
