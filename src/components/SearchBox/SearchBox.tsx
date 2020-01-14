import React from "react";
import SearchInput from "../SearchInput";
import PopupList from "../PopupList";
import { useDispatch } from "react-redux";
import {
  getPlanetNameRequestAction,
  getPlanetNameCancelAction
} from "../../actions";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();

  const onGetPlanets = (inputPlanet: string) => {
    dispatch(getPlanetNameRequestAction(inputPlanet));
  };

  const onCancelGetPlanets = () => {
    dispatch(getPlanetNameCancelAction());
  };

  return (
    <div className="SearchBox">
      <SearchInput onSearch={onGetPlanets} onCancel={onCancelGetPlanets} />
      <PopupList />
    </div>
  );
};

export default SearchBox;
