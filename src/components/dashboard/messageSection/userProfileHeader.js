import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function userProfilerHeader({clickContact}){
    return (
        <div className="profile-header">
            <div className="profile_details">
                <div className="icon" onClick={clickContact}></div>
                <div className="name"><h1>James Kinno</h1></div>
            </div>
            <div className="comm-icons">
                <IconButton >
                    <PersonAddIcon id="add-person-icon"/>
                </IconButton>
                <IconButton >
                    <CallIcon id="call-icon"/>
                </IconButton>
                <IconButton >
                    <VideocamIcon id="video-call-icon"/>
                </IconButton>
            </div>
            
        </div>
    )
}

export default userProfilerHeader;