import { useEffect } from "react";
import style from "./ModelsCars.module.css";

import { Car } from "../../atoms/Car/Car";
import { useDispatch, useSelector } from "react-redux";
import { getModelCar, getModels } from "../../../store/models/selectors";
import { FetchModelsRequest } from "../../../store/models/actions";
import { IModels } from "../../../store/types";

export const ModelsCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getModels);
  const modelCar = useSelector(getModelCar);

  useEffect(() => {
    dispatch(FetchModelsRequest());
  }, []);

  return (
    <ul className={style.section}>
      {cars.map((car: IModels) => {
        return (
          <li className={style.car} key={car.id}>
            <Car
              id={car.id}
              name={car.name}
              minPrice={car.priceMin}
              maxPrice={car.priceMax}
              colors={car.colors}
              image={car.thumbnail.path}
            />
          </li>
        );
      })}
    </ul>
  );
};
