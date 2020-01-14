import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import * as selectors from "./selectors";
import {
  getPlanetNameCompletedAction,
  getPlanetNameCancelAction
} from "../actions";
import { actionIds } from "../common";
import { getPlanets } from "../api/sw-planets";

export function* watchGetPlanetsRequest() {
  yield takeLatest(actionIds.GET_PLANET_NAME_REQUEST, requestGetPlanets);
}

function* requestGetPlanets() {
  const planetName = yield select(selectors.planets);

  /** Empty planetName cancellation can be overriden if _CompletedAction request arrives later.
   * Use redux-saga task race */
  // if (planetName !== "") {
  //   const planets = yield call(getPlanets, planetName);
  //   console.log("Selector Planet name", planetName, planets);

  //   yield put(getPlanetNameCompletedAction(planets));
  // } else {
  //   yield put(getPlanetNameCancelAction());
  // }

  const { planets, cancel } = yield race({
    planets: call(getPlanets, planetName),
    cancel: take(actionIds.GET_PLANET_NAME_CANCEL)
  });
  if (!cancel) {
    yield put(getPlanetNameCompletedAction(planets));
  }
}
