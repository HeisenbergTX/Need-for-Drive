import { RootState } from "../rootReducer";

export const getStatusIdPending = (state: RootState) => state.statusId.pending;

export const getStatusId = (state: RootState) => state.statusId.statusId;

export const getStatusIdError = (state: RootState) => state.statusId.error;
