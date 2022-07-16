import { makeStyles} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { News } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import React, { Component }  from 'react';
export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}
const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const [news, setnews] = useState([]);
  
  const { currency, symbol } = CryptoState();
 
  const fetchTrendingnews = async () => {
    const response = await fetch(hello);
    const jsonData = await response.json();
    setnews(jsonData.Data);
    console.log(jsonData.Data)
  };
  
  const hello= "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&apiKey=cb61428f173bd9dfe46ab55e0eed23fa04c30251eb044150e3e5731135e975fa"

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data)
    setTrending(data);
    
  };

  useEffect(() => {
    fetchTrendingnews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, [currency]);
  
  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, [currency]);
  
  const useStyles = makeStyles(() => ({
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textTransform: "uppercase",
      color: "pink",
    },
    
  }));

  const classes = useStyles();
  
  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
     <>
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        
        <img
          src={coin.image}
          height="170"
          style={{ marginBottom: 10,marginTop: 100  }}
        
        />
        <span>
          {coin.symbol}
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit? "+": ""}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        </span>
        <div style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol}{numberWithCommas(coin.current_price.toFixed(2))}
        </div>
      </Link>
    </>
    );


  

  });

  
  

  const responsive = {
    0: {
      items: 2,
    },
    850: {
      items: 4,
    },
  };

  return (
    <div  className="classes.top" >
      <h1 style={{color: "brown", textAlign: "center", fontSize: "80px"}}>Top 10 Trending Coins</h1>




    <div className={classes.carousel}>
      <AliceCarousel
        // for infinite time
        infinite
        // after how much time it slides to next coin
        animationDuration={1500}
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
    </div>
  );
};

export default Carousel;