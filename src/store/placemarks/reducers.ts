import {
  ADD_PLACEMARK,
  ADD_PLACEMARK_ACTIVE,
  ADD_PLACEMARK_CITY,
} from "./types";

interface IState {
  coordinatesCity: number[];
  coordinatesPoint: number[];
  coordinateActive: number[];
}

const initialState: IState = {
  coordinatesCity: [],
  coordinatesPoint: [],
  coordinateActive: [],
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case ADD_PLACEMARK_CITY:
      return {
        ...state,
        coordinatesCity: [...state.coordinatesCity, payload],
      };
    case ADD_PLACEMARK:
      return {
        ...state,
        coordinatesPoint: [...state.coordinatesPoint, payload],
      };
    case ADD_PLACEMARK_ACTIVE:
      return {
        ...state,
        coordinateActive: payload,
      };
    default:
      return state;
  }
};
