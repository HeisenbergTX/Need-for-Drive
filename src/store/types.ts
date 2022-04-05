export interface IAction<T> {
  type: string;
  payload: T;
}

export interface ICity {
  updatedAt: number;
  createdAt: number;
  name: string;
  id: string;
}

export interface IPoint {
  address: string;
  cityId: {
    id: string;
    name: string;
  };
  id: string;
  name: string;
}
