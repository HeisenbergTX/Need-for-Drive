import { RootState } from "../rootReducer";

export const getColorCar = (state: RootState) => state.optionalService.color;

export const getRentalPeriodCar = (state: RootState) =>
  state.optionalService.isRentalPeriod;

export const getTimesRent = (state: RootState) =>
  state.optionalService.timesRent;

export const getRateCar = (state: RootState) => state.optionalService.rate;

export const getFullTankCar = (state: RootState) => state.optionalService.tank;

export const getChildSeatCar = (state: RootState) =>
  state.optionalService.childSeat;

export const getRightHandDriveCar = (state: RootState) =>
  state.optionalService.rightHandDrive;
