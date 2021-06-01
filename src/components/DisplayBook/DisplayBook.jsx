import React, { useEffect, useState } from 'react'
import '../DisplayBook/DisplayBook.scss'
import bookimage from '../../../src/assets/book.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UserService from '../../Service/UserService'
const service = new UserService();


function DisplayBook() {
    const [book, getBook] = useState([]);

    useEffect(() => {
        console.log("useeffct")
        // service.GetBook()
        // .then((res)=>{
        //   console.log(res)
        // })
        // .catch((err)=>{
        //   console.log(err)
        // })
    });

    return (
        <div className="books">
            <Grid container spacing={2}>
                <Grid xs={12} sm={6} md={3} className="gridbook" item>
                    <Paper>
                        <div className="bookimage" >
                            <img src={bookimage} width="145" height="145" />
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

            </Grid>
        </div>
    )
}

export default DisplayBook
