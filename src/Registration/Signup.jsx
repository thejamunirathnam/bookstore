import React from 'react'
import { Redirect  } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Registration/Registration.scss'
import { useState } from 'react';
import UserService from '../Service/UserService'
const service = new UserService();


function Signup(props) {
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mob, setMob] = useState('');
  const [redirect, setRedirect] = useState(false);
 

  const Registration = () => {
    const data = {
      "fullName": fname,
      "email": email,
      "password": pass,
      "phone": mob
    }

    service.Registration(data)
      .then((res) => {
        console.log(res)
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err)
      })

  }

  if (redirect) {
    return <Redirect to='/Home' />
  }

  return (
    <div>
      <div className="signup">
        <label className="signup_lbl">Full Name
        <TextField id="outlined-basic" size="small" onChange={(e) => setFname(e.target.value)} className="signup_form" fullWidth variant="outlined" />
        </label>
        <label className="signup_lbl">Email Id
        <TextField id="outlined-basic" size="small" onChange={(e) => setEmail(e.target.value)} className="signup_form" fullWidth variant="outlined" />
        </label>
        <label className="signup_lbl">Password
        <TextField id="outlined-basic" size="small" onChange={(e) => setPass(e.target.value)} className="signup_form" fullWidth variant="outlined" type="password" />
        </label>
        <label className="signup_lbl">Mobile Number
        <TextField id="outlined-basic" size="small" onChange={(e) => setMob(e.target.value)} className="signup_form" fullWidth variant="outlined" />
        </label>
        <Button className="Signup_btn" variant="contained" onClick={() => Registration()}>
          Signup
          </Button>
      </div>
    </div>
  )
}

export default Signup
