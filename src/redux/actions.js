export const REC_HOTELS = "PUT_HOTELS";
export const REQ_HOTELS = "LOAD_HOTELS";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const PUT_SEARCH_CITY = "PUT_SEARCH_CITY";
export const PUT_SEARCH_DATE = "PUT_SEARCH_DATE";
export const PUT_SEARCH_DAYS = "PUT_SEARCH_DAYS";
export const IS_CALENDAR_SHOW = "IS_CALENDAR_SHOW ";
export const FILTER = "FILTER";

export const loadHotels = (payload) => ({
  type: REQ_HOTELS,
  payload,
});

export const putHotels = (payload) => ({
  type: REC_HOTELS,
  payload,
});
export const toggleFavorite = (payload) => ({
  type: TOGGLE_FAVORITE,
  payload,
});
export const putSearchCity = (payload) => ({
  type: PUT_SEARCH_CITY,
  payload,
});
export const putSearchDate = (payload) => ({
  type: PUT_SEARCH_DATE,
  payload,
});
export const putSearchDays = (payload) => ({
  type: PUT_SEARCH_DAYS,
  payload,
});
export const setCalendarShow = (payload) => ({
  type: IS_CALENDAR_SHOW,
  payload,
});
export const filtering = (payload) => ({
  type: FILTER,
  payload,
});
