const buildList = (state = { build : [], finish : false } , action) => {
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