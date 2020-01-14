import { BaseAction, actionIds } from "./common";

export const getPlanetNameRequestAction = (searchTerm: string): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_REQUEST,
  payload: searchTerm
});

export const getPlanetNameCompletedAction = (planets: []): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_COMPLETED,
  payload: planets
});

export const getPlanetNameCancelAction = (): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_CANCEL,
  payload: null
});
