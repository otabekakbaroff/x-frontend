import {stringToColor} from '../resources/utils/stringToColor'

export const chatbubbles=`
max-width: 330px;
background: white ;
border-radius:  20px 20px 0px;
margin:10px;
padding:10px;
box-shadow:  1px 2px 6px 6px rgb(0 0 0 / 0%), -1px 1px 5px 0px rgb(0 0 0 / 8%), 0px 1px 10px 0px rgb(255 21 248 / 6%) 
`
export const imgbubble=`
max-width: 330px ;
background: white ;
border-radius:  20px 20px 0px 20px ;
margin:10px;
padding:0;
box-shadow:  1px 2px 6px 6px rgb(0 0 0 / 0%), -1px 1px 5px 0px rgb(0 0 0 / 8%), 0px 1px 10px 0px rgb(255 21 248 / 6%) 
`

export const chatContainer=`
display:inline-flex
`  

export const avatar=(name)=>`
width:50px;
height:50px;
border-radius:50%;
margin-top:35px;
color: white;
font-size: 2.5em;
background:${stringToColor(localStorage.getItem(name))}
`