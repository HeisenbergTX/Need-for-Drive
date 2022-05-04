import { ICity, IModels, IPoint, IRate, IStatusId } from "./../types";
import {
  POST_ORDER_CREATOR,
  CHOOSE_STATUS_ID,
  CHOOSE_CITY_ID,
  CHOOSE_POINT_ID,
  CHOOSE_CAR_ID,
  CHOOSE_COLOR,
  CHOOSE_DATE_FROM,
  CHOOSE_DATE_TO,
  CHOOSE_RATE_ID,
  CHOOSE_PRICE,
  CHOOSE_FULL_TANK,
  CHOOSE_CHILD_CHAIR,
  CHOOSE_RIGHT_WHEEL,
  POST_ORDER,
  CHOOSE_ID_ORDER,
  GET_ORDER,
  SUCCESS_ORDER,
} from "./types";

export const postOrder = (payload: any) => ({
  type: POST_ORDER,
  payload,
});

export const postOrderCreator = (payload: any) => ({
  type: POST_ORDER_CREATOR,
  payload,
});

export const getOrder = (payload: any) => ({
  type: GET_ORDER,
  payload,
});

export const successOrder = (payload: any) => ({
  type: SUCCESS_ORDER,
  payload,
});

export const chooseStatusId = (payload: IStatusId) => ({
  type: CHOOSE_STATUS_ID,
  payload,
});

export const chooseCityId = (payload: ICity) => ({
  type: CHOOSE_CITY_ID,
  payload,
});

export const choosePointId = (payload: IPoint) => ({
  type: CHOOSE_POINT_ID,
  payload,
});

export const chooseCarId = (payload: IModels) => ({
  type: CHOOSE_CAR_ID,
  payload,
});

export const chooseColor = (payload: string) => ({
  type: CHOOSE_COLOR,
  payload,
});

export const chooseDateFrom = (payload: number) => ({
  type: CHOOSE_DATE_FROM,
  payload,
});

export const chooseDateTo = (payload: number) => ({
  type: CHOOSE_DATE_TO,
  payload,
});

export const chooseRateId = (payload: IRate) => ({
  type: CHOOSE_RATE_ID,
  payload,
});

export const choosePrice = (payload: number) => ({
  type: CHOOSE_PRICE,
  payload,
});

export const chooseFullTank = (payload: boolean) => ({
  type: CHOOSE_FULL_TANK,
  payload,
});

export const chooseChildChair = (payload: boolean) => ({
  type: CHOOSE_CHILD_CHAIR,
  payload,
});

export const chooseRightWheel = (payload: boolean) => ({
  type: CHOOSE_RIGHT_WHEEL,
  payload,
});

export const chooseIdOrder = (payload: string) => ({
  type: CHOOSE_ID_ORDER,
  payload,
});
