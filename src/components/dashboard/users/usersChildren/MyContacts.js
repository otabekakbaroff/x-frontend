import React, { useEffect, useState , useContext } from 'react';
import axiosWithAuth from '../../../axiosWithAuth';
import {Context} from '../../../Context'


function MyContacts(){

    const [users,setUsers] = useState([{username: 'test'}])
    const setReceiver = useContext(Context).setReceiver;
    // const socket = useContext(Context).socket;

    useEffect(()=>{
        axiosWithAuth().get(`/api/connections/${localStorage.getItem('username')}/friends-list`).then(result=>{
            console.log(result)
            setUsers(result.data)
        }).catch(error=>{
            console.log(localStorage.getItem('username'))
        })
        // socket.on('user-search', function(data){
        //     setUsers(data)
        // })
    },[/*socket*/])
    
    return(
            <div className="user-collection">

                {users.map(item=>(
                    <div className="user-collection-item" key={Math.floor(Math.random()*99999999)} onClick={()=>{setReceiver(item.from);localStorage.setItem('receiver-username',item.from)}}>
                        <div className="user-icon"></div>
                        <div>{item.username}</div>
                    </div>
                ))}
                
            </div>
        )
}

export default MyContacts














