import { Route, Routes } from "react-router-dom";
import { Models } from "../../components/organisms/Models/Models";
import { OptionalExtras } from "../../components/organisms/Optional/OptionalExtras";
import { Place } from "../../components/organisms/Place/Place";

import { HomePage } from "../HomePage/HomePage";
import { OrderPage } from "../OrderPage/OrderPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Need-for-Drive" element={<HomePage />} />
      <Route path="/" element={<OrderPage />}>
        <Route path="order/place" element={<Place />} />
        <Route path="order/models" element={<Models />} />
        <Route path="order/options" element={<OptionalExtras />} />
      </Route>
    </Routes>
  );
};
