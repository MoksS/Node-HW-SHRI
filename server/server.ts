import "./handlers/env";

import inst from "./handlers/axios-inst";
import git from "./handlers/git";
import process from "./typings/declareVar";

const getRep = async (): Promise<void> => {
  try {
    const result = await inst.get("/conf");
    process.conf = result.data.data || {};
    process.conf.gitUrl = `https://github.com/`;
    console.log(process.conf);
    if (process.conf.period === undefined) return;
    if (process.conf.period > 0) {
      const lastCommit = await git.lastCommit();
      process.conf.lastCommitHash = lastCommit.commitHash;
      process.checkCommit = setInterval(
        // если я просто отправляю checkCommit, то ругаетя, так что такой костыль
        (): void => {
          git.checkCommit();
        },
        process.conf.period * 4000 // здесь устанавливается время для авто проверки новых коммитов
        // сейчас стоит раз в минуту (если period 1)
      );
    }
  } catch (error) {
    console.log(error);
    process.conf = {
      gitUrl: `https://github.com/`,
      period: undefined,
      lastCommitHash: "",
      repoName: "",
      mainBranch: ""
    };
  }
};

getRep();

console.log(process.conf);
// import app from "./app";

// app.listen(process.env.PORT, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Port ", process.env.PORT);
//   }
// });
