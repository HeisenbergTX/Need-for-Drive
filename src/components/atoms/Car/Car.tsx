import React from "react";
import style from "./Car.module.css";

interface IProps {
  id: number;
  name: string;
  minPrice: string;
  maxPrice: string;
  image: any;
}

export const Car: React.FC<IProps> = ({
  id,
  name,
  minPrice,
  maxPrice,
  image,
}) => {
  return (
    <section className={style.section} key={id}>
      <div>
        <h3 className={style.nameCar}>{name}</h3>
        <p className={style.price}>
          {minPrice} - {maxPrice} ₽
        </p>
      </div>
      <div className={style.wrapperImg}>
        <img className={style.img} src={image} alt="image: car" />
      </div>
    </section>
  );
};
