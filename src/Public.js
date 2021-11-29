import React from 'react'
// import { render } from 'react-dom'
// import { render } from 'react-dom'
// import { Component } from 'react'
import { Redirect,Route } from 'react-router-dom'
import { gettoken } from './utils/common'
const Public = ({component:Component, ...rest}) => {
    // const gettoken=()=>{
    //     return localStorage.getItem("userInfo")||null
    // }
    return (
        <Route {...rest} render={props=>{
            if(!gettoken()){return <Component {...props}/>} else{return <Redirect to={{pathname:"/dashboard", state:{from:props.location}}}/>}
        }}/>
        
    )
}
export default Public;