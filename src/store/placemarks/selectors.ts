import { RootState } from "../rootReducer";

export const getPlacemarkCities = (state: RootState) =>
  state.placemarks.coordinatesCity;

export const getPlacemarkPoints = (state: RootState) =>
  state.placemarks.coordinatesPoint;

export const getPlacemarkActive = (state: RootState) =>
  state.placemarks.coordinateActive;
