import { TotalOrder } from "../../molecules/TotalOrder/TotalOrder";
import style from "./Total.module.css";

export const Total = () => {
  return (
    <section className={style.section}>
      <article className={style.totalOrder}>
        <TotalOrder />
      </article>
    </section>
  );
};
