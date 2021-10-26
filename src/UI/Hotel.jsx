import React from "react";
import home from "../assets/icons/house.svg";
import Favorite from "./Favorite";

export default function Hotel({ title, price, date, days, handleClick, stars }) {
  return (
    <div className="hotel">
      <div className="hotel__icon">
        <img src={home} alt="" />
      </div>
      <div className="hotel__info">
        <Favorite title={title} price={price} date={date} days={days} stars={stars} handleClick={handleClick}/>
      </div>
    </div>
  );
}
