import React, { createContext, useState, useEffect } from 'react';

export const userContext = createContext();

const defaultState = {
    user: '',
    receiver: '',
    friendsList: [],

}

function UserContextProvider(props) {

    const [userState, setUserState] = useState(defaultState);

    useEffect(() => {
        const storageState = localStorage.getItem('userState')
        if (storageState) {
            setUserState(JSON.parse(storageState))
        }
    }, [])

    // perisist data to local storage
    useEffect(() => {
        const stateString = JSON.stringify(userState)
        localStorage.setItem('userState', stateString);
    }, [userState])

    function setUser(userName) {
        setUserState({ ...userState, user: userName })
    }

    function setReceiver(receiverName) {
        setUserState({ ...userState, receiver: receiverName })
    }

    const providerObj = {
        userState,
        setUser,
        setReceiver
    }

    return (
        <userContext.Provider value={providerObj}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider;