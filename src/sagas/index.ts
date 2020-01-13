import { all, fork } from "redux-saga/effects";
import { watchGetPlanetsRequest } from "./planets.sagas";

export const rootSaga = function* root() {
  yield all([fork(watchGetPlanetsRequest)]);
};
