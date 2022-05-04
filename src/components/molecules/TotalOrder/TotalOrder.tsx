import { useDispatch, useSelector } from "react-redux";
import style from "./TotalOrder.module.css";
import cn from "classnames";
import { getOptions } from "../../../store/optionalService/selectors";
import { getModelCar, getModels } from "../../../store/models/selectors";
import { useEffect } from "react";

import {
  getCompiledOrder,
  getOrder,
} from "../../../store/compiledOrder/selectors";
import {
  chooseCarId,
  chooseChildChair,
  chooseCityId,
  chooseColor,
  chooseDateFrom,
  chooseDateTo,
  chooseFullTank,
  chooseIdOrder,
  choosePointId,
  chooseRateId,
  chooseRightWheel,
  chooseStatusId,
} from "../../../store/compiledOrder/actions";
import { getPoint, getPoints } from "../../../store/point/selectors";
import { getCities, getCity } from "../../../store/city/selectors";
import { ChooseModelCar } from "../../../store/models/actions";
import { SelectedAddressCity } from "../../../store/city/actions";
import { SelectedAddressPoint } from "../../../store/point/actions";
import { Loader } from "../../atoms/Loader/Loader";
import {
  chooseChildSeatCar,
  chooseFullTankCar,
  chooseRightHandDriveCar,
} from "../../../store/optionalService/actions";

export const TotalOrder = () => {
  const dispatch = useDispatch();
  const points = useSelector(getPoints);
  const cities = useSelector(getCities);
  const point = useSelector(getPoint);
  const city = useSelector(getCity);
  const models = useSelector(getModels);
  const colorCar = useSelector(getCompiledOrder);
  const selectedCar = useSelector(getModelCar);
  const completeOrder = useSelector(getOptions);
  const car = useSelector(getModelCar);
  const idOrder = useSelector(getCompiledOrder);
  const order = useSelector(getOrder);

  const modelCar = order.orderData.carId;

  const cityId = cities.find((cityId) => {
    return cityId.name == city;
  });
  const pointId = points.find((pointId) => {
    return pointId.address == point;
  });

  let color: string;

  useEffect(() => {
    dispatch(chooseColor(color));
    dispatch(chooseCityId(cityId!));
    dispatch(choosePointId(pointId!));
    dispatch(chooseCarId(models.find((model: any) => model.id === car.id)));
    dispatch(chooseDateFrom(Date.parse(completeOrder.valueDateFrom)));
    dispatch(chooseDateTo(Date.parse(completeOrder.valueDateTo)));
    dispatch(chooseRateId(completeOrder.rate));
    dispatch(chooseFullTank(completeOrder.tank.fullTank));
    dispatch(chooseChildChair(completeOrder.childSeat.childSeat));
    dispatch(chooseRightWheel(completeOrder.rightHandDrive.rightHandDrive));
  }, []);

  useEffect(() => {
    if (order.orderData.id) {
      dispatch(
        ChooseModelCar(
          modelCar?.id,
          modelCar?.name,
          modelCar?.priceMin,
          modelCar?.colors,
          modelCar?.number,
          modelCar?.thumbnail.path
        )
      );
      dispatch(SelectedAddressCity(order.orderData?.cityId?.name));
      dispatch(SelectedAddressPoint(order.orderData?.pointId?.address));

      dispatch(chooseColor(order.orderData?.color));
      dispatch(chooseRateId(order.orderData?.rateId));
      dispatch(chooseFullTankCar(order.orderData?.isFullTank, 500));
      dispatch(chooseChildSeatCar(order.orderData?.isNeedChildChair, 200));
      dispatch(chooseRightHandDriveCar(order.orderData?.isRightWheel, 1600));
      dispatch(chooseIdOrder(order.orderData?.id));
      dispatch(chooseStatusId(order.orderData?.orderStatusId));
    }
  }, [order.orderData.id]);

  const reg = /\d{1,}/g;

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

  const arrOrderIdOutput = [
    idOrder.idOrder,
    idOrder.orderStatusId?.name === "Подтвержденные",
  ];

  const orderIdOutput = arrOrderIdOutput.every((check) => check);

  return (
    <section className={cn(style.section, { [style.hide]: order.pending })}>
      {order.pending && (
        <article className={style.loader}>
          <h5 className={style.titleLoading}>Получение заказа...</h5>
          <Loader />
        </article>
      )}
      <div className={style.textInfo}>
        {orderIdOutput && (
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

        <p className={style.date}>
          <span className={style.orderItem}>Доступна с</span>
          {completeOrder.valueDateFrom
            ? convertDateFrom.toLocaleString()
            : new Date(order.orderData?.dateTo).toLocaleString()}
        </p>

        <p className={style.date}>
          <span className={style.orderItem}>Доступна по</span>
          {completeOrder.valueDateTo
            ? convertDateTo.toLocaleString()
            : new Date(order.orderData?.dateTo).toLocaleString()}
        </p>
      </div>
      <img className={style.img} src={selectedCar.image} alt={"imageCar"} />
    </section>
  );
};
