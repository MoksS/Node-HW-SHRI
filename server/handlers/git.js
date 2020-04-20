const git = require("nodegit");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { inst } = require("./axios");

async function removeRep() {
  try {
    await exec(`rm -rf ./builds/*`); // я надеюсь мак или винда могут в эти команды((
    return "ok";
  } catch (e) {
    return e;
  }
}

const clone = async name => {
  try {
    if (process.conf.repoName !== name) {
      await removeRep();
    } else {
      return "ok";
    }

    const repPath = path.resolve(
      __dirname,
      "../builds",
      name.replace("/", "-")
    );

    await git.Clone(`${process.conf.gitUrl}${name}`, repPath);
    process.conf.repoName = name.replace("/", "-");

    return "ok";
  } catch (error) {
    console.log(error);
    switch (error.errno) {
      case -1:
        return "Данного репозетория не существует или требуеться аутентификация";
      case -4:
        return "Директория с таким именем уже существует";
      default:
        return "Ошибка сервера";
    }
  }
};

const lastCommit = async () => {
  const name = process.conf.repoName;
  const repPath = path.resolve(__dirname, "../builds", name.replace("/", "-"));

  const repo = await git.Repository.open(path.resolve(repPath, ".git"));
  const firstCommit = await repo.getBranchCommit(process.conf.mainBranch);

  return {
    commitMessage: firstCommit.message(),
    commitHash: firstCommit.sha(),
    branchName: process.conf.mainBranch,
    authorName: firstCommit.author().name()
  };
};

const checkLog = async () => {
  const newCommit = [];
  const name = process.conf.repoName;

  const repPath = path.resolve(__dirname, "../builds", name.replace("/", "-"));

  const repo = await git.Repository.open(path.resolve(repPath, ".git"));
  await repo.fetchAll();
  await repo.mergeBranches(
    process.conf.mainBranch,
    `origin/${process.conf.mainBranch}`
  );
  const firstCommit = await repo.getBranchCommit(process.conf.mainBranch);

  const lastCommitHash = process.conf.lastCommitHash;

  return new Promise(res => {
    const history = firstCommit.history(git.Revwalk.SORT.TIME);
    history.start();

    history.on("commit", commit => {
      if (commit.sha() === lastCommitHash) {
        history.removeAllListeners("commit");
        res(newCommit);
      } else {
        newCommit.push({
          commitMessage: commit.message(),
          commitHash: commit.sha(),
          branchName: process.conf.mainBranch,
          authorName: commit.author().name()
        });
      }
    });
  });
};

const checkCommit = async () => {
  try {
    let commits = await checkLog();
    if (commits.length > 0) {
      process.conf.lastCommitHash = commits[0].commitHash;
      commits = commits.reverse();

      for await (const commit of commits) {
        try {
          await inst.post("/build/request", commit); 
        } catch (error) {
          setTimeout(() => inst.post("/build/request", commit), 2000);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const lookup = async hash => {
  try {
    const name = process.conf.repoName;
    const repPath = path.resolve(
      __dirname,
      "../builds",
      name.replace("/", "-")
    );
    const repo = await git.Repository.open(path.resolve(repPath, ".git"));
    await repo.fetchAll();
    await repo.mergeBranches(
      process.conf.mainBranch,
      `origin/${process.conf.mainBranch}`
    );

    const firstCommit = await repo.getBranchCommit(process.conf.mainBranch);

    const lastCommitHash = hash;
    let i = 20;
    return new Promise((res, rej) => {
      const history = firstCommit.history(git.Revwalk.SORT.TIME);
      history.start();

      history.on("commit", commit => {
        if (i < 0) {
          rej(new Error({ message: "Нету такого коммита" }));
        }

        i--;

        if (commit.sha() === lastCommitHash) {
          history.removeAllListeners("commit");
          res({
            commitMessage: commit.message(),
            commitHash: commit.sha(),
            branchName: process.conf.mainBranch,
            authorName: commit.author().name()
          });
        }
      });
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  clone,
  lastCommit,
  checkCommit,
  lookup
};
