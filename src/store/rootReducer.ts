import { combineReducers } from "redux";

import cities from "./city/reducers";
import points from "./point/reducers";
import models from "./models/reducers";

import placemarks from "./placemarks/reducers";

import isOpenNav from "./isOpenNav/reducer";

const rootReducer = combineReducers({
  cities,
  points,
  models,

  placemarks,
  isOpenNav,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
