import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { auth, db } from '../firebase';
import { signOut } from "firebase/auth";
import { CryptoState } from '../CryptoContext';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
 container:{
   
    flex:1,
    width:"100%",
    height:"400px",
    display:"flex",
    alignItems:"center",
    marginTop:"100px",
    gap:12,
    overflowX:"scroll"
    
 },
 top:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginLeft:"20px",
    justifyContent:"center"
 },
 logout1:{
    height:"50px",
    width:"50px",
    marginTop:20,
    alignContent:"center",
    backgroundColor:"white"
 },
 vertical:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor:"grey"
 }
 
});

const logout=()=>{
  signOut(auth)
}

export default function UserSidebar() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });
  const {watchlist,coins,fetchCoins} = CryptoState()
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  


  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{backgroundColor:"black",color:"white",border:"1px solid white",width:"90px",height:"42px"}} onClick={toggleDrawer(anchor, true)}>WatchList</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <div className={classes.vertical}>
               <h1 style={{color:"blue"}}>WatchList</h1>
               
          <div className={classes.container}>
          {coins.map((coin) => {
                    if (watchlist.includes(coin.id))
                      return (
                      <div className={classes.top}>
                       <img
                       src={coin.image}
                       height="150px"
                       />
                       <Typography style={{color:"black"}}>{coin.name}</Typography>
                      
                       </div>
                      );
                    else return <></>;
                  })}
          </div>

          <Button
          variant='contained'
          className={classes.logout1}
          onClick={logout}
          >
           LOGOUT
          </Button>
          </div>
          
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
