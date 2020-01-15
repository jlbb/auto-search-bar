import axios from "axios";

export const swBaseUrl = "https://swapi.co/api";

export const apiGet = async (apiUrl: string) =>
  await axios.get(apiUrl, {}).then(response => {
    return response.data;
  });
