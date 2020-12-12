import React, { useEffect, useState , useContext } from 'react';
import axiosWithAuth from '../../../axiosWithAuth';
import {Context} from '../../../Context'


function MyContacts(){

    const [users,setUsers] = useState([{username: 'test'}])
    const setReceiver = useContext(Context).setReceiver;
    const [start, setStart]=useState()
    // const socket = useContext(Context).socket;
    const sendme = useContext(Context).sendme

    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/connections/${localStorage.getItem('username')}/friends-list`)
        .then(result=>{
            // setStart(localStorage.setItem('receiver-username',result.data[0].from))
            setUsers(result.data)
            localStorage.setItem('receiver-username',result.data[0].from); 
        }).catch(error=>{
            console.log(error)
        })
        // socket.on('user-search', function(data){
        //     setUsers(data)
        // })
    },[/*socket*/])
    
    return(
            <div className="user-collection">
                {/* {localStorage.setItem('receiver-username',item.from)} */}
                {/* {localStorage.setItem('receiver-username',item.from)} */}

                {localStorage.getItem('receiver-username') && users.map(item=>(
                    <div className="user-collection-item" key={Math.floor(Math.random()*99999999)} 
                    onClick={()=>{setReceiver(item.from);
                    localStorage.setItem('receiver-username',item.from);
                    sendme()
                    }}>
                        <div className="user-icon"></div>
                        <div>{item.from}</div>
                    </div>
                ))}
                
            </div>
        )
}

export default MyContacts














