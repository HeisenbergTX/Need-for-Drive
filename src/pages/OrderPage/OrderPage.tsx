import React from "react";
import style from "./OrderPage.module.css";
import { Header } from "../../components/molecules/Header/Header";
import { Steps } from "../../components/molecules/Steps/Steps";
import { Place } from "../../components/organisms/Place/Place";
import { Check } from "../../components/organisms/Check/Check";

export const OrderPage = () => {
  return (
    <section className={style.section}>
      <article className={style.header}>
        <Header />
      </article>
      <article className={style.steps}>
        <Steps />
      </article>
      <div className={style.content}>
        <article className={style.place}>
          <Place />
        </article>
        <article className={style.check}>
          <Check />
        </article>
      </div>
    </section>
  );
};
