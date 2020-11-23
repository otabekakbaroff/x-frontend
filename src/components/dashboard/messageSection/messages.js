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
import DemoChatMessages from './DemoChatMessages'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../dash.styles'
import DemoChatMessages from './DemoChatMessages';
import CancelIcon from '@material-ui/icons/Cancel';



function Messages({mobileOpen,setMobileOpen, handleDrawerToggle, isOpen, setIsOpen}){
    const classes = useStyles();
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

        <div className="messages" style={{background:"white"}}>
            <ProfileHeader
            isOpen={setIsOpen}
            setIsOpen={setIsOpen}
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
            />
            {/* <div className="chat-box"></div> */}

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.root}>
                    {isOpen?<ContactDetails
                    setIsOpen={setIsOpen}
                    isOpen={isOpen} 
                    />:<Chat/>}
                    </div>
        
            </main>

<AppBar position="fixed" color="primary" className={classes.appBar2}>
        <Toolbar>

          <IconButton >
                    <PhotoCameraIcon />
                </IconButton>
                <IconButton >
                    <PhotoLibraryIcon />
                </IconButton>
                <IconButton >
                    <MicIcon />
                </IconButton>

                <TextField
          id="outlined-full-width"
          label="Type here..."
          onChange={handleChange}
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            endAdornment: (
            <InputAdornment>
                <IconButton >
                    <EmojiEmotionsIcon />
                </IconButton>
            </InputAdornment>
        ),
        shrink:true
    }}
          variant="outlined"
        />

                {/* <input className="text" placeholder="Type here..." onChange={handleChange}/> */}
                <div className="send-button-box">
                    <IconButton id="send-button"  onClick={send}>
                        <SendIcon style={activeButton} />
                    </IconButton>
                </div>

        </Toolbar>
      </AppBar>


        </div>
    )
}

export default Messages


const Chat=()=>{
    return(
        <div className="chat-box">
        <DemoChatMessages/>
            
        </div>
    )
}

const ContactDetails=({isOpen, setIsOpen})=>{
    return(
        <div>
            <div style={{position:"fixed"}}>
                <CancelIcon onClick={()=>setIsOpen(!isOpen)}/>
            <h2>User Details</h2>
            </div>
        </div>
    )
}








