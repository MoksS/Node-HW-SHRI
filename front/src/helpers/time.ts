import { monthList } from "./constant";

type dataTime = string | number;

export const getDate = (time: string) => {
  const date = new Date(time);
  const day = date.getDate() || false;

  if (!day) return false;
  const month =  monthList[date.getMonth()];
  let hours: dataTime = date.getHours();

  if (`${hours}`.length < 2) {
    hours = "0" + hours;
  }
  let minute: dataTime = date.getMinutes();
  if (`${minute}`.length < 2) {
    minute = "0" + minute;
  }

  return `${day} ${month}, ${hours}:${minute}`
}

export const getDuration = (time: number) => {
  let hours: dataTime = (time / 3600000) ^ 0;
  let minute: dataTime = ((time / 60000) ^ 0) - hours * 60;
  let seconds: dataTime = ((time / 1000) ^ 0) - minute * 60;

  hours >= 1 ?
    hours = `${hours} ч ` :
    hours = "";
  
  minute >= 1 ? 
    minute = `${minute} мин ` :
    minute = "";    

  if (hours === "" ) {
    if (seconds < 1) {
      return minute;
    }
    return minute + seconds + "сек";
  }

  return hours + minute;
}