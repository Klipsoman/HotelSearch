import React from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/authReducer";

export default function Header() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setAuth(false));
  }
  return (
    <div className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <button className="header__btn" onClick={handleClick}>
        Выйти
      </button>
    </div>
  );
}
