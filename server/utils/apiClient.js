import axios from "axios";
export const getApi = () => {
  const config = useRuntimeConfig();

  return axios.create({
    baseURL: config.pokemonApiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

