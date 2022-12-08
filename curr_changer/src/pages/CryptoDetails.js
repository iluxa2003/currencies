import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "react-bootstrap/Table";
import "./CryptoDetails.css";
const CryptoDetails = () => {
  const { id } = useParams();
  const [cryptoHistory, setCryptoHistory] = useState([
    { time: 0, priceUsd: 0 },
  ]);
  // const [sortedCryptoHistory, setSortedCryptoHistory] = useState([]);
  // const [index, setIndex] = useState(5);
  const [period, setPeriod] = useState("h6");
  useEffect(() => {
    fetch(
      "https://api.coincap.io/v2/assets/" + id + "/history?interval=" + period
    )
      .then((response) => response.json())
      .then((response) => {
        setCryptoHistory(response.data);
      });
  }, [id, period]);
  // useEffect(() => {
  //   setAmount();
  // }, [cryptoHistory, index]);
  const timePeriodSort = (event) => {
    setPeriod(parseInt(event.target.value));
  };
  // const setAmount = (event) => {
  //   // setIndex(event.target.value);
  //   setSortedCryptoHistory([cryptoHistory[0]]);
  //   for (let i = 1; i < 10; i++) {
  //     if (cryptoHistory.length != 1) {
  //       setSortedCryptoHistory([...sortedCryptoHistory, cryptoHistory[i]]);
  //     }
  //   }
  // };
  return (
    <>
      <Header />
      <main>
        <section className="crypto-details__info">
          <h3>{"Histori of changes --- " + id}</h3>
          <span>History for </span>
          <select value={period} onChange={timePeriodSort}>
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
          {/* <input type="number" onInput={setAmount} /> */}
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cryptoHistory.map((item) => {
                return (
                  <tr key={Math.random()}>
                    <td>{new Date(item.time).toUTCString()}</td>
                    <td>{parseFloat(item.priceUsd).toFixed(2) + "USD"}</td>
                  </tr>
                );
              })}
              {/* {
              for(let i = 0; i<=100;i++){
                  <tr key={Math.random()}>
                    <td>{new Date(item.time).toUTCString()}</td>
                    <td>{parseFloat(item.priceUsd).toFixed(2) + "USD"}</td>
                  </tr>
              }} */}
            </tbody>
          </Table>
        </section>
      </main>
    </>
  );
};
export default CryptoDetails;
