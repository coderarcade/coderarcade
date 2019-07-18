import React from 'react';
// import TicTacToe from './components/TicTacToe';
import TicTacToeDialog from "./components/TicTacToe/TicTacToeDialog"
import LogoSweeperDialog from "./components/LogoSweeper/LogoSweeperDialog"
import RecursiveSnakeDialog from "./components/RecursiveSnake/RecursiveSnakeDialog"
import Container from "@material-ui/core/Container"
import './App.css';
import Footer from './components/Footer/Footer'

function App() {
  return (
    
    <div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <Container maxWidth="sm">
        <TicTacToeDialog />
        <LogoSweeperDialog />
        <RecursiveSnakeDialog />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
