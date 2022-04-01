import { ADD_PLACEMARK, ADD_PLACEMARK_CITY } from "./types";

interface IState {
  placemarks: unknown[];
}

const initialState: IState = {
  placemarks: [],
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case ADD_PLACEMARK_CITY:
      return {
        ...state,
        placemarks: [...state.placemarks, payload],
      };
    case ADD_PLACEMARK:
      return {
        ...state,
        placemarks: [...state.placemarks, payload],
      };
    default:
      return state;
  }
};
