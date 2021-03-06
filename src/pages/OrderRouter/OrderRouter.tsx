import { Route, Routes } from "react-router-dom";

import { Models } from "../../components/organisms/Models/Models";
import { OptionalExtras } from "../../components/organisms/Optional/OptionalExtras";
import { Place } from "../../components/organisms/Place/Place";

export const OrderRouter = () => {
  return (
    <Routes>
      <Route path="/order/place" element={<Place />} />
      <Route path="/order/models" element={<Models />} />
      <Route path="order/options" element={<OptionalExtras />} />
    </Routes>
  );
};
