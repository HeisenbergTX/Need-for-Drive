import React, { useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import s from "./Slider.module.css";
import { getIsOpenNav } from "../../../store/isOpenNav/selector";
import { slides } from "./slides";
import { Dots } from "./Dots/Dots";

export const Slider = () => {
  const isOpenNav = useSelector(getIsOpenNav);

  return (
    <section className={s.section}>
      <div
        style={{
          backgroundImage: `${`url(${slides[0].img})`}`,
        }}
        className={cn(s.wrapper, { [s.hide]: isOpenNav })}
      >
        <button className={cn(s.prevArrow, s.arrow)} />
        <div className={s.block}>
          <div />
          <div className={s.slideInfo}>
            <h2 className={s.title}>{slides[0].title}</h2>
            <p className={s.subtitle}>{slides[0].subtitle}</p>
            <button
              style={{ background: `${slides[0].styleBtn}` }}
              className={s.btnMoreInfo}
            >
              Подробнее
            </button>
          </div>
          <Dots activeSlide={0} />
        </div>

        <button className={cn(s.nextArrow, s.arrow)} />
      </div>
    </section>
  );
};
