import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWord from './components/Helloword';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWord/>
        <Button text='Click'/>
      </header>
    </div>
  );
}

export default App;
