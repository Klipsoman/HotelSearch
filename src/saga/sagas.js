import { takeEvery, put, call, all } from "redux-saga/effects";
import { fetchHotels } from "../api/api";
import { REQ_HOTELS, putHotels } from "../redux/actions";
import { getDates } from "../helpers/helpers";

function* workerLoadHotels(action) {
  try {
    let city = action.payload ? action.payload.location : "Москва";
    let checkIn = action.payload ? action.payload.date : getDates().checkIn;
    let checkOut = action.payload ? action.payload.days : getDates().checkOut;
    const data = yield call(fetchHotels, city, checkIn, checkOut);
    yield put(putHotels(data));
  } catch (e) {
    console.log(e);
  }
}

function* watchLoadHotels() {
  yield takeEvery(REQ_HOTELS, workerLoadHotels);
}

export function* watchAll() {
  yield all([watchLoadHotels()]);
}
