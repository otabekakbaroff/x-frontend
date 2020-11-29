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
        margin:20px;
        padding:0;
        box-shadow: 1px 2px 6px 6px rgb(0 0 0 / 0%), -1px 1px 5px 0px rgb(0 0 0 / 8%), 0px 1px 10px 0px rgb(255 21 248 / 6%)
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

    const shadow = `
    box-shadow: 1px 2px 6px 6px rgb(0 0 0 / 0%), -1px 1px 5px 0px rgb(0 0 0 / 8%), 0px 1px 10px 0px rgb(255 21 248 / 6%)`


    function send(something){
        let chatbox = document.querySelector(".contactprofile")
        let message = document.querySelector("#text").value
// let imgadd= file ? :"down";
let imgdiv = document.createElement("div");
imgdiv.innerHTML = "This is a paragraph."

        socket.emit('private',{username:localStorage.getItem('receiver-username'),message:message})

        var x = document.createElement("IMG"); 
            
            x.setAttribute("src",file); 
            
            x.setAttribute("width", "200px"); 
            x.setAttribute("alt", "GFG_Logo"); 

        chatbox.innerHTML+=`${file ?`<div class="nthType" data-myname style="`+chatContainer+`">
        <div class="bubble" style="`+imgbubble+`">
          <img src="${file}" class="img" style="border-radius:inherit; width: 300px; max-height: 100%!important;"/> </div></div>`:""}`

        chatbox.innerHTML += `<div class="nthType" data-myname style="`+chatContainer+`">
        <div class="avi" data-aviavi style="`+avatar+`">${localStorage.getItem('myname')[0].toUpperCase()}</div>
        <div class="bubble" style="`+chatbubbles+`">
        ${message}</div></div>`
        document.querySelector("#text").value="";
        // document.querySelector(".img").style.height="200%";
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
        setFile()
    }


    useEffect(()=>{
        let chatbox = document.querySelector(".contactprofile")
        socket.on('private', function(data){
            chatbox.innerHTML += `<div class="nthType" data-theirname style="`+chatContainer+`"><div class="avi" style="`+avatar+`">${localStorage.getItem('receiver-username')[0].toUpperCase()}</div><div class="bubble" style="`+chatbubbles+`">${data.message}</div></div>`
            // chatbox.scrollTo(0, chatbox.scrollHeight);
            document.documentElement.scrollTop = document.documentElement.scrollHeight;

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

    const [file, setFile] = useState();

    const UploadFile = (e) => {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = (e) => {
        setFile(e.target.result);
      };
      console.log("file->", file)
    };
    



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
       {/* <img src={file} alt="Img" style={{width:"100%"}}></img> */}
              </div>
        )} 
        <div className={classes.toolbar} />

      </main>

      <AppBar position="fixed" color="default" className={classes.appBar2}>
          <div style={{position:"relative", left:"-160px"}}>
          {/* {file && <img src={file} alt="Img" style={{width:"100px"}}></img>} */}
          </div>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
          <PhotoCameraIcon />
          </IconButton>



          <input
          id="image"
          className="input-hide"
        type="file"
        name="image"
        onChange={UploadFile}
        accept=".jpg,.png"
        style={{display:"none"}}
      ></input>


    <IconButton color="inherit" aria-label="open drawer" >
        <label htmlFor="image"> 
                <PhotoLibraryIcon />
        </label> 
    </IconButton>

    {file && <img src={file} alt="Img" style={{width:"50px"}}></img>}

          <IconButton color="inherit" aria-label="open drawer">
          <MicIcon />
          </IconButton>

          <TextField id="text" className="textareawidth" color="inherit" 
           label="Type here..." variant="outlined" onChange={handleChange}
           InputProps={{
                    endAdornment: (
                    <InputAdornment>
                                                  {/* {file && <img src={file} alt="Img" style={{width:"100px"}}></img>} */}

                        <IconButton >
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </InputAdornment>
                )}}>
                              {file && <img src={file} alt="Img" style={{width:"100px"}}></img>}

                </TextField>

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







