import { BaseAction, actionIds } from "../common";

export type planetsState = {
  searchActive: boolean;
  searchTerm: string;
  planets: [] | null;
};

export const planetsReducer = (
  state: planetsState = { searchActive: false, searchTerm: "", planets: null },
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_PLANET_NAME_REQUEST:
      return {
        ...state,
        searchActive: state.searchActive || action.payload.searchActive,
        searchTerm: action.payload.searchTerm || ""
      };
    case actionIds.GET_PLANET_NAME_COMPLETED:
      return { ...state, searchActive: false, planets: action.payload };
    case actionIds.GET_PLANET_NAME_CANCEL:
      return {
        ...state,
        searchActive: false,
        searchTerm: "",
        planets: null
      };
  }
  return state;
};
