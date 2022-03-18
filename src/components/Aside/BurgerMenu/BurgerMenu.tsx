import React, { useEffect, useState } from "react";
import cn from "classnames";
import s from "./BurgerMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getIsOpenNav } from "../../../store/isOpenNav/selector";
import { changeIsOpenNav } from "../../../store/isOpenNav/action";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isOpenNav = useSelector(getIsOpenNav);

  return (
    <button
      onClick={() => dispatch(changeIsOpenNav(!isOpenNav))}
      className={cn(s.burgerMenu, {
        [s.active]: isOpenNav,
      })}
    >
      <span className={cn(null, { [s.active]: isOpenNav })}></span>
      <span className={cn(null, { [s.active]: isOpenNav })}></span>
      <span className={cn(null, { [s.active]: isOpenNav })}></span>
    </button>
  );
};
