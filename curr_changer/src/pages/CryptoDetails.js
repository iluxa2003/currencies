import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./CryptoDetails.css";
import cryptoDetailsFetch from "../servises/cryptoDetailsFetch";
import CryptoDetailsTable from "../components/CryptoDetails/CryptoDetailsTable";
import cryptoExchangeUsdFetch from "../servises/cryptoExchangeUsdFetch";
import CryptoExchanger from "../components/CryptoDetails/CryptoExchanger";
const CryptoDetails = () => {
  const { id } = useParams();
  const [cryptoHistory, setCryptoHistory] = useState([]);
  const [cryptoInfo, setCryptoInfo] = useState();
  const [period, setPeriod] = useState("h6");
  useEffect(() => {
    cryptoDetailsFetch(id, period).then((response) => {
      setCryptoHistory(response.data);
    });
  }, [id, period]);
  useEffect(() => {
    cryptoExchangeUsdFetch(id).then((response) => {
      setCryptoInfo(response.data);
    });
  }, [id]);
  const perioder = (x) => {
    setPeriod(x);
  };
  return (
    <>
      <Header />

      <main>
        <section className="crypto-details__exchanger">
          <CryptoExchanger info={cryptoInfo} />
        </section>
        <section className="crypto-details__info">
          <CryptoDetailsTable id={id} info={cryptoHistory} period={perioder} />
        </section>
      </main>
    </>
  );
};
export default CryptoDetails;
