import React, { useEffect, useState , useContext } from 'react';
import axiosWithAuth from '../../../axiosWithAuth';
import {Context} from '../../../Context'


function MyContacts(){

    // const [users,setUsers] = useState([{username: 'test'}])
    const setReceiver = useContext(Context).setReceiver;
    const setUsers = useContext(Context).setUsers;
    const users = useContext(Context).users;
    const [start, setStart]=useState()
    const socket = useContext(Context).socket;
    const sendme = useContext(Context).sendme;
    const connections = useContext(Context).connections;
    const setConnections = useContext(Context).setConnections;

    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/connections/${localStorage.getItem('username')}/friends-list`)
        .then(result=>{
            // setStart(localStorage.setItem('receiver-username',result.data[0].from))
            setUsers(result.data)
            if (!localStorage.getItem('receiver-username')){
                console.log("setting receiver")
                localStorage.setItem('receiver-username',result.data[0].username)
                console.log("receiver set")
            } 
            // localStorage.setItem('receiver-username',result.data[0].from); 
        }).catch(error=>{
            console.log(error)
        })
        socket.on('user-search', function(data){
            setConnections(data)
        })
    },[socket])
    
    console.log("connections", connections)
//     return(
//             <div className="user-collection">
// hey

//                 {users && users.map(item=>(
//                     <div className="user-collection-item" key={Math.floor(Math.random()*99999999)} 
//                     onClick={()=>{setReceiver(item.from);
//                     localStorage.setItem('receiver-username',item.from);
//                     sendme()
//                     }}>
//                         <div className="user-icon"></div>
//                         <div>{item.from}</div>
//                     </div>
//                 ))}
                
//             </div>
//         )

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
                    {users && users.map(item=>(
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














