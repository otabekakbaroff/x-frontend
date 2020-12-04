import React from 'react'



function ChatBox(){
    return(
        <div className="chat-box">
            {/* {myMessages.map(item=>(
                <div key={Math.floor(Math.random()*99999999)} className={`${item.from === localStorage.getItem('username')}`}>
                    <p>{item.message}</p>
                </div>
            ))} */}
        </div>
    )
}

export default ChatBox;