import React from "react";
import cn from "classnames";
import style from "./OrderPage.module.css";
import { Header } from "../../components/molecules/Header/Header";
import { Steps } from "../../components/molecules/Steps/Steps";
import { Place } from "../../components/organisms/Place/Place";
import { Check } from "../../components/organisms/Check/Check";
import { useSelector } from "react-redux";
import { getIsOpenNav } from "../../store/isOpenNav/selector";
import { OrderRouter } from "../OrderRouter/OrderRouter";

export const OrderPage = () => {
  const isOpenNav = useSelector(getIsOpenNav);
  return (
    <section className={cn(style.section, { [style.hide]: isOpenNav })}>
      <article className={style.header}>
        <Header />
      </article>
      <article className={style.steps}>
        <Steps />
      </article>
      <div className={style.content}>
        <article className={style.forms}>
          <OrderRouter />
        </article>
        <article className={style.check}>
          <Check />
        </article>
      </div>
    </section>
  );
};
