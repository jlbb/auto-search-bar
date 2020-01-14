import React from "react";
import { ReactComponent as Loading } from "../../assets/refresh.svg";

const LoadingIcon: React.FC = props => {
  return (
    <Loading
      className="LoadingIcon rotating"
      width={28}
      height={28}
      {...props}
    />
  );
};

export default LoadingIcon;
