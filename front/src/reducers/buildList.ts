export interface Build {
  id?: string,
  configurationId?: string,
  buildNumber?: number,
  commitMessage?: string,
  commitHash: string,
  branchName?: string,
  authorName?: string,
  status?: string,
  start?: string
  duration?: number;
}
interface Action {
  type: string;
  build: Array<Build>;
  length: number;
}

export interface BuildList {
  build: Array<Build>;
  finish: Boolean;
}

const buildList = (state: BuildList = { build: [], finish: false } , action: Action) => {
  switch (action.type) {
    case "updateList":
      if (action.build.length < action.length) {
        return {
          build: [...state.build, ...action.build],
          finish: true
        };
      }
      return {
        build: [...state.build, ...action.build],
        finish: false
      };
    default:
      return state;
  }
}

export default buildList;