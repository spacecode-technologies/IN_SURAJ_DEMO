import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Recipient from '../pages/Manage/recipient'
import User from '../pages/Manage/user'
import Private from '../Private'

const Routes = () => {
    return (
        <BrowserRouter>
    <Switch>
        <Private exact path="/Dashboard/manage/user" component={User}/>
        <Private exact path="/Dashboard/manage/recipient" component={Recipient}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes