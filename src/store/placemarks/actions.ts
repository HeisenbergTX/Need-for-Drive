import { ADD_PLACEMARK, ADD_PLACEMARK_CITY } from "./types";

export const addPlacemark = (address: string, bounds: any) => ({
  type: ADD_PLACEMARK,
  payload: {
    address,
    bounds,
  },
});

export const addPlacemarkCity = (city: string, bounds: any) => ({
  type: ADD_PLACEMARK_CITY,
  payload: {
    city,
    bounds,
  },
});
