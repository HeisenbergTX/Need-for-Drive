import { useSelector } from "react-redux";
import { getModelCar } from "../../../store/models/selectors";
import style from "./Price.module.css";

export const Price = () => {
  const modelCar = useSelector(getModelCar);
  return (
    <section className={style.section}>
      <span className={style.price}>Цена:</span>
      <span>{modelCar.minPrice} ₽</span>
    </section>
  );
};
