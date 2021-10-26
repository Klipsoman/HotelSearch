const SET_AUTH = "SET_AUTH";

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      if (action.payload === true) {
        localStorage.setItem("auth", "true");
      }
      if (action.payload === false) {
        localStorage.removeItem("auth");
      }
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload,
});
