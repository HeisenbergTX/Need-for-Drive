import { useSelector } from "react-redux";
import style from "./TotalOrder.module.css";
import cn from "classnames";
import { getOptions } from "../../../store/optionalService/selectors";
import { getModelCar } from "../../../store/models/selectors";

export const TotalOrder = () => {
  const selectedCar = useSelector(getModelCar);
  const completeOrder = useSelector(getOptions);

  let color;
  const reg = /\d{1,}/g;

  if (selectedCar?.colors && completeOrder.color === "Любой") {
    const randomColorCar = Math.floor(
      Math.random() * selectedCar.colors.length
    );
    color = selectedCar.colors[randomColorCar];
  } else {
    color = completeOrder.color;
  }

  const convertDateFrom = new Date(completeOrder.dateFrom);
  const convertDateTo = new Date(completeOrder.dateTo);

  return (
    <section className={style.section}>
      <div className={style.textInfo}>
        <p className={style.modelName}>{selectedCar.name}</p>
        <p className={style.numberCar}>
          {selectedCar.number
            ? selectedCar.number.replace(reg, ` $& `).toUpperCase()
            : "Нет номера"}
        </p>
        <p className={style.tankCar}>
          <span className={style.orderItem}>Топливо</span>
          {completeOrder.tank.fullTank ? "100%" : "60%"}
        </p>
        <p className={style.color}>
          <span className={style.orderItem}>Цвет</span>
          {color}
        </p>
        {completeOrder.childSeat.childSeat && (
          <div className={style.childSeat}>
            <span className={style.orderItem}>Детское кресло</span>
            <span>есть</span>
          </div>
        )}
        <p className={cn(style.rightHandDrive, style.orderItem)}>
          {completeOrder.rightHandDrive.rightHandDrive
            ? "Правый руль"
            : "Левый руль"}
        </p>
        {completeOrder.dateFrom && (
          <p className={style.date}>
            <span className={style.orderItem}>Доступна с</span>
            {convertDateFrom.toLocaleString()}
          </p>
        )}
        {completeOrder.dateTo && (
          <p className={style.date}>
            <span className={style.orderItem}>Доступна по</span>
            {convertDateTo.toLocaleString()}
          </p>
        )}
      </div>
      <img
        className={style.img}
        src={selectedCar.image}
        alt={"photo: yourCar"}
      />
    </section>
  );
};
