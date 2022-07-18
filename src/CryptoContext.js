import axios from 'axios'
import React, { createContext,useEffect,useState } from 'react'
import { useContext } from 'react'
import { CoinList } from './config/api'
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from 'firebase/firestore';
const Crypto = createContext()
const CryptoContext = ({children}) => {
  
const [currency,setCurrency]= useState("INR")
const [symbol,setSymbol]=useState("₹")
const [coins, setCoins] = useState([]);
const [loading, setLoading] = useState(false);
const [user , setUser] = useState(null);
const [watchlist, setwatchlist] = useState([])


useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user) setUser(user);
        else setUser(null);
        console.log(user)
    })
})
const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    console.log(876)
    setCoins(data);
    setLoading(false);
  };

useEffect(()=>{
    if(currency=== "INR") setSymbol("₹");
    else if (currency=== "USD") setSymbol("$");
    else if (currency=== "EUR") setSymbol("€");

},[currency]);

useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
            console.log("ksjdfhvhfdjsiudjh")
          setwatchlist(coin.data().coins);
          console.log(coin.data().coins,"aisjd")
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

    return (
        <Crypto.Provider value={{currency, symbol,setCurrency,coins,loading,fetchCoins,user,watchlist}}>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext

export const CryptoState=()=>{
   return useContext(Crypto)
}
