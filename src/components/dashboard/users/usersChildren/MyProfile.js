import React, { useEffect, useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Avatar from '@material-ui/core/Avatar';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsIcon from '@material-ui/icons/Notifications';

import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Modal from 'react-modal'
import axiosWithAuth from '../../../axiosWithAuth';

Modal.setAppElement('#root')

function MyProfile(){
    const name = localStorage.getItem('myname')
    const [modal,setModal] = useState(false)
    const [friend_requests,setFriend_requests] = useState([])

    useEffect(()=>{
        axiosWithAuth().post('/api/connections/friend-requests', {username:localStorage.getItem('username')})
        .then(response =>{
            setFriend_requests(response.data)
        })
    },[])

    function accept_friend_request(e){
        axiosWithAuth().put(`/api/connections/${e.target.name}/request-reply`, {status:2}).then(resp=>{
            console.log('success')
        })
    }

    function decline_friend_request(e){
        console.log(e.target.name)
        axiosWithAuth().put(`/api/connections/${e.target.name}}/request-reply`, {status:1}).then(resp=>{
            console.log('succes')
        })
    }

    return(
        <div className="my-profile">
        <div style={{display:"inline-flex", width: "100%", padding:"10px"}}>
               <div style={{display:"inline-flex", position: "relative", left: 0, width: "100%" }}>
                <Avatar>{name[0].toUpperCase()}</Avatar>
           <h1>{name}</h1>   
               </div>
               <div style={{display:"inline-flex"}}>

               <IconButton edge="end" color="inherit" 
            //    onClick={()=>setSwitchPage("videocall")}
               >
           <VideoCallIcon />
         </IconButton>

               {/* <IconButton edge="end" color="inherit" 
            //    onClick={()=>setSwitchPage("user-profile-details")}
               >
           <NotificationsIcon />
         </IconButton> */}

         <IconButton onClick={()=>{setModal(true)}}>
                         <NotificationsActiveIcon />
                 </IconButton>
               <Modal
                 isOpen={modal} 
                 onRequestClose = {()=> setModal(false)}
                 closeTimeoutMS={500}
                 style = {
                     {
                         overlay: {
                             backgroundColor: 'grey'
                         },
                         content: {
                            top: '50px',
                            left: '100px',
                            right: '100px',
                            bottom: '50px',
                            color:'rgb(49, 49, 49)'
                         }
                     }
                 }
                 >
                    <div className="friend-request">
                        <h2>Friend Requests</h2>
                        {friend_requests.map(item=>(
                            <div key={item.id} className="friend-request-item">
                                <div className="user-icon"></div>
                                <p>{item.from} wants to be friends with you...</p>
                                <button id="accept-button" onClick={accept_friend_request} name={item.id}>Accept</button>
                                <button id="decline-button" onClick={decline_friend_request} name={item.id}>Decline</button>
                            </div>
                        ))}
                    </div>
                </Modal>




               <IconButton edge="end" color="inherit" 
            //    onClick={()=>setSwitchPage("edit-my-profile")}
               >
           <EditIcon />
         </IconButton>

         <IconButton edge="end" color="inherit" 
        //  onClick={()=>setSwitchPage("add-chat-room")}
         >
           <GroupAddIcon />
         </IconButton>
               </div>
       </div>
       </div>

    )
}


export default MyProfile;