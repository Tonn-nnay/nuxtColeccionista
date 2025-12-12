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
  const get = (url, config = {}) => apiClient.get(url, config);
  const put = (url, body) => apiClient.put(url,body)
  return { get, put };
};
