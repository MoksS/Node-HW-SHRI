const { spawn } = require("child_process");

const clone = name => {
  return new Promise((res, rej) => {
    const str = `https://github.com/${name}.git`;
    let logClone = "";
    const git = spawn("git", ["clone", str]);
    git.stderr.on("data", data => {
      logClone += data;
    });

    git.stderr.on("close", () => res(logClone));
    git.stderr.on("error", err => rej(err));
  });
};

module.exports = {
  clone
};
