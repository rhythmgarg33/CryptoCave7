import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  first: {
      backgroundColor: "#1A5276 ",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
  },

  

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "25px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
     

    
   
  },


  link1: {
    textDecoration: "none",
    color: "white",
    fontSize: "25px",
    marginRight: "25px",
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
      <Toolbar>
        <Typography
        onClick={()=>history.push("/trend")}
         
            className={classes.link1}>
              
              Trending Coins
              </Typography>

              <Typography
              onClick={()=>history.push("/exchange")}
            className={classes.link}>
              List of Exchanges
              </Typography>

             
            
           
           
          
          
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;