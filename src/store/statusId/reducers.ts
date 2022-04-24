import { IStatusId } from "./../types";
import { REQUEST_STATUS_ID, SUCCESS_STATUS_ID, ERROR_STATUS_ID } from "./types";

interface IState {
  pending: boolean;
  statusId: IStatusId[];
  error: null | string;
}

const initialState: IState = {
  pending: false,
  statusId: [],
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case REQUEST_STATUS_ID:
      return {
        ...state,
        pending: true,
      };
    case SUCCESS_STATUS_ID:
      return {
        ...state,
        pending: false,
        statusId: payload.statusId,
      };
    case ERROR_STATUS_ID:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
