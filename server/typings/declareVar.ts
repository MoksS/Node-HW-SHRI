declare const process: {
  conf: {
    period: number | undefined;
    lastCommitHash: string;
    gitUrl: string;
    repoName: string;
    mainBranch: string;
  };
  checkCommit: NodeJS.Timeout;
  exit(num: number): void;
};

export default process;
