import { useDispatch, useSelector } from "react-redux";
import style from "./TotalOrder.module.css";
import cn from "classnames";
import { getOptions } from "../../../store/optionalService/selectors";
import { getModelCar, getModels } from "../../../store/models/selectors";
import { useEffect } from "react";
import { getStatusId } from "../../../store/statusId/selectors";

import { getCompiledOrder } from "../../../store/compiledOrder/selectors";
import {
  chooseCarId,
  chooseChildChair,
  chooseColor,
  chooseDateFrom,
  chooseDateTo,
  chooseFullTank,
  chooseRateId,
  chooseRightWheel,
  chooseStatusId,
} from "../../../store/compiledOrder/actions";

export const TotalOrder = () => {
  const dispatch = useDispatch();
  const statusId = useSelector(getStatusId);
  const models = useSelector(getModels);
  const colorCar = useSelector(getCompiledOrder);
  const selectedCar = useSelector(getModelCar);
  const completeOrder = useSelector(getOptions);
  const car = useSelector(getModelCar);
  const idOrder = useSelector(getCompiledOrder);

  useEffect(() => {
    dispatch(
      chooseStatusId(statusId.find((status: any) => status.name === "Новые"))
    );
    dispatch(chooseCarId(models.find((model: any) => model.id === car.id)));
    dispatch(chooseDateFrom(Date.parse(completeOrder.valueDateFrom)));
    dispatch(chooseDateTo(Date.parse(completeOrder.valueDateTo)));
    dispatch(chooseRateId(completeOrder.rate));
    dispatch(chooseFullTank(completeOrder.tank.fullTank));
    dispatch(chooseChildChair(completeOrder.childSeat.childSeat));
    dispatch(chooseRightWheel(completeOrder.rightHandDrive.rightHandDrive));
  }, []);

  let color: string;
  const reg = /\d{1,}/g;

  useEffect(() => {
    dispatch(chooseColor(color));
  }, []);

  if (selectedCar?.colors && completeOrder.colorCar === "Любой") {
    const randomColorCar = Math.floor(
      Math.random() * selectedCar.colors.length
    );
    color = selectedCar.colors[randomColorCar];
  } else {
    color = completeOrder.colorCar;
  }

  const convertDateFrom = new Date(completeOrder.valueDateFrom);
  const convertDateTo = new Date(completeOrder.valueDateTo);

  return (
    <section className={style.section}>
      <div className={style.textInfo}>
        {idOrder.idOrder && (
          <h2 className={style.title}>Ваш заказ подтверждён</h2>
        )}
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
          {colorCar.color}
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
        {completeOrder.valueDateFrom && (
          <p className={style.date}>
            <span className={style.orderItem}>Доступна с</span>
            {convertDateFrom.toLocaleString()}
          </p>
        )}
        {completeOrder.valueDateTo && (
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
