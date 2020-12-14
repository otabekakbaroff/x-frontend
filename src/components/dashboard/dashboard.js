import React, { useEffect, useState, useContext } from 'react'
// globalContext
import { userContext } from '../../context/UsersContext'
import { useTheme } from '@material-ui/core/styles';
import Messages from './messages/Messages'
import { Context } from '../Context'
import io from "socket.io-client"
import axiosWithAuth from '../axiosWithAuth';

const socket = io("http://localhost:5000")

function Dashboard() {
    const [mobileOpen, setMobileOpen] = useState(false);
    // const user = localStorage.getItem('receiver-username')
    const [receiver, setReceiver] = useState('')
    const [users, setUsers] = useState([{ username: 'test' }])
    const [result, setResult] = useState([])
    const [connections, setConnections] = useState([])
    const [loggedName, setLoggedName] = useState()
    const theme = useTheme();

    // read in the user name from globalContext
    const { userState } = useContext(userContext)



    useEffect(() => {
        socket.emit('user-info', localStorage.getItem('username'))
        socket.on('confirm', function (data) {
            console.log(data)
        })
        socket.on('private', function (data) {
            console.log(data)
        })
        socket.on('error', function (data) {
            console.log(data)
        })
    }, [socket])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sendme = () => {
        axiosWithAuth().post('/api/messages/my-messages', { from: localStorage.getItem('username'), to: localStorage.getItem('receiver-username') })
            //   setResult(response.data)
            .then(response => {
                // setFriend_requests(response.data)
                setResult(response.data)
                console.log("RESPONSE", response)
            })
        console.log("push me")
    }


    useEffect(() => {
        axiosWithAuth().post('/api/messages/my-messages', { from: userState.user, to: userState.receiver })
            .then(res => setResult(res.data))
            .catch(err => console.log(err))
    }, [userState.receiver])


    return (
        <div className="dashboard">
            <Context.Provider value={{ socket, sendme, receiver, result, users, setUsers, setResult, theme, connections, setConnections, setReceiver, setLoggedName, handleDrawerToggle, mobileOpen }}>
                <Messages />
            </Context.Provider>
        </div>
    )
}

export default Dashboard




