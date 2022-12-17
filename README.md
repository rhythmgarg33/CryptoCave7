# 1. Methodology


![Website-Development-Life-Cycle-1024x512](https://user-images.githubusercontent.com/83527816/208227836-01f8600d-6bb4-43d3-9f4c-3044d83c059b.png)

# 2. Description


Number of coins displayed on the home page using pagination- 100

Trending News and trending coins displayed - 10


# 3. Input Output Data

Api Keys to fetch Data about the coins


export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const News=()=>
`https://cryptopanic.com/api/v1/posts/?auth_token=625029afb28b2d781397ebb9dbc59f3b710762f6&public=true`

export const Exchanges=()=>
`https://api.coingecko.com/api/v3/exchanges`
  
export const TrendingNews=()=>
`https://newsdata.io/api/1/news?apikey=pub_4868270e533969f03b1f645e92344c4114cf&q=cryptocurrency`




Output Displayed in the form of graphs
![Screenshot 2022-12-17 11 39 21](https://user-images.githubusercontent.com/83527816/208228252-d23b11c2-b896-4cbc-ab2b-74d805662fc6.png)


# 4. Live Link


https://cryptocave-8fd8e.web.app/



# 5. Screenshot of the interface

Homepage
![Screenshot 2022-12-17 11 38 15](https://user-images.githubusercontent.com/83527816/208228236-22b114f2-b3b8-45d4-a30f-4f5f5b1b8f37.png)



Login/Signup Page
![Screenshot 2022-12-17 11 38 21](https://user-images.githubusercontent.com/83527816/208228239-deedfeb5-df03-4eb1-bcca-5327627f37e9.png)



Watchlist
![Screenshot 2022-12-17 11 38 43](https://user-images.githubusercontent.com/83527816/208228241-4bcfc125-28a5-49d9-a6b9-a2c9fe0e7dc4.png)



Coin Page
![Screenshot 2022-12-17 11 39 05](https://user-images.githubusercontent.com/83527816/208228244-7a4e1ca1-be9d-4c7a-a049-1d34045533c0.png)



Timely Charts
![Screenshot 2022-12-17 11 39 21](https://user-images.githubusercontent.com/83527816/208228252-d23b11c2-b896-4cbc-ab2b-74d805662fc6.png)
