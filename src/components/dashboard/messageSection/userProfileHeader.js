import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Users from '../usersSection/users';
import Messages from './messages';
import useStyles from '../dash.styles'

function UserProfilerHeader({clickContact,window, handleDrawerToggle, theme, mobileOpen, drawer}){
    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
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
          <Avatar className={classes.orange}>N</Avatar>
          <Typography variant="h6" noWrap>
            Nolan Moreland
          </Typography>
          <div className={classes.grow2} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
          <PersonAddIcon/>
          </IconButton>
          <IconButton color="inherit">
          <CallIcon />
          </IconButton>
          <IconButton color="inherit">
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
            {/* <div className="profile_details">
                <div className="icon" onClick={clickContact}></div>
                <div className="name"><h1>James Kinno</h1></div>
            </div>
            <div className="comm-icons">
                <IconButton >
                    <PersonAddIcon id="add-person-icon"/>
                </IconButton>
                <IconButton >
                    <CallIcon id="call-icon"/>
                </IconButton>
                <IconButton >
                    <VideocamIcon id="video-call-icon"/>
                </IconButton>
            </div> */}
            
        </div>
    )
}

export default UserProfilerHeader;