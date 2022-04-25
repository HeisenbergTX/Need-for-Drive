import { useSelector } from "react-redux";
import { getModelCar } from "../../../store/models/selectors";
import style from "./ColorCars.module.css";

export const ColorCars = () => {
  let modelCar = useSelector(getModelCar);

  return (
    <section className={style.section}>
      <p className={style.title}>Цвет</p>
      <div>
        <label className={style.customRadio}>
          <input type="radio" name="color" />
          <span className={style.text}>Любой</span>
        </label>
        {modelCar.colors &&
          modelCar.colors
            .filter((color: string, index: number) => {
              return modelCar.colors.indexOf(color) === index;
            })
            .map((color: string) => {
              return (
                <label key={color} className={style.customRadio}>
                  <input type="radio" name="color" />
                  <span className={style.text}>{color}</span>
                </label>
              );
            })}
      </div>
    </section>
  );
};
