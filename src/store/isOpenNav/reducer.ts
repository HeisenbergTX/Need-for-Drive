import { CHANGE_IS_OPEN_NAV } from "./type";

interface IState {
  isOpenNav: boolean;
}

interface IAction {
  type: string;
  payload: boolean;
}

const initialState: IState = {
  isOpenNav: false,
};

export default (state = initialState, { type, payload }: IAction) => {
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
