import style from "./OrderConfirm.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsOpenHide,
  changeToogleOrderConfirm,
} from "../../../store/modalWindows/actions";
import { postOrderCreator } from "../../../store/compiledOrder/actions";
import { getCompiledOrder } from "../../../store/compiledOrder/selectors";
import { getIsOpenHide } from "../../../store/modalWindows/selectors";
import { Loader } from "../Loader/Loader";

export const OrderConfirm = () => {
  const dispatch = useDispatch();
  const order = useSelector(getCompiledOrder);
  const isOpenHide = useSelector(getIsOpenHide);
  if (order.idOrder) {
    dispatch(changeToogleOrderConfirm(false));
    dispatch(changeIsOpenHide(false));
  }
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
          onClick={() => {
            dispatch(postOrderCreator(order));
            dispatch(changeIsOpenHide(true));
          }}
          className={cn(style.confirm, style.button)}
        >
          Подтвердить
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
