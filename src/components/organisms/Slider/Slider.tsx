import React from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import style from "./Slider.module.css";
import { getIsOpenNav } from "../../../store/isOpenNav/selector";
import { slides } from "./slides";
import { Dots } from "../../molecules/Dots/Dots";

export const Slider = () => {
  const isOpenNav = useSelector(getIsOpenNav);

  return (
    <section className={style.section}>
      <div
        style={{
          backgroundImage: `${`url(${slides[0].img})`}`,
        }}
        className={cn(style.wrapper, { [style.hide]: isOpenNav })}
      >
        <button className={cn(style.prevArrow, style.arrow)} />
        <div className={style.block}>
          <div />
          <div className={style.slideInfo}>
            <h2 className={style.title}>{slides[0].title}</h2>
            <p className={style.subtitle}>{slides[0].subtitle}</p>
            <button
              style={{ background: `${slides[0].styleBtn}` }}
              className={style.btnMoreInfo}
            >
              Подробнее
            </button>
          </div>
          <Dots activeSlide={0} />
        </div>

        <button className={cn(style.nextArrow, style.arrow)} />
      </div>
    </section>
  );
};
