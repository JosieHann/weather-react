
import Weather from "./Weather";
import { SpinnerCircular } from 'spinners-react';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Howdy from app.js ! 
        </h1>
      <Weather city="paris"/>
      <SpinnerCircular />
      </header>
    </div>
  );
}

export default App;
