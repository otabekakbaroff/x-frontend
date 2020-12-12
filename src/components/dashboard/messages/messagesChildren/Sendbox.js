import React,{useEffect,useContext, useState} from 'react'
import {Context} from '../../../Context'
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import Toolbar from '@material-ui/core/Toolbar';

import AppBar from '@material-ui/core/AppBar';

import {stringToColor} from '../../../resources/utils/stringToColor';
import useStyles from '../../../../styles/dash.styles';
import {chatbubbles, imgbubble, chatContainer, avatar} from '../../../../styles/chatstyles'


function SendBox(){
    const classes = useStyles();
    const [activeButton,setActiveButton] = useState([]);
    const [message, setMessage]=useState({
      // username:localStorage.getItem('username'), 
      // receiver_username:localStorage.getItem('receiver-username'),
      // message:"",
      // date:Date.now()
      
        from: localStorage.getItem('username'),
        to: localStorage.getItem('receiver-username'),
        message: "",
        date: Date.now()
       
    })
    const socket = useContext(Context).socket;



    function send(e){
      setMessage({
        ...message,
        date:Date.now()
      })
      let chatbox = document.querySelector(".contactprofile")
      let message1 = document.querySelector("#text").value
      socket.emit('private',message, {date:Date.now()})
      // socket.emit('private',{from:localStorage.getItem('username'),to:localStorage.getItem('receiver-username'),message:message,date:Date.now()})
 
      chatbox.innerHTML += `<div class="nthType" data-value="myname" style="`+chatContainer+`">
        <div class="avi" data-aviavi style="`+avatar("myname")+`">${localStorage.getItem('myname')[0].toUpperCase()}</div>
        <div class="bubble" style="`+chatbubbles+`">
        ${message1}</div></div>`

    //     chatbox.innerHTML += `<div class="nthType ${classes.data_name}" data-value="myname">
    //     <div class="avi ${classes.avi_pic}" style="background: ${stringToColor(localStorage.getItem('myname'))}">${localStorage.getItem('myname')[0].toUpperCase()}</div>
    //     <div class="bubble ${classes.bubble_style}">
    // ${message1}
    //     </div>
    //     </div>`


        document.querySelector("#text").value="";
        document.documentElement.scrollTop = document.documentElement.scrollHeight;


  }


    const handleChange = (e) =>{
      // if(e.target.value){
      //     setActiveButton({fill: "#478dff",transform: `rotate(-45deg)`})
      // }else{
      //     setActiveButton({})
      // }
      setMessage({
        ...message,
        [e.target.name]:e.target.value
      })
  }
    return (
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
    //   onChange={UploadFile}
      accept=".jpg,.png"
      style={{display:"none"}}
    ></input>


  <IconButton color="inherit" aria-label="open drawer" style={{cursor:"pointer"}}>
      <label htmlFor="image"> 
              <PhotoLibraryIcon style={{cursor:"pointer"}} />
      </label> 
  </IconButton>

  {/* {file && <img src={file} alt="Img" style={{width:"50px", borderRadius:"10px"}}></img>} */}

        <IconButton color="inherit" aria-label="open drawer">
        <MicIcon />
        </IconButton>

        <TextField id="text" className="textareawidth" color="inherit" 
         label="Type here..." variant="outlined" 
         name="message"
         onChange={handleChange}
         InputProps={{
                  endAdornment: (
                  <InputAdornment>
                                                {/* {file && <img src={file} alt="Img" style={{width:"100px"}}></img>} */}

                      <IconButton >
                          <EmojiEmotionsIcon />
                      </IconButton>
                  </InputAdornment>
              )}}>
                            {/* {file && <img src={file} alt="Img" style={{width:"100px"}}></img>} */}

              </TextField>

<IconButton id="send-button"  
onClick={send}
>
                      <SendIcon 
                      style={activeButton}
                      />
                  </IconButton>
      </Toolbar>
    </AppBar>
        // <div className="send-box">
        //         <IconButton >
        //             <PhotoCameraIcon />
        //         </IconButton>
        //         <IconButton >
        //             <PhotoLibraryIcon />
        //         </IconButton>
        //         <IconButton >
        //             <MicIcon />
        //         </IconButton>
        //         <TextField  id="text" className="textareawidth" label="Type here..." variant="outlined" /*onChange={handleChange}*/ InputProps={{
        //             endAdornment: (
        //             <InputAdornment>
        //                 <IconButton >
        //                     <EmojiEmotionsIcon />
        //                 </IconButton>
        //             </InputAdornment>
        //         )}}/>
        //         <div className="send-button-box">
        //             <IconButton type="Submit" id="send-button"  /*onClick={send}*/>
        //                 <SendIcon type="Submit" /*style={activeButton}*/ id="send-icon"/>
        //             </IconButton>
        //         </div>
        //     </div>
    )
}


export default SendBox;
