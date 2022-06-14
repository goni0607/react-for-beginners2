import PropTypes from "prop-types";

function Coins({ coins, amount, onChangeAmount, selectedCoin, onChangeCoin }) {
  return (
    <div>
      <div>
        <label htmlFor="amount">USD:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={onChangeAmount}
          placeholder="Enter amount"
        />
      </div>
      <select onChange={onChangeCoin}>
        {coins.map((coin, idx) => (
          <option key={idx} value={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      {amount > 0 && selectedCoin ? (
        <p>
          You can buy {amount / selectedCoin.quotes.USD.price}{" "}
          {selectedCoin.name}s
        </p>
      ) : null}
    </div>
  );
}

Coins.propTypes = {
  coins: PropTypes.array,
  amount: PropTypes.number,
  onChangeAmount: PropTypes.func,
  selectedCoin: PropTypes.object,
  onChangeCoin: PropTypes.func,
};

export default Coins;
