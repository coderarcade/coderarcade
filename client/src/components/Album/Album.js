import React from 'react';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '30%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
        <Container className={classes.cardGrid} maxWidth="sm">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                 className={classes.cardMedia}
                  component="img"
                  alt="CoderArcade"
                  height="120"
                  width="100"
                  image="https://png.pngtree.com/element_our/sm/20180327/sm_5aba147bcacf2.png"
                  src="../components/TicTacToe/FullScreenDialog/index.js"
                  title="CoderArcade"
                   />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Simple Games
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}