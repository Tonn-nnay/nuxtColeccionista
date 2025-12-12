import axios from "axios";

const getApi = () => {
  const config = useRuntimeConfig();

  return axios.create({
    baseURL: config.pokemonApiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const useApi = () => {
  const get = (url, config = {}) => getApi.get(url, config);
  const put = (url, body) => getApi.put(url, body);
  return { get, put };
};
