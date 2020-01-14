import { BaseAction, actionIds } from "../common";

export type planetsState = {
  searchActive: boolean;
  searchTerm: string;
  planets: [];
};

export const planetsReducer = (
  state: planetsState = { searchActive: false, searchTerm: "", planets: [] },
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_PLANET_NAME_REQUEST:
      return { ...state, searchActive: true, searchTerm: action.payload };
    case actionIds.GET_PLANET_NAME_COMPLETED:
      return { ...state, searchActive: false, planets: action.payload };
    case actionIds.GET_PLANET_NAME_CANCEL:
      return { ...state, searchActive: false, planets: action.payload };
  }
  return state;
};
