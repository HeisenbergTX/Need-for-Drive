import React from "react";
import style from "./CheckItem.module.css";

export const CheckItem = () => {
  return (
    <section className={style.section}>
      <p className={style.pickupPoint}>Пункт выдачи</p>
      <span className={style.dotted}></span>
      <span className={style.addressPickupPoint}>Ульяновск, Нариманова 42</span>
    </section>
  );
};
