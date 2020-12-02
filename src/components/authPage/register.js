import React,{useState,useContext} from 'react';
import axiosWithAuth from '../axiosWithAuth'
import {Context} from '../Context'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '35ch',
    },
  },
}));


function Register(props){
    const classes = useStyles();
    const socket = useContext(Context).socket;
    const [signup,setSignup]=useState({
        name:'',
        username:'',
        password:''
    });
    const handleChange=e=>{
        setSignup({
          ...signup,
          [e.target.name]:e.target.value
      }) 
    }
    const LoginSubmit=e=>{
      e.preventDefault()
      axiosWithAuth().post('/api/users/register', signup)
        .then(response=>{
            localStorage.setItem('token',response.data.token);
            socket.emit('user-info', signup.username)
            props.history.push("/dashboard");
        })
        .catch(err=>{
            console.log(err);
        })
      }
    return(
        <div className="signup">
            <form className={classes.root} noValidate autoComplete="off">
                <h1>Sign Up</h1>
                <TextField name="name" label="Displayed Name" variant="filled" onChange={handleChange} InputProps={{
    endAdornment: (
      <InputAdornment>
          <FaceIcon />
      </InputAdornment>
    )
  }}/>
                <TextField name="username" label="Username" variant="filled" onChange={handleChange} InputProps={{
    endAdornment: (
      <InputAdornment>
          <AccountCircleIcon />
      </InputAdornment>
    )
  }}/>
                <TextField name="password" label="Password" type="password" autoComplete="current-password" variant="filled" onChange={handleChange} InputProps={{
    endAdornment: (
      <InputAdornment>
          <VpnKeyIcon />
      </InputAdornment>
    )
  }}/>
                <Button type="submit" variant="contained" color="primary" size="large" onClick={LoginSubmit}>
                    Sign up
                </Button>
                <span>Have an account? <Link to="/">Login</Link></span>
            </form>
        </div>
    )
}


export default Register