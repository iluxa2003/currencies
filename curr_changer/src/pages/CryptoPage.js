import Header from "../components/Header";
import "./CryptoPage.css";
import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoPage/CryptoCard";
const CryptoPage = () => {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets?limit=30")
      .then((response) => response.json())
      .then((response) => setCryptos(response.data));
  }, []);
  return (
    <>
      <Header active="crypto" />
      <main className="crypto-page__main">
        <section className="crypto-page__main-wrapper">
          {cryptos.map((item) => {
            return <CryptoCard key={Math.random()} info={item} />;
          })}
        </section>
      </main>
    </>
  );
};
export default CryptoPage;
