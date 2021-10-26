import React from "react";
import { useSelector } from "react-redux";

export default function ContentFavValue() {
  const likesHotel = useSelector((state) => state.main.favourites);
  return (
    <div className="content__favour">
      Добавлено в Избранное:{" "}
      <span className="content__favour-b">{likesHotel.length}</span> отеля
    </div>
  );
}
