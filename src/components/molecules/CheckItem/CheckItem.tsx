import React from "react";
import { useSelector } from "react-redux";
import { getCity } from "../../../store/city/selectors";
import { getPoint } from "../../../store/point/selectors";
import style from "./CheckItem.module.css";

export const CheckItem = () => {
  const city = useSelector(getCity);
  const street = useSelector(getPoint);
  return (
    <section className={style.section}>
      <p className={style.pickupPoint}>Пункт выдачи</p>
      <span className={style.dotted}></span>
      <span className={style.cityPickupPoint}>
        {city && `${city},`}
        <span className={style.streetPickupPoint}>{city && street}</span>
      </span>
    </section>
  );
};
