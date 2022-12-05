import React, { useState } from "react";
import "./MainCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bank from "../images/ukr_bank.png";
import crypto from "../images/crypto.jpg";
const MainCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      className="main-carousel"
    >
      <Carousel.Item className="main-carousel__item">
        <Card>
          <Card.Img
            variant="top"
            src={bank}
            className="main-carousel__item-img"
          />
          <Card.Body>
            <Card.Title>Ukrainian National Bank</Card.Title>
            <Card.Text>
              The real information about Ukrainian UAH currency and the cost of
              other official country currencies in UAH, which updates every 12
              hours.
            </Card.Text>
            <Button variant="primary">Go check the exchange info</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item className="main-carousel__item">
        <Card>
          <Card.Img
            variant="top"
            src={crypto}
            className="main-carousel__item-img"
          />
          <Card.Body>
            <Card.Title>Official crypto currencies information</Card.Title>
            <Card.Text>
              The information about different crypto currencies, their cost in
              American USD and info about their personal vwap and changing.
            </Card.Text>
            <Button variant="primary">Check cryptos</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};
export default MainCarousel;
