import { IModels } from "./../types";
import {
  FETCH_MODELS_REQUEST,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_ERROR,
  GET_FILTER_NAME,
  CHOOSE_MODEL_CAR,
} from "./types";

interface IState {
  pending: boolean;
  models: IModels[];
  chooseModelCar: {};
  filterName: string;
  error: null | string;
}

const initialState: IState = {
  pending: false,
  models: [],
  chooseModelCar: {},
  filterName: "Все модели",
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_MODELS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MODELS_SUCCESS:
      return {
        ...state,
        pending: false,
        models: payload.models,
      };
    case GET_FILTER_NAME:
      return { ...state, filterName: payload };
    case CHOOSE_MODEL_CAR:
      return {
        ...state,
        chooseModelCar: payload,
      };

    case FETCH_MODELS_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
