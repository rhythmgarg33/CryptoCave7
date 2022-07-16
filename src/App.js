import { makeStyles } from "@material-ui/core";
import Homepage from "./pages/Homepage";
import "./App.css";
import React, { Component }  from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import Exchange from "./pages/Exchange";
import Carousel from "./components/Banner/Carousel";
import ReactDOM from 'react-dom'

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/exchange" component={Exchange} exact />
        <Route path="/trend" component={Carousel} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;