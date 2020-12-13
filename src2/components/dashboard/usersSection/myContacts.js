import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../axiosWithAuth';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


function MyContacts({setClickUserContact}){
    const [users,setUsers] = useState([])
    console.log("this is from MY CONTACTS")
    useEffect(()=>{
        axiosWithAuth().get('/api/users/all-users').then(result=>{
            setUsers(result.data)
            console.log("result from users", result.data)
        })
        .catch(err=>console.log(err))
        console.log("no one here?")
    },[])
    return(
        <div className="user-collection">
            <TextField
          label="Search"
          id="outlined-margin-dense"
          style = {{width: "95%", margin:"0, 5px!important"}}

        //   className={classes.textField}
          margin="dense"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                  <SearchIcon />
              </InputAdornment>
            )
          }}
        />

            {users.map(item=>(
                <div className="user-collection-item" key={Math.floor(Math.random()*9999999)} 
                onClick={()=>{
                    localStorage.setItem('receiver-username',item.username); 
                    setClickUserContact(localStorage.getItem('receiver-username'))
                    }}>

                    <div className="user-icon"></div>
                    <div>{item.name}</div>
                    
               
                </div>
            ))}
        </div>
    )
}

export default MyContacts














