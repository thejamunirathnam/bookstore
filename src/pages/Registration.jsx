import React from 'react'
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Login from '../Registration/Login'
import Signup from '../Registration/Signup'
import shopping from '../assets/shopping.png'

function Registration(props) {

    return (
        <div className="Registration">
            <div className="shopping">
                <img src={shopping} width="245" height="245" className="shopping_icon" />
                <figcaption>Online Book Shopping</figcaption>
            </div>
            <div className="main">
                <BrowserRouter>
                <div>
                    <Link to="/" className="redirect">Login</Link>
                    <Link to="/Signup" className="redirect">Sign Up</Link>
                </div>
                    <Switch>
                        <Route exact path="/" component={Login}></Route>
                        <Route path="/Signup" component={Signup}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Registration
