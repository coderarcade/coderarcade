import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { readScores } from "../../actions/scoreActions"
import { connect } from 'react-redux';

// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     avatar: {
//         margin: 10,
//     },
//     bigAvatar: {
//         margin: 10,
//         width: 60,
//         height: 60,
//     },
//     paper: {
//         textAlign: 'center',
//         color: "black",
//         background: 'linear-gradient(45deg, #C0722C 30%, #F41B25 90%)',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         height: "50%",
//         padding: "5%",
//     },
//     table: {
//         minWidth: 650,
//     },
// });

// function createData(user, score) {
//     console.log(this);

//     this.props.readScores();

//     return { user, score };
// }

// const rows = [
//     createData('John', 10),
//     createData('Chelsea', 9),
//     createData('Calvin', 1),
// ];



class Scoreboard extends Component {
    constructor() {
        super();
        this.state = {
            highScore: []
        }

    }

    componentWillMount() {
        // console.log(this.props.readScores);
        // createData();
        this.props.readScores()

    }

    render() {
        return (
            <Container>
                High Scores Here!
            </Container>
            // <Container style={{ width: "100%", padding: "5%" }} fluid="true">
            //     <Paper className={classes.paper}><h3 style={{ textAlign: "center" }}>High Scores</h3>
            //         <Table className={classes.table} size="small">
            //             <TableHead>
            //                 <TableRow>
            //                     <TableCell>Tetris</TableCell>
            //                     <TableCell align="right">Score</TableCell>
            //                 </TableRow>
            //             </TableHead>
            //             <TableBody>
            //                 {rows.map(row => (
            //                     <TableRow key={row.user}>
            //                         <TableCell component="th" scope="row">
            //                             {row.user}
            //                         </TableCell>
            //                         <TableCell align="right">{row.score}</TableCell>
            //                     </TableRow>
            //                 ))}
            //             </TableBody>
            //         </Table>
            //         <Table className={classes.table} size="small">
            //             <TableHead>
            //                 <TableRow>
            //                     <TableCell>Snake</TableCell>
            //                     <TableCell align="right">Score</TableCell>
            //                 </TableRow>
            //             </TableHead>
            //             <TableBody>
            //                 {rows.map(row => (
            //                     <TableRow key={row.user}>
            //                         <TableCell component="th" scope="row">
            //                             {row.user}
            //                         </TableCell>
            //                         <TableCell align="right">{row.score}</TableCell>
            //                     </TableRow>
            //                 ))}
            //             </TableBody>
            //         </Table>
            //         <Table className={classes.table} size="small">
            //             <TableHead>
            //                 <TableRow>
            //                     <TableCell>Logo Sweeper</TableCell>
            //                     <TableCell align="right">Score</TableCell>
            //                 </TableRow>
            //             </TableHead>
            //             <TableBody>
            //                 {rows.map(row => (
            //                     <TableRow key={row.user}>
            //                         <TableCell component="th" scope="row">
            //                             {row.user}
            //                         </TableCell>
            //                         <TableCell align="right">{row.score}</TableCell>
            //                     </TableRow>
            //                 ))}
            //             </TableBody>
            //         </Table>
            //     </Paper>
            // </Container>
        );
    }
}

Scoreboard.propTypes = {
    readScores: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { readScores }
)(withRouter(Scoreboard))