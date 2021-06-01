import React, { useEffect, useState } from 'react'
import bookimage from '../../../src/assets/book.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: 'calc(100% - 90px)',
        background: "#FFFFFF"
    },

    grid: {
        width: "230px",
        minHeight: "275px",
        justifyContent: "center"
    },
    paper: {
        padding: theme.spacing(1),
        paddingBottom: "0px",
        textAlign: 'left',
        border: "1px solid #e0e0e0",
        boxShadow: "none",
        borderRadius: "8px",
        width: "235px",
        height: "275px",
        padding: "0",
        color: theme.palette.text.secondary,
    },
}));

function MultiBook(props) {

    const classes = useStyles();


    const displayBook = (index) =>{
         props.displayBook(index)
    }

    return (
        <div className="books" className={classes.root}>
            <Grid container spacing={2}>
            {
             props.book.map((result, index) =>
                <Grid xs={12} sm={5} md={3} className={classes.grid} item>
                    <Paper className={classes.paper} onClick={()=>displayBook(index)}>
                        <div className="bookimage" >
                            <img src={bookimage} width="105" height="135" />
                        </div>
                        <div className="hoveringg"  >
                            <div> Don't Make Me Think </div>
                            <div> by Steve Krug</div>
                            <div className="display">
                                <div>4.5</div>
                                <div>(28)</div>
                            </div>
                            <div className="display">
                                <div>1500</div>
                                <div>(2000)</div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                ) }
            </Grid>
        </div>


    )
}

export default MultiBook
