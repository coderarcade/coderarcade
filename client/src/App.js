import React from 'react';
// import TicTacToe from './components/TicTacToe';
import FullScreenDialog from "./components/TicTacToe/FullScreenDialog"
import LogoSweeperDialog from "./components/LogoSweeper/LogoSweeperDialog"
import RecursiveSnakeDialog from "./components/RecursiveSnake/RecursiveSnakeDialog"
import Container from "@material-ui/core/Container"
import './App.css';

function App() {
  return (
    <div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div></div>
      <Container maxWidth="sm">
        <FullScreenDialog />
        <LogoSweeperDialog />
        <RecursiveSnakeDialog />
      </Container>

    </div>
  );
}

export default App;
