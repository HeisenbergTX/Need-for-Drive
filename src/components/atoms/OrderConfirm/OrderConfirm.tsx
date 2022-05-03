import style from "./OrderConfirm.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsOpenHide,
  changeToogleOrderConfirm,
} from "../../../store/modalWindows/actions";
import {
  chooseStatusId,
  postOrderCreator,
} from "../../../store/compiledOrder/actions";
import { getCompiledOrder } from "../../../store/compiledOrder/selectors";
import { getIsOpenHide } from "../../../store/modalWindows/selectors";
import { Loader } from "../Loader/Loader";
import { getStatusId } from "../../../store/statusId/selectors";
import { useEffect } from "react";

export const OrderConfirm = () => {
  const dispatch = useDispatch();
  const order = useSelector(getCompiledOrder);
  const isOpenHide = useSelector(getIsOpenHide);
  const statusId = useSelector(getStatusId);

  if (
    order.orderStatusId.name === "Подтвержденные" &&
    order.idOrder !== order.orderStatusId.id
  ) {
    dispatch(changeToogleOrderConfirm(false));
    dispatch(changeIsOpenHide(false));
  }

  const clickConfirm = () => {
    dispatch(changeIsOpenHide(true));
    dispatch(
      chooseStatusId(
        statusId.find((status: any) => status.name === "Подтвержденные")
      )
    );
  };

  useEffect(() => {
    if (order.orderStatusId.name === "Подтвержденные") {
      dispatch(postOrderCreator(order));
    }
  }, [order.orderStatusId.name]);

  return (
    <section className={cn(style.section, { [style.hide]: isOpenHide })}>
      {isOpenHide && (
        <article className={style.loader}>
          <h5 className={style.titleLoading}>Подтверждение заказа...</h5>
          <Loader />
        </article>
      )}
      <p className={style.title}>Подтвердить заказ</p>
      <div className={style.blockButtons}>
        <button
          disabled={order.idOrder ? false : true}
          onClick={clickConfirm}
          className={cn(style.confirm, style.button)}
        >
          {order.idOrder ? "Подтвердить" : "Сбор данных..."}
        </button>
        <button
          onClick={() => dispatch(changeToogleOrderConfirm(false))}
          className={cn(style.cancel, style.button)}
        >
          Вернуться
        </button>
      </div>
    </section>
  );
};
