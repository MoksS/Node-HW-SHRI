declare const process: {
  conf: {
    period: number | undefined;
    lastCommitHash: string;
    gitUrl: string;
    repoName: string;
    mainBranch: string;
    buildCommand: string;
  };
  checkCommit: NodeJS.Timeout;
  exit(num: number): void;
  env: {
    TOKEN: string;
    PORT: number;
    PUBLICKEY: string;
    PRIVATEKEY: string;
  };
};

export default process;
