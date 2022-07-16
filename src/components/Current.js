import { makeStyles} from "@material-ui/core";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { CryptoState } from "../CryptoContext";
import React, { Component }  from 'react';
const Current = () => {
    const [news, setnews] = useState([]);
    const { currency, symbol } = CryptoState();
    const fetchTrendingnews = async () => {
        const response = await fetch(hello);
        const jsonData = await response.json();
        setnews(jsonData.Data);
        console.log(jsonData.Data)
      };
      const hello= "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&apiKey=cb61428f173bd9dfe46ab55e0eed23fa04c30251eb044150e3e5731135e975fa"    
      useEffect(() => {
        fetchTrendingnews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
      }, [currency]);
      const useStyles = makeStyles(() => ({
        carouselItem: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textTransform: "uppercase",
          color: "blue",
        },
        top: {
            marginBottom: "2px",
            display:"flex",
            flexDirection:"column",
            backgroundColor: "#1A5276"
            
        },
      
        
        
      }));
      const classes = useStyles();

      const responsive = {
        0: {
          items: 1,
        },
       
      };


      const items = news.map((coin) => {
       
        return (
         <>
           
           <a href={coin.url} target="_blank" rel="noreferrer" className={classes.pizza}>
        
           
            <span style={{display: "flex",marginTop:"25px",fontSize:"20px",justifyContent:"center"}}>
        
            <img
          src={coin.imageurl}
          style={{marginRight:"20px"}}
          height="50"/>

            <span style={{
              
                 
                  fontWeight: 500,
                  color:"black",
                
                }}>
              {coin.title}
              
            </span>
            
            </span>
            </a>
        </>
        );
    
    
      
    
      });



      return (
    <>
      <div  className={classes.top} style={{height:"200px"}}>
      <h1 style={{color: "black", textAlign: "center", fontSize: "50px"}}>Current News</h1>




    <div className={classes.carousel}>
      <AliceCarousel
        // for infinite time
        infinite
        // after how much time next appears
        animationDuration={6000}
        responsive={responsive}
        items={items}
        autoPlay
        disableButtonsControls
        disableDotsControls
      />
    </div>
    </div>
    </>
  )
}

export default Current