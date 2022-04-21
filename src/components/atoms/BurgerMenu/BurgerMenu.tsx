import React from "react";
import cn from "classnames";
import style from "./BurgerMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getIsOpenNav } from "../../../store/modalWindows/selectors";
import { changeIsOpenNav } from "../../../store/modalWindows/actions";

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
