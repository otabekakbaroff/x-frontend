import React, { useEffect, useState,useContext } from 'react';
import {Context} from '../../../Context'
import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axiosWithAuth from '../../../axiosWithAuth';

// function Header({window}){
//     const receiver=useContext(Context).receiver;
//     const theme=useContext(Context).theme;
//     const [myMessages,setMyMessages] = useState([])
//     // useEffect(()=>{
//     //     axiosWithAuth().post(`/api/messages/my-messages`,{from:localStorage.getItem('receiver-username'),to:localStorage.getItem('username')}).then(result=>{
//     //         setMyMessages(result.data)
//     //     })
//     // },[receiver])


import PersonAddIcon from '@material-ui/icons/PersonAdd';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import useStyles from '../../../../styles/dash.styles'
import Users from '../../../../../src/components/dashboard/users/Users';

function Header({window, drawer, clickUserContact, setSwitchPage}){
    const receiver=useContext(Context).receiver;
    const [myMessages,setMyMessages] = useState([])
    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;
    const theme= useContext(Context).theme;
    const handleDrawerToggle= useContext(Context).handleDrawerToggle;
    const mobileOpen= useContext(Context).mobileOpen;
    const [login, setLogin]=useState({
      username:'ebi123',
      chatted_last: localStorage.getItem('receiver-username')

    })


    const logoff=()=>{
      console.log("logoff")
      axiosWithAuth().put('/api/users/last-convo', login)
      .then(response=>{
        console.log("response", response)
        setLogin(response)
        localStorage.clear()
        console.log("bye")})
      .catch(err=>{
            console.log(err);
      })
    }

    console.log("heyyy",)

    return (
        <div>
            <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
    <Avatar 
    onClick={()=>setSwitchPage("user-profile-details")}
    // onClick={clickContact} 
    className={classes.orange}>{clickUserContact&&clickUserContact[0].toUpperCase()}</Avatar>
          <Typography variant="h6" noWrap>

            {/* {clickUserContact?clickUserContact:"Main Room"} */}
            {receiver || localStorage.getItem('receiver-username')}

          </Typography>

          <div className={classes.grow2} />
          <button onClick={logoff}>Logoff</button>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          {/* <IconButton color="inherit">
          <PersonAddIcon/>
          </IconButton> */}
          <IconButton color="inherit" onClick={()=>setSwitchPage("call")}>
          <CallIcon />
          </IconButton>
          <IconButton color="inherit" onClick={()=>setSwitchPage("videocall")}>
          <VideocamIcon/>
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
            hidden
          
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
                            <IconButton className={classes.drawerHeader}
                onClick={handleDrawerToggle}
                >
      <ChevronLeftIcon />
    </IconButton>
           
            {drawer}
            <Users/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          > 
            {drawer}
            <Users/>
          </Drawer>
        </Hidden>
      </nav>
            
        </div>
    )
}

export default Header;