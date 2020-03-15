const git = require("nodegit");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

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

    const repName = path.resolve(
      __dirname,
      "../builds",
      name.replace("/", "-")
    );

    await git.Clone(`https://github.com/${name}`, repName);
    process.conf.repName = repName;

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  clone
};
