// import React from 'react'

// export default function Sendbox() {
//     return (
//         <div style={{height:"200px", background:"yellow"}} >
//             Sendbox
            
//         </div>
//     )
// }

import React from 'react'
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

import useStyles from '../../../../styles/dash.styles';


function SendBox(){
    const classes = useStyles();
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
        //  onChange={handleChange}
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
// onClick={send}
>
                      <SendIcon 
                    //   style={activeButton}
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
