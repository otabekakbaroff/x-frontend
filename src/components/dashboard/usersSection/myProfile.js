import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
function MyProfile(){
    return(
        <div className="my-profile">
            <div className="my-profile-icon"></div>
            <p>Bobby</p>
            <div className="my-profile-action-icons">
                <IconButton >
                        <NotificationsActiveIcon />
                </IconButton>
                <IconButton >
                        <GroupAddIcon />
                </IconButton>
                <IconButton >
                        <VideoCallIcon/>
                </IconButton>
                <IconButton >
                        <EditIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default MyProfile;