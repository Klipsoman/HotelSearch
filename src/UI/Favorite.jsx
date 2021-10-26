import React from "react";
import like from "../assets/icons/like.png"
import Stars from "./Stars";

export default function Favorite({title = '', date = {}, days = 1, price = 0, stars, handleClick = ()=>{} }) {
   let monthString = new Date(date.year, date.month - 1, date.day)
   monthString = monthString.toLocaleString('ru', { month: 'long' })
  
  return (
    <div className="favorite favorites__item">
      <div className="favorite__top">
        <div className="favorite__title">{title}</div>
        <div className="favorite__like" onClick={handleClick}>
          <img src={like} alt="" />
        </div>
      </div>
      <div className="favorite__middle">
        <div className="favorite__date">{date.day + ' ' + monthString + ', ' + date.year}</div> -
        <div className="favorite__days">{days} день</div>
      </div>
      <div className="favorite__bottom">
        <div className="favorite__raiting">
          <Stars stars={stars} />
        </div>
        <div className="favorite__rate">
          Price: <div className="favorite__price">{price} ₽</div>
        </div>
      </div>
    </div>
  );
}
