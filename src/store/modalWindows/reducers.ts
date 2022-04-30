import { IAction } from "../types";
import {
  CHANGE_IS_OPEN_NAV,
  CHANGE_TOGGLE_MODAL_CONFIRM,
  CHANGE_IS_OPEN_HIDE,
} from "./types";

interface IState {
  isOpenNav: boolean;
  isOpenHide: boolean;
  buttonConfirmOrder: boolean;
}

const initialState: IState = {
  isOpenNav: false,
  isOpenHide: false,
  buttonConfirmOrder: false,
};

export default (state = initialState, { type, payload }: IAction<boolean>) => {
  switch (type) {
    case CHANGE_IS_OPEN_NAV:
      return {
        ...state,
        isOpenNav: payload,
      };
    case CHANGE_IS_OPEN_HIDE:
      return {
        ...state,
        isOpenHide: payload,
      };
    case CHANGE_TOGGLE_MODAL_CONFIRM:
      return {
        ...state,
        buttonConfirmOrder: payload,
      };
    default:
      return state;
  }
};
