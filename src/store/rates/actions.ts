import {
  FETCH_RATES_REQUEST,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_ERROR,
} from "./types";

export const FetchRatesRequest = () => ({
  type: FETCH_RATES_REQUEST,
});

export const FetchRatesSuccess = (payload: any) => ({
  type: FETCH_RATES_SUCCESS,
  payload,
});

export const FetchRatesError = (payload: any) => ({
  type: FETCH_RATES_ERROR,
});
