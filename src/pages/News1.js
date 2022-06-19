import { Table, TableContainer, TableHead, TextField, Typography, Paper, TableRow, TableCell, TableBody, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CryptoState } from "../CryptoContext";
import {
  
  createTheme,
  LinearProgress,
  ThemeProvider,
  
} from "@material-ui/core";
const News1 = () => {
const [loading, setLoading] = useState(false);
const [users, setUsers] = useState([]);
const { currency, symbol } = CryptoState();
    const getUsers = async()=> {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=e7a80d102c628f28f4cdf0755888ab3f032dfd3123209e8aa5ff449aeacdd75c');
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
              {["Exchange", "Year Established"].map((head) => (
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
                    
                    
                    key={'row.id'}
                    
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        display: "flex",
                        gap: 15,
                      }}
                    >
                      
                      <div
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                         
                        </span>
                        <span style={{ color: "darkgrey" }}>
                          {'99'}

                        </span>
                      </div>
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
export default News1;

