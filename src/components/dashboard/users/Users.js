import React, { useContext } from 'react';
import MyProfile from './usersChildren/MyProfile';
import MyContacts from './usersChildren/MyContacts';
import UserSearch from './usersChildren/UserSearch';
import { userContext } from '../../../context/UsersContext'

function Users() {

    const { userState } = useContext(userContext);

    return (
        <div className="users">
            <MyProfile />
            <UserSearch />
            {userState.user && <MyContacts />}
        </div>
    )
}


export default Users