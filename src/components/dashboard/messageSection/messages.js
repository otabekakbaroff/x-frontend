import React,{useEffect,useContext, useState} from 'react'
import {Context} from '../../Context'
import ProfileHeader from './userProfileHeader'
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';


function Messages(){
    const [activeButton,setActiveButton] = useState([]);
    // const socket=useContext(Context).socket;
    function send(){
        // let chatbox = document.querySelector(".chat-box")
        // let message = document.querySelector(".text").value
        // socket.emit('private',{username:localStorage.getItem('username'),message:message})
        // chatbox.innerHTML +='<p>'+message+'</p>'
        // chatbox.scrollTo(0, chatbox.scrollHeight);
        console.log('hit')
    }
    useEffect(()=>{
        let chatbox = document.querySelector(".chat-box")
        // socket.on('private', function(data){
        //     chatbox.innerHTML +='<h3>'+data.username+'</h3>'
        //     chatbox.innerHTML +='<p>'+data.message+'</p>'
        //     chatbox.scrollTo(0, chatbox.scrollHeight);
        // })  
    },[/*socket*/])
    const handleChange = (e) =>{
        if(e.target.value){
            setActiveButton({fill: "#478dff",transform: `rotate(-45deg)`})
        }else{
            setActiveButton({})
        }
    }
    return(
        <div className="messages">
            <ProfileHeader/>
            <div className="chat-box"></div>
            <div className="send-box">
                <IconButton >
                    <PhotoCameraIcon />
                </IconButton>
                <IconButton >
                    <PhotoLibraryIcon />
                </IconButton>
                <IconButton >
                    <MicIcon />
                </IconButton>
                <TextField  id="text" label="Type here..." variant="outlined" onChange={handleChange} InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton >
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </InputAdornment>
                )}}/>
                {/* <input className="text" placeholder="Type here..." onChange={handleChange}/> */}
                <div className="send-button-box">
                    <IconButton id="send-button"  onClick={send}>
                        <SendIcon style={activeButton} id="send-icon"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Messages








