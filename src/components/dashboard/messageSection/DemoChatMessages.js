import React from 'react'

export default function DemoChatMessages() {
    const chatbubbles={
        width:"330px",
        background:"white",
        borderRadius: "10px",
        margin:10,
        padding:10
    }
    const avatar={
        width:"50px",
        height:"50px",
        borderRadius:"50%",
    }
    const chatContainer={
        display:"inline-flex"
    }
    return (
        <div className="contactprofile" style={{display:"grid"}}>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>Facere, inventore molestias iste cumque itaque, </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>ea id commodi necessitatibus labore expedita nulla incidunt dolore</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}> accusantium adipisci libero eius nam consequuntur ex?</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>Facere, inventore molestias iste cumque itaque, </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>ea id commodi necessitatibus labore expedita nulla incidunt dolore</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}> accusantium adipisci libero eius nam consequuntur ex?</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>Facere, inventore molestias iste cumque itaque, </div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}>ea id commodi necessitatibus labore expedita nulla incidunt dolore</div></div>
            <div className="nthType"style={chatContainer}><div className="avi" style={avatar}></div><div style={chatbubbles}> accusantium adipisci libero eius nam consequuntur ex?</div></div>

        </div>
    )
}
