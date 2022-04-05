import { RootState } from "../rootReducer";

export const getPlacemarks = (state: RootState) => state.placemarks.placemarks;
