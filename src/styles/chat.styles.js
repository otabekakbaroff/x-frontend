import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    chatbox:{
        paddingBottom:"100px",
        paddingTop:"25px",
        marginTop:"65px", 
    },
    contact_profile:{display:"grid"},
    data_name:{display:"inline-flex"},
    avi_pic:{
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        marginTop:"35px",
        color: "white",
        fontSize: "2.5em",
    },
    bubble_style:{
        maxWidth: "330px",
        background: "white" ,
        borderRadius:  "20px 20px 0px",
        margin:"10px",
        padding:"10px",
        boxShadow:  "1px 2px 6px 6px rgb(0 0 0 / 0%), -1px 1px 5px 0px rgb(0 0 0 / 8%), 0px 1px 10px 0px rgb(255 21 248 / 6%)" 
    }
  }));
  