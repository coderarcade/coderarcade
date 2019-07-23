import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "5%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F41B25",
    marginLeft: "-11px",
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
     <h6 style={{paddingTop:"6px", color:"black"}}>© 2019 The node_modules </h6>

    </BottomNavigation>
  );
}