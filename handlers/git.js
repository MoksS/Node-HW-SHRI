const git = require("nodegit");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const axios = require("axios");
const { Agent } = require("https");

const httpsAgent = new Agent({
  rejectUnauthorized: false
});

const inst = axios.create({
  baseURL: "https://hw.shri.yandex/api",
  timeout: 3000,
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  httpsAgent
});

async function removeRep(name) {
  try {
    await exec(`rm -rf ./builds/${name}`);
    return "ok";
  } catch (e) {
    return e;
  }
}

const clone = async name => {
  try {
    if (process.conf.repName !== undefined) {
      await removeRep(process.conf.repName);
    }

    const repPath = path.resolve(
      __dirname,
      "../builds",
      name.replace("/", "-")
    );

    await git.Clone(`https://github.com/${name}`, repPath);
    process.conf.repName = name.replace("/", "-");

    return true;
  } catch (error) {
    return false;
  }
};

const lastCommit = async () => {
  const name = process.conf.repName;
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
  const name = process.conf.repName;
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
    const commits = await checkLog();

    if (commits.length > 0) {
      await Promise.all(
        commits.map(commit => inst.post("/build/request", commit))
      );
      process.conf.lastCommitHash = commits[0].commitHash;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  clone,
  lastCommit,
  checkCommit
};
