import { RootState } from "../rootReducer";

export const getCityPending = (state: RootState) => state.cities.pending;

export const getCities = (state: RootState) => state.cities.cities;

export const getCityError = (state: RootState) => state.cities.error;

export const getCity = (state: RootState) => state.cities.selectedCity;
