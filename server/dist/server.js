"use strict";
const { inst } = require("./handlers/axios");
const git = require("./handlers/git");
const getRep = async () => {
    try {
        const result = await inst.get("/conf");
        process.conf = result.data.data || {};
        process.conf.gitUrl = `https://github.com/`;
        console.log(process.conf);
        if (process.conf.period === undefined)
            return;
        if (process.conf.period > 0) {
            const lastCommit = await git.lastCommit();
            process.conf.lastCommitHash = lastCommit.commitHash;
            process.checkCommit = setInterval(git.checkCommit, process.conf.period * 4000);
        }
    }
    catch (error) {
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
    }
    else {
        console.log("Port ", process.env.PORT);
    }
});
