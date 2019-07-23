import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
// import { typography } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <React.Fragment>
      <CssBaseline />
      <Container style={{width:"100%"}} fluid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper style={{background:"transparent", color:"white", width:"100%"}} className={classes.paper}><h2 style={{textAlign:"center^"}}>Meet The Creators</h2><Typography variant="body2">We geared our idea towards a coding-themed arcade application for beginners/students to familiarize up-and-coming coders with today's technology. Not only for beginners but experienced programmers as well that just want to play mini games while brushing up on what they might already know.
          This app is valuable because it’s a fun way to inform people about the different languages, frameworks, and or libraries they could be using.
      </Typography></Paper>
        </Grid>
        <Grid item xs container justify="center" alignItems="center">
      <Avatar src="../assets/johnStickles.jpg" className={classes.bigAvatar} />
      <Avatar src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
    </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid> */}
      </Container>
    </React.Fragment>
    </div>
  );
}