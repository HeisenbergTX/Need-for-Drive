import { RootState } from "../rootReducer";

export const getPointPending = (state: RootState) => state.points.pending;

export const getPoints = (state: RootState) => state.points.points;

export const getPointError = (state: RootState) => state.points.error;

export const getPoint = (state: RootState) => state.points.selectedPoint;
