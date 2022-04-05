import { IAction, IPoint } from "../types";
import {
  FETCH_POINTS_REQUEST,
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_ERROR,
  SELECTED_ADDRESS_POINT,
} from "./types";

interface IState {
  pending: boolean;
  points: IPoint[];
  error: null | string;
  selectedPoint: string;
}

const initialState: IState = {
  pending: false,
  points: [],
  error: null,
  selectedPoint: "",
};

export default (
  state = initialState,
  {
    type,
    payload,
  }: IAction<{ points: IPoint[]; selectedPoint: string; error: string }>
) => {
  switch (type) {
    case FETCH_POINTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POINTS_SUCCESS:
      return {
        ...state,
        pending: false,
        points: payload.points,
      };
    case SELECTED_ADDRESS_POINT:
      return {
        ...state,
        selectedPoint: payload.selectedPoint,
      };
    case FETCH_POINTS_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
