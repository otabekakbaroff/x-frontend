import React,{useEffect,useState} from 'react'
import Users from './users/Users';
import Messages from './messages/Messages'
import {Context} from '../Context'
import io from "socket.io-client"
const socket = io("http://localhost:5000")

function Dashboard(){
    const [receiver, setReceiver] = useState(localStorage.getItem('receiver-username'))

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
            <Context.Provider value={{socket,receiver, setReceiver}}>
                <Users/>
                <Messages/>
            </Context.Provider> 
        </div>
    )
}

export default Dashboard




