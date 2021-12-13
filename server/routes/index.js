module.exports = app => {
  app.use("/api/films", require("./film.routes"));
  app.use("/api", require("./auth.routes"));
  app.use("/api/reviews", require("./review.routes"));
  app.use("/api/user", require("./user.routes"));
}


