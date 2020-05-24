interface Action {
  type: string,
  lang: string
}

const setLang = (state: string = 'ru' , action: Action): string => {
  switch (action.type) {
    case "setLang":
      return action.lang;
    default:
      return state;
  }
}

export default setLang;