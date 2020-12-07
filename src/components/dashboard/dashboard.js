import React,{useEffect,useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import Users from './users/Users';
import Messages from './messages/Messages'
import {Context} from '../Context'
import io from "socket.io-client"
import Header from './messages/messagesChildren/Header';
import Sendbox from './messages/messagesChildren/Sendbox';
const socket = io("http://localhost:5000")

function Dashboard(){
    const [mobileOpen, setMobileOpen] = useState(false);
    const [receiver, setReceiver] = useState(localStorage.getItem('receiver-username'))
    const[loggedName, setLoggedName]=useState()
    const theme = useTheme();

    useEffect(()=>{
        socket.on('confirm', function(data){
            localStorage.setItem('username', data)
        })
        socket.on('reconnect', function(data){
            console.log(data)
            socket.emit('reconnection',localStorage.getItem('username'))
        })
    },[socket])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        console.log("I clicked on the menu bar thingy")
      };

      console.log("mobileopen?", mobileOpen)

    return(
        <div className="dashboard">
            <Context.Provider value={{socket,receiver, theme, setReceiver, setLoggedName, handleDrawerToggle, mobileOpen}}>
                {/* <Users/> */}
                <Messages/>
            </Context.Provider> 
        </div>
    )
}

export default Dashboard




