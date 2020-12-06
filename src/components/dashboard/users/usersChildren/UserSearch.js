import React,{useState , useContext} from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {Context} from '../../../Context'

function UserSearch(){
    // const [connections,setConnections] = useState([])
    // const socket = useContext(Context).socket;
    // function search(e){
    //     if(e.target.value.length !== 0){
    //         socket.emit('user-search', e.target.value)
    //     }else{
    //         setUsers(connections)
    //     }
    // }
    return(
        // <TextField /*onChange={search}*/ fullWidth label="Search of users..." variant="filled" InputProps={{
        //     endAdornment: (
        //     <InputAdornment>
        //         <SearchIcon />
        //     </InputAdornment>
        //     )
        // }} />
        <TextField
          label="Search"
        //   onChange={search}
          id="outlined-margin-dense"
          style = {{width: "95%", margin:"0, 5px!important"}}
          margin="dense"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                  <SearchIcon />
              </InputAdornment>
            )
          }}
        />
    )
}

export default UserSearch