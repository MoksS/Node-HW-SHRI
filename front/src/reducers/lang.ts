interface Action {
  type: string,
  lang: string
}

const langStorieg =  localStorage.getItem('lang') || 'en'

console.log(langStorieg);

const setLang = (state: string = langStorieg , action: Action): string => {
  switch (action.type) {
    case "setLang":
      return action.lang;
    default:
      return state;
  }
}

export default setLang;