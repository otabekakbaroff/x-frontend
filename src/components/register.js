import React,{useState} from 'react';
import axiosWithAuth from './axiosWithAuth'
function Register(){
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
        <div>
           <h1>Sign up</h1>
            <form className="signup">
                <input onChange={handleChange} className="name" name="name" placeholder="name/nickname"/>
                <input onChange={handleChange} className="username" name="username" placeholder="username"/>
                <input onChange={handleChange} className="password" name="password" placeholder="password"/>
                <button onClick={LoginSubmit}>Login</button><span>Have an account? <a href="#">Login</a></span>
        </form>
        </div>
    )
}


export default Register