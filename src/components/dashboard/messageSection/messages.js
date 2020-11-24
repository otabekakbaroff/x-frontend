import React,{useEffect, useState} from 'react'
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
import { shadows } from '@material-ui/system';



function Messages({handleDrawerToggle, theme, mobileOpen, drawer}){
    const [activeButton,setActiveButton] = useState([]);
    const [isClicked, setIsClicked]=useState(false)
    const classes = useStyles();
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

    const clickContact=e=>{
        setIsClicked(!isClicked)
    }
    console.log("Clicked", isClicked)

    return(
        <div className="messages">
            <ProfileHeader 
            mobileOpen={mobileOpen}
            drawer={drawer}

            theme={theme}
            handleDrawerToggle={handleDrawerToggle}
            clickContact={clickContact}/>


            <main className={classes.content}>
        <div className={classes.toolbar} />
        {isClicked ? <ContactInfo clickContact={clickContact}/>:<Chat/>} 
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

          <TextField className="textareawidth" color="inherit" label="Type here..." variant="outlined" onChange={handleChange} InputProps={{
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
    <div className="chat-box" style={{paddingBottom:"25px", paddingTop:"25px"}}>
    <DemoChatMessages/>
</div>
)
}







