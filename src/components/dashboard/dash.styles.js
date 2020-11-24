import { makeStyles, useTheme } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      // flexGrow: 1,
      // padding: theme.spacing(3),
    },
    text2: {
      padding: theme.spacing(2, 2, 0),
    },
    paper2: {
      paddingBottom: 50,
    },
    list2: {
      marginBottom: theme.spacing(2),
    },
    subheader2: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar2: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      padding:"8px",
      top: 'auto',
      bottom: 0,
    },
    grow2: {
      flexGrow: 1,
    },
    fabButton2: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      background:"orange"
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      margin: theme.spacing(1),
    },
  }));
  