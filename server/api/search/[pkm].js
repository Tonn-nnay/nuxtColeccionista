export default defineEventHandler(async (event) => {
  const api = await getApi();
  //S'agafa la variable de params
  const name = getRouterParam(event, "pkm");

  try {
    return await api.get(`/pokemon/${name}`).then((res) => (res = res.data));
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: "El pokemon no existeix",
    });
  }
  
});
