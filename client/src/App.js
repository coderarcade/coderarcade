import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";


// import TicTacToeDialog from "./components/TicTacToe/TicTacToeDialog"
// import LogoSweeperDialog from "./components/LogoSweeper/LogoSweeperDialog"
// import RecursiveSnakeDialog from "./components/RecursiveSnake/RecursiveSnakeDialog"
// import Container from "@material-ui/core/Container"
import './App.css';
// import Chat from "./components/Chat";
// import Docs from "./components/Docs";
// import Icon from '@material-ui/core/Icon';
// import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation';
// import AutoGrid from './components/AutoGrid/AutoGrid';
import 'typeface-roboto';
// import Grid from '@material-ui/core/Grid';
// import SVG from './components/Svg/Svg';
import SVG from "./components/Svg/Svg";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation/SimpleBottomNavigation"

// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

// Amplify.configure(awsconfig);

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {

  render() {

    // const { isAuthenticated } = this.props.auth;

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <SVG />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <div className="stars" style = {{position: 'fixed'}}>
              <div className="twinkling">
                <div className="clouds">
                  {/* <Icon style={{color:"white", float:"right", fontSize:"80"}}>
         account_circle
        </Icon> */}
                  {/* <AutoGrid /> */}
                  {/* <SimpleBottomNavigation /> */}
                </div>
              </div>
            </div>
            
          </div>
          
        </Router>
        <SimpleBottomNavigation />
      </Provider>
    );
  };
};

// export default withAuthenticator(App, true);
export default App;
