import { useEffect, useState } from "react";
import "./CryptoExchanger.css";
const CryptoExchanger = (props) => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [priceUsd, setPriceUsd] = useState(1);
  const [toUsd, setToUsd] = useState(0);
  const [toCrypto, setToCrypto] = useState(0);
  useEffect(() => {
    try {
      setName(props.info.name);
      setSymbol(props.info.symbol);
      setPriceUsd(props.info.priceUsd);
    } catch {}
  }, [props]);
  const exchangeToUsd = (event) => {
    setToUsd(priceUsd * event.target.value);
  };
  const exchangeToCrypto = (event) => {
    setToCrypto(event.target.value / priceUsd);
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{parseFloat(priceUsd).toFixed(2)}</h3>
      <div>
        <label className="crypto-exchanger__label">
          <input
            className="crypto-exchanger__input"
            type={"number"}
            onInput={exchangeToCrypto}
          />
          <span>{"USD ---> " + symbol}</span>
          <span>{toCrypto + " " + symbol}</span>
        </label>
      </div>
      <div>
        <label className="crypto-exchanger__label">
          <input
            className="crypto-exchanger__input"
            type={"number"}
            onInput={exchangeToUsd}
          />
          <span>{symbol + " ---> USD"}</span>
          <span>{toUsd + " USD"}</span>
        </label>
      </div>
    </>
  );
};
export default CryptoExchanger;
