import React from "react";
import { useSelector } from "react-redux";

export default function ContentHeader() {
  const city = useSelector((state) => state.main.search.location);
  const date = useSelector((state) => state.main.search.date);
  let monthString = new Date(date.year, date.month - 1, date.day);
  monthString = monthString.toLocaleString("ru", { month: "long" });
  return (
    <div className="content__header">
      <div className="content__title">Отели</div>
      <div className="content__where">{city}</div>
      <div className="content__date">
        {date.day + " " + monthString + " " + date.year}
      </div>
    </div>
  );
}
