import {
  Collapse,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import "font-awesome/css/font-awesome.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Data from "../../data";

const useStyles = makeStyles((theme) => ({
  
  drawer: {
    width: 200,
    padding: 10,
    flexShrink: 0,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
 
  drawerPaper: {
    width: 220,
    background: theme.palette.primary.dark,
    top: 60,
  },
  button: {
    color: theme.palette.common.white,
    // fontSize:"25px",
    // padding:0,
    fontWeight: "bold",
    "&:hover,&.active": {
      backgroundColor: theme.palette.info.light,
      boxShadow: "none",
      marginTop:"10px",
      borderRadius:"5px",
      color: theme.palette.primary.dark,
    },
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  loginList: {
    //   paddingLeft:"75px",

    background: theme.palette.primary,
  },
  iconColor:{
    color:"white",
  
  }
}));
const Drawers = (props) => {
  const { openclose, setopenclose } = props;

  const [opendrawerlist, setopendrawerlist] = useState([]);
  const classes = useStyles();

  return (
    <div>
        
              <Drawer
        open={openclose}
        variant="temporary"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar/>
        <List className={classes.drawer}>
          {Data.data.map((x, i) => {
            // var ab=ab+"1"
            // var bc="set"+ab
            let yo = x.path ? x.path : [];
            return (
              <>
                <ListItem
                  Button
                  fullWidth
                  className={classes.button}
                  component={NavLink}
                  to={yo}
                  key={x._id}
                  onClick={() => {
                    setopendrawerlist(
                      !opendrawerlist.includes(x.name) ? [x.name] : []
                    );
                    x.drawerId.length === 0
                      ? setopenclose(false)
                      : setopenclose(true);
                  }}
                >
                  <ListItemIcon className={classes.iconColor}><Icon className={x.icon}/></ListItemIcon>
                  
                  <ListItemText> {x.name}</ListItemText>
                </ListItem>
                {x.drawerId.length > 0 ? (
                  <Collapse in={opendrawerlist[0] === x.name}>
                    <List>
                      {x.drawerId.map((z) => {
                        return (
                          <ListItem
                            component={NavLink}
                            to={z.path}
                            Button
                            fullWidth
                            className={classes.button}
                            onClick={() => {
                              setopenclose(false);

                            }}
                            key={z._id}
                          >
                            <ListItemIcon className={classes.iconColor}><Icon className={z.icon}/></ListItemIcon>
                            <ListItemText>{z.name}</ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Drawers;
