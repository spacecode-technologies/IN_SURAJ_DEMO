import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, useHistory,Switch } from 'react-router-dom';
import Private from '../../Private';
import {removeuser} from "../../utils/common";
import Recipient from '../Manage/recipient';
import User from '../Manage/user';
import Drawers from '../Nav/Drawer';
import Navbar from "../Nav/Navbar"
import Location from "../location/Location"
import Notfound from '../notfound';
import Dashboard from "../dashboard/Deshboard"



const Home = () => {
    const [openclose, setopenclose] = useState(false);
    const handleMenu = () => {
        setopenclose(true)
      };
    
    
    return (
        <div>
            <div className="grid_container">
    <header className="raw">
            <Navbar handleMenu={handleMenu} />
            </header>
        <Drawers openclose={openclose} setopenclose={setopenclose}/>
        
            <main onClick={()=>setopenclose(false)}>
            <Switch>
            <Private exact path="/dashboard" component={Dashboard}/>  
        <Private exact path="/dashboard/manage/user" component={User}/>
        <Private exact path="/dashboard/manage/recipient" component={Recipient}/>
        <Private exact path="/dashboard/location" component={Location}/>
        <Private exact path="/dashboard/*" component={Notfound}/>
        </Switch>
        </main>
        </div>
        </div>
    )
}
export default Home