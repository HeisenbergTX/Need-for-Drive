import { RootState } from "../rootReducer";

export const getCompiledOrder = (state: RootState) => state.compiledOrder;

export const getOrder = (state: RootState) => state.orderReducer;
