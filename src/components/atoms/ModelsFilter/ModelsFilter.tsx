import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFilterName } from "../../../store/models/actions";
import { getFilterName, getModels } from "../../../store/models/selectors";
import { IModels } from "../../../store/types";
import style from "./ModelsFilter.module.css";

export const ModelsFilter = () => {
  const [arrFilt, setArrFilt] = useState<string[]>([]);
  const dispatch = useDispatch();
  const cars = useSelector(getModels);
  const filterActive = useSelector(getFilterName);
  const allModels = () => dispatch(GetFilterName("Все модели"));

  useEffect(() => {
    setArrFilt(cars.map((filt: IModels) => filt.categoryId.name));
  }, [cars]);

  return (
    <section className={style.section}>
      <label className={style.customRadio}>
        <input
          onClick={allModels}
          type="radio"
          name="radio"
          defaultChecked={filterActive === "Все модели"}
        />
        <span>Все модели</span>
      </label>
      {arrFilt
        .filter((filt: string, index: number) => {
          return arrFilt.indexOf(filt) === index;
        })
        .map((filt: string) => {
          const filtNameModels = () => dispatch(GetFilterName(filt));

          return (
            <label key={filt} className={style.customRadio}>
              <input
                onClick={filtNameModels}
                type="radio"
                name="radio"
                defaultChecked={filterActive === filt}
              />
              <span>{filt}</span>
            </label>
          );
        })}
    </section>
  );
};
