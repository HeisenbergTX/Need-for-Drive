import React from "react";
import style from "./Header.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cn from "classnames";

import { Location } from "../../atoms/Location/Location";
import { BurgerMenu } from "../../atoms/BurgerMenu/BurgerMenu";
import { Navigation } from "../Navigation/Navigation";
import { getIsOpenNav } from "../../../store/isOpenNav/selector";

export const Header = () => {
  const isOpenNav = useSelector(getIsOpenNav);
  return (
    <header className={style.header}>
      <article className={cn(style.nav, { [style.navOpen]: isOpenNav })}>
        <Navigation />
      </article>
      <article className={style.burgerMenu}>
        <BurgerMenu />
      </article>
      <div className={style.headerBlock}>
        <Link className={style.link} to="/Need-for-Drive">
          Need for drive
        </Link>
        <article className={style.location}>
          <Location />
        </article>
      </div>
    </header>
  );
};
