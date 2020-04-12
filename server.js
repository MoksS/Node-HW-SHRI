require("dotenv").config();

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

const app = require("./app");

app.listen(process.env.PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Port ", process.env.PORT);
  }
});
