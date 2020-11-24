import React,{useState} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@material-ui/core/styles';
import Users from './usersSection/users';
import Messages from './messageSection/messages';
import useStyles from './dash.styles'


function Dashboard() {
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
