import inst from "./axios-inst";
import process from "../typings/declareVar";
import git from "./git";

const getConf = async (i = 1): Promise<void> => {
  try {
    if (i === 3) {
      console.error("неудалось получить настройки");
      return process.exit(1);
    }

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
    return getConf(++i);
  }
};

export default getConf;
