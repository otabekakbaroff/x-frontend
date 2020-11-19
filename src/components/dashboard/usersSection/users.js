import React from 'react';
import MyProfile from './myProfile';
import MyContacts from './myContacts';

function Users(){
    return(
        <div className="users">
            <MyProfile/>
            <MyContacts/>
        </div>
    )
}


export default Users