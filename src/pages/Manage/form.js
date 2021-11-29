import { Grid, Typography,Box, FormControl,RadioGroup, FormLabel,FormControlLabel,Radio } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../component/input/Input";
import Navbar from "../Nav/Navbar";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CustomButton from "../../component/button/Button";

const Form = () => {
  return (
    <div
    >
      {/* <Navbar/> */}
      

      <form style={{ padding: "40px" }}>
        
      <Link to="/Dashboar"><Typography><ArrowBackIosIcon style={{height:"12px"}}/>Back to Customer</Typography></Link>
      <Typography style={{fontSize:"25px"}}>
      Add Customer
      </Typography>

      <Grid container>
      <Grid item xs={5} md={5} lg={5} fullWidth={"fullWidth"} >
       <Typography style={{margin:"5px"}}> First name </Typography>
          <CustomInput fullWidth variant="outlined" disabled="true"  onFocus={"true"}/>
        </Grid>
        <Grid item xs={2} md={2}>
      
        </Grid>
        <Grid item xs={5} md={5}>
        <Typography style={{margin:"5px"}}> Family Name</Typography>
          <CustomInput fullWidth texttransform={"none"}/>
        </Grid>
      </Grid>
      <Grid container style={{marginTop:"10px"}}>
      <Grid item xs={5} md={5} lg={5} fullWidth={"fullWidth"}>
       <Typography style={{margin:"5px"}}> Email Address </Typography>
          <CustomInput fullWidth texttransform={"none"}/>
        </Grid>
        <Grid item xs={2} md={2}>
      
        </Grid>
        <Grid item xs={5} md={5}>
        <Typography style={{margin:"5px"}}> Company Name
</Typography>
          <CustomInput fullWidth texttransform={"none"}/>
        </Grid>
      </Grid>
      <Grid container style={{marginTop:"10px"}}>
      <Grid item xs={12} md={12} lg={12} >
        <Typography style={{margin:"5px"}}> Street
</Typography>
          <CustomInput fullWidth texttransform={"none"}/>
          </Grid>
        </Grid>
        <Grid container>
      <Grid item xs={5} md={5} lg={5} fullWidth={"fullWidth"}>
       <Typography style={{margin:"5px"}}> Street No </Typography>
          <CustomInput fullWidth texttransform={"none"}/>
        </Grid>
        <Grid item xs={2} md={2}>
      
        </Grid>
        <Grid item xs={5} md={5}>
        <Typography style={{margin:"5px"}}> Street 2
</Typography>
          <CustomInput fullWidth />
        </Grid>
      </Grid> <Grid container>
      <Grid item xs={5} md={5} lg={5} fullWidth={"fullWidth"}>
       <Typography style={{margin:"5px"}}> City</Typography>
          <CustomInput fullWidth/>
        </Grid>
        <Grid item xs={2} md={2}>
      
        </Grid>
        <Grid item xs={5} md={5}>
        <Typography style={{margin:"5px"}}> Zip Code
</Typography>
          <CustomInput fullWidth/>
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={5} md={5} lg={5} fullWidth={"fullWidth"}>
       <Typography style={{margin:"5px"}}> Customer Type </Typography>
          <CustomInput fullWidth/>
        </Grid>
        <Grid item xs={2} md={2}>
      
        </Grid>
        <Grid item xs={5} md={5}>
        <Typography style={{margin:"5px"}}> Country</Typography>
          <CustomInput fullWidth/>
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={5} md={5} lg={5} fullWidth={"fullWidth"}>
       <Typography style={{margin:"5px"}}> Contact No </Typography>
          <CustomInput fullWidth/>
        </Grid>
        <Grid item xs={2} md={2}>
      
        </Grid>
        <Grid item xs={5} md={5}>
        <Typography style={{margin:"5px"}}> Office No
</Typography>
          <CustomInput fullWidth/>
        </Grid>
      </Grid>
      <FormControl component="fieldset">
  
  <RadioGroup row aria-label="Rounded Pricing" name="row-radio-buttons-group">
  <FormLabel component="legend" style={{margin:"10px"}}>Rounded Pricing :</FormLabel>
    <FormControlLabel value="Simple" control={<Radio />} label="Simple" />
    <FormControlLabel value="Round up" control={<Radio />} label="Round up" />
    <FormControlLabel value="Round Down" control={<Radio />} label="Round Down" />
  </RadioGroup>
</FormControl>
<div><FormControl component="fieldset">
  
  <RadioGroup row aria-label="Status" name="row-radio-buttons-group">
  <FormLabel component="legend" style={{margin:"10px"}}>Rounded Pricing :</FormLabel>
    <FormControlLabel value="Active" control={<Radio />} label="Simple" />
    <FormControlLabel value="Inactive up" control={<Radio />} label="Round up" />
    {/* <FormControlLabel value="Round Down" control={<Radio />} label="Round Down" /> */}
  </RadioGroup>
</FormControl>
</div>

<CustomButton
 mt={0}
 width={"40px"}
 children={"SUBMIT"}
 
 data-testid={"SubmitButton"}
 variant={"contained"}
 color="primary"
 // Padding={"25px"}
 bgcolor={"#2A2247"}
/>

      
      
      
      </form>
    </div>
  );
};
export default Form;
