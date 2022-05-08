import {
  ADD_PLACEMARK,
  ADD_PLACEMARK_CITY,
  ADD_PLACEMARK_ACTIVE,
} from "./types";

export const addPlacemark = (coordinates: number[]) => ({
  type: ADD_PLACEMARK,
  payload: {
    coordinates,
  },
});

export const addPlacemarkCity = (coordinates: number[]) => ({
  type: ADD_PLACEMARK_CITY,
  payload: {
    coordinates,
  },
});

export const addPlacemarkActive = (coordinates: number[]) => ({
  type: ADD_PLACEMARK_ACTIVE,
  payload: {
    coordinates,
  },
});
