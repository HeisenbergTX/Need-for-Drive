import React from "react";
import s from "./Aside.module.css";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Navigation } from "./Navigation/Navigation";

import cn from "classnames";
import { useSelector } from "react-redux";
import { getIsOpenNav } from "../../store/isOpenNav/selector";

export const Aside = () => {
  const isOpenNav = useSelector(getIsOpenNav);
  return (
    <section className={s.section}>
      <article className={s.burgerMenu}>
        <BurgerMenu />
      </article>
      <article className={cn(s.nav, { [s.navOpen]: isOpenNav })}>
        <Navigation />
      </article>
    </section>
  );
};
