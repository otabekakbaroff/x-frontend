import React,{useEffect,useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import Users from './users/Users';
import Messages from './messages/Messages'
import {Context} from '../Context'
import io from "socket.io-client"
import Header from './messages/messagesChildren/Header';
import Sendbox from './messages/messagesChildren/Sendbox';
import axiosWithAuth from '../axiosWithAuth';

const socket = io("http://localhost:5000")

function Dashboard(){
    const [mobileOpen, setMobileOpen] = useState(false);
    const [receiver, setReceiver] = useState(localStorage.getItem('receiver-username'))
      const [result, setResult]=useState()
    const[loggedName, setLoggedName]=useState()
    const theme = useTheme();

    useEffect(()=>{
        socket.on('confirm', function(data){
            console.log(data)
            localStorage.setItem('username', data)
        })
        socket.on('reconnect', function(data){
            console.log(data)
            socket.emit('reconnection',localStorage.getItem('username'))
        })
    },[socket])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    //   const [result, setResult]=useState()

    //   useEffect(()=>{
    //       setResult()
    //   },[])
      
      const sendme=()=>{
          axiosWithAuth().post('/api/messages/my-messages', {from:localStorage.getItem('username'), to:localStorage.getItem('receiver-username')})
          .then(response =>{
              // setFriend_requests(response.data)
              setResult(response.data)
              console.log("RESPONSE", response)
          })
          console.log("push me")
      }

    // const sendme=()=>{
    //     axiosWithAuth().post('/api/messages/my-messages', {from:localStorage.getItem('username'), to:localStorage.getItem('receiver-username')})
    //     .then(response =>{
    //         // setFriend_requests(response.data)
    //         setResult(response.data)
    //         console.log("RESPONSE", response)
    //     })
    // }

    useEffect(() => {
       axiosWithAuth().post('/api/messages/my-messages', {from:localStorage.getItem('username'), to:localStorage.getItem('receiver-username')})
       .then(response =>{
           setResult(response.data)

        // setFriend_requests(response.data)
        // setResult(response.data)
        // console.log("RESPONSE", response)
        })
    }, [])

    //* DNT USE THIS BELOW 
    // useEffect(()=>{
    //     axiosWithAuth().get(`http://localhost:5000/api/connections/${localStorage.getItem('username')}/friends-list`)
    //     get(`/api/connections/${localStorage.getItem('username')}/friends-list`).then(result=>{
    //         setUsers(result.data)
    //     }).catch(error=>{
    //         console.log(localStorage.getItem('username'))
    //     })
    //     // socket.on('user-search', function(data){
    //     //     setUsers(data)
    //     // })
    // },[/*socket*/]



    return(
        <div className="dashboard">
            <Context.Provider value={{socket,sendme,receiver,result, setResult, theme, setReceiver, setLoggedName, handleDrawerToggle, mobileOpen}}>
                {/* <Users/> */}
                <Messages/>
            </Context.Provider> 
        </div>
    )
}

export default Dashboard




