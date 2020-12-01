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
import ContactInfo from './contactInfo/ContactInfo'
import Toolbar from '@material-ui/core/Toolbar';



import AppBar from '@material-ui/core/AppBar';

import useStyles from '../dash.styles';
import {chatbubbles, imgbubble, chatContainer, avatar} from '../chatstyles'
import EditMyProfile from '../usersSection/editUser/EditMyProfile';
import AddChatRoom from '../addChatRoom/AddChatRoom';
import CallUser from '../Call/CallUser';
import VideoCall from '../Call/VideoCall';




function Messages({handleDrawerToggle, theme, mobileOpen, drawer, clickUserContact,setClickUserContact, switchPage, setSwitchPage }){
    const [activeButton,setActiveButton] = useState([]);
    const socket=useContext(Context).socket;
    const [isClicked, setIsClicked]=useState(false)
    const classes = useStyles();


    function send(){

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
        <div class="avi" data-aviavi style="`+avatar("myname")+`">${localStorage.getItem('myname')[0].toUpperCase()}</div>
        <div class="bubble" style="`+chatbubbles+`">
        ${message}</div></div>`
        document.querySelector("#text").value="";
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
        setFile()

    }


    useEffect(()=>{
        let chatbox = document.querySelector(".contactprofile")

        socket.on('private', function(data){

            // chatbox.innerHTML+=`${file ?`<div class="nthType" data-myname style="`+chatContainer+`">
            // <div class="bubble" style="`+imgbubble+`">
            //   <img src="https://picsum.photos/200" class="img" style="border-radius:inherit; width: 300px; max-height: 100%!important;"/> </div></div>`:""}`
    
            chatbox.innerHTML += `<div class="nthType" data-theirname style="`+chatContainer+`"><div class="avi" style="`+avatar("receiver-username")+`">${localStorage.getItem('receiver-username')[0].toUpperCase()}</div><div class="bubble" style="`+chatbubbles+`">${data.message}</div></div>`
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

    const clickContact=()=>{
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
    

    const switchPages=()=>{
        if(switchPage == "default"){
            return (        <div
                className="chat-box" style={{paddingBottom:"25px", paddingTop:"25px"}}> 
                <div className ="contactprofile" style={{display:"grid"}}></div>
                       </div>)
        }
        else if(switchPage=="user-profile-details"){
            return <ContactInfo/>
        }
        else if(switchPage == "edit-my-profile"){
            return <EditMyProfile/>
        }
        else if (switchPage == "add-chat-room"){
            return <AddChatRoom/>
        }
        else if (switchPage == "call"){
            return <CallUser/>
        }
        else if (switchPage == "videocall"){
            return <VideoCall/>
        }
    }




    return(
        <div className="messages">
            <ProfileHeader 
            setSwitchPage={setSwitchPage}
            mobileOpen={mobileOpen}
            drawer={drawer}
            setClickUserContact={setClickUserContact}
            clickUserContact={clickUserContact}
            theme={theme}
            handleDrawerToggle={handleDrawerToggle}
            clickContact={clickContact}/>


            <main className={classes.content}>
        <div className={classes.toolbar} />

        {/* <ContactInfo clickContact={clickContact}/> */}


 <div style={{padding: "50px 5%"}}>

{ switchPages()}
</div>


        {/* {isClicked===true ? <ContactInfo clickContact={clickContact}/>: (

           
        <div
       className="chat-box" style={{paddingBottom:"25px", paddingTop:"25px"}}> 
       <div className ="contactprofile" style={{display:"grid"}}></div>
              </div>
        )}  */}
        <div className={classes.toolbar} />

      </main>

      <AppBar position="fixed" color="default" className={classes.appBar2}>
          <div style={{position:"relative", left:"-160px"}}>
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


    <IconButton color="inherit" aria-label="open drawer" style={{cursor:"pointer"}}>
        <label htmlFor="image"> 
                <PhotoLibraryIcon style={{cursor:"pointer"}} />
        </label> 
    </IconButton>

    {file && <img src={file} alt="Img" style={{width:"50px", borderRadius:"10px"}}></img>}

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
