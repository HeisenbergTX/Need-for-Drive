import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

import { Location } from "./Location/Location";
import { BurgerMenu } from "../../../Aside/BurgerMenu/BurgerMenu";
import { Navigation } from "../../../Aside/Navigation/Navigation";
import cn from "classnames";
import { useSelector } from "react-redux";
import { getIsOpenNav } from "../../../../store/isOpenNav/selector";

export const Header = () => {
  const isOpenNav = useSelector(getIsOpenNav);
  return (
    <header className={s.header}>
      <article className={cn(s.nav, { [s.navOpen]: isOpenNav })}>
        <Navigation />
      </article>
      <article className={s.burgerMenu}>
        <BurgerMenu />
      </article>
      <div className={s.headerBlock}>
        <Link className={s.link} to="#">
          Need for drive
        </Link>
        <article className={s.location}>
          <Location />
        </article>
      </div>
    </header>
  );
};
