const express = require("express");
require("dotenv").config();

const app = express();
const compression = require('compression');
const apiRouter = require("./router/apiRouter");
const { join } = require("path");

app.use(compression());
app.use((req,res, next) => {
  res.set("X-Powered-By", "MoksS");
  next();
})
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

// const { spawn } = require("child_process");

// const git = spawn("git", ["clone", "https://github.com/necolas/normalize.css.git"]).stderr.pipe(process.stdout);

// const util = require('util');
// const exec = util.promisify(require('child_process').exec);

// async function lsExample() {
//   const { stdout, stderr } = await exec('git clone https://github.com/necolas/normalize.css.git');
//   console.log('stdout:', stdout);
//   console.error('stderr:', stderr);
// }
// lsExample();

