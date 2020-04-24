const setName = (state = "" , action) => {
  switch (action.type) {
    case "setName":
      return action.name;
    default:
      return state;
  }
}

export default setName;