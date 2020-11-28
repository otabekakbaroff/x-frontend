import React from 'react'

function MyProfile(){
    const name = localStorage.getItem('myname')

    return(
        <div className="my-profile">
            <div className="my-profile-icon"></div>
            <h1>{name}</h1>
        </div>
    )
}

export default MyProfile;