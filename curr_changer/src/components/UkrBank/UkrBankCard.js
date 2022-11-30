import Card from "react-bootstrap/Card";
import "./UkrBankCard.css";
import { useEffect, useState } from "react";
const UkrBankCard = (props) => {
  const [naming, setNaming] = useState("");
  const [price, setPrice] = useState();
  const [cc, setCc] = useState("");
  const [Uah, setUah] = useState(0);
  const [change, setChange] = useState(0);
  const [date, setDate] = useState("");
  useEffect(() => {
    setNaming(props.item.txt);
    setCc(props.item.cc);
    setPrice(props.item.rate);
    setDate(props.item.exchangedate);
  }, [props]);
  const getUAH = (event) => {
    setUah(event.target.value * price);
  };
  const getChange = (event) => {
    setChange(event.target.value / price);
  };
  return (
    <Card className="ukr-bank-card">
      <Card.Header className="ukr-bank-card__header">
        <h4>{cc + " --- " + naming}</h4>
        <div>{"Оновлено " + date}</div>
      </Card.Header>
      <Card.Body>
        <h3>{price + " UAH"}</h3>
        <div>
          <label className="ukr-bank-card__exchanger">
            <input
              type="number"
              onInput={getChange}
              placeholder="Внесіть свої кошти"
            />
            <div>{"UAH --> " + cc}</div>
            <span>{change.toFixed(2) + " " + cc}</span>
          </label>
        </div>
        <div>
          <label className="ukr-bank-card__exchanger">
            <input
              type="number"
              onInput={getUAH}
              placeholder="Внесіть свої кошти"
            />
            <div>{cc + " --> UAH"}</div>
            <span>{Uah.toFixed(2) + " UAH"}</span>
          </label>
        </div>
      </Card.Body>
    </Card>
  );
};
export default UkrBankCard;
