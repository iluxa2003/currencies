import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
const UkrBankCard = (props) => {
  const [naming, setNaming] = useState("");
  const [price, setPrice] = useState();
  const [cc, setCc] = useState("");
  const [Uah, setUah] = useState(0);
  const [change, setChange] = useState(0);
  useEffect(() => {
    setNaming(props.item.txt);
    setCc(props.item.cc);
    setPrice(props.item.rate);
  }, [props]);
  const getUAH = (event) => {
    setUah(event.target.value * price);
  };
  const getChange = (event) => {
    setChange(event.target.value / price);
  };
  return (
    <Card>
      <Card.Header>{cc + " --- " + naming}</Card.Header>
      <Card.Body>
        <div>{price + " UAH"}</div>
        <div>
          <label>
            {"UAH --> " + cc}
            <div>
              <input type="number" onInput={getChange} />
              <span>{change}</span>
            </div>
          </label>
        </div>
        <div>
          <label>
            {cc + " --> UAH"}
            <div>
              <input type="number" onInput={getUAH} />
              <span>{Uah}</span>
            </div>
          </label>
        </div>
      </Card.Body>
    </Card>
  );
};
export default UkrBankCard;
