import { combineReducers } from "redux";
import { planetsReducer, planetsState } from "./planets.reducer";

export interface State {
  planets: planetsState;
}

export const rootReducers = combineReducers<State>({
  planets: planetsReducer
});
