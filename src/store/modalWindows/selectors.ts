import { RootState } from "../rootReducer";

export const getIsOpenNav = (state: RootState) => state.modalWindows.isOpenNav;

export const getToggleOrderConfirm = (state: RootState) =>
  state.modalWindows.buttonConfirmOrder;
