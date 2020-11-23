import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './dash.styles'
import Users from './usersSection/users';
import Messages from './messageSection/messages';

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOpen, setIsOpen]=useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
        <div className="dashboard">
            <Users/>
        </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <div>
    <div className={classes.root}>
      <CssBaseline />
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

        <Messages 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        />
    </div>

    </div>
  );
}


export default Dashboard;

