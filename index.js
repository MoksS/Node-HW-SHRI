const express = require("express");
require("dotenv").config();

const app = express();
const apiRouter = require("./router/apiRouter");
const { join } = require("path");

app.use(express.static(join(__dirname, "static")));

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
    res.type("txt").send("Not found");
  }
);

app.listen(3000, err => {
    if(err){
        console.log(err);
    } else {
        console.log("Port 3000");
    }
})