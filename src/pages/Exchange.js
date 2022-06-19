import { Table, TableContainer, TableHead, TextField, Typography, Paper, TableRow, TableCell, TableBody, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CryptoState } from "../CryptoContext";
import {
  
  createTheme,
  LinearProgress,
  ThemeProvider,
  
} from "@material-ui/core";
const Exchange = () => {
const [loading, setLoading] = useState(false);
const [users, setUsers] = useState([]);
const { currency, symbol } = CryptoState();
    const getUsers = async()=> {
  const response = await fetch('https://api.coingecko.com/api/v3/exchanges');
  setUsers(await response.json());
}

useEffect(()=>{
    getUsers();
},[currency]);
console.log(users)




return (
  
  <Container style={{ textAlign: "center" }}>
    <Typography
      variant="h4"
      style={{ margin: 18}}
    >
      Exchanges
    </Typography>
    
    <TableContainer component={Paper}>
      {loading ? (
        <LinearProgress style={{ backgroundColor: "gold" }} />
      ) : (
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#b35900" }}>
            <TableRow>
              {["Exchange", "Year Established", "Country", "Trust Score Rank"].map((head) => (
                <TableCell
                  style={{
                    color: "black",
                    fontWeight: "700",
                  }}
                  key={head}
                  align={head === "Exchange" ? "" : "right"}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .map((row) => {
              
                return (
                  <TableRow 
                    
                    
                    key={row.name}
                    
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        display: "flex",
                        gap: 15,
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="50"
                        style={{ marginBottom: 10 }}
                      />
                      <div
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {row.symbol}
                        </span>
                        <span style={{ color: "darkgrey" }}>
                          {row.name}
                        </span>
                      </div>
                    </TableCell>
                   
                    <TableCell align="right">
                     
                          {row.year_established}
                          
                        </TableCell>
                    
                        <TableCell align="right">
                          {row.country}
                          
                        </TableCell>

                        <TableCell align="right">
                          {row.trust_score_rank}
                          
                        </TableCell>

                      
                    



                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      )}
    </TableContainer>

    
  </Container>
)
}
export default Exchange;

