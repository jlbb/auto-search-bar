import { call, put, takeLatest, select, race, take } from "redux-saga/effects";
import * as selectors from "./selectors";
import { getPlanetNameCompletedAction } from "../actions";
import { actionIds } from "../common";
import { getPlanets } from "../api/sw-planets";

export function* watchGetPlanetsRequest() {
  yield takeLatest(actionIds.GET_PLANET_NAME_REQUEST, requestGetPlanets);
}

function* requestGetPlanets() {
  const planetName = yield select(selectors.searchTerm);
  const searchActive = yield select(selectors.searchActive);

  if (searchActive !== null) {
    if (searchActive) {
      const { planets, cancel } = yield race({
        planets: call(getPlanets, planetName),
        cancel: take(actionIds.GET_PLANET_NAME_CANCEL)
      });
      if (!cancel) {
        yield put(getPlanetNameCompletedAction(planets));
      }
    } else {
      const planets = yield select(selectors.planets);
      const filteredPlanets =
        planets &&
        planets.filter((planet: any) => {
          if (
            new RegExp(planetName.toLowerCase()).test(planet.name.toLowerCase())
          ) {
            return planet;
          }
        });

      yield put(getPlanetNameCompletedAction(filteredPlanets));
    }
  }
}
