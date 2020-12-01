import React,{useState, useContext, useEffect} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@material-ui/core/styles';
import Users from './usersSection/users';
import Messages from './messageSection/messages';
import {Context} from '.././Context'
import useStyles from './dash.styles'


function Dashboard() {
    const [clickUserContact, setClickUserContact]=useState()
    const [mobileOpen, setMobileOpen] = useState(false);
    const [switchPage, setSwitchPage] = useState("default")
  const socket=useContext(Context).socket;
  const loggedName=useContext(Context).loggedName
  const classes = useStyles();
  const theme = useTheme();
  useEffect(()=>{
    socket.on('confirm', function(data){
        localStorage.setItem('username', data)
    })
    socket.on('reconnect', function(data){
        console.log(data)
        socket.emit('reconnection',localStorage.getItem('username'))
    })
    console.log("CHAT is on")
},[socket])




  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <Users 
      clickUserContact={clickUserContact}
      switchPage={switchPage}
      setSwitchPage={setSwitchPage}
      setClickUserContact={setClickUserContact}
      loggedName={loggedName}/>
      
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Messages 
      switchPage={switchPage}
      setSwitchPage={setSwitchPage}
      drawer={drawer}
      mobileOpen={mobileOpen}
      theme={theme}
      handleDrawerToggle={handleDrawerToggle}
      clickUserContact={clickUserContact}
      setClickUserContact={setClickUserContact}
      />
    </div>
  );
}


export default Dashboard;
