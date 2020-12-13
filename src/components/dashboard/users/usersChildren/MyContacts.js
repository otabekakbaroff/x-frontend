import React, { useEffect, useState , useContext } from 'react';
import axiosWithAuth from '../../../axiosWithAuth';
import {Context} from '../../../Context'


function MyContacts(){

    const setReceiver = useContext(Context).setReceiver;
    const socket = useContext(Context).socket;
    const users = useContext(Context).users
    const setUsers = useContext(Context).setUsers
    const connections = useContext(Context).connections;
    const setConnections = useContext(Context).setConnections;

    useEffect(()=>{
        axiosWithAuth().get(`/api/connections/${localStorage.getItem('username')}/friends-list`).then(result=>{
            console.log(result)
            setUsers(result.data)
        }).catch(error=>{
            console.log(localStorage.getItem('username'))
        },[])
        socket.on('user-search', function(data){
            console.log(data)
            setConnections(data)
        })
    },[socket])

    if(connections.length !== 0){
        return(
            <div className="user-collection">
                    {connections.map(item=>(
                        <div className="user-collection-item" key={Math.floor(Math.random()*99999999)} >
                            <div className="user-icon"></div>
                            <div>{item.username}</div>
                            <button className="add-friend" onClick={()=>{axiosWithAuth().post(`/api/connections/send-friend-request`, {from:localStorage.getItem('username'),to:item.username})}} >Add a friend</button>
                        </div>
                    ))}
                    
                </div>
        )
    }else{
        return(
            <div className="user-collection">
                    {users.map(item=>(
                        <div className="user-collection-item" key={Math.floor(Math.random()*99999999)} onClick={()=>{setReceiver(item.username);localStorage.setItem('receiver-username',item.username)}}>
                            <div className="user-icon"></div>
                            <div>{item.username}</div>
                        </div>
                    ))}
                    
                </div>
        )
    }
}



export default MyContacts














