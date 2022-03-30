import { ADD_PLACEMARK } from "./types";

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
    case ADD_PLACEMARK:
      return {
        ...state,
        placemarks: [...state.placemarks, payload],
      };
    default:
      return state;
  }
};
