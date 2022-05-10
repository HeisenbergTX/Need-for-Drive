import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { getPoint, getPoints } from "../../../store/point/selectors";
import style from "./CheckButton.module.css";
import { getModelCar } from "../../../store/models/selectors";
import { getOptions } from "../../../store/optionalService/selectors";
import { changeToogleOrderConfirm } from "../../../store/modalWindows/actions";
import { getToggleOrderConfirm } from "../../../store/modalWindows/selectors";
import { OrderConfirm } from "../OrderConfirm/OrderConfirm";
import { getCompiledOrder } from "../../../store/compiledOrder/selectors";
import { useEffect } from "react";

import { getStatusId } from "../../../store/statusId/selectors";

export const CheckButton = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);
  const modelCar = useSelector(getModelCar);
  const orderInfo = useSelector(getOptions);
  const order = useSelector(getCompiledOrder);
  const statusId = useSelector(getStatusId);

  const valueButton = useSelector(getToggleOrderConfirm);

  const fullnessCheck = [
    orderInfo.colorCar,
    orderInfo.rate,
    orderInfo.isRentalPeriod,
  ];
  const buttonActive = fullnessCheck.every((check) => check);

  let activePoint = points.find((el) => el.address === point);

  const clickPlaceOrder = () => {
    dispatch(changeToogleOrderConfirm(true));
  };

  const clickCancelOrder = () => {
    navigate(`/order/total`);
    window.location.reload();
  };

  const arrOrderIdOutput = [
    order.idOrder,
    order.orderStatusId?.name === "Подтвержденные",
  ];

  const orderIdOutput = arrOrderIdOutput.every((check) => check);

  useEffect(() => {
    if (orderIdOutput) {
      navigate(`/order/total/?id=${orderIdOutput && order.idOrder}`);
    }
  }, [order.idOrder]);

  const buttonNone = cn(style.btnCheck, { [style.buttonNone]: orderIdOutput });

  return (
    <>
      {location.pathname === "/order/place" && (
        <NavLink to="/order/models">
          <button disabled={activePoint ? false : true} className={buttonNone}>
            Выбрать модель
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/models" && (
        <NavLink to="/order/options">
          <button
            disabled={modelCar.name ? false : true}
            className={buttonNone}
          >
            Дополнительно
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/options" && (
        <NavLink to="/order/total">
          <button disabled={buttonActive ? false : true} className={buttonNone}>
            Итого
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/total" && (
        <button onClick={clickPlaceOrder} className={buttonNone}>
          Заказать
        </button>
      )}
      {orderIdOutput && (
        <button onClick={clickCancelOrder} className={style.cancel}>
          Отменить
        </button>
      )}
      {valueButton === true && (
        <article className={style.confirmOrder}>
          <OrderConfirm />
        </article>
      )}
    </>
  );
};
