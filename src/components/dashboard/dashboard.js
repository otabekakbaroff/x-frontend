import React from 'react'
import Users from './usersSection/users';
import Messages from './messageSection/messages'


function Dashboard(){
    return(
        <div className="dashboard">
            <Users/>
            <Messages/>
        </div>
    )
}

export default Dashboard