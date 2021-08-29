import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {SiteRoutes} from './routes/SiteRoutes';
//import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <SiteRoutes />
      </Container>
    </Router>
  );
}
//<ClubDetailsContainer clubUrl={'knaphill-fc'} />
export default App;
