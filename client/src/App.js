import React from 'react';
// import TicTacToe from './components/TicTacToe';
import FullScreenDialog from "./components/FullScreenDialog"
import './App.css';

function App() {
  return (
    <div>
       <div className="stars"></div>
       <div className="twinkling"></div>
       <div className="clouds"></div>
      <FullScreenDialog />

    </div>
  );
}

export default App;
