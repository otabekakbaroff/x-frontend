import React, { useEffect, useState , useContext } from 'react';
import axiosWithAuth from '../../axiosWithAuth';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {Context} from '../../Context'
function MyContacts(){
    const [connections,setConnections] = useState([])
    const [users,setUsers] = useState([])
    const socket = useContext(Context).socket;
    const setReceiver=useContext(Context).setReceiver;
    useEffect(()=>{
        axiosWithAuth().get(`/api/messages/${localStorage.getItem('username')}/connections`).then(result=>{
            setUsers(result.data)
            setConnections(result.data)
        })
        socket.on('user-search', function(data){
            setUsers(data)
        })
    },[socket])
    function search(e){
        if(e.target.value.length !== 0){
            socket.emit('user-search', e.target.value)
        }else{
            setUsers(connections)
        }
    }
    return(
        <div>
            <TextField onChange={search} fullWidth label="Search of users..." variant="filled" InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <SearchIcon />
                    </InputAdornment>
                    )
            }} />
            <div className="user-collection">
                {users.map(item=>(
                    <div className="user-collection-item" key={Math.floor(Math.random()*99999999)} onClick={()=>{localStorage.setItem('receiver-username',item.username),setReceiver(item.username)}}>
                        <div className="user-icon"></div>
                        <div>{item.username}</div>
                    </div>
                ))}
            </div>
            </div>
        )
}

export default MyContacts














