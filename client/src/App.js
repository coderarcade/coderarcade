import React, { Component } from "react";
// import TicTacToe from './components/TicTacToe';
import TicTacToeDialog from "./components/TicTacToe/TicTacToeDialog"
import LogoSweeperDialog from "./components/LogoSweeper/LogoSweeperDialog"
import RecursiveSnakeDialog from "./components/RecursiveSnake/RecursiveSnakeDialog"
import Container from "@material-ui/core/Container"
import './App.css';
import Chat from "./components/Chat";
import Navbar from './components/Navbar/Navbar';
import Icon from '@material-ui/core/Icon';
import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation';
// import Album from "./components/Album/Album";
import AutoGrid from './components/AutoGrid/AutoGrid';
import 'typeface-roboto';

class App extends Component {

  render() {

    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <Icon style={{color:"white", float:"right", fontSize:"80"}}>
         account_circle
        </Icon>
        <Navbar />
        <Container maxWidth="sm">
          <TicTacToeDialog />
          <LogoSweeperDialog />
          <RecursiveSnakeDialog />
        </Container>
        <Chat />
        <AutoGrid />
        <SimpleBottomNavigation />
      </div>
    );
  };
};

export default App;
