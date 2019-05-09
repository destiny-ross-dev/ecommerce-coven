import axios from "axios";

const initialState = {
  user: {},
  error: ""
};

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/auth/me")
      .then(user => {
        console.log(user.data);
        return user.data;
      })
      .catch(err => console.log(err))
  };
}

export default function userReducer(state = initialState, action) {
  // console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        error: "ERROR"
      };
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
