import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  root: {
    position: "sticky",
    maxWidth: "100%",
    height: "30px",
    bottom: 0,
    background: 'linear-gradient(45deg, black, #F41B25, black)',
    fontFamily: 'italic',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     <h6 style={{paddingTop:"6px", color: "white"}}>© 2019 The node_modules </h6>

    </BottomNavigation>
  );
}