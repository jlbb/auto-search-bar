import { call, put, takeLatest, select } from "redux-saga/effects";
import * as selectors from "./selectors";
import { getPlanetNameCompletedAction } from "../actions";
import { actionIds } from "../common";
import { getPlanets } from "../api/sw-planets";

export function* watchGetPlanetsRequest() {
  yield takeLatest(actionIds.GET_PLANET_NAME_REQUEST, requestGetPlanets);
}

function* requestGetPlanets() {
  const planetName = yield select(selectors.planets);

  const planets = yield call(getPlanets, planetName);

  console.log("Selector Planet name", planetName, planets);

  yield put(getPlanetNameCompletedAction(planets));
}
