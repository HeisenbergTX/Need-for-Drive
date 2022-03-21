import React from "react";
import cn from "classnames";
import style from "./BurgerMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getIsOpenNav } from "../../../store/isOpenNav/selector";
import { changeIsOpenNav } from "../../../store/isOpenNav/action";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isOpenNav = useSelector(getIsOpenNav);

  return (
    <button
      onClick={() => dispatch(changeIsOpenNav(!isOpenNav))}
      className={cn(style.burgerMenu, {
        [style.active]: isOpenNav,
      })}
    >
      <span className={cn(null, { [style.active]: isOpenNav })}></span>
      <span className={cn(null, { [style.active]: isOpenNav })}></span>
      <span className={cn(null, { [style.active]: isOpenNav })}></span>
    </button>
  );
};
