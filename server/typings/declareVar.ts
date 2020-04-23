declare const process: {
  conf: {
    period: number | undefined;
    lastCommitHash: string;
    gitUrl: string;
    repoName: string;
    mainBranch: string;
  };
  checkCommit: NodeJS.Timeout;
};

export default process;
