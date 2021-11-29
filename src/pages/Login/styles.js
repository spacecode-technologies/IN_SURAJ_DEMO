
import { makeStyles } from '@material-ui/core';
export const useLoginPageStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    height: 530,
    borderRadius: '10px',
    margin: '0 auto',
    marginTop: 100,
    backgroundColor: theme.palette.secondary.contrastText
},
copyrightText: {
  color: theme.palette.text.secondary,
  marginTop: 20,
  marginBottom: 5
}, 
typographyH6: {
  color: theme.palette.gray,
  fontWeight: '600',
  marginTop: 20,
  marginBottom: 10
},
typographySubtitle: {
  textAlign: 'left',
  width: 250,
  margin: '0 auto',
  color: theme.palette.gray,
  fontWeight: '400'
},



    add: {
      background: "#281736",
      borderRadius: "5px 5px 0px 0px",
      color: "rgba(48, 44, 44, 0.13)",
    },
    logoContainer: {
      backgroundColor: "#281736",
      width: '100%',
      height: '90px',
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px', 
     
  },
  submitBtn: {
    width: 285,
    marginTop: 15,
    padding: '15px'
    
},
loginBtnContainer: {
  marginTop: 60
},
forgotPasswordText: {
  cursor: 'pointer',
  color:"blue"
},
  inputLabel: {
    marginBottom: 5,
    fontSize: '14px',
    color: theme.palette.gray
  
},
secureLoginContainer: {
  marginTop: 20
},
passwordInputBox: {
  marginTop: 35
},
loginCardGrid: {
  marginTop: 60,
  justifyContent:"center"
},
  }));
  