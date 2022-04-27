import { combineReducers } from "redux";

import cities from "./city/reducers";
import points from "./point/reducers";
import models from "./models/reducers";

import placemarks from "./placemarks/reducers";
import optionalService from "./optionalService/reducers";

import modalWindows from "./modalWindows/reducers";

const rootReducer = combineReducers({
  cities,
  points,
  models,
  placemarks,
  optionalService,

  modalWindows,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
