import { BaseAction, actionIds } from "./common";

export const getPlanetNameRequestAction = (searchTerm: string): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_REQUEST,
  payload: searchTerm
});

export const getPlanetNameCompletedAction = (name: string): BaseAction => ({
  type: actionIds.GET_PLANET_NAME_COMPLETED,
  payload: name
});
