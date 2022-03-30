import React from "react";

interface IProps {
  point: string;
}

export const Point: React.FC<IProps> = ({ point }) => {
  return <option value={point} />;
};
