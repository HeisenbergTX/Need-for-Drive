import React from "react";
import style from "./Aside.module.css";
import { BurgerMenu } from "../../atoms/BurgerMenu/BurgerMenu";
import { Navigation } from "../Navigation/Navigation";

import cn from "classnames";
import { useSelector } from "react-redux";
import { getIsOpenNav } from "../../../store/modalWindows/selectors";

export const Aside = () => {
  const isOpenNav = useSelector(getIsOpenNav);
  return (
    <section className={style.section}>
      <article className={style.burgerMenu}>
        <BurgerMenu />
      </article>
      <article className={cn(style.nav, { [style.navOpen]: isOpenNav })}>
        <Navigation />
      </article>
    </section>
  );
};
