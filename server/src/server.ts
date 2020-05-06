import "./utils/env";
import getConf from "./utils/getConf";
import app from "./app";

getConf();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
