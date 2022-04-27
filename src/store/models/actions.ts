import {
  FETCH_MODELS_REQUEST,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_ERROR,
  CHOOSE_MODEL_CAR,
  GET_FILTER_NAME,
} from "./types";

export const FetchModelsRequest = () => ({
  type: FETCH_MODELS_REQUEST,
});

export const FetchModelsSuccess = (payload: any) => ({
  type: FETCH_MODELS_SUCCESS,
  payload,
});

export const ChooseModelCar = (
  id: string,
  name: string,
  minPrice: number,
  colors: string[],
  number: string,
  image: any
) => ({
  type: CHOOSE_MODEL_CAR,
  payload: {
    id,
    name,
    minPrice,
    colors,
    number,
    image
  },
});

export const GetFilterName = (payload: string) => ({
  type: GET_FILTER_NAME,
  payload,
});

export const FetchModelsError = (payload: any) => ({
  type: FETCH_MODELS_ERROR,
});
