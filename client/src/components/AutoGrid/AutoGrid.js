import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "black",
    background: 'linear-gradient(45deg, #C0722C 30%, #F41B25 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: "95%",
  },
  avatar: {
    margin: 10,
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
      <Container style={{width:"100%", padding:"5%"}} fluid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}><h2 style={{textAlign:"center"}}>Meet The Creators</h2><Typography variant="body2">We geared our idea towards a coding-themed arcade application for beginners/students to familiarize up-and-coming coders with today's technology. Not only for beginners but experienced programmers as well that just want to play mini games while brushing up on what they might already know.
          This app is valuable because it’s a fun way to inform people about the different languages, frameworks, and or libraries they could be using.
      </Typography> <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4D03AQFwV-_AN6FeTQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=weMbbAVoJPGPrvvLeaykFtpi6MfUm7P5L9loePm46HM" className={classes.bigAvatar} />
      <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQHjCyOiM_I_sg/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=lktgPQdO2cu2hmPx8qM0ogX8cleifHJGb3mk4Zgevbg" className={classes.bigAvatar} />
    </Grid></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><h2 style={{textAlign:"center"}}>Read The Documention</h2><Typography variant="body2">Click on the icons to learn more in depth about each library/framework and read about what they do! Reading the documention is the best source to really know what each one is all about.
      </Typography><Grid container justify="center" alignItems="center">
      <Avatar alt="html" src="https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/html5-512.png" className={classes.avatar} />
      <Avatar alt="css" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" className={classes.avatar} />
      <Avatar alt="javaScript" src="https://ih0.redbubble.net/image.56249144.4670/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg" className={classes.avatar} />
      <Avatar alt="bootstrap" src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" className={classes.avatar} />
      <Avatar alt="jquery" src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png" className={classes.avatar} />
      <Avatar alt="node" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWvcydc6q355c0sUW47uMF0s3JugZgKQQzildOyHW7AFJoQfc" className={classes.avatar} />
      <Avatar alt="mongoose" src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png" className={classes.avatar} />
      <Avatar alt="handlebars" src="https://raw.github.com/evereq/handlebars.js.nuget/master/images/handlebars.png" className={classes.avatar} />
      <Avatar alt="express" src="https://www.kylelim.com/images/express.png" className={classes.avatar} />
      <Avatar alt="firebase" src="https://www.appcoda.com/wp-content/uploads/2016/11/firebase_logo_shot.png" className={classes.avatar} />
      <Avatar alt="react" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" className={classes.avatar} />
      <Avatar alt="php" src="https://icon-library.net/images/php-icon-png/php-icon-png-0.jpg" className={classes.avatar} />
    </Grid></Paper>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
    </div>
  );
}