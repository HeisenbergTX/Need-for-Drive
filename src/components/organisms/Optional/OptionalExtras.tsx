import { ColorCars } from "../../molecules/ColorCars/ColorCars";
import { ExtraServices } from "../../molecules/ExtraServices/ExtraServices";
import { Rate } from "../../molecules/Rate/Rate";
import { RentalPeriod } from "../../molecules/RentalPeriod/RentalPeriod";
import style from "./OptionalExtras.module.css";

export const OptionalExtras = () => {
  return (
    <section className={style.section}>
      <ColorCars />
      <RentalPeriod />
      <Rate />
      <ExtraServices />
    </section>
  );
};
