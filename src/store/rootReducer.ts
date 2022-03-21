import { combineReducers } from "redux";

import isOpenNav from "./isOpenNav/reducer";

const rootReducer = combineReducers({
  isOpenNav,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
