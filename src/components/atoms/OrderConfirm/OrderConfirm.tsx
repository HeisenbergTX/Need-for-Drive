import style from "./OrderConfirm.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { changeToogleOrderConfirm } from "../../../store/modalWindows/actions";
import { postOrderCreator } from "../../../store/compiledOrder/actions";
import { getCompiledOrder } from "../../../store/compiledOrder/selectors";

export const OrderConfirm = () => {
  const dispatch = useDispatch();
  const order = useSelector(getCompiledOrder);
  return (
    <section className={style.section}>
      <p className={style.title}>Подтвердить заказ</p>
      <div className={style.blockButtons}>
        <button
          onClick={() => dispatch(postOrderCreator(order))}
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
