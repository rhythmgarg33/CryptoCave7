import React from 'react'
import {Container, makeStyles, Typography} from '@material-ui/core'


const useStyles=makeStyles(()=>({
    top: {
        backgroundImage: "url(./blockchain11.png)",
        
        
    },

    bottom: {
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}))

const Banner = () => {
    const classes=useStyles();
    return (
        <div className={classes.top}>
      
        <div className={classes.bottom}>
         <Typography 
         variant="h2"
         style={{
            fontSize: "80px",
             fontWeight: "bold",
             marginBottom: 10,
             fontFamily: "Monterrat",
             color: "#1A5276 ",
         }}>
             CRYPTO CAVE

         </Typography>

         <Typography
         variant="h6"
         style={{
            
             textTransform: "Capitalize",
             fontFamily: "monospace",
             color: "#1A5276 ",
         }}>
             Get all the information regarding Crypto Space in one place
         </Typography>
        </div>

        </div>
    )
}

export default Banner
