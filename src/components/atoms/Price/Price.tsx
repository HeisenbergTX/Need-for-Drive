import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { choosePrice } from "../../../store/compiledOrder/actions";
import { getModelCar } from "../../../store/models/selectors";
import {
  getChildSeatCar,
  getFullTankCar,
  getRateCar,
  getRightHandDriveCar,
  getTimesRent,
} from "../../../store/optionalService/selectors";
import { getRates } from "../../../store/rates/selectors";
import style from "./Price.module.css";

export const Price = () => {
  const dispatch = useDispatch();
  const modelCar = useSelector(getModelCar);
  const costFullTank = useSelector(getFullTankCar);
  const costChildSeat = useSelector(getChildSeatCar);
  const costRightHandDriveCar = useSelector(getRightHandDriveCar);
  const timesRentCar = useSelector(getTimesRent);
  const rates = useSelector(getRates);
  const rate = useSelector(getRateCar);

  const minute = timesRentCar.minutes;
  const hour = timesRentCar.hours;
  const day = timesRentCar.days;

  const arrTimesRentCar = [minute, hour, day];

  const truthValidation = arrTimesRentCar.some((el) => el !== 0);

  const sumRate = () => {
    if (rate.name === "Поминутно" && truthValidation) {
      return (
        (minute +
          (hour && hour * 60) +
          (hour && day ? day * 24 : day * 60 * 24)) *
        rate.price
      );
    }
    if (rate.name === "Суточный" && truthValidation) {
      return day * rate.price;
    }
    return rate.price;
  };

  const sumPrice =
    modelCar.minPrice +
    costFullTank.cost +
    costChildSeat.cost +
    costRightHandDriveCar.cost +
    sumRate();

  useEffect(() => {
    dispatch(choosePrice(sumPrice));
  }, [sumPrice]);

  return (
    <section className={style.section}>
      <span className={style.price}>Цена:</span>
      <span>{sumPrice} ₽</span>
    </section>
  );
};
