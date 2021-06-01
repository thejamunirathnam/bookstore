import React, { useEffect, useState } from 'react'
import './DisplayBook.scss'
import bookimage from '../../../src/assets/book.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UserService from '../../Service/UserService'
import MultiBook from '../MultiBook/MultiBook';
import Single from '../SingleBook/Single';
const service = new UserService();

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        minHeight: 'calc(100% - 90px)',
        background: "#FFFFFF"
    },
}));

function DisplayBook() {
    const [book, getBook] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11]);
    const [sbook, setSbook] = useState(true);
    const [sindex, setSindex] = useState(0);
    const classes = useStyles();

    const displayBook = (index) => {
        setSbook(false);
        setSindex(index);
    }

    return (

        <div className="books" className={classes.root}>
            {
                sbook ?
                    <MultiBook book={book} displayBook={displayBook} />
                    :
                    <Single book={book[sindex]}/>
            }
        </div>


    )
}

export default DisplayBook
