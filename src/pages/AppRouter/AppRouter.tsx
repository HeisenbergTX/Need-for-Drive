import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { OrderPage } from "../OrderPage/OrderPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Need-for-Drive" element={<HomePage />} />
      <Route path="/order/place" element={<OrderPage />} />
    </Routes>
  );
};
