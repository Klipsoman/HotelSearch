import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Favorite from "../../../../UI/Favorite";
import Filter from "./Filter";
import { Scrollbars } from "react-custom-scrollbars-2";
import { toggleFavorite } from "../../../../redux/actions";

let windowWidth = undefined;
const portable = "327px";
const laptop = "210px";

export default function Favourites() {
  const favourites = useSelector((state) => state.main.favourites);
  const date = useSelector((state) => state.main.search.date);
  const days = useSelector((state) => state.main.search.days);
  const dispatch = useDispatch();
  let [scrollHeight, setScrollHeight] = useState(portable);

  console.log("render size: " + windowWidth);

  function resizeFunc() {
    windowWidth = window.innerWidth;
    if (windowWidth > 900) setScrollHeight(portable);
    if (windowWidth < 900) setScrollHeight(laptop);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeFunc);
    windowWidth = window.innerWidth;
    if (windowWidth > 900) setScrollHeight(portable);
    if (windowWidth < 900) setScrollHeight(laptop);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

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
        <Scrollbars style={{ height: scrollHeight }}>
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
                  dispatch(toggleFavorite(el));
                }}
              />
            );
          })}
        </Scrollbars>
      </>
    </div>
  );
}
