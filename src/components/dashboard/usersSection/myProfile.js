import React from 'react'

function MyProfile(){
    console.log("get local name", localStorage.getItem('username'))
    return(
        <div className="my-profile">
            <div className="my-profile-icon"></div>
            <h1>John Adams</h1>
        </div>
    )
}

export default MyProfile;