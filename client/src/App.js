import React from 'react';
// import TicTacToe from './components/TicTacToe';
import FullScreenDialog from "./components/TicTacToe/FullScreenDialog"
import LogoSweeperDialog from "./components/LogoSweeper/LogoSweeperDialog"
import RecursiveSnakeDialog from "./components/RecursiveSnake/RecursiveSnakeDialog"
import './App.css';
import Footer from './components/Footer/Footer'

function App() {
  return (
    
    <div>
       <div className="stars"></div>
       <div className="twinkling"></div>
       <div className="clouds"></div>
       <div></div>
      <FullScreenDialog />
      <LogoSweeperDialog />
      <Footer />

      
      <RecursiveSnakeDialog />

    </div>
  );
}

export default App;
