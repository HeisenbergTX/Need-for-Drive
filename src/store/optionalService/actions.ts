import {
  CHOOSE_COLOR_CAR,
  CHOOSE_RENTAL_PERIOD_CAR,
  CHOOSE_TIMES_RENT_CAR,
  CHOOSE_RATE_CAR,
  CHOOSE_FULL_TANK_CAR,
  CHOOSE_CHILD_SEAT_CAR,
  CHOOSE_RIGHT_HAND_DRIVE_CAR,
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

export const chooseRateCar = (payload: string) => ({
  type: CHOOSE_RATE_CAR,
  payload,
});

export const chooseFullTankCar = (fulltank: boolean, cost: number) => ({
  type: CHOOSE_FULL_TANK_CAR,
  payload: {
    fulltank,
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
