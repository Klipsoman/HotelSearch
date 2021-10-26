import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/authReducer";
import LoginSection from "./LoginSection";

export default function Login() {
  const dispatch = useDispatch();
  let [login, setLogin] = useState("");
  let [pass, setPass] = useState("");
  let [loginError, setLoginError] = useState("");
  let [passError, setPassError] = useState("");
  const regLogin = /^[^@]+@[^@.]+\.[^@]+$/;
  const regPass = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;

  function handleLoginValidate(e) {
    if (e.target.value.trim().length === 0) {
      setLoginError("Заполните это поле");
      return;
    }
    if (e.target.value.length < 7) {
      setLoginError("Введите корректный email");
      return;
    }
    if (!regLogin.test(e.target.value)) {
      setLoginError("Введите корректный email");
      return;
    }
    setLoginError("");
    return;
  }

  function handlePassValidate(e) {
    if (e.target.value.trim().length === 0) {
      setPassError("Заполните это поле");
      return;
    }
    if (!regPass.test(e.target.value)) {
      setPassError("Введите пароль (только латиница, не менее 7 символов)");
      return;
    }
    setPassError("");
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (loginError === "" && passError === "" && login !== "" && pass !== "") {
      dispatch(setAuth(true));
    }
  }

  useEffect(() => {}, [login, pass, loginError, passError]);

  return (
    <>
      <div className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h3 className="login__header">Simple Hotel Check</h3>
          <LoginSection
            type="text"
            value={login}
            setValue={(e) => {
              setLogin(e.target.value);
              handleLoginValidate(e);
            }}
            validateFunc={handleLoginValidate}
            title="Логин"
            error={loginError}
          />
          <LoginSection
            type="password"
            value={pass}
            setValue={(e) => {
              setPass(e.target.value);
              handlePassValidate(e);
            }}
            validateFunc={handlePassValidate}
            title="Пароль"
            error={passError}
          />
          <button className="button login-section-button">Войти</button>
        </form>
      </div>
      <div className="cover"></div>
    </>
  );
}
