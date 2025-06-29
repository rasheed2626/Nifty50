useEffect(() => {
  fetch('/data/prices.json')
    .then(res => res.json())
    .then(setStocks);
}, []);
