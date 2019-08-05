import React from "react";
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
        padding: "5%",
    },
});

export default function Docs() {
    const classes = useStyles();

    return (
        <Container style={{ width: "100%", padding: "5%" }} fluid>
            <Grid item xs>
                <Paper className={classes.paper}><h3 style={{ textAlign: "center" }}>Read The Documention</h3><Typography variant="body2">Click on the icons to learn more in depth about each library/framework and read about what they do! Reading the documention is the best source to really know what each one is all about.
        </Typography><Grid container justify="center" alignItems="center">
                        <Avatar alt="html" src="https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/html5-512.png" className={classes.bigAvatar} />
                        <Avatar alt="css" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" className={classes.bigAvatar} />
                        <Avatar alt="javaScript" src="https://ih0.redbubble.net/image.56249144.4670/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg" className={classes.bigAvatar} />
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
        </Container>
    );
} 