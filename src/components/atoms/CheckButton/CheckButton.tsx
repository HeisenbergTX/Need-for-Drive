import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CheckButton.module.css";

const btnCheck = [
  {
    id: 0,
    text: "Выбрать модель",
    path: "/order/models",
  },
];

export const CheckButton = () => {
  return (
    <>
      {btnCheck.map((el) => {
        return (
          <NavLink key={el.id} to={el.path}>
            <button className={style.btnCheck}>{el.text}</button>
          </NavLink>
        );
      })}
    </>
  );
};
