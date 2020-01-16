import { swBaseUrl, apiGet } from "../common/api";

export const getPlanets = async (
  planet: string,
  page: number = 1
): Promise<any> => {
  const apiSearch = `${swBaseUrl}/planets/?search=${planet}&page=${page}`;

  let planetsData = await Promise.resolve(apiGet(apiSearch));
  let planets = planetsData.results;

  while (planetsData.next) {
    planetsData = await Promise.resolve(apiGet(planetsData.next));
    planets = [...planets, ...planetsData.results];
  }

  return planets;
};
