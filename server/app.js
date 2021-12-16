require("dotenv/config");
require("./db");

const path = require("path");
const express = require("express");
const app = express();

require("./config")(app);
require("./config/session.config")(app)
app.use(express.static(path.join(__dirname, "public")))

require("./routes")(app);

require("./error-handling")(app);

app.use((req, res) => res.sendFile(__dirname + "/public/index.html"));

module.exports = app;
