import React from 'react'

export default function DemoChatMessages() {
    const chatbubbles={
        maxWidth:"330px",
        background:"white",
        borderRadius: "20px 20px 0px 20px",
        border:"1px solid lightgrey",
        margin:10,
        padding:10
    }
    const avatar={
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        marginTop:"35px"
    }
    const chatContainer={
        display:"inline-flex"
    }
    return (
        <div className="contactprofile" 
        style={{display:"grid", }}
        >
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>Facere, inventore molestias iste cumque itaque, </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>ea id commodi necessitatibus labore expedita nulla incidunt dolore</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}> accusantium adipisci libero eius nam consequuntur ex?</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>Facere, inventore molestias iste cumque itaque, </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>ea id commodi necessitatibus labore expedita nulla incidunt dolore</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}> accusantium adipisci libero eius nam consequuntur ex?</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>Facere, inventore molestias iste cumque itaque, </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}>ea id commodi necessitatibus labore expedita nulla incidunt dolore</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}> accusantium adipisci libero eius nam consequuntur ex?</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div className="bubble" style={chatbubbles}> What?</div></div>

        </div>
    )
}
