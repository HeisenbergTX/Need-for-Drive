import { useDispatch, useSelector } from "react-redux";
import { ChooseModelCar } from "../../../store/models/actions";
import { getModelCar } from "../../../store/models/selectors";
import cn from "classnames";
import style from "./Car.module.css";

interface IProps {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  image: any;
}

export const Car: React.FC<IProps> = ({
  id,
  name,
  minPrice,
  maxPrice,
  image,
}) => {
  const dispatch = useDispatch();
  const modelCar = useSelector(getModelCar);

  const chooseCar = () => {
    if (modelCar.id === id) {
      dispatch(ChooseModelCar("", "", 0));
    } else {
      dispatch(ChooseModelCar(id, name, maxPrice));
    }
  };

  return (
    <div
      onClick={chooseCar}
      className={cn(style.section, {
        [style.active]: modelCar.id === id,
      })}
      key={id}
    >
      <div>
        <h3 className={style.nameCar}>{name.toUpperCase()}</h3>
        <p className={style.price}>
          {minPrice} - {maxPrice} ₽
        </p>
      </div>
      <div className={style.wrapperImg}>
        <img className={style.img} src={image} alt="image: car" />
      </div>
    </div>
  );
};
