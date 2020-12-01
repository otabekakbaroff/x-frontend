import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

export default function AddChatRoom({clickContact}) {
    return (
        <div >
  <form style={{ display:"inline-grid"}}>
  <input 
  class="field" 
  id="full_name" 
  name="full_name" 
  placeholder="e.g. John Doe" 
  title="Enter your name" 
  type="text" 
//   value="" 
  style={{border: "1px solid",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px"}}
  required/>
      <input 
       style={{border: "1px solid",
       margin: "10px",
       padding: "10px",
       borderRadius: "10px"}}
      class="field" 
      id="subject" 
      name="subject" 
      placeholder="e.g. Question about my policy" 
      title="Enter your policy number" 
      type="text" 
    //   value=""
      />


<select 
  style={{border: "1px solid",
  margin: "10px",
  padding: "10px",
  borderRadius: "10px"}}

class="field" id="room" name="room" placeholder="select room" title="Select Room" type="text" value="" required>
        <option value="volvo">Private</option>
        <option value="saab">Public</option>
        </select>


        <button
               style={{border: "1px solid",
               margin: "10px",
               padding: "10px",
               borderRadius: "10px"}}
        >Submit</button>        
    </form>

            </div>

    )
}
