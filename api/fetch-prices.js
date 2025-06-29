const axios = require('axios');
const fs = require('fs');

const symbols = [
  'RELIANCE.NS', 'INFY.NS', 'TCS.NS', 'HDFCBANK.NS', 'ICICIBANK.NS',
  'HINDUNILVR.NS', 'SBIN.NS', 'ITC.NS', 'KOTAKBANK.NS', 'LT.NS',
  'BHARTIARTL.NS', 'AXISBANK.NS', 'BAJFINANCE.NS', 'ASIANPAINT.NS', 'HCLTECH.NS',
  'MARUTI.NS', 'SUNPHARMA.NS', 'NESTLEIND.NS', 'ULTRACEMCO.NS', 'WIPRO.NS',
  'HDFCLIFE.NS', 'POWERGRID.NS', 'NTPC.NS', 'TECHM.NS', 'JSWSTEEL.NS',
  'TITAN.NS', 'DIVISLAB.NS', 'ADANIENT.NS', 'ADANIPORTS.NS', 'ONGC.NS',
  'CIPLA.NS', 'DRREDDY.NS', 'GRASIM.NS', 'BPCL.NS', 'BRITANNIA.NS',
  'TATASTEEL.NS', 'SBILIFE.NS', 'BAJAJFINSV.NS', 'EICHERMOT.NS', 'SHREECEM.NS',
  'HINDALCO.NS', 'COALINDIA.NS', 'HEROMOTOCO.NS', 'M&M.NS', 'BAJAJ-AUTO.NS',
  'UPL.NS', 'TATACONSUM.NS', 'INDUSINDBK.NS', 'APOLLOHOSP.NS', 'DMART.NS'
];

(async () => {
  try {
    const response = await axios.get(
      'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/' + symbols.join(','),
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
      }
    );

    const clean = response.data.map(stock => ({
      symbol: stock.symbol,
      price: stock.regularMarketPrice,
      change: stock.regularMarketChangePercent?.toFixed(2) + '%'
    }));

    fs.writeFileSync('data/prices.json', JSON.stringify(clean, null, 2));
    console.log('✅ Prices updated');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
})();
