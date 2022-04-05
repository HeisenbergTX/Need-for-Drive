import React from "react";
import { CheckItem } from "../../molecules/CheckItem/CheckItem";
import { Price } from "../../atoms/Price/Price";
import style from "./Check.module.css";
import { CheckButton } from "../../atoms/CheckButton/CheckButton";

export const Check = () => {
  return (
    <section className={style.section}>
      <div className={style.checkInfo}>
        <h4 className={style.titleCheck}>Ваш заказ:</h4>
        <article className={style.checkItem}>
          <CheckItem />
        </article>
        <article className={style.price}>
          <Price />
        </article>
      </div>
      <article className={style.checkButton}>
        <CheckButton />
      </article>
    </section>
  );
};
