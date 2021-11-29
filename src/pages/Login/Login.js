import React, { useEffect } from "react";
import CONSTANTS from "../../common/constant"
import {
  
  InputLabel,
  Typography
} from "@material-ui/core";
import CustomButton from "../../component/button/Button";
import Sendlogin from "../../redux/actions/action"
import CustomInput from "../../component/input/Input";
import CustomTypography from "../../component/typography/Typography";
import Password from "../../component/password/password";
import CustomChekbox from "../../component/checkbox/checkbox";
import { useHistory, Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import ReactCardFlip from 'react-card-flip';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLoginPageStyles } from './styles';
import { Grid } from "@material-ui/core";
import Image from "../../component/image/Image";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const classes = useLoginPageStyles();
   const dispatch = useDispatch()
  const history = useHistory();
  
  const resp = useSelector((state) => state.Signin);
  // const { loading, error, userInfo } = resp;
  const { loading, err, userInfo} = resp;

  
  
  
const handleemail=(e)=>{
  setemailerrors(false)
setemail(e.target.value)
}

const handleforget=()=>{
    setisForgatPass(!isForgatPass)
    
}

 
// const massage=(err)?err.data.errors.msg:""

  
  
  useEffect(() => {
      if(userInfo){
        // localStorage.setItem('userInfo', JSON.stringify(userInfo));
        // localStorage.setItem('isLoggedIn', true);
        console.log(userInfo);
        history.push(userInfo.pathname)
        
      }
      
    
    if(err){
      toast.error(err.data.errors.msg)
      console.log(err.data.errors);
      
    }
    else{
      history.push("/login")
    }

  },[userInfo,err])


  const [change, setchange] = React.useState(false);
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [email, setemail] = React.useState("")
  const [show_hidepass, setshow_hidepass] = React.useState(false);
  const [isForgatPass, setisForgatPass] = React.useState(false);
  const [usernameerrors, setusernameerrors] = React.useState(false);
  const [passworderrors, setpassworderrors] = React.useState(false);
  const [emailerrors, setemailerrors] = React.useState(false)
  // console.log(username);
  const handleChange = (e) => {
    setchange(e.target.checked);
  };
  const handlevalidation=()=>{
    if(username.length===0){
      setusernameerrors(true)
    }
    if(password.length===0){
      setpassworderrors(true)
    }
    if (username.length!==0 && password.length!==0){
      
      
      handleSubmit(username,password)
    }
  }

const handleSubmit=(username,password)=>{
  const post = { username, password };
  dispatch(Sendlogin(post));
  console.log(post)
  setusername("")
  setpassword("")
}
// const onEnterPress=()=>{

// }

// const onKeyDown=((e) => {
//   if (e.key === 'Enter') {
//       onEnterPress();
//   }
// })
  const handlelogin = (e) => {
    e.preventDefault();
    handlevalidation()
    // const post = { username, password };
    // console.log(post);
    // dispatch(Sendlogin(post));
   
  };



  

  const handleusername = (event) => {
    setusernameerrors(false)
    setusername(event.target.value);
    // console.log(e.target.value);
  };
  const handlepassword = (e) => {
    setpassworderrors(false)
    setpassword(e.target.value);
  };

  const validationpass=()=>{
    if(username.length===0){
      setusernameerrors(true)
    }
    if(email.length===0){
      setemailerrors(true)
    }
    if(username.length!==0 && email!==0){
      console.log(username,email);
    }
  }

  const handleforgotpass=(e)=>{
    validationpass()
    // const data = { username, email };
    // console.log(data);
    // dispatch(Sendforgotpass(data));
  }


  


const Submitbutton=(
  <Grid
      item
      className={classes.loginBtnContainer}
  >
    <CustomButton
                mt={0}
                onClick={handleforgotpass}
                children={"SUBMIT"}
                fullWidth
                data-testid={"SubmitButton"}
                variant={"contained"}
                color="primary"
                // Padding={"25px"}
                bgcolor={"#2A2247"}
              />
              </Grid>
)



const Loginbutton=(
  <Grid
      item
      className={classes.loginBtnContainer}
      
  >
    <CustomButton
                mt={20}
                // onClick={handlelogin}
                children={loading ? <CircularProgress color="inherit" size={20} /> : "Login"}
                fullWidth
                type={"submit"}
                data-testid="LoginButton"
                variant={"contained"}
                color="primary"
                // Padding={"25px"}
                bgcolor={"#2A2247"}
                onKeyDown
                
              />
              </Grid>
)
const forgotpass=(
  ( <div><Grid className={classes.logoContainer} container direction="row" alignItems="center" >
<Image/></Grid>

{/* <Box  p={10} pb={6} pt={1}> */}
<Typography variant="h5" color="textSecondary" align="center" className={classes.typographyH6}>Forgot Your Password ?</Typography>
<Typography variant="subtitle2" color="textSecondary" align="center" className={classes.typographySubtitle}>Don't worry. Recovering the password is easy. Just tell us the email address you have registered with BloodSpace.</Typography>
        {/* </Box> */}
        <Grid container style={{marginBottom:"50px", marginTop:"10px"}} direction="row"  alignItems="center" className={classes.loginCardGrid} >
<Grid item>


<InputLabel className={classes.inputLabel}>Username</InputLabel>
  <CustomInput
      name="userName"
      
      value={username}
      // data-testid={"username"}
      inputProps={{ "data-testid": "username" }}
      onChange={handleusername}
      className="input"
      size="md"
      focus={true}
      error={usernameerrors?true:false}
      helperText={usernameerrors && "*username required"}
  />
</Grid>

<Grid item className={classes.passwordInputBox}>
  <InputLabel className={classes.inputLabel}>email</InputLabel>
  <CustomInput
      name="email"
      value={email}
      // data-testid={"email"}
      inputProps={{ "data-testid": "email" }}
      onChange={handleemail}
      error={emailerrors?true:false}
      helperText={emailerrors && "*email required"}
      
      size="md"
      focus={true}
  />



{Submitbutton}
</Grid>
</Grid></div>)
)







const mainpage=( <div>
  
  <Grid className={classes.logoContainer} container direction="row" alignItems="center" justifyContent="center" >
<Image/>
</Grid>  
<form onSubmit={handlelogin}>
  <Grid container style={{marginBottom:"50px", marginTop:"50px"}} direction="row" alignItems="center" className={classes.loginCardGrid} >
            <Grid item>

<InputLabel className={classes.inputLabel}>Username</InputLabel>
  <CustomInput
      name="userName"
      // type={"text"}
      type="text"
      value={username}
      // data-testid={"usernames"}
      inputProps={{ "data-testid": "usernames" }}

      label="username"
      onChange={handleusername}
      size="md"
      focus={true}
      error={usernameerrors?true:false}
      helperText={usernameerrors && "*username required"}
      // error
      // helperText={"username required"}
  />
</Grid>

<Grid item className={classes.passwordInputBox}>
  <InputLabel className={classes.inputLabel}>Password</InputLabel>
  <Password
      name="password"
      size="md"
      // data-testid={"Password"}
      inputProps={{ "data-testid": "Password" }}
      value={password}
      error={passworderrors?true:false}
      helperText={passworderrors && "*Password required"}
      autoFocus
      onChange={handlepassword}
      
  />
</Grid>

<Grid item className={classes.secureLoginContainer} >
  <Grid container direction="row" alignItems="center" spacing={4}>
      <Grid item>
      <CustomChekbox onChange={handleChange} className="suraj" checked={change?true:false} label={"Secure login"} />
      
      </Grid>
      <Grid item>
      <CustomTypography
                  variant="subtitle2"
                  
                  className={classes.forgotPasswordText}
                  onClick={handleforget}
              > {"Forgot Password ?"}  </CustomTypography>
              
      </Grid>
      </Grid>
      
  
{Loginbutton}
</Grid>

</Grid>
</form>
</div>)


  return (
   
    <>
    <ReactCardFlip isFlipped={isForgatPass} flipDirection="vertical">
    <Grid container direction="row"  alignItems="center" justifyContent="center">
     
    {/* <div style={{display:"flaskalignContent:"center"}}>{massage}</div> */}
    <div className={classes.root}>
    
            {mainpage}
            
            </div>
      
    </Grid>
    <Grid container direction="row" alignItems="center" justifyContent="center">
    
    <div className={classes.root}>
      {forgotpass}
      </div>
    </Grid>
</ReactCardFlip>                    

<Typography className={classes.copyrightText} variant="body2"  align="center">
Copyright © 
                <Link color="inherit" style={{textDecoration:"none", color:"gray"}}  to="https://spacecode.com/">
                Spacecode Healthcare S.A.
                </Link>{' '}
                {new Date().getFullYear()} All rights reserved.
            </Typography>
            </>
            
  );
};
export default Login;



