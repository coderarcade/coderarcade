import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    paper: {
        textAlign: 'center',
        color: "black",
        background: 'linear-gradient(45deg, #C0722C 30%, #F41B25 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: "50%",
        fontStyle: "italic",
        padding: "5%",
    },
});

export default function AboutUs() {
    const classes = useStyles();

    return (
        <Container style={{ width: "100%", padding: "5%" }} fluid>
            <Paper className={classes.paper}><h3 style={{ textAlign: "center" }}>Meet The Creators</h3><Typography variant="body2">We geared our idea towards a coding-themed arcade application for beginners/students to familiarize up-and-coming coders with today's technology. Not only for beginners but experienced programmers as well that just want to play mini games while brushing up on what they might already know.
             This app is valuable because it’s a fun way to inform people about the different languages, frameworks, and or libraries they could be using.
      </Typography>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4D03AQFwV-_AN6FeTQ/profile-displayphoto-shrink_800_800/0?e=1570060800&v=beta&t=Pm612m-tJaTxVzx4ZIrj2xWU6KqHCt6yOAk-VeQTPqk" className={classes.bigAvatar} />
                    <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQE26jPYsLwnJQ/profile-displayphoto-shrink_200_200/0?e=1570060800&v=beta&t=SR0LHwa4lR4rlvWMaClrpqzvLegp3ITNsS9VDIFyWDg" className={classes.bigAvatar} />
                </Grid>
            </Paper>
        </Container>
    );
} 