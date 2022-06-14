import { useState, useEffect } from "react";
import Coins from "./Coins";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setSelectedCoin(json[0]);
        setLoading(false);
      });
  }, []);

  const onChangeAmount = (event) => setAmount(parseInt(event.target.value));
  const onChangeCoin = (event) => {
    const coinId = event.target.value;
    const coin = coins.find((coin) => coin.id === coinId);
    setSelectedCoin(coin);
  };

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        "Loading..."
      ) : (
        <Coins
          coins={coins}
          amount={amount}
          onChangeAmount={onChangeAmount}
          selectedCoin={selectedCoin}
          onChangeCoin={onChangeCoin}
        />
      )}
    </div>
  );
}

export default App;
