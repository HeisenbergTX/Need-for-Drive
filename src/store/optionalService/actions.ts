import {
  CHOOSE_COLOR_CAR,
  CHOOSE_RENTAL_PERIOD_CAR,
  CHOOSE_TIMES_RENT_CAR,
  CHOOSE_RATE_CAR,
  CHOOSE_FULL_TANK_CAR,
  CHOOSE_CHILD_SEAT_CAR,
  CHOOSE_RIGHT_HAND_DRIVE_CAR,
  CHOOSE_VALUE_DATE_FROM,
  CHOOSE_VALUE_DATE_TO,
} from "./types";

export const chooseColorCar = (payload: string) => ({
  type: CHOOSE_COLOR_CAR,
  payload,
});

export const chooseRentalPeriodCar = (payload: string) => ({
  type: CHOOSE_RENTAL_PERIOD_CAR,
  payload,
});

export const chooseTimesRent = (
  minutes: number,
  hours: number,
  days: number
) => ({
  type: CHOOSE_TIMES_RENT_CAR,
  payload: {
    minutes,
    hours,
    days,
  },
});

export const chooseRateCar = (id: string, name: string, price: number) => ({
  type: CHOOSE_RATE_CAR,
  payload: {
    id,
    name,
    price,
  },
});

export const chooseFullTankCar = (fullTank: boolean, cost: number) => ({
  type: CHOOSE_FULL_TANK_CAR,
  payload: {
    fullTank,
    cost,
  },
});

export const chooseChildSeatCar = (childSeat: boolean, cost: number) => ({
  type: CHOOSE_CHILD_SEAT_CAR,
  payload: {
    childSeat,
    cost,
  },
});

export const chooseRightHandDriveCar = (
  rightHandDrive: boolean,
  cost: number
) => ({
  type: CHOOSE_RIGHT_HAND_DRIVE_CAR,
  payload: {
    rightHandDrive,
    cost,
  },
});

export const chooseValueDateFrom = (payload: string) => ({
  type: CHOOSE_VALUE_DATE_FROM,
  payload,
});

export const chooseValueDateTo = (payload: string) => ({
  type: CHOOSE_VALUE_DATE_TO,
  payload,
});
