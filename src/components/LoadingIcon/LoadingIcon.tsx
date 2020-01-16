import React from "react";
import { ReactComponent as Loading } from "../../assets/refresh.svg";

const LoadingIcon: React.FC = () => {
  return <Loading className="LoadingIcon rotating" width={28} height={28} />;
};

export default LoadingIcon;
