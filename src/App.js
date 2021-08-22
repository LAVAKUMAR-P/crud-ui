import './App.css';
import Dashboard from './Dashboard';
import Userslist from './UserList';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { UserProvider } from './Usercontext';
import Createuser from './Createuser';
import Edituser from './Edituser';
import Footer from './Footer';

function App() {
  return (
    <>
  
      <Router>
      
        <Switch>
        <UserProvider>
          <Route path="/" component={Dashboard} exact={true}/>
          <Route path="/" component={Footer} exact={true}/>
          <Route path="/user-list" component={Userslist} exact={true}/>
          <Route path="/create-user" component={Createuser} exact={true}/>
          <Route path="/edit-user/:id" component={Edituser} exact={true}/>
        </UserProvider>  
        </Switch>
       
      </Router>
     
    </>
  );
}

export default App;
