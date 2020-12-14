import React, { useState, useContext } from 'react';
// globalContext
import { userContext } from '../../context/UsersContext'
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2.5),
      width: '35ch',
    },
  },
}));


function Login(props) {

  const classes = useStyles();

  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  // Bring in functions from context
  const { setUser } = useContext(userContext);

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const LoginSubmit = e => {
    e.preventDefault()
    axiosWithAuth().post('/api/users/login', login)
      .then(response => {
        console.log("RESPONSE IS: ", response)
        localStorage.setItem('myname', response.data.user.name);
        // set name in context
        localStorage.setItem('username', response.data.user.username)
        setUser(response.data.user.username);

        localStorage.setItem('chatted_last', response.data.user.chatted_last)
        localStorage.setItem('token', response.data.token);
        props.history.push("/dashboard");
        console.log("response from login", response)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="login">

      <form className={classes.root} noValidate autoComplete="off">

        <h1>Login</h1>

        <div className="avatar"></div>

        <TextField name="username" label="Username" variant="filled" onChange={handleChange} InputProps={{
          endAdornment: (
            <InputAdornment>
              <AccountCircleIcon />
            </InputAdornment>)
        }} />

        <TextField name="password" label="Password" type="password" autoComplete="current-password" variant="filled" onChange={handleChange} InputProps={{
          endAdornment: (
            <InputAdornment>
              <VpnKeyIcon />
            </InputAdornment>)
        }} />

        <Button type="submit" variant="contained" color="primary" size="large" onClick={LoginSubmit}>
          Login
          </Button>

        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>

      </form>

    </div>
  );
}

export default Login;