import { BaseAction, actionIds } from "../common";

export type planetsState = {
  searchTerm: string;
  planets: [];
};

export const planetsReducer = (
  state: planetsState = { searchTerm: "", planets: [] },
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_PLANET_NAME_REQUEST:
      return { ...state, searchTerm: action.payload };
    case actionIds.GET_PLANET_NAME_COMPLETED:
      return { ...state, planets: action.payload };
    case actionIds.GET_PLANET_NAME_CANCEL:
      return { ...state, planets: action.payload };
  }
  return state;
};
