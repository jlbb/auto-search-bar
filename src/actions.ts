import { BaseAction, actionIds } from "./common";

export const getPlanetNameRequestAction = (
  searchTerm: string,
  makeRequest: boolean = true
): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_REQUEST,
  payload: { searchActive: makeRequest, searchTerm }
});

export const getPlanetNameCompletedAction = (planets: []): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_COMPLETED,
  payload: planets
});

export const getPlanetNameCancelAction = (): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_CANCEL
});
