import React from 'react';
import MyProfile from './MyProfile';
import MyContacts from './MyContacts';

function Users(){
    return(
        <div className="users">
            <MyProfile/>
            <MyContacts/>
        </div>
    )
}


export default Users