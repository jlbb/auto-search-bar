export const actionIds = {
  GET_PLANET_NAME_REQUEST: "GET_PLANET_NAME_REQUEST",
  GET_PLANET_NAME_COMPLETED: "GET_PLANET_NAME_COMPLETED"
};

export interface BaseAction {
  type: string;
  payload?: any;
}

export const swBaseUrl = "https://swapi.co/api";
