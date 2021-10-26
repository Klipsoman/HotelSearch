import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Favorite from "../../../../UI/Favorite";
import Filter from "./Filter";
import { Scrollbars } from "react-custom-scrollbars-2";
import { toggleFavorite } from "../../../../redux/actions";

export default function Favourites() {
  const favourites = useSelector((state) => state.main.favourites);
  const date = useSelector((state) => state.main.search.date);
  const days = useSelector((state) => state.main.search.days);
  const dispatch = useDispatch();

  if (!favourites.length) {
    return (
      <div className="favourites">
        <div className="favourites__title">Избранное</div>
      </div>
    );
  }
  return (
    <div className="favourites">
      <div className="favourites__title">Избранное</div>
      <>
        <Filter />
        <Scrollbars style={{ height: "266px" }}>
          {favourites.map((el, i) => {
            return (
              <Favorite
                title={el.hotelName}
                price={el.priceAvg}
                key={el.hotelName + i}
                date={date}
                days={days}
                stars={el.stars}
                handleClick={() => {
                  dispatch(toggleFavorite(el))
                }}
              />
            );
          })}
        </Scrollbars>
      </>
    </div>
  );
}
