import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  first: {
      float: "left",
      backgroundColor: "#1A5276 ",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      
      
      
      
  },

  

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(9.5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
     

    
   
  },


  link1: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
     

    
   
  },
}));

function Navbar() {
  const history = useHistory();
  const classes = useStyles();

  return (
    
    <AppBar position="static" className={classes.first}>
      <CssBaseline />
      <Toolbar className="container">
        
          <div className={classes.navlinks}>
            <Link to="/trend" className={classes.link1}>
              Trending Coins
            </Link>
            <Link to="/exchange" className={classes.link}>
              Exchanges
            </Link>
           
           
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;