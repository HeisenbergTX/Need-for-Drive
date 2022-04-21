import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPoint, getPoints } from "../../../store/point/selectors";
import style from "./CheckButton.module.css";
import { getModelCar } from "../../../store/models/selectors";
import { getOptions } from "../../../store/optionalService/selectors";
import { changeToogleOrderConfirm } from "../../../store/modalWindows/actions";
import { getToggleOrderConfirm } from "../../../store/modalWindows/selectors";
import { OrderConfirm } from "../OrderConfirm/OrderConfirm";

export const CheckButton = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);
  const modelCar = useSelector(getModelCar);
  const orderInfo = useSelector(getOptions);

  
  const valueButton = useSelector(getToggleOrderConfirm);

  const fullnessCheck = [
    orderInfo.color,
    orderInfo.rate,
    orderInfo.isRentalPeriod,
  ];
  const buttonActive = fullnessCheck.every((check) => check);

  let activePoint = points.find((el) => el.address === point);

  const clickPlaceOrder = () => {
    dispatch(changeToogleOrderConfirm(true));
  };

  return (
    <>
      {location.pathname === "/order/place" && (
        <NavLink to="/order/models">
          <button
            disabled={activePoint ? false : true}
            className={style.btnCheck}
          >
            Выбрать модель
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/models" && (
        <NavLink to="/order/options">
          <button
            disabled={modelCar.name ? false : true}
            className={style.btnCheck}
          >
            Дополнительно
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/options" && (
        <NavLink to="/order/total">
          <button
            disabled={buttonActive ? false : true}
            className={style.btnCheck}
          >
            Итого
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/total" && (
        <NavLink to="/order/total">
          <button onClick={clickPlaceOrder} className={style.btnCheck}>Заказать</button>
        </NavLink>
      )}
      {valueButton === true && (
        <article className={style.confirmOrder}>
          <OrderConfirm />
        </article>
      )}
    </>
  );
};
