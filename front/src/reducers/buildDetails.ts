const buildDetails = (state = {commitHash: "", log: "", loading : true} , action) => {
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