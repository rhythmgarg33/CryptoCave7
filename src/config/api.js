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