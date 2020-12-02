import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/authPage/login';
import SignUp from './components/authPage/register';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/PrivateRoute';
import {Context} from './components/Context'
import './App.css'
import io from "socket.io-client"
const socket = io("http://localhost:5000")


function App() {
  const [receiver, setReceiver] = useState('')
  return (
    <div className="App">
      <Router>
        <Switch>
          <Context.Provider value={{socket,receiver,setReceiver}}>
              <Route  exact path="/" component={Login}/>
              <Route  path="/signup" component={SignUp}/>
              <PrivateRoute path="/dashboard" component={Dashboard}/>
          </Context.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
