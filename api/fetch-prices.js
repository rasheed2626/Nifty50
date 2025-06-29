const axios = require('axios');
const fs = require('fs');

const symbols = [
  "RELIANCE.BO", "INFY.BO", "TCS.BO"
]; // Keep it short while testing

async function fetch(symbol) {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1y`;
    const res = await axios.get(url);
    const meta = res.data.chart.result[0].meta;
    const prev = meta.previousClose;
    const current = meta.regularMarketPrice;
    return {
      symbol: symbol.replace('.BO', ''),
      price: current,
      change: (((current - prev) / prev) * 100).toFixed(2)
    };
  } catch (e) {
    console.error("Failed", symbol, e.message);
    return null;
  }
}

(async () => {
  const all = [];
  for (let s of symbols) {
    const data = await fetch(s);
    if (data) all.push(data);
  }
  fs.writeFileSync('data/prices.json', JSON.stringify(all, null, 2));
})();
