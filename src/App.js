import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <table border="1" cellPadding="10" style={{ margin: '20px auto', width: '80%', textAlign: 'center' }}>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Price</th>
      <th>Δ Day</th>
      <th>Δ Week</th>
      <th>Δ Month</th>
      <th>Δ Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RELIANCE</td>
      <td>₹2532</td>
      <td style={{ color: 'red' }}>-0.8%</td>
      <td style={{ color: 'green' }}>+2.1%</td>
      <td style={{ color: 'red' }}>-3.4%</td>
      <td style={{ color: 'green' }}>+12.5%</td>
    </tr>
    <tr>
      <td>INFY</td>
      <td>₹1463</td>
      <td style={{ color: 'green' }}>+0.2%</td>
      <td style={{ color: 'green' }}>+1.5%</td>
      <td style={{ color: 'red' }}>-2.1%</td>
      <td style={{ color: 'green' }}>+10.0%</td>
    </tr>
  </tbody>
</table>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
