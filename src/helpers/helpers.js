export function getDates() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let checkIn = year + "-" + month + "-" + day;
  let checkOut = year + "-" + month + "-" + (day + 1);
  return {
    date,
    year,
    month,
    day,
    checkIn,
    checkOut,
  };
}

// format date like 2021-1-1 to 2021-01-01, 2021-12-33 to 2022-01-03 etc.
// need for api request
export function dateNormalize(date) {
  if(!date) return
  date = date.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];

  if (month > 9 && month < 13 && month != 2 && day > 9 && day < 31) {
    return date.join("-");
  }
  if (
    (month < 12 && day < 31 && month != 2 && month.length < 2) ||
    day.length < 2
  ) {
    month = month.length < 2 ? (month = "0" + month) : month;
    day = day.length < 2 ? (day = "0" + day) : day;
    return year + "-" + month + "-" + day;
  }

  let normDate = new Date(year, month - 1, day);
  let y = normDate.getFullYear();
  let m = +normDate.getMonth() + 1;
  let d = normDate.getDate();
  m = String(m).length < 2 ? "0" + m : m;
  d = String(d).length < 2 ? "0" + d : d;
  return y + "-" + m + "-" + d;
}


export function dayPlusOne(date){
    date = date.split("-");
    return date[0] + "-" + date[1] + "-" + (+date[2] + 1);
}
