import { useSelector } from "react-redux";
import { getModelCar } from "../../../store/models/selectors";
import {
  getChildSeatCar,
  getFullTankCar,
  getRateCar,
  getRightHandDriveCar,
  getTimesRent,
} from "../../../store/optionalService/selectors";
import style from "./Price.module.css";

export const Price = () => {
  const modelCar = useSelector(getModelCar);
  const costFullTank = useSelector(getFullTankCar);
  const costChildSeat = useSelector(getChildSeatCar);
  const costRightHandDriveCar = useSelector(getRightHandDriveCar);
  const timesRentCar = useSelector(getTimesRent);
  const rate = useSelector(getRateCar);

  const minute = timesRentCar.minutes;
  const hour = timesRentCar.hours;
  const day = timesRentCar.days;

  const arrTimesRentCar = [minute, hour, day];

  const truthValidation = arrTimesRentCar.some((el) => el !== 0);

  const sumRateMinute = () => {
    if (rate === "Поминутно" && truthValidation) {
      return (
        (minute +
          (hour && hour * 60) +
          (hour && day ? day * 24 : day * 60 * 24)) *
        7
      );
    }
    return 0;
  };

  const sumRateDay = () => {
    if (rate === "На сутки" && truthValidation) {
      return day * 1999;
    }
    return 0;
  };

  const sumPrice =
    modelCar.minPrice +
    costFullTank.cost +
    costChildSeat.cost +
    costRightHandDriveCar.cost +
    sumRateMinute() +
    sumRateDay();

  return (
    <section className={style.section}>
      <span className={style.price}>Цена:</span>
      <span>{sumPrice} ₽</span>
    </section>
  );
};
