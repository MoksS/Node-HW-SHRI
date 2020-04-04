const buildList = (state = [] , action) => {
  switch (action.type) {
    case "updateList":
      if (action.build.length === 0) {
        return state;
      }
      return [...state, ...action.build];
    default:
      return state;
  }
}

export default buildList;