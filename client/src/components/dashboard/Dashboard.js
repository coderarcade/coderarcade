import React, { Component } from "react";
import TicTacToeDialog from "../TicTacToe/TicTacToeDialog"
import LogoSweeperDialog from "../LogoSweeper/LogoSweeperDialog"
import RecursiveSnakeDialog from "../RecursiveSnake/RecursiveSnakeDialog"
import Container from "@material-ui/core/Container"
import Chat from "../Chat";
import Docs from "../Docs";
import AboutUs from "../AboutUs";
import Grid from '@material-ui/core/Grid';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div  style={{textAlign: "center"}}>
                <div className="container valign-wrapper">
                    <h4>
                        <b>Hey there,</b> {user.name.split(" ")[0]}
                        <p className="flow-text grey-text text-darken-1">
                            You are logged into a full-stack{" "}
                            <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                                </p>
                    </h4>
                    <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Logout
                            </button>
                </div>
                <br />
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
                        <Grid item lg>
                            <Chat />
                        </Grid>
                        <Grid item lg>
                            <Docs />
                        </Grid>
                    </Grid>
                </Container>
            </div >
        );
    };
};

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
