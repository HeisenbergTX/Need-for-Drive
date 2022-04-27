import { CHANGE_IS_OPEN_NAV, CHANGE_TOGGLE_MODAL_CONFIRM } from "./types";

export const changeIsOpenNav = (payload: boolean) => ({
  type: CHANGE_IS_OPEN_NAV,
  payload,
});

export const changeToogleOrderConfirm = (payload: boolean) => ({
  type: CHANGE_TOGGLE_MODAL_CONFIRM,
  payload,
});
