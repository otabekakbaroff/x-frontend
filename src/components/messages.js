import React,{useEffect,useContext} from 'react'
import {Context} from './Context'
function Messages(){
    const socket=useContext(Context).socket;
    function send(){
        let chatbox = document.querySelector(".chat-box")
        let message = document.querySelector(".text").value
        socket.emit('private',{username:localStorage.getItem('username'),message:message})
        chatbox.innerHTML +='<p>'+message+'</p>'
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
    useEffect(()=>{
        let chatbox = document.querySelector(".chat-box")
        socket.on('private', function(data){
            chatbox.innerHTML +='<h3>'+data.username+'</h3>'
            chatbox.innerHTML +='<p>'+data.message+'</p>'
            chatbox.scrollTo(0, chatbox.scrollHeight);
        })  
    },[socket])
    return(
        <div className="messages">
            <h1>Messages</h1>
            <div className="chat-box"></div>
            <input className="text"/>
            <button onClick={send}>send</button>
        </div>
    )
}

export default Messages








