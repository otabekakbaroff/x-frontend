import React,{useEffect,useContext, useState} from 'react'
import {Context} from '../../Context'
import Header from './messagesChildren/Header'
import Chatbox from './messagesChildren/Chatbox'
import Sendbox from './messagesChildren/Sendbox'


function Messages(){
    return(
        <div className="messages">
            <Header/>
            <Chatbox/>
            <Sendbox/>
        </div>
    )
}

export default Messages

