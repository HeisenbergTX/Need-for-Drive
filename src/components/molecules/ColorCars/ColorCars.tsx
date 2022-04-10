import { useDispatch, useSelector } from "react-redux";
import { getModelCar } from "../../../store/models/selectors";
import { chooseColorCar } from "../../../store/optionalService/actions";
import { getColorCar } from "../../../store/optionalService/selectors";
import style from "./ColorCars.module.css";

export const ColorCars = () => {
  const dispatch = useDispatch();
  const modelCar = useSelector(getModelCar);
  const colorCar = useSelector(getColorCar);

  const chooseAnyColor = () => dispatch(chooseColorCar("Любой"));

  return (
    <section className={style.section}>
      <p className={style.title}>Цвет</p>
      <div>
        <label onClick={chooseAnyColor} className={style.customRadio}>
          <input
            type="radio"
            name="color"
            defaultChecked={colorCar === "Любой"}
          />
          <span className={style.text}>Любой</span>
        </label>
        {modelCar.colors &&
          modelCar.colors
            .filter((color: string, index: number) => {
              return modelCar.colors.indexOf(color) === index;
            })
            .map((color: string) => {
              const chooseColor = () => dispatch(chooseColorCar(color));

              return (
                <label
                  onClick={chooseColor}
                  key={color}
                  className={style.customRadio}
                >
                  <input
                    type="radio"
                    name="color"
                    defaultChecked={colorCar === color}
                  />
                  <span className={style.text}>{color}</span>
                </label>
              );
            })}
      </div>
    </section>
  );
};
