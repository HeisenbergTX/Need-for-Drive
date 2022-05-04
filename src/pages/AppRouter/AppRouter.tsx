import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Models } from "../../components/organisms/Models/Models";
import { OptionalExtras } from "../../components/organisms/Optional/OptionalExtras";
import { Place } from "../../components/organisms/Place/Place";
import { Total } from "../../components/organisms/Total/Total";
import { getCompiledOrder } from "../../store/compiledOrder/selectors";

import { HomePage } from "../HomePage/HomePage";
import { OrderPage } from "../OrderPage/OrderPage";

export const AppRouter = () => {
  const idOrder = useSelector(getCompiledOrder);

  const arrOrderIdOutput = [
    idOrder.idOrder,
    idOrder.orderStatusId?.name === "Подтвержденные",
  ];

  const orderIdOutput = arrOrderIdOutput.every((check) => check);

  return (
    <Routes>
      <Route path="/Need-for-Drive" element={<HomePage />} />
      <Route path="/" element={<OrderPage />}>
        <Route path="order/place" element={<Place />} />
        <Route path="order/models" element={<Models />} />
        <Route path="order/options" element={<OptionalExtras />} />
        <Route path="order/total" element={<Total />} />
        <Route
          path={`order/total/?id=${orderIdOutput && idOrder.idOrder}`}
          element={<Total />}
        />
      </Route>
    </Routes>
  );
};
