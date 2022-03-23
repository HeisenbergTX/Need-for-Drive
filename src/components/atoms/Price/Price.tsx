import React from "react";
import style from "./Price.module.css";

export const Price = () => {
  return (
    <section className={style.section}>
      <span className={style.price}>Цена:</span>
      <span>от 8000 до 12000₽</span>
    </section>
  );
};
