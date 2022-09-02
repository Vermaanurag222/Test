import React from 'react'
import { Header } from './component/Header';
import { AboutUs } from './component/AboutUs';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />
            <Grid container>
                <Grid item xs={3} alignItems='center'>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
                <Grid item xs={3} alignItems='center'>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <AboutUs /></Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Home