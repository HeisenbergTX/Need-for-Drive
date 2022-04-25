import {
  CHOOSE_COLOR_CAR,
  CHOOSE_RENTAL_PERIOD_CAR,
  CHOOSE_TIMES_RENT_CAR,
  CHOOSE_RATE_CAR,
  CHOOSE_FULL_TANK_CAR,
  CHOOSE_CHILD_SEAT_CAR,
  CHOOSE_RIGHT_HAND_DRIVE_CAR,
  CHOOSE_DATE_TO,
  CHOOSE_DATE_FROM,
} from "./types";

interface IState {
  color: string;
  isRentalPeriod: string;
  dateTo: string;
  dateFrom: string;
  timesRent: {
    minutes: number;
    hours: number;
    days: number;
  };
  rate: string;
  tank: { fullTank: boolean; cost: number };
  childSeat: { seat: boolean; cost: number };
  rightHandDrive: { rightHandDrive: boolean; cost: number };
}

const inititalState: IState = {
  color: "",
  isRentalPeriod: "",
  dateTo: "",
  dateFrom: "",
  timesRent: {
    minutes: 0,
    hours: 0,
    days: 0,
  },
  rate: "",
  tank: { fullTank: false, cost: 0 },
  childSeat: { seat: false, cost: 0 },
  rightHandDrive: { rightHandDrive: false, cost: 0 },
};

export default (
  state = inititalState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case CHOOSE_COLOR_CAR:
      return {
        ...state,
        color: payload,
      };
    case CHOOSE_RENTAL_PERIOD_CAR:
      return {
        ...state,
        isRentalPeriod: payload,
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
    case CHOOSE_TIMES_RENT_CAR:
      return {
        ...state,
        timesRent: {
          ...state.timesRent,
          ...payload,
        },
      };
    case CHOOSE_RATE_CAR:
      return {
        ...state,
        rate: payload,
      };
    case CHOOSE_FULL_TANK_CAR:
      return {
        ...state,
        tank: payload,
      };

    case CHOOSE_CHILD_SEAT_CAR:
      return {
        ...state,
        childSeat: payload,
      };

    case CHOOSE_RIGHT_HAND_DRIVE_CAR:
      return {
        ...state,
        rightHandDrive: payload,
      };
    default:
      return state;
  }
};
