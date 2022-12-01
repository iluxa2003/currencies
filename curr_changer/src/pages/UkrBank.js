import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./UkrBank.css";
import UkrBankCard from "../components/UkrBank/UkrBankCard";
const UkrBank = () => {
  const [ukrBank, setUkrBank] = useState([]);
  const [filteredUkrBank, setFilteredUkrBank] = useState([]);
  const [optionValue, setOptionValue] = useState("All");
  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((response) => setUkrBank(response));
  }, []);
  useEffect(() => {
    setFilteredUkrBank(ukrBank);
  }, [ukrBank]);
  const exchangeFilter = (event) => {
    setOptionValue(event.target.value);
    if (event.target.value !== "All") {
      ukrBank.map((item) => {
        if (item.cc === event.target.value) {
          return setFilteredUkrBank([item]);
        }
        return null;
      });
    } else if (event.target.value === "All") {
      setFilteredUkrBank(ukrBank);
    }
  };
  return (
    <>
      <Header active="ukrBank" />
      <main className="ukr-bank__main">
        <div className="ukr-bank__main-wrapper">
          <nav className="ukr-bank__navigation">
            <h3>Шукаєтє конкретну валюту?</h3>
            <select onChange={exchangeFilter} value={optionValue}>
              <option value="All">All</option>
              {ukrBank.map((item) => {
                return (
                  <option value={item.cc} key={Math.random()}>
                    {item.cc + " --- " + item.txt}
                  </option>
                );
              })}
            </select>
          </nav>
          {filteredUkrBank.map((item) => {
            return <UkrBankCard key={Math.random()} item={item} />;
          })}
        </div>
      </main>
    </>
  );
};
export default UkrBank;
