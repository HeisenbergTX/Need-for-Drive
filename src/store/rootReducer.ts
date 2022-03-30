import { combineReducers } from "redux";

import cities from "./city/reducers";
import points from "./point/reducers";

import placemarks from "./placemarks/reducers";

import isOpenNav from "./isOpenNav/reducer";

const rootReducer = combineReducers({
  cities,
  points,

  placemarks,

  isOpenNav,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
