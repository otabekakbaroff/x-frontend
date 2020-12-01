import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

export default function EditMyProfile({clickContact}) {
    const name = localStorage.getItem('myname')
    return (
        <div >
        <div className="edit-my-profile" style={{width:"150px!important"}}>
            <div className="my-profile-icon"></div>
            <h1>{name}</h1>
        </div>
            </div>

    )
}
