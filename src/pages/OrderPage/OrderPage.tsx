import cn from "classnames";
import style from "./OrderPage.module.css";
import { Header } from "../../components/molecules/Header/Header";
import { Steps } from "../../components/molecules/Steps/Steps";
import { Check } from "../../components/organisms/Check/Check";
import { useSelector } from "react-redux";
import { getIsOpenNav } from "../../store/modalWindows/selectors";
import { OrderRouter } from "../OrderRouter/OrderRouter";
import { Loader } from "../../components/atoms/Loader/Loader";
import { getModelPendng } from "../../store/models/selectors";

export const OrderPage = () => {
  const isOpenNav = useSelector(getIsOpenNav);
  const pending = useSelector(getModelPendng);

  return (
    <section
      className={cn(style.section, { [style.hide]: isOpenNav || pending })}
    >
      {pending && (
        <article className={style.loader}>
          <Loader />
        </article>
      )}
      <article className={style.header}>
        <Header />
      </article>
      <article className={style.steps}>
        <Steps />
      </article>
      <div className={style.content}>
        <article className={style.forms}>
          <OrderRouter />
        </article>
        <article className={style.check}>
          <Check />
        </article>
      </div>
    </section>
  );
};
