import { ADD_PLACEMARK } from "./types";

export const addPlacemark = (address: string, bounds: any) => ({
  type: ADD_PLACEMARK,
  payload: {
    address,
    bounds,
  },
});
