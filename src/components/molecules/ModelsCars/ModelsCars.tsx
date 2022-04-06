import React from "react";
import style from "./ModelsCars.module.css";

import { cars } from "./cars";
import { Car } from "../../atoms/Car/Car";

export const ModelsCars = () => {
  return (
    <ul className={style.section}>
      {cars.map((car) => {
        return (
          <li className={style.car} key={car.id}>
            <Car
              id={car.id}
              name={car.name}
              minPrice={car.minPrice}
              maxPrice={car.maxPrice}
              image={car.image}
            />
          </li>
        );
      })}
    </ul>
  );
};
