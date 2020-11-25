import React,{useState, useContext, useEffect} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@material-ui/core/styles';
import Users from './usersSection/users';
import Messages from './messageSection/messages';
import {Context} from '.././Context'
import useStyles from './dash.styles'


function Dashboard() {
  const socket=useContext(Context).socket;
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
console.log("socket", socket)


  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <Users/>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Messages 
      drawer={drawer}
      mobileOpen={mobileOpen}
      theme={theme}
      handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
}


export default Dashboard;
