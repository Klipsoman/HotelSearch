import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadHotels,
  putSearchCity,
  putSearchDate,
  putSearchDays,
  setCalendarShow,
} from "../../../../redux/actions";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Search() {
  let [location, setLocation] = useState("");
  let [date, setDate] = useState("");
  let [days, setDays] = useState("");
  let [value, onChange] = useState(new Date());
  let isCalendarActive = useSelector((state) => state.main.isCalendarShow);
  let dispatch = useDispatch();

  function clickCalendarDay(e) {
    console.log(e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate())
    setDate(e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate());
    dispatch(setCalendarShow(false));
  }
  function showCalendar() {
    dispatch(setCalendarShow(true));
  }

  function getNewHotelData(e) {
    if (!location.trim() && !date.trim() && !days.trim()) return;
    dispatch(putSearchCity(location));
    dispatch(putSearchDate(date));
    dispatch(putSearchDays(days));
    dispatch(loadHotels({ location, date, days }));
  }

  return (
    <div className="search">
      <div className="search__section">
        <span className="search__title">Локация</span>
        <input
          className="search__input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="search__section search__section-date">
        <span className="search__title">Дата заселения</span>
        <input
          className="search__input"
          pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
          type="text"
          value={date}
          readOnly={true}
          onClick={showCalendar}
        />
        <Calendar
          onChange={onChange}
          value={value}
          className={isCalendarActive ? "calendar" : "calendar-hidden"}
          minDate={new Date()}
          onClickDay={clickCalendarDay}
        />
      </div>
      <div className="search__section">
        <span className="search__title">Количество дней</span>
        <input
          className="search__input"
          type="text"
          maxLength="3"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </div>
      <button
        className="button search__button"
        onClick={getNewHotelData}>
        Найти
      </button>
    </div>
  );
}
