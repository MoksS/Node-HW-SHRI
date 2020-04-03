const express = require("express");
require("dotenv").config();

const app = express();
const compression = require("compression");
const { join } = require("path");
const apiRouter = require("./router/apiRouter");
const apiContent = require("./router/apiContent");
const { inst } = require("./handlers/axios");
const git = require("./handlers/git");

const getRep = async () => {
  try {
    const result = await inst.get("/conf");
    process.conf = result.data.data || {};
    process.conf.gitUrl = `https://github.com/`;
    console.log(process.conf);
    if (process.conf.period === undefined) return;
    if (process.conf.period > 0) {
      clearInterval(process.checkCommit);
      process.checkCommit = setInterval(
        git.checkCommit,
        process.conf.period * 60000 // здесь устанавливается время для авто проверки новых коммитов
        // сейчас стоит раз в минуту (если period 1)
      );
    }
  } catch (error) {
    console.log(error);
    process.conf = {};
    process.conf.gitUrl = `https://github.com/`;
  }
};

getRep();

app.use(compression());
app.use((req, res, next) => {
  res.set("X-Powered-By", "MoksS");
  next();
});
app.use(express.static(join(__dirname, "public")));

app.use(apiContent);
app.use("/api", apiRouter);

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

app.listen(process.env.PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Port ", process.env.PORT);
  }
});
