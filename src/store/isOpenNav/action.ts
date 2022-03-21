import { CHANGE_IS_OPEN_NAV } from "./type";

export const changeIsOpenNav = (payload: boolean) => ({
  type: CHANGE_IS_OPEN_NAV,
  payload,
});
