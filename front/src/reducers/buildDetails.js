const buildDetails = (state = {commitHash: "", log: ""} , action) => {
  switch (action.type) {
    case "updateDetails":
      return action.build;
    default:
      return state;
  }
}

export default buildDetails;