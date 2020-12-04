import React, { useEffect, useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Modal from 'react-modal'
import axiosWithAuth from '../../../axiosWithAuth';

Modal.setAppElement('#root')

function MyProfile(){
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

            <div className="my-profile-icon"></div>
            
            <p>Bobby</p>

            <div className="my-profile-action-icons">
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