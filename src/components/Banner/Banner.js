import React from 'react'
import {Container, makeStyles, Typography} from '@material-ui/core'
import Carousel from './Carousel';


const useStyles=makeStyles(()=>({
    banner: {
        backgroundImage: "url(./blockchain11.png)",
        
        
    },
    bannerContent: {
        height: 200,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}))

const Banner = () => {
    const classes=useStyles();
    return (
        <div className={classes.banner}>
        <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
         <Typography 
         variant="h2"
         style={{
             fontWeight: "bold",
             marginBottom: 15,
             fontFamily: "Monterrat",
             color: "#1A5276 ",
         }}>
             Crypto Tracker

         </Typography>

         <Typography
         variant="h6"
         style={{
            fontWeight: "bold",
             textTransform: "Capitalize",
             fontFamily: "Monterrat",
             color: "#1A5276 ",
         }}>
             Get all the Info regarding your favourite Crypto Coins.
         </Typography>
        </div>
        
        </Container>
        </div>
    )
}

export default Banner
