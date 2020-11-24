import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

export default function ContactInfo({clickContact}) {
    return (

            <div className="contactprofile" style={{padding:"20%", position:"fixed", height:"100%"}}>
                <div style={{fontSize:"3em", position:"relative", float:"right", top:"-35px"}}
                onClick={clickContact}
                ><CancelIcon/></div>
            <div><h1>Hello there PROFILE INFO </h1></div>
            </div>

    )
}
