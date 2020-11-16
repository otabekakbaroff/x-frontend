import React,{useState, useContext} from 'react';
import axiosWithAuth from './axiosWithAuth'
import {Context} from './Context'

function Login(props) {
  const socket=useContext(Context).socket;
  const [login,setLogin]=useState({
    name:'',
    username:'',
    password:''
  });
  
  const handleChange=e=>{
      setLogin({
        ...login,
        [e.target.name]:e.target.value
    }) 
  }

  const LoginSubmit=e=>{
    e.preventDefault()
      axiosWithAuth().post('/api/users/login', login)
      .then(response=>{
          localStorage.setItem('token',response.data.token);
          socket.emit('user-info',response.data.user.username)
          props.history.push("/dashboard");
      })
      .catch(err=>{
          console.log(err);
      })
  }
  return (
    <div className="login">
        <h1>Welcome, please login</h1>
        <form>
          <input onChange={handleChange} className="username" name="username" placeholder="username"/>
          <input onChange={handleChange} className="password" name="password" placeholder="password"/>
          <button onClick={LoginSubmit}>Login</button><span>Don't have an account? <a href="#">Sign up</a></span>
        </form>
    </div>
  );
}

export default Login;