import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import useStyles from '../dash.styles'

function UserProfilerHeader({clickContact,window, handleDrawerToggle, theme, mobileOpen, drawer, clickUserContact, setSwitchPage}){
    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;

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

            {clickUserContact?clickUserContact:"Main Room"}

          </Typography>
          <div className={classes.grow2} />
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
          </Drawer>
        </Hidden>
      </nav>
            
        </div>
    )
}

export default UserProfilerHeader;