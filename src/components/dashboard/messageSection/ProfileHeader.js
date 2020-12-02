import React, { useEffect, useState,useContext } from 'react';
import {Context} from '../../Context'
import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axiosWithAuth from '../../axiosWithAuth';

function UserProfilerHeader(){
    const receiver=useContext(Context).receiver;
    const [myMessages,setMyMessages] = useState([])
    useEffect(()=>{
        axiosWithAuth().post(`/api/messages/my-messages`,{from:localStorage.getItem('receiver-username'),to:localStorage.getItem('username')}).then(result=>{
            setMyMessages(result.data)
        })
    },[receiver])
    if(receiver.length !==0 || localStorage.getItem('receiver-username')){
        return (
            <div>
                <div className="profile-header">
                    <div className="profile_details">
                        <div className="icon"></div>
                        <div className="name"><h1>{receiver || localStorage.getItem('receiver-username')}</h1></div>
                    </div>
                    <div className="comm-icons">
                        <IconButton >
                            <SearchIcon/>
                        </IconButton>
                        <IconButton >
                            <CallIcon/>
                        </IconButton>
                        <IconButton >
                            <VideocamIcon/>
                        </IconButton>
                        <IconButton >
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                </div>
            <div className="chat-box">
                {myMessages.map(item=>(
                    <div key={Math.floor(Math.random()*99999999)} className={`${item.from === localStorage.getItem('username')}`}>
                        <p>{item.message}</p>
                    </div>
                ))}
            </div>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Pick someone to text</h1>
            </div>
        )
    }
}

export default UserProfilerHeader;