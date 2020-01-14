import React from "react";
import SearchInput from "../SearchInput";
import PopupList from "../PopupList";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlanetNameRequestAction,
  getPlanetNameCancelAction
} from "../../actions";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();

  const searchActive = useSelector((state: any) => state.planets.searchActive);

  const onGetPlanets = (inputPlanet: string) => {
    dispatch(getPlanetNameRequestAction(inputPlanet));
  };

  const onCancelGetPlanets = () => {
    dispatch(getPlanetNameCancelAction());
  };

  return (
    <div className="SearchBox">
      <SearchInput
        loading={searchActive}
        onSearch={onGetPlanets}
        onCancel={onCancelGetPlanets}
      />
      <PopupList />
    </div>
  );
};

export default SearchBox;
