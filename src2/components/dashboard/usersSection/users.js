import MyProfile from './myProfile';
import MyContacts from './myContacts';

function Users({loggedName, clickUserContact,setClickUserContact, switchPage, setSwitchPage}){

    return(
        <div className="users">
            <MyProfile 
                  switchPage={switchPage}
                  setSwitchPage={setSwitchPage}
            loggedName={loggedName}/>
            <MyContacts clickUserContact={clickUserContact} setClickUserContact={setClickUserContact}/>
        </div>
    )
}


export default Users