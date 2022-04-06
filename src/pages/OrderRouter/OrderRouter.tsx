import React from "react";
import { Route, Routes } from "react-router-dom";

import { Models } from "../../components/organisms/Models/Models";
import { Place } from "../../components/organisms/Place/Place";

export const OrderRouter = () => {
  return (
    <Routes>
      <Route path="/order/place" element={<Place />} />
      <Route path="/order/models" element={<Models />} />
    </Routes>
  );
};
