interface Action {
  type: string;
}

const settingsOn = (state: string = "/" , action: Action): string => {
  switch (action.type) {
    case "settingsOn":
      return "/build";
    default:
      return state;
  }
}

export default settingsOn;