import React,{useEffect,useContext} from 'react'
import Users from './usersSection/users';
import Messages from './messageSection/messages'
import {Context} from '.././Context'

function Dashboard(){
    const socket=useContext(Context).socket;
    useEffect(()=>{
        socket.on('confirm', function(data){
            localStorage.setItem('username', data)
        })
        socket.on('reconnect', function(data){
            console.log(data)
            socket.emit('reconnection',localStorage.getItem('username'))
        })
    },[socket])
    return(
        <div className="dashboard">
            <Users/>
            <Messages/>
        </div>
    )
}

export default Dashboard




