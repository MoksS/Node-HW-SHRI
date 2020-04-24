import express from "express";
import compression from "compression";
import { join } from "path";
import apiRouter from "./router/apiRouter";
import apiContent from "./router/content";

const app = express();

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

export default app;
