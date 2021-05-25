import * as React from 'react';
import ClubDetailsContainer from './containers/ClubDetailsContainer';
import ClubSearchContainer from './containers/ClubSearchContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClubDetailsContainer clubUrl={'woking-fc'} />
      <ClubSearchContainer />
      <ClubSearchContainer>
        <p>test children</p>
      </ClubSearchContainer>
    </div>
  );
}
//<ClubDetailsContainer clubUrl={'knaphill-fc'} />
export default App;
