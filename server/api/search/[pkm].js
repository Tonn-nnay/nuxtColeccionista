import { getPokemon } from "~~/server/composables/useSearch";

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "pkm");
  
  try {
    const res = await getPokemon(name);
    return res.data;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "El pokemon no existeix",
    });
  }
});
