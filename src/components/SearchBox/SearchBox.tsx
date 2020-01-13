import React from "react";
import SearchInput from "../SearchInput";
import PopupList from "../PopupList";
import { useDispatch } from "react-redux";
import { getPlanetNameRequestAction } from "../../actions";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();

  const onGetPlanets = (inputPlanet: string) => {
    dispatch(getPlanetNameRequestAction(inputPlanet));
  };

  return (
    <div className="SearchBox">
      <SearchInput onSearch={onGetPlanets} />
      <PopupList />
    </div>
  );
};

export default SearchBox;
