const buildList = (state = [] , action) => {
  switch (action.type) {
    case "updateList":
      return [...state, ...action.build];
    default:
      return state;
  }
}

export default buildList;