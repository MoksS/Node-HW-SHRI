const settingsOn = (state = "/" , action) => {
  switch (action.type) {
    case "settingsOn":
      return "/build";
    default:
      return state;
  }
}

export default settingsOn;