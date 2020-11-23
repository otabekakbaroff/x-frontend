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

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';



import useStyles from '../dash.styles'
import DemoChatMessages from './DemoChatMessages';



function Messages({mobileOpen,setMobileOpen, handleDrawerToggle}){
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
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
            />
            {/* <div className="chat-box"></div> */}

            <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
        
        <div className="chat-box">
            <DemoChatMessages/>
                
            </div>


        </div>
 
      </main>

      {/* <div 
    style={{
        height:"100px",
        background:"lightgreen",
        width:"100%",
        position:"fixed",
        bottom:0}}> ioji</div>                  */}

<AppBar position="fixed" color="primary" className={classes.appBar2}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton2}>
            <AddIcon />
          </Fab>
          <div className={classes.grow2} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
          <IconButton >
                    <PhotoCameraIcon />
                </IconButton>
                <IconButton >
                    <PhotoLibraryIcon />
                </IconButton>
                <IconButton >
                    <MicIcon />
                </IconButton>
                {/* <TextField  id="text" label="Type here..." variant="outlined" onChange={handleChange} InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton >
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </InputAdornment>
                )}}/> */}
                <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
                {/* <input className="text" placeholder="Type here..." onChange={handleChange}/> */}
                <div className="send-button-box">
                    <IconButton id="send-button"  onClick={send}>
                        <SendIcon style={activeButton} id="send-icon"/>
                    </IconButton>
                </div>

        </Toolbar>
      </AppBar>


        </div>
    )
}

export default Messages








