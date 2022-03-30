import { IAction, ICity } from "../types";

import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR,
  SELECTED_ADDRESS_CITY,
} from "./types";

interface IState {
  pending: boolean;
  cities: ICity[];
  error: null | string;
  selectedCity: string;
}

const initialState: IState = {
  pending: false,
  cities: [],
  error: null,
  selectedCity: "",
};

export default (
  state = initialState,
  {
    type,
    payload,
  }: IAction<{ cities: ICity[]; selectedCity: string; error: string }>
) => {
  switch (type) {
    case FETCH_CITIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        pending: false,
        cities: payload.cities,
      };
    case SELECTED_ADDRESS_CITY:
      return {
        ...state,
        selectedCity: payload.selectedCity,
      };
    case FETCH_CITIES_ERROR:
      return {
        ...state,
        error: payload.error,
      };

    default:
      return state;
  }
};
