import { monthList } from "./constant";

export const getDate = (time) => {
  const date = new Date(time);
  const day = date.getDate() || false;

  if (!day) return false;
  const month =  monthList[date.getMonth()];
  let hours = date.getHours();

  if (`${hours}`.length < 2) {
    hours = "0" + hours;
  }
  let minute = date.getMinutes();
  if (`${minute}`.length < 2) {
    minute = "0" + minute;
  }

  return `${day} ${month}, ${hours}:${minute}`
}

export const getDuration = (time) => {
  let hours = (time / 3600000) ^ 0;
  let minute = ((time / 60000) ^ 0) - hours * 60;
  let seconds = ((time / 1000) ^ 0) - minute * 60;

  hours > 1 ?
    hours = `${hours} ч ` :
    hours = "";
  
  minute > 1 ? 
    minute = `${minute} мин ` :
    minute = "";    

  if (hours < 1 ) {
    if (seconds < 1) {
      return minute;
    }
    return minute + seconds + "сек";
  }

  return hours + minute;
}