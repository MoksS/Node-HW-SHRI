import store from "../store";

type dataTime = string | number;

const currentLang = store.getState().lang;

let timeParam: { h: string, m:string, s: string}; 

if (currentLang === 'ru') {
  timeParam = {
    h: "ч",
    m: "мин",
    s: " сек"
  }
} else {
  timeParam = {
    h: "h",
    m: "min",
    s: " sec"
  }
}

const options = {
  month: 'short', day: 'numeric',
  hour: 'numeric', minute: 'numeric',
  hour12: false
};


export const getDate = (time: string) => {
  const date = new Date(time);
  return date.toLocaleString(currentLang, options);
}

export const getDuration = (time: number) => {
  let hours: dataTime = (time / 3600000) ^ 0;
  let minute: dataTime = ((time / 60000) ^ 0) - hours * 60;
  let seconds: dataTime = ((time / 1000) ^ 0) - minute * 60;

  hours >= 1 ?
    hours = `${hours} ${timeParam.h} ` :
    hours = "";
  
  minute >= 1 ? 
    minute = `${minute} ${timeParam.m} ` :
    minute = "";    

  if (hours === "" ) {
    if (seconds < 1) {
      return minute;
    }
    return minute + seconds + timeParam.s;
  }

  return hours + minute;
}