import { getDates, dateNormalize, dayPlusOne } from "../helpers/helpers";

export function fetchHotels(location = 'moscow', checkIn = getDates().checkIn, checkOut = getDates().checkOut ){
    if(location.trim() === '') location = 'moscow';
    if(checkIn.trim() === '') checkIn = getDates().checkIn;
    if(checkOut.trim() === '') checkOut = getDates().checkOut;
    if(checkOut.length <= 3) checkOut = checkIn.split('-')[0] + '-' + checkIn.split('-')[1] + '-' + (+checkIn.split('-')[2] + +checkOut);
    if(checkIn > checkOut) checkOut = dayPlusOne(checkIn);
    checkIn = dateNormalize(checkIn);
    checkOut = dateNormalize(checkOut);
    return fetch(`http://engine.hotellook.com/api/v2/cache.json?token=d90bb770ade731a175bb6383cd79e6cd&currency=rub&location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&lang=ru&limit=8`)
    .then(res=>res.json())
}