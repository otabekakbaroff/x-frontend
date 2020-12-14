import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../../../Context'
import { userContext } from '../../../../context/UsersContext'
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
import { stringToColor } from '../../../resources/utils/stringToColor';
import useStyles from '../../../../styles/chat.styles'


function Chatbox() {
    const classes = useStyles();
    const [activeButton, setActiveButton] = useState([]);
    const socket = useContext(Context).socket;
    const result = useContext(Context).result;
    const users = useContext(Context).users;
    const setResult = useContext(Context).setResult;
    const [showMessage, setShowMessage] = useState()
    //globalContext
    const { userState } = useContext(userContext);
    console.log("FROM CHATBOX RESULT IS: ", result)


    const fetchingChat = () => {
        //  return result.map(item=>item.message)

        setTimeout(() => {
            setShowMessage(result)
            return <p>"WAITING FOR THIS TO SET OFF"</p>

            // return result && result.map(item=>item.message)
            // result && result.map(item=>item.message)
        }, 4000);
        return "hello there"
    }

    console.log("the messages", result)

    return (
        <div>

            <div className={`chat-box ${classes.chatbox}`}>
                {/* <div className="chat-box"> */}

                <div>This is supposed to be the chat area</div>
                {/* <div>{users && result ? console.log("just trying this out", result):"Loading..."}</div> */}
                {/* {fetchingChat()} */}
                {result.length > 0 && result.map(item => item.message)}
                {/* {showMessage && showMessage.map(item=>item.message)} */}
                {/* {console.log("result", result && result.map(item=>item))} */}
                {/* {result ? result.map(item=>item.message):"not loaded"} */}


                {/* <div>{result?"it loaded":"it didnt load"}</div> */}

                {/* {result&& result.map(item=>(
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
        ))} */}

            </div>
        </div>
    )
}

export default Chatbox
