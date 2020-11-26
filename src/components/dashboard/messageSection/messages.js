import React,{useEffect, useState, useContext} from 'react';
import {Context} from '../../Context';
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
import ContactInfo from './contactInfo/ContactInfo'
import Toolbar from '@material-ui/core/Toolbar';


import AppBar from '@material-ui/core/AppBar';
import useStyles from '../dash.styles'



function Messages({handleDrawerToggle, theme, mobileOpen, drawer, clickUserContact,setClickUserContact }){
    const [activeButton,setActiveButton] = useState([]);
    const socket=useContext(Context).socket;
    const [isClicked, setIsClicked]=useState(false)
    const classes = useStyles();


    const chatbubbles=`
        max-width: 330px;
        background: white ;
        border-radius:  20px 20px 0px;
        margin:10px;
        padding:10px;
        box-shadow:  1px 2px 6px 6px rgb(0 0 0 / 0%), -1px 1px 5px 0px rgb(0 0 0 / 8%), 0px 1px 10px 0px rgb(255 21 248 / 6%) 
    `
    const imgbubble=`
        max-width: 330px ;
        background: white ;
        border-radius:  20px 20px 0px 20px ;
        margin:10;
        padding:0;
        box-shadow:  1px 2px 6px 6px rgb(0 0 0 / 0%), -1px 1px 5px 0px rgb(0 0 0 / 8%), 0px 1px 10px 0px rgb(255 21 248 / 6%) 

    `
    const avatar=`
        width:50px;
        height:50px;
        border-radius:50%;
        margin-top:35px;
        color: white;
        font-size: 2.5em;
    `
    const chatContainer=`
        display:inline-flex
    `    


    function send(){
        let chatbox = document.querySelector(".contactprofile")
        let message = document.querySelector("#text").value
        socket.emit('private',{username:localStorage.getItem('receiver-username'),message:message})

        chatbox.innerHTML += `<div class="nthType" data-myname style="`+chatContainer+`"><div class="avi" data-aviavi style="`+avatar+`">${localStorage.getItem('myname')[0].toUpperCase()}</div><div class="bubble" style="`+chatbubbles+`">${message}</div></div>`
 
        chatbox.scrollTo(0, chatbox.scrollHeight);
        document.querySelector("#text").value=""
    }


    useEffect(()=>{
        let chatbox = document.querySelector(".contactprofile")
        socket.on('private', function(data){
            chatbox.innerHTML += `<div class="nthType" data-theirname style="`+chatContainer+`"><div class="avi" style="`+avatar+`">${localStorage.getItem('receiver-username')[0].toUpperCase()}</div><div class="bubble" style="`+chatbubbles+`">${data.message}</div></div>`
            chatbox.scrollTo(0, chatbox.scrollHeight);
        })  
    },[socket])

    const handleChange = (e) =>{
        if(e.target.value){
            setActiveButton({fill: "#478dff",transform: `rotate(-45deg)`})
        }else{
            setActiveButton({})
        }
    }

    const clickContact=e=>{
        setIsClicked(!isClicked)
    }

    return(
        <div className="messages">
            <ProfileHeader 
            mobileOpen={mobileOpen}
            drawer={drawer}
            setClickUserContact={setClickUserContact}
            clickUserContact={clickUserContact}
            theme={theme}
            handleDrawerToggle={handleDrawerToggle}
            clickContact={clickContact}/>


            <main className={classes.content}>
        <div className={classes.toolbar} />
 
        {isClicked==true ? <ContactInfo clickContact={clickContact}/>: (
           
        <div
       className="chat-box" style={{paddingBottom:"25px", paddingTop:"25px"}}> 
       <div className ="contactprofile" style={{display:"grid"}}></div>
       </div>
        )} 
        <div className={classes.toolbar} />

      </main>

      <AppBar position="fixed" color="default" className={classes.appBar2}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
          <PhotoCameraIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
          <PhotoLibraryIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
          <MicIcon />
          </IconButton>

          <TextField id="text" className="textareawidth" color="inherit" 
           label="Type here..." variant="outlined" onChange={handleChange}
           InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton >
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </InputAdornment>
                )}}/>

<IconButton id="send-button"  onClick={send}>
                        <SendIcon style={activeButton}/>
                    </IconButton>
        </Toolbar>
      </AppBar>
            

        </div>
    )
}

export default Messages


export function Chat(){
    return(
    <div className="chat-box original" style={{paddingTop:"25px"}}>
    <DemoChatMessages/>
</div>
)
}







