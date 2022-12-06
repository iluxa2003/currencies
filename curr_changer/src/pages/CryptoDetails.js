import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "react-bootstrap/Table";
import "./CryptoDetails.css";
const CryptoDetails = () => {
  const { id } = useParams();
  const [cryptoHistory, setCryptoHistory] = useState([0, 0]);
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/" + id + "/history?interval=h1")
      .then((response) => response.json())
      .then((response) => {
        setCryptoHistory(response.data);
      });
  }, [id]);
  return (
    <>
      <Header />
      <main>
        <section className="crypto-details__info">
          <h3>{"Histori of changes --- " + id}</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                {cryptoHistory.map((item) => {
                  return <td>{Date(item.time)}</td>;
                })}
              </tr>
              <tr>
                {cryptoHistory.map((item) => {
                  return <td>{item.priceUsd + "USD"}</td>;
                })}
              </tr> */}
              {cryptoHistory.map((item) => {
                return (
                  <tr>
                    <td>{new Date(item.time).toUTCString()}</td>
                    <td>{parseFloat(item.priceUsd).toFixed(2) + "USD"}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </section>
      </main>
    </>
  );
};
export default CryptoDetails;
