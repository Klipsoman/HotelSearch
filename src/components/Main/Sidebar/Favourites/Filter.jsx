import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filtering } from "../../../../redux/actions";

let ratingClassUp = "filter__item filter__item-active filter__rating-up";
let ratingClassDown = "filter__item filter__item-active filter__rating-down";
let ratingClassDisabled = "filter__item  filter__rating";

let priceClassUp = "filter__item filter__item-active filter__price-up";
let priceClassDown = "filter__item filter__item-active filter__price-down";
let priceClassDisabled = "filter__item  filter__price";

export default function Filter() {
  const dispatch = useDispatch();
  let [countRatingFilter, setCountRatingFilter] = useState(0);
  let [countPriceFilter, setCountPriceFilter] = useState(0);
  let [ratingClass, setRatingClass] = useState(ratingClassDisabled);
  let [priceClass, setPriceClass] = useState(priceClassDisabled);

  function handleRatingClick() {
    if (countRatingFilter === 0) {
      setRatingClass(ratingClassUp);
      setCountRatingFilter(1);
      dispatch(filtering({ by: "rating", value: "up" }));
      setPriceClass(priceClassDisabled);
    }
    if (countRatingFilter === 1) {
      setRatingClass(ratingClassDown);
      setCountRatingFilter(2);
      dispatch(filtering({ by: "rating", value: "down" }));
      setPriceClass(priceClassDisabled);
    }
    if (countRatingFilter === 2) {
      setRatingClass(ratingClassDisabled);
      setCountRatingFilter(0);
      setPriceClass(priceClassDisabled);
    }
  }

  function handlePriceClick() {
    if (countPriceFilter === 0) {
      setPriceClass(priceClassUp);
      setCountPriceFilter(1);
      dispatch(filtering({ by: "price", value: "up" }));
      setRatingClass(ratingClassDisabled);
    }
    if (countPriceFilter === 1) {
      setPriceClass(priceClassDown);
      setCountPriceFilter(2);
      dispatch(filtering({ by: "price", value: "down" }));
      setRatingClass(ratingClassDisabled);
    }
    if (countPriceFilter === 2) {
      setPriceClass(priceClassDisabled);
      setCountPriceFilter(0);
      setRatingClass(ratingClassDisabled);
    }
  }

  return (
    <div className="filter">
      <div className={ratingClass} onClick={handleRatingClick}>
        Рейтинг
      </div>
      <div className={priceClass} onClick={handlePriceClick}>
        Цена
      </div>
    </div>
  );
}
