import React, { Component } from "react";
import TicTacToeDialog from "./components/TicTacToe/TicTacToeDialog"
import LogoSweeperDialog from "./components/LogoSweeper/LogoSweeperDialog"
import RecursiveSnakeDialog from "./components/RecursiveSnake/RecursiveSnakeDialog"
import Container from "@material-ui/core/Container"
import './App.css';
import Chat from "./components/Chat";
import Docs from "./components/Docs";
import AboutUs from "./components/AboutUs";
// import Icon from '@material-ui/core/Icon';
import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import SVG from './components/Svg/Svg';

// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

// Amplify.configure(awsconfig);

class App extends Component {

  render() {

    // const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <div className="stars">
          <div className="twinkling">
            <div className="clouds">
              <SVG />
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
              <br></br>
              <Container maxWidth="lg">
                <Grid container spacing={3}>
                  <Grid item xs>
                    <AboutUs />
                  </Grid>
                  <Grid item xs>
                    <Chat />
                  </Grid>
                  <Grid item xs>
                    <Docs />
                  </Grid>
                </Grid>
              </Container>
              <SimpleBottomNavigation/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

// export default withAuthenticator(App, true);
export default App;
