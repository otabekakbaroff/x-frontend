import { makeStyles, useTheme } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const drawerWidth = 25;

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: `${drawerWidth}%`,
        flexShrink: 0,
        // border:"2px solid red"
        // boxShadow:"0px 5px 5px -4px #cacaca"
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}%)`,
        marginLeft: `${drawerWidth}%`,
      },
      background:"white",
      padding: "7px",
      color: "darkgrey",
      boxShadow: "0px 2px 4px -1px rgba(245, 0, 87, 0.04), 0px 4px 5px 0px rgba(245, 0, 87, 0.04), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      // boxShadow:"red"

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
      width: `${drawerWidth}%`,
      boxShadow:"0px 0px 7px -4px rgb(193 169 185 / 87%)"
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
        width: `calc(100% - ${drawerWidth}%)`,
        marginLeft: drawerWidth,
      },
      background:"white",
      boxShadow: "1px 3px 12px 2px rgb(208 184 193 / 44%)",
      padding:"8px",
      top: 'auto',
      color:"darkgrey",
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
      cursor: "pointer"
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
  }));
  