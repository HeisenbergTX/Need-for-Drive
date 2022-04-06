import {
  FETCH_MODELS_REQUEST,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_ERROR,
  CHOOSE_MODEL_CAR,
} from "./types";

export const FetchModelsRequest = () => ({
  type: FETCH_MODELS_REQUEST,
});

export const FetchModelsSuccess = (payload: any) => ({
  type: FETCH_MODELS_SUCCESS,
  payload,
});

export const ChooseModelCar = (id: string, name: string, maxPrice: number) => ({
  type: CHOOSE_MODEL_CAR,
  payload: {
    id,
    name,
    maxPrice,
  },
});

export const FetchModelsError = (payload: any) => ({
  type: FETCH_MODELS_ERROR,
});
