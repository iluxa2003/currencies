import Table from "react-bootstrap/esm/Table";
import { useEffect, useState } from "react";
import "./CryptoDetailsTable.css";
const CryptoDetailsTable = (props) => {
  const [id, setId] = useState();
  const [cryptoHistory, setCryptoHistory] = useState([]);
  const [sortedCryptoHistory, setSortedCryptoHistory] = useState([
    { time: 0, priceUsd: 0 },
  ]);
  const [index, setIndex] = useState(5);
  const [period, setPeriod] = useState("h6");
  useEffect(() => {
    setId(props.id);
    setCryptoHistory(props.info);
  }, [props]);
  useEffect(() => {
    const array = [];
    if (cryptoHistory !== undefined) {
      if (cryptoHistory.length !== 0 && index <= 100) {
        for (let i = 0; i < index; i++) {
          array.push(cryptoHistory[i]);
        }
        setSortedCryptoHistory([...array]);
      } else if (cryptoHistory.length !== 0) {
        setSortedCryptoHistory([...cryptoHistory]);
      }
    }
  }, [cryptoHistory, index]);
  const timePeriodSort = (event) => {
    props.period(event.target.value);
    setPeriod(event.target.value);
  };
  const setAmount = (event) => {
    if (event.target.value !== "") {
      setIndex(event.target.value);
    } else {
      setIndex(1);
    }
  };
  return (
    <>
      <h3>{"Histori of changes --- " + id}</h3>
      <div className="crypto-details-table__sorting">
        <span>
          <span>History for </span>
          <select
            value={period}
            onChange={timePeriodSort}
            className="crypto-details-table__input"
          >
            <option value="m1">every minute</option>
            <option value="m5">every 5 minutes</option>
            <option value="m15">every 15 minutes</option>
            <option value="m30">every 30 minutes</option>
            <option value="h1">every hour</option>
            <option value="h2">every 2 hours</option>
            <option value="h6">every 6 hours</option>
            <option value="h12">every 12 hours</option>
            <option value="d1">every day</option>
          </select>
        </span>
        <label>
          <span>Table size </span>
          <input
            type="number"
            className="crypto-details-table__input"
            onInput={setAmount}
            max={100}
            min={1}
            placeholder={index}
          />
        </label>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedCryptoHistory.map((item) => {
            return (
              <tr key={Math.random()}>
                <td>{new Date(item.time).toUTCString()}</td>
                <td>{parseFloat(item.priceUsd).toFixed(2) + "USD"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default CryptoDetailsTable;
