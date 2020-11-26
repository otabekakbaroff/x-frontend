import MyProfile from './myProfile';
import MyContacts from './myContacts';

function Users({loggedName, clickUserContact,setClickUserContact}){

    return(
        <div className="users">
            <MyProfile loggedName={loggedName}/>
            <MyContacts clickUserContact={clickUserContact} setClickUserContact={setClickUserContact}/>
        </div>
    )
}


export default Users