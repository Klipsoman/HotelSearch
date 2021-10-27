import React from "react";
import Carousel from "../../../UI/Carousel";
import { Scrollbars } from "react-custom-scrollbars-2";
import Hotel from "../../../UI/Hotel";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/actions";
import ContentHeader from "./ContentHeader";
import ContentFavValue from "./ContentFavValue";

export default function Content() {
  const hotels = useSelector((state) => state.main.searchResults);
  const date = useSelector((state) => state.main.search.date);
  const days = useSelector((state) => state.main.search.days);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <ContentHeader />
      <Carousel />
      <ContentFavValue />

      <Scrollbars style={{ height: "516px" }}>
        <div className="hotels">
          {!hotels.length
            ? null
            : hotels.map((el, i) => {
                return (
                  <Hotel
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
        </div>
      </Scrollbars>
    </div>
  );
}
