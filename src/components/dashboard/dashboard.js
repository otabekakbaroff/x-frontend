import React,{useEffect,useContext} from 'react'
import Users from './usersSection/users';
import Messages from './messageSection/messages'
import {Context} from '.././Context'

function Dashboard(){
    const socket=useContext(Context).socket;
    useEffect(()=>{
        socket.emit('authenticate', JSON.parse(localStorage.getItem('username')))
    },[socket])
    return(
        <div className="dashboard">
            <Users/>
            <Messages/>
        </div>
    )
}

export default Dashboard