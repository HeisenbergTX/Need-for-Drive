import { useDispatch, useSelector } from "react-redux";
import { GetFilterName } from "../../../store/models/actions";
import { getModels } from "../../../store/models/selectors";
import { IModels } from "../../../store/types";
import style from "./ModelsFilter.module.css";

export const ModelsFilter = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getModels);

  const allModels = () => dispatch(GetFilterName("Все модели"));
  const arrFilt = cars.map((filt: IModels) => filt.categoryId.name);

  return (
    <section className={style.section}>
      <label className={style.customRadio}>
        <input onClick={allModels} type="radio" name="radio" defaultChecked />
        <span>Все модели</span>
      </label>
      {arrFilt
        .filter((filt: string, index: number) => {
          console.log(arrFilt);

          return arrFilt.indexOf(filt) === index;
        })
        .map((filt: string) => {
          const filtNameModels = () => dispatch(GetFilterName(filt));

          return (
            <label className={style.customRadio}>
              <input onClick={filtNameModels} type="radio" name="radio" />
              <span>{filt}</span>
            </label>
          );
        })}
    </section>
  );
};
