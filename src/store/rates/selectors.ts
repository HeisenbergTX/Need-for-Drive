import { RootState } from "../rootReducer";

export const getRatesPending = (state: RootState) => state.rates.pending;

export const getRates = (state: RootState) => state.rates.rates;

export const getRatesError = (state: RootState) => state.rates.error;
