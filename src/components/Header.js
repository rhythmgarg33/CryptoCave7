import { AppBar, Container, Typography, Toolbar, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import AutoModal from '../Authentication/AutoModal'
import UserSidebar from '../Authentication/UserSidebar'


const useStyles=makeStyles(()=>({
    title: {

    flex: 1,
    color: "#1A5276 ",
    fontFamily: "arial black",
    fontWeight: "bold",
    cursor: "pointer",
    }
}))

const Header = () => {
    const classes=useStyles()
const history = useHistory();

const {currency, setCurrency,user} = CryptoState();



   return(
       <>
       <AppBar color='transparent' position="static">
           <Container>
               <Toolbar>
                   <Typography
                   onClick={()=>history.push("/")}
                   className={classes.title}
                   variant='h5'
                   >
                       CRYPTO CAVE
                   </Typography>
                   <Select
                   variant="outlined"
                   style={{
                       width: 100,
                       height: 50,
                       marginRight: 15,
                   }}
                   value={currency}
                   onChange={(e)=> setCurrency(e.target.value)}
                   >
                       <MenuItem value={"USD"} >USD</MenuItem>
                       <MenuItem value={"INR"} >INR</MenuItem>
                       <MenuItem value={"EUR"} >EUR</MenuItem>
                      
                   </Select>
                   {user? <UserSidebar/>:<AutoModal/>}
               </Toolbar>
           </Container>

       </AppBar>
       </>
   )
}

export default Header
