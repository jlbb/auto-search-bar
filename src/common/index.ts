export const actionIds = {
  GET_PLANET_NAME_REQUEST: "GET_PLANET_NAME_REQUEST",
  GET_PLANET_NAME_COMPLETED: "GET_PLANET_NAME_COMPLETED",
  GET_PLANET_NAME_CANCEL: "GET_PLANET_NAME_CANCEL"
};

export interface BaseAction {
  type: string;
  payload?: any;
}

export const swBaseUrl = "https://swapi.co/api";
