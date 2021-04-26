import * as React from 'react';
import ClubDetails from './components/club/ClubDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClubDetails clubId={1} clubName={"Woking"} clubLogo={null}  clubAddress={"dummy street, dummy town, DD333MY"}/>
    </div>
  );
}

export default App;
