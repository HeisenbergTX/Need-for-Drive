import { IAction } from "./../types";
import { CHANGE_IS_OPEN_NAV } from "./type";

interface IState {
  isOpenNav: boolean;
}

const initialState: IState = {
  isOpenNav: false,
};

export default (state = initialState, { type, payload }: IAction<boolean>) => {
  switch (type) {
    case CHANGE_IS_OPEN_NAV:
      return {
        ...state,
        isOpenNav: payload,
      };
    default:
      return state;
  }
};
