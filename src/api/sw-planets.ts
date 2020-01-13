import axios from "axios";
import { swBaseUrl } from "../common";

export const getPlanets = async (planet: string): Promise<any> => {
  const planets = await Promise.resolve(
    await axios.get(`${swBaseUrl}/planets/?search=${planet}`).then(response => {
      return response.data.results;
    })
  );

  return planets;
};
