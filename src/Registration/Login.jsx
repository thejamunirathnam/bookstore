import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Registration/Registration.scss'
import { useState } from 'react';
import UserService from '../Service/UserService'
const service = new UserService();

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const signin = () => {
    const data = {
      "email": email,
      "password": pass,
    }

    service.Login(data)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div>
      <div className="signup">
        <label className="signup_lbl">Email Id
        <TextField id="outlined-basic" size="small" onChange={(e) => setEmail(e.target.value)} className="signup_form" fullWidth variant="outlined" />
        </label>
        <label className="signup_lbl">Password
        <TextField id="outlined-basic" size="small" onChange={(e) => setPass(e.target.value)} className="signup_form" fullWidth variant="outlined" type="password"/>
        </label>
        <Button className="Signup_btn" variant="contained" onClick={()=>signin()}>Login</Button>
        <div className="Login_btn">
        <Button variant="contained">Facebook</Button>
        <Button color="primary" variant="contained">Google</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
