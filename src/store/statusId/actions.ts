import { REQUEST_STATUS_ID, SUCCESS_STATUS_ID, ERROR_STATUS_ID } from "./types";

export const RequestStatusId = () => ({
  type: REQUEST_STATUS_ID,
});

export const SuccessStatusId = (payload: any) => ({
  type: SUCCESS_STATUS_ID,
  payload,
});

export const ErrorStatusId = (payload: any) => ({
  type: ERROR_STATUS_ID,
});
