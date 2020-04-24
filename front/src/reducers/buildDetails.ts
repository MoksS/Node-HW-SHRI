import { Build } from "./buildList";

interface BuildDetails extends Build {
  loading: Boolean;
  log: string;
}

interface Action {
  type: string;
  build: Build;
}

const buildDetails = (state = {commitHash: "", log: "", loading : true} , action: Action): BuildDetails => {
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