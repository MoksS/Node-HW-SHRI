interface Action {
  type: string,
  name: string
}

const setName = (state: string = "" , action: Action): string => {
  switch (action.type) {
    case "setName":
      return action.name;
    default:
      return state;
  }
}

export default setName;