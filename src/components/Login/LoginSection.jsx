import React from "react";

export default function LoginSection({ type, value, setValue, title, error, validateFunc }) {
  return (
    <div className="login-section">
      <span
        className={
          error ? "login-section__title input-error" : "login-section__title"
        }
      >
        {title}
      </span>
      <input
        className={
          error ? "login-section__input input-error" : "login-section__input"
        }
        type={type}
        value={value}
        onChange={setValue}
        onBlur={validateFunc}
      />
      <span className="login-section__error">{error}</span>
    </div>
  );
}
