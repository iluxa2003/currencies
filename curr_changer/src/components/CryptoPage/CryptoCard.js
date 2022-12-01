import Card from "react-bootstrap/Card";
import GreenArrow from "../images/green-arrow-up.svg";
import RedArrow from "../images/red-arrow-down.svg";
import Question from "../images/question-mark.svg";
import { useEffect, useState } from "react";
import "./CryptoCard.css";
const CryptoCard = (props) => {
  const [cryptoNaming, setCryptoNaming] = useState("");
  const [cryptoSymbol, setCryptoSymbol] = useState("");
  const [priceUsd, setPriceUSD] = useState(0);
  const [changement, setChangement] = useState(0);
  useEffect(() => {
    setCryptoNaming(props.info.name);
    setCryptoSymbol(props.info.symbol);
    setPriceUSD(parseFloat(props.info.priceUsd));
    setChangement(parseFloat(props.info.changePercent24Hr));
  }, [props]);
  return (
    <Card className="crypto-card">
      <Card.Body>
        <Card.Title>
          <span>{cryptoNaming}</span> <span>{cryptoSymbol}</span>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {priceUsd.toFixed(4) + " USD"}
        </Card.Subtitle>
        <Card.Text className="crypto-card__text">
          <img
            src={changement > 0 ? GreenArrow : RedArrow}
            alt={changement > 0 ? "=) up" : "=( down"}
            className="crypto-card__arrow"
          />
          {changement.toFixed(2) + " %"}
        </Card.Text>
        <Card.Link href={"#"}>
          <img
            src={Question}
            alt="Link to more"
            className="crypto-card__question"
          />
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
export default CryptoCard;
