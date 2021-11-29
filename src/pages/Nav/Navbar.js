import {
  AppBar,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
  Divider,
} from "@material-ui/core";
import { Notifications, Refresh } from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import { Navcomp } from "./navcomp";
import image from "../../Image/img.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    height: "4.6rem",
  },

  list: {
    backgroundColor: theme.palette.primary.dark,
    margin: 0,
  },

  button: {
    color: theme.palette.common.white,
    // fontSize:"25px",
    // padding:0,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.info.light,
      boxShadow: "none",
      color: theme.palette.primary.dark,
    },
  },
}));

export default function ButtonAppBar(props) {
  const { handleMenu } = props;
  const classes = useStyles();
  // const [open1, setopen1] = useState(false);

  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <List className={classes.list} data-testid="List">
              <ListItem
                button
                onClick={handleMenu}
                className={classes.loginList}
              >
                <img
                  src={image}
                  alt="lebal"
                  height="45rem"
                  width="188em"
                />
              </ListItem>
            </List>
            <Divider orientation="vertical" flexItem />
            <Typography
              variant="h5"
              color="primary"
              component="div"
              style={{ flexGrow: 1, marginLeft: 20, fontWeight: "bold" }}
            >
              {location.pathname}
            </Typography>
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
              <Refresh />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Navcomp />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
