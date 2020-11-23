import React,{useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import useStyles from '../dash.styles'
import { useTheme } from '@material-ui/core/styles';
import Users from '../usersSection/users';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Avatar } from '@material-ui/core';



function UserProfilerHeader({window, mobileOpen,setMobileOpen, handleDrawerToggle}){
    // const [mobileOpen, setMobileOpen] = useState(false);
   
    // const handleDrawerToggle = () => {
    //   setMobileOpen(!mobileOpen);
    // };
 const classes = useStyles();
 const theme = useTheme();

 const drawer = (
    <div className="dashboard">
        <Users/>
    </div>
);
 const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        <AppBar position="fixed" className={classes.appBar}>
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
          <Avatar className={classes.large} style={{margin:"8px"}}>N</Avatar>
          <Typography variant="h6" noWrap>
            Nolan Chickadoo
          </Typography>
          <div className={classes.grow2} />
          <IconButton color="inherit">
            <PersonAddIcon />
          </IconButton>
          <IconButton color="inherit">
            <CallIcon />
          </IconButton>
          <IconButton color="inherit">
            <VideocamIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>

          

        </Toolbar>
      </AppBar>


      </>

    )
}

export default UserProfilerHeader;