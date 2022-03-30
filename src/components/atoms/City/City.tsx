import React from "react";

interface IProps {
  city: string;
}

export const City: React.FC<IProps> = ({ city }) => {
  return <option value={city} />;
};
