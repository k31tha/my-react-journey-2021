import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {SiteRoutes} from './routes/SiteRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteRoutes />
      </div>
    </Router>
  );
}
//<ClubDetailsContainer clubUrl={'knaphill-fc'} />
export default App;
