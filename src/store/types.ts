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

export interface IModels {
  updatedAt: number;
  createdAt: number;
  description: string;
  priceMin: number;
  priceMax: number;
  name: string;
  number: string;
  categotyId: {
    name: string;
    description: string;
    id: string;
  };
  thumbnail: {
    size: number;
    path: string;
    originalname: string;
    mimetype: string;
  };

  tank: number;
  colors: string[];
  id: string;
}

export interface ICar {
  name: string;
  price: number;
}
