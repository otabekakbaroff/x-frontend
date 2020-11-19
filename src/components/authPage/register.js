import React,{useState} from 'react';
import axiosWithAuth from '../axiosWithAuth'
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


function Register(){
    const classes = useStyles();
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
        axiosWithAuth().post('/api/users/register', signup)
        .then(response=>{
            console.log(response)
            // localStorage.setItem('token',response.data.token);
            // props.history.push("/profile/classes");
            // window.location.reload(true)
        })
        .catch(err=>{
            console.log(err);
        })
      }
    return(
        <div className="signup">
            <form className={classes.root} noValidate autoComplete="off">
                <h1>Sign Up</h1>
                <TextField label="Displayed Name" variant="filled" onChange={handleChange} InputProps={{
    endAdornment: (
      <InputAdornment>
          <FaceIcon />
      </InputAdornment>
    )
  }}/>
                <TextField label="Username" variant="filled" onChange={handleChange} InputProps={{
    endAdornment: (
      <InputAdornment>
          <AccountCircleIcon />
      </InputAdornment>
    )
  }}/>
                <TextField label="Password" type="password" autoComplete="current-password" variant="filled" onChange={handleChange} InputProps={{
    endAdornment: (
      <InputAdornment>
          <VpnKeyIcon />
      </InputAdornment>
    )
  }}/>
                <Button variant="contained" color="primary" size="large" onChange={LoginSubmit}>
                    Sign up
                </Button>
                <span>Have an account? <Link to="/">Login</Link></span>
            </form>
        </div>
    )
}


export default Register