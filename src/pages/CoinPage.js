import { Button, LinearProgress, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from "../CryptoContext";
import { doc,setDoc } from "firebase/firestore";
import { db } from "../firebase";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol,user,watchlist } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log(data);
    setCoin(data);
  };



  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
//let array1 = ['h', 'e', 'l', 'l', 'o'];
//let array2 = [...array1];
//console.log(array2);
//['h', 'e', 'l', 'l', 'o'] // output
//The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.
  const inwatchlist = watchlist.includes(coin?.id);

  const addtowatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
        { merge: true }
      );
    } catch (error) {
     
    }
  };

  const removefromwatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );
    } catch (error) {
    }
  };
  

  const useStyles = makeStyles((theme) => ({
    
    sidebar: {
      width: "100%",
      marginTop: 25,
     
      
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
      marginLeft: 20
    
    },
    heading1: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0
      
    },
    marketData: {
      
      padding: 25,
      paddingTop: 10,
      width: "100%",
     
    },
  }));

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "white" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20,display: "block",marginLeft: "auto",marginRight: "auto",height:"280px" }}
        />
        <Typography variant="h2" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography style={{fontSize:"20px"}} variant="subtitle1"className={classes.description}>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h4" className={classes.heading1}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h4"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h4" className={classes.heading1}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h4"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h4" className={classes.heading1}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h4"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
          {user && <Button variant="outlined" style={{backgroundColor:"blue",width:"200px",height:"50px",color:"white"}} onClick={inwatchlist ? removefromwatchlist : addtowatchlist}>
          {inwatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </Button>}
        </div>
      </div>
    


      <TableContainer component={Paper} style={{backgroundColor:"#FFFFF0",width:"70%",margin:"auto"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{fontSize:"20px",fontWeight:"bold",height:"70px",color:"black"}}>Price Change 24H ({currency})</TableCell>
            <TableCell style={{fontSize:"20px",fontWeight:"bold",height:"70px",color:"black"}} align="right">24H High</TableCell>
            <TableCell style={{fontSize:"20px",fontWeight:"bold",height:"70px",color:"black"}} align="right">24H Low</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell style={{fontSize:"20px",fontWeight:"bold",height:"70px",color:"black"}}>{coin.market_data.price_change_24h_in_currency[currency.toLowerCase()].toFixed(3)}</TableCell>
            <TableCell style={{fontSize:"20px",fontWeight:"bold",height:"70px",color:"black"}} align="right">{coin.market_data.high_24h[currency.toLowerCase()]}</TableCell>
            <TableCell style={{fontSize:"20px",fontWeight:"bold",height:"70px",color:"black"}} align="right">{coin.market_data.low_24h[currency.toLowerCase()]}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>

    <h1 style={{fontSize:"60px",textAlign:"center",color:"#A52A2A",fontWeight:"bold",fontStyle:"serif"}}>Price Chart</h1>


      <CoinInfo coin={coin} />

      


    
    
    </div>
  );
};

export default CoinPage;