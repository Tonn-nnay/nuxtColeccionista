import { get } from "~~/server/composables/useApi";

export default defineEventHandler(async (event) => {
  //S'agafa la variable de params
  const name = getRouterParam(event, "pkm");

  try {
    return await get(`/pokemon/${name}`).then((res) => (res = res.data));
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: "El pokemon no existeix",
    });
  }
});
