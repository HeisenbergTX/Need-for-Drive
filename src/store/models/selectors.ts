import { RootState } from "../rootReducer";

export const getModelPendng = (state: RootState) => state.models.pending;

export const getModels = (state: RootState) => state.models.models;

export const getModelCar = (state: RootState) => state.models.chooseModelCar;

export const getFilterName = (state: RootState) => state.models.filterName;

export const getModelError = (state: RootState) => state.models.error;
