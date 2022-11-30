import { useState, useEffect } from "react";
import UkrBankCard from "../components/UkrBank/UkrBankCard";
const UkrBank = () => {
  const [ukrBank, setUkrBank] = useState([]);
  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((response) => setUkrBank(response));
  }, []);

  return (
    <div>
      <main>
        {ukrBank.map((item) => {
          return <UkrBankCard key={Math.random()} item={item} />;
        })}
      </main>
    </div>
  );
};
export default UkrBank;
