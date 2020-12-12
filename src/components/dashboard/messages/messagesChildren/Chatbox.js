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
import axiosWithAuth from '../../../axiosWithAuth';
import { chatContainer } from '../../../../styles/chatstyles';
import {stringToColor} from '../../../resources/utils/stringToColor';
import useStyles from '../../../../styles/chat.styles'


function Chatbox(){
    const classes = useStyles();
    const [activeButton,setActiveButton] = useState([]);
    const socket = useContext(Context).socket;
    const result = useContext(Context).result;
    const setResult = useContext(Context).setResult;

    // function send(){
    //     let chatbox = document.querySelector(".chat-box")
    //     let message = document.querySelector("#text").value
    //     socket.emit('private',{from:localStorage.getItem('username'),to:localStorage.getItem('receiver-username'),message:message,date:Date.now()})
    //     let textnode = document.createElement("p");
    //     textnode.innerHTML = message;
    //     textnode.classList.add('true')
    //     chatbox.appendChild(textnode);
    //     chatbox.scrollTo(0, chatbox.scrollHeight);
    // }

    // useEffect(()=>{
    //     let chatbox = document.querySelector(".chat-box")
    //     socket.on('private', function(data){
    //         console.log(data)
    //         let textnode = document.createElement("p");
    //         textnode.innerHTML = data.message;
    //         textnode.classList.add('false')
    //         chatbox.appendChild(textnode);
    //         chatbox.scrollTo(0, chatbox.scrollHeight);
    //     })
    // },[socket])

    // const handleChange = (e) =>{
    //     if(e.target.value){
    //         setActiveButton({fill: "#478dff",transform: `rotate(-45deg)`})
    //     }else{
    //         setActiveButton({})
    //     }
    // }

    return(
        <div>

        <div className={`chat-box ${classes.chatbox}`}>
        {/* <div className="chat-box"> */}

        
        {result&& result.map(item=>(
          <div key={item.id} className ={`contactprofile ${classes.contact_profile}`}>
        <div className={`nthType ${classes.data_name}`}
         data-value={item.from===localStorage.getItem("receiver-username")?"theirname":"myname"}
        >
            <div className={`avi ${classes.avi_pic}`} style={{background:`${stringToColor(item.from)}`}}>{item.from[0].toUpperCase()}</div>
            <div className={`bubble ${classes.bubble_style}`}>
        {item.message}
            </div>
            </div>
            </div>
        ))}

        </div>
        </div>
    )
}

export default Chatbox
