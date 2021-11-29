
import Login from './pages/Login/Login';

import React from 'react';
// import Login from './components/Login'
import { Route,Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Private from './Private';
import Public from './Public';
import Navbar from './pages/Nav/Navbar';
import { Drower } from './pages/Drower';
import User from './pages/Manage/user';
import Recipient from './pages/Manage/recipient';
// import socketClient from 'socket.io-client';

const App = () => {
  // const socket = socketClient();
  return (
    <div data-testid="component">
      <ToastContainer/>

      <Switch>
        
  <Private  path="/dashboard" component={Home}/>
  
  
        {/* <Private exact path="/dashboard/location" component={Location}/> */}
  <Public exact path="*" component={Login}/>
  <Public exact path="/login" component={Login}/>
  
</Switch>



       </div>
  )
}
export default App;