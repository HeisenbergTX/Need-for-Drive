import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCity } from "../../../store/city/selectors";
import style from "./CheckButton.module.css";

const btnCheck = [
  {
    id: 0,
    text: "Выбрать модель",
    path: "/order/models",
  },
];

export const CheckButton = () => {
  const city = useSelector(getCity);
  return (
    <>
      {btnCheck.map((el) => {
        return (
          <NavLink key={el.id} to="#">
            <button disabled={city ? false : true} className={style.btnCheck}>
              {el.text}
            </button>
          </NavLink>
        );
      })}
    </>
  );
};
