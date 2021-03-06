import { Build } from "./buildList";

export interface BuildDetails extends Build {
  loading: Boolean;
  log: string;
}

interface Action {
  type: string;
  build: BuildDetails;
}

const buildDetails = (state: BuildDetails = {commitHash: "", log: "", loading : true} , action: Action): BuildDetails => {
  switch (action.type) {
    case "updateDetails":
      return { ...action.build, loading:false};
    case "loading":
      return { ...state, loading: true};
    default:
      return state;
  }
}

export default buildDetails;