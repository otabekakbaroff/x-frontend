import React, { useEffect, useState } from 'react'
import axiosWithAuth from './axiosWithAuth'


function Users(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axiosWithAuth().get('/api/users/all-users').then(result=>{
            setUsers(result.data)
        })
    },[])
    return(
        <div className="users">
            <h1>Users</h1>
            <input placeholder="...Search for users"/><span>Find</span>
            <div className="user-collection">
                {users.map(item=>(
                    <div className="user-icon" key={Math.floor(Math.random()*9999999)} onClick={()=>{localStorage.setItem('username',item.username)}}>{item.username}</div>
                ))}
            </div>
        </div>
    )
}


export default Users