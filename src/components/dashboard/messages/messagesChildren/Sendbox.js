import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function SendBox(){
    return (
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
                <TextField  id="text" className="textareawidth" label="Type here..." variant="outlined" /*onChange={handleChange}*/ InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton >
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </InputAdornment>
                )}}/>
                <div className="send-button-box">
                    <IconButton type="Submit" id="send-button"  /*onClick={send}*/>
                        <SendIcon type="Submit" /*style={activeButton}*/ id="send-icon"/>
                    </IconButton>
                </div>
            </div>
    )
}


export default SendBox;




