import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { PomodoroTimer } from './components/pomodoro-timer'

function App(): JSX.Element {
  return (
    <div className='App'>
      <PomodoroTimer defaultPomodoroTime={1500} />
      </div>
  );
}
  
  
export default App;
