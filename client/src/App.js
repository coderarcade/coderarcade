import React, { Component } from "react";
import TicTacToeDialog from "./components/TicTacToe/TicTacToeDialog"
import LogoSweeperDialog from "./components/LogoSweeper/LogoSweeperDialog"
import RecursiveSnakeDialog from "./components/RecursiveSnake/RecursiveSnakeDialog"
import Container from "@material-ui/core/Container"
import './App.css';
import Chat from "./components/Chat";
// import Icon from '@material-ui/core/Icon';
import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation';
import AutoGrid from './components/AutoGrid/AutoGrid';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import SVG from './components/Svg/Svg';

class App extends Component {

  render() {

    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        {/* <Icon style={{color:"white", float:"right", fontSize:"80"}}>
         account_circle
        </Icon> */}
        <SVG/>      
        <Container maxWidth="sm">
        <Grid container spacing={3}>
        <Grid item xs>
            <TicTacToeDialog /> 
        </Grid>
        <Grid item xs>
            <LogoSweeperDialog />
        </Grid>
        <Grid item xs>
            <RecursiveSnakeDialog />
         </Grid>
         </Grid>
          </Container>
            <Chat />
        <AutoGrid />
        <SimpleBottomNavigation />
      </div>
    );
  };
};

export default App;
