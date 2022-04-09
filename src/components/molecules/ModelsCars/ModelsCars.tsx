import { useEffect } from "react";
import style from "./ModelsCars.module.css";

import { Car } from "../../atoms/Car/Car";
import { useDispatch, useSelector } from "react-redux";
import { getFilterName, getModels } from "../../../store/models/selectors";
import { FetchModelsRequest } from "../../../store/models/actions";
import { IModels } from "../../../store/types";

export const ModelsCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getModels);
  const filterName = useSelector(getFilterName);

  useEffect(() => {
    dispatch(FetchModelsRequest());
  }, []);

  return (
    <ul className={style.section}>
      {filterName === "Все модели"
        ? cars.map((car: IModels) => {
            return (
              <li className={style.car} key={car.id}>
                <Car
                  id={car.id}
                  name={car.name}
                  minPrice={car.priceMin}
                  maxPrice={car.priceMax}
                  image={car.thumbnail.path}
                />
              </li>
            );
          })
        : cars
            .filter((car: IModels) => car.categoryId.name === filterName)
            .map((car: IModels) => {
              return (
                <li className={style.car} key={car.id}>
                  <Car
                    id={car.id}
                    name={car.name}
                    minPrice={car.priceMin}
                    maxPrice={car.priceMax}
                    image={car.thumbnail.path}
                  />
                </li>
              );
            })}
    </ul>
  );
};
