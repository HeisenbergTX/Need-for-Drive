import {
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
  CHOOSE_ID_ORDER,
  GET_ORDER,
  SUCCESS_ORDER,
} from "./types";

interface IState {
  orderStatusId: {};
  cityId: {};
  pointId: {};
  carId: {};
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: {};
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  idOrder?: string;
}

const initialState: IState = {
  orderStatusId: "",
  cityId: "",
  pointId: "",
  carId: "",
  color: "",
  dateFrom: 0,
  dateTo: 0,
  rateId: "",
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case CHOOSE_STATUS_ID:
      return {
        ...state,
        orderStatusId: payload,
      };
    case CHOOSE_CITY_ID:
      return {
        ...state,
        cityId: payload,
      };
    case CHOOSE_POINT_ID:
      return {
        ...state,
        pointId: payload,
      };
    case CHOOSE_CAR_ID:
      return {
        ...state,
        carId: payload,
      };
    case CHOOSE_COLOR:
      return {
        ...state,
        color: payload,
      };
    case CHOOSE_DATE_FROM:
      return {
        ...state,
        dateFrom: payload,
      };
    case CHOOSE_DATE_TO:
      return {
        ...state,
        dateTo: payload,
      };
    case CHOOSE_RATE_ID:
      return {
        ...state,
        rateId: payload,
      };
    case CHOOSE_PRICE:
      return {
        ...state,
        price: payload,
      };
    case CHOOSE_FULL_TANK:
      return {
        ...state,
        isFullTank: payload,
      };
    case CHOOSE_CHILD_CHAIR:
      return {
        ...state,
        isNeedChildChair: payload,
      };
    case CHOOSE_RIGHT_WHEEL:
      return {
        ...state,
        isRightWheel: payload,
      };
    case CHOOSE_ID_ORDER:
      return {
        ...state,
        idOrder: payload,
      };
    default:
      return state;
  }
};

const orderState = {
  pending: false,
  orderData: {},
};

export const orderReducer = (
  state = orderState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case GET_ORDER: {
      return {
        ...state,
        pending: true,
      };
    }
    case SUCCESS_ORDER: {
      return {
        ...state,
        pending: false,
        orderData: payload,
      };
    }
    default:
      return state;
  }
};
