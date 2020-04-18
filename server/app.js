const express = require("express");

const app = express();
const compression = require("compression");
const { join } = require("path");
const apiRouter = require("./router/apiRouter");
const apiContent = require("./router/content");

app.use(compression());
app.use((req, res, next) => {
  res.set("X-Powered-By", "MoksS");
  next();
});
app.use(express.static(join(__dirname, "public")));

app.use("/api", apiRouter);
app.use(apiContent);

app.use((req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.send("<h1>Not found</h1>");
    return;
  }

  // respond with json
  if (req.accepts("application/json")) {
    res.json({ error: "Not found" });
    return;
  }
  // default to plain-text. send()
  res.type("text").send("Not found");
});

module.exports = app;
