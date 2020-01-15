import React from "react";
import SearchInput from "../SearchInput";
import PopupList from "../PopupList";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlanetNameRequestAction,
  getPlanetNameCancelAction
} from "../../actions";
import { searchActive, searchTerm, planets } from "../../sagas/selectors";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();

  const searchLoading = useSelector(searchActive);
  const searchInput = useSelector(searchTerm);
  const searchList = useSelector(planets);

  const onGetPlanets = (inputPlanet: string) => {
    const rgx = new RegExp(`${searchInput.toLowerCase()}`);

    if (searchInput && rgx.test(inputPlanet.toLowerCase())) {
      dispatch(getPlanetNameRequestAction(inputPlanet, false));
    } else {
      dispatch(getPlanetNameRequestAction(inputPlanet));
    }
  };

  const onCancelGetPlanets = () => {
    dispatch(getPlanetNameCancelAction());
  };

  const onSelectListPlanet = (planetName: string) => {
    planetName !== searchInput &&
      dispatch(getPlanetNameRequestAction(planetName, false));
  };

  return (
    <div className="SearchBox">
      <SearchInput
        inputValue={searchInput}
        loading={searchLoading}
        onSearch={onGetPlanets}
        onCancel={onCancelGetPlanets}
      />
      <PopupList
        term={searchInput}
        list={searchList}
        onSelect={onSelectListPlanet}
      />
    </div>
  );
};

export default SearchBox;
