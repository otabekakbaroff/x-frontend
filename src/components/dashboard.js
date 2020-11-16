import React from 'react'
import Users from './users';
import Messages from './messages'


function Dashboard(){
    return(
        <div className="dashboard">
            <Users/>
            <Messages/>
        </div>
    )
}

export default Dashboard