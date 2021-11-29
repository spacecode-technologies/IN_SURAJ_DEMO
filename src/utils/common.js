 const getuser=()=>{
    const user=localStorage.getItem("userInfo")
    if(user) {return JSON.parse(user);}
    else{ return null; }
    }
const gettoken=()=>{
        return localStorage.getItem("userInfo")||null
    }
    
const removeuser=()=>{
        localStorage.removeItem("userInfo")
    }


    export {getuser,gettoken,removeuser}