import { combineReducers } from "redux";

import cities from "./city/reducers";
import points from "./point/reducers";
import models from "./models/reducers";
import rates from "./rates/reducers";
import statusId from "./statusId/reducers";

import placemarks from "./placemarks/reducers";
import optionalService from "./optionalService/reducers";
import compiledOrder from "./compiledOrder/reducers";

import modalWindows from "./modalWindows/reducers";

const rootReducer = combineReducers({
  cities,
  points,
  models,
  rates,
  statusId,
  placemarks,
  optionalService,
  compiledOrder,

  modalWindows,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
