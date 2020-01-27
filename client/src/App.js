import React from 'react';
import LightMode from './hooks/LightMode';
import './App.css';
import Players from './components/players.js';

function App() {

  const [lightMode, setLightMode] = LightMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setLightMode(!lightMode);
  };
  return (
    <div data-testid = 'Applet' className='App'>
      <header data-testid =  'header' className="App-header">
      <button onClick = {toggleMode}>Light Switch</button>
      <h1>World Series of Sport Searches!</h1>
      <Players/>
      </header>
      
    </div>
  );
}

export default App;
