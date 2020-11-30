import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

function MyProfile(){
    const name = localStorage.getItem('myname')

    return(
        <div className="my-profile">
            {/* <div className="my-profile-icon"></div>
            <h1>{name}</h1> */}
         <div style={{display:"inline-flex", width: "100%", padding:"10px"}}>
                <div style={{display:"inline-flex", position: "relative", left: 0, width: "100%" }}>
                 <Avatar>{name[0].toUpperCase()}</Avatar>
            <h1>{name}</h1>   
                </div>
                <div style={{display:"inline-flex"}}>
                <IconButton edge="end" color="inherit">
            <EditIcon />
          </IconButton>

          <IconButton edge="end" color="inherit">
            <GroupAddIcon />
          </IconButton>
                </div>
        </div>
        </div>
    )
}

export default MyProfile;