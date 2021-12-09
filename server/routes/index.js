module.exports = app => {
  app.use("/api/films", require("./film.routes"));
  app.use("/api", require("./auth.routes"));
}


