import {
  FETCH_POINTS_REQUEST,
  FETCH_POINTS_SUCCESS,
  SELECTED_ADDRESS_POINT,
  FETCH_POINTS_ERROR,
} from "./types";

export const FetchPointsRequest = () => ({
  type: FETCH_POINTS_REQUEST,
});
export const FetchPointsSuccess = (payload: any) => ({
  type: FETCH_POINTS_SUCCESS,
  payload,
});
export const FetchPointsError = (payload: any) => ({
  type: FETCH_POINTS_ERROR,
});
export const SelectedAddressPoint = (payload: string) => ({
  type: SELECTED_ADDRESS_POINT,
  payload: {
    selectedPoint: payload,
  },
});
