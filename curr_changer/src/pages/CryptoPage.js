import Header from "../components/Header";
import "./CryptoPage.css";
import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoPage/CryptoCard";
import cryptoFetch from "../servises/cryptoFetch";
const CryptoPage = () => {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    cryptoFetch().then((response) => setCryptos(response.data));
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
