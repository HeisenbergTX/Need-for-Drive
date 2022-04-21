import style from "./OrderConfirm.module.css";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { changeToogleOrderConfirm } from "../../../store/modalWindows/actions";

export const OrderConfirm = () => {
  const dispatch = useDispatch();
  return (
    <section className={style.section}>
      <p className={style.title}>Подтвердить заказ</p>
      <div className={style.blockButtons}>
        <button className={cn(style.confirm, style.button)}>Подтвердить</button>
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
