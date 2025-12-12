import { useApi } from "./useApi";

export function getPokemon(query) {
  const api = useApi();
  return api.get(`/pokemon/${query}`)
}