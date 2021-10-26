import { getDates } from "../helpers/helpers";
import {
  FILTER,
  IS_CALENDAR_SHOW,
  PUT_SEARCH_CITY,
  PUT_SEARCH_DATE,
  PUT_SEARCH_DAYS,
  REC_HOTELS,
  TOGGLE_FAVORITE,
} from "./actions";

const initialState = {
  search: {
    location: "Москва",
    date: {
      year: getDates().year,
      month: getDates().month,
      day: getDates().day,
    },
    days: 1,
  },
  searchResults: [],
  favourites: [],
  isCalendarShow: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_SEARCH_CITY:
      if (action.payload.length === 0) {
        return {
          ...state,
          search: { ...state.search, location: "Москва" },
        };
      }
      return {
        ...state,
        search: { ...state.search, location: action.payload },
      };
    case PUT_SEARCH_DATE:
      if (action.payload.length === 0) {
        return {
          ...state,
          search: {
            ...state.search,
            date: {
              year: getDates().year,
              month: getDates().month,
              day: getDates().day,
            },
          },
        };
      }
      let date = action.payload.split("-");
      return {
        ...state,
        search: {
          ...state.search,
          date: {
            year: date[0],
            month: date[1],
            day: date[2],
          },
        },
      };
    case PUT_SEARCH_DAYS:
      if (action.payload.length < 1) {
        return {
          ...state,
          search: { ...state.search, days: 1 },
        };
      }
      return {
        ...state,
        search: { ...state.search, days: action.payload },
      };
    case IS_CALENDAR_SHOW:
      return {
        ...state,
        isCalendarShow: action.payload,
      };
    case REC_HOTELS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        favourites: state.favourites.includes(action.payload)
          ? state.favourites.filter((el) => el !== action.payload)
          : [action.payload, ...state.favourites],
      };
    case FILTER:
      if (action.payload.by === "rating") {
        let a = [...state.favourites];
        let b = [...state.favourites];
        a.sort((a, b) => b.stars - a.stars);
        b.sort((a, b) => a.stars - b.stars);
        return {
          ...state,
          favourites: action.payload.value === "up" ? a : b,
        };
      }
      if (action.payload.by === "price") {
        let a = [...state.favourites];
        let b = [...state.favourites];
        a.sort((a, b) => b.priceAvg - a.priceAvg);
        b.sort((a, b) => a.priceAvg - b.priceAvg);
        return {
          ...state,
          favourites: action.payload.value === "up" ? a : b,
        };
      }
      break;
    default:
      return state;
  }
};

// export const loadHotels = (payload) => ({
//   type: REQ_HOTELS,
//   payload,
// });

// export const putHotels = (payload) => ({
//   type: REC_HOTELS,
//   payload,
// });
// export const toggleFavorite = (payload) => ({
//   type: TOGGLE_FAVORITE,
//   payload,
// });
// export const putSearchCity = (payload) => ({
//   type: PUT_SEARCH_CITY,
//   payload,
// });
// export const putSearchDate = (payload) => ({
//   type: PUT_SEARCH_DATE,
//   payload,
// });
// export const putSearchDays = (payload) => ({
//   type: PUT_SEARCH_DAYS,
//   payload,
// });
// export const setCalendarShow = (payload) => ({
//   type: IS_CALENDAR_SHOW,
//   payload,
// });
// export const filtering = (payload) => ({
//   type: FILTER,
//   payload,
// });
