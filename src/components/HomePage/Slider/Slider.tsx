import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import s from "./Slider.module.css";

import { Dots } from "./Dots/Dots";

import { slides } from "./slides";
import { getIsOpenNav } from "../../../store/isOpenNav/selector";

export const Slider = () => {
  const isOpenNav = useSelector(getIsOpenNav);

  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlideHandler = () => {
    if (activeSlide > 0) {
      setActiveSlide((state) => state - 1);
    } else {
      setActiveSlide((state) => slides.length - 1);
    }
  };

  const nextSlideHandler = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide((state) => state + 1);
    } else {
      setActiveSlide((state) => 0);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlideHandler, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  return (
    <section className={s.section}>
      <div
        style={{
          backgroundImage: `${`url(${slides[activeSlide].img})`}`,
        }}
        className={cn(s.wrapper, { [s.hide]: isOpenNav })}
      >
        <button
          onClick={prevSlideHandler}
          className={cn(s.prevArrow, s.arrow)}
        />
        <div className={s.slideInfo}>
          <div />
          <div className={s.infoBlock}>
            <h2 className={s.title}>{slides[activeSlide].title}</h2>
            <p className={s.subtitle}>{slides[activeSlide].subtitle}</p>
            <button
              style={{ background: `${slides[activeSlide].styleBtn}` }}
              className={s.btnMoreInfo}
            >
              Подробнее
            </button>
          </div>
          <Dots activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        </div>

        <button
          onClick={nextSlideHandler}
          className={cn(s.nextArrow, s.arrow)}
        />
      </div>
    </section>
  );
};
